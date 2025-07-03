import { allEpisodes } from '@/server/data/episodes/episodes.data';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface EpisodeStats {
  playCount: number;
  isCompleted: boolean;
  isFavorite: boolean;
  firstPlayedAt?: string;
  lastPlayedAt?: string;
  completedAt?: string;
}

export interface ListeningStats {
  episodesCompleted: number;
  totalPlayEvents: number;
  mostListenedGuest: string | null;
  favoriteEpisode: any | null;
  topTags: string[];
  achievements: string[];
  streakDays: number;
}

interface AnalyticsState {
  episodeStats: Record<string, EpisodeStats>;
  lastActiveDate: string | null;

  // Actions
  trackEpisodePlay: (episodeId: string) => void;
  markEpisodeCompleted: (episodeId: string) => void;
  toggleEpisodeFavorite: (episodeId: string) => void;
  getWrappedStats: () => ListeningStats;
  clearAllData: () => void;
}

const generateAchievements = (episodeCount: number, totalPlays: number, topTags: string[]): string[] => {
  const achievements = [];

  if (episodeCount >= 5) {
    achievements.push('🎧 Serial Listener - Completed 5+ episodes');
  }

  if (totalPlays >= 20) {
    achievements.push('🔥 Power Player - 20+ play sessions');
  }

  if (episodeCount >= 10) {
    achievements.push('🚀 Power User - Double digit episodes!');
  }

  if (topTags.includes('AI') || topTags.includes('მანქანური სწავლება')) {
    achievements.push('🤖 AI Enthusiast - Stayed ahead of the curve');
  }

  if (topTags.includes('მენტალური ჯანმრთელობა') || topTags.includes('ბარნაუთი')) {
    achievements.push('💚 Wellness Warrior - Prioritized mental health');
  }

  if (achievements.length === 0) {
    achievements.push('🌱 Getting Started - Welcome to your dev journey!');
  }

  return achievements;
};

export const useAnalyticsStore = create<AnalyticsState>()(
  persist(
    (set, get) => ({
      episodeStats: {},
      lastActiveDate: null,

      trackEpisodePlay: (episodeId: string) => {
        const now = new Date().toISOString();
        set((state) => ({
          episodeStats: {
            ...state.episodeStats,
            [episodeId]: {
              ...state.episodeStats[episodeId],
              playCount: (state.episodeStats[episodeId]?.playCount || 0) + 1,
              firstPlayedAt: state.episodeStats[episodeId]?.firstPlayedAt || now,
              lastPlayedAt: now,
            },
          },
          lastActiveDate: now,
        }));
      },

      markEpisodeCompleted: (episodeId: string) => {
        const now = new Date().toISOString();
        set((state) => ({
          episodeStats: {
            ...state.episodeStats,
            [episodeId]: {
              ...state.episodeStats[episodeId],
              playCount: state.episodeStats[episodeId]?.playCount || 1,
              isCompleted: true,
              completedAt: now,
              firstPlayedAt: state.episodeStats[episodeId]?.firstPlayedAt || now,
              lastPlayedAt: now,
            },
          },
          lastActiveDate: now,
        }));
      },

      toggleEpisodeFavorite: (episodeId: string) => {
        set((state) => ({
          episodeStats: {
            ...state.episodeStats,
            [episodeId]: {
              ...state.episodeStats[episodeId],
              playCount: state.episodeStats[episodeId]?.playCount || 0,
              isFavorite: !state.episodeStats[episodeId]?.isFavorite,
            },
          },
        }));
      },

      getWrappedStats: (): ListeningStats => {
        const state = get();
        const stats = state.episodeStats;

        // Calculate completed episodes
        const completedEpisodes = Object.entries(stats).filter(([, stat]) => stat.isCompleted);
        const episodesCompleted = completedEpisodes.length;

        // Calculate total play events
        const totalPlayEvents = Object.values(stats).reduce((total, stat) => total + stat.playCount, 0);

        // Find most listened guest
        const guestCounts: Record<string, number> = {};
        Object.entries(stats).forEach(([episodeId, stat]) => {
          const episode = allEpisodes.find((ep) => ep.id === episodeId);
          if (episode?.guest && stat.playCount > 0) {
            guestCounts[episode.guest] = (guestCounts[episode.guest] || 0) + stat.playCount;
          }
        });

        const mostListenedGuest =
          Object.keys(guestCounts).length > 0 ? Object.keys(guestCounts).reduce((a, b) => (guestCounts[a] > guestCounts[b] ? a : b)) : null;

        // Find favorite episode
        const favoriteEpisodes = Object.entries(stats).filter(([, stat]) => stat.isFavorite);
        const favoriteEpisode =
          favoriteEpisodes.length > 0
            ? allEpisodes.find((ep) => ep.id === favoriteEpisodes[0][0])
            : completedEpisodes.length > 0
              ? allEpisodes.find((ep) => ep.id === completedEpisodes[completedEpisodes.length - 1][0])
              : null;

        // Calculate top tags
        const tagCounts: Record<string, number> = {};
        Object.entries(stats).forEach(([episodeId, stat]) => {
          const episode = allEpisodes.find((ep) => ep.id === episodeId);
          if (episode && stat.playCount > 0) {
            episode.tags?.forEach((tag) => {
              tagCounts[tag] = (tagCounts[tag] || 0) + stat.playCount;
            });
          }
        });

        const topTags = Object.entries(tagCounts)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 3)
          .map(([tag]) => tag);

        // Generate achievements
        const achievements = generateAchievements(episodesCompleted, totalPlayEvents, topTags);

        // Calculate actual active days based on unique dates
        const uniqueDates = new Set(
          Object.values(stats)
            .filter((stat) => stat.lastPlayedAt)
            .map((stat) => new Date(stat.lastPlayedAt!).toDateString()),
        );
        const streakDays = uniqueDates.size;

        return {
          episodesCompleted,
          totalPlayEvents,
          mostListenedGuest,
          favoriteEpisode,
          topTags,
          achievements,
          streakDays,
        };
      },

      clearAllData: () => {
        set({
          episodeStats: {},
          lastActiveDate: null,
        });
      },
    }),
    {
      name: 'devtherapy-analytics',
    },
  ),
);

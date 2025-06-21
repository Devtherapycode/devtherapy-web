import { allEpisodes } from '@/server/data/episodes/episodes.data';

export interface ListeningStats {
  episodesCompleted: number;
  totalTimeListened: number;
  mostListenedGuest: string | null;
  favoriteEpisode: any | null;
  topTags: string[];
  achievements: string[];
  streakDays: number;
}

export const getWrappedData = (): ListeningStats => {
  // Get data from localStorage
  const completedEpisodes = JSON.parse(localStorage.getItem('completedEpisodes') || '[]');
  const listeningTime = JSON.parse(localStorage.getItem('listeningTime') || '{}');
  const favoriteEpisodes = JSON.parse(localStorage.getItem('favoriteEpisodes') || '[]');
  const lastListenDate = localStorage.getItem('lastListenDate');

  // Calculate total listening time (estimate based on episode durations)
  const totalTimeListened = completedEpisodes.reduce((total: number, episodeId: string) => {
    const episode = allEpisodes.find((ep) => ep.id === episodeId);
    return total + (episode?.duration || 45); // Default 45 min if no duration
  }, 0);

  // Find most listened guest
  const guestCounts: Record<string, number> = {};
  completedEpisodes.forEach((episodeId: string) => {
    const episode = allEpisodes.find((ep) => ep.id === episodeId);
    if (episode?.guest) {
      guestCounts[episode.guest] = (guestCounts[episode.guest] || 0) + 1;
    }
  });

  const mostListenedGuest = Object.keys(guestCounts).reduce((a, b) => (guestCounts[a] > guestCounts[b] ? a : b), Object.keys(guestCounts)[0] || null);

  // Find favorite episode (most replayed or marked as favorite)
  const favoriteEpisode =
    favoriteEpisodes.length > 0
      ? allEpisodes.find((ep) => ep.id === favoriteEpisodes[0])
      : completedEpisodes.length > 0
        ? allEpisodes.find((ep) => ep.id === completedEpisodes[completedEpisodes.length - 1])
        : null;

  // Calculate top tags
  const tagCounts: Record<string, number> = {};
  completedEpisodes.forEach((episodeId: string) => {
    const episode = allEpisodes.find((ep) => ep.id === episodeId);
    episode?.tags?.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  const topTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([tag]) => tag);

  // Generate achievements
  const achievements = generateAchievements(completedEpisodes.length, totalTimeListened, topTags);

  // Calculate streak (simplified - just checking if listened recently)
  const streakDays = lastListenDate && new Date().getTime() - new Date(lastListenDate).getTime() < 7 * 24 * 60 * 60 * 1000 ? 7 : 0;

  return {
    episodesCompleted: completedEpisodes.length,
    totalTimeListened: Math.round(totalTimeListened / 60), // Convert to hours
    mostListenedGuest,
    favoriteEpisode,
    topTags,
    achievements,
    streakDays,
  };
};

const generateAchievements = (episodeCount: number, totalTime: number, topTags: string[]): string[] => {
  const achievements = [];

  if (episodeCount >= 5) {
    achievements.push('🎧 Serial Listener - Completed 5+ episodes');
  }

  if (totalTime >= 180) {
    // 3+ hours
    achievements.push('🧠 Deep Diver - 3+ hours of dev therapy');
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

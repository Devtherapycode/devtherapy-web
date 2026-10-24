import { allEpisodes } from '@/server/data/episodes/episodes.data';
import { EpisodeBasicInfo } from '@/server/data/episodes/episodes.types';
import { youtubeStats } from '@/server/data/episodes/youtube-stats';

// Titles look like "Devtherapy #34 — Waska Chaduneli | Building Klipy, Startup Risks, Scaling Infrastructure".
const NUMBER = /#(\d+)/;
const SEPARATOR = /\s[–—-]\s/;

export const episodeNumber = (episode: EpisodeBasicInfo): number | null => {
  const match = episode.title.match(NUMBER);
  return match ? Number(match[1]) : null;
};

export const episodeSeason = (episode: EpisodeBasicInfo) => episode.season ?? 1;

/** "CH 34" for Season 1, "S2 · CH 01" for Season 2. */
export const episodeChannel = (episode: EpisodeBasicInfo) => {
  if (episodeSeason(episode) === 2) return 'S2 · CH 01';
  const number = episodeNumber(episode);
  return number === null ? 'CH —' : `CH ${String(number).padStart(2, '0')}`;
};

/** The part of the title after the number: the guest's name, or the episode's own title. */
export const episodeName = (episode: EpisodeBasicInfo) => {
  const [head] = episode.title.split('|');
  const parts = head.split(SEPARATOR);
  return (parts.length > 1 ? parts.slice(1).join(' – ') : head).replace('🚀', '').trim();
};

/** The topics listed after "|" in the title. */
export const episodeTopics = (episode: EpisodeBasicInfo) => {
  const [, topics] = episode.title.split('|');
  if (!topics) return [];
  return topics
    .split(/,|&/)
    .map((topic) => topic.trim())
    .filter(Boolean);
};

export const episodeViews = (episode: EpisodeBasicInfo) => youtubeStats[episode.youtubeId]?.views ?? 0;

export const formatViews = (views: number) => (views >= 1000 ? `${(views / 1000).toFixed(views >= 10000 ? 0 : 1).replace('.0', '')}K views` : `${views} views`);

/** "1:35:44" from the snapshot's exact duration, or "96 min" from the episode's rounded minutes. */
export const episodeDuration = (episode: EpisodeBasicInfo) => {
  const seconds = youtubeStats[episode.youtubeId]?.durationSeconds;
  if (!seconds) return `${episode.duration} min`;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return h ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
};

export const thumbnailUrl = (episode: EpisodeBasicInfo, quality: 'maxresdefault' | 'hqdefault' = 'maxresdefault') =>
  `https://i.ytimg.com/vi/${episode.youtubeId}/${quality}.jpg`;

export const youtubeUrl = (episode: EpisodeBasicInfo, seconds?: number) =>
  `https://www.youtube.com/watch?v=${episode.youtubeId}${seconds ? `&t=${seconds}` : ''}`;

const byNumber = (a: EpisodeBasicInfo, b: EpisodeBasicInfo) => (episodeNumber(a) ?? 0) - (episodeNumber(b) ?? 0);

export const seasonOne = allEpisodes.filter((episode) => episodeSeason(episode) === 1).sort(byNumber);
export const seasonTwo = allEpisodes.filter((episode) => episodeSeason(episode) === 2);
export const newestFirst = [...allEpisodes].sort((a, b) => b.date.localeCompare(a.date));
export const topByViews = [...allEpisodes].sort((a, b) => episodeViews(b) - episodeViews(a));

/** Topic rails: episodes whose tags or title mention any of the words. */
const about = (...words: string[]) =>
  newestFirst.filter((episode) => {
    const haystack = `${episode.title} ${episode.tags.join(' ')}`.toLowerCase();
    return words.some((word) => haystack.includes(word));
  });

export const topicRails = [
  { title: 'Graphics & game engines', episodes: about('graphics', 'ray tracing', 'gpu', 'game', 'gta', 'unity', '3d', 'xr', 'virtual reality') },
  { title: 'DevOps & cloud', episodes: about('devops', 'kubernetes', 'cloud', 'aws', 'terraform', 'linux', 'infrastructure', 'observability') },
  { title: 'Leadership & careers', episodes: about('leadership', 'manager', 'career', 'cto', 'cio', 'job market', 'hiring') },
  { title: 'Mind & wellbeing', episodes: about('mental health', 'burnout', 'adhd', 'imposter', 'work-life', 'balance') },
];

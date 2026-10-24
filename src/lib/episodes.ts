import { allEpisodes } from '@/server/data/episodes/episodes.data';
import { EpisodeBasicInfo } from '@/server/data/episodes/episodes.types';
import { youtubeStats } from '@/server/data/episodes/youtube-stats';
import { guests } from '@/server/data/guests/guests.data';

// Titles look like "Devtherapy #34 — Waska Chaduneli | Building Klipy, Startup Risks, Scaling Infrastructure".
const NUMBER = /#(\d+)/;
const SEPARATOR = /\s[–—-]\s/;

export const episodeNumber = (episode: EpisodeBasicInfo): number | null => {
  const match = episode.title.match(NUMBER);
  return match ? Number(match[1]) : null;
};

export const episodeSeason = (episode: EpisodeBasicInfo) => episode.season ?? 1;

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

export const formatTimestamp = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return h ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
};

/** "1:35:44" from the snapshot's exact duration, or "96 min" from the episode's rounded minutes. */
export const episodeDuration = (episode: EpisodeBasicInfo) => {
  const seconds = youtubeStats[episode.youtubeId]?.durationSeconds;
  return seconds ? formatTimestamp(seconds) : `${episode.duration} min`;
};

export const thumbnailUrl = (episode: EpisodeBasicInfo, quality: 'maxresdefault' | 'hqdefault' = 'maxresdefault') =>
  `https://i.ytimg.com/vi/${episode.youtubeId}/${quality}.jpg`;

/** A frame from the middle of the episode, without the title text that thumbnails carry. */
export const frameUrl = (episode: EpisodeBasicInfo) => `https://i.ytimg.com/vi/${episode.youtubeId}/maxres2.jpg`;

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

/** "Season 2 premiere", "Season 1 finale" or "Season 1". */
export const seasonLabel = (episode: EpisodeBasicInfo) => {
  if (episode.slug === seasonTwo[0]?.slug) return 'Season 2 premiere';
  if (episode.slug === seasonOne[seasonOne.length - 1]?.slug) return 'Season 1 finale';
  return `Season ${episodeSeason(episode)}`;
};

export const durationSeconds = (episode: EpisodeBasicInfo) => youtubeStats[episode.youtubeId]?.durationSeconds ?? episode.duration * 60;

export const toSeconds = (timestamp: string) => timestamp.split(':').reduce((total, part) => total * 60 + Number(part), 0);

// Chapter lines in descriptions: "0:00 – 1:14 — title", "00:00 – 01:29 – title", "0:00–3:31 – title", "6:29 title".
export const CHAPTER_LINE = /^\s*(\d{1,2}:\d{2}(?::\d{2})?)\s*(?:[–—-]\s*\d{1,2}:\d{2}(?::\d{2})?\s*)?(?:[–—-]\s*)?(\S.*)$/;

export type Chapter = { start: number; length: number; title: string };

export const episodeChapters = (episode: EpisodeBasicInfo & { fullDescription: string }): Chapter[] => {
  const starts = episode.fullDescription
    .split('\n')
    .map((line) => line.match(CHAPTER_LINE))
    .filter(Boolean)
    .map((match) => ({ start: toSeconds(match[1]), title: match[2].trim() }));
  if (starts.length < 2) return [];
  const end = durationSeconds(episode);
  return starts.map((chapter, index) => ({ ...chapter, length: Math.max((starts[index + 1]?.start ?? end) - chapter.start, 0) }));
};

/** Guests with a profile who appeared in this episode. */
export const episodeGuests = (episode: EpisodeBasicInfo) =>
  guests.filter((guest) =>
    typeof guest.episode === 'string' ? guest.episode === `Episode #${episodeNumber(episode)}` : guest.episode.slug === episode.slug,
  );

/** Episodes sharing the most tags, then the most watched. */
export const moreLikeThis = (episode: EpisodeBasicInfo, count = 6) => {
  const shared = (other: EpisodeBasicInfo) => other.tags.filter((tag) => episode.tags.includes(tag)).length;
  return topByViews
    .filter((other) => other.slug !== episode.slug)
    .sort((a, b) => shared(b) - shared(a))
    .slice(0, count);
};

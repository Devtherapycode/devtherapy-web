export type EpisodeBasicInfo = {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: number;
  tags: string[];
  slug: string;
  youtubeId: string;
  guest?: string;
};

export type Episode = EpisodeBasicInfo & {
  fullDescription: string;
};

// New type for episodes fetched from YouTube with custom fields
export type EpisodeData = {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: number;
  tags: string[];
  slug: string;
  youtubeId: string;
  guest: string;
  // Custom fields
  customTags?: string[];
  guestId?: string;
  highlights?: string[];
  notes?: string;
  featured?: boolean;
  episodeNumber?: number;
};

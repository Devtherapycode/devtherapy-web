import { EpisodeBasicInfo } from '../episodes/episodes.types';

export type GuestBasicInfo = {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  episode: EpisodeBasicInfo | string;
  tags: string[];
};

export type GuestData = {
  tagline?: string;
  description: string;
  quote?: string;
  youtubeUrl?: string;
  linkedin: string;
} & GuestBasicInfo;

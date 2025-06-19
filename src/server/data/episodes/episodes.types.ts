export enum EpisodeIdEnum {
  DAE_IYOS_NATELI = 'dae-iyos-nateli',
}

export type EpisodeBasicInfo = {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  tags: string[];
  slug: EpisodeIdEnum;
  youtubeId: string;
};

export type Episode = EpisodeBasicInfo & {
  fullDescription: string;
};

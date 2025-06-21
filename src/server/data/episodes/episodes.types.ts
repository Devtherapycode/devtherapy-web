export enum EpisodeIdEnum {
  DAE_IYOS_NATELI = 'dae-iyos-nateli',
  WEB_EVOLUTION_TOPTAL_ENTUZI_JOB_MARKET = 'web-evolution-toptal-entuzi-job-market',
}

export type EpisodeBasicInfo = {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: number;
  tags: string[];
  slug: EpisodeIdEnum;
  youtubeId: string;
  guest?: string;
};

export type Episode = EpisodeBasicInfo & {
  fullDescription: string;
};

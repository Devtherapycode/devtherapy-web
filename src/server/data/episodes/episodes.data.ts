import { firstEpisodeBasicInfo, firstEpisodeData } from './1';
import { secondEpisodeBasicInfo, secondEpisodeData } from './2';
import { Episode, EpisodeBasicInfo, EpisodeIdEnum } from './episodes.types';

export const allEpisodes: EpisodeBasicInfo[] = [secondEpisodeBasicInfo, firstEpisodeBasicInfo];

export const episodes: Record<EpisodeIdEnum, Episode> = {
  [EpisodeIdEnum.DAE_IYOS_NATELI]: firstEpisodeData,
  [EpisodeIdEnum.WEB_EVOLUTION_TOPTAL_ENTUZI_JOB_MARKET]: secondEpisodeData,
};

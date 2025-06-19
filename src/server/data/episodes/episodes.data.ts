import { firstEpisodeBasicInfo, firstEpisodeData } from './1';
import { Episode, EpisodeBasicInfo, EpisodeIdEnum } from './episodes.types';

export const allEpisodes: EpisodeBasicInfo[] = [firstEpisodeBasicInfo];

export const episodes: Record<EpisodeIdEnum, Episode> = {
  [EpisodeIdEnum.DAE_IYOS_NATELI]: firstEpisodeData,
};

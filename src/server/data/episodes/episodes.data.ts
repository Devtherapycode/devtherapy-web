import { firstEpisodeBasicInfo, firstEpisodeData } from './1';
import { tenthEpisodeBasicInfo, tenthEpisodeData } from './10';
import { eleventhEpisodeBasicInfo, eleventhEpisodeData } from './11';
import { twelfthEpisodeBasicInfo, twelfthEpisodeData } from './12';
import { thirteenthEpisodeBasicInfo, thirteenthEpisodeData } from './13';
import { fourteenthEpisodeBasicInfo, fourteenthEpisodeData } from './14';
import { fifteenthEpisodeBasicInfo, fifteenthEpisodeData } from './15';
import { sixteenthEpisodeBasicInfo, sixteenthEpisodeData } from './16';
import { seventeenthEpisodeBasicInfo, seventeenthEpisodeData } from './17';
import { eighteenthEpisodeBasicInfo, eighteenthEpisodeData } from './18';
import { nineteenthEpisodeBasicInfo, nineteenthEpisodeData } from './19';
import { twentiethEpisodeBasicInfo, twentiethEpisodeData } from './20';
import { secondEpisodeBasicInfo, secondEpisodeData } from './2';
import { thirdEpisodeBasicInfo, thirdEpisodeData } from './3';
import { fourthEpisodeBasicInfo, fourthEpisodeData } from './4';
import { fifthEpisodeBasicInfo, fifthEpisodeData } from './5';
import { sixthEpisodeBasicInfo, sixthEpisodeData } from './6';
import { seventhEpisodeBasicInfo, seventhEpisodeData } from './7';
import { eighthEpisodeBasicInfo, eighthEpisodeData } from './8';
import { ninthEpisodeBasicInfo, ninthEpisodeData } from './9';
import { Episode, EpisodeBasicInfo, EpisodeIdEnum } from './episodes.types';

export const allEpisodes: EpisodeBasicInfo[] = [
  firstEpisodeBasicInfo,
  secondEpisodeBasicInfo,
  thirdEpisodeBasicInfo,
  fourthEpisodeBasicInfo,
  fifthEpisodeBasicInfo,
  sixthEpisodeBasicInfo,
  seventhEpisodeBasicInfo,
  eighthEpisodeBasicInfo,
  ninthEpisodeBasicInfo,
  tenthEpisodeBasicInfo,
  eleventhEpisodeBasicInfo,
  twelfthEpisodeBasicInfo,
  thirteenthEpisodeBasicInfo,
  fourteenthEpisodeBasicInfo,
  fifteenthEpisodeBasicInfo,
  sixteenthEpisodeBasicInfo,
  seventeenthEpisodeBasicInfo,
  eighteenthEpisodeBasicInfo,
  nineteenthEpisodeBasicInfo,
  twentiethEpisodeBasicInfo
];

export const episodes: Record<EpisodeIdEnum, Episode> = {
  [EpisodeIdEnum.DAE_IYOS_NATELI]: firstEpisodeData,
  [EpisodeIdEnum.LEVAN_LOTUASHVILI]: secondEpisodeData,
  [EpisodeIdEnum.ARCHIL_VARSHANIDZE]: thirdEpisodeData,
  [EpisodeIdEnum.TATO_KUTALIA]: fourthEpisodeData,
  [EpisodeIdEnum.GIORGI_ABELASHVILI]: fifthEpisodeData,
  [EpisodeIdEnum.NIKA_OTIASHVILI]: sixthEpisodeData,
  [EpisodeIdEnum.ZURA_ABELASHVILI]: seventhEpisodeData,
  [EpisodeIdEnum.Q_A]: eighthEpisodeData,
  [EpisodeIdEnum.GIORGI_DALAKISHVILI]: ninthEpisodeData,
  [EpisodeIdEnum.OTO_LOLUA]: tenthEpisodeData,
  [EpisodeIdEnum.GIORGI_MACHITIDZE]: eleventhEpisodeData,
  [EpisodeIdEnum.TORNIKE_RAZMADZE]: twelfthEpisodeData,
  [EpisodeIdEnum.NIKA_GIGASHVILI]: thirteenthEpisodeData,
  [EpisodeIdEnum.NATIA_KUKHILAVA]: fourteenthEpisodeData,
  [EpisodeIdEnum.GIORGI_BAGDAVADZE]: fifteenthEpisodeData,
  [EpisodeIdEnum.DAVID_BUMBEISHVILI]: sixteenthEpisodeData,
  [EpisodeIdEnum.IRAKLI_KOKRASHVILI]: seventeenthEpisodeData,
  [EpisodeIdEnum.LEVAN_MAMULASHVILI]: eighteenthEpisodeData,
  [EpisodeIdEnum.IRAKLI_KOIAVA]: nineteenthEpisodeData,
  [EpisodeIdEnum.IRAKLI_GABISONIA]: twentiethEpisodeData,
};

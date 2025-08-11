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
import { secondEpisodeBasicInfo, secondEpisodeData } from './2';
import { twentiethEpisodeBasicInfo, twentiethEpisodeData } from './20';
import { twentyFirstEpisodeBasicInfo, twentyFirstEpisodeData } from './21';
import { twentySecondEpisodeBasicInfo, twentySecondEpisodeData } from './22';
import { thirdEpisodeBasicInfo, thirdEpisodeData } from './3';
import { fourthEpisodeBasicInfo, fourthEpisodeData } from './4';
import { fifthEpisodeBasicInfo, fifthEpisodeData } from './5';
import { sixthEpisodeBasicInfo, sixthEpisodeData } from './6';
import { seventhEpisodeBasicInfo, seventhEpisodeData } from './7';
import { eighthEpisodeBasicInfo, eighthEpisodeData } from './8';
import { ninthEpisodeBasicInfo, ninthEpisodeData } from './9';
import { Episode, EpisodeBasicInfo, EpisodeSlugType } from './episodes.types';

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
  twentiethEpisodeBasicInfo,
  twentyFirstEpisodeBasicInfo,
  twentySecondEpisodeBasicInfo,
];

export const episodes: Record<EpisodeSlugType, Episode> = {
  'dae-iyos-nateli': firstEpisodeData,
  'levan-lotuashvili': secondEpisodeData,
  'archil-varshanidze': thirdEpisodeData,
  'tato-kutalia': fourthEpisodeData,
  'giorgi-abelashvili': fifthEpisodeData,
  'nika-otiashvili': sixthEpisodeData,
  'zura-abelashvili': seventhEpisodeData,
  'q-a': eighthEpisodeData,
  'giorgi-dalakishvili': ninthEpisodeData,
  'oto-lolua': tenthEpisodeData,
  'giorgi-machitidze': eleventhEpisodeData,
  'tornike-razmadze': twelfthEpisodeData,
  'nika-gigashvili': thirteenthEpisodeData,
  'natia-kukhilava': fourteenthEpisodeData,
  'giorgi-bagdavadze': fifteenthEpisodeData,
  'david-bumbeishvili': sixteenthEpisodeData,
  'irakli-kokrashvili': seventeenthEpisodeData,
  'levan-mamulashvili': eighteenthEpisodeData,
  'irakli-koiava': nineteenthEpisodeData,
  'irakli-gabisonia': twentiethEpisodeData,
  'ioseb-dzmanashvili': twentyFirstEpisodeData,
  'irakli-safareli': twentySecondEpisodeData,
};

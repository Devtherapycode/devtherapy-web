import { EpisodeBasicInfo } from '../episodes/episodes.types';
import { abelaBasicInfo, abelaData } from './abela';
import { dalakaBasicInfo, dalakaData } from './dalaka';
import { koiavaBasicInfo, koiavaData } from './koiava';
import { kokraBasicInfo, kokraData } from './kokra';
import { lotuashviliBasicInfo, lotuashviliData } from './lotuashvili';
import { machitaBasicInfo, machitaData } from './machita';
import { maineraBasicInfo, maineraData } from './mainera';
import { notgiorgiBasicInfo, notgiorgiData } from './notgiorgi';
import { zubaBasicInfo, zubaData } from './zuba';

type GuestBasicInfo = {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  episode: EpisodeBasicInfo | string;
  tags: string[];
};

export const guests: GuestBasicInfo[] = [
  zubaBasicInfo,
  maineraBasicInfo,
  abelaBasicInfo,
  kokraBasicInfo,
  dalakaBasicInfo,
  notgiorgiBasicInfo,
  machitaBasicInfo,
  koiavaBasicInfo,
  lotuashviliBasicInfo,
];

type GuestData = {
  tagline?: string;
  description: string;
  quote?: string;
  youtubeUrl?: string;
  linkedin: string;
} & GuestBasicInfo;

export const guestData: Record<string, GuestData> = {
  zuba: zubaData,
  mainera: maineraData,
  abela: abelaData,
  kokra: kokraData,
  dalaka: dalakaData,
  notgiorgi: notgiorgiData,
  machita: machitaData,
  koiava: koiavaData,
  lotuashvili: lotuashviliData,
};

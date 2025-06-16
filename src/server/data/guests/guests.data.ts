import { abelaBasicInfo, abelaData } from './abela';
import { dalakaBasicInfo, dalakaData } from './dalaka';
import { kokraBasicInfo, kokraData } from './kokra';
import { maineraBasicInfo, maineraData } from './mainera';
import { zubaBasicInfo, zubaData } from './zuba';

type GuestBasicInfo = {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  episode: string;
  tags: string[];
};

export const guests: GuestBasicInfo[] = [zubaBasicInfo, maineraBasicInfo, abelaBasicInfo, kokraBasicInfo, dalakaBasicInfo];

type GuestData = {
  tagline: string;
  description: string;
  quote: string;
  youtubeUrl: string;
  linkedin: string;
} & GuestBasicInfo;

export const guestData: Record<string, GuestData> = {
  zuba: zubaData,
  mainera: maineraData,
  abela: abelaData,
  kokra: kokraData,
  dalaka: dalakaData,
};

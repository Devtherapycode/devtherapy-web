import { abelaBasicInfo, abelaData } from './abela';
import { dalakaBasicInfo, dalakaData } from './dalaka';
import { GuestBasicInfo, GuestData } from './guests.types';
import { koiavaBasicInfo, koiavaData } from './koiava';
import { kokraBasicInfo, kokraData } from './kokra';
import { lotuashviliBasicInfo, lotuashviliData } from './lotuashvili';
import { machitaBasicInfo, machitaData } from './machita';
import { maineraBasicInfo, maineraData } from './mainera';
import { notgiorgiBasicInfo, notgiorgiData } from './notgiorgi';
import { zubaBasicInfo, zubaData } from './zuba';

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

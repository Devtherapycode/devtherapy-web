export enum EpisodeIdEnum {
  DAE_IYOS_NATELI = 'dae-iyos-nateli',
  LEVAN_LOTUASHVILI = 'levan-lotuashvili',
  ARCHIL_VARSHANIDZE = 'archil-varshanidze',
  TATO_KUTALIA = 'tato-kutalia',
  GIORGI_ABELASHVILI = 'giorgi-abelashvili',
  NIKA_OTIASHVILI = 'nika-otiashvili',
  ZURA_ABELASHVILI = 'zura-abelashvili',
  Q_A = 'q-a',
  GIORGI_DALAKISHVILI = 'giorgi-dalakishvili',
  OTO_LOLUA = 'oto-lolua',
  GIORGI_MACHITIDZE = 'giorgi-machitidze',
  TORNIKE_RAZMADZE = 'tornike-razmadze',
  NIKA_GIGASHVILI = 'nika-gigashvili',
  NATIA_KUKHILAVA = 'natia-kukhilava',
  GIORGI_BAGDAVADZE = 'giorgi-bagdavadze',
  DAVID_BUMBEISHVILI = 'david-bumbeishvili',
  IRAKLI_KOKRASHVILI = 'irakli-kokrashvili',
  LEVAN_MAMULASHVILI = 'levan-mamulashvili',
  IRAKLI_KOIAVA = 'irakli-koiava',
  IRAKLI_GABISONIA = 'irakli-gabisonia',
}


export type EpisodeBasicInfo = {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: number;
  tags: string[];
  slug: string;
  youtubeId: string;
  guest?: string;
};

export type Episode = EpisodeBasicInfo & {
  fullDescription: string;
};

// New type for episodes fetched from YouTube with custom fields
export type EpisodeData = {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: number;
  tags: string[];
  slug: string;
  youtubeId: string;
  guest: string;
  // Custom fields
  customTags?: string[];
  guestId?: string;
  highlights?: string[];
  notes?: string;
  featured?: boolean;
  episodeNumber?: number;
};

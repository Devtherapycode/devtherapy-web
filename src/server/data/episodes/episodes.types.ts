import { Quiz } from '../quizzes/quizzes.types';

export type EpisodeSlugType =
  | 'dae-iyos-nateli'
  | 'levan-lotuashvili'
  | 'archil-varshanidze'
  | 'tato-kutalia'
  | 'giorgi-abelashvili'
  | 'nika-otiashvili'
  | 'zura-abelashvili'
  | 'q-a'
  | 'giorgi-dalakishvili'
  | 'oto-lolua'
  | 'giorgi-machitidze'
  | 'tornike-razmadze'
  | 'nika-gigashvili'
  | 'natia-kukhilava'
  | 'giorgi-bagdavadze'
  | 'david-bumbeishvili'
  | 'irakli-kokrashvili'
  | 'levan-mamulashvili'
  | 'irakli-koiava'
  | 'irakli-gabisonia'
  | 'ioseb-dzmanashvili'
  | 'irakli-safareli'
  | 'beka-modebadze';

export type EpisodeBasicInfo = {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: number;
  tags: string[];
  slug: EpisodeSlugType;
  youtubeId: string;
  guest?: string;
};

export type Episode = EpisodeBasicInfo & {
  fullDescription: string;
  quizzes: Quiz[];
};

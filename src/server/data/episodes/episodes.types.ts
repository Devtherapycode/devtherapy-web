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
  | 'beka-modebadze'
  | 'giorgi-mamaladze'
  | 'devtherapy-25-qa'
  | 'nika-nikabadze'
  | 'levan-velijanashvili'
  | 'giorgi-keratishvili'
  | 'tata-imnaishvili'
  | 'yuri-semenikhin'
  | 'devtherapy-31-review'
  | 'irakli-butskhrikidze'
  | 'tako-abramashvili'
  | 'waska-chaduneli'
  | 'we-back';

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
  /** Season 1 when left out. */
  season?: 1 | 2;
};

export type Episode = EpisodeBasicInfo & {
  fullDescription: string;
  quizzes: Quiz[];
};

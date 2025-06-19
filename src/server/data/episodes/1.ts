import { EpisodeIdEnum } from './episodes.types';

export const firstEpisodeBasicInfo = {
  id: 1,
  title: 'Episode #1 - დაე იყოს ნათელი',
  description: 'ჩვენი ტექ პოდკასტის პირველი, საპილოტე ეპიზოდი.',
  date: '2024-10-16',
  duration: '57 min',
  tags: ['ტექ', 'პოდკასტი', 'ქართული ტექ კულტურა'],
  slug: EpisodeIdEnum.DAE_IYOS_NATELI,
  youtubeId: 'tI-vWehbH-8',
};

export const firstEpisodeData = {
  ...firstEpisodeBasicInfo,
  fullDescription: `ჩვენი ტექ პოდკასტის პირველი, საპილოტე ეპიზოდი. მომავალ ეპიზოდებში კი საინტერესო ინჟინრებთან და სტუმრებთან ერთად განვიხილავთ ქართული ტექ კულტურისა და დეველოპერული გარემოს საკითხებს საქართველოში - STAY TUNED! 

მოუსმინე და გამოიწერე ჩვენი პოდკასტი, შენს საყვარელ პლატფორმაზე 🎉`,
};

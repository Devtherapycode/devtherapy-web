import lotuashvili from '@/assets/guests/lotuashvili.jpeg';
import { secondEpisodeBasicInfo } from '../episodes/2';

export const lotuashviliBasicInfo = {
  id: 'lotuashvili',
  name: 'Levan Lotuashvili',
  title: 'Senior Software Engineer',
  bio: 'Web ის ევოლუცია, Toptal, ენთუზიაზმი, Job Market',
  image: lotuashvili,
  episode: secondEpisodeBasicInfo,
  tags: ['ვებ დეველოპმენტი', 'ტოპტალი', 'ენთუზიაზმი', 'სამსახურები'],
};

export const lotuashviliData = {
  ...lotuashviliBasicInfo,
  description: `Experienced Web Application Developer skilled in PHP, Laravel, JS (ES6), Node.js, GraphQL, Html5, Css, Bootstrap. Motivated to learn new technologies. Have been working on Laravel for more than 7 years.`,
  linkedin: 'https://www.linkedin.com/in/lotuashvili/',
};

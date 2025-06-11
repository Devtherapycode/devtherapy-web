import levanMamulashvili from '@/assets/guests/levan-mamulashvili.jpeg';
import zuba from '@/assets/guests/zuba.png';

const zubaBasicInfo = {
  id: 'zura-abelashvili',
  name: 'Zura Abelashvili',
  title: 'Graphics Engineer at Rockstar Games',
  bio: 'From Georgia to GTA VI - building the future of gaming graphics',
  image: zuba,
  episode: 'Episode #7',
  tags: ['graphics', 'gaming', 'rockstar'],
};

const levanMamulashviliBasicInfo = {
  id: 'levan-mamulashvili',
  name: 'Levan Mamulashvili (Mainera)',
  title: 'Tribe Tech Lead @ TBC | Ex-CTO | Forbes 30U30 | MIT | Scaling Tech & Teams',
  bio: 'Technical Leadership, Career Strategy, MIT, Forbes',
  image: levanMamulashvili,
  episode: 'Episode #18',
  tags: ['tech', 'career', 'scaling'],
};

export const guests = [zubaBasicInfo, levanMamulashviliBasicInfo];

export const guestData = {
  'zura-abelashvili': {
    ...zubaBasicInfo,
    tagline: 'Episode #7 – From Georgia to GTA VI',
    description: `Zura is a talented graphics engineer at Rockstar Games, where he works on cutting-edge visual technologies that power some of the most beloved games in the world. Originally from Georgia, Zura's journey into game development showcases the global nature of tech talent and the passion that drives innovation in gaming.

In our conversation, Zura shares insights into the technical challenges of creating realistic graphics, the collaborative nature of game development, and what it's like to work on projects that millions of players will experience.`,
    quote:
      "The most rewarding part of graphics engineering is seeing players get completely immersed in worlds we've helped create. Every optimization, every shader, every lighting effect contributes to that magic moment when reality and virtuality blend.",
    youtubeUrl: 'https://www.youtube.com/embed/ptPHTbQk_sA',
    linkedin: 'https://www.linkedin.com/in/zurab-abelashvili',
  },
  'levan-mamulashvili': {
    ...levanMamulashviliBasicInfo,
    tagline: 'Episode #18 – From Junior to CTO',
    description: `Levan Mamulashvili is a distinguished tech leader who has made remarkable strides in his career, currently serving as the Tribe Tech Lead (CTO) for Payments & Transfers at TBC Bank, Georgia's leading financial institution. His journey from a junior developer to a CTO position exemplifies the power of continuous learning and strategic career development.

In this episode, Levan shares his insights on technical leadership, team scaling, and the challenges of managing large-scale financial systems. His experience at MIT and recognition in Forbes 30 Under 30 adds a unique perspective to his approach to technology leadership and innovation in the banking sector.`,
    quote:
      "Success in tech leadership isn't just about technical expertise - it's about building bridges between technology and business, empowering teams, and creating systems that scale. The real challenge is maintaining innovation while ensuring reliability in critical financial systems.",
    youtubeUrl: 'https://www.youtube.com/embed/aECGCXO1Nus',
    linkedin: 'https://www.linkedin.com/in/levan-mamulashvili',
  },
};

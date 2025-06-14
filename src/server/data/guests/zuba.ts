import zuba from '@/assets/guests/zuba.png';

export const zubaBasicInfo = {
  id: 'zuba',
  name: 'Zura Abelashvili',
  title: 'Graphics Engineer at Rockstar Games',
  bio: 'From Georgia to GTA VI - building the future of gaming graphics',
  image: zuba,
  episode: 'Episode #7',
  tags: ['graphics', 'gaming', 'rockstar'],
};

export const zubaData = {
  ...zubaBasicInfo,
  tagline: 'Episode #7 – From Georgia to GTA VI',
  description: `Zura is a talented graphics engineer at Rockstar Games, where he works on cutting-edge visual technologies that power some of the most beloved games in the world. Originally from Georgia, Zura's journey into game development showcases the global nature of tech talent and the passion that drives innovation in gaming.

In our conversation, Zura shares insights into the technical challenges of creating realistic graphics, the collaborative nature of game development, and what it's like to work on projects that millions of players will experience.`,
  quote:
    "The most rewarding part of graphics engineering is seeing players get completely immersed in worlds we've helped create. Every optimization, every shader, every lighting effect contributes to that magic moment when reality and virtuality blend.",
  youtubeUrl: 'https://www.youtube.com/embed/ptPHTbQk_sA',
  linkedin: 'https://www.linkedin.com/in/zurab-abelashvili',
};

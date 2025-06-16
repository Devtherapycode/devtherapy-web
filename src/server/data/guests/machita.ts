import machita from '@/assets/guests/machita.jpeg';

export const machitaBasicInfo = {
  id: 'machita',
  name: 'Giorgi Machitidze',
  title: 'CIO @ Spribe',
  bio: 'Linux, RedHat, Systems Engineering, DevOps, IT Roadmap',
  image: machita,
  episode: 'Episode #11',
  tags: ['linux', 'redhat', 'systems-engineering', 'devops', 'it-roadmap'],
};

export const machitaData = {
  ...machitaBasicInfo,
  tagline: 'Episode #11 - Linux, RedHat, Systems Engineering, DevOps, IT Roadmap',
  description: `25+ years of experience`,
  quote: `კი, ბოტი`,
  youtubeUrl: 'https://www.youtube.com/embed/xt3gOif5PeM',
  linkedin: 'https://www.linkedin.com/in/giomac/',
};

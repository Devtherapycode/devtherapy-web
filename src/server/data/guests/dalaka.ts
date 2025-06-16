import dalaka from '@/assets/guests/dalaka.jpeg';

export const dalakaBasicInfo = {
  id: 'dalaka',
  name: 'Giorgi Dalakishvili',
  title: 'Microsoft MVP | Lifelong learner | Open-source contributor',
  bio: 'Microsoft MVP, .NET, LLM, Open Source, Dev Conferences',
  image: dalaka,
  episode: 'Episode #9',
  tags: ['microsoft', 'mvp', 'llm', 'open-source', 'dev-conferences'],
};

export const dalakaData = {
  ...dalakaBasicInfo,
  tagline: 'Episode #9 - Microsoft MVP, .NET, LLM, Open Source, Dev Conferences',
  description: `Application Developer, Database Developer, Mobile Developer.

Specialities: .Net Framework, .Net Core, ASP.NET, SQL, Entity Framework, JavaScript, Android, Xamarin, Winforms.`,
  quote: `You have to be odd to be number one`,
  youtubeUrl: 'https://www.youtube.com/embed/swqK7GgJIrk',
  linkedin: 'https://www.linkedin.com/in/giorgidalakishvili/',
};

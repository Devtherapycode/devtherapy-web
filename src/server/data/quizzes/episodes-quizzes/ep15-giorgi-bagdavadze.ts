import { Quiz } from '../quizzes.types';

export const ep15GiorgiBagdavadzeQuizzes: Quiz[] = [
  // Episode 15: Easy Quiz - Cloud Providers & Infrastructure
  {
    id: 'ep15-giorgi-bagdavadze-cloud-basics',
    title: 'Cloud Providers და Infrastructure Basics',
    description: 'Cloud Providers-ის შედარება და ძირითადი კონცეფციები.',
    categories: ['backend', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/giorgi-bagdavadze',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep15-e1',
        question: 'რომელი არის ყველაზე პოპულარული Cloud Provider?',
        options: ['Google Cloud Platform (GCP)', 'Microsoft Azure', 'Amazon Web Services (AWS)', 'DigitalOcean'],
        correctAnswerIndex: 2,
        explanation: 'AWS არის ყველაზე პოპულარული და დიდი Cloud Provider-ი ბაზარზე.',
      },
      {
        id: 'ep15-e2',
        question: 'რა არის Infrastructure as Code (IaC)?',
        options: ['კოდის ინფრასტრუქტურა', 'ინფრასტრუქტურის მართვა კოდის მეშვეობით', 'ქლაუდ სერვისი', 'დატაბეიზის მართვა'],
        correctAnswerIndex: 1,
        explanation: 'Infrastructure as Code (IaC) არის ინფრასტრუქტურის მართვა და provision-ი კოდის მეშვეობით.',
      },
      {
        id: 'ep15-e3',
        question: 'რომელი ხელსაწყოა Terraform?',
        options: ['Container orchestration', 'Infrastructure as Code tool', 'Database management', 'CI/CD pipeline'],
        correctAnswerIndex: 1,
        explanation: 'Terraform არის Infrastructure as Code tool, რომელიც საშუალებას გაძლევს ინფრასტრუქტურა განისაზღვროთ კოდით.',
      },
      {
        id: 'ep15-e4',
        question: 'რა უპირატესობა აქვს Cloud-ს traditional hosting-თან შედარებით?',
        options: ['მხოლოდ ფასი', 'Scalability, მოქნილობა და managed services', 'მხოლოდ უსაფრთხოება', 'მხოლოდ სიჩქარე'],
        correctAnswerIndex: 1,
        explanation: 'Cloud-ის უპირატესობებია scalability, მოქნილობა და managed services-ის ხელმისაწვდომობა.',
      },
    ],
  },

  // Episode 15: Medium Quiz - AI Tools & Development
  {
    id: 'ep15-giorgi-bagdavadze-ai-tools',
    title: 'AI Tools in Development',
    description: 'AI-ს გამოყენება დეველოპმენტში და სხვადასხვა ხელსაწყოების შედარება.',
    categories: ['ai', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/giorgi-bagdavadze',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep15-m1',
        question: 'რა განსხვავებაა GitHub Copilot-სა და Cursor-ს შორის?',
        options: [
          'არავითარი განსხვავება',
          'Copilot არის VS Code extension, Cursor არის standalone IDE AI capabilities-ით',
          'მხოლოდ ფასობრივი განსხვავება',
          'მხოლოდ programming language support',
        ],
        correctAnswerIndex: 1,
        explanation: 'Copilot არის VS Code extension, ხოლო Cursor არის standalone IDE AI capabilities-ით.',
      },
      {
        id: 'ep15-m2',
        question: 'როგორ უნდა გამოიყენოს AI code review-ში?',
        options: [
          'AI-მ უნდა ჩაანაცვლოს human reviewers',
          'AI დახმარება patterns identification-ში და suggestions-ში, მაგრამ human oversight აუცილებელია',
          'AI არ უნდა გამოიყენოს code review-ში',
          'მხოლოდ syntax checking-ისთვის',
        ],
        correctAnswerIndex: 1,
        explanation: 'AI უნდა გამოიყენოს დახმარების სახით patterns-ის იდენტიფიცირებაში, მაგრამ human oversight აუცილებელია.',
      },
      {
        id: 'ep15-m3',
        question: 'რა არის AI Agents development-ში?',
        options: [
          'მხოლოდ chatbots',
          'Autonomous systems რომლებიც შეუძლიათ complex tasks-ის შესრულება minimal human intervention-ით',
          'მხოლოდ code generators',
          'მხოლოდ testing tools',
        ],
        correctAnswerIndex: 1,
        explanation: 'AI Agents არის autonomous systems რომლებიც შეუძლიათ complex tasks-ის შესრულება minimal human intervention-ით.',
      },
      {
        id: 'ep15-m4',
        question: 'როგორ უნდა AI prototyping-ში?',
        options: [
          'AI არ არის სასარგებლო prototyping-ისთვის',
          'AI საშუალებას აძლევს rapid idea validation და quick functional versions-ის შექმნას',
          'მხოლოდ UI design-ისთვის',
          'მხოლოდ documentation-ისთვის',
        ],
        correctAnswerIndex: 1,
        explanation: 'AI საშუალებას აძლევს rapid idea validation და quick functional versions-ის შექმნას prototyping-ისას.',
      },
      {
        id: 'ep15-m5',
        question: 'რა უნდა იყოს developer-ის approach AI hype vs reality-ის მიმართ?',
        options: [
          'სრული skepticism',
          'Balanced approach: practical experimentation with realistic expectations',
          'სრული adoption ყველაფრის',
          'AI-ის უგულებელყოფა',
        ],
        correctAnswerIndex: 1,
        explanation: 'Developer-ებმა უნდა მიიღონ balanced approach: practical experimentation realistic expectations-ით.',
      },
    ],
  },

  // Episode 15: Hard Quiz - Advanced Topics
  {
    id: 'ep15-giorgi-bagdavadze-advanced',
    title: 'JavaScript Ecosystem & Career Development',
    description: 'ღრმა კითხვები JavaScript ecosystem-სა და career development-ზე.',
    categories: ['web-development', 'backend', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/giorgi-bagdavadze',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep15-h1',
        question: 'რა უპირატესობები აქვს Bun-ს Node.js-თან შედარებით?',
        options: [
          'მხოლოდ syntax განსხვავებები',
          'Faster startup, built-in bundler, native TypeScript support და improved package management',
          'მხოლოდ community support',
          'მხოლოდ documentation quality',
        ],
        correctAnswerIndex: 1,
        explanation: 'Bun-ის უპირატესობებია faster startup, built-in bundler, native TypeScript support და improved package management.',
      },
      {
        id: 'ep15-h2',
        question: 'როგორ უნდა structure-იოს დიდი JavaScript პროექტები?',
        options: [
          'ერთ ფაილში ყველაფერი',
          'Modular architecture, clear separation of concerns, proper dependency management და scalable folder structure',
          'მხოლოდ MVC pattern',
          'Random file organization',
        ],
        correctAnswerIndex: 1,
        explanation:
          'დიდი JavaScript პროექტები საჭიროებს modular architecture, clear separation of concerns, proper dependency management და scalable folder structure.',
      },
      {
        id: 'ep15-h3',
        question: 'რა არის modern engineer-ის მთავარი მახასიათებლები?',
        options: [
          'მხოლოდ ტექნიკური უნარები',
          'Product thinking, collaboration skills, continuous learning და business understanding',
          'მხოლოდ coding skills',
          'მხოლოდ specific technology expertise',
        ],
        correctAnswerIndex: 1,
        explanation: 'Modern engineer-ს უნდა ჰქონდეს product thinking, collaboration skills, continuous learning და business understanding.',
      },
      {
        id: 'ep15-h4',
        question: 'როგორ უნდა approach-ი technical interviews-ისადმი?',
        options: [
          'მხოლოდ memorization',
          'Problem-solving approach, clear communication, practical experience demonstration და cultural fit',
          'მხოლოდ algorithm knowledge',
          'მხოლოდ portfolio showing',
        ],
        correctAnswerIndex: 1,
        explanation: 'Technical interviews საჭიროებს problem-solving approach, clear communication, practical experience demonstration და cultural fit.',
      },
      {
        id: 'ep15-h5',
        question: 'რა მნიშვნელობა აქვს dev community involvement-ს?',
        options: [
          'არ არის მნიშვნელოვანი',
          'Knowledge sharing, networking, skill development და industry insights',
          'მხოლოდ social networking',
          'მხოლოდ job searching',
        ],
        correctAnswerIndex: 1,
        explanation: 'Dev community involvement მნიშვნელოვანია knowledge sharing, networking, skill development და industry insights-ისთვის.',
      },
      {
        id: 'ep15-h6',
        question: 'როგორ უნდა balance-ი community involvement-სა და professional growth-ს შორის?',
        options: [
          'მხოლოდ professional growth',
          'Strategic involvement focused on learning goals და meaningful contributions',
          'მხოლოდ community activities',
          'Complete separation',
        ],
        correctAnswerIndex: 1,
        explanation: 'Balance საჭიროებს strategic involvement focused on learning goals და meaningful contributions.',
      },
      {
        id: 'ep15-h7',
        question: 'რა strategies არსებობს effective blog writing-ისთვის tech-ში?',
        options: [
          'მხოლოდ personal opinions',
          'Technical depth, practical examples, clear explanations და regular posting schedule',
          'მხოლოდ trending topics',
          'მხოლოდ code snippets',
        ],
        correctAnswerIndex: 1,
        explanation: 'Effective tech blogging საჭიროებს technical depth, practical examples, clear explanations და regular posting schedule.',
      },
    ],
  },
];

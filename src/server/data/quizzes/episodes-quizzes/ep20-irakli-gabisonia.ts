import { Quiz } from '../quizzes.types';

export const ep20IrakliGabisoniaQuizzes: Quiz[] = [
  // Episode 20: Easy Quiz - Software Architecture & Leadership Basics
  {
    id: 'ep20-irakli-gabisonia-architecture-leadership',
    title: 'Software Architecture და Leadership Basics',
    description: 'Software Architecture-ის და technical leadership-ის ძირითადი კონცეფციები.',
    categories: ['software-architecture', 'leadership', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/irakli-gabisonia',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep20-e1',
        question: 'რა არის Solution Architect-ის ძირითადი ფუნქცია?',
        options: ['მხოლოდ კოდის წერა', 'ტექნიკური გადაწყვეტილებების მიღება და სისტემის არქიტექტურის დიზაინი', 'მხოლოდ project management', 'მხოლოდ testing'],
        correctAnswerIndex: 1,
        explanation: 'Solution Architect-ის ძირითადი ფუნქციაა ტექნიკური გადაწყვეტილებების მიღება და მთლიანი სისტემის არქიტექტურის დიზაინი.',
      },
      {
        id: 'ep20-e2',
        question: 'რა განსხვავებაა modern code-სა და legacy code-ს შორის?',
        options: [
          'არავითარი განსხვავება',
          'Modern code უფრო maintainable, testable და scalable',
          'მხოლოდ syntax განსხვავება',
          'მხოლოდ performance განსხვავება',
        ],
        correctAnswerIndex: 1,
        explanation: 'Modern code უფრო maintainable, testable, scalable და თანამედროვე best practices-ს მიყვება.',
      },
      {
        id: 'ep20-e3',
        question: 'რა უნარებია საჭირო 24 წლის ასაკში CTO-ს პოზიციისთვის?',
        options: ['მხოლოდ ტექნიკური ცოდნა', 'ტექნიკური expertise + leadership + business understanding', 'მხოლოდ management skills', 'მხოლოდ experience'],
        correctAnswerIndex: 1,
        explanation: 'ყოველგვარი ასაკის CTO-ისთვის საჭიროა ტექნიკური expertise, leadership უნარები და business understanding-ის კომბინაცია.',
      },
      {
        id: 'ep20-e4',
        question: 'რა მნიშვნელობა აქვს CI/CD-ს development process-ში?',
        options: ['არ არის მნიშვნელოვანი', 'Automation, quality assurance და faster deployment', 'მხოლოდ testing', 'მხოლოდ deployment'],
        correctAnswerIndex: 1,
        explanation: 'CI/CD მნიშვნელოვანია automation-ისთვის, quality assurance-ისა და faster, reliable deployment-ისთვის.',
      },
    ],
  },

  // Episode 20: Medium Quiz - Go vs .NET & Big Tech Experience
  {
    id: 'ep20-irakli-gabisonia-go-vs-dotnet',
    title: 'Go vs .NET და Amazon Experience',
    description: 'Go და .NET ტექნოლოგიების შედარება და დიდ კომპანიებში მუშაობის გამოცდილება.',
    categories: ['backend', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/irakli-gabisonia',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep20-m1',
        question: 'რა არის Go-ს მთავარი უპირატესობები .NET-თან შედარებით?',
        options: [
          'არავითარი უპირატესობა',
          'Architectural freedom, simplicity, built-in concurrency და fast compilation',
          'მხოლოდ syntax',
          'მხოლოდ performance',
        ],
        correctAnswerIndex: 1,
        explanation: 'Go-ს უპირატესობებია architectural freedom, simplicity, built-in concurrency support და fast compilation.',
      },
      {
        id: 'ep20-m2',
        question: 'რა განსხვავებაა Go-ს threading model-სა და .NET-ის async model-ს შორის?',
        options: [
          'იგივეა',
          'Go იყენებს goroutines და channels, .NET იყენებს async/await pattern',
          'მხოლოდ syntax განსხვავება',
          'მხოლოდ performance განსხვავება',
        ],
        correctAnswerIndex: 1,
        explanation: 'Go იყენებს goroutines და channels concurrency-ისთვის, ხოლო .NET async/await pattern-ს.',
      },
      {
        id: 'ep20-m3',
        question: 'რა განსხვავებაა დიდ კომპანიებსა და პატარა კომპანიებს შორის?',
        options: [
          'არავითარი განსხვავება',
          'დიდი კომპანიები: processes, scale, resources; პატარა: agility, flexibility, direct impact',
          'მხოლოდ ხელფასის განსხვავება',
          'მხოლოდ team size',
        ],
        correctAnswerIndex: 1,
        explanation: 'დიდი კომპანიები გთავაზობენ established processes, scale, resources; პატარა კომპანიები agility, flexibility და direct impact.',
      },
      {
        id: 'ep20-m4',
        question: 'რატომ არის მნიშვნელოვანი ტექნოლოგიური TradeOff-ების გაგება?',
        options: [
          'TradeOff-ები არ არის მნიშვნელოვანი',
          'ყოველ ტექნოლოგიას აქვს pros და cons, სწორი არჩევანისთვის საჭიროა მათი გაგება',
          'ყოველთვის ერთი სწორი არჩევანია',
          'მხოლოდ performance-ზე ფიქრი საჭიროა',
        ],
        correctAnswerIndex: 1,
        explanation: 'ტექნოლოგიური TradeOff-ების გაგება მნიშვნელოვანია რადგან ყოველ ტექნოლოგიას აქვს pros და cons, სწორი არჩევანისთვის საჭიროა balance.',
      },
      {
        id: 'ep20-m5',
        question: 'როგორ უნდა approach-ი Amazon-ისეთ დიდ კომპანიაში მუშაობისადმი?',
        options: [
          'არავითარი განსაცვლელი approach',
          'Scale-ის გაგება, processes-ის დაცვა, collaboration და continuous learning',
          'მხოლოდ individual work',
          'მხოლოდ technical focus',
        ],
        correctAnswerIndex: 1,
        explanation: 'Amazon-ისეთ კომპანიაში მუშაობა საჭიროებს scale-ის გაგებას, processes-ის დაცვას, effective collaboration-ს და continuous learning-ს.',
      },
    ],
  },

  // Episode 20: Hard Quiz - Advanced Architecture & Digital Nomad
  {
    id: 'ep20-irakli-gabisonia-advanced-topics',
    title: 'Advanced Architecture, ML.NET და Digital Nomad',
    description: 'Advanced software architecture, ML.NET და digital nomad lifestyle topics.',
    categories: ['software-architecture', 'ai', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/irakli-gabisonia',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep20-h1',
        question: 'როდის არის ზედმეტი interfaces-ების გამოყენება და როგორ უნდა SOLID principles-ის სწორი გამოყენება?',
        options: [
          'ყოველთვის უნდა იყოს ინტერფეისები',
          'Interfaces საჭიროა abstraction-ისა და testability-ისთვის, მაგრამ over-engineering-ის გარეშე',
          'არასდროს არ უნდა interfaces',
          'მხოლოდ inheritance უნდა გამოიყენოს',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Interfaces საჭიროა proper abstraction-ისა და testability-ისთვის, მაგრამ over-engineering-ის გარეშე. SOLID principles უნდა გამოიყენოს pragmatically.',
      },
      {
        id: 'ep20-h2',
        question: 'რა არის ML.NET-ის მთავარი უპირატესობები და გამოყენების შემთხვევები?',
        options: [
          'ML.NET არ არის სასარგებლო',
          '.NET ecosystem integration, familiar syntax, production-ready ML models',
          'მხოლოდ research-ისთვის',
          'მხოლოდ simple algorithms',
        ],
        correctAnswerIndex: 1,
        explanation:
          'ML.NET-ის უპირატესობებია .NET ecosystem-თან integration, familiar syntax .NET developers-ისთვის და production-ready ML models-ის შექმნის შესაძლებლობა.',
      },
      {
        id: 'ep20-h3',
        question: 'რა challenges და benefits არის Digital Nomad lifestyle-ში tech professional-ისთვის?',
        options: [
          'მხოლოდ benefits',
          'Benefits: freedom, cultural diversity; Challenges: time zones, internet, social connections',
          'მხოლოდ challenges',
          'განსხვავება არ არის',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Digital Nomad lifestyle გთავაზობს freedom და cultural diversity, მაგრამ challenges-იცაა time zones, reliable internet და social connections maintenance.',
      },
      {
        id: 'ep20-h4',
        question: 'როგორ უნდა ტექნოლოგიის არჩევა complex projects-ისთვის?',
        options: [
          'ყოველთვის ყველაზე ახალი ტექნოლოგია',
          'Project requirements, team expertise, long-term maintenance და ecosystem maturity',
          'მხოლოდ personal preference',
          'მხოლოდ industry trends',
        ],
        correctAnswerIndex: 1,
        explanation: 'ტექნოლოგიის არჩევა უნდა დაფუძნდეს project requirements-ზე, team expertise-ზე, long-term maintenance-ზე და ecosystem maturity-ზე.',
      },
      {
        id: 'ep20-h5',
        question: 'რა strategies არსებობს relocation-ისა და cultural adaptation-ისთვის?',
        options: [
          'adaptation არ არის საჭირო',
          'Cultural research, language learning, local networking, gradual integration',
          'მხოლოდ language learning',
          'მხოლოდ work focus',
        ],
        correctAnswerIndex: 1,
        explanation: 'Relocation success საჭიროებს cultural research-ს, language learning-ს, local networking-ს და gradual integration-ს.',
      },
      {
        id: 'ep20-h6',
        question: 'როგორ უნდა balance-ი კოდის წერასა და tooling/infrastructure-ს შორის?',
        options: [
          'მხოლოდ კოდის წერა',
          'Balance: productive coding time with infrastructure investment for long-term efficiency',
          'მხოლოდ tooling',
          'Balance არ არის საჭირო',
        ],
        correctAnswerIndex: 1,
        explanation: 'Effective balance საჭიროა productive coding time-სა და infrastructure investment-ს შორის long-term efficiency-ისთვის.',
      },
      {
        id: 'ep20-h7',
        question: 'რა approaches არსებობს cloud platforms (Azure) comparison-ისა და selection-ისთვის?',
        options: [
          'ყველა cloud platform იგივეა',
          'Feature comparison, pricing models, integration capabilities, team expertise',
          'მხოლოდ pricing',
          'მხოლოდ brand reputation',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Cloud platform selection საჭიროებს feature comparison-ს, pricing models-ის ანალიზს, integration capabilities-ს და team expertise-ის გათვალისწინებას.',
      },
    ],
  },
];

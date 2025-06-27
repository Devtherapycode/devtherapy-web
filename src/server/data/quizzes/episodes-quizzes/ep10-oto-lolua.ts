import { Quiz } from '../quizzes.types';

export const ep10OtoLoluaQuizzes: Quiz[] = [
  // Episode 10: Easy Quiz - Frontend and Angular Basics
  {
    id: 'ep10-oto-lolua-basics',
    title: 'Oto Lolua - Frontend and Angular Basics',
    description: 'Basic concepts about frontend development, Angular, and JavaScript fundamentals.',
    categories: ['frontend', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/oto-lolua',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep10-e1',
        question: 'What was the major architectural difference between Angular 1 and Angular 2?',
        options: [
          'Angular 2 was just a minor update',
          'Angular 2 was a complete rewrite with TypeScript and component architecture',
          'Angular 2 only added new styling options',
          'Angular 2 just fixed bugs from Angular 1',
        ],
        correctAnswerIndex: 1,
        explanation: 'Angular 2 was a complete rewrite that introduced TypeScript, component-based architecture, and modern development patterns.',
      },
      {
        id: 'ep10-e2',
        question: 'What is TypeScript primarily used for?',
        options: [
          'Only for backend development',
          'Adding static typing and modern features to JavaScript',
          'Only for mobile development',
          'Replacing HTML and CSS',
        ],
        correctAnswerIndex: 1,
        explanation: 'TypeScript adds static typing, modern ECMAScript features, and better tooling to JavaScript development.',
      },
      {
        id: 'ep10-e3',
        question: 'What was Flash primarily used for before modern web technologies?',
        options: ['Only for games', 'Interactive web content, animations, and rich applications', 'Only for video playback', 'Server-side programming'],
        correctAnswerIndex: 1,
        explanation: 'Flash was widely used for interactive web content, animations, games, and rich internet applications before HTML5 and modern JavaScript.',
      },
      {
        id: 'ep10-e4',
        question: 'What is a key advantage of using frameworks like Angular?',
        options: [
          'They make websites slower',
          'Structured development, reusable components, and better maintainability',
          'They only work for small projects',
          'They eliminate the need for HTML',
        ],
        correctAnswerIndex: 1,
        explanation: 'Frameworks provide structured development patterns, reusable components, and better maintainability for complex applications.',
      },
    ],
  },

  // Episode 10: Medium Quiz - Framework Evolution and Career Development
  {
    id: 'ep10-oto-lolua-advanced',
    title: 'Framework Evolution and Frontend Career Development',
    description: 'Deeper concepts in framework evolution, micro frontends, and career paths.',
    categories: ['frontend', 'career-development', 'software-engineering', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/oto-lolua',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep10-m1',
        question: 'Why did many developers migrate from Angular 1 to React?',
        options: [
          'React was older and more stable',
          'React offered simpler mental model and better performance with virtual DOM',
          'React was only for mobile development',
          'Angular 1 was discontinued immediately',
        ],
        correctAnswerIndex: 1,
        explanation: 'React attracted developers with its simpler mental model, virtual DOM performance benefits, and more predictable data flow.',
      },
      {
        id: 'ep10-m2',
        question: 'What is the concept of JavaScript as "web assembler"?',
        options: [
          'JavaScript compiles to machine code',
          'JavaScript serves as a compilation target for other languages',
          'JavaScript only works with assembly language',
          'JavaScript replaces web browsers',
        ],
        correctAnswerIndex: 1,
        explanation:
          'JavaScript acts as a compilation target for other languages (TypeScript, Dart, etc.), similar to how assembly serves as a target for higher-level languages.',
      },
      {
        id: 'ep10-m3',
        question: 'What are micro frontends designed to solve?',
        options: [
          'Making applications smaller in file size',
          'Breaking large frontend applications into manageable, independently deployable pieces',
          'Only improving loading speed',
          'Eliminating the need for frameworks',
        ],
        correctAnswerIndex: 1,
        explanation: 'Micro frontends allow large applications to be broken into smaller, independently developed and deployed pieces by different teams.',
      },
      {
        id: 'ep10-m4',
        question: 'What is the difference between generalist and specialist developers?',
        options: [
          'Generalists are always better than specialists',
          'Generalists have broad knowledge across domains, specialists have deep expertise in specific areas',
          'Specialists only work on small projects',
          'There is no real difference',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Generalists have broad knowledge across multiple domains, while specialists have deep expertise in specific technical areas. Both are valuable.',
      },
      {
        id: 'ep10-m5',
        question: 'What role do Platform teams play in organizations?',
        options: [
          'Only handling customer support',
          'Providing infrastructure, tools, and services for product development teams',
          'Only managing databases',
          'Replacing all other development teams',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Platform teams provide infrastructure, developer tools, and shared services that enable product development teams to work more efficiently.',
      },
    ],
  },

  // Episode 10: Hard Quiz - Advanced Frontend Architecture and Leadership
  {
    id: 'ep10-oto-lolua-expert',
    title: 'Advanced Frontend Architecture and Engineering Leadership',
    description: 'Expert-level concepts in frontend architecture, change detection, and engineering leadership.',
    categories: ['frontend', 'software-engineering', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/oto-lolua',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep10-h1',
        question: "How does Angular's change detection mechanism work?",
        options: [
          'It only checks for changes on user clicks',
          'Zone.js patches async operations to trigger change detection cycles',
          'It uses polling every second',
          'It only works with TypeScript',
        ],
        correctAnswerIndex: 1,
        explanation: 'Angular uses Zone.js to patch asynchronous operations and trigger change detection cycles when the application state might have changed.',
      },
      {
        id: 'ep10-h2',
        question: 'What considerations are important when choosing between server-side and client-side rendering?',
        options: [
          'Client-side is always better',
          'SEO needs, initial load performance, user interaction patterns, and infrastructure complexity',
          'Server-side is always faster',
          "The choice doesn't matter",
        ],
        correctAnswerIndex: 1,
        explanation:
          'The choice depends on SEO requirements, initial load performance needs, user interaction patterns, and infrastructure complexity trade-offs.',
      },
      {
        id: 'ep10-h3',
        question: 'How should large frontend applications handle code organization and modularity?',
        options: [
          'Put everything in one large file',
          'Feature modules, lazy loading, clear boundaries, and dependency injection',
          'Only use external libraries',
          'Avoid any form of organization',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Large applications benefit from feature modules, lazy loading strategies, clear boundaries between components, and proper dependency injection.',
      },
      {
        id: 'ep10-h4',
        question: 'What are the key challenges in frontend application architecture?',
        options: [
          'Only styling and layout',
          'State management, data flow, component communication, and performance optimization',
          'Only browser compatibility',
          'Only deployment issues',
        ],
        correctAnswerIndex: 1,
        explanation: 'Key challenges include managing application state, data flow patterns, component communication strategies, and performance optimization.',
      },
      {
        id: 'ep10-h5',
        question: 'How do Reactive Extensions (RxJS) help in frontend development?',
        options: [
          'They only handle HTTP requests',
          'Composable async operations, event handling, and data transformation streams',
          'They replace all other JavaScript features',
          'They only work with Angular',
        ],
        correctAnswerIndex: 1,
        explanation: 'RxJS provides composable operators for handling asynchronous operations, events, and data transformation through observable streams.',
      },
      {
        id: 'ep10-h6',
        question: 'What strategies help in learning new frontend frameworks effectively?',
        options: [
          'Only read documentation',
          'Understand fundamental concepts, build projects, learn from community, and focus on transferable skills',
          'Only watch tutorials',
          'Memorize all framework APIs',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Effective learning combines understanding fundamentals, hands-on project building, community engagement, and focusing on transferable concepts.',
      },
      {
        id: 'ep10-h7',
        question: 'How should engineering teams balance technical debt in frontend projects?',
        options: [
          'Ignore technical debt completely',
          'Regular refactoring, architectural reviews, and balancing feature delivery with code quality',
          'Only fix technical debt',
          'Rewrite everything frequently',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Teams should regularly refactor, conduct architectural reviews, and balance feature delivery with maintaining code quality and reducing technical debt.',
      },
    ],
  },
];

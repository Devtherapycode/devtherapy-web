import { Quiz } from '../quizzes.types';

export const ep9GiorgiDalakaQuizzes: Quiz[] = [
  // Episode 9: Easy Quiz (Georgian - Full-stack development)
  {
    id: 'ep9-giorgi-dalaka-basics',
    title: 'გიორგი დალაქიშვილი - Full-Stack Development',
    description: 'Full-stack დეველოპმენტის ძირითადი კითხვები.',
    categories: ['web-development', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/giorgi-dalakishvili',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep9-e1',
        question: 'რა მნიშვნელობისაა Full-Stack Developer?',
        options: [
          'მხოლოდ ფრონტენდ დეველოპერი',
          'დეველოპერი, რომელიც მუშაობს როგორც ფრონტენდ, ისე ბექენდზე',
          'მხოლოდ ბექენდ დეველოპერი',
          'მხოლოდ მობილური დეველოპერი',
        ],
        correctAnswerIndex: 1,
        explanation: 'Full-Stack Developer არის სპეციალისტი, რომელსაც შეუძლია მუშაობა როგორც ფრონტენდ, ისე ბექენდ ტექნოლოგიებზე.',
      },
      {
        id: 'ep9-e2',
        question: 'რა ტექნოლოგიები საჭიროა Full-Stack დეველოპერისთვის?',
        options: ['მხოლოდ HTML/CSS', 'ფრონტენდ (HTML, CSS, JS) + ბექენდ (Server, Database) ტექნოლოგიები', 'მხოლოდ JavaScript', 'მხოლოდ მონაცემთა ბაზები'],
        correctAnswerIndex: 1,
        explanation: 'Full-Stack დეველოპერს სჭირდება ცოდნა როგორც ფრონტენდ (HTML, CSS, JavaScript), ისე ბექენდ ტექნოლოგიებში.',
      },
      {
        id: 'ep9-e3',
        question: 'რა გამოწვევები დგას Full-Stack დეველოპერის წინაშე?',
        options: ['არავითარი გამოწვევა', 'ბევრი ტექნოლოგიის სწავლა და მუდმივი განახლება', 'მხოლოდ ერთი ენის სწავლა', 'მხოლოდ დიზაინზე ფოკუსირება'],
        correctAnswerIndex: 1,
        explanation: 'Full-Stack დეველოპერებს უწევთ ბევრი სხვადასხვა ტექნოლოგიის სწავლა და მუდმივი განახლება.',
      },
      {
        id: 'ep9-e4',
        question: 'რომელი მნიშვნელოვანი უნარია Full-Stack დეველოპერისთვის?',
        options: ['მხოლოდ კოდირება', 'პრობლემის გადაწყვეტა და სხვადასხვა ტექნოლოგიებს შორის კავშირის გაგება', 'მხოლოდ დიზაინი', 'მხოლოდ ტესტირება'],
        correctAnswerIndex: 1,
        explanation: 'Full-Stack დეველოპერისთვის მნიშვნელოვანია პრობლემის გადაწყვეტის უნარი და სხვადასხვა ტექნოლოგიებს შორის კავშირის გაგება.',
      },
    ],
  },

  // Episode 9: Medium Quiz
  {
    id: 'ep9-giorgi-dalaka-advanced',
    title: 'Full-Stack Architecture და Modern Technologies',
    description: 'ღრმა ტექნიკური კითხვები Full-Stack დეველოპმენტის შესახებ.',
    categories: ['web-development'],
    difficulty: 'medium',
    episodeLink: '/episodes/giorgi-dalakishvili',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep9-m1',
        question: 'რა უპირატესობები აქვს Microservices არქიტექტურას?',
        options: ['მხოლოდ მარტივია', 'Scalability, მოდულარობა და დამოუკიდებელი deployment', 'მხოლოდ ძლიერი სერვერები საჭიროა', 'ყველა პრობლემას წყვეტს'],
        correctAnswerIndex: 1,
        explanation: 'Microservices უზრუნველყოფს scalability-ს, მოდულარობას და თითოეული სერვისის დამოუკიდებელ deployment-ს.',
      },
      {
        id: 'ep9-m2',
        question: 'რა როლი აქვს API-ებს Full-Stack აპლიკაციებში?',
        options: ['არ არის მნიშვნელოვანი', 'Frontend-სა და Backend-ს შორის კომუნიკაციის უზრუნველყოფა', 'მხოლოდ მონაცემთა შენახვა', 'მხოლოდ user interface'],
        correctAnswerIndex: 1,
        explanation: 'API-ები უზრუნველყოფენ Frontend-სა და Backend-ს შორის კომუნიკაციას და მონაცემთა გაცვლას.',
      },
      {
        id: 'ep9-m3',
        question: 'როგორ უნდა განისაზღვროს ტექნოლოგიური სტეკი პროექტისთვის?',
        options: [
          'ყოველთვის უახლესი ტექნოლოგიები',
          'პროექტის მოთხოვნები, გუნდის უნარები და scalability-ს გათვალისწინება',
          'მხოლოდ პოპულარული ტექნოლოგიები',
          'ყველაზე იაფი გადაწყვეტილებები',
        ],
        correctAnswerIndex: 1,
        explanation: 'ტექნოლოგიური სტეკი უნდა შეირჩეს პროექტის მოთხოვნების, გუნდის უნარებისა და scalability-ს გათვალისწინებით.',
      },
      {
        id: 'ep9-m4',
        question: 'რა მნიშვნელობა აქვს State Management-ს Full-Stack აპლიკაციებში?',
        options: [
          'არ არის საჭირო',
          'მნიშვნელოვანია რთული აპლიკაციებისთვის მონაცემთა თანმიმდევრულობისთვის',
          'მხოლოდ მარტივი აპლიკაციებისთვის',
          'მხოლოდ backend-შია საჭირო',
        ],
        correctAnswerIndex: 1,
        explanation: 'State Management მნიშვნელოვანია რთული აპლიკაციებისთვის მონაცემთა თანმიმდევრულობისა და synchronized მდგომარეობისთვის.',
      },
      {
        id: 'ep9-m5',
        question: 'რა შეიძლება იყოს Performance Optimization-ის სტრატეგიები?',
        options: [
          'მხოლოდ server-ის მძლავრობა',
          'Caching, lazy loading, code splitting და database optimization',
          'მხოლოდ frontend ოპტიმიზაცია',
          'მხოლოდ network optimization',
        ],
        correctAnswerIndex: 1,
        explanation: 'Performance optimization მოიცავს caching-ს, lazy loading-ს, code splitting-ს და database optimization-ს.',
      },
    ],
  },

  // Episode 9: Hard Quiz
  {
    id: 'ep9-giorgi-dalaka-expert',
    title: 'Enterprise Full-Stack Architecture',
    description: 'ექსპერტული კითხვები enterprise-level Full-Stack სისტემების შესახებ.',
    categories: ['web-development'],
    difficulty: 'hard',
    episodeLink: '/episodes/giorgi-dalakishvili',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep9-h1',
        question: 'როგორ უნდა დაიგეგმოს მასშტაბირებადი Full-Stack არქიტექტურა?',
        options: [
          'მხოლოდ monolithic არქიტექტურა',
          'Horizontal scaling, load balancing, caching layers და database sharding',
          'მხოლოდ vertical scaling',
          'არ არის საჭირო დაგეგმვა',
        ],
        correctAnswerIndex: 1,
        explanation: 'მასშტაბირებადი არქიტექტურა მოითხოვს horizontal scaling-ს, load balancing-ს, caching layers-ს და database sharding-ს.',
      },
      {
        id: 'ep9-h2',
        question: 'რა strategies შეიძლება გამოვიყენოთ Database Design-ისთვის რთულ სისტემებში?',
        options: ['მხოლოდ ერთი მონაცემთა ბაზა', 'Database normalization, indexing strategies, read replicas და CQRS patterns', 'NoSQL ყველგან', 'SQL ყველგან'],
        correctAnswerIndex: 1,
        explanation: 'რთული სისტემები მოითხოვენ database normalization-ს, indexing strategies-ს, read replicas-ს და CQRS patterns-ს.',
      },
      {
        id: 'ep9-h3',
        question: 'როგორ უნდა განვახორციელოთ Security Full-Stack აპლიკაციებში?',
        options: [
          'მხოლოდ frontend security',
          'Multi-layer security: authentication, authorization, input validation, HTTPS, CSRF protection',
          'მხოლოდ backend security',
          'Security არ არის მნიშვნელოვანი',
        ],
        correctAnswerIndex: 1,
        explanation: 'Full-Stack security მოითხოვს multi-layer approach-ს: authentication, authorization, input validation, HTTPS, CSRF protection.',
      },
      {
        id: 'ep9-h4',
        question: 'რა არის DevOps-ისა და CI/CD-ის როლი Full-Stack Development-ში?',
        options: [
          'არ არის საჭირო',
          'Automated testing, deployment pipelines და infrastructure as code',
          'მხოლოდ manual deployment',
          'მხოლოდ development environment',
        ],
        correctAnswerIndex: 1,
        explanation: 'DevOps და CI/CD უზრუნველყოფს automated testing-ს, deployment pipelines-ს და infrastructure as code-ს.',
      },
      {
        id: 'ep9-h5',
        question: 'როგორ უნდა მოვმართოთ Error Handling და Monitoring enterprise სისტემებში?',
        options: [
          'მხოლოდ console.log',
          'Centralized logging, error tracking, health checks და alerting systems',
          'მხოლოდ local error handling',
          'Error handling არ არის საჭირო',
        ],
        correctAnswerIndex: 1,
        explanation: 'Enterprise სისტემები მოითხოვენ centralized logging-ს, error tracking-ს, health checks-ს და alerting systems-ს.',
      },
      {
        id: 'ep9-h6',
        question: 'რა გათვალისწინებები არსებობს Real-time Features-ის დამატებისას?',
        options: [
          'მხოლოდ HTTP requests',
          'WebSocket connections, message queues და event-driven architecture',
          'მხოლოდ polling',
          'Real-time features შეუძლებელია',
        ],
        correctAnswerIndex: 1,
        explanation: 'Real-time features მოითხოვს WebSocket connections-ს, message queues-ს და event-driven architecture-ს.',
      },
      {
        id: 'ep9-h7',
        question: 'როგორ უნდა ოპტიმიზაცია ბუნდოვან Performance Bottlenecks-თან?',
        options: [
          'მხოლოდ intuition',
          'Performance profiling, APM tools, database query analysis და load testing',
          'მხოლოდ code review',
          'Optimization არ არის საჭირო',
        ],
        correctAnswerIndex: 1,
        explanation: 'Performance optimization მოითხოვს performance profiling-ს, APM tools-ს, database query analysis-ს და load testing-ს.',
      },
    ],
  },
];

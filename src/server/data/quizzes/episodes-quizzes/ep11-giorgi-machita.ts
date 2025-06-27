import { Quiz } from '../quizzes.types';

export const ep11GiorgiMachitidzeQuizzes: Quiz[] = [
  // Episode 11: Easy Quiz (Georgian - Backend Development)
  {
    id: 'ep11-giorgi-machita-basics',
    title: 'გიორგი მაჩიტიძე - Backend Development',
    description: 'Backend დეველოპმენტის ძირითადი კონცეფციები.',
    categories: ['web-development'],
    difficulty: 'easy',
    episodeLink: '/episodes/giorgi-machitidze',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep11-e1',
        question: 'რა არის Backend Development?',
        options: ['მხოლოდ UI დიზაინი', 'სერვერის მხარის ლოგიკა, მონაცემთა ბაზები და API-ები', 'მხოლოდ ფრონტენდ', 'მხოლოდ დიზაინი'],
        correctAnswerIndex: 1,
        explanation: 'Backend Development მოიცავს სერვერის მხარის ლოგიკას, მონაცემთა ბაზების მართვას და API-ების შექმნას.',
      },
      {
        id: 'ep11-e2',
        question: 'რომელი ენები გამოიყენება Backend Development-ისთვის?',
        options: ['მხოლოდ HTML/CSS', 'Java, Python, C#, Node.js, Go და სხვები', 'მხოლოდ JavaScript', 'მხოლოდ SQL'],
        correctAnswerIndex: 1,
        explanation: 'Backend Development-ისთვის გამოიყენება ისეთი ენები როგორიცაა Java, Python, C#, Node.js, Go და სხვები.',
      },
      {
        id: 'ep11-e3',
        question: 'რა როლი აქვს მონაცემთა ბაზებს Backend სისტემებში?',
        options: ['არ არის მნიშვნელოვანი', 'მონაცემთა შენახვა, მოძიება და მართვა', 'მხოლოდ ლოგების შენახვა', 'მხოლოდ cache-ისთვის'],
        correctAnswerIndex: 1,
        explanation: 'მონაცემთა ბაზები Backend სისტემებში პასუხისმგებელია მონაცემთა შენახვაზე, მოძიებასა და მართვაზე.',
      },
      {
        id: 'ep11-e4',
        question: 'რა არის API?',
        options: [
          'User Interface',
          'Application Programming Interface - აპლიკაციებს შორის კომუნიკაციის საშუალება',
          'მხოლოდ ვებ დიზაინი',
          'მონაცემთა ბაზის სახეობა',
        ],
        correctAnswerIndex: 1,
        explanation: 'API (Application Programming Interface) არის აპლიკაციებს შორის კომუნიკაციის საშუალება.',
      },
    ],
  },

  // Episode 11: Medium Quiz
  {
    id: 'ep11-giorgi-machita-advanced',
    title: 'Advanced Backend Architecture',
    description: 'ღრმა ტექნიკური კითხვები Backend არქიტექტურის შესახებ.',
    categories: ['web-development'],
    difficulty: 'medium',
    episodeLink: '/episodes/giorgi-machitidze',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep11-m1',
        question: 'რა არის RESTful API-ის პრინციპები?',
        options: ['მხოლოდ HTTP გამოყენება', 'Stateless, Resource-based URLs, HTTP methods, JSON/XML', 'მხოლოდ GET requests', 'მხოლოდ POST requests'],
        correctAnswerIndex: 1,
        explanation: 'RESTful API-ის პრინციპები მოიცავს Stateless კომუნიკაციას, Resource-based URL-ებს, HTTP methods-ს და JSON/XML ფორმატებს.',
      },
      {
        id: 'ep11-m2',
        question: 'როგორ უნდა მოხდეს Error Handling Backend-ში?',
        options: ['Error-ების იგნორირება', 'Structured error responses, logging, და proper status codes', 'მხოლოდ console.log', 'Error-ების დამალვა'],
        correctAnswerIndex: 1,
        explanation: 'Backend-ში Error Handling უნდა მოიცავდეს structured error responses-ს, logging-ს და proper HTTP status codes-ს.',
      },
      {
        id: 'ep11-m3',
        question: 'რა არის Authentication vs Authorization?',
        options: ['ისინი იგივეა', 'Authentication - იდენტიფიკაცია, Authorization - წვდომის უფლებები', 'მხოლოდ პაროლები', 'მხოლოდ tokens'],
        correctAnswerIndex: 1,
        explanation: 'Authentication არის მომხმარებლის იდენტიფიკაცია, ხოლო Authorization არის წვდომის უფლებების განსაზღვრა.',
      },
      {
        id: 'ep11-m4',
        question: 'რატომ არის მნიშვნელოვანი Database Indexing?',
        options: ['არ არის მნიშვნელოვანი', 'Query-ების სისწრაფისთვის და performance-ის გაუმჯობესებისთვის', 'მხოლოდ storage-ისთვის', 'მხოლოდ backup-ისთვის'],
        correctAnswerIndex: 1,
        explanation: 'Database Indexing მნიშვნელოვანია Query-ების სისწრაფისა და საერთო performance-ის გაუმჯობესებისთვის.',
      },
      {
        id: 'ep11-m5',
        question: 'რა გადაწყვეტილებები არსებობს Caching-ისთვის?',
        options: ['Caching არ არის საჭირო', 'Redis, Memcached, Application-level cache, CDN', 'მხოლოდ local storage', 'მხოლოდ database cache'],
        correctAnswerIndex: 1,
        explanation: 'Caching-ისთვის არსებობს სხვადასხვა გადაწყვეტილება: Redis, Memcached, Application-level cache, CDN.',
      },
    ],
  },

  // Episode 11: Hard Quiz
  {
    id: 'ep11-giorgi-machita-expert',
    title: 'Expert Backend Engineering',
    description: 'ექსპერტული Backend engineering კონცეფციები.',
    categories: ['web-development'],
    difficulty: 'hard',
    episodeLink: '/episodes/giorgi-machitidze',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep11-h1',
        question: 'როგორ უნდა დავაპროექტოთ Microservices Communication?',
        options: ['მხოლოდ HTTP calls', 'Async messaging, Event sourcing, SAGA patterns', 'მხოლოდ Database sharing', 'მხოლოდ Synchronous calls'],
        correctAnswerIndex: 1,
        explanation: 'Microservices Communication უნდა მოიცავდეს Async messaging-ს, Event sourcing-ს და SAGA patterns-ს.',
      },
      {
        id: 'ep11-h2',
        question: 'რა არის ACID Properties მონაცემთა ბაზებში?',
        options: ['მხოლოდ Consistency', 'Atomicity, Consistency, Isolation, Durability', 'მხოლოდ Durability', 'მხოლოდ Isolation'],
        correctAnswerIndex: 1,
        explanation: 'ACID Properties მოიცავს: Atomicity, Consistency, Isolation, Durability.',
      },
      {
        id: 'ep11-h3',
        question: 'როგორ უნდა მოვმართოთ Database Sharding?',
        options: ['Sharding არ არის საჭირო', 'Horizontal partitioning based on shard key strategy', 'მხოლოდ Vertical partitioning', 'Random data distribution'],
        correctAnswerIndex: 1,
        explanation: 'Database Sharding მოითხოვს Horizontal partitioning-ს shard key strategy-ის საფუძველზე.',
      },
      {
        id: 'ep11-h4',
        question: 'რა patterns გამოიყენება Distributed Systems-ში?',
        options: ['არავითარი patterns', 'Circuit Breaker, Bulkhead, Timeout, Retry with backoff', 'მხოლოდ Singleton', 'მხოლოდ Observer'],
        correctAnswerIndex: 1,
        explanation: 'Distributed Systems-ში გამოიყენება Circuit Breaker, Bulkhead, Timeout, Retry with backoff patterns.',
      },
      {
        id: 'ep11-h5',
        question: 'როგორ უნდა განვახორციელოთ Event-Driven Architecture?',
        options: ['მხოლოდ Direct calls', 'Message queues, Event buses, Publisher-Subscriber patterns', 'მხოლოდ HTTP webhooks', 'მხოლოდ Database triggers'],
        correctAnswerIndex: 1,
        explanation: 'Event-Driven Architecture მოითხოვს Message queues-ს, Event buses-ს და Publisher-Subscriber patterns-ს.',
      },
      {
        id: 'ep11-h6',
        question: 'რა გათვალისწინებები არსებობს Data Consistency-ისთვის?',
        options: [
          'Consistency არ არის მნიშვნელოვანი',
          'Eventual Consistency, Strong Consistency, CAP theorem',
          'მხოლოდ Strong Consistency',
          'მხოლოდ Weak Consistency',
        ],
        correctAnswerIndex: 1,
        explanation: 'Data Consistency მოითხოვს Eventual/Strong Consistency-ს და CAP theorem-ის გაგებას.',
      },
      {
        id: 'ep11-h7',
        question: 'როგორ უნდა ოპტიმიზაცია Database Performance-ის?',
        options: [
          'Optimization არ არის საჭირო',
          'Query optimization, Index strategies, Connection pooling, Caching',
          'მხოლოდ Hardware upgrade',
          'მხოლოდ More memory',
        ],
        correctAnswerIndex: 1,
        explanation: 'Database Performance optimization მოიცავს Query optimization-ს, Index strategies-ს, Connection pooling-ს და Caching-ს.',
      },
    ],
  },
];

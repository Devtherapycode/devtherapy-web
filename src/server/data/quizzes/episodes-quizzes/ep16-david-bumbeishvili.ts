import { Quiz } from '../quizzes.types';

export const ep16DavidBumbeishviliQuizzes: Quiz[] = [
  // Episode 16: Easy Quiz - Data Visualization & D3.js Basics
  {
    id: 'ep16-david-bumbeishvili-data-viz-basics',
    title: 'Data Visualization და D3.js Basics',
    description: 'მონაცემთა ვიზუალიზაციისა და D3.js-ის ძირითადი კონცეფციები.',
    categories: ['data-visualization', 'web-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/david-bumbeishvili',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep16-e1',
        question: 'რა არის D3.js?',
        options: [
          '3D გრაფიკული ბიბლიოთეკა',
          'Data-Driven Documents - ბიბლიოთეკა ინტერაქტიული ვიზუალიზაციისთვის',
          'მხოლოდ chart ბიბლიოთეკა',
          'Backend ბიბლიოთეკა',
        ],
        correctAnswerIndex: 1,
        explanation: 'D3.js არის Data-Driven Documents - JavaScript ბიბლიოთეკა ინტერაქტიული და dynamic data visualizations-ისთვის.',
      },
      {
        id: 'ep16-e2',
        question: 'რა უპირატესობა აქვს custom data visualization-ს standard charts-თან შედარებით?',
        options: ['არავითარი უპირატესობა', 'Tailored design, specific business needs, unique insights', 'მხოლოდ ვიზუალური სილამაზე', 'მხოლოდ სიჩქარე'],
        correctAnswerIndex: 1,
        explanation: 'Custom data visualization საშუალებას აძლევს tailored design, specific business needs-ზე ფოკუსირება და unique insights-ის მიღება.',
      },
      {
        id: 'ep16-e3',
        question: 'რატომ არის მნიშვნელოვანი data visualization თანამედროვე ბიზნესში?',
        options: ['მხოლოდ ესთეტიკისთვის', 'Complex data-ის გაგებადად წარმოჩენა და decision making', 'მხოლოდ პრეზენტაციისთვის', 'მხოლოდ მარკეტინგისთვის'],
        correctAnswerIndex: 1,
        explanation: 'Data visualization მნიშვნელოვანია complex data-ის გაგებადად წარმოჩენისა და informed decision making-ისთვის.',
      },
      {
        id: 'ep16-e4',
        question: 'რა განსხვავებაა 2D და 3D visualization-ს შორის?',
        options: [
          'არავითარი განსხვავება',
          '2D უფრო მარტივია perception-ისთვის, 3D უფრო immersive მაგრამ რთული',
          'მხოლოდ ვიზუალური',
          'მხოლოდ ტექნიკური სირთულე',
        ],
        correctAnswerIndex: 1,
        explanation: '2D visualization უფრო მარტივია perception-ისთვის, ხოლო 3D უფრო immersive მაგრამ შეიძლება იყოს რთული interpretation-ისთვის.',
      },
    ],
  },

  // Episode 16: Medium Quiz - Freelancing & AI Tools
  {
    id: 'ep16-david-bumbeishvili-freelancing-ai',
    title: 'Freelancing Upwork-ზე და AI Tools',
    description: 'Freelance market-ის სპეციფიკა და AI tools-ის გამოყენება development-ში.',
    categories: ['freelancing', 'ai', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/david-bumbeishvili',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep16-m1',
        question: 'როგორ უნდა დაიწყოს Upwork-ზე მუშაობა?',
        options: [
          'იმედი high rates-ზე',
          'Quality portfolio, competitive pricing initially, badges earning',
          'მხოლოდ expensive rates',
          'მხოლოდ mass applications',
        ],
        correctAnswerIndex: 1,
        explanation: 'Upwork-ზე წარმატებისთვის საჭიროა quality portfolio, დასაწყისში competitive pricing და badges-ის earned.',
      },
      {
        id: 'ep16-m2',
        question: 'როგორ უნდა გამკლავება spam-თან freelance platforms-ზე?',
        options: [
          'ყველა proposal-ის მიღება',
          'Client verification, project details analysis, clear communication',
          'მხოლოდ high budget projects',
          'მხოლოდ გრძელვადიანი კონტრაქტები',
        ],
        correctAnswerIndex: 1,
        explanation: 'Spam-ის თავიდან აცილება საჭიროებს client verification-ს, project details-ის analysis-ს და clear communication-ს.',
      },
      {
        id: 'ep16-m3',
        question: 'რა განსხვავებაა AI assistants-სა და AI agents-ს შორის?',
        options: [
          'არავითარი განსხვავება',
          'Assistants დახმარება გაწევს, Agents autonomous actions შეუძლიათ',
          'მხოლოდ interface განსხვავება',
          'მხოლოდ ფასობრივი განსხვავება',
        ],
        correctAnswerIndex: 1,
        explanation: 'AI assistants დახმარება გაწევენ tasks-ში, ხოლო AI agents შეუძლიათ autonomous actions-ის შესრულება minimal supervision-ით.',
      },
      {
        id: 'ep16-m4',
        question: 'როგორ უნდა გამოიყენოს AI tools (GPT, Claude, Cursor) development-ში?',
        options: ['AI-ს სრული დამოკიდებულება', 'Code generation, debugging assistance, learning support', 'მხოლოდ documentation', 'AI-ის სრული უგულებელყოფა'],
        correctAnswerIndex: 1,
        explanation: 'AI tools საუკეთესოდ გამოიყენება code generation-ისთვის, debugging assistance-ისა და learning support-ისთვის.',
      },
      {
        id: 'ep16-m5',
        question: 'რა მნიშვნელობა აქვს remote work setup-ს?',
        options: ['არ არის მნიშვნელოვანი', 'Productivity, health, client presentation quality', 'მხოლოდ კომფორტი', 'მხოლოდ ვიზუალური'],
        correctAnswerIndex: 1,
        explanation: 'Remote work setup-ი გავლენას ახდენს productivity-ზე, health-ზე და client presentation quality-ზე.',
      },
    ],
  },

  // Episode 16: Hard Quiz - Graphics Programming & 3D Visualization
  {
    id: 'ep16-david-bumbeishvili-graphics-programming',
    title: 'Graphics Programming და 3D Visualization',
    description: 'ღრმა კითხვები graphics programming-სა და 3D visualization-ზე.',
    categories: ['graphics-engineering', 'web-development', 'data-visualization', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/david-bumbeishvili',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep16-h1',
        question: 'რა არის WebGL და როგორ განსხვავდება Canvas-ისგან?',
        options: [
          'იგივეა',
          'WebGL არის GPU-powered 3D graphics API, Canvas არის 2D drawing API',
          'მხოლოდ browser support-ის განსხვავება',
          'მხოლოდ syntax განსხვავება',
        ],
        correctAnswerIndex: 1,
        explanation: 'WebGL არის GPU-powered 3D graphics API OpenGL ES-ზე დაფუძნებული, ხოლო Canvas არის 2D drawing API.',
      },
      {
        id: 'ep16-h2',
        question: 'რა არის Ray-casting და სად გამოიყენება?',
        options: [
          'მხოლოდ game development',
          '3D rendering technique for visibility calculation და collision detection',
          'მხოლოდ animation',
          'მხოლოდ data visualization',
        ],
        correctAnswerIndex: 1,
        explanation: 'Ray-casting არის 3D rendering technique რომელიც გამოიყენება visibility calculation-ისა და collision detection-ისთვის.',
      },
      {
        id: 'ep16-h3',
        question: 'რა განსხვავებაა Metal, OpenGL და WebGL-ს შორის?',
        options: ['არავითარი განსხვავება', 'Metal არის Apple-ის low-level API, OpenGL cross-platform, WebGL web-based', 'მხოლოდ syntax', 'მხოლოდ performance'],
        correctAnswerIndex: 1,
        explanation: 'Metal არის Apple-ის low-level graphics API, OpenGL არის cross-platform, WebGL არის web-based OpenGL ES.',
      },
      {
        id: 'ep16-h4',
        question: 'როდის უნდა გამოიყენოს 3D visualization 2D-ის ნაცვლად?',
        options: ['ყოველთვის 3D', 'Spatial relationships, immersive experience, complex geometries', 'არასდროს 3D', 'მხოლოდ ვიზუალური ეფექტისთვის'],
        correctAnswerIndex: 1,
        explanation: '3D visualization უნდა გამოიყენოს spatial relationships-ისთვის, immersive experience-ისა და complex geometries-ის ვიზუალიზაციისთვის.',
      },
      {
        id: 'ep16-h5',
        question: 'რა challenges არსებობს large-scale data visualization-ში?',
        options: ['არავითარი challenges', 'Performance optimization, memory management, progressive loading', 'მხოლოდ ვიზუალური design', 'მხოლოდ data quality'],
        correctAnswerIndex: 1,
        explanation: 'Large-scale data visualization challenges მოიცავს performance optimization-ს, memory management-ს და progressive loading-ს.',
      },
      {
        id: 'ep16-h6',
        question: 'როგორ უნდა approach-ი open source contribution-ისადმი?',
        options: [
          'contribution არ არის საჭირო',
          'Start small, understand codebase, follow contribution guidelines',
          'მხოლოდ დიდი features',
          'მხოლოდ bug fixes',
        ],
        correctAnswerIndex: 1,
        explanation: 'Open source contribution უნდა დაიწყოს small contributions-ით, codebase-ის გაგებით და contribution guidelines-ის დაცვით.',
      },
      {
        id: 'ep16-h7',
        question: 'რა strategies არსებობს portfolio building-ისთვის data visualization field-ში?',
        options: [
          'მხოლოდ completed projects',
          'Diverse project types, process documentation, interactive demos',
          'მხოლოდ client work',
          'მხოლოდ personal projects',
        ],
        correctAnswerIndex: 1,
        explanation: 'Data visualization portfolio უნდა შეიცავდეს diverse project types-ს, process documentation-ს და interactive demos-ს.',
      },
    ],
  },
];

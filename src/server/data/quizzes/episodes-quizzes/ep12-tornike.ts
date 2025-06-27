import { Quiz } from '../quizzes.types';

export const ep12TornikeQuizzes: Quiz[] = [
  // Episode 12: Easy Quiz - GoLang and Development Philosophy Basics
  {
    id: 'ep12-tornike-basics',
    title: 'თორნიკე რაზმაძე - GoLang და დეველოპმენტის ფილოსოფია',
    description: 'ძირითადი კითხვები თორნიკე რაზმაძის შესახებ, GoLang-ზე და დეველოპმენტის ფილოსოფიაზე.',
    categories: ['backend', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/tornike-razmadze',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep12-e1',
        question: 'რა სტატუსი აქვს თორნიკე რაზმაძეს GoLang კომუნიტეტში საქართველოში?',
        options: ['მხოლოდ დამწყები', 'ერთ-ერთი პირველი Gopher საქართველოში', 'GoLang არ იცის', 'Java დეველოპერი'],
        correctAnswerIndex: 1,
        explanation: 'თორნიკე რაზმაძე არის ერთ-ერთი პირველი Gopher-ი (Go დეველოპერი) საქართველოში.',
      },
      {
        id: 'ep12-e2',
        question: 'რა არის Go-ს (GoLang) ძირითადი ფილოსოფია?',
        options: ['კომპლექსურობა', 'სიმარტივე და ეფექტურობა', 'ბევრი feature', 'რთული სინტაქსი'],
        correctAnswerIndex: 1,
        explanation: 'Go-ს ძირითადი ფილოსოფია არის სიმარტივე და ეფექტურობა - "less is more" მიდგომა.',
      },
      {
        id: 'ep12-e3',
        question: 'რა ტიპის აპლიკაციებისთვის არის Go კარგი არჩევანი?',
        options: ['მხოლოდ desktop აპლიკაციები', 'მიკროსერვისები, backend სისტემები და concurrent პროგრამები', 'მხოლოდ mobile აპლიკაციები', 'მხოლოდ frontend'],
        correctAnswerIndex: 1,
        explanation: 'Go განსაკუთრებით კარგია მიკროსერვისებისთვის, backend სისტემებისთვის და concurrent პროგრამებისთვის.',
      },
      {
        id: 'ep12-e4',
        question: 'რა არის გოლანგის ერთ-ერთი მთავარი უპირატესობა?',
        options: ['კომპლექსური feature-ები', 'შედარებით მარტივი syntax და ძლიერი concurrency support', 'ძალიან ბევრი ბიბლიოთეკა', 'რთული კონფიგურაცია'],
        correctAnswerIndex: 1,
        explanation: 'Go-ს მთავარი უპირატესობებია მარტივი syntax და ძლიერი built-in concurrency support.',
      },
    ],
  },

  // Episode 12: Medium Quiz - Development Philosophies and Tooling
  {
    id: 'ep12-tornike-advanced',
    title: 'დეველოპმენტის ფილოსოფია და ხელსაწყოები',
    description: 'ღრმა კითხვები დეველოპმენტის ფილოსოფიაზე, მეთოდოლოგიებზე და თანამედროვე ხელსაწყოებზე.',
    categories: ['backend', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/tornike-razmadze',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep12-m1',
        question: 'რა პრობლემები შეიძლება იყოს Agile-ის არასწორ იმპლემენტაციაში?',
        options: [
          'Agile-ს პრობლემები არ აქვს',
          'ბიუროკრატიის ზრდა, არაეფექტური მიტინგები და process-ზე ფოკუსირება result-ის ნაცვლად',
          'ძალიან სწრაფი განვითარება',
          'მხოლოდ ტექნიკური პრობლემები',
        ],
        correctAnswerIndex: 1,
        explanation: 'Agile-ის არასწორი იმპლემენტაცია შეიძლება გამოიწვიოს ბიუროკრატიის ზრდა და არაეფექტური process-ები.',
      },
      {
        id: 'ep12-m2',
        question: 'რა მნიშვნელობა აქვს simplicity-ს software development-ში?',
        options: [
          'Simplicity აფერხებს ინოვაციას',
          'Simplicity ამარტივებს maintenance-ს, ამცირებს bugs-ს და აუმჯობესებს readability-ს',
          'Simplicity მხოლოდ დამწყებებისთვისაა',
          'Complex solutions ყოველთვის უკეთესია',
        ],
        correctAnswerIndex: 1,
        explanation: 'Simplicity ამარტივებს კოდის maintenance-ს, ამცირებს bugs-ს და აუმჯობესებს code readability-ს.',
      },
      {
        id: 'ep12-m3',
        question: 'რა არის Extreme Programming-ის (XP) ძირითადი პრინციპები?',
        options: ['მხოლოდ სწრაფი კოდირება', 'Pair programming, TDD, continuous integration, simple design', 'მხოლოდ solo work', 'რთული არქიტექტურა'],
        correctAnswerIndex: 1,
        explanation: 'Extreme Programming მოიცავს pair programming-ს, TDD-ს, continuous integration-ს და simple design-ს.',
      },
      {
        id: 'ep12-m4',
        question: 'რა როლი აქვს tooling-ს თანამედროვე development-ში?',
        options: [
          'Tooling არ არის მნიშვნელოვანი',
          'კარგი tooling ზრდის productivity-ს და ამცირებს manual errors-ს',
          'მხოლოდ debugging-ისთვის',
          'მხოლოდ დამწყებებისთვის',
        ],
        correctAnswerIndex: 1,
        explanation: 'კარგი tooling მნიშვნელოვნად ზრდის developer productivity-ს და ამცირებს manual errors-ს.',
      },
      {
        id: 'ep12-m5',
        question: 'რა განსხვავებაა Startup-ის და Corporation-ის development მიდგომებს შორის?',
        options: [
          'არავითარი განსხვავება',
          'Startup - სწრაფი iteration, Corporation - უფრო მეტი process და stability',
          'Startup-ები მხოლოდ slow არიან',
          'Corporation-ები მხოლოდ ინოვაციურნი არიან',
        ],
        correctAnswerIndex: 1,
        explanation: 'Startup-ები ფოკუსირებულნი არიან სწრაფ iteration-ზე, ხოლო Corporation-ები - process-ებსა და stability-ზე.',
      },
    ],
  },

  // Episode 12: Hard Quiz - Advanced Go and Software Engineering Philosophy
  {
    id: 'ep12-tornike-expert',
    title: 'Advanced Go და Software Engineering ფილოსოფია',
    description: 'ექსპერტული კითხვები Go-ს advanced features-ზე და software engineering ფილოსოფიაზე.',
    categories: ['backend', 'career-development', 'leadership', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/tornike-razmadze',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep12-h1',
        question: 'რა არის Go-ს concurrency model-ის ძირითადი კონცეფციები?',
        options: [
          'მხოლოდ threads',
          'Goroutines, channels, "Don\'t communicate by sharing memory; share memory by communicating"',
          'მხოლოდ async/await',
          'Traditional threading model',
        ],
        correctAnswerIndex: 1,
        explanation: 'Go-ს concurrency model ეფუძნება goroutines-ს, channels-ს და "Don\'t communicate by sharing memory" ფილოსოფიას.',
      },
      {
        id: 'ep12-h2',
        question: 'რა არის Uncle Bob-ის მოსაზრება ფუნქციების სიგრძეზე და რატომ არის ეს დისკუსიური?',
        options: [
          'ფუნქციების სიგრძე არ არის მნიშვნელოვანი',
          'Uncle Bob ურჩევს მოკლე ფუნქციებს, მაგრამ ზოგჯერ context და readability უფრო მნიშვნელოვანია',
          'ყოველთვის გრძელი ფუნქციები უკეთესია',
          'ფუნქციების სიგრძეს არავითარი წესი არ აქვს',
        ],
        correctAnswerIndex: 1,
        explanation: 'Uncle Bob ურჩევს მოკლე ფუნქციებს, მაგრამ ზოგჯერ context და readability უფრო მნიშვნელოვანია მკაცრი წესების დაცვაზე.',
      },
      {
        id: 'ep12-h3',
        question: 'რა პრობლემებია დაზეპირებულ სტანდარტებთან (Cargo Cult Programming)?',
        options: [
          'სტანდარტები ყოველთვის კარგია',
          'ბრმა წესების მიყოლა context-ის გარეშე, ფორმალობაზე ფოკუსირება result-ის ნაცვლად',
          'სტანდარტები საჭირო არ არის',
          'მხოლოდ ახალი სტანდარტები არის კარგი',
        ],
        correctAnswerIndex: 1,
        explanation: 'Cargo Cult Programming ნიშნავს წესების ბრმა მიყოლას context-ისა და result-ის გაგების გარეშე.',
      },
      {
        id: 'ep12-h4',
        question: 'როგორ ავლენს AI და LLM-ები development process-ზე?',
        options: [
          'AI სრულიად ანაცვლებს პროგრამისტებს',
          'AI ხელს უწყობს productivity-ს, მაგრამ ფუნდამენტური ცოდნა და critical thinking რჩება მნიშვნელოვანი',
          'AI არ ავლენს',
          'AI მხოლოდ საზიანოა',
        ],
        correctAnswerIndex: 1,
        explanation: 'AI და LLM-ები ზრდიან productivity-ს, მაგრამ ფუნდამენტური ცოდნა, critical thinking და problem-solving skills რჩება მნიშვნელოვანი.',
      },
      {
        id: 'ep12-h5',
        question: 'რა მნიშვნელობა აქვს Pair Programming-ს?',
        options: [
          'Pair Programming ანელებს განვითარებას',
          'ზრდის code quality-ს, knowledge sharing-ს და ამცირებს bugs-ს',
          'მხოლოდ დამწყებებისთვისაა',
          'Pair Programming არაეფექტურია',
        ],
        correctAnswerIndex: 1,
        explanation: 'Pair Programming ზრდის code quality-ს, ხელს უწყობს knowledge sharing-ს და მნიშვნელოვნად ამცირებს bugs-ს.',
      },
      {
        id: 'ep12-h6',
        question: 'რა გათვალისწინებები არსებობს Remote Work-ისთვის development გუნდებში?',
        options: [
          'Remote Work შეუძლებელია',
          'კომუნიკაციის ხელსაწყოები, clear processes, trust და asynchronous collaboration',
          'მხოლოდ video calls',
          'Remote Work ყოველთვის უკეთესია',
        ],
        correctAnswerIndex: 1,
        explanation: 'წარმატებული Remote Work მოითხოვს კარგ კომუნიკაციის ხელსაწყოებს, clear processes-ს, trust-სა და asynchronous collaboration-ს.',
      },
      {
        id: 'ep12-h7',
        question: 'რა არის "სიახლის შიშის" (Fear of New) პრობლემა development-ში?',
        options: [
          'ახალი ტექნოლოგიები ყოველთვის ცუდია',
          'ბალანსი საჭიროა ინოვაციასა და stability-ს შორის, ახალი არ ნიშნავს ყოველთვის უკეთესს',
          'ყოველთვის უნდა გამოვიყენოთ ახალი ტექნოლოგიები',
          'ძველი ტექნოლოგიები საუკეთესოა',
        ],
        correctAnswerIndex: 1,
        explanation: 'სწორი მიდგომა მოითხოვს ბალანსს ინოვაციასა და stability-ს შორის - ახალი ტექნოლოგია არ ნიშნავს ყოველთვის უკეთეს გადაწყვეტილებას.',
      },
    ],
  },
];

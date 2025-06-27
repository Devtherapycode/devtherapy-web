import { Quiz } from '../quizzes.types';

export const ep12TornikeQuizzes: Quiz[] = [
  // Episode 12: Easy Quiz (Georgian - iOS Development)
  {
    id: 'ep12-tornike-basics',
    title: 'თორნიკე რაზმაძე - iOS Development',
    description: 'iOS დეველოპმენტის ძირითადი კონცეფციები.',
    categories: ['mobile-development', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/tornike-razmadze',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep12-e1',
        question: 'რა ენა გამოიყენება iOS Development-ისთვის?',
        options: ['Java', 'Swift და Objective-C', 'Python', 'JavaScript'],
        correctAnswerIndex: 1,
        explanation: 'iOS Development-ისთვის ძირითადად გამოიყენება Swift და Objective-C ენები.',
      },
      {
        id: 'ep12-e2',
        question: 'რა არის Xcode?',
        options: ['Text Editor', 'Apple-ის Integrated Development Environment (IDE)', 'Mobile Framework', 'Testing Tool'],
        correctAnswerIndex: 1,
        explanation: 'Xcode არის Apple-ის ოფიციალური Integrated Development Environment (IDE) iOS აპლიკაციების შესაქმნელად.',
      },
      {
        id: 'ep12-e3',
        question: 'რა არის App Store?',
        options: ['Development Tool', 'Apple-ის ოფიციალური მაღაზია iOS აპლიკაციებისთვის', 'Code Repository', 'Design Tool'],
        correctAnswerIndex: 1,
        explanation: 'App Store არის Apple-ის ოფიციალური მაღაზია iOS აპლიკაციების ძიება, ჩამოტვირთვა და შეძენისთვის.',
      },
      {
        id: 'ep12-e4',
        question: 'რა არის iOS-ის UI Framework?',
        options: ['Android Studio', 'UIKit და SwiftUI', 'React Native', 'Flutter'],
        correctAnswerIndex: 1,
        explanation: 'iOS-ის ძირითადი UI Framework-ები არის UIKit (traditional) და SwiftUI (modern declarative).',
      },
    ],
  },

  // Episode 12: Medium Quiz
  {
    id: 'ep12-tornike-advanced',
    title: 'Advanced iOS Development',
    description: 'ღრმა ტექნიკური კითხვები iOS დეველოპმენტის შესახებ.',
    categories: ['mobile-development', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/tornike-razmadze',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep12-m1',
        question: 'რა არის MVC vs MVVM არქიტექტურული patterns iOS-ში?',
        options: ['ისინი იგივეა', 'MVC - Model-View-Controller, MVVM - Model-View-ViewModel', 'მხოლოდ MVC არსებობს', 'მხოლოდ MVVM არსებობს'],
        correctAnswerIndex: 1,
        explanation: 'MVC (Model-View-Controller) და MVVM (Model-View-ViewModel) არის სხვადასხვა არქიტექტურული patterns iOS-ში.',
      },
      {
        id: 'ep12-m2',
        question: 'რა არის Auto Layout iOS-ში?',
        options: ['Automatic code generation', 'UI constraint system for adaptive layouts', 'Memory management', 'Performance optimization'],
        correctAnswerIndex: 1,
        explanation: 'Auto Layout არის UI constraint system, რომელიც საშუალებას აძლევს შევქმნათ adaptive layouts-ები სხვადასხვა screen size-ებისთვის.',
      },
      {
        id: 'ep12-m3',
        question: 'რა არის Delegate Pattern iOS-ში?',
        options: ['Memory management technique', 'Communication pattern between objects', 'UI design pattern', 'Database pattern'],
        correctAnswerIndex: 1,
        explanation: 'Delegate Pattern არის კომუნიკაციის პატერნი ობიექტებს შორის, რომელიც ფართოდ გამოიყენება iOS დეველოპმენტში.',
      },
      {
        id: 'ep12-m4',
        question: 'რა არის Core Data?',
        options: ['UI Framework', 'Apple-ის object graph და persistence framework', 'Network Library', 'Testing Framework'],
        correctAnswerIndex: 1,
        explanation: 'Core Data არის Apple-ის object graph და persistence framework მონაცემთა local შენახვისთვის.',
      },
      {
        id: 'ep12-m5',
        question: 'რა არის iOS App Lifecycle?',
        options: ['მხოლოდ App Launch', 'Not Running, Inactive, Active, Background, Suspended states', 'მხოლოდ Foreground state', 'მხოლოდ Background state'],
        correctAnswerIndex: 1,
        explanation: 'iOS App Lifecycle მოიცავს: Not Running, Inactive, Active, Background, Suspended states-ებს.',
      },
    ],
  },

  // Episode 12: Hard Quiz
  {
    id: 'ep12-tornike-expert',
    title: 'Expert iOS Engineering',
    description: 'ექსპერტული iOS engineering კონცეფციები.',
    categories: ['mobile-development', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/tornike-razmadze',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep12-h1',
        question: 'როგორ მუშაობს Memory Management iOS-ში?',
        options: [
          'Manual memory management',
          'ARC (Automatic Reference Counting) with retain cycles consideration',
          'Garbage Collection',
          'მხოლოდ manual allocation',
        ],
        correctAnswerIndex: 1,
        explanation: 'iOS იყენებს ARC (Automatic Reference Counting)-ს memory management-ისთვის, მაგრამ retain cycles-ის გათვალისწინებით.',
      },
      {
        id: 'ep12-h2',
        question: 'რა არის GCD (Grand Central Dispatch)?',
        options: ['UI Framework', 'Concurrency and parallelism management system', 'Database Framework', 'Network Library'],
        correctAnswerIndex: 1,
        explanation: 'GCD (Grand Central Dispatch) არის Apple-ის concurrency და parallelism management system.',
      },
      {
        id: 'ep12-h3',
        question: 'როგორ უნდა ოპტიმიზაცია iOS App Performance-ის?',
        options: [
          'Optimization არ არის საჭირო',
          'Instruments profiling, lazy loading, image optimization, memory management',
          'მხოლოდ faster device',
          'მხოლოდ code minification',
        ],
        correctAnswerIndex: 1,
        explanation: 'iOS Performance optimization მოიცავს Instruments profiling-ს, lazy loading-ს, image optimization-ს და memory management-ს.',
      },
      {
        id: 'ep12-h4',
        question: 'რა არის SwiftUI vs UIKit trade-offs?',
        options: ['ისინი იგივეა', 'SwiftUI - declarative/modern, UIKit - imperative/mature ecosystem', 'SwiftUI არ არის production-ready', 'UIKit outdated'],
        correctAnswerIndex: 1,
        explanation: 'SwiftUI არის declarative და modern, ხოლო UIKit imperative მაგრამ უფრო mature ecosystem-ით.',
      },
      {
        id: 'ep12-h5',
        question: 'როგორ უნდა მოხდეს App Security iOS-ში?',
        options: [
          'Security არ არის მნიშვნელოვანი',
          'Keychain, App Transport Security, Code obfuscation, Certificate pinning',
          'მხოლოდ strong passwords',
          'მხოლოდ HTTPS',
        ],
        correctAnswerIndex: 1,
        explanation: 'iOS App Security მოიცავს Keychain-ს, App Transport Security-ს, Code obfuscation-ს და Certificate pinning-ს.',
      },
      {
        id: 'ep12-h6',
        question: 'რა strategies არსებობს iOS App Architecture-ისთვის?',
        options: ['მხოლოდ MVC', 'MVVM, VIPER, Clean Architecture, Coordinator pattern', 'მხოლოდ Singleton patterns', 'No architecture needed'],
        correctAnswerIndex: 1,
        explanation: 'iOS App Architecture-ისთვის არსებობს MVVM, VIPER, Clean Architecture, Coordinator pattern და სხვები.',
      },
      {
        id: 'ep12-h7',
        question: 'როგორ უნდა Testing iOS Applications?',
        options: ['Testing არ არის საჭირო', 'Unit tests, UI tests, Integration tests, TDD approach', 'მხოლოდ manual testing', 'მხოლოდ UI testing'],
        correctAnswerIndex: 1,
        explanation: 'iOS Testing მოიცავს Unit tests-ს, UI tests-ს, Integration tests-ს და TDD approach-ს.',
      },
    ],
  },
];

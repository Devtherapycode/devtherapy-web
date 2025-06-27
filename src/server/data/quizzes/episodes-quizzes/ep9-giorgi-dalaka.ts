import { Quiz } from '../quizzes.types';

export const ep9GiorgiDalakaQuizzes: Quiz[] = [
  // Episode 9: Easy Quiz - Microsoft MVP and .NET Basics
  {
    id: 'ep9-giorgi-dalaka-basics',
    title: 'გიორგი დალაქიშვილი - Microsoft MVP და .NET ძირითადები',
    description: 'ძირითადი კითხვები გიორგი დალაქიშვილის შესახებ და Microsoft MVP სტატუსზე.',
    categories: ['backend', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/giorgi-dalakishvili',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep9-e1',
        question: 'რა სტატუსი აქვს გიორგი დალაქიშვილს საქართველოში?',
        options: ['Microsoft Developer', 'საქართველოში ერთადერთი Microsoft MVP', 'Google Developer Expert', 'AWS Ambassador'],
        correctAnswerIndex: 1,
        explanation: 'გიორგი დალაქიშვილი არის საქართველოში ერთადერთი Microsoft MVP (Most Valuable Professional).',
      },
      {
        id: 'ep9-e2',
        question: 'რა ტექნოლოგიაში სპეციალიზდება გიორგი?',
        options: ['Java', '.NET და C#', 'Python', 'JavaScript'],
        correctAnswerIndex: 1,
        explanation: 'გიორგი სპეციალიზდება .NET ეკოსისტემაში და C# პროგრამირების ენაში.',
      },
      {
        id: 'ep9-e3',
        question: 'რა მნიშვნელობისაა Microsoft MVP სტატუსი?',
        options: [
          'მხოლოდ ტიტული',
          'მიღება Microsoft-ს მხარდაჭერისა, რესურსებისა და საერთაშორისო კომუნიტეტთან წვდომისა',
          'მხოლოდ სერტიფიკატი',
          'ჯანდაცვის უზრუნველყოფა',
        ],
        correctAnswerIndex: 1,
        explanation: 'Microsoft MVP სტატუსი იძლევა Microsoft-ს მხარდაჭერას, სპეციალურ რესურსებზე წვდომასა და საერთაშორისო developer კომუნიტეტთან კავშირს.',
      },
      {
        id: 'ep9-e4',
        question: 'რა საქმიანობაშია ჩართული გიორგი Open Source სფეროში?',
        options: [
          'არ მუშაობს Open Source-ზე',
          'ქმნის და ავითარებს პოპულარულ Open Source ბიბლიოთეკებს',
          'მხოლოდ იყენებს Open Source კოდს',
          'მხოლოდ ტესტირებას აკეთებს',
        ],
        correctAnswerIndex: 1,
        explanation: 'გიორგი ქმნის და ავითარებს პოპულარულ Open Source ბიბლიოთეკებს, როგორიცაა EntityFramework.Exceptions და DuckDB.NET.',
      },
    ],
  },

  // Episode 9: Medium Quiz - .NET Ecosystem and Open Source
  {
    id: 'ep9-giorgi-dalaka-advanced',
    title: '.NET ეკოსისტემა და Open Source პროექტები',
    description: 'ღრმა ტექნიკური კითხვები .NET ეკოსისტემასა და Open Source განვითარებაზე.',
    categories: ['backend', 'open-source', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/giorgi-dalakishvili',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep9-m1',
        question: 'რომელია გიორგის ერთ-ერთი ყველაზე პოპულარული Open Source პროექტი?',
        options: ['React.Extensions', 'EntityFramework.Exceptions', 'Angular.Core', 'Vue.Helpers'],
        correctAnswerIndex: 1,
        explanation: 'EntityFramework.Exceptions არის გიორგის ერთ-ერთი ყველაზე პოპულარული Open Source პროექტი.',
      },
      {
        id: 'ep9-m2',
        question: 'რა ტიპის ბიბლიოთეკაა DuckDB.NET?',
        options: ['Web Framework', '.NET wrapper DuckDB მონაცემთა ბაზისთვის', 'UI კომპონენტი', 'Testing Framework'],
        correctAnswerIndex: 1,
        explanation: 'DuckDB.NET არის .NET wrapper DuckDB მონაცემთა ბაზისთვის.',
      },
      {
        id: 'ep9-m3',
        question: 'რა მნიშვნელობა აქვს Entity Framework-ს .NET ეკოსისტემაში?',
        options: [
          'მხოლოდ UI Framework',
          'Object-Relational Mapping (ORM) ინსტრუმენტი მონაცემთა ბაზებთან სამუშაოდ',
          'ტესტირების ფრეიმვორკი',
          'გრაფიკული ინტერფეისი',
        ],
        correctAnswerIndex: 1,
        explanation: 'Entity Framework არის ORM ინსტრუმენტი, რომელიც გაამარტივებს .NET აპლიკაციებში მონაცემთა ბაზებთან მუშაობას.',
      },
      {
        id: 'ep9-m4',
        question: 'რა გამოწვევები არსებობს Open Source ბიბლიოთეკების განვითარებაში?',
        options: ['არავითარი გამოწვევა', 'მომხმარებელთა support, documentation, versioning და backward compatibility', 'მხოლოდ კოდის წერა', 'მხოლოდ ტესტირება'],
        correctAnswerIndex: 1,
        explanation: 'Open Source ბიბლიოთეკების განვითარება მოითხოვს მომხმარებელთა support-ს, documentation-ს, versioning-ს და backward compatibility-ს.',
      },
      {
        id: 'ep9-m5',
        question: 'როგორ ვითარდება Microsoft-ის ეკოსისტემა?',
        options: [
          'არ ვითარდება',
          'მუდმივი განახლებები, ახალი ტექნოლოგიები და open source მიდგომა',
          'მხოლოდ ძველი ტექნოლოგიები',
          'მხოლოდ Windows-ზე ფოკუსირება',
        ],
        correctAnswerIndex: 1,
        explanation: 'Microsoft-ის ეკოსისტემა მუდმივად ვითარდება ახალი ტექნოლოგიებით, open source მიდგომითა და cross-platform მხარდაჭერით.',
      },
    ],
  },

  // Episode 9: Hard Quiz - AI Impact and Software Architecture
  {
    id: 'ep9-giorgi-dalaka-expert',
    title: 'AI-ს გავლენა პროგრამირებაზე და Software Architecture',
    description: 'ექსპერტული კითხვები AI-ს გავლენაზე development-ზე და software architecture-ზე.',
    categories: ['ai', 'backend', 'software-architecture', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/giorgi-dalakishvili',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep9-h1',
        question: 'როგორ ავლენს AI ტექნოლოგიები პროგრამირების პროცესზე?',
        options: ['არ ავლენს', 'კოდის ავტომატური გენერაცია, debugging დახმარება და productivity-ს ზრდა', 'მხოლოდ ტესტირებაში', 'მხოლოდ documentation-ში'],
        correctAnswerIndex: 1,
        explanation: 'AI ტექნოლოგიები ხელს უწყობენ კოდის ავტომატურ გენერაციას, debugging-ს და developer-ების productivity-ს ზრდას.',
      },
      {
        id: 'ep9-h2',
        question: 'რა როლი აქვს Software Architect-ს?',
        options: [
          'მხოლოდ კოდის წერა',
          'სისტემის არქიტექტურული გადაწყვეტილებების მიღება, ტექნიკური ლიდერობა და გუნდის მართვა',
          'მხოლოდ დოკუმენტაციის წერა',
          'მხოლოდ ტესტირება',
        ],
        correctAnswerIndex: 1,
        explanation: 'Software Architect-ი პასუხისმგებელია სისტემის არქიტექტურულ გადაწყვეტილებებზე, ტექნიკურ ლიდერობასა და გუნდის მართვაზე.',
      },
      {
        id: 'ep9-h3',
        question: 'რა პრობლემები ჩნდება ახალი დეველოპერების რაოდენობის ზრდასთან ერთად?',
        options: [
          'არავითარი პრობლემა',
          'ხარისხის დაქვეითება, surface-level ცოდნა და სიღრმისეული understanding-ის ნაკლებობა',
          'მხოლოდ პოზიტიური ეფექტები',
          'მხოლოდ competition-ის ზრდა',
        ],
        correctAnswerIndex: 1,
        explanation: 'ახალი დეველოპერების რაოდენობის ზრდა ხშირად იწვევს ხარისხის დაქვეითებას და surface-level ცოდნის პრობლემას.',
      },
      {
        id: 'ep9-h4',
        question: 'რა მოლოდინები აქვთ დამწყებ დეველოპერებს და რა არის რეალობა?',
        options: [
          'მოლოდინები და რეალობა ემთხვევა',
          'მაღალი მოლოდინები სწრაფი წარმატებისა, რეალობაში კი გრძელვადიანი სწავლა და პრაქტიკაა საჭირო',
          'დაბალი მოლოდინები',
          'მხოლოდ რეალისტური მოლოდინები',
        ],
        correctAnswerIndex: 1,
        explanation: 'დამწყებ დეველოპერებს ხშირად აქვთ მაღალი მოლოდინები სწრაფი წარმატებისა, თუმცა რეალობაში გრძელვადიანი სწავლა და პრაქტიკაა საჭირო.',
      },
      {
        id: 'ep9-h5',
        question: 'რა პრობლემა არსებობს ტექნოლოგიების სწრაფი ათვისების მცდელობებთან დაკავშირებით?',
        options: ['არავითარი პრობლემა', 'სიღრმისეული ცოდნის ნაკლებობა და fundamentals-ის გამოტოვება', 'ყველაფერი კარგია', 'მხოლოდ დროის დაზოგვა'],
        correctAnswerIndex: 1,
        explanation: 'ტექნოლოგიების სწრაფი ათვისების მცდელობა ხშირად იწვევს სიღრმისეული ცოდნის ნაკლებობასა და fundamentals-ის გამოტოვებას.',
      },
      {
        id: 'ep9-h6',
        question: 'რა მნიშვნელობა აქვს კონფერენციებს developer კომუნიტეტისთვის?',
        options: [
          'არ არის მნიშვნელოვანი',
          'ცოდნის გაზიარება, networking, ახალი ტექნოლოგიების შესწავლა და community building',
          'მხოლოდ გართობა',
          'მხოლოდ მარკეტინგი',
        ],
        correctAnswerIndex: 1,
        explanation: 'კონფერენციები მნიშვნელოვანია ცოდნის გაზიარებისთვის, networking-ისთვის, ახალი ტექნოლოგიების შესწავლისთვის და community building-ისთვის.',
      },
      {
        id: 'ep9-h7',
        question: 'რა რეკომენდაციები არსებობს დამწყები და გამოცდილი დეველოპერებისთვის?',
        options: [
          'ყველასთვის ერთნაირი რეკომენდაციები',
          'დამწყებებისთვის - fundamentals, გამოცდილებისთვის - სპეციალიზაცია და ლიდერობის უნარები',
          'მხოლოდ ტექნიკური ცოდნა',
          'მხოლოდ soft skills',
        ],
        correctAnswerIndex: 1,
        explanation: 'დამწყებებისთვის მნიშვნელოვანია fundamentals-ზე ფოკუსირება, ხოლო გამოცდილებისთვის - სპეციალიზაცია და ლიდერობის უნარების განვითარება.',
      },
    ],
  },
];

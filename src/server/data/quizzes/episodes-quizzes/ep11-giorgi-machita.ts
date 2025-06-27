import { Quiz } from '../quizzes.types';

export const ep11GiorgiMachitidzeQuizzes: Quiz[] = [
  // Episode 11: Easy Quiz - Linux and Systems Engineering Basics
  {
    id: 'ep11-giorgi-machita-basics',
    title: 'გიორგი მაჩიტიძე - Linux და სისტემური ინჟინერია',
    description: 'ძირითადი კითხვები გიორგი მაჩიტიძის შესახებ, Linux-ზე და სისტემურ ინჟინერიაზე.',
    categories: ['system-administration', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/giorgi-machitidze',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep11-e1',
        question: 'რა პოზიციას იკავებს გიორგი მაჩიტიძე?',
        options: ['Frontend Developer', 'CIO @ Spribe', 'Backend Developer', 'QA Engineer'],
        correctAnswerIndex: 1,
        explanation: 'გიორგი მაჩიტიძე არის CIO (Chief Information Officer) კომპანია Spribe-ში.',
      },
      {
        id: 'ep11-e2',
        question: 'რამდენი წლის გამოცდილება აქვს გიორგის IT სფეროში?',
        options: ['10 წელი', '25+ წელი', '15 წელი', '5 წელი'],
        correctAnswerIndex: 1,
        explanation: 'გიორგი მაჩიტიძეს აქვს 25+ წლის გამოცდილება IT სფეროში.',
      },
      {
        id: 'ep11-e3',
        question: 'რა ოპერაციული სისტემის შესახებ იყო ძირითადი განხილვა ეპიზოდში?',
        options: ['Windows', 'Linux', 'macOS', 'Unix'],
        correctAnswerIndex: 1,
        explanation: 'ეპიზოდში ძირითადად Linux-ზე და მის დისტრიბუციებზე იყო საუბარი.',
      },
      {
        id: 'ep11-e4',
        question: 'რომელი Linux დისტრიბუციები იყო განხილული ეპიზოდში?',
        options: ['Ubuntu და Mint', 'RedHat და Debian', 'SUSE და Arch', 'CentOS და Fedora'],
        correctAnswerIndex: 1,
        explanation: 'ეპიზოდში განხილული იყო RedHat vs Debian დისტრიბუციები და მათი თავისებურებები.',
      },
    ],
  },

  // Episode 11: Medium Quiz - DevOps and Systems Engineering
  {
    id: 'ep11-giorgi-machita-advanced',
    title: 'DevOps და სისტემური ინჟინერია',
    description: 'ღრმა ტექნიკური კითხვები DevOps-ზე, სისტემურ ინჟინერიაზე და IT ინფრასტრუქტურაზე.',
    categories: ['system-administration', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/giorgi-machitidze',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep11-m1',
        question: 'რა განსხვავებაა სისტემურ ინჟინერსა და DevOps-ს შორის?',
        options: [
          'არავითარი განსხვავება',
          'სისტემური ინჟინერი ფოკუსირებულია ინფრასტრუქტურაზე, DevOps - პროცესებზე და automation-ზე',
          'მხოლოდ ტიტულის განსხვავება',
          'DevOps არ არის საჭირო',
        ],
        correctAnswerIndex: 1,
        explanation: 'სისტემური ინჟინერი უფრო ფოკუსირებულია ინფრასტრუქტურაზე, ხოლო DevOps - პროცესების ოპტიმიზაციასა და automation-ზე.',
      },
      {
        id: 'ep11-m2',
        question: 'რა არის FinOps და რატომ არის მნიშვნელოვანი?',
        options: ['ფინანსური ოპერაციები', 'Cloud რესურსების ფინანსური მართვა და ოპტიმიზაცია', 'მხოლოდ ბუღალტრული აღრიცხვა', 'ინვესტიციების მართვა'],
        correctAnswerIndex: 1,
        explanation: 'FinOps არის Cloud რესურსების ფინანსური მართვისა და ოპტიმიზაციის მეთოდოლოგია.',
      },
      {
        id: 'ep11-m3',
        question: 'რა მნიშვნელობა აქვს Package Management-ს Linux-ში?',
        options: ['არ არის მნიშვნელოვანი', 'პროგრამების ინსტალაცია, განახლება და მართვა უსაფრთხოდ', 'მხოლოდ დიზაინისთვის', 'მხოლოდ backup-ისთვის'],
        correctAnswerIndex: 1,
        explanation: 'Package Management უზრუნველყოფს პროგრამების უსაფრთხო ინსტალაციას, განახლებასა და მართვას Linux სისტემებში.',
      },
      {
        id: 'ep11-m4',
        question: 'რატომ არის მნიშვნელოვანი HTTP2 vs HTTP3 განსხვავების გაგება?',
        options: ['არ არის მნიშვნელოვანი', 'შესრულების ოპტიმიზაცია და ქსელის ეფექტურობა', 'მხოლოდ ვიზუალური განსხვავება', 'მხოლოდ მარკეტინგი'],
        correctAnswerIndex: 1,
        explanation: 'HTTP2 და HTTP3 განსხვავებების გაგება მნიშვნელოვანია შესრულების ოპტიმიზაციისა და ქსელის ეფექტურობისთვის.',
      },
      {
        id: 'ep11-m5',
        question: 'რა პრობლემები არსებობს ძველი ბიბლიოთეკების გამოყენებაში?',
        options: ['არავითარი პრობლემა', 'უსაფრთხოების რისკები და თავსებადობის პრობლემები', 'მხოლოდ შესრულების პრობლემები', 'მხოლოდ ლიცენზიის პრობლემები'],
        correctAnswerIndex: 1,
        explanation: 'ძველი ბიბლიოთეკები შეიძლება შეიცავდეს უსაფრთხოების რისკებს და თავსებადობის პრობლემებს.',
      },
    ],
  },

  // Episode 11: Hard Quiz - Open Source and IT Infrastructure
  {
    id: 'ep11-giorgi-machita-expert',
    title: 'Open Source და IT ინფრასტრუქტურის მართვა',
    description: 'ექსპერტული კითხვები Open Source ფილოსოფიაზე, ლიცენზირებაზე და IT ინფრასტრუქტურის მართვაზე.',
    categories: ['system-administration', 'open-source', 'leadership', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/giorgi-machitidze',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep11-h1',
        question: 'რა არის Open Source-ის ძირითადი ფილოსოფია?',
        options: ['მხოლოდ უფასო პროგრამები', 'კოდის ღია ხელმისაწვდომობა, თანამშრომლობა და ინოვაცია', 'მხოლოდ კომერციული ინტერესები', 'კონკურენციის აღმოფხვრა'],
        correctAnswerIndex: 1,
        explanation: 'Open Source-ის ფილოსოფია ეფუძნება კოდის ღია ხელმისაწვდომობას, თანამშრომლობას და ინოვაციურ განვითარებას.',
      },
      {
        id: 'ep11-h2',
        question: 'რა ტიპის ლიცენზიები არსებობს Open Source პროექტებისთვის?',
        options: ['მხოლოდ GPL', 'GPL, MIT, Apache, BSD და სხვა სხვადასხვა ლიცენზიები განსხვავებული შეზღუდვებით', 'მხოლოდ MIT', 'ლიცენზიები არ არის საჭირო'],
        correctAnswerIndex: 1,
        explanation: 'Open Source პროექტებს აქვთ სხვადასხვა ლიცენზიები (GPL, MIT, Apache, BSD) განსხვავებული შეზღუდვებითა და მოთხოვნებით.',
      },
      {
        id: 'ep11-h3',
        question: 'რატომ არ ასწრებენ უნივერსიტეტები IT-ის ტემპს?',
        options: [
          'უნივერსიტეტები სრულყოფილია',
          'ბიუროკრატია, ძველი კურიკულუმი და ინდუსტრიასთან კავშირის ნაკლებობა',
          'მხოლოდ ფინანსური პრობლემები',
          'ძალიან სწრაფად ვითარდებიან',
        ],
        correctAnswerIndex: 1,
        explanation: 'უნივერსიტეტები ხშირად ვერ ასწრებენ IT-ს ბიუროკრატიის, ძველი კურიკულუმისა და ინდუსტრიასთან კავშირის ნაკლებობის გამო.',
      },
      {
        id: 'ep11-h4',
        question: 'რატომ არ ესმით დეველოპერებს ინფრასტრუქტურის მნიშვნელობა?',
        options: [
          'ყველას ესმის',
          'განსხვავებული ფოკუსი: კოდი vs სისტემები, განსხვავებული აბსტრაქციის დონეები',
          'მხოლოდ განათლების პრობლემა',
          'ინფრასტრუქტურა არ არის მნიშვნელოვანი',
        ],
        correctAnswerIndex: 1,
        explanation: 'დეველოპერები და სისტემური ადმინისტრატორები მუშაობენ განსხვავებულ აბსტრაქციის დონეებზე განსხვავებული ფოკუსით.',
      },
      {
        id: 'ep11-h5',
        question: 'რა არის Framework vs Custom Development-ის დილემა?',
        options: [
          'ყოველთვის framework უკეთესია',
          'Framework-ები აჩქარებენ განვითარებას, მაგრამ შეზღუდავენ მოქნილობას',
          'Custom development ყოველთვის უკეთესია',
          'განსხვავება არ არსებობს',
        ],
        correctAnswerIndex: 1,
        explanation: 'Framework-ები აჩქარებენ განვითარებას, მაგრამ შეიძლება შეზღუდონ მოქნილობა და კონტროლი.',
      },
      {
        id: 'ep11-h6',
        question: 'რატომ არის დეფიციტი IT სპეციალისტებში?',
        options: [
          'ბაზარი გაჯერებულია',
          'სწრაფი ინდუსტრიული ზრდა, განათლების ნელი ადაპტაცია და ხარისხიანი სპეციალისტების მზადების სირთულე',
          'მხოლოდ დაბალი ხელფასები',
          'IT არ არის პოპულარული',
        ],
        correctAnswerIndex: 1,
        explanation: 'IT სპეციალისტების დეფიციტი გამოწვეულია ინდუსტრიის სწრაფი ზრდით, განათლების ნელი ადაპტაციითა და ხარისხიანი კადრების მომზადების სირთულით.',
      },
      {
        id: 'ep11-h7',
        question: 'რა მიდგომაა სწორი ტექნიკური განვითარებისას?',
        options: [
          'მხოლოდ თეორიული სწავლება',
          'პრაქტიკული გამოცდილება, მუდმივი სწავლა და რეალური პროექტებზე მუშაობა',
          'მხოლოდ ონლაინ კურსები',
          'მხოლოდ უნივერსიტეტული განათლება',
        ],
        correctAnswerIndex: 1,
        explanation: 'ტექნიკური განვითარებისთვის ყველაზე ეფექტურია პრაქტიკული გამოცდილება, მუდმივი სწავლა და რეალური პროექტებზე მუშაობა.',
      },
    ],
  },
];

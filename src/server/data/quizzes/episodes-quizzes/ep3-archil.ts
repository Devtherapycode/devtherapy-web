import { Quiz } from '../quizzes.types';

export const ep3ArchilQuizzes: Quiz[] = [
  // Episode 3: Easy Quiz (Georgian - Leadership/Career)
  {
    id: 'ep3-archil-basics',
    title: 'არჩილ ვარშანიძე - Engineering Manager',
    description: 'არჩილ ვარშანიძის ეპიზოდის ძირითადი ინფორმაცია.',
    categories: ['leadership', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/archil-varshanidze',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep3-e1',
        question: 'რა როლშია დღეს არჩილ ვარშანიძე?',
        options: ['Senior Developer', 'Product Manager', 'Engineering Manager', 'Technical Writer'],
        correctAnswerIndex: 2,
        explanation: 'არჩილ ვარშანიძე დღეს მუშაობს Engineering Manager-ის როლში.',
      },
      {
        id: 'ep3-e2',
        question: 'რა ძირითადი თემა განიხილებოდა ეპიზოდში?',
        options: ['ტექნიკური ალგორითმები', 'ფიდბექის კულტურა და ინჟინერული ჰიგიენა', 'მობილური დეველოპმენტი', 'მონაცემთა ბაზები'],
        correctAnswerIndex: 1,
        explanation: 'ეპიზოდში ძირითადად განიხილებოდა ფიდბექის კულტურა და ინჟინერული ჰიგიენის მნიშვნელობა.',
      },
      {
        id: 'ep3-e3',
        question: 'რაზე იყო საუბარი Tech hiring-ის კონტექსტში?',
        options: ['მხოლოდ სალარი მოლაპარაკებები', 'ტოპ კომპანიებში hiring პროცედურები და გამოწვევები', 'მხოლოდ CV-ს შედგენა', 'მხოლოდ ტექნიკური ტესტები'],
        correctAnswerIndex: 1,
        explanation: 'ეპიზოდში განიხილებოდა ტოპ კომპანიებში Tech hiring-ის პროცედურები და მათი გამოწვევები.',
      },
      {
        id: 'ep3-e4',
        question: 'რა სირთულე აღინიშნა ფიდბექ კულტურასთან დაკავშირებით?',
        options: ['ტექნიკური იმპლემენტაცია', 'დანერგვის რთულება, განსაკუთრებით პირდაპირი ფიდბექის კონტექსტში', 'ფინანსური ხარჯები', 'დროის ნაკლებობა'],
        correctAnswerIndex: 1,
        explanation: 'ეპიზოდში ხაზი გაესვა ფიდბექ კულტურის დანერგვის სირთულეს, განსაკუთრებით პირდაპირი ფიდბექის შემთხვევაში.',
      },
    ],
  },

  // Episode 3: Medium Quiz
  {
    id: 'ep3-archil-management',
    title: 'Engineering Management და Feedback Culture',
    description: 'მენეჯმენტის და ფიდბექ კულტურის შესახებ ღრმა კითხვები.',
    categories: ['leadership', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/archil-varshanidze',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep3-m1',
        question: 'რა არის ინჟინერული ჰიგიენის მთავარი კომპონენტები?',
        options: [
          'მხოლოდ კოდის ხარისხი',
          'კოდის ხარისხი, დოკუმენტაცია, ტესტირება და code review პროცესები',
          'მხოლოდ debugging',
          'მხოლოდ პერფორმანსის ოპტიმიზაცია',
        ],
        correctAnswerIndex: 1,
        explanation: 'ინჟინერული ჰიგიენა მოიცავს კოდის ხარისხს, დოკუმენტაციას, ტესტირებას და სხვა ძირითად პრაქტიკებს.',
      },
      {
        id: 'ep3-m2',
        question: 'რატომ არის რთული ფიდბექ კულტურის დანერგვა?',
        options: ['ტექნიკური პრობლემების გამო', 'ადამიანური ფაქტორის და კომუნიკაციური უნარების გამო', 'ფინანსური შეზღუდვების გამო', 'დროის ნაკლებობის გამო'],
        correctAnswerIndex: 1,
        explanation: 'ფიდბექ კულტურის დანერგვა რთულია ძირითადად ადამიანური ფაქტორის და კომუნიკაციური უნარების გამო.',
      },
      {
        id: 'ep3-m3',
        question: 'რა უნარები საჭიროა Engineering Manager-ისთვის?',
        options: ['მხოლოდ ტექნიკური ცოდნა', 'ტექნიკური ცოდნა + ლიდერშიპი + კომუნიკაცია', 'მხოლოდ მენეჯმენტი', 'მხოლოდ ბიზნეს უნარები'],
        correctAnswerIndex: 1,
        explanation: 'Engineering Manager-ს სჭირდება ტექნიკური ცოდნა, ლიდერშიპი და ძლიერი კომუნიკაციური უნარები.',
      },
      {
        id: 'ep3-m4',
        question: 'რა გამოწვევები არსებობს ქართულ ბაზარზე ინჟინრების პროფესიულ დონესთან დაკავშირებით?',
        options: [
          'მხოლოდ ცოდნის ნაკლებობა',
          'კომპლექსური პრობლემები: უნარების, მოლოდინების და სტანდარტების შეუსაბამობა',
          'მხოლოდ ენობრივი ბარიერი',
          'მხოლოდ ეკონომიკური ფაქტორები',
        ],
        correctAnswerIndex: 1,
        explanation: 'ქართულ ბაზარზე კომპლექსური პრობლემები არსებობს უნარების, მოლოდინების და სტანდარტების შეუსაბამობასთან დაკავშირებით.',
      },
      {
        id: 'ep3-m5',
        question: 'რა მნიშვნელობა აქვს მუდმივ სწავლას ინჟინერისთვის?',
        options: ['არ არის მნიშვნელოვანი', 'კრიტიკულად მნიშვნელოვანია ინდუსტრიის სწრაფი განვითარების გამო', 'მხოლოდ დამწყებებისთვის', 'მხოლოდ სენიორებისთვის'],
        correctAnswerIndex: 1,
        explanation: 'მუდმივი სწავლა კრიტიკულად მნიშვნელოვანია ტექნოლოგიური ინდუსტრიის სწრაფი განვითარების გამო.',
      },
    ],
  },
];

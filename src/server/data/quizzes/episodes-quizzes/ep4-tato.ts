import { Quiz } from '../quizzes.types';

export const ep4TatoQuizzes: Quiz[] = [
  // Episode 4: Easy Quiz (English - International focus)
  {
    id: 'ep4-tato-basics',
    title: 'Tato Kutalia - Google Developer Expert',
    description: 'Basic information about Tato Kutalia and his expertise.',
    categories: ['mobile-development', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/tato-kutalia',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep4-e1',
        question: "What is Tato Kutalia's special status in the Google ecosystem?",
        options: ['Google Employee', 'Google Developer Expert', 'Google Certified Trainer', 'Google Partner'],
        correctAnswerIndex: 1,
        explanation: 'Tato Kutalia is a Google Developer Expert (GDE), the only Georgian with this prestigious status.',
      },
      {
        id: 'ep4-e2',
        question: 'What platform does Tato specialize in?',
        options: ['iOS', 'Android', 'Web', 'Desktop'],
        correctAnswerIndex: 1,
        explanation: 'Tato Kutalia is an Android engineer and specialist in mobile development.',
      },
      {
        id: 'ep4-e3',
        question: 'How long has Tato been in the industry?',
        options: ['5 years', '10+ years', '3 years', '15 years'],
        correctAnswerIndex: 1,
        explanation: 'Tato has been in the tech industry for over 10 years with extensive experience.',
      },
      {
        id: 'ep4-e4',
        question: 'What type of content does Tato create?',
        options: ['Only code tutorials', 'Conference talks and educational content', 'Only written blogs', 'Only video content'],
        correctAnswerIndex: 1,
        explanation: 'Tato is known for his conference talks, educational content, and speaking at international events.',
      },
    ],
  },

  // Episode 4: Medium Quiz
  {
    id: 'ep4-tato-conferences',
    title: 'Developer Conferences და Open Source',
    description: 'კონფერენციების მნიშვნელობა და Open Source კონტრიბუციები.',
    categories: ['career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/tato-kutalia',
    estimatedTime: 5,
    questions: [
      {
        id: 'ep4-m1',
        question: 'რა მნიშვნელობა აქვს ტექნიკურ კონფერენციებს?',
        options: [
          'მხოლოდ ნეტვორკინგი',
          'ცოდნის გაზიარება, ქომუნითის განვითარება და ახალი ტრენდების შესწავლა',
          'მხოლოდ თვითშესწავლა',
          'მხოლოდ კომპანიების პროპაგანდა',
        ],
        correctAnswerIndex: 1,
        explanation: 'ტექნიკური კონფერენციები მნიშვნელოვანია ცოდნის გაზიარების, ქომუნითის განვითარების და ახალი ტრენდების შესწავლისთვის.',
      },
      {
        id: 'ep4-m2',
        question: 'რატომ არის მნიშვნელოვანი Open Source კონტრიბუცია?',
        options: [
          'მხოლოდ CV-ს გასაძლიერებლად',
          'უნარების განვითარება, ქომუნითის მხარდაჭერა და პროფესიული ზრდა',
          'მხოლოდ უფასო კოდისთვის',
          'მხოლოდ სახელდობების მისაღებად',
        ],
        correctAnswerIndex: 1,
        explanation: 'Open Source კონტრიბუცია ხელს უწყობს უნარების განვითარებას, ქომუნითის მხარდაჭერას და პროფესიულ ზრდას.',
      },
      {
        id: 'ep4-m3',
        question: 'რა რჩევა აქვს დამწყები მობილური დეველოპერებისთვის?',
        options: [
          'ისწავლონ ყველა ტექნოლოგია ერთდროულად',
          'კონცენტრაცია ერთ პლატფორმაზე და ღრმად ათვისება',
          'მუშაობა მხოლოდ ჰაიბრიდ ტექნოლოგიებზე',
          'ფოკუსირება მხოლოდ UI-ზე',
        ],
        correctAnswerIndex: 1,
        explanation: 'Tato ურჩევს დამწყებებს კონცენტრაცია გაუწიონ ერთ პლატფორმას და ღრმად ათვისონ ფუნდამენტური ცოდნა.',
      },
      {
        id: 'ep4-m4',
        question: 'რა არის DevFest-ის მნიშვნელობა ქართული ტექ ქომუნითისთვის?',
        options: [
          'მხოლოდ სოციალური ღონისძიება',
          'ლოკალური ქომუნითის განვითარება და საერთაშორისო სტანდარტებთან დაკავშირება',
          'მხოლოდ Google-ის მარკეტინგი',
          'მხოლოდ სტუდენტებისთვის',
        ],
        correctAnswerIndex: 1,
        explanation: 'DevFest ხელს უწყობს ლოკალური ქომუნითის განვითარებას და საერთაშორისო სტანდარტებთან დაკავშირებას.',
      },
      {
        id: 'ep4-m5',
        question: 'რა უნარები საჭიროა წარმატებული სპიკერისთვის?',
        options: [
          'მხოლოდ ტექნიკური ცოდნა',
          'ტექნიკური ცოდნა + კომუნიკაციური უნარები + პრაქტიკული გამოცდილება',
          'მხოლოდ პრეზენტაციის უნარები',
          'მხოლოდ ეკადემიური ფონი',
        ],
        correctAnswerIndex: 1,
        explanation: 'წარმატებული სპიკერისთვის საჭიროა ტექნიკური ცოდნის, კომუნიკაციური უნარების და პრაქტიკული გამოცდილების კომბინაცია.',
      },
    ],
  },
];

import { Quiz } from '../quizzes.types';

export const ep14NatiaKukhilavaQuizzes: Quiz[] = [
  // Episode 14: Easy Quiz (Georgian - Women in Tech)
  {
    id: 'ep14-natia-kukhilava-basics',
    title: 'ნათია კუხილავა - ქალები ტექში',
    description: 'ქალების როლი ტექნოლოგიების სფეროში.',
    categories: ['career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/natia-kukhilava',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep14-e1',
        question: 'რატომ არის მნიშვნელოვანი diversity ტექ კომპანიებში?',
        options: [
          'არ არის მნიშვნელოვანი',
          'სხვადასხვა პერსპექტივები და იდეები ქმნის უკეთეს პროდუქტებს',
          'მხოლოდ იურიდიული მოთხოვნების გამო',
          'მხოლოდ PR-ისთვის',
        ],
        correctAnswerIndex: 1,
        explanation: 'Diversity მნიშვნელოვანია რადგან სხვადასხვა ფონისა და პერსპექტივის ადამიანები ქმნიან უკეთეს, ინოვაციურ პროდუქტებს.',
      },
      {
        id: 'ep14-e2',
        question: 'რა ბარიერები შეიძლება შეხვდეს ქალებს ტექ კარიერაში?',
        options: ['არავითარი ბარიერი', 'სტერეოტიპები, inequality და არასაკმარისი representation', 'მხოლოდ ტექნიკური სირთულეები', 'მხოლოდ დროის ნაკლებობა'],
        correctAnswerIndex: 1,
        explanation: 'ქალები ტექ სფეროში შეიძლება შეხვდნენ სტერეოტიპებს, inequality-ს და არასაკმარის representation-ს.',
      },
      {
        id: 'ep14-e3',
        question: 'რა არის მენტორშიპის მნიშვნელობა ქალებისთვის ტექ სფეროში?',
        options: ['არ არის საჭირო', 'გზამკვლევი, მხარდაჭერა და კარიერული განვითარება', 'მხოლოდ ტექნიკური ცოდნისთვის', 'მხოლოდ networking-ისთვის'],
        correctAnswerIndex: 1,
        explanation: 'მენტორშიპი ყალებისთვის საშუალებას აძლევს მიიღონ გზამკვლევი, მხარდაჭერა და კარიერული განვითარების რჩევები.',
      },
      {
        id: 'ep14-e4',
        question: 'რა როლი უნდა ითამაშონ კომპანიებმა ქალების მხარდაჭერაში?',
        options: ['არავითარი როლი', 'ინკლუზიური კულტურა, თანაბარი შესაძლებლობები და მხარდაჭერა', 'მხოლოდ hiring quotas', 'მხოლოდ women-only teams'],
        correctAnswerIndex: 1,
        explanation: 'კომპანიები უნდა ქმნიდნენ ინკლუზიურ კულტურას, უზრუნველყოფდნენ თანაბარ შესაძლებლობებს და მხარდაჭერას.',
      },
    ],
  },

  // Episode 14: Medium Quiz
  {
    id: 'ep14-natia-kukhilava-advanced',
    title: 'Leadership and Inclusion in Tech',
    description: 'ღრმა საკითხები leadership-ისა და inclusion-ის შესახებ.',
    categories: ['leadership', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/natia-kukhilava',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep14-m1',
        question: 'როგორ უნდა ავაშენოთ ინკლუზიური ტიმი?',
        options: [
          'ყველა იგივე background-ის ადამიანები',
          'სხვადასხვა background, უნარები და პერსპექტივები',
          'მხოლოდ senior developers',
          'მხოლოდ junior developers',
        ],
        correctAnswerIndex: 1,
        explanation: 'ინკლუზიური ტიმი უნდა შედგებოდეს სხვადასხვა background-ის, უნარებისა და პერსპექტივის ადამიანებისგან.',
      },
      {
        id: 'ep14-m2',
        question: 'რა არის unconscious bias და როგორ გავმკლავდეთ მას?',
        options: [
          'ის არ არსებობს',
          'განუცხადებელი წინასწარგანზრახვები, რომლებიც საჭიროებს ცნობიერ მუშაობას',
          'მხოლოდ individual პრობლემა',
          'მხოლოდ legal issue',
        ],
        correctAnswerIndex: 1,
        explanation: 'Unconscious bias არის განუცხადებელი წინასწარგანზრახვები, რომლებთანაც გამკლავება საჭიროებს ცნობიერ მუშაობას და training-ს.',
      },
      {
        id: 'ep14-m3',
        question: 'როგორ უნდა მოხდეს კარიერული განვითარების მხარდაჭერა?',
        options: [
          'ყველაფერი individual responsibility-ს',
          'სტრუქტურირებული mentorship, training და growth opportunities',
          'მხოლოდ annual reviews',
          'მხოლოდ salary increases',
        ],
        correctAnswerIndex: 1,
        explanation: 'კარიერული განვითარება საჭიროებს სტრუქტურირებულ mentorship-ს, training-ს და growth opportunities-ს.',
      },
      {
        id: 'ep14-m4',
        question: 'რა მნიშვნელობა აქვს work-life balance-ს?',
        options: [
          'არ არის მნიშვნელოვანი',
          'კრიტიკულია long-term success-ისა და well-being-ისთვის',
          'მხოლოდ junior developers-ისთვის',
          'მხოლოდ remote work-ისთვის',
        ],
        correctAnswerIndex: 1,
        explanation: 'Work-life balance კრიტიკულია long-term success-ისა და personal well-being-ისთვის.',
      },
      {
        id: 'ep14-m5',
        question: 'როგორ შეიძლება networking-ის გაუმჯობესება?',
        options: [
          'Networking არ არის საჭირო',
          'მონაწილეობა events-ში, mentorship და community building',
          'მხოლოდ online networking',
          'მხოლოდ internal networking',
        ],
        correctAnswerIndex: 1,
        explanation: 'ეფექტური networking მოიცავს მონაწილეობას events-ში, mentorship-ს და community building-ს.',
      },
    ],
  },

  // Episode 14: Hard Quiz
  {
    id: 'ep14-natia-kukhilava-expert',
    title: 'Organizational Change and Systemic Solutions',
    description: 'ექსპერტული კითხვები ორგანიზაციული ცვლილების შესახებ.',
    categories: ['leadership', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/natia-kukhilava',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep14-h1',
        question: 'როგორ უნდა მოხდეს systemic change ორგანიზაციაში?',
        options: [
          'მხოლოდ top-down მიდგომა',
          'Leadership commitment, cultural change და structured programs',
          'მხოლოდ HR პოლიტიკები',
          'მხოლოდ training sessions',
        ],
        correctAnswerIndex: 1,
        explanation: 'Systemic change საჭიროებს leadership commitment-ს, კულტურულ ცვლილებას და structured programs-ს.',
      },
      {
        id: 'ep14-h2',
        question: 'რა metrics გამოიყენება diversity და inclusion-ის გასაზომად?',
        options: [
          'Metrics არ არის საჭირო',
          'Representation ratios, retention rates, promotion rates, satisfaction surveys',
          'მხოლოდ hiring numbers',
          'მხოლოდ employee count',
        ],
        correctAnswerIndex: 1,
        explanation: 'D&I metrics მოიცავს representation ratios-ს, retention rates-ს, promotion rates-ს და satisfaction surveys-ს.',
      },
      {
        id: 'ep14-h3',
        question: 'როგორ უნდა დავაინტეგრიროთ inclusive leadership principles?',
        options: [
          'ის ბუნებრივად მოვა',
          'Training, accountability measures და behavioral expectations',
          'მხოლოდ hiring diverse leaders',
          'მხოლოდ company policies',
        ],
        correctAnswerIndex: 1,
        explanation: 'Inclusive leadership საჭიროებს training-ს, accountability measures-ს და clear behavioral expectations-ს.',
      },
      {
        id: 'ep14-h4',
        question: 'რა challenges არსებობს scaling inclusion large organizations-ში?',
        options: [
          'Challenges არ არსებობს',
          'Cultural resistance, complexity, resource allocation და measurement',
          'მხოლოდ budget constraints',
          'მხოლოდ time limitations',
        ],
        correctAnswerIndex: 1,
        explanation: 'Large organizations-ში inclusion scaling-ს აქვს challenges როგორიცაა cultural resistance, complexity, resource allocation.',
      },
      {
        id: 'ep14-h5',
        question: 'როგორ უნდა მოხდეს sustainable change-ის შექმნა?',
        options: [
          'მხოლოდ short-term initiatives',
          'Long-term commitment, embedded processes და continuous improvement',
          'მხოლოდ one-time training',
          'მხოლოდ policy changes',
        ],
        correctAnswerIndex: 1,
        explanation: 'Sustainable change საჭიროებს long-term commitment-ს, embedded processes-ს და continuous improvement-ს.',
      },
      {
        id: 'ep14-h6',
        question: 'რა roles აქვს allies-ებს inclusion efforts-ში?',
        options: ['Allies არ არის საჭირო', 'Active support, amplifying voices და challenging bias', 'მხოლოდ passive support', 'მხოლოდ attending events'],
        correctAnswerIndex: 1,
        explanation: 'Allies უნდა იყვნენ actively supportive, amplify diverse voices და challenge bias-ს.',
      },
      {
        id: 'ep14-h7',
        question: 'როგორ შეიძლება intersection of various identities-ის გათვალისწინება?',
        options: [
          'ერთი identity საკმარისია',
          'Intersectional approach recognizing multiple, overlapping identities',
          'მხოლოდ gender focus',
          'მხოლოდ race focus',
        ],
        correctAnswerIndex: 1,
        explanation: 'Intersectional approach ითვალისწინებს multiple, overlapping identities-ს და მათ unique challenges-ს.',
      },
    ],
  },
];

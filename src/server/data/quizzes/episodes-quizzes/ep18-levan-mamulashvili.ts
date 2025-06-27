import { Quiz } from '../quizzes.types';

export const ep18LevanMamulashviliQuizzes: Quiz[] = [
  // Episode 18: Easy Quiz (Georgian - Leadership/Management)
  {
    id: 'ep18-levan-mamulashvili-basics',
    title: 'ლევან მამულაშვილი - Leadership და Management',
    description: 'Leadership-ისა და management-ის ძირითადი პრინციპები.',
    categories: ['leadership', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/levan-mamulashvili',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep18-e1',
        question: 'რა განსხვავებაა Leadership-სა და Management-ს შორის?',
        options: [
          'ისინი იგივეა',
          'Leadership - vision და inspiration, Management - execution და organization',
          'მხოლოდ title-ის განსხვავება',
          'მხოლოდ salary განსხვავება',
        ],
        correctAnswerIndex: 1,
        explanation: 'Leadership ფოკუსირებულია vision-სა და inspiration-ზე, ხოლო Management - execution-სა და organization-ზე.',
      },
      {
        id: 'ep18-e2',
        question: 'რა უნარებია მნიშვნელოვანი ტექნიკური Leader-ისთვის?',
        options: ['მხოლოდ ტექნიკური უნარები', 'ტექნიკური + კომუნიკაცია + ემოციური ინტელექტი', 'მხოლოდ business ცოდნა', 'მხოლოდ project management'],
        correctAnswerIndex: 1,
        explanation: 'ტექნიკურ Leader-ს სჭირდება ტექნიკური უნარები, კომუნიკაცია და ემოციური ინტელექტი.',
      },
      {
        id: 'ep18-e3',
        question: 'რა არის effective communication?',
        options: ['მხოლოდ speaking', 'Clear messaging, active listening და empathy', 'მხოლოდ writing emails', 'მხოლოდ presentations'],
        correctAnswerIndex: 1,
        explanation: 'Effective communication მოიცავს clear messaging-ს, active listening-სა და empathy-ს.',
      },
      {
        id: 'ep18-e4',
        question: 'რატომ არის მნიშვნელოვანი team building?',
        options: ['არ არის მნიშვნელოვანი', 'collaboration-ის გაუმჯობესება, trust building და productivity', 'მხოლოდ fun activities', 'მხოლოდ company culture'],
        correctAnswerIndex: 1,
        explanation: 'Team building აუმჯობესებს collaboration-ს, აშენებს trust-ს და ზრდის productivity-ს.',
      },
    ],
  },

  // Episode 18: Medium Quiz
  {
    id: 'ep18-levan-mamulashvili-advanced',
    title: 'Advanced Leadership Strategies',
    description: 'ღრმა leadership strategies და team management.',
    categories: ['leadership', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/levan-mamulashvili',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep18-m1',
        question: 'როგორ უნდა მოხდეს decision making complex situations-ში?',
        options: [
          'მხოლოდ intuition',
          'Data analysis, stakeholder input, risk assessment და clear process',
          'მხოლოდ senior management decides',
          'Random choices',
        ],
        correctAnswerIndex: 1,
        explanation: 'Complex decision making მოითხოვს data analysis-ს, stakeholder input-ს, risk assessment-ს და clear process-ს.',
      },
      {
        id: 'ep18-m2',
        question: 'რა არის delegation strategy?',
        options: [
          'ყველაფრის კონტროლი',
          'Right task to right person with clear expectations და support',
          'Random task assignment',
          'მხოლოდ easy tasks delegation',
        ],
        correctAnswerIndex: 1,
        explanation: 'Effective delegation მოითხოვს right task-ის მიცემას right person-ისთვის clear expectations-ით და support-ით.',
      },
      {
        id: 'ep18-m3',
        question: 'როგორ უნდა მოხდეს conflict resolution?',
        options: [
          'Conflict-ების იგნორირება',
          'Early intervention, understanding perspectives, finding common ground',
          'მხოლოდ management decision',
          'კონფლიქტის გაძლიერება',
        ],
        correctAnswerIndex: 1,
        explanation: 'Conflict resolution მოითხოვს early intervention-ს, perspectives-ის გაგებას და common ground-ის პოვნას.',
      },
      {
        id: 'ep18-m4',
        question: 'რა მნიშვნელობა აქვს feedback culture-ის შექმნას?',
        options: [
          'Feedback არ არის საჭირო',
          'Continuous improvement, growth mindset და open communication',
          'მხოლოდ annual reviews',
          'მხოლოდ negative feedback',
        ],
        correctAnswerIndex: 1,
        explanation: 'Feedback culture ხელს უწყობს continuous improvement-ს, growth mindset-ს და open communication-ს.',
      },
      {
        id: 'ep18-m5',
        question: 'როგორ უნდა motivation team members-ის?',
        options: ['მხოლოდ salary increase', 'Understanding individual motivators, recognition, growth opportunities', 'მხოლოდ threats', 'მხოლოდ bonuses'],
        correctAnswerIndex: 1,
        explanation: 'Team motivation მოითხოვს individual motivators-ის გაგებას, recognition-ს და growth opportunities-ს.',
      },
    ],
  },

  // Episode 18: Hard Quiz
  {
    id: 'ep18-levan-mamulashvili-expert',
    title: 'Executive Leadership and Organizational Change',
    description: 'ექსპერტული executive leadership და organizational transformation.',
    categories: ['leadership', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/levan-mamulashvili',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep18-h1',
        question: 'როგორ უნდა მოხდეს organizational transformation-ის leadership?',
        options: [
          'Transformation არ არის საჭირო',
          'Vision setting, change management, stakeholder alignment, communication',
          'მხოლოდ top-down mandates',
          'მხოლოდ process changes',
        ],
        correctAnswerIndex: 1,
        explanation: 'Organizational transformation leadership მოითხოვს vision setting-ს, change management-ს, stakeholder alignment-ს და communication-ს.',
      },
      {
        id: 'ep18-h2',
        question: 'რა strategies არსებობს scaling leadership in growing organizations?',
        options: [
          'Leadership scaling არ არის საჭირო',
          'Leadership development programs, succession planning, distributed decision-making',
          'მხოლოდ hiring more managers',
          'მხოლოდ centralized control',
        ],
        correctAnswerIndex: 1,
        explanation: 'Leadership scaling მოითხოვს development programs-ს, succession planning-ს და distributed decision-making-ს.',
      },
      {
        id: 'ep18-h3',
        question: 'როგორ უნდა building high-performance culture?',
        options: [
          'Culture არ არის მნიშვნელოვანი',
          'Clear values, accountability, continuous learning, innovation encouragement',
          'მხოლოდ competitive environment',
          'მხოლოდ strict rules',
        ],
        correctAnswerIndex: 1,
        explanation: 'High-performance culture მოითხოვს clear values-ს, accountability-ს, continuous learning-სა და innovation encouragement-ს.',
      },
      {
        id: 'ep18-h4',
        question: 'რა approaches არსებობს strategic planning-ისთვის?',
        options: [
          'Planning არ არის საჭირო',
          'Market analysis, scenario planning, stakeholder input, adaptive strategies',
          'მხოლოდ financial projections',
          'მხოლოდ competitive analysis',
        ],
        correctAnswerIndex: 1,
        explanation: 'Strategic planning მოიცავს market analysis-ს, scenario planning-ს, stakeholder input-ს და adaptive strategies-ს.',
      },
      {
        id: 'ep18-h5',
        question: 'როგორ უნდა managing executive stakeholder relationships?',
        options: [
          'Stakeholder management არ არის მნიშვნელოვანი',
          'Regular communication, expectation alignment, value demonstration',
          'მხოლოდ quarterly reports',
          'მხოლოდ crisis communication',
        ],
        correctAnswerIndex: 1,
        explanation: 'Executive stakeholder management მოითხოვს regular communication-ს, expectation alignment-ს და value demonstration-ს.',
      },
      {
        id: 'ep18-h6',
        question: 'რა strategies help with innovation leadership?',
        options: [
          'Innovation არ არის საჭირო',
          'Innovation culture, experimentation, failure tolerance, cross-functional collaboration',
          'მხოლოდ R&D budget',
          'მხოლოდ new technology adoption',
        ],
        correctAnswerIndex: 1,
        explanation: 'Innovation leadership მოითხოვს innovation culture-ს, experimentation-ს, failure tolerance-ს და cross-functional collaboration-ს.',
      },
      {
        id: 'ep18-h7',
        question: 'როგორ უნდა measuring leadership effectiveness?',
        options: [
          'Leadership effectiveness ვერ იზომება',
          'Team performance, employee engagement, retention, business outcomes',
          'მხოლოდ financial metrics',
          'მხოლოდ satisfaction surveys',
        ],
        correctAnswerIndex: 1,
        explanation: 'Leadership effectiveness იზომება team performance-ით, employee engagement-ით, retention-ით და business outcomes-ით.',
      },
    ],
  },
];

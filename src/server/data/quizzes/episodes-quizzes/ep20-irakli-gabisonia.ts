import { Quiz } from '../quizzes.types';

export const ep20IrakliGabisoniaQuizzes: Quiz[] = [
  // Episode 20: Easy Quiz (Georgian - Tech Career/Consulting)
  {
    id: 'ep20-irakli-gabisonia-basics',
    title: 'ირაკლი გაბისონია - Tech Career და Consulting',
    description: 'Tech career-ის განვითარება და consulting-ის ძირითადი კონცეფციები.',
    categories: ['career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/irakli-gabisonia',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep20-e1',
        question: 'რა არის Technical Consulting?',
        options: [
          'მხოლოდ ტექნიკური მხარდაჭერა',
          'ტექნიკური expertise-ს გაზიარება business problems-ის გადასაწყვეტად',
          'მხოლოდ software development',
          'მხოლოდ project management',
        ],
        correctAnswerIndex: 1,
        explanation: 'Technical Consulting არის ტექნიკური expertise-ს გამოყენება business problems-ის იდენტიფიკაციისა და გადაწყვეტისთვის.',
      },
      {
        id: 'ep20-e2',
        question: 'რა უნარებია მნიშვნელოვანი Tech Consultant-ისთვის?',
        options: ['მხოლოდ ტექნიკური ცოდნა', 'ტექნიკური + business + კომუნიკაცია + problem-solving', 'მხოლოდ presentation skills', 'მხოლოდ networking'],
        correctAnswerIndex: 1,
        explanation: 'Tech Consultant-ისთვის საჭიროა ტექნიკური ცოდნა, business understanding, კომუნიკაცია და problem-solving უნარები.',
      },
      {
        id: 'ep20-e3',
        question: 'რა არის career transition-ის გამოწვევები ტექ სფეროში?',
        options: [
          'არავითარი გამოწვევა',
          'ახალი ტექნოლოგიების სწავლა, market dynamics და skill adaptation',
          'მხოლოდ ხელფასის ცვლილება',
          'მხოლოდ company change',
        ],
        correctAnswerIndex: 1,
        explanation: 'Career transition-ის გამოწვევებია ახალი ტექნოლოგიების სწავლა, market dynamics-ის გაგება და skill adaptation.',
      },
      {
        id: 'ep20-e4',
        question: 'რატომ არის მნიშვნელოვანი continuous learning ტექ კარიერაში?',
        options: [
          'არ არის მნიშვნელოვანი',
          'ტექნოლოგიები სწრაფად იცვლება და კონკურენტუნარიანობისთვის საჭიროა განახლება',
          'მხოლოდ company requirements',
          'მხოლოდ personal interest',
        ],
        correctAnswerIndex: 1,
        explanation: 'Continuous learning მნიშვნელოვანია რადგან ტექნოლოგიები სწრაფად იცვლება და კონკურენტუნარიანობისთვის განახლება საჭიროა.',
      },
    ],
  },

  // Episode 20: Medium Quiz
  {
    id: 'ep20-irakli-gabisonia-advanced',
    title: 'Advanced Consulting and Career Strategy',
    description: 'ღრმა consulting strategies და career development.',
    categories: ['career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/irakli-gabisonia',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep20-m1',
        question: 'როგორ უნდა მოხდეს client relationship building consulting-ში?',
        options: [
          'Client relationships არ არის მნიშვნელოვანი',
          'Trust building, value delivery, clear communication და long-term partnerships',
          'მხოლოდ contract negotiation',
          'მხოლოდ technical delivery',
        ],
        correctAnswerIndex: 1,
        explanation: 'Client relationship building მოითხოვს trust building-ს, consistent value delivery-ს, clear communication-ს და long-term thinking-ს.',
      },
      {
        id: 'ep20-m2',
        question: 'რა strategies არსებობს career advancement-ისთვის ტექ სფეროში?',
        options: [
          'Career advancement ავტომატურია',
          'Skill development, networking, visibility, mentorship და strategic positioning',
          'მხოლოდ longer hours',
          'მხოლოდ changing companies',
        ],
        correctAnswerIndex: 1,
        explanation: 'Career advancement მოითხოვს strategic skill development-ს, networking-ს, visibility-ს, mentorship-ს და strategic positioning-ს.',
      },
      {
        id: 'ep20-m3',
        question: 'როგორ უნდა approach complex technical problems consulting projects-ში?',
        options: [
          'სწრაფი გადაწყვეტილებები უკეთესია',
          'Problem analysis, stakeholder alignment, phased solutions და risk management',
          'მხოლოდ technical approach',
          'მხოლოდ standard solutions',
        ],
        correctAnswerIndex: 1,
        explanation: 'Complex problems მოითხოვენ thorough analysis-ს, stakeholder alignment-ს, phased approach-ს და proper risk management-ს.',
      },
      {
        id: 'ep20-m4',
        question: 'რა მნიშვნელობა აქვს industry expertise-ის development-ს?',
        options: [
          'Industry knowledge არ არის მნიშვნელოვანი',
          'Domain expertise increases value, credibility და client trust',
          'მხოლოდ ტექნიკური skills საკმარისია',
          'მხოლოდ general knowledge საკმარისია',
        ],
        correctAnswerIndex: 1,
        explanation: 'Industry expertise მნიშვნელოვნად ზრდის consultant-ის value-ს, credibility-ს და client trust-ს.',
      },
      {
        id: 'ep20-m5',
        question: 'როგორ უნდა balance technical depth და business perspective?',
        options: [
          'მხოლოდ technical depth საჭიროა',
          'Technical expertise combined with business impact understanding',
          'მხოლოდ business perspective',
          'Balance არ არის საჭირო',
        ],
        correctAnswerIndex: 1,
        explanation: 'Successful consultants ბალანსირებენ deep technical expertise-ს business impact understanding-თან.',
      },
    ],
  },

  // Episode 20: Hard Quiz
  {
    id: 'ep20-irakli-gabisonia-expert',
    title: 'Expert Consulting and Executive Advisory',
    description: 'ექსპერტული consulting strategies და executive advisory.',
    categories: ['career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/irakli-gabisonia',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep20-h1',
        question: 'როგორ უნდა structure large-scale transformation projects?',
        options: [
          'Big bang approach is best',
          'Phased transformation, change management, stakeholder engagement, risk mitigation',
          'მხოლოდ technical implementation',
          'მხოლოდ top-down approach',
        ],
        correctAnswerIndex: 1,
        explanation: 'Large-scale transformations საჭიროებენ phased approach-ს, change management-ს, stakeholder engagement-ს და risk mitigation-ს.',
      },
      {
        id: 'ep20-h2',
        question: 'რა strategies help with executive stakeholder management?',
        options: [
          'Executives არ საჭიროებენ management-ს',
          'Executive communication, strategic alignment, value demonstration, regular updates',
          'მხოლოდ technical reports',
          'მხოლოდ status meetings',
        ],
        correctAnswerIndex: 1,
        explanation: 'Executive stakeholder management მოითხოვს strategic communication-ს, alignment-ს, clear value demonstration-ს და regular updates-ს.',
      },
      {
        id: 'ep20-h3',
        question: 'როგორ უნდა approach digital transformation strategy?',
        options: [
          'Digital transformation მხოლოდ technology-ს ეხება',
          'Holistic approach: technology, processes, people, culture change',
          'მხოლოდ new software implementation',
          'მხოლოდ automation',
        ],
        correctAnswerIndex: 1,
        explanation: 'Digital transformation მოითხოვს holistic approach-ს: technology, processes, people და culture change-ის ერთობლიობას.',
      },
      {
        id: 'ep20-h4',
        question: 'რა approaches work for building consulting practice?',
        options: [
          'Practice building არ არის საჭირო',
          'Thought leadership, case studies, referral networks, expertise development',
          'მხოლოდ marketing campaigns',
          'მხოლოდ price competition',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Consulting practice building მოითხოვს thought leadership-ს, compelling case studies-ს, referral networks-ს და continuous expertise development-ს.',
      },
      {
        id: 'ep20-h5',
        question: 'როგორ უნდა measuring consulting engagement success?',
        options: [
          'Success measurement არ არის მნიშვნელოვანი',
          'Business outcomes, client satisfaction, long-term impact, relationship strength',
          'მხოლოდ project completion',
          'მხოლოდ financial metrics',
        ],
        correctAnswerIndex: 1,
        explanation: 'Consulting success იზომება business outcomes-ით, client satisfaction-ით, long-term impact-ით და relationship strength-ით.',
      },
      {
        id: 'ep20-h6',
        question: 'რა strategies help with international consulting?',
        options: [
          'International consulting არ განსხვავდება',
          'Cultural sensitivity, local partnerships, regulatory understanding, communication adaptation',
          'მხოლოდ language skills',
          'მხოლოდ remote delivery',
        ],
        correctAnswerIndex: 1,
        explanation:
          'International consulting საჭიროებს cultural sensitivity-ს, local partnerships-ს, regulatory understanding-ს და communication adaptation-ს.',
      },
      {
        id: 'ep20-h7',
        question: 'როგორ უნდა transition from technical role to consulting leadership?',
        options: [
          'Leadership transition არ არის რთული',
          'Business acumen development, team building, strategic thinking, client relationship skills',
          'მხოლოდ technical expertise საკმარისია',
          'მხოლოდ title change',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Technical-დან consulting leadership-ზე transition მოითხოვს business acumen-ს, team building-ს, strategic thinking-ს და client relationship skills-ს.',
      },
    ],
  },
];

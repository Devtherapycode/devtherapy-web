import { Quiz } from '../quizzes.types';

export const ep13NikaQuizzes: Quiz[] = [
  // Episode 13: Easy Quiz (English - Security)
  {
    id: 'ep13-nika-gigashvili-basics',
    title: 'Nika Gigashvili - Cybersecurity Basics',
    description: 'Basic cybersecurity concepts and practices.',
    categories: ['security', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/nika-gigashvili',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep13-e1',
        question: 'What is the primary goal of cybersecurity?',
        options: ['Making systems faster', 'Protecting information, systems, and networks from threats', 'Only password protection', 'Only antivirus software'],
        correctAnswerIndex: 1,
        explanation: 'Cybersecurity aims to protect information, systems, and networks from digital threats, attacks, and unauthorized access.',
      },
      {
        id: 'ep13-e2',
        question: 'What is a common type of cyber attack?',
        options: ['Software updates', 'Phishing attacks', 'System backups', 'Regular maintenance'],
        correctAnswerIndex: 1,
        explanation: 'Phishing attacks are a common type of cyber attack where attackers try to trick users into revealing sensitive information.',
      },
      {
        id: 'ep13-e3',
        question: 'Why is it important to keep software updated?',
        options: ['Only for new features', 'To patch security vulnerabilities and fix bugs', 'To consume more storage', 'To make systems slower'],
        correctAnswerIndex: 1,
        explanation: 'Software updates often include security patches that fix vulnerabilities and protect against new threats.',
      },
      {
        id: 'ep13-e4',
        question: 'What makes a strong password?',
        options: ['Using only numbers', 'Long, complex, and unique for each account', 'Using only letters', 'Using personal information'],
        correctAnswerIndex: 1,
        explanation: 'Strong passwords are long, complex (mixing letters, numbers, symbols), and unique for each account.',
      },
    ],
  },

  // Episode 13: Medium Quiz
  {
    id: 'ep13-nika-gigashvili-advanced',
    title: 'Advanced Security Practices',
    description: 'Deeper dive into cybersecurity strategies and threat mitigation.',
    categories: ['security', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/nika-gigashvili',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep13-m1',
        question: 'What is the principle of least privilege?',
        options: [
          'Give everyone full access',
          'Grant minimum necessary permissions for users to do their job',
          'Only administrators have access',
          'No one has any access',
        ],
        correctAnswerIndex: 1,
        explanation: 'The principle of least privilege means granting users only the minimum permissions necessary to perform their job functions.',
      },
      {
        id: 'ep13-m2',
        question: 'What is two-factor authentication (2FA)?',
        options: ['Using two passwords', 'Authentication requiring two different verification methods', 'Two users logging in', 'Two different applications'],
        correctAnswerIndex: 1,
        explanation: 'Two-factor authentication requires two different verification methods, such as password + SMS code or password + app notification.',
      },
      {
        id: 'ep13-m3',
        question: 'What should you do if you suspect a security breach?',
        options: [
          'Ignore it and hope it goes away',
          'Immediately report it and follow incident response procedures',
          'Try to fix it yourself secretly',
          'Wait to see what happens',
        ],
        correctAnswerIndex: 1,
        explanation: 'Security breaches should be immediately reported and handled through proper incident response procedures to minimize damage.',
      },
      {
        id: 'ep13-m4',
        question: 'What is the purpose of encryption?',
        options: ['To make data larger', 'To protect data by making it unreadable without the proper key', 'To delete data permanently', 'To compress data'],
        correctAnswerIndex: 1,
        explanation: 'Encryption protects data by converting it into an unreadable format that can only be decrypted with the proper key.',
      },
      {
        id: 'ep13-m5',
        question: 'What is social engineering in cybersecurity?',
        options: [
          'Building secure networks',
          'Manipulating people to divulge confidential information',
          'Engineering social media',
          'Creating user interfaces',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Social engineering is the psychological manipulation of people to divulge confidential information or perform actions that compromise security.',
      },
    ],
  },

  // Episode 13: Hard Quiz
  {
    id: 'ep13-nika-gigashvili-expert',
    title: 'Expert Cybersecurity Architecture',
    description: 'Advanced cybersecurity concepts and enterprise security strategies.',
    categories: ['security', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/nika-gigashvili',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep13-h1',
        question: 'What is a zero-trust security model?',
        options: [
          'Trusting all internal users',
          'Never trust, always verify - verify every user and device',
          'Only external verification',
          'No security measures',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Zero-trust security follows the principle of "never trust, always verify" - every user and device must be verified regardless of location.',
      },
      {
        id: 'ep13-h2',
        question: 'How should security be integrated in DevOps (DevSecOps)?',
        options: [
          'Only at the end of development',
          'Security integrated throughout the entire development lifecycle',
          'Only in production',
          'Security is not needed in DevOps',
        ],
        correctAnswerIndex: 1,
        explanation: 'DevSecOps integrates security practices throughout the entire development lifecycle, from planning to deployment and monitoring.',
      },
      {
        id: 'ep13-h3',
        question: 'What are advanced persistent threats (APTs)?',
        options: ['Simple malware', 'Long-term, stealthy cyber attacks targeting specific organizations', 'Quick hit-and-run attacks', 'Software bugs'],
        correctAnswerIndex: 1,
        explanation: 'APTs are sophisticated, long-term cyber attacks where attackers gain and maintain unauthorized access to target specific organizations.',
      },
      {
        id: 'ep13-h4',
        question: 'How should organizations handle security incident response?',
        options: [
          'No formal process needed',
          'Structured incident response plan with defined roles and procedures',
          'Only IT department handles it',
          'Wait for external help',
        ],
        correctAnswerIndex: 1,
        explanation: 'Effective incident response requires a structured plan with defined roles, procedures, and regular testing and updates.',
      },
      {
        id: 'ep13-h5',
        question: 'What is the role of threat intelligence in cybersecurity?',
        options: [
          'Not important for security',
          'Proactive identification and analysis of current and emerging threats',
          'Only historical data analysis',
          'Only technical vulnerability scanning',
        ],
        correctAnswerIndex: 1,
        explanation: 'Threat intelligence involves proactive identification and analysis of current and emerging threats to inform security decisions.',
      },
      {
        id: 'ep13-h6',
        question: 'How should security be approached in cloud environments?',
        options: [
          'Cloud providers handle all security',
          'Shared responsibility model with proper configuration and monitoring',
          'No security needed in cloud',
          'Only network-level security',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Cloud security follows a shared responsibility model requiring proper configuration, monitoring, and security controls from both provider and customer.',
      },
      {
        id: 'ep13-h7',
        question: 'What strategies help with security awareness training?',
        options: [
          'One-time training is sufficient',
          'Regular, engaging, and scenario-based training programs',
          'Only technical training',
          'Training is not necessary',
        ],
        correctAnswerIndex: 1,
        explanation: 'Effective security awareness requires regular, engaging, and scenario-based training programs that simulate real-world threats.',
      },
    ],
  },
];

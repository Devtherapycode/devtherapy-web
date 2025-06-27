import { Quiz } from '../quizzes.types';

export const ep16DavidBumbeishviliQuizzes: Quiz[] = [
  // Episode 16: Easy Quiz (English - Fintech)
  {
    id: 'ep16-david-bumbeishvili-basics',
    title: 'David Bumbeishvili - Fintech Basics',
    description: 'Basic concepts about financial technology and innovation.',
    categories: ['web-development', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/david-bumbeishvili',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep16-e1',
        question: 'What is Fintech?',
        options: ['Only mobile apps', 'Financial technology that improves and automates financial services', 'Only cryptocurrency', 'Only banking'],
        correctAnswerIndex: 1,
        explanation: 'Fintech refers to financial technology that improves and automates the delivery of financial services through innovation.',
      },
      {
        id: 'ep16-e2',
        question: 'What are common examples of Fintech applications?',
        options: [
          'Only traditional banks',
          'Digital payments, robo-advisors, peer-to-peer lending, cryptocurrency',
          'Only cash transactions',
          'Only credit cards',
        ],
        correctAnswerIndex: 1,
        explanation: 'Fintech applications include digital payments, robo-advisors, peer-to-peer lending, cryptocurrency, and many other innovations.',
      },
      {
        id: 'ep16-e3',
        question: 'Why is security crucial in Fintech?',
        options: [
          'It is not important',
          'Financial data and transactions require highest security standards',
          'Only for compliance',
          'Only for user interface',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Security is crucial in Fintech because it deals with sensitive financial data and transactions that require the highest protection standards.',
      },
      {
        id: 'ep16-e4',
        question: 'What role does regulation play in Fintech?',
        options: ['No role at all', 'Ensures consumer protection and system stability', 'Only limits innovation', 'Only for traditional banks'],
        correctAnswerIndex: 1,
        explanation: 'Regulation in Fintech ensures consumer protection, system stability, and fair practices while enabling innovation.',
      },
    ],
  },

  // Episode 16: Medium Quiz
  {
    id: 'ep16-david-bumbeishvili-advanced',
    title: 'Advanced Fintech Development',
    description: 'Technical aspects of building fintech solutions.',
    categories: ['web-development', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/david-bumbeishvili',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep16-m1',
        question: 'What are key considerations for payment processing systems?',
        options: ['Only speed', 'Security, compliance, scalability, and user experience', 'Only cost', 'Only availability'],
        correctAnswerIndex: 1,
        explanation: 'Payment processing systems must balance security, compliance (PCI DSS), scalability, and user experience.',
      },
      {
        id: 'ep16-m2',
        question: 'How should fraud detection be implemented?',
        options: [
          'Manual review only',
          'Machine learning algorithms, real-time monitoring, and risk scoring',
          'Only rule-based systems',
          'No fraud detection needed',
        ],
        correctAnswerIndex: 1,
        explanation: 'Modern fraud detection uses machine learning algorithms, real-time monitoring, and sophisticated risk scoring systems.',
      },
      {
        id: 'ep16-m3',
        question: 'What is API-first approach in Fintech?',
        options: ['APIs are not important', 'Building systems with APIs as core architecture for integration', 'Only external APIs', 'Only internal APIs'],
        correctAnswerIndex: 1,
        explanation: 'API-first approach means building systems with APIs as the core architecture, enabling easy integration and scalability.',
      },
      {
        id: 'ep16-m4',
        question: 'How should data analytics be used in Fintech?',
        options: ['Data is not useful', 'Risk assessment, personalization, compliance, and business insights', 'Only for reporting', 'Only for marketing'],
        correctAnswerIndex: 1,
        explanation: 'Data analytics in Fintech enables risk assessment, personalization, compliance monitoring, and valuable business insights.',
      },
      {
        id: 'ep16-m5',
        question: 'What challenges exist in mobile-first Fintech design?',
        options: [
          'Mobile is not important',
          'Security, usability, performance, and accessibility across devices',
          'Only screen size',
          'Only app store approval',
        ],
        correctAnswerIndex: 1,
        explanation: 'Mobile-first Fintech design must address security, usability, performance, and accessibility across various devices and platforms.',
      },
    ],
  },

  // Episode 16: Hard Quiz
  {
    id: 'ep16-david-bumbeishvili-expert',
    title: 'Expert Fintech Architecture and Compliance',
    description: 'Advanced fintech architecture and regulatory compliance.',
    categories: ['web-development', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/david-bumbeishvili',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep16-h1',
        question: 'How should microservices architecture be designed for Fintech?',
        options: ['Monolithic is better', 'Event-driven, secure communication, and transaction consistency', 'Only API gateways', 'No special considerations'],
        correctAnswerIndex: 1,
        explanation: 'Fintech microservices require event-driven architecture, secure communication channels, and careful transaction consistency management.',
      },
      {
        id: 'ep16-h2',
        question: 'What strategies ensure regulatory compliance in code?',
        options: [
          'Compliance is only legal issue',
          'Audit trails, data governance, automated compliance checks, documentation',
          'Only manual processes',
          'Only external audits',
        ],
        correctAnswerIndex: 1,
        explanation: 'Code-level compliance requires audit trails, data governance, automated compliance checks, and comprehensive documentation.',
      },
      {
        id: 'ep16-h3',
        question: 'How should high-frequency trading systems be optimized?',
        options: [
          'Optimization is not needed',
          'Low-latency architecture, market data optimization, risk controls',
          'Only faster hardware',
          'Only network optimization',
        ],
        correctAnswerIndex: 1,
        explanation: 'High-frequency trading requires low-latency architecture, optimized market data processing, and integrated risk controls.',
      },
      {
        id: 'ep16-h4',
        question: 'What approaches work for blockchain integration in Fintech?',
        options: [
          'Blockchain is not useful',
          'Hybrid architectures, smart contracts, consensus mechanisms',
          'Only public blockchains',
          'Only private blockchains',
        ],
        correctAnswerIndex: 1,
        explanation: 'Blockchain integration uses hybrid architectures, smart contracts, and appropriate consensus mechanisms for specific use cases.',
      },
      {
        id: 'ep16-h5',
        question: 'How should disaster recovery be planned for financial systems?',
        options: [
          'Disaster recovery is not needed',
          'Multi-region backup, real-time replication, automated failover',
          'Only data backup',
          'Only manual recovery',
        ],
        correctAnswerIndex: 1,
        explanation: 'Financial systems require multi-region backup, real-time replication, automated failover, and comprehensive recovery testing.',
      },
      {
        id: 'ep16-h6',
        question: 'What considerations exist for cross-border payment systems?',
        options: [
          'No special considerations',
          'Currency conversion, regulatory compliance, settlement networks',
          'Only exchange rates',
          'Only local regulations',
        ],
        correctAnswerIndex: 1,
        explanation: 'Cross-border payments require currency conversion, multi-jurisdictional regulatory compliance, and integration with settlement networks.',
      },
      {
        id: 'ep16-h7',
        question: 'How should algorithmic trading risk management be implemented?',
        options: [
          'No risk management needed',
          'Real-time risk monitoring, circuit breakers, position limits',
          'Only manual oversight',
          'Only historical analysis',
        ],
        correctAnswerIndex: 1,
        explanation: 'Algorithmic trading requires real-time risk monitoring, automated circuit breakers, and dynamic position limits.',
      },
    ],
  },
];

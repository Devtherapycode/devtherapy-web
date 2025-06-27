import { Quiz } from '../quizzes.types';

export const ep10OtoLoluaQuizzes: Quiz[] = [
  // Episode 10: Easy Quiz (English - DevOps/Leadership)
  {
    id: 'ep10-oto-lolua-basics',
    title: 'Oto Lolua - DevOps and Leadership Basics',
    description: 'Basic concepts about DevOps practices and tech leadership.',
    categories: ['leadership', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/oto-lolua',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep10-e1',
        question: 'What is the primary goal of DevOps?',
        options: ['Only automation', 'Bridge development and operations for faster, reliable delivery', 'Only monitoring', 'Only deployment'],
        correctAnswerIndex: 1,
        explanation: 'DevOps aims to bridge the gap between development and operations teams for faster, more reliable software delivery.',
      },
      {
        id: 'ep10-e2',
        question: 'What role does leadership play in tech teams?',
        options: [
          'Only giving orders',
          'Enabling team growth, removing blockers, and fostering collaboration',
          'Only technical decisions',
          'Only project management',
        ],
        correctAnswerIndex: 1,
        explanation: 'Tech leadership involves enabling team growth, removing blockers, and fostering collaboration rather than just giving orders.',
      },
      {
        id: 'ep10-e3',
        question: 'What is a key benefit of CI/CD practices?',
        options: ['Longer deployment cycles', 'Faster feedback loops and reduced deployment risk', 'More manual testing', 'Fewer releases'],
        correctAnswerIndex: 1,
        explanation: 'CI/CD provides faster feedback loops and reduces deployment risk through automation and frequent integration.',
      },
      {
        id: 'ep10-e4',
        question: 'What mindset is important for DevOps culture?',
        options: ['Individual heroics', 'Collaboration, shared responsibility, and continuous learning', 'Blame culture', 'Rigid processes'],
        correctAnswerIndex: 1,
        explanation: 'DevOps culture emphasizes collaboration, shared responsibility, and continuous learning over individual heroics.',
      },
    ],
  },

  // Episode 10: Medium Quiz
  {
    id: 'ep10-oto-lolua-advanced',
    title: 'Advanced DevOps and Team Leadership',
    description: 'Deeper concepts in DevOps practices and engineering leadership.',
    categories: ['leadership', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/oto-lolua',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep10-m1',
        question: 'How should technical debt be managed in growing teams?',
        options: [
          'Ignore it completely',
          'Balance feature delivery with regular technical debt reduction',
          'Only focus on technical debt',
          'Let it accumulate indefinitely',
        ],
        correctAnswerIndex: 1,
        explanation: 'Effective teams balance feature delivery with regular technical debt reduction to maintain long-term velocity.',
      },
      {
        id: 'ep10-m2',
        question: 'What are key metrics for DevOps success?',
        options: [
          'Only deployment frequency',
          'Lead time, deployment frequency, mean time to recovery, change failure rate',
          'Only code coverage',
          'Only number of features',
        ],
        correctAnswerIndex: 1,
        explanation: 'DevOps success is measured by the four key metrics: lead time, deployment frequency, mean time to recovery, and change failure rate.',
      },
      {
        id: 'ep10-m3',
        question: 'How should engineering leaders handle team conflicts?',
        options: [
          'Avoid all conflicts',
          'Address conflicts early through open communication and mediation',
          'Let teams solve it themselves always',
          'Focus only on technical aspects',
        ],
        correctAnswerIndex: 1,
        explanation: 'Engineering leaders should address conflicts early through open communication and mediation to maintain team health.',
      },
      {
        id: 'ep10-m4',
        question: 'What is the role of monitoring in DevOps?',
        options: ['Only for debugging', 'Proactive observability, alerting, and continuous feedback', 'Only performance metrics', 'Only error tracking'],
        correctAnswerIndex: 1,
        explanation: 'Monitoring in DevOps provides proactive observability, intelligent alerting, and continuous feedback loops.',
      },
      {
        id: 'ep10-m5',
        question: 'How should teams approach incident response?',
        options: [
          'Blame individuals for incidents',
          'Blameless post-mortems focused on system improvements',
          'Ignore incidents if they resolve quickly',
          'Only fix the immediate symptom',
        ],
        correctAnswerIndex: 1,
        explanation: 'Effective incident response uses blameless post-mortems focused on system improvements rather than individual blame.',
      },
    ],
  },

  // Episode 10: Hard Quiz
  {
    id: 'ep10-oto-lolua-expert',
    title: 'Expert DevOps Architecture and Engineering Leadership',
    description: 'Advanced concepts in DevOps architecture and organizational leadership.',
    categories: ['leadership', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/oto-lolua',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep10-h1',
        question: 'How do you design resilient distributed systems?',
        options: [
          'Single points of failure are acceptable',
          'Circuit breakers, bulkheads, timeouts, and graceful degradation',
          'Only horizontal scaling',
          'Ignore failure scenarios',
        ],
        correctAnswerIndex: 1,
        explanation: 'Resilient distributed systems use circuit breakers, bulkheads, timeouts, and graceful degradation patterns.',
      },
      {
        id: 'ep10-h2',
        question: 'What strategies help scale engineering organizations?',
        options: [
          'Only hire more people',
          'Team topologies, clear communication patterns, and distributed decision-making',
          'Centralize all decisions',
          'Focus only on technical scaling',
        ],
        correctAnswerIndex: 1,
        explanation: 'Scaling engineering organizations requires thoughtful team topologies, clear communication patterns, and distributed decision-making.',
      },
      {
        id: 'ep10-h3',
        question: 'How should infrastructure be designed for multi-region deployments?',
        options: [
          'Single region is sufficient',
          'Active-active or active-passive with data replication and traffic routing',
          'Only backup strategies',
          'Manual failover only',
        ],
        correctAnswerIndex: 1,
        explanation: 'Multi-region deployments require active-active or active-passive architectures with data replication and intelligent traffic routing.',
      },
      {
        id: 'ep10-h4',
        question: 'What considerations are important for security in DevOps?',
        options: [
          'Security is only ops responsibility',
          'Security as code, shift-left testing, and threat modeling',
          'Only penetration testing',
          'Security gates at the end',
        ],
        correctAnswerIndex: 1,
        explanation: 'DevOps security involves security as code, shift-left testing, threat modeling, and integrating security throughout the pipeline.',
      },
      {
        id: 'ep10-h5',
        question: 'How do you handle capacity planning for unknown growth patterns?',
        options: [
          'Over-provision everything',
          'Auto-scaling with predictive analytics and circuit breakers',
          'Fixed capacity allocations',
          'React only after problems occur',
        ],
        correctAnswerIndex: 1,
        explanation: 'Effective capacity planning uses auto-scaling with predictive analytics and circuit breakers for unknown growth patterns.',
      },
      {
        id: 'ep10-h6',
        question: 'What approaches work for maintaining system observability?',
        options: [
          'Only basic logging',
          'Distributed tracing, metrics, logs, and correlation across services',
          'Only error monitoring',
          'Manual inspection only',
        ],
        correctAnswerIndex: 1,
        explanation: 'System observability requires distributed tracing, comprehensive metrics, structured logging, and correlation across services.',
      },
      {
        id: 'ep10-h7',
        question: 'How should technical decisions be made in distributed teams?',
        options: ['Top-down only', 'RFC processes, architecture decision records, and consensus building', 'Individual decisions only', 'Avoid documentation'],
        correctAnswerIndex: 1,
        explanation: 'Distributed teams benefit from RFC processes, architecture decision records, and structured consensus building for technical decisions.',
      },
    ],
  },
];

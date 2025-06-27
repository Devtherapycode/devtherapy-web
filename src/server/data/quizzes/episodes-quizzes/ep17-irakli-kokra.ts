import { Quiz } from '../quizzes.types';

export const ep17IrakliKokrashviliQuizzes: Quiz[] = [
  // Episode 17: Easy Quiz (Georgian - System Administration)
  {
    id: 'ep17-irakli-kokrashvili-basics',
    title: 'ირაკლი კოკრაშვილი - System Administration',
    description: 'System Administration-ის ძირითადი კონცეფციები.',
    categories: ['system-administration', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/irakli-kokrashvili',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep17-e1',
        question: 'რა არის System Administration?',
        options: ['მხოლოდ software development', 'Computer systems-ის configuration, maintenance და support', 'მხოლოდ hardware repair', 'მხოლოდ user support'],
        correctAnswerIndex: 1,
        explanation: 'System Administration მოიცავს computer systems-ის configuration-ს, maintenance-სა და support-ს.',
      },
      {
        id: 'ep17-e2',
        question: 'რა პასუხისმგებლობები აქვს System Administrator-ს?',
        options: ['მხოლოდ პროგრამირება', 'Server management, security, backup, user management', 'მხოლოდ hardware installation', 'მხოლოდ documentation'],
        correctAnswerIndex: 1,
        explanation: 'System Administrator-ის პასუხისმგებლობებია server management, security, backup და user management.',
      },
      {
        id: 'ep17-e3',
        question: 'რატომ არის მნიშვნელოვანი System Monitoring?',
        options: [
          'არ არის მნიშვნელოვანი',
          'Performance tracking, problem detection და resource optimization',
          'მხოლოდ error logging',
          'მხოლოდ user activity tracking',
        ],
        correctAnswerIndex: 1,
        explanation: 'System Monitoring მნიშვნელოვანია performance tracking-ისთვის, problem detection-ისა და resource optimization-ისთვის.',
      },
      {
        id: 'ep17-e4',
        question: 'რა არის Network Administration?',
        options: ['მხოლოდ internet connection', 'Network infrastructure-ის მართვა და configuration', 'მხოლოდ WiFi setup', 'მხოლოდ email management'],
        correctAnswerIndex: 1,
        explanation: 'Network Administration მოიცავს network infrastructure-ის მართვას, configuration-სა და optimization-ს.',
      },
    ],
  },

  // Episode 17: Medium Quiz
  {
    id: 'ep17-irakli-kokrashvili-advanced',
    title: 'Advanced System Administration',
    description: 'ღრმა ტექნიკური კითხვები system administration-ის შესახებ.',
    categories: ['system-administration', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/irakli-kokrashvili',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep17-m1',
        question: 'რა არის Virtualization და რატომ გამოიყენება?',
        options: [
          'მხოლოდ software emulation',
          'Multiple virtual machines on single hardware for resource efficiency',
          'მხოლოდ gaming purposes',
          'მხოლოდ testing environment',
        ],
        correctAnswerIndex: 1,
        explanation: 'Virtualization საშუალებას აძლევს შევქმნათ multiple virtual machines single hardware-ზე resource efficiency-ისთვის.',
      },
      {
        id: 'ep17-m2',
        question: 'როგორ უნდა მოხდეს Backup Strategy-ის დაგეგმვა?',
        options: ['მხოლოდ local backups', '3-2-1 rule: 3 copies, 2 different media, 1 offsite', 'მხოლოდ cloud backups', 'Backup არ არის საჭირო'],
        correctAnswerIndex: 1,
        explanation: 'Backup Strategy უნდა მიყვეს 3-2-1 rule-ს: 3 copies, 2 different media, 1 offsite.',
      },
      {
        id: 'ep17-m3',
        question: 'რა არის Load Balancing?',
        options: [
          'მხოლოდ hardware optimization',
          'Traffic distribution across multiple servers for performance and reliability',
          'მხოლოდ network speed improvement',
          'მხოლოდ storage management',
        ],
        correctAnswerIndex: 1,
        explanation: 'Load Balancing არის traffic-ის განაწილება multiple servers-ზე performance-ისა და reliability-ისთვის.',
      },
      {
        id: 'ep17-m4',
        question: 'რა მნიშვნელობა აქვს Configuration Management-ს?',
        options: ['არ არის მნიშვნელოვანი', 'Automated system configuration და consistency across environments', 'მხოლოდ documentation', 'მხოლოდ manual setup'],
        correctAnswerIndex: 1,
        explanation: 'Configuration Management უზრუნველყოფს automated system configuration-ს და consistency-ს environments-ში.',
      },
      {
        id: 'ep17-m5',
        question: 'როგორ უნდა მოხდეს Security Hardening?',
        options: [
          'Security არ არის საჭირო',
          'Remove unnecessary services, update patches, configure firewalls',
          'მხოლოდ antivirus installation',
          'მხოლოდ strong passwords',
        ],
        correctAnswerIndex: 1,
        explanation: 'Security Hardening მოიცავს unnecessary services-ის მოცილებას, patches-ის განახლებას და firewalls-ის configuration-ს.',
      },
    ],
  },

  // Episode 17: Hard Quiz
  {
    id: 'ep17-irakli-kokrashvili-expert',
    title: 'Expert System Architecture and Infrastructure',
    description: 'ექსპერტული system architecture და infrastructure management.',
    categories: ['system-administration', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/irakli-kokrashvili',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep17-h1',
        question: 'როგორ უნდა დაიგეგმოს High Availability Architecture?',
        options: ['Single server არის საკმარისი', 'Redundancy, failover mechanisms, და load distribution', 'მხოლოდ backup servers', 'მხოლოდ powerful hardware'],
        correctAnswerIndex: 1,
        explanation: 'High Availability Architecture მოითხოვს redundancy-ს, failover mechanisms-ს და intelligent load distribution-ს.',
      },
      {
        id: 'ep17-h2',
        question: 'რა strategies არსებობს Disaster Recovery-ისთვის?',
        options: ['Disaster Recovery არ არის საჭირო', 'RTO/RPO planning, data replication, alternate sites', 'მხოლოდ data backup', 'მხოლოდ insurance coverage'],
        correctAnswerIndex: 1,
        explanation: 'Disaster Recovery strategies მოიცავს RTO/RPO planning-ს, data replication-ს და alternate sites-ს.',
      },
      {
        id: 'ep17-h3',
        question: 'როგორ უნდა განხორციელდეს Infrastructure as Code?',
        options: [
          'Manual configuration არის უკეთესი',
          'Automated provisioning, version control, და reproducible environments',
          'მხოლოდ documentation',
          'მხოლოდ scripts',
        ],
        correctAnswerIndex: 1,
        explanation: 'Infrastructure as Code მოიცავს automated provisioning-ს, version control-ს და reproducible environments-ს.',
      },
      {
        id: 'ep17-h4',
        question: 'რა არის Container Orchestration?',
        options: [
          'მხოლოდ Docker installation',
          'Automated deployment, scaling, და management of containerized applications',
          'მხოლოდ virtual machines',
          'მხოლოდ process management',
        ],
        correctAnswerIndex: 1,
        explanation: 'Container Orchestration უზრუნველყოფს automated deployment-ს, scaling-სა და management-ს containerized applications-ისთვის.',
      },
      {
        id: 'ep17-h5',
        question: 'როგორ უნდა მოხდეს Network Security Architecture-ის დაგეგმვა?',
        options: ['Network security არ არის მნიშვნელოვანი', 'Defense in depth, network segmentation, intrusion detection', 'მხოლოდ firewall', 'მხოლოდ VPN'],
        correctAnswerIndex: 1,
        explanation: 'Network Security Architecture მოიცავს defense in depth-ს, network segmentation-სა და intrusion detection-ს.',
      },
      {
        id: 'ep17-h6',
        question: 'რა approaches არსებობს Performance Optimization-ისთვის?',
        options: [
          'Performance optimization არ არის საჭირო',
          'Resource monitoring, bottleneck analysis, capacity planning',
          'მხოლოდ hardware upgrade',
          'მხოლოდ software updates',
        ],
        correctAnswerIndex: 1,
        explanation: 'Performance Optimization მოიცავს resource monitoring-ს, bottleneck analysis-ს და capacity planning-ს.',
      },
      {
        id: 'ep17-h7',
        question: 'როგორ უნდა მოხდეს Cloud Migration Planning?',
        options: [
          'Cloud migration არ არის საჭირო',
          'Assessment, strategy planning, phased migration, optimization',
          'მხოლოდ lift-and-shift',
          'მხოლოდ cost considerations',
        ],
        correctAnswerIndex: 1,
        explanation: 'Cloud Migration Planning მოიცავს assessment-ს, strategy planning-ს, phased migration-ს და optimization-ს.',
      },
    ],
  },
];

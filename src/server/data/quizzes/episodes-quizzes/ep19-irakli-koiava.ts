import { Quiz } from '../quizzes.types';

export const ep19IrakliKoiavaQuizzes: Quiz[] = [
  // Episode 19: Easy Quiz (English - Game Development)
  {
    id: 'ep19-irakli-koiava-basics',
    title: 'Irakli Koiava - Game Development Basics',
    description: 'Basic concepts about game development and the gaming industry.',
    categories: ['game-development', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/irakli-koiava',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep19-e1',
        question: 'What are the main components of game development?',
        options: ['Only programming', 'Programming, art, design, audio, and testing', 'Only graphics', 'Only story writing'],
        correctAnswerIndex: 1,
        explanation: 'Game development involves multiple disciplines including programming, art, design, audio, and testing working together.',
      },
      {
        id: 'ep19-e2',
        question: 'What is a game engine?',
        options: [
          'Only graphics renderer',
          'Software framework providing core functionality for game development',
          'Only physics simulation',
          'Only audio system',
        ],
        correctAnswerIndex: 1,
        explanation:
          'A game engine is a software framework that provides core functionality like rendering, physics, audio, and input handling for game development.',
      },
      {
        id: 'ep19-e3',
        question: 'What skills are important for game programmers?',
        options: ['Only C++ knowledge', 'Programming languages, mathematics, problem-solving, optimization', 'Only game design', 'Only 3D modeling'],
        correctAnswerIndex: 1,
        explanation: 'Game programmers need programming languages, mathematics, problem-solving skills, and understanding of optimization techniques.',
      },
      {
        id: 'ep19-e4',
        question: 'What are common game development challenges?',
        options: [
          'No challenges exist',
          'Performance optimization, platform compatibility, and deadline pressure',
          'Only technical bugs',
          'Only creative differences',
        ],
        correctAnswerIndex: 1,
        explanation: 'Game development faces challenges like performance optimization, platform compatibility, and meeting deadline pressures.',
      },
    ],
  },

  // Episode 19: Medium Quiz
  {
    id: 'ep19-irakli-koiava-advanced',
    title: 'Advanced Game Development Techniques',
    description: 'Technical aspects of game development and industry practices.',
    categories: ['game-development', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/irakli-koiava',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep19-m1',
        question: 'How should game performance be optimized?',
        options: [
          'Performance optimization is not needed',
          'Profiling, asset optimization, efficient algorithms, platform-specific optimizations',
          'Only better hardware',
          'Only graphics settings',
        ],
        correctAnswerIndex: 1,
        explanation: 'Game performance optimization involves profiling, asset optimization, efficient algorithms, and platform-specific optimizations.',
      },
      {
        id: 'ep19-m2',
        question: 'What is game design documentation?',
        options: [
          'Documentation is not needed',
          'Comprehensive specification covering gameplay, mechanics, and technical requirements',
          'Only art concepts',
          'Only code comments',
        ],
        correctAnswerIndex: 1,
        explanation: 'Game design documentation provides comprehensive specification covering gameplay, mechanics, and technical requirements.',
      },
      {
        id: 'ep19-m3',
        question: 'How should multiplayer networking be approached?',
        options: [
          'Multiplayer is too complex',
          'Client-server architecture, state synchronization, lag compensation',
          'Only peer-to-peer',
          'Only local multiplayer',
        ],
        correctAnswerIndex: 1,
        explanation: 'Multiplayer networking requires client-server architecture, state synchronization, and lag compensation techniques.',
      },
      {
        id: 'ep19-m4',
        question: 'What considerations exist for mobile game development?',
        options: [
          'Mobile games are simple',
          'Touch controls, battery optimization, various screen sizes, performance constraints',
          'Only iOS development',
          'Only Android development',
        ],
        correctAnswerIndex: 1,
        explanation: 'Mobile game development must consider touch controls, battery optimization, various screen sizes, and performance constraints.',
      },
      {
        id: 'ep19-m5',
        question: 'How should game testing be conducted?',
        options: [
          'Testing is not necessary',
          'Functional testing, playtesting, performance testing, platform testing',
          'Only automated testing',
          'Only developer testing',
        ],
        correctAnswerIndex: 1,
        explanation: 'Game testing includes functional testing, playtesting, performance testing, and platform-specific testing.',
      },
    ],
  },

  // Episode 19: Hard Quiz
  {
    id: 'ep19-irakli-koiava-expert',
    title: 'Expert Game Engine Architecture',
    description: 'Advanced game engine architecture and industry-level development.',
    categories: ['game-development', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/irakli-koiava',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep19-h1',
        question: 'How should game engine architecture be designed?',
        options: [
          'Monolithic architecture is best',
          'Modular systems, component-based entities, efficient memory management',
          'Only object-oriented design',
          'Only functional programming',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Game engine architecture should be modular with component-based entities and efficient memory management for performance and maintainability.',
      },
      {
        id: 'ep19-h2',
        question: 'What strategies help with cross-platform development?',
        options: [
          'Target single platform only',
          'Abstraction layers, platform-specific optimizations, unified build systems',
          'Only use web technologies',
          'Only native development',
        ],
        correctAnswerIndex: 1,
        explanation: 'Cross-platform development uses abstraction layers, platform-specific optimizations, and unified build systems.',
      },
      {
        id: 'ep19-h3',
        question: 'How should real-time rendering be optimized?',
        options: [
          'Rendering optimization is not needed',
          'Culling techniques, level-of-detail, batching, shader optimization',
          'Only increase polygon count',
          'Only use simple shaders',
        ],
        correctAnswerIndex: 1,
        explanation: 'Real-time rendering optimization uses culling techniques, level-of-detail systems, batching, and shader optimization.',
      },
      {
        id: 'ep19-h4',
        question: 'What approaches work for game AI development?',
        options: [
          'AI is not needed in games',
          'State machines, behavior trees, pathfinding, machine learning integration',
          'Only random behavior',
          'Only scripted behavior',
        ],
        correctAnswerIndex: 1,
        explanation: 'Game AI development uses state machines, behavior trees, pathfinding algorithms, and increasingly machine learning integration.',
      },
      {
        id: 'ep19-h5',
        question: 'How should game asset pipeline be designed?',
        options: [
          'Manual asset processing is sufficient',
          'Automated build pipeline, format optimization, dependency management',
          'Only drag-and-drop assets',
          'Only runtime loading',
        ],
        correctAnswerIndex: 1,
        explanation: 'Game asset pipeline should be automated with format optimization and proper dependency management for efficiency.',
      },
      {
        id: 'ep19-h6',
        question: 'What considerations exist for VR/AR game development?',
        options: [
          'VR/AR is just regular games',
          'Motion tracking, comfort considerations, spatial audio, performance requirements',
          'Only visual effects',
          'Only head tracking',
        ],
        correctAnswerIndex: 1,
        explanation: 'VR/AR game development requires motion tracking, comfort considerations, spatial audio, and higher performance requirements.',
      },
      {
        id: 'ep19-h7',
        question: 'How should game monetization be technically implemented?',
        options: [
          'Monetization is only business concern',
          'Secure payment processing, analytics integration, A/B testing infrastructure',
          'Only payment buttons',
          'Only advertising integration',
        ],
        correctAnswerIndex: 1,
        explanation: 'Game monetization requires secure payment processing, analytics integration, and A/B testing infrastructure for optimization.',
      },
    ],
  },
];

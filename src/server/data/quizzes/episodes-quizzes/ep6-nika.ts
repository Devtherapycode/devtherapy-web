import { Quiz } from '../quizzes.types';

export const ep6NikaQuizzes: Quiz[] = [
  // Episode 6: Easy Quiz (English - Technical)
  {
    id: 'ep6-nika-basics',
    title: 'Nika Otiashvili - Game Development Basics',
    description: 'Basic questions about Nika Otiashvili and game development concepts.',
    categories: ['game-development', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/nika-otiashvili',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep6-e1',
        question: "What is Nika Otiashvili's main area of expertise?",
        options: ['Web Development', 'Game Development', 'Mobile Apps', 'Data Science'],
        correctAnswerIndex: 1,
        explanation: 'Nika Otiashvili is an experienced Game Developer with extensive experience in the gaming industry.',
      },
      {
        id: 'ep6-e2',
        question: 'What programming approach does Nika prefer for games?',
        options: ['Using only game engines', 'Programming without game engines', 'Only visual scripting', 'Only blueprint systems'],
        correctAnswerIndex: 1,
        explanation: 'Nika advocates for game development without relying heavily on game engines, preferring custom solutions.',
      },
      {
        id: 'ep6-e3',
        question: 'What development philosophy issue was discussed?',
        options: ['Using the newest frameworks', 'Problems with memorized OOP practices', 'Always following tutorials', 'Using only high-level languages'],
        correctAnswerIndex: 1,
        explanation: 'The episode discussed problems with blindly following memorized OOP practices without understanding.',
      },
      {
        id: 'ep6-e4',
        question: 'What tools does Nika prefer for development?',
        options: ['Only IDEs with autocomplete', 'Text editors like Emacs/Neovim', 'Only cloud-based editors', 'Only GUI tools'],
        correctAnswerIndex: 1,
        explanation: 'Nika prefers using advanced text editors like Emacs and Neovim for development work.',
      },
    ],
  },

  // Episode 6: Medium Quiz
  {
    id: 'ep6-nika-philosophy',
    title: 'Development Philosophies and Tool Choices',
    description: 'Deep dive into development philosophies and engineering approaches.',
    categories: ['game-development', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/nika-otiashvili',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep6-m1',
        question: "What's the main difference between Enterprise and Game Development?",
        options: [
          'Only the programming languages used',
          'Performance requirements, constraints, and problem-solving approaches',
          'Only the team size',
          'Only the project duration',
        ],
        correctAnswerIndex: 1,
        explanation: 'Enterprise and Game Development differ significantly in performance requirements, constraints, and problem-solving approaches.',
      },
      {
        id: 'ep6-m2',
        question: 'Why can mainstream technologies be problematic for game development?',
        options: [
          'They are too expensive',
          "They add unnecessary overhead and don't fit specific game requirements",
          'They are too difficult to learn',
          'They are not popular enough',
        ],
        correctAnswerIndex: 1,
        explanation: 'Mainstream technologies often add unnecessary overhead and may not fit the specific performance and architectural requirements of games.',
      },
      {
        id: 'ep6-m3',
        question: "What's wrong with memorized OOP according to the discussion?",
        options: [
          'OOP is completely useless',
          'Blindly following patterns without understanding the underlying problems',
          'OOP is too simple',
          'OOP is too modern',
        ],
        correctAnswerIndex: 1,
        explanation: 'The issue is blindly following OOP patterns without understanding the actual problems they solve.',
      },
      {
        id: 'ep6-m4',
        question: 'What advantage do custom solutions have over big game engines?',
        options: [
          'They are always faster to develop',
          'Better control, performance optimization, and freedom from engine limitations',
          'They require less programming knowledge',
          'They are easier to debug',
        ],
        correctAnswerIndex: 1,
        explanation: 'Custom solutions provide better control, performance optimization possibilities, and freedom from engine limitations.',
      },
      {
        id: 'ep6-m5',
        question: 'What tool philosophy was advocated in the episode?',
        options: [
          'Always use the most popular tools',
          'Choose tools based on your specific needs and constraints',
          'Always use the newest tools',
          'Only use free tools',
        ],
        correctAnswerIndex: 1,
        explanation: 'The episode advocated for choosing tools based on your specific needs and constraints rather than following trends.',
      },
    ],
  },
];

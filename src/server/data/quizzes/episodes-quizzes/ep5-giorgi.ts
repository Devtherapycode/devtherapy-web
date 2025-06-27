import { Quiz } from '../quizzes.types';

export const ep5GiorgiQuizzes: Quiz[] = [
  // Episode 5: Easy Quiz - Game Development Basics
  {
    id: 'ep5-giorgi-basics',
    title: 'Giorgi Abelashvili - Game Development Basics',
    description: 'Basic questions about Giorgi Abelashvili and game development fundamentals.',
    categories: ['game-development', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/giorgi-abelashvili',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep5-e1',
        question: "What is Giorgi Abelashvili's current position?",
        options: ['Frontend Developer', 'Senior Game Developer at DECA Games', 'Data Scientist', 'Mobile App Developer'],
        correctAnswerIndex: 1,
        explanation: 'Giorgi Abelashvili works as a Senior Game Developer at DECA Games with over a decade of experience in the games industry.',
      },
      {
        id: 'ep5-e2',
        question: 'Which programming language was prominently discussed in the episode for game development?',
        options: ['Python', 'C#', 'JavaScript', 'Ruby'],
        correctAnswerIndex: 1,
        explanation: 'C# was discussed as a key programming language for game development, especially with Unity.',
      },
      {
        id: 'ep5-e3',
        question: 'What is one of the most popular game engines mentioned in the episode?',
        options: ['Godot', 'Unity', 'GameMaker', 'Construct'],
        correctAnswerIndex: 1,
        explanation: 'Unity was extensively discussed in the episode as one of the primary game engines for development.',
      },
      {
        id: 'ep5-e4',
        question: 'How many years of experience does Giorgi have in game development?',
        options: ['5 years', '10 years', '15 years', '20 years'],
        correctAnswerIndex: 2,
        explanation: 'Giorgi has over 15 years of experience in game development, making him a seasoned professional in the industry.',
      },
    ],
  },

  // Episode 5: Medium Quiz - Game Development Concepts
  {
    id: 'ep5-giorgi-advanced',
    title: 'Advanced Game Development Concepts',
    description: 'Deep dive into game development concepts, engines, and industry insights.',
    categories: ['game-development', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/giorgi-abelashvili',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep5-m1',
        question: 'What other major game engine was discussed alongside Unity?',
        options: ['CryEngine', 'Unreal Engine', 'Source Engine', 'Frostbite'],
        correctAnswerIndex: 1,
        explanation: 'Unreal Engine was discussed as another major game engine option for developers.',
      },
      {
        id: 'ep5-m2',
        question: 'What type of games were specifically highlighted in the discussion about modern gaming trends?',
        options: ['AAA Games', 'Indie Games', 'Mobile Games', 'VR Games'],
        correctAnswerIndex: 1,
        explanation: 'Indie games were extensively discussed, including their popularity and development approaches.',
      },
      {
        id: 'ep5-m3',
        question: 'What classic game was mentioned as an example in the episode?',
        options: ['Tetris', 'Flappy Bird', 'Pac-Man', 'Space Invaders'],
        correctAnswerIndex: 1,
        explanation: 'Flappy Bird was mentioned as an example, showcasing the impact of simple yet engaging game design.',
      },
      {
        id: 'ep5-m4',
        question: 'Which racing game series was discussed in the episode?',
        options: ['Gran Turismo', 'Need for Speed: Most Wanted', 'Forza', 'F1'],
        correctAnswerIndex: 1,
        explanation: 'Need for Speed: Most Wanted was mentioned, along with Car X Racing.',
      },
      {
        id: 'ep5-m5',
        question: 'What important aspect of game development was emphasized for learning?',
        options: ['Only programming', 'GameJams and practical experience', 'Only theory', 'Only graphics'],
        correctAnswerIndex: 1,
        explanation: 'GameJams were highlighted as crucial for learning game development through hands-on experience.',
      },
    ],
  },

  // Episode 5: Hard Quiz - Game Industry and Technical Details
  {
    id: 'ep5-giorgi-expert',
    title: 'Expert-Level Game Development and Industry Knowledge',
    description: 'Advanced technical concepts and industry insights from game development.',
    categories: ['game-development', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/giorgi-abelashvili',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep5-h1',
        question: 'What programming languages does Giorgi have advanced knowledge in?',
        options: ['Only C#', 'C, C++, C#, Objective-C, and Java', 'Only JavaScript and Python', 'Only Unity scripting'],
        correctAnswerIndex: 1,
        explanation: 'Giorgi has advanced knowledge in C, C++, C#, Objective-C, and Java, showing his versatility across different platforms.',
      },
      {
        id: 'ep5-h2',
        question: 'What was discussed about the game development industry 15 years ago?',
        options: [
          'It was exactly the same as today',
          'The tools and approaches were very different from modern development',
          'Only mobile games existed',
          'Unity was already dominant',
        ],
        correctAnswerIndex: 1,
        explanation: 'The episode discussed how game development tools and approaches have significantly evolved over the past 15 years.',
      },
      {
        id: 'ep5-h3',
        question: 'What aspects of game development does Giorgi specialize in according to his background?',
        options: [
          'Only gameplay programming',
          'Game engine architecture, system optimization, multiplayer development, and AI-driven gameplay',
          'Only graphics programming',
          'Only mobile game development',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Giorgi specializes in game engine architecture, system optimization, multiplayer game development, Live Ops, and AI-driven gameplay design.',
      },
      {
        id: 'ep5-h4',
        question: 'What was mentioned about CD Projekt Red in the episode?',
        options: ['Nothing was mentioned', 'An offer or opportunity was discussed', 'Only their games were reviewed', 'Only technical aspects were covered'],
        correctAnswerIndex: 1,
        explanation: 'The episode mentioned something about an offer or opportunity from CD Projekt Red.',
      },
      {
        id: 'ep5-h5',
        question: 'What role do GameJams play in Georgian game development culture?',
        options: ['They are not important', 'They are crucial for community building and skill development', 'Only for beginners', 'Only for mobile games'],
        correctAnswerIndex: 1,
        explanation: 'GameJams were discussed as being important for Georgian game development culture and community building.',
      },
      {
        id: 'ep5-h6',
        question: 'What was emphasized about feedback in game development?',
        options: [
          'Feedback is not important',
          'Feedback is crucial for game improvement and player engagement',
          'Only technical feedback matters',
          'Only graphics feedback is needed',
        ],
        correctAnswerIndex: 1,
        explanation: 'The importance of feedback was emphasized as crucial for improving games and engaging players effectively.',
      },
      {
        id: 'ep5-h7',
        question: 'Which indie game was specifically mentioned as an example of effective game design?',
        options: ['Hollow Knight', 'Celeste', 'Dead Cells', 'Ori and the Blind Forest'],
        correctAnswerIndex: 1,
        explanation: 'Celeste was mentioned as an example of effective indie game design and development.',
      },
    ],
  },
];

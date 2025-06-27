
import { Quiz } from './quizzes.types';

export const allQuizzes: Quiz[] = [
  {
    id: 'gpu-programming-ep7',
    title: 'GPU Programming Basics',
    description: 'Test your knowledge about GPUs and graphics programming based on Episode #7 with Zura Abelashvili.',
    category: 'episode',
    difficulty: 'medium',
    episodeLink: '/episodes/zura-abelashvili',
    estimatedTime: 3,
    questions: [
      {
        id: 'gpu-1',
        question: 'What does GPU stand for?',
        options: [
          'General Processing Unit',
          'Graphics Programming Utility', 
          'Graphics Processing Unit',
          'Geometric Processing Unit'
        ],
        correctAnswerIndex: 2,
        explanation: 'GPU stands for Graphics Processing Unit - specialized hardware for parallel processing.'
      },
      {
        id: 'gpu-2',
        question: 'Which company does Zura work for?',
        options: ['Ubisoft', 'Rockstar Games', 'Valve', 'Epic Games'],
        correctAnswerIndex: 1,
        explanation: 'Zura Abelashvili works as a Graphics Engineer at Rockstar Games, known for GTA series.'
      },
      {
        id: 'gpu-3',
        question: 'What is ray tracing primarily used for?',
        options: [
          'CPU optimization',
          'Realistic lighting and reflections',
          'Memory management',
          'Network communications'
        ],
        correctAnswerIndex: 1,
        explanation: 'Ray tracing simulates light behavior to create realistic lighting, shadows, and reflections.'
      },
      {
        id: 'gpu-4',
        question: 'Which programming language is commonly used for GPU programming?',
        options: ['JavaScript', 'CUDA/OpenCL', 'Python', 'HTML'],
        correctAnswerIndex: 1,
        explanation: 'CUDA (NVIDIA) and OpenCL are the main languages for GPU programming and parallel computing.'
      },
      {
        id: 'gpu-5',
        question: 'What makes GPUs better than CPUs for graphics?',
        options: [
          'Higher clock speeds',
          'Better single-core performance',
          'Thousands of parallel cores',
          'More cache memory'
        ],
        correctAnswerIndex: 2,
        explanation: 'GPUs have thousands of smaller cores optimized for parallel processing, perfect for graphics calculations.'
      }
    ]
  },
  {
    id: 'frontend-fundamentals',
    title: 'Frontend Fundamentals',
    description: 'Essential frontend development concepts every developer should know.',
    category: 'frontend',
    difficulty: 'easy',
    estimatedTime: 4,
    questions: [
      {
        id: 'frontend-1',
        question: 'Which of these is NOT a JavaScript framework?',
        options: ['React', 'Vue', 'Angular', 'Django'],
        correctAnswerIndex: 3,
        explanation: 'Django is a Python web framework, while the others are JavaScript frameworks.'
      },
      {
        id: 'frontend-2',
        question: 'What does CSS stand for?',
        options: [
          'Computer Style Sheets',
          'Cascading Style Sheets',
          'Creative Style System',
          'Component Style Structure'
        ],
        correctAnswerIndex: 1,
        explanation: 'CSS stands for Cascading Style Sheets - used for styling web pages.'
      },
      {
        id: 'frontend-3',
        question: 'Which HTML tag is used for the largest heading?',
        options: ['<h6>', '<h3>', '<h1>', '<header>'],
        correctAnswerIndex: 2,
        explanation: '<h1> represents the largest heading, with <h6> being the smallest.'
      }
    ]
  },
  {
    id: 'ai-basics',
    title: 'AI & Machine Learning Basics',
    description: 'Test your understanding of AI concepts discussed in various episodes.',
    category: 'ai',
    difficulty: 'medium',
    estimatedTime: 5,
    questions: [
      {
        id: 'ai-1',
        question: 'What does LLM stand for in AI?',
        options: [
          'Linear Learning Model',
          'Large Language Model',
          'Logic Learning Machine',
          'Language Learning Module'
        ],
        correctAnswerIndex: 1,
        explanation: 'LLM stands for Large Language Model - AI systems trained on vast amounts of text data.'
      },
      {
        id: 'ai-2',
        question: 'Which company created ChatGPT?',
        options: ['Google', 'Microsoft', 'OpenAI', 'Meta'],
        correctAnswerIndex: 2,
        explanation: 'ChatGPT was created by OpenAI, though Microsoft is a major investor and partner.'
      }
    ]
  }
];

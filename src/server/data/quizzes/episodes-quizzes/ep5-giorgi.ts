import { Quiz } from '../quizzes.types';

export const ep5GiorgiQuizzes: Quiz[] = [
  // Episode 5: Easy Quiz (English - Data Visualization)
  {
    id: 'ep5-giorgi-basics',
    title: 'Giorgi Abelashvili - Data Visualization Basics',
    description: 'Basic questions about Giorgi Abelashvili and data visualization.',
    categories: ['data-visualization', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/giorgi-abelashvili',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep5-e1',
        question: "What is Giorgi Abelashvili's main area of expertise?",
        options: ['Game Development', 'Data Visualization', 'Mobile Apps', 'DevOps'],
        correctAnswerIndex: 1,
        explanation: 'Giorgi Abelashvili specializes in data visualization and creating compelling visual representations of data.',
      },
      {
        id: 'ep5-e2',
        question: 'What programming language is commonly used for data visualization?',
        options: ['C++', 'JavaScript', 'Assembly', 'COBOL'],
        correctAnswerIndex: 1,
        explanation: 'JavaScript is widely used for data visualization, especially with libraries like D3.js.',
      },
      {
        id: 'ep5-e3',
        question: 'What is the primary goal of data visualization?',
        options: ['Making data look pretty', 'Making complex data understandable and actionable', 'Hiding data complexity', 'Replacing raw data'],
        correctAnswerIndex: 1,
        explanation: 'The primary goal of data visualization is to make complex data understandable and actionable for decision-making.',
      },
      {
        id: 'ep5-e4',
        question: 'Which skill is most important for a data visualization engineer?',
        options: ['Only technical programming', 'Combination of technical skills and design thinking', 'Only graphic design', 'Only mathematics'],
        correctAnswerIndex: 1,
        explanation: 'Data visualization requires a combination of technical programming skills and design thinking to create effective visualizations.',
      },
    ],
  },

  // Episode 5: Medium Quiz
  {
    id: 'ep5-giorgi-advanced',
    title: 'Advanced Data Visualization Techniques',
    description: 'Deep dive into data visualization concepts and techniques.',
    categories: ['data-visualization', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/giorgi-abelashvili',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep5-m1',
        question: 'What challenges exist in enterprise data visualization?',
        options: ['Only technical limitations', 'Data quality, scalability, and user adoption challenges', 'Only design challenges', 'Only performance issues'],
        correctAnswerIndex: 1,
        explanation: 'Enterprise data visualization faces multiple challenges including data quality, scalability, and user adoption.',
      },
      {
        id: 'ep5-m2',
        question: 'How important is storytelling in data visualization?',
        options: ['Not important', 'Critical for effective communication and user engagement', 'Only for presentations', 'Only for marketing'],
        correctAnswerIndex: 1,
        explanation: 'Storytelling is critical in data visualization for effective communication and user engagement with the data.',
      },
      {
        id: 'ep5-m3',
        question: 'What role does interactivity play in modern data visualization?',
        options: [
          "It's just a nice-to-have feature",
          'Essential for user exploration and deeper data understanding',
          'Only for web applications',
          'Only for mobile apps',
        ],
        correctAnswerIndex: 1,
        explanation: 'Interactivity is essential in modern data visualization as it allows users to explore and gain deeper understanding of the data.',
      },
      {
        id: 'ep5-m4',
        question: 'What considerations are important when choosing visualization types?',
        options: [
          'Only aesthetic preferences',
          'Data type, audience, and the story you want to tell',
          'Only technical capabilities',
          'Only performance requirements',
        ],
        correctAnswerIndex: 1,
        explanation: 'Choosing visualization types should consider data type, target audience, and the story you want to communicate.',
      },
      {
        id: 'ep5-m5',
        question: 'How do real-time data requirements affect visualization design?',
        options: [
          'No significant impact',
          'Requires careful consideration of performance, updates, and user experience',
          'Only affects backend',
          'Only affects database design',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Real-time data requirements significantly impact visualization design, requiring careful consideration of performance, updates, and user experience.',
      },
    ],
  },

  // Episode 5: Hard Quiz
  {
    id: 'ep5-giorgi-expert',
    title: 'Expert-Level Data Visualization Engineering',
    description: 'Advanced technical concepts and architectural decisions in data visualization.',
    categories: ['data-visualization', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/giorgi-abelashvili',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep5-h1',
        question: 'What are the key performance considerations for large-scale data visualizations?',
        options: [
          'Only memory usage',
          'Memory usage, rendering performance, data aggregation, and progressive loading',
          'Only CPU usage',
          'Only network bandwidth',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Large-scale data visualizations require consideration of memory usage, rendering performance, data aggregation strategies, and progressive loading techniques.',
      },
      {
        id: 'ep5-h2',
        question: 'How should data aggregation be handled in interactive visualizations?',
        options: [
          'Always pre-aggregate everything',
          'Dynamic aggregation based on zoom level and user interaction patterns',
          'Never aggregate data',
          'Only aggregate on the client side',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Effective interactive visualizations use dynamic aggregation based on zoom level and user interaction patterns to balance performance and detail.',
      },
      {
        id: 'ep5-h3',
        question: 'What architectural patterns work best for real-time data visualization systems?',
        options: [
          'Monolithic architecture only',
          'Event-driven architecture with streaming data pipelines and caching layers',
          'Traditional request-response only',
          'Static file serving only',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Real-time data visualization systems benefit from event-driven architecture with streaming data pipelines and intelligent caching layers.',
      },
      {
        id: 'ep5-h4',
        question: 'How do you handle data quality issues in visualization systems?',
        options: [
          'Ignore data quality issues',
          'Implement data validation, cleaning pipelines, and graceful degradation',
          'Only show perfect data',
          'Let users handle data quality',
        ],
        correctAnswerIndex: 1,
        explanation: 'Robust visualization systems implement data validation, cleaning pipelines, and graceful degradation to handle data quality issues.',
      },
      {
        id: 'ep5-h5',
        question: 'What strategies help with visualization accessibility and inclusivity?',
        options: [
          'Color-only coding is sufficient',
          'Color-blind friendly palettes, alternative encodings, and screen reader support',
          'Only high-contrast themes',
          'No special considerations needed',
        ],
        correctAnswerIndex: 1,
        explanation: 'Accessible visualizations require color-blind friendly palettes, alternative encodings (shapes, patterns), and screen reader support.',
      },
      {
        id: 'ep5-h6',
        question: 'How do you optimize visualization rendering for different devices?',
        options: [
          'Same approach for all devices',
          'Adaptive rendering based on device capabilities and viewport constraints',
          'Only optimize for desktop',
          'Only optimize for mobile',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Optimal visualization rendering requires adaptive approaches based on device capabilities, viewport constraints, and performance characteristics.',
      },
      {
        id: 'ep5-h7',
        question: 'What role does caching play in complex visualization systems?',
        options: [
          'Caching is not important',
          'Multi-layer caching: data layer, computation layer, and rendering layer',
          'Only cache final images',
          'Only cache raw data',
        ],
        correctAnswerIndex: 1,
        explanation: 'Complex visualization systems benefit from multi-layer caching strategies covering data, computation, and rendering layers.',
      },
    ],
  },
];

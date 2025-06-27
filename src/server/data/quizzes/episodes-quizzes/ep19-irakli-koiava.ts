import { Quiz } from '../quizzes.types';

export const ep19IrakliKoiavaQuizzes: Quiz[] = [
  // Episode 19: Easy Quiz - 3D Graphics and Rendering Basics
  {
    id: 'ep19-irakli-koiava-basics',
    title: 'Irakli Koiava - 3D Graphics and Rendering Basics',
    description: 'Basic concepts about 3D graphics, rendering, and graphics programming fundamentals.',
    categories: ['software-engineering', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/irakli-koiava',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep19-e1',
        question: 'What is the primary difference between rasterization and raytracing?',
        options: [
          'There is no difference',
          'Rasterization projects 3D objects to 2D screen, raytracing simulates light paths',
          'Raytracing is only for 2D graphics',
          'Rasterization is always slower',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Rasterization projects 3D objects onto a 2D screen using triangles, while raytracing simulates actual light paths for more realistic rendering.',
      },
      {
        id: 'ep19-e2',
        question: 'What is OpenGL primarily used for?',
        options: ['Only web development', 'Cross-platform graphics programming and 3D rendering', 'Only mobile applications', 'Database management'],
        correctAnswerIndex: 1,
        explanation: 'OpenGL is a cross-platform API for graphics programming, widely used for 3D rendering and graphics applications.',
      },
      {
        id: 'ep19-e3',
        question: 'What mathematical concepts are essential for graphics programming?',
        options: ['Only basic arithmetic', 'Linear algebra, trigonometry, vector mathematics, and matrix transformations', 'Only statistics', 'Only calculus'],
        correctAnswerIndex: 1,
        explanation: 'Graphics programming relies heavily on linear algebra, trigonometry, vector mathematics, and matrix transformations for 3D calculations.',
      },
      {
        id: 'ep19-e4',
        question: 'What is the role of shaders in graphics programming?',
        options: [
          'They only handle user input',
          'Small programs that run on GPU to control rendering pipeline stages',
          'They only manage memory',
          'They only handle file operations',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Shaders are small programs that run on the GPU to control different stages of the rendering pipeline, like vertex and fragment processing.',
      },
    ],
  },

  // Episode 19: Medium Quiz - Graphics Engineering and Career Development
  {
    id: 'ep19-irakli-koiava-advanced',
    title: 'Graphics Engineering and International Career Development',
    description: 'Advanced concepts in graphics systems and career development in international markets.',
    categories: ['software-engineering', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/irakli-koiava',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep19-m1',
        question: 'What are key challenges when working for international companies like Dassault Systèmes?',
        options: [
          'No challenges exist',
          'Cultural adaptation, language barriers, different work methodologies, and time zone coordination',
          'Only technical challenges',
          'Only salary negotiations',
        ],
        correctAnswerIndex: 1,
        explanation: 'International work involves cultural adaptation, language considerations, different methodologies, and coordination across time zones.',
      },
      {
        id: 'ep19-m2',
        question: 'How should someone transition from art/creativity background to technical graphics programming?',
        options: [
          'Complete career change is impossible',
          'Leverage visual understanding while learning mathematics and programming fundamentals',
          'Only focus on technical skills',
          'Abandon creative background completely',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Creative background provides valuable visual understanding that can be combined with mathematical and programming skills for graphics development.',
      },
      {
        id: 'ep19-m3',
        question: 'What is important when building graphics applications from scratch?',
        options: [
          'Only focus on advanced features',
          'Start with basic rendering, understand graphics pipeline, iterate on performance',
          'Only use existing engines',
          'Only focus on user interface',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Building graphics applications requires starting with basic rendering concepts, understanding the graphics pipeline, and iteratively improving performance.',
      },
      {
        id: 'ep19-m4',
        question: 'How do graphics systems handle 3D transformations?',
        options: [
          'Only through manual calculations',
          'Matrix operations for translation, rotation, scaling, and projection',
          'Only through pre-computed animations',
          'Only through 2D operations',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Graphics systems use matrix operations to handle 3D transformations including translation, rotation, scaling, and projection from 3D to 2D.',
      },
      {
        id: 'ep19-m5',
        question: 'What factors should be considered when choosing between staying at one company vs changing jobs?',
        options: [
          'Always change jobs frequently',
          'Growth opportunities, learning potential, work satisfaction, and career alignment',
          'Only salary considerations',
          'Always stay at one company',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Career decisions should balance growth opportunities, learning potential, work satisfaction, and long-term career alignment rather than just salary.',
      },
    ],
  },

  // Episode 19: Hard Quiz - Advanced Graphics Architecture and Rendering Systems
  {
    id: 'ep19-irakli-koiava-expert',
    title: 'Advanced Graphics Architecture and Rendering Systems',
    description: 'Expert-level concepts in graphics system architecture, rendering optimization, and professional development.',
    categories: ['software-engineering', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/irakli-koiava',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep19-h1',
        question: 'How should modern graphics systems handle memory management for optimal performance?',
        options: [
          'Use system memory for everything',
          'Efficient GPU memory allocation, buffer management, and texture streaming strategies',
          'Only use static allocations',
          'Memory management is not important',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Modern graphics systems require efficient GPU memory allocation, proper buffer management, and texture streaming strategies for optimal performance.',
      },
      {
        id: 'ep19-h2',
        question: 'What are the key considerations for building CAD graphics systems like those at Dassault Systèmes?',
        options: [
          'Only visual appearance matters',
          'Precision, large dataset handling, interactive manipulation, and multi-platform support',
          'Only rendering speed',
          'Only user interface design',
        ],
        correctAnswerIndex: 1,
        explanation:
          'CAD graphics systems require high precision, efficient handling of large datasets, smooth interactive manipulation, and multi-platform support.',
      },
      {
        id: 'ep19-h3',
        question: 'How do modern rendering pipelines optimize for real-time performance?',
        options: [
          'Only increase hardware power',
          'Culling techniques, level-of-detail, instancing, and shader optimization',
          'Only reduce quality',
          'Only use simple geometry',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Modern rendering pipelines use culling techniques, level-of-detail systems, instancing, and shader optimization for real-time performance.',
      },
      {
        id: 'ep19-h4',
        question: 'What strategies help in handling the complexity of large-scale graphics software projects?',
        options: [
          'Avoid complexity altogether',
          'Modular architecture, clear interfaces, automated testing, and iterative development',
          'Only hire more developers',
          'Only use simple solutions',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Large graphics projects require modular architecture, clear interfaces, automated testing, and iterative development to manage complexity.',
      },
      {
        id: 'ep19-h5',
        question: 'How should graphics engineers approach learning emerging technologies like ray tracing?',
        options: [
          'Wait for technologies to become obsolete',
          'Study fundamentals, experiment with implementations, and understand trade-offs',
          'Only read documentation',
          'Only use existing solutions',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Learning emerging graphics technologies requires studying fundamentals, hands-on experimentation, and understanding performance trade-offs.',
      },
      {
        id: 'ep19-h6',
        question: 'What approaches work for debugging complex graphics rendering issues?',
        options: [
          'Random trial and error',
          'Graphics debuggers, frame capture analysis, performance profiling, and systematic testing',
          'Only visual inspection',
          'Only ask for help',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Graphics debugging requires specialized tools like graphics debuggers, frame capture analysis, performance profiling, and systematic testing approaches.',
      },
      {
        id: 'ep19-h7',
        question: 'How should international relocation be planned for graphics engineering careers?',
        options: [
          'No planning needed',
          'Research company culture, prepare technically, understand visa processes, and plan integration',
          'Only focus on salary',
          'Only consider location',
        ],
        correctAnswerIndex: 1,
        explanation:
          'International relocation requires researching company culture, technical preparation, understanding visa processes, and planning for cultural integration.',
      },
    ],
  },
];

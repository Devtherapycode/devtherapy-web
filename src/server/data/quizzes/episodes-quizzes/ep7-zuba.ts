import { Quiz } from '../quizzes.types';

export const ep7ZubaQuizzes: Quiz[] = [
  // Episode 7: Easy Quiz (English - GPU Programming)
  {
    id: 'ep7-zura-basics',
    title: 'Zura Abelashvili - GPU Programming Basics',
    description: 'Basic questions about GPU programming and graphics engineering.',
    categories: ['graphics-engineering', 'career-development', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/zura-abelashvili',
    estimatedTime: 4,
    questions: [
      {
        id: 'ep7-e1',
        question: 'What does GPU stand for?',
        options: ['General Processing Unit', 'Graphics Processing Unit', 'Game Programming Unit', 'Global Processing Unit'],
        correctAnswerIndex: 1,
        explanation: 'GPU stands for Graphics Processing Unit, specialized for parallel processing and graphics computations.',
      },
      {
        id: 'ep7-e2',
        question: "What is Zura Abelashvili's main area of expertise?",
        options: ['Web Development', 'GPU Programming and Graphics Engineering', 'Mobile Development', 'Database Administration'],
        correctAnswerIndex: 1,
        explanation: 'Zura Abelashvili specializes in GPU programming and graphics engineering.',
      },
      {
        id: 'ep7-e3',
        question: 'What makes GPU programming different from regular CPU programming?',
        options: ['No difference', 'Massively parallel execution model', 'Only the programming language', 'Only the compiler'],
        correctAnswerIndex: 1,
        explanation: 'GPU programming is fundamentally different due to its massively parallel execution model designed for thousands of simultaneous threads.',
      },
      {
        id: 'ep7-e4',
        question: 'Which programming model is commonly used for GPU programming?',
        options: ['Sequential programming', 'SIMD (Single Instruction, Multiple Data)', 'Object-oriented only', 'Functional programming only'],
        correctAnswerIndex: 1,
        explanation: 'GPU programming commonly uses SIMD (Single Instruction, Multiple Data) model for parallel execution.',
      },
    ],
  },

  // Episode 7: Medium Quiz
  {
    id: 'ep7-zura-intermediate',
    title: 'GPU Programming Concepts and CUDA',
    description: 'Intermediate concepts in GPU programming and parallel computing.',
    categories: ['graphics-engineering', 'career-development', 'episode'],
    difficulty: 'medium',
    episodeLink: '/episodes/zura-abelashvili',
    estimatedTime: 6,
    questions: [
      {
        id: 'ep7-m1',
        question: 'What is CUDA and why is it important?',
        options: ['A graphics library', "NVIDIA's parallel computing platform for GPU programming", 'A CPU architecture', 'A programming language'],
        correctAnswerIndex: 1,
        explanation: "CUDA is NVIDIA's parallel computing platform and API that allows developers to use GPU for general-purpose processing.",
      },
      {
        id: 'ep7-m2',
        question: 'What are the main challenges in GPU programming?',
        options: [
          'Only memory limitations',
          'Memory management, thread synchronization, and architectural constraints',
          'Only performance optimization',
          'Only debugging difficulties',
        ],
        correctAnswerIndex: 1,
        explanation:
          'GPU programming involves complex challenges including memory management, thread synchronization, and understanding architectural constraints.',
      },
      {
        id: 'ep7-m3',
        question: 'How does memory hierarchy work in GPUs?',
        options: [
          'Same as CPU memory',
          'Complex hierarchy with global, shared, and local memory with different access patterns',
          'Only global memory exists',
          'No memory hierarchy',
        ],
        correctAnswerIndex: 1,
        explanation:
          'GPUs have a complex memory hierarchy including global, shared, constant, and local memory, each with different access patterns and latency.',
      },
      {
        id: 'ep7-m4',
        question: 'What is the difference between CPU and GPU architectures?',
        options: [
          'No significant difference',
          'CPUs optimize for sequential performance, GPUs for parallel throughput',
          'Only the number of cores',
          'Only the clock speed',
        ],
        correctAnswerIndex: 1,
        explanation:
          'CPUs are optimized for sequential performance with complex control logic, while GPUs are designed for parallel throughput with thousands of simpler cores.',
      },
      {
        id: 'ep7-m5',
        question: 'What role does occupancy play in GPU performance?',
        options: [
          'Not important',
          'Critical for achieving good performance by maximizing active threads',
          'Only affects memory usage',
          'Only affects power consumption',
        ],
        correctAnswerIndex: 1,
        explanation: 'Occupancy is critical in GPU programming as it measures how many threads can be active simultaneously, directly affecting performance.',
      },
    ],
  },

  // Episode 7: Hard Quiz
  {
    id: 'ep7-zura-expert',
    title: 'Advanced GPU Programming and Graphics Engineering',
    description: 'Expert-level GPU programming concepts and graphics pipeline optimization.',
    categories: ['graphics-engineering', 'career-development', 'episode'],
    difficulty: 'hard',
    episodeLink: '/episodes/zura-abelashvili',
    estimatedTime: 8,
    questions: [
      {
        id: 'ep7-h1',
        question: 'How do you optimize memory coalescing in GPU kernels?',
        options: [
          "Memory access patterns don't matter",
          'Ensure consecutive threads access consecutive memory locations',
          'Use only shared memory',
          'Avoid all memory access',
        ],
        correctAnswerIndex: 1,
        explanation: 'Memory coalescing is optimized when consecutive threads access consecutive memory locations, maximizing memory bandwidth utilization.',
      },
      {
        id: 'ep7-h2',
        question: 'What are the trade-offs between shared memory and global memory?',
        options: [
          'No trade-offs exist',
          'Shared memory is faster but limited in size, global memory is larger but slower',
          'They are identical',
          'Global memory is always better',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Shared memory provides much lower latency but is limited in size per block, while global memory has high latency but much larger capacity.',
      },
      {
        id: 'ep7-h3',
        question: 'How do you handle divergent branches in GPU code?',
        options: [
          'Divergent branches have no impact',
          'Minimize divergence or use predication techniques',
          'Always use divergent branches',
          'Ignore branch optimization',
        ],
        correctAnswerIndex: 1,
        explanation: 'Divergent branches can severely impact performance; they should be minimized or handled using predication techniques.',
      },
      {
        id: 'ep7-h4',
        question: 'What strategies help with GPU kernel debugging?',
        options: ['Debugging is impossible on GPU', 'Use printf, CUDA-GDB, and compute sanitizer tools', 'Only use CPU debugging', 'No debugging tools exist'],
        correctAnswerIndex: 1,
        explanation: 'GPU debugging uses specialized tools like printf in kernels, CUDA-GDB, compute sanitizer, and profiling tools like Nsight.',
      },
      {
        id: 'ep7-h5',
        question: 'How do you achieve optimal load balancing in GPU workloads?',
        options: [
          'Load balancing is automatic',
          'Careful thread block sizing and work distribution strategies',
          'Use single thread only',
          'Random work distribution',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Optimal load balancing requires careful consideration of thread block sizing, work distribution strategies, and avoiding divergent execution paths.',
      },
      {
        id: 'ep7-h6',
        question: 'What are the key considerations for multi-GPU programming?',
        options: [
          'Multi-GPU is automatic',
          'Memory management, synchronization, and data distribution across GPUs',
          'No special considerations',
          'Use single GPU only',
        ],
        correctAnswerIndex: 1,
        explanation: 'Multi-GPU programming requires careful memory management, synchronization between devices, and efficient data distribution strategies.',
      },
      {
        id: 'ep7-h7',
        question: 'How do you optimize texture memory usage for graphics applications?',
        options: [
          'Texture memory optimization is not needed',
          'Use appropriate filtering, compression, and cache-friendly access patterns',
          'Avoid texture memory completely',
          'Texture memory is always fast',
        ],
        correctAnswerIndex: 1,
        explanation: 'Texture memory optimization involves appropriate filtering modes, compression techniques, and cache-friendly spatial access patterns.',
      },
    ],
  },
];

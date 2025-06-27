
export type QuizDifficulty = 'easy' | 'medium' | 'hard';

export type QuizCategory = 'episode' | 'frontend' | 'backend' | 'ai' | 'general' | 'gpu';

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
};

export type Quiz = {
  id: string;
  title: string;
  description: string;
  category: QuizCategory;
  difficulty: QuizDifficulty;
  episodeLink?: string;
  estimatedTime: number; // in minutes
  questions: QuizQuestion[];
};

export type QuizResult = {
  quizId: string;
  score: number;
  totalQuestions: number;
  completedAt: Date;
  timeSpent: number; // in seconds
};

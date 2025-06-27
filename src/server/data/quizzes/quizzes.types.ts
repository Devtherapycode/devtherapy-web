import { EpisodeSlugType } from '../episodes/episodes.types';

export type QuizDifficulty = 'easy' | 'medium' | 'hard';

export type QuizCategory =
  | 'episode'
  | 'frontend'
  | 'backend'
  | 'ai'
  | 'general'
  | 'gpu'
  | 'graphics-engineering'
  | 'game-development'
  | 'system-administration'
  | 'security'
  | 'data-visualization'
  | 'career-development'
  | 'leadership'
  | 'freelancing'
  | 'web-development'
  | 'mobile-development'
  | 'software-architecture'
  | 'software-engineering'
  | 'open-source';

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
  categories: QuizCategory[];
  difficulty: QuizDifficulty;
  episodeLink?: `/episodes/${EpisodeSlugType}`;
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

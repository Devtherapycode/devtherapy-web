import { QuizCategory } from './quizzes.types';

export const quizCategories: Array<{ key: QuizCategory | 'all'; label: string; emoji: string }> = [
  { key: 'all', label: 'All', emoji: '🎯' },
  { key: 'episode', label: 'Episodes', emoji: '🎧' },
  { key: 'frontend', label: 'Frontend', emoji: '🌐' },
  { key: 'backend', label: 'Backend', emoji: '⚙️' },
  { key: 'ai', label: 'AI', emoji: '🤖' },
  { key: 'gpu', label: 'GPU', emoji: '🎮' },
  { key: 'general', label: 'General', emoji: '💻' },
  { key: 'graphics-engineering', label: 'Graphics Engineering', emoji: '🎨' },
  { key: 'game-development', label: 'Game Development', emoji: '🎮' },
  { key: 'system-administration', label: 'System Administration', emoji: '💻' },
  { key: 'security', label: 'Security', emoji: '🔒' },
  { key: 'data-visualization', label: 'Data Visualization', emoji: '📊' },
  { key: 'career-development', label: 'Career Development', emoji: '💼' },
  { key: 'leadership', label: 'Leadership', emoji: '👑' },
  { key: 'freelancing', label: 'Freelancing', emoji: '💼' },
  { key: 'web-development', label: 'Web Development', emoji: '🌐' },
  { key: 'mobile-development', label: 'Mobile Development', emoji: '📱' },
];

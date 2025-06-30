import { Quiz } from '@/server/data/quizzes/quizzes.types';
import { forwardRef } from 'react';
import { formatTime, getScoreBadge } from './quiz.utils';

type QuizResultCardProps = {
  quiz: Quiz;
  score: number;
  totalQuestions: number;
  timeSpent: number;
};

export const QuizResultCard = forwardRef<HTMLDivElement, QuizResultCardProps>(({ quiz, score, totalQuestions, timeSpent }, ref) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div
      ref={ref}
      className="relative h-[420px] w-[600px] overflow-hidden rounded-lg border-2 border-brand-mint/30 bg-gradient-to-br from-gray-900 to-gray-800 p-4 pt-8"
      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="break-all font-mono text-xs leading-3 text-brand-mint">{Array.from({ length: 400 }, (_, i) => '01010110 ').join('')}</div>
      </div>

      {/* Header */}
      <div className="relative z-10 mb-4 text-center">
        <div className="mb-2 text-lg font-semibold text-brand-mint">🎧 You completed a Devtherapy Quiz!</div>
        <div className="mb-2 text-2xl font-bold text-white">{quiz.title}</div>
        {quiz.episodeLink && <div className="text-sm text-gray-400">Based on Episode #{quiz.episodeLink.split('/').pop()}</div>}
      </div>

      {/* Score Section */}
      <div className="relative z-10 mb-4 text-center">
        <div className="mb-2 text-4xl font-bold text-brand-mint">
          {score}/{totalQuestions}
        </div>
        <div className="mb-2 text-xl text-white">{percentage}% Correct</div>
        <div className="mx-auto px-4 py-2 text-lg font-bold text-brand-mint">{getScoreBadge(percentage)}</div>
      </div>

      {/* Stats */}
      <div className="relative z-10 mb-4 flex justify-center gap-8">
        <div className="text-center">
          <div className="text-sm text-gray-400">Time</div>
          <div className="text-lg text-white">{formatTime(timeSpent)}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-400">Difficulty</div>
          <div className="text-lg capitalize text-white">{quiz.difficulty}</div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center">
        <div className="mb-1 text-sm text-gray-400">Take more quizzes at</div>
        <div className="text-lg font-semibold text-brand-mint">devtherapy.ge/quizzes</div>
      </div>

      {/* Logo/Branding */}
      <div className="absolute right-4 top-4 text-sm font-bold text-brand-mint">DEVTHERAPY</div>
    </div>
  );
});

QuizResultCard.displayName = 'QuizResultCard';

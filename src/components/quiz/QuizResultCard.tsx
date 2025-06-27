
import { Quiz } from '@/server/data/quizzes/quizzes.types';
import { forwardRef } from 'react';

type QuizResultCardProps = {
  quiz: Quiz;
  score: number;
  totalQuestions: number;
  timeSpent: number;
};

export const QuizResultCard = forwardRef<HTMLDivElement, QuizResultCardProps>(
  ({ quiz, score, totalQuestions, timeSpent }, ref) => {
    const percentage = Math.round((score / totalQuestions) * 100);
    
    const getScoreBadge = () => {
      if (percentage === 100) return "🧠 Dev Genius";
      if (percentage >= 80) return "🌟 Code Master";
      if (percentage >= 60) return "⚡ Solid Debugger";
      if (percentage >= 40) return "📚 Keep Learning";
      return "💪 Keep Compiling";
    };

    const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
    };

    return (
      <div 
        ref={ref}
        className="w-[600px] h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-brand-mint/30 rounded-lg p-8 relative overflow-hidden"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-brand-mint text-xs font-mono leading-3 break-all">
            {Array.from({ length: 50 }, (_, i) => '01010110 ').join('')}
          </div>
        </div>

        {/* Header */}
        <div className="relative z-10 text-center mb-6">
          <div className="text-brand-mint text-lg font-semibold mb-2">
            🎧 You completed a Devtherapy Quiz!
          </div>
          <div className="text-white text-2xl font-bold mb-2">
            {quiz.title}
          </div>
          {quiz.episodeLink && (
            <div className="text-gray-400 text-sm">
              Based on Episode #{quiz.episodeLink.split('/').pop()}
            </div>
          )}
        </div>

        {/* Score Section */}
        <div className="relative z-10 text-center mb-6">
          <div className="text-brand-mint text-6xl font-bold mb-2">
            {score}/{totalQuestions}
          </div>
          <div className="text-white text-xl mb-2">
            {percentage}% Correct
          </div>
          <div className="text-brand-mint text-lg font-semibold bg-brand-mint/10 rounded-full px-4 py-2 inline-block">
            {getScoreBadge()}
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 flex justify-center gap-8 mb-6">
          <div className="text-center">
            <div className="text-gray-400 text-sm">Time</div>
            <div className="text-white text-lg">{formatTime(timeSpent)}</div>
          </div>
          <div className="text-center">
            <div className="text-gray-400 text-sm">Difficulty</div>
            <div className="text-white text-lg capitalize">{quiz.difficulty}</div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-center">
          <div className="text-gray-400 text-sm mb-2">
            Take more quizzes at
          </div>
          <div className="text-brand-mint text-lg font-semibold">
            devtherapy.io/quizzes
          </div>
        </div>

        {/* Logo/Branding */}
        <div className="absolute top-4 right-4 text-brand-mint text-sm font-bold">
          DEVTHERAPY
        </div>
      </div>
    );
  }
);

QuizResultCard.displayName = 'QuizResultCard';

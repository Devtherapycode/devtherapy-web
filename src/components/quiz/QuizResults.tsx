import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Quiz } from '@/server/data/quizzes/quizzes.types';
import html2canvas from 'html2canvas';
import { Clock, Download, Headphones, RotateCcw, Trophy } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { QuizResultCard } from './QuizResultCard';

type QuizResultsProps = {
  quiz: Quiz;
  score: number;
  totalQuestions: number;
  timeSpent: number;
  onRetry: () => void;
  onClose: () => void;
};

export const QuizResults = ({ quiz, score, totalQuestions, timeSpent, onRetry, onClose }: QuizResultsProps) => {
  const [isExporting, setIsExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const percentage = Math.round((score / totalQuestions) * 100);

  const getScoreMessage = () => {
    if (percentage === 100) return 'Perfect! 🎉';
    if (percentage >= 80) return 'Excellent! 🌟';
    if (percentage >= 60) return 'Good job! 👍';
    if (percentage >= 40) return 'Not bad! 📚';
    return 'Keep learning! 💪';
  };

  const getScoreColor = () => {
    if (percentage >= 80) return 'text-green-400';
    if (percentage >= 60) return 'text-brand-mint';
    if (percentage >= 40) return 'text-yellow-500';
    return 'text-orange-500';
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
  };

  const exportAsImage = async () => {
    if (!cardRef.current) return;

    setIsExporting(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#111827',
        scale: 2,
        logging: false,
      });

      // Create download link
      const link = document.createElement('a');
      link.download = `devtherapy-quiz-${quiz.id}-result.png`;
      link.href = canvas.toDataURL();
      link.click();

      toast.success('Quiz result saved as image! 📸');
    } catch (error) {
      console.error('Error exporting image:', error);
      toast.error('Failed to export image. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm">
        <Card className="w-full max-w-md border-brand-mint/20 bg-card">
          <CardHeader className="border-b border-brand-mint/20 text-center">
            <div className="mx-auto mb-4 w-fit rounded-full bg-brand-mint/10 p-4">
              <Trophy className="h-8 w-8 text-brand-mint" />
            </div>
            <CardTitle className="text-2xl text-brand-mint">Quiz Complete!</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 p-8 text-center">
            <div>
              <div className={`mb-2 text-4xl font-bold ${getScoreColor()}`}>
                {score}/{totalQuestions}
              </div>
              <div className={`mb-1 text-2xl font-semibold ${getScoreColor()}`}>{percentage}%</div>
              <p className="text-lg text-muted-foreground">{getScoreMessage()}</p>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {formatTime(timeSpent)}
              </div>
              <div className="flex items-center gap-1">
                <Trophy className="h-4 w-4" />
                {quiz.title}
              </div>
            </div>

            {quiz.episodeLink && (
              <div className="rounded-lg border border-brand-mint/20 bg-brand-mint/10 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Headphones className="h-4 w-4 text-brand-mint" />
                  <span className="text-sm font-semibold text-brand-mint">📢 Recommended Episode</span>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  Take your learning further with this full conversation about the topics covered in this quiz.
                </p>
                <Link to={quiz.episodeLink} target="_black">
                  <Button variant="outline" size="sm" className="w-full border-brand-mint/40 hover:bg-brand-mint/10">
                    <Headphones className="mr-2 h-4 w-4" />
                    🎧 Listen Now
                  </Button>
                </Link>
              </div>
            )}

            <div className="flex gap-3">
              <Button variant="outline" onClick={onRetry} className="flex-1 border-brand-mint/40 hover:bg-brand-mint/10">
                <RotateCcw className="mr-2 h-4 w-4" />
                Retry
              </Button>

              <Button
                onClick={exportAsImage}
                disabled={isExporting}
                className="flex-1 bg-gradient-to-r from-brand-mint to-green-400 text-black hover:from-brand-mint-dark hover:to-green-500"
              >
                <Download className="mr-2 h-4 w-4" />
                {isExporting ? 'Generating...' : '📸 Share Results'}
              </Button>
            </div>

            <Button variant="ghost" onClick={onClose} className="w-full text-muted-foreground hover:text-foreground">
              Back to Quizzes
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Hidden result card for image export */}
      <div className="pointer-events-none fixed -left-[9999px] -top-[9999px]">
        <QuizResultCard ref={cardRef} quiz={quiz} score={score} totalQuestions={totalQuestions} timeSpent={timeSpent} />
      </div>
    </>
  );
};

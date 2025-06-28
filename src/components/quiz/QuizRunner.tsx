import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Quiz, QuizQuestion } from '@/server/data/quizzes/quizzes.types';
import { CheckCircle, Trophy, XCircle } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type QuizRunnerProps = {
  quiz: Quiz;
  onComplete: (score: number, timeSpent: number) => void;
  onClose: () => void;
};

type ShuffledQuestion = QuizQuestion & {
  shuffledOptions: string[];
  shuffledCorrectAnswerIndex: number;
};

// Function to shuffle array and return new correct answer index
const shuffleOptions = (options: string[], correctAnswerIndex: number): { shuffledOptions: string[]; shuffledCorrectAnswerIndex: number } => {
  const optionsWithIndex = options.map((option, index) => ({ option, index }));

  // Fisher-Yates shuffle
  for (let i = optionsWithIndex.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsWithIndex[i], optionsWithIndex[j]] = [optionsWithIndex[j], optionsWithIndex[i]];
  }

  const shuffledOptions = optionsWithIndex.map((item) => item.option);
  const shuffledCorrectAnswerIndex = optionsWithIndex.findIndex((item) => item.index === correctAnswerIndex);

  return { shuffledOptions, shuffledCorrectAnswerIndex };
};

export const QuizRunner = ({ quiz, onComplete, onClose }: QuizRunnerProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [startTime] = useState(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  // Shuffle all questions' options once when component mounts
  const shuffledQuestions = useMemo<ShuffledQuestion[]>(() => {
    return quiz.questions.map((question) => {
      const { shuffledOptions, shuffledCorrectAnswerIndex } = shuffleOptions(question.options, question.correctAnswerIndex);
      return {
        ...question,
        shuffledOptions,
        shuffledCorrectAnswerIndex,
      };
    });
  }, [quiz.questions]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === shuffledQuestions.length - 1;
  const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;

  useEffect(() => {
    setQuestionStartTime(Date.now());
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.shuffledCorrectAnswerIndex;
    if (isCorrect) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (isLastQuestion) {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        onComplete(score + (isCorrect ? 1 : 0), timeSpent);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      }
    }, 2000);
  };

  const isCorrect = selectedAnswer === currentQuestion.shuffledCorrectAnswerIndex;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm">
      <Card className="w-full max-w-2xl border-brand-mint/20 bg-card">
        <CardHeader className="border-b border-brand-mint/20">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-brand-mint">{quiz.title}</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
              </p>
            </div>
            <Button variant="ghost" onClick={onClose} className="text-muted-foreground hover:text-foreground">
              ✕
            </Button>
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>

        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="mb-4 text-xl font-semibold text-foreground">{currentQuestion.question}</h3>
            </div>

            <div className="grid gap-3">
              {currentQuestion.shuffledOptions.map((option, index) => {
                let buttonClass = 'w-full p-4 text-left border-2 transition-all ';

                if (showResult) {
                  if (index === currentQuestion.shuffledCorrectAnswerIndex) {
                    buttonClass += 'border-green-500 bg-green-500/10 text-green-400';
                  } else if (index === selectedAnswer && selectedAnswer !== currentQuestion.shuffledCorrectAnswerIndex) {
                    buttonClass += 'border-red-500 bg-red-500/10 text-red-400';
                  } else {
                    buttonClass += 'border-muted bg-muted/20 text-muted-foreground';
                  }
                } else {
                  if (selectedAnswer === index) {
                    buttonClass += 'border-brand-mint bg-brand-mint/10 text-brand-mint';
                  } else {
                    buttonClass += 'border-muted hover:border-brand-mint/50 hover:bg-brand-mint/5';
                  }
                }

                return (
                  <button key={index} onClick={() => !showResult && handleAnswerSelect(index)} className={buttonClass} disabled={showResult}>
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showResult && index === currentQuestion.shuffledCorrectAnswerIndex && <CheckCircle className="h-5 w-5 text-green-400" />}
                      {showResult && index === selectedAnswer && selectedAnswer !== currentQuestion.shuffledCorrectAnswerIndex && (
                        <XCircle className="h-5 w-5 text-red-400" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {showResult && currentQuestion.explanation && (
              <div className="mt-6 rounded-lg border border-brand-mint/20 bg-brand-mint/10 p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-brand-mint">Explanation:</strong> {currentQuestion.explanation}
                </p>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Trophy className="h-4 w-4" />
                Score: {score}/{shuffledQuestions.length}
              </div>

              {!showResult && (
                <Button onClick={handleNextQuestion} disabled={selectedAnswer === null} className="bg-brand-mint text-black hover:bg-brand-mint-dark">
                  {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

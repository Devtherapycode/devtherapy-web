
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Quiz, QuizQuestion } from '@/server/data/quizzes/quizzes.types';
import { CheckCircle, Clock, Trophy, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

type QuizRunnerProps = {
  quiz: Quiz;
  onComplete: (score: number, timeSpent: number) => void;
  onClose: () => void;
};

export const QuizRunner = ({ quiz, onComplete, onClose }: QuizRunnerProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [startTime] = useState(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  useEffect(() => {
    setQuestionStartTime(Date.now());
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswerIndex;
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

  const isCorrect = selectedAnswer === currentQuestion.correctAnswerIndex;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-card border-brand-mint/20">
        <CardHeader className="border-b border-brand-mint/20">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-brand-mint">{quiz.title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Question {currentQuestionIndex + 1} of {quiz.questions.length}
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
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {currentQuestion.question}
              </h3>
            </div>

            <div className="grid gap-3">
              {currentQuestion.options.map((option, index) => {
                let buttonClass = "w-full p-4 text-left border-2 transition-all ";
                
                if (showResult) {
                  if (index === currentQuestion.correctAnswerIndex) {
                    buttonClass += "border-green-500 bg-green-500/10 text-green-400";
                  } else if (index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswerIndex) {
                    buttonClass += "border-red-500 bg-red-500/10 text-red-400";
                  } else {
                    buttonClass += "border-muted bg-muted/20 text-muted-foreground";
                  }
                } else {
                  if (selectedAnswer === index) {
                    buttonClass += "border-brand-mint bg-brand-mint/10 text-brand-mint";
                  } else {
                    buttonClass += "border-muted hover:border-brand-mint/50 hover:bg-brand-mint/5";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => !showResult && handleAnswerSelect(index)}
                    className={buttonClass}
                    disabled={showResult}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showResult && index === currentQuestion.correctAnswerIndex && (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      )}
                      {showResult && index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswerIndex && (
                        <XCircle className="h-5 w-5 text-red-400" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {showResult && currentQuestion.explanation && (
              <div className="mt-6 p-4 bg-brand-mint/10 border border-brand-mint/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-brand-mint">Explanation:</strong> {currentQuestion.explanation}
                </p>
              </div>
            )}

            <div className="flex justify-between items-center mt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Trophy className="h-4 w-4" />
                Score: {score}/{quiz.questions.length}
              </div>
              
              {!showResult && (
                <Button 
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                  className="bg-brand-mint text-black hover:bg-brand-mint-dark"
                >
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

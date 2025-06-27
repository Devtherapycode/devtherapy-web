import { BackToHomeHeader } from '@/components/back-to-home-header';
import MatrixBackground from '@/components/MatrixBackground';
import { QuizResults } from '@/components/quiz/QuizResults';
import { QuizRunner } from '@/components/quiz/QuizRunner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { quizCategories } from '@/server/data/quizzes/quiz-categories';
import { allQuizzes } from '@/server/data/quizzes/quizzes.data';
import { Quiz, QuizCategory } from '@/server/data/quizzes/quizzes.types';
import { Brain, Clock, Play, Trophy } from 'lucide-react';
import { useState } from 'react';

const Quizzes = () => {
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory | 'all'>('all');
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizTimeSpent, setQuizTimeSpent] = useState(0);

  const filteredQuizzes = selectedCategory === 'all' ? allQuizzes : allQuizzes.filter((quiz) => quiz.categories.includes(selectedCategory));

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'hard':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const startQuiz = (quiz: Quiz) => {
    setCurrentQuiz(quiz);
    setShowResults(false);
  };

  const handleQuizComplete = (score: number, timeSpent: number) => {
    setQuizScore(score);
    setQuizTimeSpent(timeSpent);
    setShowResults(true);
  };

  const handleRetryQuiz = () => {
    setShowResults(false);
    // Quiz runner will reset itself
  };

  const closeQuiz = () => {
    setCurrentQuiz(null);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground fullScreen />

      <div className="relative z-10">
        <BackToHomeHeader title="Dev Quizzes" />

        {/* Hero Section */}
        <section className="px-4 py-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-brand-mint/10 p-4">
              <Brain className="h-12 w-12 text-brand-mint" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-brand-mint md:text-5xl">Dev Quizzes 🧠</h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Test your dev skills, episode knowledge, or just have fun. Challenge yourself with quizzes covering everything from frontend to AI.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-4 pb-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {quizCategories.map((category) => (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.key)}
                  className={
                    selectedCategory === category.key ? 'bg-brand-mint text-black hover:bg-brand-mint-dark' : 'border-brand-mint/40 hover:bg-brand-mint/10'
                  }
                >
                  <span className="mr-2">{category.emoji}</span>
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Quiz Cards */}
        <section className="px-4 pb-16">
          <div className="mx-auto max-w-6xl">
            {filteredQuizzes.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredQuizzes.map((quiz) => (
                  <Card
                    key={quiz.id}
                    className="hover-lift flex flex-col justify-between border-brand-mint/20 bg-card/50 transition-all hover:border-brand-mint/40"
                  >
                    <CardHeader>
                      <div className="mb-2 flex items-start justify-between">
                        <Badge className={getDifficultyColor(quiz.difficulty)} variant="outline">
                          {quiz.difficulty}
                        </Badge>
                        <Badge variant="outline" className="border-brand-mint/40 text-brand-mint">
                          {quiz.categories.slice(1)}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-foreground">{quiz.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{quiz.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Trophy className="h-4 w-4" />
                          {quiz.questions.length} questions
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />~{quiz.estimatedTime} min
                        </div>
                      </div>

                      <Button onClick={() => startQuiz(quiz)} className="w-full bg-brand-mint text-black hover:bg-brand-mint-dark">
                        <Play className="mr-2 h-4 w-4" />
                        Take Quiz
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <div className="mb-4 text-6xl">🔍</div>
                <h3 className="mb-2 text-xl font-semibold">No quizzes found</h3>
                <p className="mb-4 text-muted-foreground">Try selecting a different category or check back later for new quizzes.</p>
                <Button onClick={() => setSelectedCategory('all')} className="bg-brand-mint text-black hover:bg-brand-mint-dark">
                  Show All Quizzes
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Quiz Runner Modal */}
      {currentQuiz && !showResults && <QuizRunner quiz={currentQuiz} onComplete={handleQuizComplete} onClose={closeQuiz} />}

      {/* Quiz Results Modal */}
      {currentQuiz && showResults && (
        <QuizResults
          quiz={currentQuiz}
          score={quizScore}
          totalQuestions={currentQuiz.questions.length}
          timeSpent={quizTimeSpent}
          onRetry={handleRetryQuiz}
          onClose={closeQuiz}
        />
      )}
    </div>
  );
};

export default Quizzes;

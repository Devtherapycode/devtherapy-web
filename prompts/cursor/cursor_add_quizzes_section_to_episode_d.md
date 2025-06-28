# Add quizzes section to episode details
_Exported on 6/28/2025 at 22:56:54 GMT+4 from Cursor (1.1.6)_

---

**User**

I have seperate page and components for quizzes, now i want to have quizzes section added into episodeDetails

---

**Cursor**

I'll help you add a quizzes section to the episode detail page. Let me first check how episodes and quizzes are currently connected, then implement the section.

Now I'll add a quizzes section to the episode detail page. I can see that episodes already have a `quizzes` property that contains the related quizzes, so I just need to display them and integrate the existing quiz components.

```typescriptreact
import MatrixBackground from '@/components/MatrixBackground';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QuizResults } from '@/components/quiz/QuizResults';
import { QuizRunner } from '@/components/quiz/QuizRunner';
import { cn } from '@/lib/utils';
import { episodes } from '@/server/data/episodes/episodes.data';
import { Quiz } from '@/server/data/quizzes/quizzes.types';
import { YOUTUBE_URL } from '@/utils/const';
import { ArrowLeft, Brain, Calendar, Clock, Play, Share2, Trophy } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// ... existing code ...

const EpisodeDetail = () => {
  const { episodeSlug } = useParams();
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizTimeSpent, setQuizTimeSpent] = useState(0);

  const episode = episodes[episodeSlug as keyof typeof episodes];

  // ... existing helper functions ...

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
  };

  const closeQuiz = () => {
    setCurrentQuiz(null);
    setShowResults(false);
  };

  // ... existing code ...

          {/* Episode Description */}
          <Card className="mb-8 border-brand-mint/20 bg-card/50">
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold text-brand-mint">About This Episode</h2>
              <div className="prose prose-invert max-w-none">
                <div className="prose prose-invert max-w-none text-xl text-muted-foreground">{renderDescription(episode.fullDescription)}</div>
              </div>
            </CardContent>
          </Card>

          {/* Episode Quizzes */}
          {episode.quizzes && episode.quizzes.length > 0 && (
            <Card className="mb-8 border-brand-mint/20 bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-brand-mint/10 p-3">
                    <Brain className="h-6 w-6 text-brand-mint" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-brand-mint">Test Your Knowledge 🧠</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Take quizzes based on this episode to test what you've learned
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {episode.quizzes.map((quiz) => (
                    <Card
                      key={quiz.id}
                      className="hover-lift flex flex-col justify-between border-brand-mint/20 bg-background/50 transition-all hover:border-brand-mint/40"
                    >
                      <CardHeader className="pb-3">
                        <div className="mb-2 flex items-center justify-between">
                          <Badge className={cn(getDifficultyColor(quiz.difficulty), 'text-nowrap')} variant="outline">
                            {quiz.difficulty}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            ~{quiz.estimatedTime}min
                          </div>
                        </div>
                        <CardTitle className="text-lg text-foreground">{quiz.title}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">{quiz.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Trophy className="h-3 w-3" />
                            {quiz.questions.length} questions
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {quiz.categories.slice(0, 2).map((category) => (
                              <span key={category} className="rounded-md bg-brand-mint/10 px-2 py-1 text-xs text-brand-mint">
                                {category}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Button
                          onClick={() => startQuiz(quiz)}
                          size="sm"
                          className="w-full bg-brand-mint text-black hover:bg-brand-mint-dark"
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Take Quiz
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Call to Action */}

// ... existing code ...

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

export default EpisodeDetail;
```

Perfect! I've successfully added a quizzes section to the episode detail page. Here's what I implemented:

## ✅ Added Quizzes Section to Episode Detail Page

### **Key Features:**

1. **Quiz Display Section** - Added a "Test Your Knowledge 🧠" section that:
   - Only appears if the episode has related quizzes
   - Shows quizzes in a responsive grid (1 column on mobile, 2 on desktop)
   - Displays difficulty badges with color coding (green/yellow/red)
   - Shows estimated time, number of questions, and categories

2. **Full Quiz Integration** - Reused existing quiz components:
   - `QuizRunner` - For taking the quiz
   - `QuizResults` - For showing results and sharing
   - `QuizResultCard` - For generating shareable result images

3. **State Management** - Added proper state handling for:
   - Current active quiz
   - Quiz completion scores
   - Time tracking
   - Results display

4. **Design Consistency** - Matches the existing episode detail page design:
   - Uses the same card styling and color scheme
   - Follows the brand-mint color theme
   - Responsive layout that works on all devices

### **User Experience:**

- Users can now take quizzes directly from episode pages
- Seamless integration with existing quiz functionality
- Results can be shared as images
- Users can retry quizzes or return to the episode
- The section appears contextually only when quizzes exist for that episode

The implementation leverages the existing relationship between episodes and quizzes (through the `episode.quizzes` property) and provides a smooth, integrated experience for users to test their knowledge right after watching/listening to an episode.


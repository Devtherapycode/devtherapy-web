
import MatrixBackground from '@/components/MatrixBackground';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnalyticsStore } from '@/stores/analyticsStore';
import { ArrowLeft, Calendar, Clock, Headphones, Share2, Star, Trophy, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const DevWrapped = () => {
  const { getWrappedStats } = useAnalyticsStore();
  const [stats, setStats] = useState(getWrappedStats());
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setStats(getWrappedStats());
    setIsVisible(true);
  }, [getWrappedStats]);

  const handleShare = () => {
    const shareText = `My Dev Wrapped 🎧\n\n📊 ${stats.episodesCompleted} episodes completed\n⏰ ${stats.totalPlayEvents} play sessions\n🎯 Top achievement: ${stats.achievements[0] || 'Getting started!'}\n\nCheck out @devtherapy_io for more! 🚀`;

    navigator.clipboard.writeText(shareText).then(() => {
      toast.success('Dev Wrapped stats copied to clipboard!');
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground fullScreen />

      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-border/40 bg-background/80 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 transition-colors hover:text-brand-mint">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-semibold">Back to Home</span>
              </Link>
              <Button onClick={handleShare} variant="outline" size="sm" className="border-brand-mint/40 hover:bg-brand-mint/10">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8">
          {/* Hero Section */}
          <div className={`mb-12 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="mb-4 text-6xl">🎧</div>
            <h1 className="glow-text mb-4 text-4xl font-bold text-brand-mint md:text-6xl">Dev Wrapped {currentYear}</h1>
            <p className="text-xl text-muted-foreground">You debugged. You listened. You thrived.</p>
          </div>

          {stats.episodesCompleted === 0 ? (
            // No data state
            <div className="py-16 text-center">
              <div className="mb-6 text-8xl">🌱</div>
              <h2 className="mb-4 text-2xl font-bold">Your Dev Journey Starts Here</h2>
              <p className="mx-auto mb-8 max-w-md text-muted-foreground">
                No listening data yet, but that's about to change! Start your Devtherapy journey and come back next year for your personalized wrapped.
              </p>
              <Button onClick={() => navigate('/episodes')} className="bg-brand-mint text-black hover:bg-brand-mint-dark">
                <Headphones className="mr-2 h-4 w-4" />
                Start Listening
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Top Stats Grid */}
              <div
                className={`grid grid-cols-1 gap-6 transition-all delay-300 duration-1000 md:grid-cols-2 lg:grid-cols-4 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <Card className="border-brand-mint/20 bg-card/50 transition-colors hover:bg-card/70">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Headphones className="h-4 w-4" />
                      Episodes Completed
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-brand-mint">{stats.episodesCompleted}</div>
                  </CardContent>
                </Card>

                <Card className="border-brand-mint/20 bg-card/50 transition-colors hover:bg-card/70">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      Play Sessions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-brand-mint">{stats.totalPlayEvents}</div>
                  </CardContent>
                </Card>

                <Card className="border-brand-mint/20 bg-card/50 transition-colors hover:bg-card/70">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <User className="h-4 w-4" />
                      Top Guest
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="truncate text-lg font-bold text-brand-mint">{stats.mostListenedGuest || 'Various'}</div>
                  </CardContent>
                </Card>

                <Card className="border-brand-mint/20 bg-card/50 transition-colors hover:bg-card/70">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      Active Days
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-brand-mint">{stats.streakDays || 'Fresh'}</div>
                  </CardContent>
                </Card>
              </div>

              {/* Favorite Episode */}
              {stats.favoriteEpisode && (
                <Card
                  className={`border-brand-mint/20 bg-card/50 transition-all delay-500 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-brand-mint" />
                      Your Favorite Episode
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-semibold">{stats.favoriteEpisode.title}</h3>
                        <p className="mb-4 text-muted-foreground">{stats.favoriteEpisode.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {stats.favoriteEpisode.tags?.slice(0, 3).map((tag: string) => (
                            <Badge key={tag} variant="outline" className="border-brand-mint/40">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button onClick={() => navigate(`/episodes/${stats.favoriteEpisode.slug}`)} className="bg-brand-mint text-black hover:bg-brand-mint-dark">
                        Replay Episode
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Top Topics */}
              {stats.topTags.length > 0 && (
                <Card
                  className={`border-brand-mint/20 bg-card/50 transition-all delay-700 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                  <CardHeader>
                    <CardTitle>Your Top Topics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {stats.topTags.map((tag, index) => (
                        <Badge
                          key={tag}
                          className={`text-sm ${
                            index === 0 ? 'bg-brand-mint text-black' : index === 1 ? 'bg-brand-mint/70 text-black' : 'bg-brand-mint/40 text-white'
                          }`}
                        >
                          #{index + 1} {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Achievements */}
              <Card
                className={`delay-900 border-brand-mint/20 bg-card/50 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-brand-mint" />
                    Your Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {stats.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3 rounded-lg border border-brand-mint/20 bg-brand-mint/5 p-3">
                        <div className="text-2xl">🏆</div>
                        <span className="font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Next Year Goals */}
              <Card
                className={`delay-1100 border-brand-mint/20 bg-card/50 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <CardHeader>
                  <CardTitle>Start Your {currentYear + 1} Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">Ready to level up your dev game? Discover more episodes and continue your learning journey.</p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button onClick={() => navigate('/episodes')} className="bg-brand-mint text-black hover:bg-brand-mint-dark">
                      <Headphones className="mr-2 h-4 w-4" />
                      Browse Episodes
                    </Button>
                    <Button onClick={() => navigate('/guests')} variant="outline" className="border-brand-mint/40 hover:bg-brand-mint/10">
                      <User className="mr-2 h-4 w-4" />
                      Meet Our Guests
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DevWrapped;

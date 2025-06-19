import MatrixBackground from '@/components/MatrixBackground';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, Play, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const EpisodeDetail = () => {
  const { episodeSlug } = useParams();

  // Mock episode data - in a real app this would come from an API
  const episodes = {
    'debugging-mindset-frustration-to-flow': {
      id: 1,
      title: 'The Debugging Mindset: From Frustration to Flow',
      description:
        'Exploring the psychological aspects of debugging and how to maintain composure when everything breaks. We dive deep into strategies for staying calm under pressure, turning debugging sessions from stressful experiences into learning opportunities.',
      date: '2024-01-15',
      duration: '42 min',
      tags: ['mental health', 'debugging', 'productivity'],
      youtubeId: 'ptPHTbQk_sA', // Using the same video ID as example
      fullDescription: `In this episode, we explore the often overlooked psychological aspects of debugging. Every developer knows the frustration of staring at code that should work but doesn't, the mounting pressure as deadlines approach, and the mental fatigue that comes with complex problem-solving.

We discuss practical strategies for maintaining composure during debugging sessions, including:
- Building a systematic approach to problem-solving
- Managing stress and avoiding tunnel vision
- The importance of taking breaks and stepping away from the code
- How to turn debugging into a learning opportunity rather than a source of frustration

Whether you're a junior developer facing your first major bug or a senior engineer dealing with legacy systems, this episode offers insights into developing a healthier relationship with the debugging process.`,
    },
    'imposter-syndrome-tech-not-alone': {
      id: 2,
      title: "Imposter Syndrome in Tech: You're Not Alone",
      description:
        'A deep dive into imposter syndrome, its prevalence in tech, and practical strategies for overcoming it. Guest interviews with senior developers who share their experiences.',
      date: '2024-01-08',
      duration: '38 min',
      tags: ['mental health', 'career', 'personal growth'],
      youtubeId: 'ptPHTbQk_sA',
      fullDescription: `Imposter syndrome affects developers at all levels, from bootcamp graduates to seasoned engineers at top tech companies. In this episode, we tackle this pervasive issue head-on with honest conversations and practical advice.

Topics covered include:
- Understanding what imposter syndrome really is and why it's so common in tech
- The unique factors in tech culture that can amplify these feelings
- Personal stories from developers who've struggled with and overcome imposter syndrome
- Practical strategies for building confidence and recognizing your own achievements
- How companies and teams can create environments that reduce imposter syndrome

Remember: if you're feeling like you don't belong in tech, you're not alone, and those feelings don't reflect your actual capabilities.`,
    },
  };

  const episode = episodes[episodeSlug as keyof typeof episodes];

  if (!episode) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <MatrixBackground fullScreen />
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-brand-mint">Episode Not Found</h1>
          <p className="mb-6 text-muted-foreground">The episode you're looking for doesn't exist.</p>
          <Link to="/episodes">
            <Button className="bg-brand-mint text-black hover:bg-brand-mint-dark">Back to Episodes</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground fullScreen />

      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-border/40 bg-background/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/episodes" className="flex items-center gap-2 transition-colors hover:text-brand-mint">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-semibold">Back to Episodes</span>
              </Link>
              <Button variant="outline" size="sm" className="border-brand-mint/40 text-brand-mint hover:bg-brand-mint/10">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </header>

        {/* Episode Content */}
        <div className="mx-auto max-w-4xl px-4 py-8">
          {/* Episode Header */}
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(episode.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {episode.duration}
              </div>
            </div>

            <h1 className="mb-4 text-4xl font-bold text-brand-mint md:text-5xl">{episode.title}</h1>

            <p className="mb-6 text-xl text-muted-foreground">{episode.description}</p>

            <div className="flex flex-wrap gap-2">
              {episode.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-brand-mint/40 text-brand-mint">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* YouTube Video */}
          <Card className="mb-8 border-brand-mint/20 bg-card/50">
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                  title={episode.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full rounded-lg"
                />
              </div>
            </CardContent>
          </Card>

          {/* Episode Description */}
          <Card className="mb-8 border-brand-mint/20 bg-card/50">
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold text-brand-mint">About This Episode</h2>
              <div className="prose prose-invert max-w-none">
                <p className="whitespace-pre-line leading-relaxed text-muted-foreground">{episode.fullDescription}</p>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="border-brand-mint/20 bg-card/50">
            <CardContent className="p-6 text-center">
              <h3 className="mb-2 text-xl font-semibold text-brand-mint">Enjoyed this episode?</h3>
              <p className="mb-4 text-muted-foreground">Subscribe to Devtherapy for more conversations about code, culture, and mental health in tech.</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button className="bg-brand-mint text-black hover:bg-brand-mint-dark">
                  <Play className="mr-2 h-4 w-4" />
                  Subscribe on YouTube
                </Button>
                <Link to="/episodes">
                  <Button variant="outline" className="w-full border-brand-mint/40 text-brand-mint hover:bg-brand-mint/10 sm:w-auto">
                    Browse More Episodes
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetail;

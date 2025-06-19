import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const EpisodesSection = () => {
  const episodes = [
    {
      id: 1,
      title: 'The Debugging Mindset: From Frustration to Flow',
      date: '2024-01-15',
      duration: '42 min',
      description: 'Exploring the psychological aspects of debugging and how to maintain composure when everything breaks.',
      slug: 'debugging-mindset-frustration-to-flow',
    },
    {
      id: 2,
      title: "Imposter Syndrome in Tech: You're Not Alone",
      date: '2024-01-08',
      duration: '38 min',
      description: 'A deep dive into imposter syndrome, its prevalence in tech, and practical strategies for overcoming it.',
      slug: 'imposter-syndrome-tech-not-alone',
    },
    {
      id: 3,
      title: 'Code Review Culture: Building Trust, Not Fear',
      date: '2024-01-01',
      duration: '45 min',
      description: 'How to create a code review process that empowers developers and improves code quality without toxicity.',
      slug: 'code-review-culture-building-trust',
    },
    {
      id: 4,
      title: 'Remote Work Burnout: Signs and Solutions',
      date: '2023-12-25',
      duration: '40 min',
      description: 'Identifying the unique challenges of remote development work and maintaining work-life balance.',
      slug: 'remote-work-burnout-signs-solutions',
    },
  ];

  return (
    <section className="bg-card/20 px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-brand-mint md:text-5xl">Latest Episodes</h2>
          <p className="text-xl text-muted-foreground">Fresh conversations about code, culture, and mental health in tech.</p>
        </div>

        <div className="space-y-6">
          {episodes.map((episode) => (
            <Card key={episode.id} className="hover-lift group border-brand-mint/20 bg-card/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Link to={`/episodes/${episode.slug}`}>
                    <Button size="sm" className="mt-1 shrink-0 bg-brand-mint text-black hover:bg-brand-mint-dark">
                      <Play className="h-4 w-4" />
                    </Button>
                  </Link>

                  <div className="flex-1">
                    <Link to={`/episodes/${episode.slug}`}>
                      <h3 className="mb-2 cursor-pointer text-xl font-semibold transition-colors group-hover:text-brand-mint">{episode.title}</h3>
                    </Link>
                    <p className="mb-3 text-muted-foreground">{episode.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(episode.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {episode.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/episodes">
            <Button variant="outline" size="lg" className="border-brand-mint text-brand-mint hover:bg-brand-mint hover:text-black">
              View All Episodes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;

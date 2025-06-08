
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Clock } from 'lucide-react';

const EpisodesSection = () => {
  const episodes = [
    {
      id: 1,
      title: "The Debugging Mindset: From Frustration to Flow",
      date: "2024-01-15",
      duration: "42 min",
      description: "Exploring the psychological aspects of debugging and how to maintain composure when everything breaks."
    },
    {
      id: 2,
      title: "Imposter Syndrome in Tech: You're Not Alone",
      date: "2024-01-08",
      duration: "38 min",
      description: "A deep dive into imposter syndrome, its prevalence in tech, and practical strategies for overcoming it."
    },
    {
      id: 3,
      title: "Code Review Culture: Building Trust, Not Fear",
      date: "2024-01-01",
      duration: "45 min",
      description: "How to create a code review process that empowers developers and improves code quality without toxicity."
    },
    {
      id: 4,
      title: "Remote Work Burnout: Signs and Solutions",
      date: "2023-12-25",
      duration: "40 min",
      description: "Identifying the unique challenges of remote development work and maintaining work-life balance."
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-mint">
            Latest Episodes
          </h2>
          <p className="text-xl text-muted-foreground">
            Fresh conversations about code, culture, and mental health in tech.
          </p>
        </div>

        <div className="space-y-6">
          {episodes.map((episode) => (
            <Card key={episode.id} className="bg-card/50 border-brand-mint/20 hover-lift group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Button 
                    size="sm" 
                    className="bg-brand-mint text-black hover:bg-brand-mint-dark shrink-0 mt-1"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-mint transition-colors">
                      {episode.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {episode.description}
                    </p>
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

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-brand-mint text-brand-mint hover:bg-brand-mint hover:text-black"
          >
            View All Episodes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;

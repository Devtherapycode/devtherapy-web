
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Coffee, Brain } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-mint">
            About the Podcast
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Devtherapy is where developers come to decompress, learn, and connect. 
            We tackle the real challenges of software development - from imposter syndrome 
            to technical debt, burnout to breakthrough moments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card/50 border-brand-mint/20 hover-lift">
            <CardContent className="p-8 text-center">
              <Code className="h-12 w-12 text-brand-mint mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Technical Deep Dives</h3>
              <p className="text-muted-foreground">
                Explore cutting-edge technologies, architectural patterns, and 
                the art of writing maintainable code.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-brand-mint/20 hover-lift">
            <CardContent className="p-8 text-center">
              <Brain className="h-12 w-12 text-brand-mint mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mental Health Focus</h3>
              <p className="text-muted-foreground">
                Addressing burnout, stress, and the psychological aspects of 
                being a developer in today's fast-paced world.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-brand-mint/20 hover-lift">
            <CardContent className="p-8 text-center">
              <Coffee className="h-12 w-12 text-brand-mint mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Dev Culture</h3>
              <p className="text-muted-foreground">
                Real talk about remote work, team dynamics, career growth, 
                and building healthy engineering cultures.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card/30 rounded-xl p-8 border border-brand-mint/10">
          <h3 className="text-2xl font-semibold mb-6 text-center">Meet Your Hosts</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-brand-mint/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-2xl">👨‍💻</div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Host One</h4>
              <p className="text-muted-foreground">
                Senior Software Engineer with 10+ years experience in full-stack development. 
                Passionate about clean code and developer wellness.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-brand-mint/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-2xl">👩‍💻</div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Host Two</h4>
              <p className="text-muted-foreground">
                Tech lead and mental health advocate. Specializes in building inclusive 
                teams and sustainable development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

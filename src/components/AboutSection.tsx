import avtandil from '@/assets/hosts/avtandil.jpeg';
import tornike from '@/assets/hosts/tornike.jpeg';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Code, Coffee, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const AboutSection = () => {
  const hosts = [
    {
      name: 'Tornike Gomareli',
      image: tornike,
      linkedin: 'https://www.linkedin.com/in/tornikegomareli/',
      description: 'Senior Software Engineer with 10+ years experience in full-stack development. Passionate about developer wellness.',
    },
    {
      name: 'Avtandil Ushikishvili',
      image: avtandil,
      linkedin: 'https://www.linkedin.com/in/avtuney/',
      description: 'Tech lead and mental health advocate. Specializes in building Enterprise Software.',
    },
  ];
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-brand-mint md:text-5xl">About the Podcast</h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Devtherapy is where developers come to decompress, learn, and connect. We tackle the real challenges of software development - from imposter
            syndrome to technical debt, burnout to breakthrough moments.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          <Card className="hover-lift border-brand-mint/20 bg-card/50">
            <CardContent className="p-8 text-center">
              <Code className="mx-auto mb-4 h-12 w-12 text-brand-mint" />
              <h3 className="mb-3 text-xl font-semibold">Technical Deep Dives</h3>
              <p className="text-muted-foreground">Explore cutting-edge technologies, architectural patterns, and the art of writing maintainable code.</p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-brand-mint/20 bg-card/50">
            <CardContent className="p-8 text-center">
              <Brain className="mx-auto mb-4 h-12 w-12 text-brand-mint" />
              <h3 className="mb-3 text-xl font-semibold">Mental Health Focus</h3>
              <p className="text-muted-foreground">
                Addressing burnout, stress, and the psychological aspects of being a developer in today's fast-paced world.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-brand-mint/20 bg-card/50">
            <CardContent className="p-8 text-center">
              <Coffee className="mx-auto mb-4 h-12 w-12 text-brand-mint" />
              <h3 className="mb-3 text-xl font-semibold">Dev Culture</h3>
              <p className="text-muted-foreground">Real talk about remote work, team dynamics, career growth, and building healthy engineering cultures.</p>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-xl border border-brand-mint/10 bg-card/30 p-8">
          <h3 className="mb-6 text-center text-2xl font-semibold">Meet Your Hosts</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {hosts.map((host) => (
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-brand-mint/20">
                  <img src={host.image} alt={host.name} className="h-full w-full rounded-full object-cover" />
                </div>
                <h4 className="mb-2 text-xl font-semibold">{host.name}</h4>
                <p className="text-muted-foreground">{host.description}</p>
                <div className="mt-2">
                  <a href={host.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-brand-mint/40 hover:border-brand-mint hover:bg-brand-mint/10">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

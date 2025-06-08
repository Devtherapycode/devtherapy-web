import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Play } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const GuestDetail = () => {
  const { guestId } = useParams();

  // In a real app, this would fetch guest data based on the ID
  const guestData = {
    'zura-abelashvili': {
      name: 'Zura Abelashvili',
      title: 'Graphics Engineer at Rockstar Games',
      tagline: 'Episode #7 – From Georgia to GTA VI',
      image: '/lovable-uploads/31303238-7434-42a9-8892-5f332924e27a.png',
      bio: `Zura is a talented graphics engineer at Rockstar Games, where he works on cutting-edge visual technologies that power some of the most beloved games in the world. Originally from Georgia, Zura's journey into game development showcases the global nature of tech talent and the passion that drives innovation in gaming.

In our conversation, Zura shares insights into the technical challenges of creating realistic graphics, the collaborative nature of game development, and what it's like to work on projects that millions of players will experience.`,
      quote:
        "The most rewarding part of graphics engineering is seeing players get completely immersed in worlds we've helped create. Every optimization, every shader, every lighting effect contributes to that magic moment when reality and virtuality blend.",
      youtubeUrl: 'https://www.youtube.com/embed/ptPHTbQk_sA',
      website: 'https://github.com/zura-dev',
      linkedin: 'https://linkedin.com/in/zura-abelashvili',
    },
  };

  const guest = guestData[guestId as keyof typeof guestData];

  if (!guest) {
    return (
      <div className="matrix-bg flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Guest Not Found</h1>
          <Link to="/guests">
            <Button variant="outline">Back to Guests</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="matrix-bg min-h-screen bg-background">
      <div className="relative z-10 pb-16 pt-20">
        <div className="mx-auto max-w-4xl px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/guests">
              <Button variant="ghost" className="text-brand-mint hover:bg-brand-mint/10 hover:text-brand-mint">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Guests
              </Button>
            </Link>
          </div>

          {/* Hero Section */}
          <div className="mb-16 text-center">
            <div className="relative mb-8">
              <img src={guest.image} alt={guest.name} className="mx-auto h-32 w-32 rounded-full border-4 border-brand-mint/30 object-cover md:h-40 md:w-40" />
            </div>
            <h1 className="glow-text mb-4 text-4xl font-bold md:text-5xl">{guest.name}</h1>
            <p className="mb-2 text-xl text-brand-mint md:text-2xl">{guest.title}</p>
            <p className="text-lg text-muted-foreground">{guest.tagline}</p>
          </div>

          {/* About Section */}
          <Card className="mb-8 border-brand-mint/20 bg-card/50">
            <CardContent className="p-8">
              <h2 className="mb-6 text-2xl font-semibold text-brand-mint">About {guest.name.split(' ')[0]}</h2>
              <div className="prose prose-invert max-w-none">
                {guest.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quote Section */}
          <Card className="mb-8 border-brand-mint/30 bg-gradient-to-r from-brand-mint/10 to-brand-mint/5">
            <CardContent className="p-8">
              <blockquote className="text-center text-lg italic">"{guest.quote}"</blockquote>
              <p className="mt-4 text-center font-medium text-brand-mint">— {guest.name}</p>
            </CardContent>
          </Card>

          {/* Embedded Episode */}
          <Card className="mb-8 border-brand-mint/20 bg-card/50">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center gap-2">
                <Play className="h-5 w-5 text-brand-mint" />
                <h2 className="text-2xl font-semibold text-brand-mint">Watch the Full Episode</h2>
              </div>
              <div className="aspect-video overflow-hidden rounded-lg bg-black/20">
                <iframe
                  src={guest.youtubeUrl}
                  title={`Devtherapy Episode with ${guest.name}`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>

          {/* Connect Section */}
          <Card className="mb-8 border-brand-mint/20 bg-card/50">
            <CardContent className="p-8">
              <h2 className="mb-6 text-2xl font-semibold text-brand-mint">Connect with {guest.name.split(' ')[0]}</h2>
              <div className="flex flex-wrap gap-4">
                <a href={guest.website} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-brand-mint/40 hover:border-brand-mint hover:bg-brand-mint/10">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
                <a href={guest.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-brand-mint/40 hover:border-brand-mint hover:bg-brand-mint/10">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Related Content */}
          <div className="text-center">
            <h2 className="mb-6 text-2xl font-semibold">More from Devtherapy</h2>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/episodes">
                <Button variant="outline" className="border-brand-mint text-brand-mint hover:bg-brand-mint hover:text-black">
                  Listen to More Episodes
                </Button>
              </Link>
              <Link to="/guests">
                <Button variant="outline" className="border-brand-mint/40 hover:border-brand-mint hover:bg-brand-mint/10">
                  Meet Other Guests
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestDetail;

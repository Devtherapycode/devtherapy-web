
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Play } from 'lucide-react';

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
      quote: "The most rewarding part of graphics engineering is seeing players get completely immersed in worlds we've helped create. Every optimization, every shader, every lighting effect contributes to that magic moment when reality and virtuality blend.",
      youtubeUrl: 'https://www.youtube.com/embed/ptPHTbQk_sA',
      website: 'https://github.com/zura-dev',
      linkedin: 'https://linkedin.com/in/zura-abelashvili'
    }
  };

  const guest = guestData[guestId as keyof typeof guestData];

  if (!guest) {
    return (
      <div className="min-h-screen bg-background matrix-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Guest Not Found</h1>
          <Link to="/guests">
            <Button variant="outline">Back to Guests</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background matrix-bg">
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/guests">
              <Button variant="ghost" className="text-brand-mint hover:text-brand-mint hover:bg-brand-mint/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Guests
              </Button>
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <img
                src={guest.image}
                alt={guest.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-brand-mint/30"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              {guest.name}
            </h1>
            <p className="text-xl md:text-2xl text-brand-mint mb-2">
              {guest.title}
            </p>
            <p className="text-lg text-muted-foreground">
              {guest.tagline}
            </p>
          </div>

          {/* About Section */}
          <Card className="bg-card/50 border-brand-mint/20 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-brand-mint">About {guest.name.split(' ')[0]}</h2>
              <div className="prose prose-invert max-w-none">
                {guest.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quote Section */}
          <Card className="bg-gradient-to-r from-brand-mint/10 to-brand-mint/5 border-brand-mint/30 mb-8">
            <CardContent className="p-8">
              <blockquote className="text-lg italic text-center">
                "{guest.quote}"
              </blockquote>
              <p className="text-center text-brand-mint mt-4 font-medium">
                — {guest.name}
              </p>
            </CardContent>
          </Card>

          {/* Embedded Episode */}
          <Card className="bg-card/50 border-brand-mint/20 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Play className="h-5 w-5 text-brand-mint" />
                <h2 className="text-2xl font-semibold text-brand-mint">Watch the Full Episode</h2>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden bg-black/20">
                <iframe
                  src={guest.youtubeUrl}
                  title={`Devtherapy Episode with ${guest.name}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>

          {/* Connect Section */}
          <Card className="bg-card/50 border-brand-mint/20 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-brand-mint">Connect with {guest.name.split(' ')[0]}</h2>
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
            <h2 className="text-2xl font-semibold mb-6">More from Devtherapy</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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


import React from 'react';
import { Button } from '@/components/ui/button';
import { Youtube } from 'lucide-react';

const PlatformLinks = () => {
  const platforms = [
    {
      name: 'Spotify',
      icon: '🎵',
      url: '#',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'Apple Podcasts',
      icon: '🍎',
      url: '#',
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      name: 'Google Podcasts',
      icon: '🎙️',
      url: '#',
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-mint">
          Listen Everywhere
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Choose your preferred platform and never miss an episode.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {platforms.map((platform) => (
            <Button
              key={platform.name}
              variant="outline"
              size="lg"
              className={`${platform.color} text-white border-none hover-lift h-20 flex-col gap-2`}
              asChild
            >
              <a href={platform.url} target="_blank" rel="noopener noreferrer">
                <span className="text-2xl">{platform.icon}</span>
                <span className="text-sm font-medium">{platform.name}</span>
              </a>
            </Button>
          ))}
          
          <Button
            variant="outline"
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white border-none hover-lift h-20 flex-col gap-2"
            asChild
          >
            <a href="https://www.youtube.com/@Devtherapy" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-6 w-6" />
              <span className="text-sm font-medium">YouTube</span>
            </a>
          </Button>
        </div>

        <div className="bg-card/30 rounded-xl p-8 border border-brand-mint/10">
          <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Get notified when new episodes drop and join our community of developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-background border border-brand-mint/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-mint"
            />
            <Button className="bg-brand-mint text-black hover:bg-brand-mint-dark">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformLinks;

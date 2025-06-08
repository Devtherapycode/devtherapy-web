
import React from 'react';
import { Button } from '@/components/ui/button';
import { Youtube, Play, Headphones } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/39d6eedb-3670-4520-b215-d52a3a1ba360.png" 
            alt="Devtherapy Logo" 
            className="h-32 mx-auto mb-6 drop-shadow-2xl animate-pulse-glow"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
          devtherapy
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
          Therapy for developers, one bug at a time.
        </p>
        
        <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
          Where code meets conversation. Join us for deep dives into software engineering, 
          dev culture, and the mental health of those who build the digital world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-brand-mint text-black hover:bg-brand-mint-dark transition-all duration-300 hover-lift text-lg px-8 py-6"
          >
            <Play className="mr-2 h-5 w-5" />
            Listen Now
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-brand-mint text-brand-mint hover:bg-brand-mint hover:text-black transition-all duration-300 hover-lift text-lg px-8 py-6"
          >
            <Headphones className="mr-2 h-5 w-5" />
            Subscribe
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg"
            className="text-brand-mint hover:bg-brand-mint/10 transition-all duration-300 hover-lift text-lg px-8 py-6"
            asChild
          >
            <a href="https://www.youtube.com/@Devtherapy" target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2 h-5 w-5" />
              YouTube
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

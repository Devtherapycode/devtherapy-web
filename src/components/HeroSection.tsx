import logo from '@/assets/common/logo.png';
import { Discord, Youtube } from '@/assets/icons/svgs';
import { Button } from '@/components/ui/button';
import { DISCORD_URL, YOUTUBE_URL } from '@/utils/const';
import { Archive, Brain, Image, Play, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import MatrixBackground from './MatrixBackground';

const HeroSection = () => {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center py-16">
      <MatrixBackground />
      <div className="relative z-20 mx-auto max-w-4xl text-center p-8">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center">
          <div className="overflow-hidden rounded-lg">
            <img src={logo} alt="Devtherapy Logo" className="mx-auto h-32 md:h-40" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="glow-text mb-2 text-4xl font-bold md:text-6xl lg:text-7xl">DevTherapy</h1>

        {/* Tagline */}
        <p className="mb-5 text-xl font-light text-muted-foreground md:text-2xl lg:text-3xl">Therapy for developers, one bug at a time</p>

        {/* CTA Buttons */}
        <div className="mb-16 flex flex-col gap-2 p-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="hover-lift bg-brand-mint px-8 py-4 text-lg font-semibold text-black hover:bg-brand-mint-dark">
                <Play className="mr-2 h-5 w-5" />
                Listen Now
              </Button>
            </a>

            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="hover-lift border-red-500/40 px-8 py-4 text-lg hover:border-red-500 hover:bg-red-500/10">
                <Youtube className="mr-2 h-5 w-5" />
                YouTube
              </Button>
            </a>

            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="hover-lift border-brand-mint/40 px-8 py-4 text-lg hover:border-brand-mint hover:bg-brand-mint/10">
                <Discord className="mr-2 h-5 w-5" />
                Discord
              </Button>
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/episodes">
              <Button variant="outline" size="lg" className="hover-lift border-brand-mint/40 px-8 py-4 text-lg hover:border-brand-mint hover:bg-brand-mint/10">
                <Archive className="mr-2 h-5 w-5" />
                All Episodes
              </Button>
            </Link>

            <Link to="/guests">
              <Button variant="outline" size="lg" className="hover-lift border-brand-mint/40 px-8 py-4 text-lg hover:border-brand-mint hover:bg-brand-mint/10">
                <Users className="mr-2 h-5 w-5" />
                Meet Our Guests
              </Button>
            </Link>

            {/* <Link to="/shop">
              <Button variant="outline" size="lg" className="hover-lift border-brand-mint/40 px-8 py-4 text-lg hover:border-brand-mint hover:bg-brand-mint/10">
                Shop Merch
              </Button>
            </Link> */}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/memes">
              <Button variant="outline" size="lg" className="hover-lift border-brand-mint/40 px-8 py-4 text-lg hover:border-brand-mint hover:bg-brand-mint/10">
                <Image className="mr-2 h-5 w-5" />
                Memes
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="outline" size="lg" className="hover-lift border-brand-mint/40 px-8 py-4 text-lg hover:border-brand-mint hover:bg-brand-mint/10">
                <Image className="mr-2 h-5 w-5" />
                Events
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/quizzes">
              <Button variant="outline" size="lg" className="hover-lift border-brand-mint/40 px-8 py-4 text-lg hover:border-brand-mint hover:bg-brand-mint/10">
                <Brain className="mr-2 h-5 w-5" />
                Quizzes
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-pulse">
          <div className="relative mx-auto h-10 w-6 rounded-full border-2 border-brand-mint/50">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <div className="h-3 w-1 animate-bounce rounded-full bg-brand-mint"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import AboutSection from '@/components/AboutSection';
import EpisodesSection from '@/components/EpisodesSection';
import HeroSection from '@/components/HeroSection';
import PlatformLinks from '@/components/PlatformLinks';

export const HomePage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <HeroSection />
    <AboutSection />
    <EpisodesSection />
    <PlatformLinks />
  </div>
);

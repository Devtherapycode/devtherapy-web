import AboutSection from '@/components/AboutSection';
import EpisodesSection from '@/components/EpisodesSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PlatformLinks from '@/components/PlatformLinks';

export const HomePage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <HeroSection />
    <AboutSection />
    <EpisodesSection />
    <PlatformLinks />
  </div>
);

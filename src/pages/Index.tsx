import AboutSection from '@/components/AboutSection';
import EpisodesSection from '@/components/EpisodesSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PlatformLinks from '@/components/PlatformLinks';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <EpisodesSection />
      <PlatformLinks />
      <Footer />
    </div>
  );
};

export default Index;

import React from "react";
import MatrixBackground from "@/components/MatrixBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EpisodesSection from "@/components/EpisodesSection";
import PlatformLinks from "@/components/PlatformLinks";
import Footer from "@/components/Footer";

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

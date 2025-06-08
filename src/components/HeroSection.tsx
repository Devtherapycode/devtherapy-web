import React from "react";
import { Play, Youtube, Headphones, Archive } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MatrixBackground from "./MatrixBackground";

const HeroSection = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center ">
      <MatrixBackground />
      <div className="text-center max-w-4xl mx-auto relative z-20">
        {/* Logo */}
        <div className="mb-14 flex justify-center items-center">
          <div className=" overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/39d6eedb-3670-4520-b215-d52a3a1ba360.png"
              alt="Devtherapy Logo"
              className="h-32 md:h-40 mx-auto"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text">devtherapy</h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 font-light">
          Therapy for developers, one bug at a time
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-brand-mint hover:bg-brand-mint-dark text-black font-semibold px-8 py-4 text-lg hover-lift"
          >
            <Play className="mr-2 h-5 w-5" />
            Listen Now
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-brand-mint/40 hover:border-brand-mint hover:bg-brand-mint/10 px-8 py-4 text-lg hover-lift"
          >
            <Headphones className="mr-2 h-5 w-5" />
            Subscribe
          </Button>

          <a href="https://www.youtube.com/@Devtherapy" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="border-red-500/40 hover:border-red-500 hover:bg-red-500/10 px-8 py-4 text-lg hover-lift"
            >
              <Youtube className="mr-2 h-5 w-5" />
              YouTube
            </Button>
          </a>

          <Link to="/episodes">
            <Button
              variant="outline"
              size="lg"
              className="border-brand-mint/40 hover:border-brand-mint hover:bg-brand-mint/10 px-8 py-4 text-lg hover-lift"
            >
              <Archive className="mr-2 h-5 w-5" />
              All Episodes
            </Button>
          </Link>

          <Link to="/guests">
            <Button
              variant="outline"
              size="lg"
              className="border-brand-mint/40 hover:border-brand-mint hover:bg-brand-mint/10 px-8 py-4 text-lg hover-lift"
            >
              Meet Our Guests
            </Button>
          </Link>

          <Link to="/shop">
            <Button
              variant="outline"
              size="lg"
              className="border-brand-mint/40 hover:border-brand-mint hover:bg-brand-mint/10 px-8 py-4 text-lg hover-lift"
            >
              Shop Merch
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-pulse">
          <div className="w-6 h-10 border-2 border-brand-mint/50 rounded-full mx-auto relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-1 h-3 bg-brand-mint rounded-full  animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

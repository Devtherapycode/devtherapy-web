
import React from 'react';
import { Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-brand-mint/10 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/39d6eedb-3670-4520-b215-d52a3a1ba360.png" 
              alt="Devtherapy Logo" 
              className="h-8"
            />
            <span className="text-xl font-semibold text-brand-mint">devtherapy</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.youtube.com/@Devtherapy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-brand-mint transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-brand-mint transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-brand-mint transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-brand-mint/10 text-center text-muted-foreground">
          <p>&copy; 2024 Devtherapy. All rights reserved. Therapy for developers, one bug at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import logo from '@/assets/common/logo.png';
import { YOUTUBE_URL } from '@/utils/const';
import { Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-brand-mint/10 bg-card/20 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Devtherapy Logo" className="h-8" />
            <span className="text-xl font-semibold text-brand-mint">devtherapy</span>
          </div>

          <div className="flex items-center gap-6">
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-brand-mint">
              <Youtube className="h-6 w-6" />
            </a>
            {/* <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-brand-mint">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-brand-mint">
              Terms of Service
            </a> */}
          </div>
        </div>

        <div className="mt-8 border-t border-brand-mint/10 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Devtherapy. All rights reserved. Therapy for developers, one bug at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import logo from '@/assets/common/logo.png';
import { Discord, Youtube } from '@/assets/icons/svgs';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { DISCORD_URL, YOUTUBE_URL } from '@/utils/const';
import { Link } from 'react-router-dom';

const Footer = () => {
  useScrollToTop();
  return (
    <footer className="relative z-10 border-t border-brand-mint/10 bg-card/20 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="Devtherapy Logo" className="h-8" />
            <span className="text-xl font-semibold text-brand-mint">Dev Therapy</span>
          </Link>

          <div className="flex items-center gap-6">
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-brand-mint">
              <Youtube className="h-6 w-6" />
            </a>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-brand-mint">
              <Discord className="h-6 w-6" />
            </a>
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

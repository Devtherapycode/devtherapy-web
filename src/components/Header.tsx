'use client';

import logo from '@/assets/common/logo.png';
import { Discord } from '@/assets/icons/svgs';
import { navLinks } from '@/server/data/navlinks/navlinks.data';
import { DISCORD_URL } from '@/utils/const';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={clsx(
        'fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-between border-b border-border/40 bg-background/80 px-6 py-4 text-white shadow-lg backdrop-blur-sm duration-500',
        {
          '-translate-y-full': !visible,
          'translate-y-0': visible,
          'bg-black/80 backdrop-blur': mobileMenuOpen,
          'bg-black/25': !mobileMenuOpen,
        },
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center">
          <div className="overflow-hidden rounded-lg">
            <img src={logo} alt="Devtherapy Logo" className="mx-auto h-10 md:h-10" />
          </div>
        </div>
        <h1 className="text-xl font-extrabold text-[#50FEC1] drop-shadow-[0_0_8px_#50FEC1] md:text-2xl">
          Dev<span className="text-white">Therapy</span>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden gap-6 md:flex">
        {navLinks.map(({ label, href }) => (
          <a key={label} href={href} className="text-[16px] font-semibold text-white transition-all duration-200 hover:text-[#50FEC1]">
            {label}
          </a>
        ))}
      </nav>

      {/* Mobile Toggle Button */}
      <button className="flex flex-1 justify-end md:hidden" onClick={() => setMobileMenuOpen((prev) => !prev)} aria-label="Toggle Menu">
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Listen Button */}
      <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
        <div className="hidden md:block">
          <Button variant="outline" size="default" className="hover-lift border-brand-mint/40 px-8 py-4 text-lg hover:border-brand-mint hover:bg-brand-mint/10">
            <Discord className="mr-2 h-5 w-5" />
            Join Now
          </Button>
        </div>
      </a>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full z-40 w-full bg-black/30 px-6 py-4 shadow-md backdrop-blur md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className="w-fit text-base font-semibold text-white hover:text-[#50FEC1]" onClick={() => setMobileMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="mt-1 w-full border-brand-mint/40 hover:border-brand-mint hover:bg-brand-mint/10">
                <Discord className="mr-2 h-5 w-5" />
                Join Now
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

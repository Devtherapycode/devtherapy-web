import logo from '@/assets/common/logo.png';
import { Discord } from '@/assets/icons/svgs';
import { cn } from '@/lib/utils';
import { useCommandPaletteStore } from '@/stores/commandPaletteStore';
import { DISCORD_URL } from '@/utils/const';
import { Menu, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Episodes', to: '/episodes' },
  { label: 'Guests', to: '/guests' },
  { label: 'Events', to: '/events' },
  { label: 'Quizzes', to: '/quizzes' },
  { label: 'Memes', to: '/memes' },
  { label: 'Wrapped', to: '/wrapped' },
];

// Pages that open on a full-bleed billboard: the nav floats over it until the page scrolls.
const isOverlayRoute = (pathname: string) => pathname === '/' || /^\/episodes\/[^/]+$/.test(pathname);

export const Wordmark = ({ className }: { className?: string }) => (
  <span className={cn('flex items-baseline text-2xl font-extrabold tracking-[-0.04em]', className)}>
    <span className="text-brand-mint">.dev</span>
    <span className="text-white">therapy</span>
  </span>
);

export const SiteNav = () => {
  const { pathname } = useLocation();
  const overlay = isOverlayRoute(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const openPalette = useCommandPaletteStore((state) => state.setOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const solid = !overlay || scrolled || menuOpen;

  return (
    <header
      className={cn(
        'top-0 z-50 w-full transition-colors duration-200 ease-out',
        overlay ? 'fixed' : 'sticky',
        solid ? 'bg-[#0A0A0A]' : 'bg-gradient-to-b from-black/75 to-transparent',
      )}
    >
      <div className="flex h-[72px] items-center justify-between px-4 md:px-[60px]">
        <div className="flex items-center gap-11">
          <Link to="/" className="flex items-center gap-2.5" aria-label="Devtherapy home">
            <img src={logo} alt="" className="h-7 w-7 rounded-md" />
            <Wordmark />
          </Link>
          <nav className="hidden items-center gap-[22px] lg:flex">
            {LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  cn('text-[15px] leading-5 transition-colors duration-150 hover:text-white', isActive ? 'font-bold text-white' : 'font-medium text-[#E5E5E5]')
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-[22px]">
          <button
            type="button"
            onClick={() => openPalette(true)}
            className="flex items-center gap-[22px] text-white transition-transform duration-150 ease-out active:scale-[0.97]"
            aria-label="Search episodes and guests (Command K)"
          >
            <Search className="h-[22px] w-[22px]" strokeWidth={2.2} />
            <span className="hidden rounded border border-white/35 bg-black/25 px-2 py-1 font-mono text-xs font-medium leading-4 sm:inline">⌘K</span>
          </button>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join Discord"
            className="flex h-9 items-center gap-2 rounded bg-gradient-to-b from-[#4752C4] to-[#5865F2] px-2.5 text-sm font-semibold text-white shadow-[inset_0_0_0_1.5px_rgba(0,0,0,0.25)] transition-transform duration-150 ease-out active:scale-[0.97] sm:px-3.5"
          >
            <Discord className="h-5 w-5" />
            <span className="hidden sm:inline">Join Discord</span>
          </a>
          <Link to="/wrapped" className="hidden shrink-0 transition-transform duration-150 ease-out active:scale-[0.97] sm:block" aria-label="Your Dev Wrapped">
            <img src={logo} alt="" className="h-8 w-8 rounded" />
          </Link>
          <button type="button" className="text-white lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-white/10 bg-[#0A0A0A] px-4 pb-6 pt-4 lg:hidden">
          {LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => cn('w-fit text-lg', isActive ? 'font-bold text-white' : 'font-medium text-[#E5E5E5]')}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

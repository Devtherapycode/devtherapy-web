import logo from '@/assets/common/logo.png';
import { ApplePodcasts, Discord, Github, Spotify, Youtube } from '@/assets/icons/svgs';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { useCommandPaletteStore } from '@/stores/commandPaletteStore';
import { APPLE_PODCASTS_URL, DISCORD_URL, GITHUB_URL, SPOTIFY_URL, YOUTUBE_URL } from '@/utils/const';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Wordmark } from './SiteNav';

const PLATFORMS = [
  { name: 'Spotify', url: SPOTIFY_URL, Icon: Spotify },
  { name: 'Apple Podcasts', url: APPLE_PODCASTS_URL, Icon: ApplePodcasts },
];
const COMMUNITY = [
  { name: 'Discord', url: DISCORD_URL, Icon: Discord },
  { name: 'GitHub', url: GITHUB_URL, Icon: Github },
];

const COLUMNS = [
  [
    { label: 'Episodes', to: '/episodes' },
    { label: 'Guests', to: '/guests' },
    { label: 'Events', to: '/events' },
    { label: 'Game Jam 2025', to: '/gamejam-2025' },
  ],
  [
    { label: 'Dev Wrapped', to: '/wrapped' },
    { label: 'Quizzes', to: '/quizzes' },
    { label: 'Memes', to: '/memes' },
  ],
  [
    { label: 'Feedback', href: DISCORD_URL },
    { label: 'Discord community', href: DISCORD_URL },
    { label: 'Source on GitHub', href: GITHUB_URL },
  ],
];

const linkClass = 'text-sm leading-[18px] text-[#8C8C8C] transition-colors duration-150 hover:text-white';
const outlineButton =
  'flex h-12 items-center gap-2.5 rounded border border-white/20 bg-white/[0.04] pl-4 pr-5 text-base font-semibold text-white transition-transform duration-150 ease-out active:scale-[0.97]';

const Footer = () => {
  useScrollToTop();
  const openPalette = useCommandPaletteStore((state) => state.setOpen);

  return (
    <footer className="relative z-10 flex flex-col gap-11 px-4 pb-14 pt-10 md:px-[60px]">
      <div className="flex flex-col gap-6 border-b border-[#222222] pb-10 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-col gap-1.5">
          <p className="text-[22px] font-bold leading-[26px] tracking-[-0.01em] text-[#E5E5E5]">Watch and listen anywhere</p>
          <p className="text-[15px] leading-5 text-[#8C8C8C]">Full episodes on YouTube. Audio on Spotify and Apple Podcasts.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center gap-2.5 rounded bg-white pl-4 pr-5 text-base font-bold text-[#0A0A0A] transition-transform duration-150 ease-out active:scale-[0.97]"
          >
            <Youtube className="h-5 w-5" />
            YouTube
          </a>
          {PLATFORMS.map(({ name, url, Icon }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={outlineButton}>
              <Icon className="h-5 w-5" />
              {name}
            </a>
          ))}
          <span className="hidden h-7 w-px bg-[#2E2E2E] sm:block" aria-hidden />
          {COMMUNITY.map(({ name, url, Icon }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={outlineButton}>
              <Icon className="h-5 w-5" />
              {name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex shrink-0 flex-col gap-3.5 lg:w-[420px]">
          <p className="text-lg font-bold leading-6 text-[#E5E5E5]">Got a story worth an episode?</p>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="flex w-fit items-center gap-1.5 text-[15px] font-semibold text-brand-mint">
            Be a guest
            <ChevronRight className="h-4 w-4" />
          </a>
          <button type="button" onClick={() => openPalette(true)} className="flex items-center gap-2.5 pt-[18px] text-left">
            <span className="border border-[#4D4D4D] px-2.5 py-1.5 font-mono text-[13px] leading-4 text-[#B3B3B3]">⌘K</span>
            <span className="text-sm leading-[18px] text-[#8C8C8C]">Search every episode and guest. Some shortcuts are hidden.</span>
          </button>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
          {COLUMNS.map((column, index) => (
            <div key={index} className="flex flex-col gap-3">
              {column.map((item) =>
                'to' in item ? (
                  <Link key={item.label} to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {item.label}
                  </a>
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-[#222222] pt-7 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/" className="flex items-center gap-2" aria-label="Devtherapy home">
            <img src={logo} alt="" className="h-5 w-5 rounded" />
            <Wordmark className="text-lg" />
          </Link>
          <p className="text-sm leading-[18px] text-[#8C8C8C]">Therapy for developers, one bug at a time.</p>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs leading-4">
          <span className="text-[#8C8C8C]">GLOBAL PARTNER · JETBRAINS</span>
          <span className="text-[#5E5E5E]">© {new Date().getFullYear()} Devtherapy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

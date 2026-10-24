import { ApplePodcasts, Github, Spotify, Youtube } from '@/assets/icons/svgs';
import { cn } from '@/lib/utils';
import { APPLE_PODCASTS_URL, GITHUB_URL, SPOTIFY_URL, YOUTUBE_URL } from '@/utils/const';

// Each platform in its own brand colour, a shade darker at the top, with a thin dark ring (the syntax.fm look).
const PLATFORMS = [
  { name: 'Spotify', url: SPOTIFY_URL, Icon: Spotify, colour: 'bg-gradient-to-b from-[#169C45] to-[#1DB954]' },
  { name: 'Apple Podcasts', url: APPLE_PODCASTS_URL, Icon: ApplePodcasts, colour: 'bg-gradient-to-b from-[#8A2FC6] to-[#A752E8]' },
];
const COMMUNITY = [{ name: 'GitHub', url: GITHUB_URL, Icon: Github, colour: 'bg-gradient-to-b from-[#1F2328] to-[#2D333B]' }];

const brandButton =
  'flex h-12 items-center gap-2.5 rounded pl-4 pr-5 text-base font-semibold text-white shadow-[inset_0_0_0_1.5px_rgba(0,0,0,0.25)] transition-transform duration-150 ease-out active:scale-[0.97]';

/** YouTube, Spotify and Apple Podcasts, then GitHub. `buttonClassName` resizes every button. */
export const PlatformButtons = ({ className, buttonClassName }: { className?: string; buttonClassName?: string }) => (
  <div className={cn('flex flex-wrap items-center gap-2.5', className)}>
    <a
      href={YOUTUBE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(brandButton, 'bg-gradient-to-b from-[#EDEDED] to-white font-bold text-[#0A0A0A]', buttonClassName)}
    >
      <Youtube className="h-5 w-5 text-[#FF0000]" />
      YouTube
    </a>
    {PLATFORMS.map(({ name, url, Icon, colour }) => (
      <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={cn(brandButton, colour, buttonClassName)}>
        <Icon className="h-5 w-5" />
        {name}
      </a>
    ))}
    <span className="hidden h-7 w-px bg-[#2E2E2E] sm:block" aria-hidden />
    {COMMUNITY.map(({ name, url, Icon, colour }) => (
      <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={cn(brandButton, colour, buttonClassName)}>
        <Icon className="h-5 w-5" />
        {name}
      </a>
    ))}
  </div>
);

import { episodeChannel, episodeDuration, episodeName, episodeNumber, episodeTopics, episodeViews, formatViews, seasonLabel, thumbnailUrl, youtubeUrl } from '@/lib/episodes';
import { cn } from '@/lib/utils';
import { EpisodeBasicInfo } from '@/server/data/episodes/episodes.types';
import { useAnalyticsStore } from '@/stores/analyticsStore';
import { Check, ChevronDown, Play, Plus } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { CrtImage, Readout } from './CrtImage';

const PREVIEW_WIDTH = 392;
const PREVIEW_IMAGE_HEIGHT = 218; // 10px frame + 208px picture
const OPEN_DELAY = 450; // a pause, so passing over the rail never opens it
const CLOSE_DELAY = 120; // time to move from the tile onto the preview

type EpisodeTileProps = {
  episode: EpisodeBasicInfo;
  /** Season 1 shows in black and white; hovering tunes it back into colour. */
  mono?: boolean;
  watched?: boolean;
  className?: string;
  /** Overrides the picture's size (default 200x113, 252x142 from sm). */
  imageClassName?: string;
};

export const EpisodeTile = ({ episode, mono = false, watched = false, className, imageClassName }: EpisodeTileProps) => {
  const tile = useRef<HTMLAnchorElement>(null);
  const openTimer = useRef<number>();
  const closeTimer = useRef<number>();
  const [anchor, setAnchor] = useState<DOMRect | null>(null);

  const clearTimers = () => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
  };

  const handlePointerEnter = (event: React.PointerEvent) => {
    if (event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    clearTimers();
    openTimer.current = window.setTimeout(() => setAnchor(tile.current?.getBoundingClientRect() ?? null), OPEN_DELAY);
  };

  const handlePointerLeave = () => {
    window.clearTimeout(openTimer.current);
    closeTimer.current = window.setTimeout(() => setAnchor(null), CLOSE_DELAY);
  };

  useEffect(() => {
    if (!anchor) return;
    const close = () => setAnchor(null);
    const handleKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && close();
    window.addEventListener('scroll', close, { passive: true, capture: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', close, { capture: true });
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [anchor]);

  useEffect(() => clearTimers, []);

  return (
    <>
      <Link
        ref={tile}
        to={`/episodes/${episode.slug}`}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        className={cn('block shrink-0 snap-start rounded transition-transform duration-150 ease-out active:scale-[0.97]', className)}
        aria-label={episode.title}
      >
        <CrtImage src={thumbnailUrl(episode)} alt="" mono={mono} className={cn('h-[113px] w-[200px] rounded sm:h-[142px] sm:w-[252px]', imageClassName)}>
          <div className="absolute inset-x-2 top-2 flex items-center justify-between">
            <Readout>{episodeChannel(episode)}</Readout>
            <Readout className="font-semibold tracking-[0.08em] text-white">{episodeDuration(episode)}</Readout>
          </div>
          {watched && (
            <>
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-black/70" />
              <div className="absolute bottom-2.5 left-3 right-3 h-[3px] bg-brand-mint" aria-label="Watched" />
            </>
          )}
        </CrtImage>
      </Link>
      {anchor &&
        createPortal(
          <HoverPreview
            episode={episode}
            anchor={anchor}
            onPointerEnter={() => window.clearTimeout(closeTimer.current)}
            onPointerLeave={() => setAnchor(null)}
          />,
          document.body,
        )}
    </>
  );
};

type HoverPreviewProps = {
  episode: EpisodeBasicInfo;
  anchor: DOMRect;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
};

// The expanded card: centred on the tile it grew from, kept inside the window, scaling up from 0.9 in 200ms
// (ease-out, from the tile's centre), always in colour with the "tuned in" readout.
const HoverPreview = ({ episode, anchor, onPointerEnter, onPointerLeave }: HoverPreviewProps) => {
  const [mounted, setMounted] = useState(false);
  const { episodeStats, trackEpisodePlay, toggleEpisodeFavorite } = useAnalyticsStore();
  const favorite = episodeStats[episode.id]?.isFavorite ?? false;
  const number = episodeNumber(episode);
  const topics = episodeTopics(episode).slice(0, 3);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const left = Math.min(Math.max(anchor.left + anchor.width / 2 - PREVIEW_WIDTH / 2, 16), window.innerWidth - PREVIEW_WIDTH - 16);
  const top = Math.max(anchor.top + anchor.height / 2 - PREVIEW_IMAGE_HEIGHT / 2, 8);

  return (
    <div
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{ left, top, width: PREVIEW_WIDTH }}
      className={cn(
        'fixed z-[60] overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-b from-[#1A1A1D] to-[#0D0D0F] px-2.5 pt-2.5 shadow-[0_0_90px_rgba(255,122,47,0.3),0_10px_40px_rgba(0,0,0,0.85)]',
        'origin-center transition-[opacity,transform] duration-200 ease-out motion-reduce:transform-none',
        mounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0',
      )}
    >
      <Link to={`/episodes/${episode.slug}`} className="block">
        <CrtImage src={thumbnailUrl(episode)} alt="" className="h-[208px] rounded-xl">
          <div className="absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-b from-transparent to-crt-ink/70" />
          <div className="absolute left-3 right-3 top-3 flex items-center gap-2.5">
            <span className="font-mono text-[13px] font-bold tracking-[0.14em] text-brand-mint [text-shadow:0_0_10px_rgba(101,229,177,0.8)]">{episodeChannel(episode)}</span>
            <span className="flex items-center gap-1.5 rounded bg-crt-orange px-2 py-1 font-mono text-[10px] font-bold leading-[13px] tracking-[0.14em] text-crt-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-crt-ink" />
              TUNED IN · COLOUR
            </span>
          </div>
          <div className="absolute bottom-3.5 left-3 flex max-w-[85%] flex-col gap-[3px] border-l-[3px] border-crt-orange bg-crt-ink/85 py-2 pl-3 pr-3.5">
            <span className="font-mono text-[11px] font-semibold tracking-[0.08em] text-brand-mint">PREVIEW</span>
            <span className="line-clamp-2 text-[22px] font-extrabold leading-6 tracking-[-0.02em] text-white">{episodeName(episode)}</span>
          </div>
        </CrtImage>
      </Link>

      <div className="flex flex-col gap-3.5 px-2 pb-5 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href={youtubeUrl(episode)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEpisodePlay(episode.id)}
              aria-label="Play on YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              <Play className="h-[18px] w-[18px] fill-[#0A0A0A] text-[#0A0A0A]" />
            </a>
            <button
              type="button"
              onClick={() => toggleEpisodeFavorite(episode.id)}
              aria-label={favorite ? 'Remove from my list' : 'Add to my list'}
              aria-pressed={favorite}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 bg-[#2A2A2A]/60 text-white transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              {favorite ? <Check className="h-[18px] w-[18px]" strokeWidth={2.4} /> : <Plus className="h-[18px] w-[18px]" strokeWidth={2.4} />}
            </button>
          </div>
          <Link
            to={`/episodes/${episode.slug}`}
            aria-label="More info"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 bg-[#2A2A2A]/60 text-white transition-transform duration-150 ease-out active:scale-[0.97]"
          >
            <ChevronDown className="h-[18px] w-[18px]" strokeWidth={2.4} />
          </Link>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[15px] font-bold leading-[18px] text-brand-mint">{seasonLabel(episode)}</span>
          <span className="rounded-sm border border-white/40 px-[5px] py-px font-mono text-[11px] leading-[15px] text-[#E5E5E5]">{episodeDuration(episode)}</span>
          {number !== null && <span className="font-mono text-xs text-[#BCBCBC]">EP {number}</span>}
          <span className="font-mono text-xs text-[#BCBCBC]">{formatViews(episodeViews(episode))}</span>
        </div>
        {topics.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 text-[13px] font-medium leading-[18px] text-white">
            {topics.map((topic, index) => (
              <span key={topic} className="flex items-center gap-1.5">
                {index > 0 && <span className="text-[#646464]">•</span>}
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

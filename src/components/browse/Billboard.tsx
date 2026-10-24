import { episodeName, frameUrl, newestFirst } from '@/lib/episodes';
import { cn } from '@/lib/utils';
import { previewEmbedUrl, usePreviewPlayer } from '@/lib/youtube';
import { useAnalyticsStore } from '@/stores/analyticsStore';
import { Info, Play, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CrtImage } from './CrtImage';
import { YouTubeDialog } from './YouTubeDialog';

const featured = newestFirst[0];

// The newest episode, Netflix style: a still frame, then the episode playing muted behind the title once it starts. Gradients darken
// the left and bottom so the text and the first rail sit on near-black.
export const Billboard = () => {
  const section = useRef<HTMLElement>(null);
  const iframe = useRef<HTMLIFrameElement>(null);
  const { player, playing } = usePreviewPlayer(iframe);
  const [showVideo] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [muted, setMuted] = useState(true);
  const [playFrom, setPlayFrom] = useState<number | null>(null);
  const trackEpisodePlay = useAnalyticsStore((state) => state.trackEpisodePlay);

  // Pause while the hero is scrolled away or the full player is open, and carry on when it comes back.
  useEffect(() => {
    if (!section.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting && playFrom === null ? player.current?.playVideo() : player.current?.pauseVideo()),
      { threshold: 0.3 },
    );
    observer.observe(section.current);
    return () => observer.disconnect();
  }, [player, playFrom]);

  const handleToggleMute = () => {
    if (muted) player.current?.unMute();
    else player.current?.mute();
    setMuted(!muted);
  };

  const handlePlay = () => {
    trackEpisodePlay(featured.id);
    setPlayFrom(0);
  };

  return (
    <section ref={section} className="relative overflow-hidden bg-[#0A0A0A]">
      <CrtImage src={frameUrl(featured)} alt="" loading="eager" vignette={0.5} className="absolute inset-0 [container-type:size]">
        {showVideo && (
          // Sized like object-fit: cover, so the 16:9 video always fills the hero.
          <iframe
            ref={iframe}
            src={previewEmbedUrl(featured)}
            title={featured.title}
            allow="autoplay; encrypted-media"
            tabIndex={-1}
            className={cn(
              'pointer-events-none absolute left-1/2 top-1/2 h-[max(100cqh,56.25cqw)] w-[max(100cqw,177.78cqh)] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-out',
              playing ? 'opacity-100' : 'opacity-0',
            )}
          />
        )}
      </CrtImage>
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.92)_0%,rgba(10,10,10,0.6)_35%,transparent_65%)]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent_0%,rgba(10,10,10,0.55)_45%,#0A0A0A_92%)]" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/75 to-transparent" />

      <div className="relative flex min-h-[640px] flex-col items-start justify-end gap-4 px-4 pb-16 pt-32 md:min-h-[780px] md:px-[60px] md:pb-24">
        <span className="font-mono text-xs font-semibold tracking-[0.3em] text-white">NEWEST EPISODE</span>
        <h1 className="max-w-[760px] text-6xl font-black leading-[0.95] tracking-[-0.045em] text-white md:text-[96px]">{episodeName(featured)}</h1>
        <p className="line-clamp-3 w-full max-w-[560px] text-lg leading-7 text-[#E5E5E5]">{featured.description}</p>
        <div className="flex w-full items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePlay}
              className="flex h-12 items-center gap-3 rounded-[5px] bg-white pl-5 pr-6 text-lg font-bold text-[#0A0A0A] transition-transform duration-150 ease-out active:scale-[0.97] md:h-14 md:pl-6 md:pr-[30px] md:text-[21px]"
            >
              <Play className="h-6 w-6 fill-[#0A0A0A]" />
              Play
            </button>
            <Link
              to={`/episodes/${featured.slug}`}
              className="flex h-12 items-center gap-3 rounded-[5px] bg-[#6D6D6E]/70 pl-5 pr-6 text-lg font-bold text-white transition-transform duration-150 ease-out active:scale-[0.97] md:h-14 md:pl-[22px] md:pr-[30px] md:text-[21px]"
            >
              <Info className="h-6 w-6" />
              More info
            </Link>
          </div>
          {showVideo && (
            <button
              type="button"
              onClick={handleToggleMute}
              aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white/60 bg-black/30 text-white transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          )}
        </div>
      </div>
      <YouTubeDialog episode={featured} start={playFrom} onClose={() => setPlayFrom(null)} />
    </section>
  );
};

import { episodeChannel, episodeDuration, episodeViews, formatViews, seasonOne, seasonTwo, thumbnailUrl } from '@/lib/episodes';
import { Play } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { CrtImage, Readout } from './CrtImage';
import { IntroDialog } from './IntroDialog';
import { Rail } from './Rail';

const premiere = seasonTwo[0];
const firstEpisode = seasonOne[0];

const formatDay = (iso: string) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

const BigCard = ({ image, mono, title, subtitle, children }: { image: string; mono?: boolean; title: string; subtitle: string; children?: ReactNode }) => (
  <>
    <CrtImage src={image} alt="" mono={mono} className="h-[180px] w-[320px] rounded sm:h-[245px] sm:w-[436px]">
      {children}
    </CrtImage>
    <div className="flex w-[320px] flex-col gap-0.5 pt-2.5 sm:w-[436px]">
      <span className="truncate text-[15px] font-bold leading-5 text-[#E5E5E5]">{title}</span>
      <span className="truncate font-mono text-xs leading-4 text-[#8C8C8C]">{subtitle}</span>
    </div>
  </>
);

const cardClass = 'block shrink-0 snap-start transition-transform duration-150 ease-out active:scale-[0.97]';

/** Season 2 so far: the intro, the premiere, and a way back into the black-and-white archive. */
export const SeasonTwoRail = () => {
  const [introOpen, setIntroOpen] = useState(false);

  return (
    <Rail title="Season 2" subtitle="New studio, new board, new mics.">
      <button type="button" onClick={() => setIntroOpen(true)} className={`${cardClass} text-left`} aria-label="Play the Season 2 intro">
        <BigCard image="/videos/season-2-intro.jpg" title="Season 2 intro" subtitle="The archive on a wall of TVs, turning to colour">
          <span className="absolute left-2 top-2 rounded-[3px] bg-brand-mint px-1.5 py-0.5 text-[10px] font-extrabold tracking-[0.08em] text-[#0A0A0A]">INTRO</span>
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/70 bg-black/40">
            <Play className="h-5 w-5 fill-white text-white" />
          </span>
        </BigCard>
      </button>

      {premiere && (
        <Link to={`/episodes/${premiere.slug}`} className={cardClass}>
          <BigCard image={thumbnailUrl(premiere)} title={premiere.title} subtitle={`S2 premiere · ${formatDay(premiere.date)} · ${formatViews(episodeViews(premiere))}`}>
            <div className="absolute inset-x-2 top-2 flex items-center justify-between">
              <span className="rounded-[3px] bg-brand-mint px-1.5 py-0.5 text-[10px] font-extrabold tracking-[0.08em] text-[#0A0A0A]">PREMIERE</span>
              <Readout>{episodeChannel(premiere)}</Readout>
            </div>
            <Readout className="absolute bottom-2 right-2 font-semibold tracking-[0.08em] text-white">{episodeDuration(premiere)}</Readout>
          </BigCard>
        </Link>
      )}

      {firstEpisode && (
        <Link to="/episodes" className={cardClass}>
          <BigCard image={thumbnailUrl(firstEpisode)} mono title="Where it started" subtitle={`Season 1 · EP 01 – EP ${String(seasonOne.length).padStart(2, '0')}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            <div className="absolute bottom-4 left-4 flex flex-col">
              <span className="text-4xl font-black leading-none text-white">S1</span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#BDBDBD]">BLACK &amp; WHITE</span>
            </div>
          </BigCard>
        </Link>
      )}
      <IntroDialog open={introOpen} onOpenChange={setIntroOpen} />
    </Rail>
  );
};

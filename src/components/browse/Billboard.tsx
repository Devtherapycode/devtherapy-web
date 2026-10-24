import logo from '@/assets/common/logo.png';
import studio from '@/assets/common/season-2-studio.jpg';
import { episodeViews, formatViews } from '@/lib/episodes';
import { allEpisodes } from '@/server/data/episodes/episodes.data';
import { Info, Play } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CrtImage } from './CrtImage';
import { IntroDialog } from './IntroDialog';

const totalViews = allEpisodes.reduce((sum, episode) => sum + episodeViews(episode), 0);

// The Season 2 billboard: the new studio, graded, behind the stacked wordmark. Gradients darken the left and
// bottom so the type and the first rail sit on near-black.
export const Billboard = () => {
  const [introOpen, setIntroOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A]">
      <CrtImage src={studio} alt="Tornike and Avtandil in the new Devtherapy studio" loading="eager" vignette={0.7} className="absolute inset-y-0 left-[15%] right-[-8%] md:-top-2.5" />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,#0A0A0A_0%,#0A0A0A_14%,rgba(10,10,10,0.88)_30%,rgba(10,10,10,0.45)_50%,transparent_70%)]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent_0%,rgba(10,10,10,0.55)_45%,#0A0A0A_92%)]" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/75 to-transparent" />

      <div className="relative flex min-h-[640px] flex-col items-start justify-end gap-[22px] px-4 pb-16 pt-32 md:min-h-[780px] md:px-[60px] md:pb-24 md:pt-[204px]">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="" className="h-[18px] w-[18px] rounded-sm" />
          <span className="text-sm font-semibold leading-[18px] tracking-[0.42em] text-[#D9D9D9]">PODCAST</span>
        </div>
        <h1 className="flex flex-col text-[76px] font-black leading-[0.82] tracking-[-0.06em] sm:text-[112px] md:text-[152px]">
          <span className="text-brand-mint">.dev</span>
          <span className="text-white">therapy</span>
        </h1>
        <div className="flex flex-col gap-3.5 pt-1.5">
          <div className="flex items-center gap-3">
            <span className="rounded-[3px] bg-brand-mint px-2 pb-1 pt-[5px] text-[13px] font-extrabold leading-[15px] tracking-[0.06em] text-[#0A0A0A]">SEASON 2</span>
            <span className="text-lg font-semibold leading-[22px] text-white">Now streaming in colour</span>
          </div>
          <p className="text-2xl font-medium leading-9 tracking-[-0.02em] text-white md:text-[30px]">Every conversation led here.</p>
          <div className="flex flex-wrap items-center gap-4 font-mono text-[13px] leading-[18px]">
            <span className="font-semibold text-brand-mint">NEW STUDIO</span>
            <span className="text-[#BDBDBD]">2026</span>
            <span className="text-[#BDBDBD]">{allEpisodes.length} episodes</span>
            <span className="text-[#BDBDBD]">{formatViews(totalViews)}</span>
            <span className="text-[#BDBDBD]">Georgian</span>
          </div>
        </div>
        <div className="flex items-center gap-3 pt-1.5">
          <button
            type="button"
            onClick={() => setIntroOpen(true)}
            className="flex h-12 items-center gap-3 rounded-[5px] bg-white pl-5 pr-6 text-lg font-bold text-[#0A0A0A] transition-transform duration-150 ease-out active:scale-[0.97] md:h-14 md:pl-6 md:pr-[30px] md:text-[21px]"
          >
            <Play className="h-6 w-6 fill-[#0A0A0A]" />
            Play
          </button>
          <Link
            to="/episodes/we-back"
            className="flex h-12 items-center gap-3 rounded-[5px] bg-[#6D6D6E]/70 pl-5 pr-6 text-lg font-bold text-white transition-transform duration-150 ease-out active:scale-[0.97] md:h-14 md:pl-[22px] md:pr-[30px] md:text-[21px]"
          >
            <Info className="h-6 w-6" />
            More info
          </Link>
        </div>
      </div>
      <IntroDialog open={introOpen} onOpenChange={setIntroOpen} />
    </section>
  );
};

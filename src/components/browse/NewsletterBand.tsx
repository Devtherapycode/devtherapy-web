import tvWall from '@/assets/common/tv-wall.jpg';
import { DISCORD_URL } from '@/utils/const';
import { ChevronRight } from 'lucide-react';
import { CrtImage } from './CrtImage';

// The newsletter is planned but has no backend yet, so the band points to Discord, where new episodes are
// announced today, instead of showing an email field that would not send anything.
export const NewsletterBand = () => (
  <section className="relative mt-4 overflow-hidden px-4 pb-[120px] pt-[130px] md:px-[60px]">
    <CrtImage src={tvWall} alt="" className="absolute inset-0" />
    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_50%,rgba(10,10,10,0.6)_0%,rgba(10,10,10,0.82)_60%,rgba(10,10,10,0.96)_100%)]" />
    <div aria-hidden className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-[#0A0A0A] to-transparent" />
    <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

    <div className="relative mx-auto flex max-w-[820px] flex-col items-center gap-[18px] text-center">
      <span className="font-mono text-xs font-semibold leading-4 tracking-[0.24em] text-brand-mint">NEWSLETTER · COMING SOON</span>
      <h2 className="text-[40px] font-black leading-[1] tracking-[-0.045em] text-white md:text-[64px]">Ready for your next session?</h2>
      <p className="max-w-[640px] text-lg leading-7 text-[#D0D0D0] md:text-xl">New episodes, events and Game Jam news. Until the newsletter launches, we announce everything on Discord.</p>
      <a
        href={DISCORD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3.5 flex h-[58px] items-center gap-2.5 rounded bg-brand-mint px-[26px] text-xl font-extrabold text-[#0A0A0A] transition-transform duration-150 ease-out active:scale-[0.97]"
      >
        Join the Discord
        <ChevronRight className="h-5 w-5" strokeWidth={2.6} />
      </a>
    </div>
  </section>
);

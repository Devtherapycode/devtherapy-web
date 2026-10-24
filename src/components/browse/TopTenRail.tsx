import { episodeViews, formatViews, topByViews } from '@/lib/episodes';
import { EpisodeTile } from './EpisodeTile';
import { Rail } from './Rail';

/** The ten most-viewed episodes on YouTube, each behind a giant outlined rank number. */
export const TopTenRail = () => (
  <Rail
    title={
      <span className="flex items-center gap-3">
        <span aria-hidden className="flex h-[30px] w-[30px] flex-col items-center justify-center rounded-sm bg-brand-mint text-[#0A0A0A]">
          <span className="text-[8px] font-extrabold leading-none">TOP</span>
          <span className="text-[13px] font-black leading-none">10</span>
        </span>
        Top 10 on Devtherapy
      </span>
    }
    subtitle="by YouTube views"
  >
    {topByViews.slice(0, 10).map((episode, index) => (
      <div key={episode.id} className="relative flex h-[170px] w-[280px] shrink-0 snap-start sm:h-[200px] sm:w-[326px]">
        <span
          aria-hidden
          className="absolute left-0 top-0 select-none text-[190px] font-black leading-[170px] tracking-[-0.08em] text-[#0A0A0A] [-webkit-text-stroke:3px_#5C5C5C] sm:text-[230px] sm:leading-[200px]"
        >
          {index + 1}
        </span>
        <div className="absolute right-0 top-6 flex flex-col items-end gap-1.5 sm:top-[33px]">
          <span className="font-mono text-xs font-medium text-[#8C8C8C]">{formatViews(episodeViews(episode))}</span>
          <EpisodeTile episode={episode} imageClassName="sm:h-[133px] sm:w-[236px]" />
        </div>
      </div>
    ))}
  </Rail>
);

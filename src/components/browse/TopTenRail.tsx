import { topByViews } from '@/lib/episodes';
import { EpisodeTile } from './EpisodeTile';
import { Rail } from './Rail';

/** The ten most-viewed episodes on YouTube. */
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
    subtitle="Ranked by YouTube views"
  >
    {topByViews.slice(0, 10).map((episode) => (
      <EpisodeTile key={episode.id} episode={episode} />
    ))}
  </Rail>
);

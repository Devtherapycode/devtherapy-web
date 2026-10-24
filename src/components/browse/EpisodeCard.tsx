import { episodeChannel, episodeDuration, episodeName, episodeNumber, episodeTopics, episodeViews, formatViews, thumbnailUrl } from '@/lib/episodes';
import { cn } from '@/lib/utils';
import { EpisodeBasicInfo } from '@/server/data/episodes/episodes.types';
import { useAnalyticsStore } from '@/stores/analyticsStore';
import { Check, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CrtImage, Readout } from './CrtImage';

type EpisodeCardProps = {
  episode: EpisodeBasicInfo;
  mono?: boolean;
  className?: string;
};

/** A grid card: picture, numbers, name and topics, with an add-to-list button. */
export const EpisodeCard = ({ episode, mono = false, className }: EpisodeCardProps) => {
  const favorite = useAnalyticsStore((state) => state.episodeStats[episode.id]?.isFavorite ?? false);
  const toggleEpisodeFavorite = useAnalyticsStore((state) => state.toggleEpisodeFavorite);
  const number = episodeNumber(episode);

  return (
    <article className={cn('flex flex-col overflow-hidden rounded bg-[#181818]', className)}>
      <Link to={`/episodes/${episode.slug}`} tabIndex={-1} aria-hidden className="block transition-transform duration-150 ease-out active:scale-[0.97]">
        <CrtImage src={thumbnailUrl(episode)} alt="" mono={mono} className="aspect-video w-full">
          <Readout className="absolute left-2 top-2">{episodeChannel(episode)}</Readout>
        </CrtImage>
      </Link>
      <div className="relative px-3 pb-4 pt-3">
        <Link to={`/episodes/${episode.slug}`} className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 pr-10 font-mono text-[11px] text-[#A3A3A3]">
            {number !== null && <span className="font-semibold text-brand-mint">EP {number}</span>}
            <span>
              {episodeDuration(episode)} · {formatViews(episodeViews(episode))}
            </span>
          </div>
          <h3 className="line-clamp-1 text-[15px] font-bold leading-5 text-white">{episodeName(episode)}</h3>
          <p className="line-clamp-2 text-xs leading-4 text-[#8C8C8C]">{episodeTopics(episode).join(', ') || episode.tags.join(', ')}</p>
        </Link>
        <button
          type="button"
          onClick={() => toggleEpisodeFavorite(episode.id)}
          aria-label={favorite ? 'Remove from my list' : 'Add to my list'}
          aria-pressed={favorite}
          className="absolute right-3 top-2 flex h-7 w-7 items-center justify-center rounded-full border border-white/50 text-white transition-transform duration-150 ease-out active:scale-[0.97]"
        >
          {favorite ? <Check className="h-3.5 w-3.5" strokeWidth={2.6} /> : <Plus className="h-3.5 w-3.5" strokeWidth={2.6} />}
        </button>
      </div>
    </article>
  );
};

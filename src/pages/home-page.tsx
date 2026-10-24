import { Billboard } from '@/components/browse/Billboard';
import { EpisodeTile } from '@/components/browse/EpisodeTile';
import { NewsletterBand } from '@/components/browse/NewsletterBand';
import { PeopleRail } from '@/components/browse/PeopleRail';
import { Rail } from '@/components/browse/Rail';
import { TopTenRail } from '@/components/browse/TopTenRail';
import { newestFirst, seasonOne, topicRails } from '@/lib/episodes';
import { useAnalyticsStore } from '@/stores/analyticsStore';

// Episodes this browser has played, most recent first (from the local listening history Dev Wrapped uses).
const useContinueWatching = () => {
  const episodeStats = useAnalyticsStore((state) => state.episodeStats);
  return newestFirst
    .filter((episode) => episodeStats[episode.id]?.lastPlayedAt)
    .sort((a, b) => (episodeStats[b.id].lastPlayedAt ?? '').localeCompare(episodeStats[a.id].lastPlayedAt ?? ''));
};

export const HomePage = () => {
  const continueWatching = useContinueWatching();
  const episodeStats = useAnalyticsStore((state) => state.episodeStats);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-foreground">
      <Billboard />
      <div className="relative z-10 -mt-12 flex flex-col pb-4 md:-mt-20">
        {continueWatching.length > 0 && (
          <Rail title="Continue watching">
            {continueWatching.map((episode) => (
              <EpisodeTile key={episode.id} episode={episode} watched={episodeStats[episode.id]?.isCompleted} />
            ))}
          </Rail>
        )}
        <TopTenRail />
        <Rail title="Season 1" subtitle={`All ${seasonOne.length} episodes, oldest first.`}>
          {seasonOne.map((episode) => (
            <EpisodeTile key={episode.id} episode={episode} />
          ))}
        </Rail>
        {topicRails
          .filter((rail) => rail.episodes.length > 2)
          .map((rail) => (
            <Rail key={rail.title} title={rail.title}>
              {rail.episodes.map((episode) => (
                <EpisodeTile key={episode.id} episode={episode} />
              ))}
            </Rail>
          ))}
        <PeopleRail />
      </div>
      <NewsletterBand />
    </main>
  );
};

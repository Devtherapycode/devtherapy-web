import { Billboard } from '@/components/browse/Billboard';
import { EpisodeTile } from '@/components/browse/EpisodeTile';
import { NewsletterBand } from '@/components/browse/NewsletterBand';
import { PeopleRail } from '@/components/browse/PeopleRail';
import { Rail } from '@/components/browse/Rail';
import { SeasonTwoRail } from '@/components/browse/SeasonTwoRail';
import { TopTenRail } from '@/components/browse/TopTenRail';
import { episodeSeason, newestFirst, seasonOne, topicRails } from '@/lib/episodes';
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
          <Rail title="Continue watching for you">
            {continueWatching.map((episode) => (
              <EpisodeTile key={episode.id} episode={episode} mono={episodeSeason(episode) === 1} watched={episodeStats[episode.id]?.isCompleted} />
            ))}
          </Rail>
        )}
        <SeasonTwoRail />
        <TopTenRail />
        <Rail title="Season 1 — the archive" subtitle={`${seasonOne.length} episodes, from the very first. Shown in black and white.`}>
          {seasonOne.map((episode) => (
            <EpisodeTile key={episode.id} episode={episode} mono />
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

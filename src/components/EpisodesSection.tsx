import { Button } from '@/components/ui/button';
import { allEpisodes } from '@/server/data/episodes/episodes.data';
import { Link } from 'react-router-dom';
import { EpisodeCard } from './basic/episode-card';

const EpisodesSection = () => (
  <section className="bg-card/20 px-4 py-20">
    <div className="mx-auto max-w-4xl">
      <div className="mb-16 text-center">
        <h2 className="mb-6 text-4xl font-bold text-brand-mint md:text-5xl">Latest Episodes</h2>
        <p className="text-xl text-muted-foreground">Fresh conversations about code, culture, and mental health in tech.</p>
      </div>

      <div className="gap-6 md:grid lg:grid-cols-2">
        {allEpisodes.slice(0, 4).map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link to="/episodes">
          <Button variant="outline" size="lg" className="border-brand-mint text-brand-mint hover:bg-brand-mint hover:text-black">
            View All Episodes
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default EpisodesSection;

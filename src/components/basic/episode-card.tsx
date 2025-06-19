import { EpisodeBasicInfo } from '@/server/data/episodes/episodes.types';
import { Calendar, Clock, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

type EpisodeCardProps = {
  episode: EpisodeBasicInfo;
  tagsOn?: boolean;
};

export const EpisodeCard = ({ episode, tagsOn = false }: EpisodeCardProps) => (
  <Card key={episode.id} className="hover-lift group border-brand-mint/20 bg-card/50">
    <CardContent className="p-6">
      <div>
        <Link to={`/episodes/${episode.slug}`} className="mb-3 flex items-center gap-2">
          <Button size="sm" className="bg-brand-mint px-5 py-0 text-black hover:bg-brand-mint-dark">
            <Play />
          </Button>
          <h3 className="line-clamp-2 cursor-pointer text-lg font-semibold transition-colors group-hover:text-brand-mint">{episode.title}</h3>
        </Link>

        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${episode.youtubeId}`}
            title={episode.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full rounded-lg"
          />
        </div>

        <p className="mb-3 line-clamp-3 text-sm text-muted-foreground">{episode.description}</p>

        <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(episode.date).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {episode.duration}
          </div>
        </div>

        {tagsOn && (
          <div className="flex flex-wrap gap-1">
            {episode.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="px-2 py-0 text-xs">
                {tag}
              </Badge>
            ))}
            {episode.tags.length > 3 && (
              <Badge variant="outline" className="px-2 py-0 text-xs">
                +{episode.tags.length - 3}
              </Badge>
            )}
          </div>
        )}
      </div>
    </CardContent>
  </Card>
);

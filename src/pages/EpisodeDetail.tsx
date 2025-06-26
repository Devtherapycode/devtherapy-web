import MatrixBackground from '@/components/MatrixBackground';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { episodes } from '@/server/data/episodes/episodes.data';
import { YOUTUBE_URL } from '@/utils/const';
import { ArrowLeft, Calendar, Clock, Play, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

// Helper to convert timestamp string to seconds
function timestampToSeconds(ts: string): number {
  const parts = ts.split(':').map(Number);
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 1) {
    return parts[0];
  }
  return 0;
}

const EpisodeDetail = () => {
  const { episodeSlug } = useParams();

  const episode = episodes[episodeSlug as keyof typeof episodes];

  function renderDescription(desc: string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const timeRegex = /\b(\d{1,2}:\d{2}(?::\d{2})?)\b/g;
    return desc.split(/\n\n+/).map((paragraph, idx) => (
      <p key={idx} className="mb-6 last:mb-0">
        {paragraph.split(/\n/).map((line, i, arr) => {
          // Split line into parts: URLs, timestamps, and text
          const parts = [];
          let lastIndex = 0;
          let matchArr: RegExpExecArray | null;
          const regex = new RegExp(`${urlRegex.source}|${timeRegex.source}`, 'g');
          while ((matchArr = regex.exec(line)) !== null) {
            if (matchArr.index > lastIndex) {
              parts.push(line.slice(lastIndex, matchArr.index));
            }
            if (matchArr[0].match(urlRegex)) {
              parts.push({ type: 'url', value: matchArr[0] });
            } else if (matchArr[0].match(timeRegex)) {
              parts.push({ type: 'time', value: matchArr[0] });
            }
            lastIndex = regex.lastIndex;
          }
          if (lastIndex < line.length) {
            parts.push(line.slice(lastIndex));
          }
          return parts
            .map((part, j) => {
              if (typeof part === 'string') return <span key={j}>{part}</span>;
              if (part.type === 'url') {
                return (
                  <a
                    key={j}
                    href={part.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-1 break-all font-semibold text-brand-mint underline transition-colors hover:text-brand-mint-dark"
                    style={{ wordBreak: 'break-all', padding: '0 0.15em' }}
                  >
                    {part.value}
                  </a>
                );
              }
              if (part.type === 'time') {
                const seconds = timestampToSeconds(part.value);
                const youtubeUrl = `https://www.youtube.com/watch?v=${episode.youtubeId}&t=${seconds}`;
                return (
                  <a
                    key={j}
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Open YouTube at ${part.value}`}
                    className="mx-1 cursor-pointer font-semibold text-brand-mint underline transition-colors hover:text-brand-mint-dark"
                    style={{ padding: '0 0.15em' }}
                  >
                    {part.value}
                  </a>
                );
              }
              return null;
            })
            .concat(i < arr.length - 1 ? <br key={`br-${i}`} /> : null);
        })}
      </p>
    ));
  }

  if (!episode) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <MatrixBackground fullScreen />
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-brand-mint">Episode Not Found</h1>
          <p className="mb-6 text-muted-foreground">The episode you're looking for doesn't exist.</p>
          <Link to="/episodes">
            <Button className="bg-brand-mint text-black hover:bg-brand-mint-dark">Back to Episodes</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground fullScreen />

      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-border/40 bg-background/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/episodes" className="flex items-center gap-2 transition-colors hover:text-brand-mint">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-semibold">Back to Episodes</span>
              </Link>
              <Button variant="outline" size="sm" className="border-brand-mint/40 text-brand-mint hover:bg-brand-mint/10">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </header>

        {/* Episode Content */}
        <div className="mx-auto max-w-4xl px-4 py-8">
          {/* Episode Header */}
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(episode.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {episode.duration} min
              </div>
            </div>

            <h1 className="mb-4 text-4xl font-bold text-brand-mint md:text-5xl">{episode.title}</h1>

            <p className="mb-6 text-xl text-muted-foreground">{episode.description}</p>

            <div className="flex flex-wrap gap-2">
              {episode.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-brand-mint/40 text-brand-mint">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* YouTube Video */}
          <Card className="mb-8 border-brand-mint/20 bg-card/50">
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                  title={episode.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full rounded-lg"
                />
              </div>
            </CardContent>
          </Card>

          {/* Episode Description */}
          <Card className="mb-8 border-brand-mint/20 bg-card/50">
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold text-brand-mint">About This Episode</h2>
              <div className="prose prose-invert max-w-none">
                <div className="prose prose-invert max-w-none text-xl text-muted-foreground">{renderDescription(episode.fullDescription)}</div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="border-brand-mint/20 bg-card/50">
            <CardContent className="p-6 text-center">
              <h3 className="mb-2 text-xl font-semibold text-brand-mint">Enjoyed this episode?</h3>
              <p className="mb-4 text-muted-foreground">Subscribe to Devtherapy for more conversations about code, culture, and mental health in tech.</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-brand-mint text-black hover:bg-brand-mint-dark">
                    <Play className="mr-2 h-4 w-4" />
                    Subscribe on YouTube
                  </Button>
                </a>
                <Link to="/episodes">
                  <Button variant="outline" className="w-full border-brand-mint/40 text-brand-mint hover:bg-brand-mint/10 sm:w-auto">
                    Browse More Episodes
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetail;

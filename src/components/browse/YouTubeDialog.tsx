import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { EpisodeBasicInfo } from '@/server/data/episodes/episodes.types';

type YouTubeDialogProps = {
  episode: EpisodeBasicInfo;
  /** Seconds into the episode; null keeps the dialog closed. */
  start: number | null;
  onClose: () => void;
};

/** Plays an episode on the page, from the start or from a chapter. */
export const YouTubeDialog = ({ episode, start, onClose }: YouTubeDialogProps) => (
  <Dialog open={start !== null} onOpenChange={(open) => !open && onClose()}>
    {/* The close button sits above the video, clear of YouTube's own controls. */}
    <DialogContent className="max-w-5xl border-white/10 bg-black p-0 [&>button]:-top-9 [&>button]:right-0 [&>button]:!bg-transparent [&>button]:!text-white">

      <DialogTitle className="sr-only">{episode.title}</DialogTitle>
      {start !== null && (
        <iframe
          src={`https://www.youtube.com/embed/${episode.youtubeId}?autoplay=1&start=${start}`}
          title={episode.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-video w-full"
        />
      )}
    </DialogContent>
  </Dialog>
);

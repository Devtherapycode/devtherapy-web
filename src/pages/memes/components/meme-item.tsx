import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { MemeItem as MemeItemType } from '@/server/data/memes/memes.types';
import { useMemeStore } from '@/stores/memeStore';
import { Play, Share2 } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface MemeItemProps {
  meme: MemeItemType;
  onShare: (filename: string) => void;
  onLoad: () => void;
  index: number;
}

const ESTIMATED_ASPECT_RATIOS = {
  image: 1, // 1:1 ratio for meme images
  video: 16 / 9, // 16:9 ratio for videos
} as const;

export const MemeItem = ({ meme, onShare, onLoad, index }: MemeItemProps) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  const setSelectedMeme = useMemeStore((state) => state.setSelectedMeme);
  const cardRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLImageElement | HTMLVideoElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInViewport(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.1,
      },
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  // Handle media load
  const handleMediaLoad = useCallback(() => {
    if (mediaRef.current) {
      const media = mediaRef.current;
      setDimensions({
        width: media instanceof HTMLVideoElement ? media.videoWidth : media.naturalWidth,
        height: media instanceof HTMLVideoElement ? media.videoHeight : media.naturalHeight,
      });
    }
    setIsLoading(false);
    setHasError(false);
    onLoad(); // Trigger layout recalculation
  }, [onLoad]);

  const handleMediaError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    onLoad(); // Still trigger layout update
  }, [onLoad]);

  const handleMemeClick = useCallback(() => {
    setSelectedMeme(meme);
  }, [meme, setSelectedMeme]);

  const handleMemeKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setSelectedMeme(meme);
      }
    },
    [meme, setSelectedMeme],
  );

  const handleShareClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onShare(meme.filename);
    },
    [meme.filename, onShare],
  );

  const handleShareKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        onShare(meme.filename);
      }
    },
    [meme.filename, onShare],
  );

  // Calculate estimated height for skeleton
  const estimatedHeight = 200; // Base width assumption
  const aspectRatio = ESTIMATED_ASPECT_RATIOS[meme.type];
  const skeletonHeight = estimatedHeight / aspectRatio;

  return (
    <Card
      ref={cardRef}
      className="hover-lift group cursor-pointer border-brand-mint/20 bg-card/50 transition-all duration-300 hover:border-brand-mint/40"
      onClick={handleMemeClick}
      onKeyDown={handleMemeKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Open ${meme.type}: ${meme.filename}`}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-lg">
          {!isInViewport || isLoading ? (
            // Show skeleton while not in viewport or loading
            <div className="relative">
              <Skeleton className="w-full animate-pulse" style={{ height: `${skeletonHeight}px` }} />
              {isInViewport && (
                // Hidden media element to trigger loading
                <div className="pointer-events-none absolute inset-0 opacity-0">
                  {meme.type === 'video' ? (
                    <video
                      ref={mediaRef as React.RefObject<HTMLVideoElement>}
                      src={meme.url}
                      onLoadedMetadata={handleMediaLoad}
                      onError={handleMediaError}
                      muted
                      preload="metadata"
                      className="h-auto w-full"
                    />
                  ) : (
                    <img
                      ref={mediaRef as React.RefObject<HTMLImageElement>}
                      src={meme.url}
                      onLoad={handleMediaLoad}
                      onError={handleMediaError}
                      alt={meme.filename}
                      className="h-auto w-full"
                    />
                  )}
                </div>
              )}
            </div>
          ) : hasError ? (
            // Error state
            <div className="flex items-center justify-center bg-muted text-muted-foreground" style={{ height: `${skeletonHeight}px` }}>
              <span className="text-sm">Failed to load {meme.type}</span>
            </div>
          ) : (
            // Loaded media
            <>
              {meme.type === 'video' ? (
                <div className="relative">
                  <video src={meme.url} className="h-auto w-full" muted preload="metadata" aria-label={`Video preview: ${meme.filename}`} />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-50 transition-opacity group-hover:opacity-100">
                    <div className="rounded-full bg-brand-mint/90 p-3" aria-hidden="true">
                      <Play className="h-6 w-6 fill-current text-black" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <img src={meme.url} alt={meme.filename} className="h-auto w-full" />
                  <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 border-brand-mint/40 bg-background/80 p-0 hover:bg-brand-mint/10"
                      onClick={handleShareClick}
                      onKeyDown={handleShareKeyDown}
                      aria-label={`Share ${meme.filename}`}
                    >
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

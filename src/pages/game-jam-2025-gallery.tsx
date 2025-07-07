import { BackToHomeHeader } from '@/components/back-to-home-header';
import MatrixBackground from '@/components/MatrixBackground';
import { gameJam2025ImagesData } from '@/server/data/game-jam-2025/image.data';
import { MemeFilters } from '@/server/data/memes/memes.types';
import { useMemeStore } from '@/stores/memeStore';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { MemeModal } from './memes/components/meme-modal';
import { MemesMasonryGrid } from './memes/components/memes-masonry-grid';
import { useMasonryLayout } from './memes/hooks/use-masonry-layout';
import { buildShareableUrl, processMemesData } from './memes/utils/meme-utils';

export const GameJam2025Gallery = () => {
  const [searchParams] = useSearchParams();
  const [activeFilters, setActiveFilters] = useState<MemeFilters>(['image', 'video']);

  const setSelectedMeme = useMemeStore((state) => state.setSelectedMeme);

  const processedMemeItems = processMemesData(gameJam2025ImagesData);
  const filteredMemeItems = processedMemeItems.filter((meme) => activeFilters.includes(meme.type));
  const { containerRef, updateLayout } = useMasonryLayout(filteredMemeItems.length);

  const initializeFromUrlParams = useCallback(() => {
    const selectedParam = searchParams.get('selected');
    const filtersParam = searchParams.get('filters');

    if (selectedParam) {
      const memeItem = processedMemeItems.find((meme) => meme.filename === selectedParam);
      if (memeItem) {
        setSelectedMeme(memeItem);
      }
    }

    if (filtersParam) {
      const filterArray = filtersParam.split(',') as MemeFilters;
      setActiveFilters(filterArray);
    }
  }, [searchParams, processedMemeItems, setSelectedMeme]);

  const handleMemeShare = useCallback(async (filename: string) => {
    const currentUrl = window.location.href;
    const [baseUrl, existingParams] = currentUrl.split('?');
    const shareableUrl = buildShareableUrl(baseUrl, existingParams || '', filename);

    try {
      await navigator.clipboard.writeText(shareableUrl);
      toast.success('Link copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy link');
    }
  }, []);

  // Initialize from URL params on mount
  useEffect(() => {
    initializeFromUrlParams();
  }, [initializeFromUrlParams]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground fullScreen />

      <div className="relative z-10">
        <BackToHomeHeader title="Game Jam" />

        <MemesMasonryGrid
          className="pt-16"
          filteredMemes={filteredMemeItems}
          onMemeShare={handleMemeShare}
          masonryRef={containerRef}
          onItemLoad={updateLayout}
        />
      </div>

      <MemeModal filteredMemes={filteredMemeItems} onShareMeme={handleMemeShare} />
    </div>
  );
};

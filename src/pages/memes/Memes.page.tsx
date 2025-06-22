import MatrixBackground from '@/components/MatrixBackground';
import { memes } from '@/server/data/memes/memes.data';
import { MemeFilters } from '@/server/data/memes/memes.types';
import { useMemeStore } from '@/stores/memeStore';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { MemeModal } from './components/meme-modal';
import { MemesFilters } from './components/memes-filters';
import { MemesHeader } from './components/memes-header';
import { MemesMasonryGrid } from './components/memes-masonry-grid';
import { useMasonryLayout } from './hooks/use-masonry-layout';
import { buildShareableUrl, processMemesData, updateUrlParams } from './utils/meme-utils';

const Memes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilters, setActiveFilters] = useState<MemeFilters>(['image', 'video']);

  const setSelectedMeme = useMemeStore((state) => state.setSelectedMeme);
  const setUrlUpdateCallback = useMemeStore((state) => state.setUrlUpdateCallback);

  const processedMemeItems = processMemesData(memes);
  const filteredMemeItems = processedMemeItems.filter((meme) => activeFilters.includes(meme.type));
  const { containerRef, updateLayout } = useMasonryLayout(filteredMemeItems.length);

  // Set up URL synchronization callback
  const handleUrlUpdate = useCallback(
    (filename: string | null) => {
      const updatedParams = updateUrlParams(searchParams, {
        selected: filename,
      });
      setSearchParams(updatedParams);
    },
    [searchParams, setSearchParams],
  );

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

  const handleFiltersChange = useCallback(
    (newFilters: MemeFilters) => {
      setActiveFilters(newFilters);

      const updatedParams = updateUrlParams(searchParams, {
        filters: newFilters.length > 0 ? newFilters.join(',') : null,
      });
      setSearchParams(updatedParams);
    },
    [searchParams, setSearchParams],
  );

  const handleMemeShare = useCallback(async (filename: string) => {
    const currentUrl = window.location.href;
    const [baseUrl, existingParams] = currentUrl.split('?');
    const shareableUrl = buildShareableUrl(baseUrl, existingParams || '', filename);

    try {
      await navigator.clipboard.writeText(shareableUrl);
      toast.success('Meme link copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy link');
    }
  }, []);

  // Set up URL synchronization callback
  useEffect(() => {
    setUrlUpdateCallback(handleUrlUpdate);
  }, [setUrlUpdateCallback, handleUrlUpdate]);

  // Initialize from URL params on mount
  useEffect(() => {
    initializeFromUrlParams();
  }, [initializeFromUrlParams]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground fullScreen />

      <div className="relative z-10">
        <MemesHeader />

        <MemesFilters
          filteredMemesCount={filteredMemeItems.length}
          activeFilters={activeFilters}
          onFiltersChange={handleFiltersChange}
          updateLayout={updateLayout}
        />

        <MemesMasonryGrid filteredMemes={filteredMemeItems} onMemeShare={handleMemeShare} masonryRef={containerRef} onItemLoad={updateLayout} />
      </div>

      <MemeModal filteredMemes={filteredMemeItems} onShareMeme={handleMemeShare} />
    </div>
  );
};

export default Memes;

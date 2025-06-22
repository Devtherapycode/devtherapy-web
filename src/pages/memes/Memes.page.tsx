import MatrixBackground from '@/components/MatrixBackground';
import { memes } from '@/server/data/memes/memes.data';
import { MemeFilters } from '@/server/data/memes/memes.types';
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
  const [selectedMemeFilename, setSelectedMemeFilename] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<MemeFilters>(['image', 'video']);

  const processedMemeItems = processMemesData(memes);
  const filteredMemeItems = processedMemeItems.filter((meme) => activeFilters.includes(meme.type));
  const { containerRef, updateLayout } = useMasonryLayout(filteredMemeItems.length);

  const selectedMemeItem = selectedMemeFilename ? processedMemeItems.find((meme) => meme.filename === selectedMemeFilename) || null : null;

  const initializeFromUrlParams = useCallback(() => {
    const selectedParam = searchParams.get('selected');
    const filtersParam = searchParams.get('filters');

    if (selectedParam) {
      setSelectedMemeFilename(selectedParam);
    }

    if (filtersParam) {
      const filterArray = filtersParam.split(',') as MemeFilters;
      setActiveFilters(filterArray);
    }
  }, [searchParams]);

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

  const handleMemeOpen = useCallback(
    (filename: string) => {
      setSelectedMemeFilename(filename);

      const updatedParams = updateUrlParams(searchParams, {
        selected: filename,
      });
      setSearchParams(updatedParams);
    },
    [searchParams, setSearchParams],
  );

  const handleMemeClose = useCallback(() => {
    setSelectedMemeFilename(null);

    const updatedParams = updateUrlParams(searchParams, {
      selected: null,
    });
    setSearchParams(updatedParams);
  }, [searchParams, setSearchParams]);

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

        <MemesMasonryGrid filteredMemes={filteredMemeItems} onMemeOpen={handleMemeOpen} onMemeShare={handleMemeShare} masonryRef={containerRef} />
      </div>

      <MemeModal
        selectedMeme={selectedMemeItem}
        onCloseMeme={handleMemeClose}
        filteredMemes={filteredMemeItems}
        onShareMeme={handleMemeShare}
        onOpenMeme={handleMemeOpen}
      />
    </div>
  );
};

export default Memes;

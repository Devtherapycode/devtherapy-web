import MatrixBackground from '@/components/MatrixBackground';
import { memes } from '@/server/data/memes/memes.data';
import { MemeItem, MemeType } from '@/server/data/memes/memes.types';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { MemeModal } from './components/meme-modal';
import { MemesFilters } from './components/memes-filters';
import { MemesHeader } from './components/memes-header';
import { MemesMasonryGrid } from './components/memes-masonry-grid';

const Memes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedMeme, setSelectedMeme] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<MemeType[]>(['image', 'video']);
  const masonryRef = useRef<HTMLDivElement>(null);

  // Process memes data
  const memeItems: MemeItem[] = memes.map((memeUrl) => {
    const filename = memeUrl.split('/').pop()?.split('.')[0] || '';
    const extension = memeUrl.split('.').pop()?.toLowerCase();
    const type: MemeType = ['mp4', 'webm', 'mov'].includes(extension || '') ? 'video' : 'image';

    return {
      url: memeUrl,
      filename,
      type,
    };
  });

  // Filter memes based on active filters
  const filteredMemes = memeItems.filter((meme) => activeFilters.includes(meme.type));

  // Initialize from URL params
  useEffect(() => {
    const selected = searchParams.get('selected');
    const filters = searchParams.get('filters');

    if (selected) {
      setSelectedMeme(selected);
    }

    if (filters) {
      const filterArray = filters.split(',') as MemeType[];
      setActiveFilters(filterArray);
    }
  }, [searchParams]);

  // Masonry layout function
  const updateMasonryLayout = useCallback(() => {
    if (!masonryRef.current) return;

    const container = masonryRef.current;
    const items = Array.from(container.children) as HTMLElement[];
    const gap = 16;
    const containerWidth = container.offsetWidth;

    // Determine number of columns based on screen width
    let columns = 4;
    if (containerWidth < 768)
      columns = 2; // mobile
    else if (containerWidth < 1024) columns = 3; // tablet

    const columnWidth = (containerWidth - gap * (columns - 1)) / columns;
    const columnHeights = new Array(columns).fill(0);

    items.forEach((item, index) => {
      if (index < columns) {
        // First row
        item.style.position = 'absolute';
        item.style.left = `${index * (columnWidth + gap)}px`;
        item.style.top = '0px';
        item.style.width = `${columnWidth}px`;

        // Wait for image/video to load to get actual height
        const img = item.querySelector('img, video') as HTMLImageElement | HTMLVideoElement;
        if (img) {
          img.onload = () => updateMasonryLayout();
        }

        columnHeights[index] = item.offsetHeight + gap;
      } else {
        // Find shortest column
        const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));

        item.style.position = 'absolute';
        item.style.left = `${shortestColumn * (columnWidth + gap)}px`;
        item.style.top = `${columnHeights[shortestColumn]}px`;
        item.style.width = `${columnWidth}px`;

        columnHeights[shortestColumn] += item.offsetHeight + gap;
      }
    });

    // Set container height
    container.style.height = `${Math.max(...columnHeights)}px`;
  }, []);

  // Update layout when filters change
  useEffect(() => {
    const timer = setTimeout(() => {
      updateMasonryLayout();
    }, 100);

    return () => clearTimeout(timer);
  }, [filteredMemes, updateMasonryLayout]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => updateMasonryLayout();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateMasonryLayout]);

  // Share meme
  const shareMeme = async (filename: string) => {
    const href = window.location.href;
    const [url, paramsString] = href.split('?');
    const params = new URLSearchParams(paramsString ?? searchParams ?? '');
    params.set('selected', filename);
    const newUrl = `${url}?${params.toString()}`;
    try {
      await navigator.clipboard.writeText(newUrl);
      toast.success('Meme link copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  const openMeme = (filename: string) => {
    setSelectedMeme(filename);
    const params = new URLSearchParams(searchParams);
    params.set('selected', filename);
    setSearchParams(params);
  };

  // Get current meme for modal
  const currentMeme = selectedMeme ? memeItems.find((meme) => meme.filename === selectedMeme) : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground fullScreen />

      <div className="relative z-10">
        {/* Header */}
        <MemesHeader />

        {/* Filters */}
        <MemesFilters filteredMemesLength={filteredMemes.length} activeFilters={activeFilters} setActiveFilters={setActiveFilters} />

        {/* Masonry Grid */}
        <MemesMasonryGrid filteredMemes={filteredMemes} openMeme={openMeme} shareMeme={shareMeme} masonryRef={masonryRef} />
      </div>

      <MemeModal selectedMeme={currentMeme} setSelectedMeme={setSelectedMeme} filteredMemes={filteredMemes} shareMeme={shareMeme} openMeme={openMeme} />
    </div>
  );
};

export default Memes;

import MatrixBackground from '@/components/MatrixBackground';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { memes } from '@/server/data/memes/memes.data';
import { ArrowLeft, ChevronLeft, ChevronRight, Filter, Play, Share2, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';

type MemeType = 'image' | 'video';
type MemeItem = {
  url: string;
  filename: string;
  type: MemeType;
};

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

  // Toggle filter
  const toggleFilter = (type: MemeType) => {
    const newFilters = activeFilters.includes(type) ? activeFilters.filter((f) => f !== type) : [...activeFilters, type];

    setActiveFilters(newFilters);

    // Update URL
    const params = new URLSearchParams(searchParams);
    params.set('filters', newFilters.join(','));
    setSearchParams(params);
  };

  // Open meme modal
  const openMeme = (filename: string) => {
    setSelectedMeme(filename);
    const params = new URLSearchParams(searchParams);
    params.set('selected', filename);
    setSearchParams(params);
  };

  // Close modal
  const closeMeme = () => {
    setSelectedMeme(null);
    const params = new URLSearchParams(searchParams);
    params.delete('selected');
    setSearchParams(params);
  };

  // Navigate between memes
  const navigateMeme = (direction: 'prev' | 'next') => {
    if (!selectedMeme) return;

    const currentIndex = filteredMemes.findIndex((meme) => meme.filename === selectedMeme);
    if (currentIndex === -1) return;

    const newIndex = direction === 'prev' ? (currentIndex - 1 + filteredMemes.length) % filteredMemes.length : (currentIndex + 1) % filteredMemes.length;

    const newMeme = filteredMemes[newIndex];
    openMeme(newMeme.filename);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMeme) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateMeme('prev');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateMeme('next');
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeMeme();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMeme, filteredMemes]);

  // Share meme
  const shareMeme = async (filename: string) => {
    const url = `${window.location.origin}/memes?selected=${filename}`;
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Meme link copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  // Get current meme for modal
  const currentMeme = selectedMeme ? memeItems.find((meme) => meme.filename === selectedMeme) : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground fullScreen />

      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-border/40 bg-background/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 transition-colors hover:text-brand-mint">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-semibold">Back to Home</span>
              </Link>
              <h1 className="text-2xl font-bold text-brand-mint">Meme Gallery</h1>
              <div className="w-24"></div> {/* Spacer for balance */}
            </div>
          </div>
        </header>

        {/* Filters */}
        <section className="px-4 py-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-brand-mint" />
                <span className="text-sm font-medium">Filter by type:</span>
              </div>
              <div className="flex gap-2">
                <Badge
                  variant={activeFilters.includes('image') ? 'default' : 'outline'}
                  className={`cursor-pointer transition-colors ${
                    activeFilters.includes('image') ? 'bg-brand-mint text-black hover:bg-brand-mint-dark' : 'hover:border-brand-mint hover:bg-brand-mint/10'
                  }`}
                  onClick={() => toggleFilter('image')}
                >
                  Images
                </Badge>
                <Badge
                  variant={activeFilters.includes('video') ? 'default' : 'outline'}
                  className={`cursor-pointer transition-colors ${
                    activeFilters.includes('video') ? 'bg-brand-mint text-black hover:bg-brand-mint-dark' : 'hover:border-brand-mint hover:bg-brand-mint/10'
                  }`}
                  onClick={() => toggleFilter('video')}
                >
                  Videos
                </Badge>
              </div>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Showing {filteredMemes.length} meme{filteredMemes.length !== 1 ? 's' : ''}
            </div>
          </div>
        </section>

        {/* Masonry Grid */}
        <section className="px-4 pb-16">
          <div className="mx-auto max-w-7xl">
            <div ref={masonryRef} className="relative">
              {filteredMemes.map((meme) => (
                <Card
                  key={meme.filename}
                  className="hover-lift group cursor-pointer border-brand-mint/20 bg-card/50 transition-all duration-300 hover:border-brand-mint/40"
                  onClick={() => openMeme(meme.filename)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-lg">
                      {meme.type === 'video' ? (
                        <div className="relative">
                          <video src={meme.url} className="h-auto w-full" muted preload="metadata" />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                            <div className="rounded-full bg-brand-mint/90 p-3">
                              <Play className="h-6 w-6 fill-current text-black" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative">
                          <img src={meme.url} alt={meme.filename} className="h-auto w-full" loading="eager" />
                          <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 w-8 border-brand-mint/40 bg-background/80 p-0 hover:bg-brand-mint/10"
                              onClick={(e) => {
                                e.stopPropagation();
                                shareMeme(meme.filename);
                              }}
                            >
                              <Share2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedMeme} onOpenChange={closeMeme}>
        <DialogContent className="max-h-[90vh] max-w-4xl border-brand-mint/20 bg-background p-0">
          {currentMeme && (
            <div className="relative">
              {/* Close button */}
              <Button
                size="sm"
                variant="outline"
                className="absolute right-4 top-4 z-10 h-8 w-8 border-brand-mint/40 bg-background/80 p-0 hover:bg-brand-mint/10"
                onClick={closeMeme}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Share button */}
              <Button
                size="sm"
                variant="outline"
                className="absolute right-16 top-4 z-10 h-8 w-8 border-brand-mint/40 bg-background/80 p-0 hover:bg-brand-mint/10"
                onClick={() => shareMeme(currentMeme.filename)}
              >
                <Share2 className="h-4 w-4" />
              </Button>

              {/* Navigation buttons */}
              <Button
                size="sm"
                variant="outline"
                className="absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 border-brand-mint/40 bg-background/80 p-0 hover:bg-brand-mint/10"
                onClick={() => navigateMeme('prev')}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 border-brand-mint/40 bg-background/80 p-0 hover:bg-brand-mint/10"
                onClick={() => navigateMeme('next')}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              {/* Media content */}
              <div className="overflow-hidden rounded-lg">
                {currentMeme.type === 'video' ? (
                  <video src={currentMeme.url} className="h-auto max-h-[80vh] w-full" controls autoPlay muted={false} />
                ) : (
                  <img src={currentMeme.url} alt={currentMeme.filename} className="h-auto max-h-[80vh] w-full object-contain" />
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Memes;

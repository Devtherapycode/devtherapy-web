import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { MemeItem } from '@/server/data/memes/memes.types';
import { ChevronLeft, ChevronRight, Share2, X } from 'lucide-react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

type MemeModalProps = {
  selectedMeme: MemeItem;
  setSelectedMeme: (meme: string | null) => void;
  filteredMemes: MemeItem[];
  shareMeme: (filename: string) => void;
  openMeme: (filename: string) => void;
};

export const MemeModal = ({ selectedMeme, setSelectedMeme, filteredMemes, shareMeme, openMeme }: MemeModalProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

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

    const currentIndex = filteredMemes.findIndex((meme) => meme.filename === selectedMeme.filename);
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

  return (
    <Dialog open={!!selectedMeme} onOpenChange={closeMeme}>
      <DialogContent noCloseButton className="max-h-[90vh] max-w-4xl border-brand-mint/20 bg-background p-0">
        {selectedMeme && (
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
              onClick={() => shareMeme(selectedMeme.filename)}
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
              {selectedMeme.type === 'video' ? (
                <video src={selectedMeme.url} className="h-auto max-h-[80vh] w-full" controls autoPlay muted={false} />
              ) : (
                <img src={selectedMeme.url} alt={selectedMeme.filename} className="h-auto max-h-[80vh] w-full object-contain" />
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

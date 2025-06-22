import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { MemeModalProps } from '@/server/data/memes/memes.types';
import { ChevronLeft, ChevronRight, Share2, X } from 'lucide-react';
import { useEffect } from 'react';

export const MemeModal = ({ selectedMeme, onCloseMeme, filteredMemes, onShareMeme, onOpenMeme }: MemeModalProps) => {
  const isModalOpen = !!selectedMeme;

  const handleNavigateMeme = (direction: 'prev' | 'next') => {
    if (!selectedMeme) return;

    const currentIndex = filteredMemes.findIndex((meme) => meme.filename === selectedMeme.filename);
    if (currentIndex === -1) return;

    const nextIndex = direction === 'prev' ? (currentIndex - 1 + filteredMemes.length) % filteredMemes.length : (currentIndex + 1) % filteredMemes.length;

    const nextMeme = filteredMemes[nextIndex];
    onOpenMeme(nextMeme.filename);
  };

  const handlePreviousMeme = () => handleNavigateMeme('prev');
  const handleNextMeme = () => handleNavigateMeme('next');

  const handleShareClick = () => {
    if (!selectedMeme) return;
    onShareMeme(selectedMeme.filename);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          handleNavigateMeme('prev');
          break;
        case 'ArrowRight':
          e.preventDefault();
          handleNavigateMeme('next');
          break;
        case 'Escape':
          e.preventDefault();
          onCloseMeme();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedMeme, filteredMemes, onCloseMeme, onOpenMeme]);

  if (!selectedMeme) return null;

  const isVideo = selectedMeme.type === 'video';
  const mediaAltText = `${selectedMeme.type}: ${selectedMeme.filename}`;

  return (
    <Dialog open={isModalOpen} onOpenChange={onCloseMeme}>
      <DialogContent noCloseButton className="max-h-[90vh] max-w-4xl border-brand-mint/20 bg-background p-0" aria-label={`Viewing ${mediaAltText}`}>
        <div className="relative">
          {/* Close button */}
          <Button
            size="sm"
            variant="outline"
            className="absolute right-4 top-4 z-10 h-8 w-8 border-brand-mint/40 bg-background/80 p-0 hover:bg-brand-mint/10"
            onClick={onCloseMeme}
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Share button */}
          <Button
            size="sm"
            variant="outline"
            className="absolute right-16 top-4 z-10 h-8 w-8 border-brand-mint/40 bg-background/80 p-0 hover:bg-brand-mint/10"
            onClick={handleShareClick}
            aria-label={`Share ${selectedMeme.filename}`}
          >
            <Share2 className="h-4 w-4" />
          </Button>

          {/* Navigation buttons */}
          <Button
            size="sm"
            variant="outline"
            className="absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 border-brand-mint/40 bg-background/80 p-0 hover:bg-brand-mint/10"
            onClick={handlePreviousMeme}
            aria-label="Previous meme"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            size="sm"
            variant="outline"
            className="absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 border-brand-mint/40 bg-background/80 p-0 hover:bg-brand-mint/10"
            onClick={handleNextMeme}
            aria-label="Next meme"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Media content */}
          <div className="overflow-hidden rounded-lg">
            {isVideo ? (
              <video src={selectedMeme.url} className="h-auto max-h-[80vh] w-full" controls autoPlay muted={false} aria-label={mediaAltText} />
            ) : (
              <img src={selectedMeme.url} alt={selectedMeme.filename} className="h-auto max-h-[80vh] w-full object-contain" />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

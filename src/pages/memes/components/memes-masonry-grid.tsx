import { cn } from '@/lib/utils';
import { MemesMasonryGridProps } from '@/server/data/memes/memes.types';
import { useCallback } from 'react';
import { MemeItem } from './meme-item';

interface OptimizedMemesMasonryGridProps extends MemesMasonryGridProps {
  onItemLoad: () => void;
  className?: string;
}

export const MemesMasonryGrid = ({ filteredMemes, onMemeShare, masonryRef, onItemLoad, className }: OptimizedMemesMasonryGridProps) => {
  const handleItemLoad = useCallback(() => {
    onItemLoad();
  }, [onItemLoad]);

  return (
    <section className={cn('px-4 pb-16', className)}>
      <div className="mx-auto max-w-7xl">
        <div ref={masonryRef} className="relative">
          {filteredMemes.map((meme) => (
            <MemeItem key={meme.filename} meme={meme} onShare={onMemeShare} onLoad={handleItemLoad} />
          ))}
        </div>
      </div>
    </section>
  );
};

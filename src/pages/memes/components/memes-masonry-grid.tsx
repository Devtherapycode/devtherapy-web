import { MemesMasonryGridProps } from '@/server/data/memes/memes.types';
import { useCallback } from 'react';
import { MemeItem } from './meme-item';

interface OptimizedMemesMasonryGridProps extends MemesMasonryGridProps {
  onItemLoad: () => void;
}

export const MemesMasonryGrid = ({ filteredMemes, onMemeShare, masonryRef, onItemLoad }: OptimizedMemesMasonryGridProps) => {
  const handleItemLoad = useCallback(() => {
    onItemLoad();
  }, [onItemLoad]);

  return (
    <section className="px-4 pb-16">
      <div className="mx-auto max-w-7xl">
        <div ref={masonryRef} className="relative">
          {filteredMemes.map((meme, index) => (
            <MemeItem key={meme.filename} meme={meme} onShare={onMemeShare} onLoad={handleItemLoad} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

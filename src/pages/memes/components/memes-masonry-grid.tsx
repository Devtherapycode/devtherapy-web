import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MemeItem } from '@/server/data/memes/memes.types';
import { Play, Share2 } from 'lucide-react';

type MemesMasonryGridProps = {
  filteredMemes: MemeItem[];
  openMeme: (filename: string) => void;
  shareMeme: (filename: string) => void;
  masonryRef: React.RefObject<HTMLDivElement>;
};

export const MemesMasonryGrid = ({ filteredMemes, openMeme, shareMeme, masonryRef }: MemesMasonryGridProps) => {
  return (
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
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-50 transition-opacity group-hover:opacity-100">
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
  );
};

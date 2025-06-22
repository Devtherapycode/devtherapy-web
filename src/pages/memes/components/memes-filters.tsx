import { Badge } from '@/components/ui/badge';
import { MemesFiltersProps } from '@/server/data/memes/memes.types';
import { Filter } from 'lucide-react';

export const MemesFilters = ({ filteredMemesCount, activeFilters, onFiltersChange }: MemesFiltersProps) => {
  const handleFilterToggle = (type: 'image' | 'video') => {
    const newFilters = activeFilters.includes(type) ? activeFilters.filter((filter) => filter !== type) : [...activeFilters, type];

    onFiltersChange(newFilters);
  };

  const isImageFilterActive = activeFilters.includes('image');
  const isVideoFilterActive = activeFilters.includes('video');
  const memesCountText = filteredMemesCount === 1 ? 'meme' : 'memes';

  return (
    <section className="px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-brand-mint" />
            <span className="text-sm font-medium">Filter by type:</span>
          </div>
          <div className="flex gap-2">
            <Badge
              variant={isImageFilterActive ? 'default' : 'outline'}
              className={`cursor-pointer transition-colors ${
                isImageFilterActive ? 'bg-brand-mint text-black hover:bg-brand-mint-dark' : 'hover:border-brand-mint hover:bg-brand-mint/10'
              }`}
              onClick={() => handleFilterToggle('image')}
              role="button"
              tabIndex={0}
              aria-label="Toggle image filter"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleFilterToggle('image');
                }
              }}
            >
              Images
            </Badge>
            <Badge
              variant={isVideoFilterActive ? 'default' : 'outline'}
              className={`cursor-pointer transition-colors ${
                isVideoFilterActive ? 'bg-brand-mint text-black hover:bg-brand-mint-dark' : 'hover:border-brand-mint hover:bg-brand-mint/10'
              }`}
              onClick={() => handleFilterToggle('video')}
              role="button"
              tabIndex={0}
              aria-label="Toggle video filter"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleFilterToggle('video');
                }
              }}
            >
              Videos
            </Badge>
          </div>
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          Showing {filteredMemesCount} {memesCountText}
        </div>
      </div>
    </section>
  );
};

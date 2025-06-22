import { Badge } from '@/components/ui/badge';
import { MemeType } from '@/server/data/memes/memes.types';
import { Filter } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

type MemesFiltersProps = {
  filteredMemesLength: number;
  activeFilters: MemeType[];
  setActiveFilters: (filters: MemeType[]) => void;
};

export const MemesFilters = ({ filteredMemesLength, activeFilters, setActiveFilters }: MemesFiltersProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Toggle filter
  const toggleFilter = (type: MemeType) => {
    const newFilters = activeFilters.includes(type) ? activeFilters.filter((f) => f !== type) : [...activeFilters, type];

    setActiveFilters(newFilters);

    // Update URL
    const params = new URLSearchParams(searchParams);
    params.set('filters', newFilters.join(','));
    setSearchParams(params);
  };

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
          Showing {filteredMemesLength} meme{filteredMemesLength !== 1 ? 's' : ''}
        </div>
      </div>
    </section>
  );
};

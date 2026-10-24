import { BackToHomeHeader } from '@/components/back-to-home-header';
import { EpisodeCard } from '@/components/browse/EpisodeCard';
import { episodeViews } from '@/lib/episodes';
import { cn } from '@/lib/utils';
import { allEpisodes } from '@/server/data/episodes/episodes.data';
import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';

const SORTS = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'views', label: 'Most watched' },
] as const;

type Sort = (typeof SORTS)[number]['value'];

const Episodes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<Sort>('newest');

  // The 40 most used tags, most used first
  const allTags = useMemo(() => {
    const tagCounts = new Map<string, number>();
    allEpisodes.forEach((episode) => {
      episode.tags.forEach((tag) => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });
    return Array.from(tagCounts.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, 40)
      .map(([tag]) => tag);
  }, []);

  const filteredEpisodes = useMemo(() => {
    const term = searchTerm.toLowerCase();
    const filtered = allEpisodes.filter((episode) => {
      const matchesSearch =
        episode.title.toLowerCase().includes(term) || episode.description.toLowerCase().includes(term) || episode.tags.some((tag) => tag.toLowerCase().includes(term));
      const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => episode.tags.includes(tag));
      return matchesSearch && matchesTags;
    });

    filtered.sort((a, b) => {
      if (sortOrder === 'views') return episodeViews(b) - episodeViews(a);
      const difference = new Date(b.date).getTime() - new Date(a.date).getTime();
      return sortOrder === 'newest' ? difference : -difference;
    });

    return filtered;
  }, [searchTerm, selectedTags, sortOrder]);

  const handleToggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  const filtering = searchTerm !== '' || selectedTags.length > 0;

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-foreground">
      <BackToHomeHeader title="Episodes" />

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 pb-24 pt-8 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Search episodes</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8C8C8C]" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by title, topic or guest"
              className="h-12 w-full rounded border border-white/10 bg-[#141414] pl-12 pr-4 text-base text-white placeholder:text-[#777] focus:border-brand-mint/60 focus:outline-none"
            />
          </label>
          <div role="radiogroup" aria-label="Sort episodes" className="flex h-12 shrink-0 rounded border border-white/10 bg-[#141414] p-1">
            {SORTS.map((sort) => (
              <button
                key={sort.value}
                type="button"
                role="radio"
                aria-checked={sortOrder === sort.value}
                onClick={() => setSortOrder(sort.value)}
                className={cn(
                  'flex-1 whitespace-nowrap rounded-sm px-4 text-sm font-semibold transition-colors duration-150',
                  sortOrder === sort.value ? 'bg-white text-[#0A0A0A]' : 'text-[#BCBCBC] hover:text-white',
                )}
              >
                {sort.label}
              </button>
            ))}
          </div>
        </div>

        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:flex-wrap md:px-0">
          {allTags.map((tag) => {
            const selected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={selected}
                onClick={() => handleToggleTag(tag)}
                className={cn(
                  'shrink-0 rounded-full border px-3 py-1 text-[13px] font-medium transition-colors duration-150 active:scale-[0.97]',
                  selected ? 'border-brand-mint bg-brand-mint text-[#0A0A0A]' : 'border-white/15 text-[#D0D0D0] hover:border-white/40',
                )}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between font-mono text-xs text-[#8C8C8C]">
          <span>
            {filteredEpisodes.length} episode{filteredEpisodes.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
          </span>
          {filtering && (
            <button type="button" onClick={handleClearFilters} className="flex items-center gap-1 text-[#BCBCBC] hover:text-white">
              <X className="h-3.5 w-3.5" />
              Clear filters
            </button>
          )}
        </div>

        {filteredEpisodes.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 py-20 text-center">
            <span className="font-mono text-xs font-semibold tracking-[0.24em] text-crt-orange">NO SIGNAL</span>
            <h2 className="text-2xl font-bold text-white">No episodes match</h2>
            <button
              type="button"
              onClick={handleClearFilters}
              className="mt-2 rounded bg-white px-5 py-2.5 font-bold text-[#0A0A0A] transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Episodes;

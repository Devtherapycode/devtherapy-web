import { BackToHomeHeader } from '@/components/back-to-home-header';
import { EpisodeCard } from '@/components/basic/episode-card';
import MatrixBackground from '@/components/MatrixBackground';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, Search } from 'lucide-react';
import { useMemo, useState, useEffect } from 'react';
import { fetchYoutubeEpisodes } from '@/server/data/episodes/fetchYoutubeEpisodes';
import { EpisodeIdEnum } from '@/server/data/episodes/episodes.types';

interface YoutubeEpisode {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: number;
  tags: string[];
  slug: string;
  youtubeId: string;
  guest: string;
}

interface EpisodesProps {
  useCache?: boolean;
}

const Episodes = ({ useCache = true }: EpisodesProps) => {
  const [episodes, setEpisodes] = useState<YoutubeEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('newest');
  const episodesPerPage = 9;

  useEffect(() => {
    setLoading(true);
    fetchYoutubeEpisodes(useCache)
      .then((data) => setEpisodes(data))
      .finally(() => setLoading(false));
  }, [useCache]);

  // Get all unique tags
  const allTags = Array.from(new Set(episodes.flatMap((episode) => episode.tags)));

  // Filter and sort episodes
  const filteredEpisodes = useMemo(() => {
    const filtered = episodes.filter((episode) => {
      const matchesSearch =
        episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => episode.tags.includes(tag));

      return matchesSearch && matchesTags;
    });

    // Sort episodes
    filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'newest' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
    });

    return filtered;
  }, [episodes, searchTerm, selectedTags, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredEpisodes.length / episodesPerPage);
  const startIndex = (currentPage - 1) * episodesPerPage;
  const currentEpisodes = filteredEpisodes.slice(startIndex, startIndex + episodesPerPage);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground fullScreen />

      <div className="relative z-10">
        <BackToHomeHeader title="Episodes" />

        {/* Search and Filters */}
        <section className="px-4 py-8">
          <div className="mx-auto max-w-7xl">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search episodes by title, topic, or guest..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="h-12 border-brand-mint/20 bg-card/50 pl-10 focus:border-brand-mint"
              />
            </div>

            {/* Filters Row */}
            <div className="mb-6 flex flex-col gap-4 lg:flex-row">
              {/* Tags Filter */}
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <Filter className="h-4 w-4 text-brand-mint" />
                  <span className="text-sm font-medium">Filter by topic:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? 'default' : 'outline'}
                      className={`cursor-pointer transition-colors ${
                        selectedTags.includes(tag) ? 'bg-brand-mint text-black hover:bg-brand-mint-dark' : 'hover:border-brand-mint hover:bg-brand-mint/10'
                      }`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Sort and Clear */}
              <div className="flex items-end gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Sort by:</label>
                  <Select value={sortOrder} onValueChange={setSortOrder}>
                    <SelectTrigger className="w-40 border-brand-mint/20 bg-card/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {(searchTerm || selectedTags.length > 0) && (
                  <Button variant="outline" onClick={clearFilters} className="border-brand-mint/40 hover:bg-brand-mint/10">
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 text-muted-foreground">
              {loading ? 'Loading episodes...' : (
                <>Showing {filteredEpisodes.length} episode{filteredEpisodes.length !== 1 ? 's' : ''}{searchTerm && ` for "${searchTerm}"`}</>
              )}
            </div>
          </div>
        </section>

        {/* Episodes Grid */}
        <section className="px-4 pb-16">
          <div className="mx-auto max-w-7xl">
            {loading ? (
              <div className="py-16 text-center">
                <div className="mb-4 text-6xl animate-spin">⏳</div>
                <h3 className="mb-2 text-xl font-semibold">Loading episodes...</h3>
              </div>
            ) : currentEpisodes.length > 0 ? (
              <>
                <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {currentEpisodes.map((episode) => (
                    <EpisodeCard
                      key={episode.id}
                      episode={{
                        ...episode,
                        slug: episode.id as unknown as EpisodeIdEnum,
                      }}
                      tagsOn
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center">
                    <Pagination>
                      <PaginationContent>
                        {currentPage > 1 && (
                          <PaginationItem>
                            <PaginationPrevious onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} className="cursor-pointer" />
                          </PaginationItem>
                        )}

                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          const page = i + 1;
                          return (
                            <PaginationItem key={page}>
                              <PaginationLink onClick={() => setCurrentPage(page)} isActive={currentPage === page} className="cursor-pointer">
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        })}

                        {currentPage < totalPages && (
                          <PaginationItem>
                            <PaginationNext onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} className="cursor-pointer" />
                          </PaginationItem>
                        )}
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            ) : (
              <div className="py-16 text-center">
                <div className="mb-4 text-6xl">🔍</div>
                <h3 className="mb-2 text-xl font-semibold">No episodes found</h3>
                <p className="mb-4 text-muted-foreground">Try adjusting your search terms or filters</p>
                <Button onClick={clearFilters} className="bg-brand-mint text-black hover:bg-brand-mint-dark">
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Episodes;

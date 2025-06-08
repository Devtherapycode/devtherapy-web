
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Play, Calendar, Clock, Filter, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MatrixBackground from '@/components/MatrixBackground';

const Episodes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('newest');
  const episodesPerPage = 9;

  // Mock episode data
  const allEpisodes = [
    {
      id: 1,
      title: "The Debugging Mindset: From Frustration to Flow",
      description: "Exploring the psychological aspects of debugging and how to maintain composure when everything breaks. We dive deep into strategies for staying calm under pressure.",
      date: "2024-01-15",
      duration: "42 min",
      tags: ["mental health", "debugging", "productivity"],
      slug: "debugging-mindset-frustration-to-flow"
    },
    {
      id: 2,
      title: "Imposter Syndrome in Tech: You're Not Alone",
      description: "A deep dive into imposter syndrome, its prevalence in tech, and practical strategies for overcoming it. Guest interviews with senior developers.",
      date: "2024-01-08",
      duration: "38 min",
      tags: ["mental health", "career", "personal growth"],
      slug: "imposter-syndrome-tech-not-alone"
    },
    {
      id: 3,
      title: "Code Review Culture: Building Trust, Not Fear",
      description: "How to create a code review process that empowers developers and improves code quality without creating a toxic environment.",
      date: "2024-01-01",
      duration: "45 min",
      tags: ["teamwork", "code quality", "culture"],
      slug: "code-review-culture-building-trust"
    },
    {
      id: 4,
      title: "Remote Work Burnout: Signs and Solutions",
      description: "Identifying the unique challenges of remote development work and maintaining work-life balance in a distributed team environment.",
      date: "2023-12-25",
      duration: "40 min",
      tags: ["remote work", "mental health", "work-life balance"],
      slug: "remote-work-burnout-signs-solutions"
    },
    {
      id: 5,
      title: "AI and the Future of Development",
      description: "Discussing how AI tools like GitHub Copilot are changing the development landscape and what it means for developers' careers.",
      date: "2023-12-18",
      duration: "52 min",
      tags: ["AI", "future", "tools", "career"],
      slug: "ai-future-development"
    },
    {
      id: 6,
      title: "Frontend vs Backend: The Great Divide",
      description: "Exploring the differences between frontend and backend development cultures, challenges, and how to bridge the gap.",
      date: "2023-12-11",
      duration: "35 min",
      tags: ["frontend", "backend", "career", "teamwork"],
      slug: "frontend-vs-backend-great-divide"
    },
    {
      id: 7,
      title: "Open Source Contribution Anxiety",
      description: "Overcoming the fear of contributing to open source projects and building confidence in the developer community.",
      date: "2023-12-04",
      duration: "41 min",
      tags: ["open source", "community", "personal growth"],
      slug: "open-source-contribution-anxiety"
    },
    {
      id: 8,
      title: "The Art of Technical Documentation",
      description: "Why good documentation is crucial and how to write docs that developers actually want to read and use.",
      date: "2023-11-27",
      duration: "33 min",
      tags: ["documentation", "communication", "best practices"],
      slug: "art-technical-documentation"
    },
    {
      id: 9,
      title: "Database Design Therapy Session",
      description: "Common database design mistakes and how to avoid them. A therapeutic approach to schema design and optimization.",
      date: "2023-11-20",
      duration: "48 min",
      tags: ["database", "backend", "best practices"],
      slug: "database-design-therapy-session"
    },
    {
      id: 10,
      title: "JavaScript Fatigue: Managing the Ecosystem",
      description: "Dealing with the overwhelming number of JavaScript frameworks and tools. How to choose what to learn next.",
      date: "2023-11-13",
      duration: "44 min",
      tags: ["javascript", "frontend", "learning"],
      slug: "javascript-fatigue-managing-ecosystem"
    },
    {
      id: 11,
      title: "DevOps for Developers: Breaking Down Silos",
      description: "Understanding DevOps culture and how developers can work better with operations teams.",
      date: "2023-11-06",
      duration: "39 min",
      tags: ["devops", "teamwork", "infrastructure"],
      slug: "devops-developers-breaking-silos"
    },
    {
      id: 12,
      title: "Mobile Development Mental Models",
      description: "Transitioning from web to mobile development and the mindset shifts required for success.",
      date: "2023-10-30",
      duration: "46 min",
      tags: ["mobile", "career", "learning"],
      slug: "mobile-development-mental-models"
    }
  ];

  // Get all unique tags
  const allTags = Array.from(new Set(allEpisodes.flatMap(episode => episode.tags)));

  // Filter and sort episodes
  const filteredEpisodes = useMemo(() => {
    let filtered = allEpisodes.filter(episode => {
      const matchesSearch = episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           episode.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           episode.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.every(tag => episode.tags.includes(tag));
      
      return matchesSearch && matchesTags;
    });

    // Sort episodes
    filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'newest' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
    });

    return filtered;
  }, [searchTerm, selectedTags, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredEpisodes.length / episodesPerPage);
  const startIndex = (currentPage - 1) * episodesPerPage;
  const currentEpisodes = filteredEpisodes.slice(startIndex, startIndex + episodesPerPage);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 hover:text-brand-mint transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-semibold">Back to Home</span>
              </Link>
              <h1 className="text-2xl font-bold text-brand-mint">Episode Archive</h1>
              <div className="w-24"></div> {/* Spacer for balance */}
            </div>
          </div>
        </header>

        {/* Search and Filters */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search episodes by title, topic, or guest..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10 h-12 bg-card/50 border-brand-mint/20 focus:border-brand-mint"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
                Press <kbd className="px-2 py-1 bg-muted rounded text-xs">/</kbd> to focus
              </div>
            </div>

            {/* Filters Row */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              {/* Tags Filter */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Filter className="h-4 w-4 text-brand-mint" />
                  <span className="text-sm font-medium">Filter by topic:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className={`cursor-pointer transition-colors ${
                        selectedTags.includes(tag) 
                          ? 'bg-brand-mint text-black hover:bg-brand-mint-dark' 
                          : 'hover:bg-brand-mint/10 hover:border-brand-mint'
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
                  <label className="text-sm font-medium mb-2 block">Sort by:</label>
                  <Select value={sortOrder} onValueChange={setSortOrder}>
                    <SelectTrigger className="w-40 bg-card/50 border-brand-mint/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {(searchTerm || selectedTags.length > 0) && (
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="border-brand-mint/40 hover:bg-brand-mint/10"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 text-muted-foreground">
              Showing {filteredEpisodes.length} episode{filteredEpisodes.length !== 1 ? 's' : ''}
              {searchTerm && ` for "${searchTerm}"`}
            </div>
          </div>
        </section>

        {/* Episodes Grid */}
        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            {currentEpisodes.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {currentEpisodes.map((episode) => (
                    <Card key={episode.id} className="bg-card/50 border-brand-mint/20 hover-lift group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Button 
                            size="sm" 
                            className="bg-brand-mint text-black hover:bg-brand-mint-dark shrink-0 mt-1"
                          >
                            <Play className="h-4 w-4" />
                          </Button>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-mint transition-colors line-clamp-2">
                              {episode.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                              {episode.description}
                            </p>
                            
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(episode.date).toLocaleDateString()}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {episode.duration}
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-1">
                              {episode.tags.slice(0, 3).map(tag => (
                                <Badge key={tag} variant="outline" className="text-xs px-2 py-0">
                                  {tag}
                                </Badge>
                              ))}
                              {episode.tags.length > 3 && (
                                <Badge variant="outline" className="text-xs px-2 py-0">
                                  +{episode.tags.length - 3}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center">
                    <Pagination>
                      <PaginationContent>
                        {currentPage > 1 && (
                          <PaginationItem>
                            <PaginationPrevious 
                              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                              className="cursor-pointer"
                            />
                          </PaginationItem>
                        )}
                        
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          const page = i + 1;
                          return (
                            <PaginationItem key={page}>
                              <PaginationLink
                                onClick={() => setCurrentPage(page)}
                                isActive={currentPage === page}
                                className="cursor-pointer"
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        })}

                        {currentPage < totalPages && (
                          <PaginationItem>
                            <PaginationNext 
                              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                              className="cursor-pointer"
                            />
                          </PaginationItem>
                        )}
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No episodes found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or filters
                </p>
                <Button 
                  onClick={clearFilters}
                  className="bg-brand-mint text-black hover:bg-brand-mint-dark"
                >
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

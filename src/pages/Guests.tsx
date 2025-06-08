
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';

const Guests = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const guests = [
    {
      id: 'zura-abelashvili',
      name: 'Zura Abelashvili',
      title: 'Graphics Engineer at Rockstar Games',
      bio: 'From Georgia to GTA VI - building the future of gaming graphics',
      image: '/lovable-uploads/31303238-7434-42a9-8892-5f332924e27a.png',
      episode: 'Episode #7',
      tags: ['graphics', 'gaming', 'rockstar']
    },
    {
      id: 'sarah-chen',
      name: 'Sarah Chen',
      title: 'Staff Engineer at Stripe',
      bio: 'Scaling payment systems for millions of developers worldwide',
      image: '/placeholder.svg',
      episode: 'Episode #5',
      tags: ['backend', 'payments', 'scaling']
    },
    {
      id: 'alex-rodriguez',
      name: 'Alex Rodriguez',
      title: 'Tech Lead at Meta',
      bio: 'Building the metaverse infrastructure from the ground up',
      image: '/placeholder.svg',
      episode: 'Episode #3',
      tags: ['frontend', 'vr', 'meta']
    },
    {
      id: 'jamie-kim',
      name: 'Jamie Kim',
      title: 'Senior DevOps Engineer at Netflix',
      bio: 'Keeping your favorite shows streaming without a hitch',
      image: '/placeholder.svg',
      episode: 'Episode #1',
      tags: ['devops', 'streaming', 'infrastructure']
    }
  ];

  const filteredGuests = guests.filter(guest =>
    guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guest.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background matrix-bg">
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Intro Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Meet the Minds Behind the Mic
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A growing list of engineers, creators, and thinkers who've joined us on Devtherapy.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search guests by name, company, or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card/50 border-brand-mint/20 focus:border-brand-mint"
              />
            </div>
          </div>

          {/* Guest Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuests.map((guest) => (
              <Card key={guest.id} className="bg-card/50 border-brand-mint/20 hover-lift group">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative mb-4">
                      <img
                        src={guest.image}
                        alt={guest.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-brand-mint/20"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-mint transition-colors">
                      {guest.name}
                    </h3>
                    <p className="text-brand-mint text-sm font-medium mb-2">
                      {guest.title}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {guest.bio}
                    </p>
                    <div className="text-xs text-muted-foreground mb-4">
                      {guest.episode}
                    </div>
                    <Link to={`/guests/${guest.id}`}>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-brand-mint/40 hover:border-brand-mint hover:bg-brand-mint/10 group-hover:border-brand-mint transition-all"
                      >
                        View Profile
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredGuests.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No guests found matching "{searchTerm}"
              </p>
            </div>
          )}

          {/* Back to Podcast */}
          <div className="text-center mt-16">
            <Link to="/">
              <Button 
                variant="outline" 
                size="lg"
                className="border-brand-mint text-brand-mint hover:bg-brand-mint hover:text-black"
              >
                Back to Podcast
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guests;

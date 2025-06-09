import zura from '@/assets/zuba.png';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Guests = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const guests = [
    {
      id: 'zura-abelashvili',
      name: 'Zura Abelashvili',
      title: 'Graphics Engineer at Rockstar Games',
      bio: 'From Georgia to GTA VI - building the future of gaming graphics',
      image: zura,
      episode: 'Episode #7',
      tags: ['graphics', 'gaming', 'rockstar'],
    },
  ];

  const filteredGuests = guests.filter(
    (guest) =>
      guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.bio.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="matrix-bg min-h-screen bg-background">
      <div className="relative z-10 pb-16 pt-20">
        <div className="mx-auto max-w-6xl px-4">
          {/* Intro Section */}
          <div className="mb-16 text-center">
            <h1 className="glow-text mb-6 text-4xl font-bold md:text-6xl">Meet the Minds Behind the Mic</h1>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl">
              A growing list of engineers, creators, and thinkers who've joined us on Devtherapy.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mx-auto mb-12 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search guests by name, company, or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-brand-mint/20 bg-card/50 pl-10 focus:border-brand-mint"
              />
            </div>
          </div>

          {/* Guest Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredGuests.map((guest) => (
              <Card key={guest.id} className="hover-lift group border-brand-mint/20 bg-card/50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative mb-4">
                      <img src={guest.image} alt={guest.name} className="mx-auto h-24 w-24 rounded-full border-2 border-brand-mint/20 object-cover" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-brand-mint">{guest.name}</h3>
                    <p className="mb-2 text-sm font-medium text-brand-mint">{guest.title}</p>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{guest.bio}</p>
                    <div className="mb-4 text-xs text-muted-foreground">{guest.episode}</div>
                    <Link to={`/guests/${guest.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-brand-mint/40 transition-all hover:border-brand-mint hover:bg-brand-mint/10 group-hover:border-brand-mint"
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
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">No guests found matching "{searchTerm}"</p>
            </div>
          )}

          {/* Back to Podcast */}
          <div className="mt-16 text-center">
            <Link to="/">
              <Button variant="outline" size="lg" className="border-brand-mint text-brand-mint hover:bg-brand-mint hover:text-black">
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

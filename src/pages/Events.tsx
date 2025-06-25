
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink, Clock } from 'lucide-react';
import { eventsData } from '@/server/data/events/events.data';
import { Event } from '@/server/data/events/events.types';

const Events = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const now = new Date();
  const filteredEvents = eventsData.filter((event) => {
    const eventDate = new Date(event.date);
    if (filter === 'upcoming') return eventDate >= now;
    if (filter === 'past') return eventDate < now;
    return true;
  });

  const featuredEvent = eventsData.find(event => event.featured);

  const getEventStatus = (event: Event) => {
    const eventDate = new Date(event.date);
    return eventDate >= now ? 'upcoming' : 'past';
  };

  const getTimeUntilEvent = (event: Event) => {
    const eventDate = new Date(event.date);
    const diffTime = eventDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return null;
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `${diffDays} days`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <div className="matrix-bg">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 glow-text">
              Devtherapy Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Live sessions, dev meetups, guest collabs, and community moments.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Event */}
        {featuredEvent && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Featured Event</h2>
            <div className="bg-card rounded-lg border overflow-hidden hover-lift">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant={getEventStatus(featuredEvent) === 'upcoming' ? 'default' : 'secondary'}>
                      {getEventStatus(featuredEvent)}
                    </Badge>
                    <Badge variant="outline">{featuredEvent.type}</Badge>
                    {featuredEvent.featured && <Badge className="bg-yellow-500 text-black">Featured</Badge>}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{featuredEvent.title}</h3>
                  
                  <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredEvent.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{featuredEvent.location}</span>
                    </div>
                  </div>

                  {getTimeUntilEvent(featuredEvent) && (
                    <div className="flex items-center gap-1 mb-4 text-primary">
                      <Clock className="w-4 h-4" />
                      <span>In {getTimeUntilEvent(featuredEvent)}</span>
                    </div>
                  )}
                  
                  <p className="text-muted-foreground mb-6">{featuredEvent.shortDescription}</p>
                  
                  <div className="flex gap-2">
                    <Link to={`/events/${featuredEvent.id}`}>
                      <Button>View Details</Button>
                    </Link>
                    {featuredEvent.links?.rsvp && (
                      <Button variant="outline" asChild>
                        <a href={featuredEvent.links.rsvp} target="_blank" rel="noopener noreferrer">
                          RSVP <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-8">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            All Events
          </Button>
          <Button
            variant={filter === 'upcoming' ? 'default' : 'outline'}
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </Button>
          <Button
            variant={filter === 'past' ? 'default' : 'outline'}
            onClick={() => setFilter('past')}
          >
            Past Events
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-card rounded-lg border overflow-hidden hover-lift">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant={getEventStatus(event) === 'upcoming' ? 'default' : 'secondary'}>
                    {getEventStatus(event)}
                  </Badge>
                  <Badge variant="outline">{event.type}</Badge>
                  {event.featured && <Badge className="bg-yellow-500 text-black">Featured</Badge>}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                
                <div className="flex flex-col gap-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {getTimeUntilEvent(event) && (
                  <div className="flex items-center gap-1 mb-4 text-primary">
                    <Clock className="w-4 h-4" />
                    <span>In {getTimeUntilEvent(event)}</span>
                  </div>
                )}
                
                <p className="text-muted-foreground mb-4 text-sm">{event.shortDescription}</p>
                
                <Link to={`/events/${event.id}`}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No events found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;

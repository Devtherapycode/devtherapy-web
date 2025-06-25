import { BackToHomeHeader } from '@/components/back-to-home-header';
import MatrixBackground from '@/components/MatrixBackground';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { eventsData } from '@/server/data/events/events.data';
import { Event } from '@/server/data/events/events.types';
import { Calendar, Clock, ExternalLink, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const now = new Date();
  const filteredEvents = eventsData.filter((event) => {
    const eventDate = new Date(event.date);
    if (filter === 'upcoming') return eventDate >= now;
    if (filter === 'past') return eventDate < now;
    return true;
  });

  const featuredEvent = eventsData.find((event) => event.featured);

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
      <MatrixBackground fullScreen />

      <div className="relative z-10">
        <BackToHomeHeader title="Events" />

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="glow-text mb-4 text-4xl font-bold md:text-6xl">Devtherapy Events</h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">Live sessions, dev meetups, guest collabs, and community moments.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12">
          {/* Featured Event */}
          {featuredEvent && (
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-primary">Featured Event</h2>
              <div className="hover-lift overflow-hidden rounded-lg border bg-card">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img src={featuredEvent.image} alt={featuredEvent.title} className="h-64 w-full object-cover md:h-full" />
                  </div>
                  <div className="p-6 md:w-1/2">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <Badge variant={getEventStatus(featuredEvent) === 'upcoming' ? 'default' : 'secondary'}>{getEventStatus(featuredEvent)}</Badge>
                      <Badge variant="outline">{featuredEvent.type}</Badge>
                      {featuredEvent.featured && <Badge className="bg-yellow-500 text-black">Featured</Badge>}
                    </div>

                    <h3 className="mb-4 text-2xl font-bold">{featuredEvent.title}</h3>

                    <div className="mb-4 flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(featuredEvent.date).toLocaleDateString('ka-GE', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{featuredEvent.location}</span>
                      </div>
                    </div>

                    {getTimeUntilEvent(featuredEvent) && (
                      <div className="mb-4 flex items-center gap-1 text-primary">
                        <Clock className="h-4 w-4" />
                        <span>In {getTimeUntilEvent(featuredEvent)}</span>
                      </div>
                    )}

                    <p className="mb-6 text-muted-foreground">{featuredEvent.shortDescription}</p>

                    <div className="flex gap-2">
                      <Link to={`/events/${featuredEvent.id}`}>
                        <Button>View Details</Button>
                      </Link>
                      {featuredEvent.links?.rsvp && (
                        <Button variant="outline" asChild>
                          <a href={featuredEvent.links.rsvp} target="_blank" rel="noopener noreferrer">
                            RSVP <ExternalLink className="ml-1 h-4 w-4" />
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
          <div className="mb-8 flex gap-4">
            <Button variant={filter === 'all' ? 'default' : 'outline'} onClick={() => setFilter('all')}>
              All Events
            </Button>
            <Button variant={filter === 'upcoming' ? 'default' : 'outline'} onClick={() => setFilter('upcoming')}>
              Upcoming
            </Button>
            <Button variant={filter === 'past' ? 'default' : 'outline'} onClick={() => setFilter('past')}>
              Past Events
            </Button>
          </div>

          {/* Events Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <div key={event.id} className="hover-lift overflow-hidden rounded-lg border bg-card">
                <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <Badge variant={getEventStatus(event) === 'upcoming' ? 'default' : 'secondary'}>{getEventStatus(event)}</Badge>
                    <Badge variant="outline">{event.type}</Badge>
                    {event.featured && <Badge className="bg-yellow-500 text-black">Featured</Badge>}
                  </div>

                  <h3 className="mb-3 text-xl font-bold">{event.title}</h3>

                  <div className="mb-4 flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {getTimeUntilEvent(event) && (
                    <div className="mb-4 flex items-center gap-1 text-primary">
                      <Clock className="h-4 w-4" />
                      <span>In {getTimeUntilEvent(event)}</span>
                    </div>
                  )}

                  <p className="mb-4 text-sm text-muted-foreground">{event.shortDescription}</p>

                  <Link to={`/events/${event.id}`}>
                    <Button className="w-full">View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No events found for the selected filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;

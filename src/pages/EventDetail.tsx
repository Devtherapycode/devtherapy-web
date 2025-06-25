
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink, ArrowLeft, Clock, Download } from 'lucide-react';
import { eventsData } from '@/server/data/events/events.data';

const EventDetail = () => {
  const { eventId } = useParams();
  const event = eventsData.find(e => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <Link to="/events">
            <Button>Back to Events</Button>
          </Link>
        </div>
      </div>
    );
  }

  const now = new Date();
  const eventDate = new Date(event.date);
  const isUpcoming = eventDate >= now;

  const getTimeUntilEvent = () => {
    const diffTime = eventDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return null;
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `${diffDays} days`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/events" className="inline-flex items-center gap-2 mb-6 text-primary hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </Link>

        {/* Event Header */}
        <div className="bg-card rounded-lg border overflow-hidden mb-8">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant={isUpcoming ? 'default' : 'secondary'}>
                {isUpcoming ? 'Upcoming' : 'Past'}
              </Badge>
              <Badge variant="outline">{event.type}</Badge>
              {event.featured && <Badge className="bg-yellow-500 text-black">Featured</Badge>}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{event.title}</h1>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{eventDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{event.location}</span>
              </div>
            </div>

            {getTimeUntilEvent() && (
              <div className="flex items-center gap-2 mb-6 text-primary">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">In {getTimeUntilEvent()}</span>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {event.links?.rsvp && (
                <Button asChild>
                  <a href={event.links.rsvp} target="_blank" rel="noopener noreferrer">
                    RSVP <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              )}
              {event.links?.youtube && (
                <Button variant="outline" asChild>
                  <a href={event.links.youtube} target="_blank" rel="noopener noreferrer">
                    Watch on YouTube <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              )}
              {event.links?.slides && (
                <Button variant="outline" asChild>
                  <a href={event.links.slides} target="_blank" rel="noopener noreferrer">
                    Download Slides <Download className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Event Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg border p-8">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {event.fullDescription || event.shortDescription}
                </p>
              </div>
            </div>

            {/* Embedded YouTube Video */}
            {event.links?.youtube && !isUpcoming && (
              <div className="bg-card rounded-lg border p-8 mt-6">
                <h2 className="text-2xl font-bold mb-4">Event Recording</h2>
                <div className="aspect-video">
                  <iframe
                    src={event.links.youtube.replace('watch?v=', 'embed/')}
                    title={event.title}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-lg font-bold mb-4">Event Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-muted-foreground">Type</span>
                  <p className="font-medium">{event.type}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Date & Time</span>
                  <p className="font-medium">{eventDate.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Location</span>
                  <p className="font-medium">{event.location}</p>
                </div>
              </div>
            </div>

            {/* Additional Links */}
            {(event.links?.blog || event.links?.notion) && (
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-lg font-bold mb-4">Additional Resources</h3>
                <div className="space-y-2">
                  {event.links?.blog && (
                    <a
                      href={event.links.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      Read Blog Post <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {event.links?.notion && (
                    <a
                      href={event.links.notion}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      View Notes <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;

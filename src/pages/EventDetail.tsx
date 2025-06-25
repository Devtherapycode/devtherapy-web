import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { eventsData } from '@/server/data/events/events.data';
import { ArrowLeft, Calendar, Clock, Download, ExternalLink, MapPin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const EventDetail = () => {
  const { eventId } = useParams();
  const event = eventsData.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Event Not Found</h1>
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
        <Link to="/events" className="mb-6 inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>

        {/* Event Header */}
        <div className="mb-8 overflow-hidden rounded-lg border bg-card">
          <img src={event.image} alt={event.title} className="h-64 w-full object-cover md:h-96" />
          <div className="p-8">
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant={isUpcoming ? 'default' : 'secondary'}>{isUpcoming ? 'Upcoming' : 'Past'}</Badge>
              <Badge variant="outline">{event.type}</Badge>
              {event.featured && <Badge className="bg-yellow-500 text-black">Featured</Badge>}
            </div>

            <h1 className="mb-6 text-3xl font-bold md:text-4xl">{event.title}</h1>

            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>
                  {eventDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{event.location}</span>
              </div>
            </div>

            {getTimeUntilEvent() && (
              <div className="mb-6 flex items-center gap-2 text-primary">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">In {getTimeUntilEvent()}</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {event.links?.rsvp && (
                <Button asChild>
                  <a href={event.links.rsvp} target="_blank" rel="noopener noreferrer">
                    RSVP <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              )}
              {event.links?.youtube && (
                <Button variant="outline" asChild>
                  <a href={event.links.youtube} target="_blank" rel="noopener noreferrer">
                    Watch on YouTube <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              )}
              {event.links?.slides && (
                <Button variant="outline" asChild>
                  <a href={event.links.slides} target="_blank" rel="noopener noreferrer">
                    Download Slides <Download className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Event Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card p-8">
              <h2 className="mb-4 text-2xl font-bold">About This Event</h2>
              <div className="prose prose-invert max-w-none">
                <p className="leading-relaxed text-muted-foreground">
                  {event.fullDescription?.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>

            {/* Embedded YouTube Video */}
            {event.links?.youtube && !isUpcoming && (
              <div className="mt-6 rounded-lg border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold">Event Recording</h2>
                <div className="aspect-video">
                  <iframe src={event.links.youtube.replace('watch?v=', 'embed/')} title={event.title} className="h-full w-full rounded-lg" allowFullScreen />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-bold">Event Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-muted-foreground">Type</span>
                  <p className="font-medium">{event.type}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Date & Time</span>
                  <p className="font-medium">
                    {eventDate.toLocaleString('ka-GE', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Location</span>
                  <p className="font-medium">{event.location}</p>
                </div>
              </div>
            </div>

            {/* Additional Links */}
            {(event.links?.blog || event.links?.notion) && (
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-4 text-lg font-bold">Additional Resources</h3>
                <div className="space-y-2">
                  {event.links?.blog && (
                    <a href={event.links.blog} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                      Read Blog Post <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {event.links?.notion && (
                    <a href={event.links.notion} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                      View Notes <ExternalLink className="h-4 w-4" />
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

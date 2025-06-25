
export interface Event {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  date: string;
  location: string;
  type: 'Meetup' | 'Livestream' | 'Guest Session' | 'Workshop' | 'Conference';
  image: string;
  featured?: boolean;
  links?: {
    rsvp?: string;
    youtube?: string;
    blog?: string;
    notion?: string;
    slides?: string;
    zoom?: string;
  };
}

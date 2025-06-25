
import { Event } from './events.types';

export const eventsData: Event[] = [
  {
    id: 'devtherapy-live-2024',
    title: 'Devtherapy Live: Year End Wrap-up',
    shortDescription: 'Join us for a live discussion about the biggest dev trends of 2024 and what to expect in 2025.',
    fullDescription: 'Join the Devtherapy hosts for an interactive live session where we discuss the biggest developer trends of 2024, share our personal highlights, and take questions from the community. We\'ll cover everything from AI development tools to the latest framework wars.',
    date: '2024-12-28T19:00:00Z',
    location: 'Online',
    type: 'Livestream',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
    featured: true,
    links: {
      rsvp: 'https://youtube.com/@Devtherapy',
      youtube: 'https://youtube.com/@Devtherapy'
    }
  },
  {
    id: 'tbilisi-dev-meetup-2024',
    title: 'Tbilisi Developer Meetup',
    shortDescription: 'In-person meetup with local developers discussing GraphQL, microservices, and career growth.',
    fullDescription: 'Our first in-person meetup in Tbilisi! Join fellow developers for an evening of technical talks, networking, and great conversations. We\'ll have presentations on GraphQL best practices, microservices architecture, and career growth in the Georgian tech scene.',
    date: '2024-11-15T18:00:00Z',
    location: 'Tbilisi, Georgia',
    type: 'Meetup',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
    links: {
      blog: 'https://devtherapy.io/blog/tbilisi-meetup-recap'
    }
  },
  {
    id: 'zura-graphics-workshop',
    title: 'Graphics Programming Workshop with Zura',
    shortDescription: 'Deep dive into graphics programming and game engine development with Zura from Rockstar Games.',
    fullDescription: 'An exclusive workshop session with Zura Abelashvili from Rockstar Games. Learn about the fundamentals of graphics programming, rendering pipelines, and what it takes to work on AAA games like GTA VI. This hands-on session will cover OpenGL basics, shader programming, and optimization techniques.',
    date: '2024-10-20T15:00:00Z',
    location: 'Online',
    type: 'Workshop',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
    links: {
      youtube: 'https://www.youtube.com/watch?v=ptPHTbQk_sA',
      slides: 'https://example.com/graphics-workshop-slides.pdf',
      notion: 'https://notion.so/devtherapy/graphics-workshop-notes'
    }
  },
  {
    id: 'react-conf-guest-session',
    title: 'React Conference Guest Session',
    shortDescription: 'Special guest appearance at React Conference discussing the future of React development.',
    date: '2024-09-12T14:00:00Z',
    location: 'San Francisco, CA',
    type: 'Guest Session',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop',
    links: {
      youtube: 'https://youtube.com/watch?v=example',
      blog: 'https://devtherapy.io/blog/react-conf-2024'
    }
  },
  {
    id: 'mental-health-tech-workshop',
    title: 'Mental Health in Tech Workshop',
    shortDescription: 'Interactive workshop focusing on developer burnout, work-life balance, and mental wellness.',
    fullDescription: 'A comprehensive workshop addressing the mental health challenges unique to software developers. We\'ll discuss burnout prevention, imposter syndrome, work-life balance strategies, and building supportive development teams. Includes interactive exercises and group discussions.',
    date: '2024-08-05T16:00:00Z',
    location: 'Online',
    type: 'Workshop',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
    links: {
      youtube: 'https://youtube.com/watch?v=mental-health-workshop',
      slides: 'https://example.com/mental-health-slides.pdf'
    }
  },
  {
    id: 'summer-coding-livestream',
    title: 'Summer Coding Challenge Livestream',
    shortDescription: 'Live coding session tackling algorithm challenges and discussing problem-solving strategies.',
    date: '2024-07-15T17:00:00Z',
    location: 'Online',
    type: 'Livestream',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
    links: {
      youtube: 'https://youtube.com/watch?v=summer-coding-challenge'
    }
  }
];

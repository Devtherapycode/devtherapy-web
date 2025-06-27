import { GlobalShortcuts } from '@/components/GlobalShortcuts';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import DevWrapped from './pages/DevWrapped';
import EpisodeDetail from './pages/EpisodeDetail';
import Episodes from './pages/Episodes';
import EventDetail from './pages/EventDetail';
import Events from './pages/Events';
import GameJam2025 from './pages/GameJam2025';
import GuestDetail from './pages/GuestDetail';
import Guests from './pages/Guests';
import { HomePage } from './pages/home-page';
import Memes from './pages/memes/Memes.page';
import NotFound from './pages/NotFound';
import Quizzes from './pages/Quizzes';
import Shop from './pages/Shop';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:episodeSlug" element={<EpisodeDetail />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/guests/:guestId" element={<GuestDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/gamejam-2025" element={<GameJam2025 />} />
          <Route path="/wrapped" element={<DevWrapped />} />
          <Route path="/memes" element={<Memes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GlobalShortcuts />
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

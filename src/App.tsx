import { GlobalShortcuts } from '@/components/GlobalShortcuts';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HashRouter, Route, Routes } from 'react-router-dom';
import DevWrapped from './pages/DevWrapped';
import EpisodeDetail from './pages/EpisodeDetail';
import Episodes from './pages/Episodes';
import GuestDetail from './pages/GuestDetail';
import Guests from './pages/Guests';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Shop from './pages/Shop';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:episodeSlug" element={<EpisodeDetail />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/guests/:guestId" element={<GuestDetail />} />
          <Route path="/wrapped" element={<DevWrapped />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GlobalShortcuts />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

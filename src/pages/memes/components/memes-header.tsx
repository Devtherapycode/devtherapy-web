import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MemesHeader = () => (
  <header className="sticky top-0 z-20 border-b border-border/40 bg-background/80 backdrop-blur-sm">
    <div className="mx-auto max-w-7xl px-4 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-colors hover:text-brand-mint">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-semibold">Back to Home</span>
        </Link>
        <h1 className="text-2xl font-bold text-brand-mint">Meme Gallery</h1>
        <div className="w-24"></div> {/* Spacer for balance */}
      </div>
    </div>
  </header>
);

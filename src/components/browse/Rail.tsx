import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

type RailProps = {
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  /** Extra space above and below the cards, for things that rise out of the row (top 10 numbers). */
  trackClassName?: string;
};

// A row of cards that runs off the right edge. Scrolling is native, so touch and trackpads keep their momentum;
// the chevrons page by most of a screen, and the dots show which page is in view.
export const Rail = ({ title, subtitle, children, className, trackClassName }: RailProps) => {
  const track = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setPages(Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth)));
    setPage(Math.round(el.scrollLeft / el.clientWidth));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const handlePage = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  return (
    <section className={cn('group/rail relative flex flex-col gap-3.5 py-5', className)}>
      <div className="flex items-end justify-between px-4 md:px-[60px]">
        <div className="flex items-baseline gap-3">
          <h2 className="text-lg font-bold leading-[26px] tracking-[-0.01em] text-[#E5E5E5] md:text-[22px]">{title}</h2>
          {subtitle && <span className="hidden text-sm text-[#8C8C8C] sm:inline">{subtitle}</span>}
        </div>
        {pages > 1 && (
          <div className="hidden gap-0.5 pb-1.5 md:flex" aria-hidden>
            {Array.from({ length: pages }, (_, index) => (
              <span key={index} className={cn('h-0.5 w-3.5', index === page ? 'bg-white' : 'bg-[#4D4D4D]')} />
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <div ref={track} onScroll={measure} className={cn('no-scrollbar flex snap-x gap-2 overflow-x-auto scroll-px-4 px-4 md:scroll-px-[60px] md:px-[60px]', trackClassName)}>
          {children}
        </div>
        {page > 0 && (
          <button
            type="button"
            onClick={() => handlePage(-1)}
            aria-label="Previous"
            className="absolute inset-y-0 left-0 hidden w-14 items-center justify-center bg-gradient-to-l from-[#0A0A0A]/30 to-[#0A0A0A]/85 opacity-0 transition-opacity duration-200 focus-visible:opacity-100 group-hover/rail:opacity-100 md:flex"
          >
            <ChevronLeft className="h-9 w-9 text-white" strokeWidth={2.5} />
          </button>
        )}
        {page < pages - 1 && (
          <button
            type="button"
            onClick={() => handlePage(1)}
            aria-label="Next"
            className="absolute inset-y-0 right-0 hidden w-14 items-center justify-center bg-gradient-to-r from-[#0A0A0A]/30 to-[#0A0A0A]/85 opacity-0 transition-opacity duration-200 focus-visible:opacity-100 group-hover/rail:opacity-100 md:flex"
          >
            <ChevronRight className="h-9 w-9 text-white" strokeWidth={2.5} />
          </button>
        )}
      </div>
    </section>
  );
};

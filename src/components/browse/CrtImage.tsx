import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

// v9's CRT look in CSS, so it works on any image (YouTube thumbnails included) without pre-graded files:
// a film grade (contrast and saturation, teal lifted into the shadows, warmth in the highlights), a vignette,
// scanlines (1px at 47% every 3px, the same pitch as the design's overlay) and grain.
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

type CrtImageProps = {
  src: string;
  alt: string;
  /** Season 1 is shown in black and white. */
  mono?: boolean;
  /** Vignette strength at the edges, 0 to 1. */
  vignette?: number;
  className?: string;
  imgClassName?: string;
  loading?: 'lazy' | 'eager';
  children?: ReactNode;
};

export const CrtImage = ({ src, alt, mono = false, vignette = 0.6, className, imgClassName, loading = 'lazy', children }: CrtImageProps) => (
  <div className={cn('relative overflow-hidden bg-[#1A1A1A]', className)}>
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={cn('absolute inset-0 h-full w-full object-cover', mono ? 'grayscale contrast-[1.1]' : 'brightness-[1.02] contrast-[1.1] saturate-[1.25]', imgClassName)}
    />
    {!mono && (
      <>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#0E3A52] opacity-50 mix-blend-lighten" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#FF9A4A] opacity-[0.22] mix-blend-soft-light" />
      </>
    )}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{ backgroundImage: `radial-gradient(ellipse 85% 85% at 50% 50%, transparent 55%, rgba(0,0,0,${vignette}) 100%)` }}
    />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{ backgroundImage: 'repeating-linear-gradient(to bottom, rgba(0,0,0,0.47) 0 1px, transparent 1px 3px)' }}
    />
    <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" style={{ backgroundImage: GRAIN }} />
    {children}
  </div>
);

/** A small mono readout on a dark plate: "CH 34", "1:35:44". */
export const Readout = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span className={cn('rounded-[3px] bg-crt-ink/75 px-1.5 py-[3px] font-mono text-[11px] font-bold leading-[14px] tracking-[0.14em] text-crt-cream', className)}>
    {children}
  </span>
);

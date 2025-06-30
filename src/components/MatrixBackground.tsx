import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

type MatrixBackgroundProps = {
  fullScreen?: boolean;
};

const MatrixBackground = ({ fullScreen = false }: MatrixBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(1);

    const matrix = '01';

    const draw = () => {
      ctx.fillStyle = 'rgba(7, 14, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#3CE6B0';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className={cn('inset-0 z-10 w-full opacity-20 bg-cover', fullScreen ? 'fixed' : 'absolute')} style={{ pointerEvents: 'none' }} />;
};

export default MatrixBackground;

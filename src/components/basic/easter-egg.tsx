import { useConfettiFireworks } from '@/hooks/use-confetti';
import { useEffect, useState } from 'react';

type EasterEggProps = {
  easterEgg: string;
};

export const EasterEgg = ({ easterEgg }: EasterEggProps) => {
  const { handleFireworksClick } = useConfettiFireworks();
  const [position, setPosition] = useState<{ topPercent: number; leftPercent: number; sizePx: number }>({
    topPercent: 50,
    leftPercent: 50,
    sizePx: 32,
  });

  useEffect(() => {
    const randomBetween = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    setPosition({
      topPercent: randomBetween(5, 95),
      leftPercent: randomBetween(5, 95),
      sizePx: randomBetween(12, 50),
    });
  }, []);

  return (
    <div onClick={handleFireworksClick} className="absolute inset-0 z-20 cursor-pointer">
      <img
        src={easterEgg}
        alt="Easter Egg"
        className="absolute -translate-x-1/2 -translate-y-1/2 object-contain"
        style={{
          top: `${position.topPercent}%`,
          left: `${position.leftPercent}%`,
          width: position.sizePx,
          height: position.sizePx,
        }}
      />
    </div>
  );
};

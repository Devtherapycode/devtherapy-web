import { useConfettiFireworks } from '@/hooks/use-confetti';

type EasterEggProps = {
  easterEgg: string;
};

export const EasterEgg = ({ easterEgg }: EasterEggProps) => {
  const { handleFireworksClick } = useConfettiFireworks();

  return (
    <div onClick={handleFireworksClick} className="absolute inset-0 z-20">
      <img src={easterEgg} alt="Easter Egg" className="h-full w-full object-cover" />
    </div>
  );
};

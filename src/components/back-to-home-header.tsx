import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type BackToHomeHeaderProps = {
  title: string;
};

// The page title under the global nav, with a way back home.
export const BackToHomeHeader = ({ title }: BackToHomeHeaderProps) => (
  <header className="border-b border-white/10">
    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 pb-8 pt-6 md:px-8">
      <Link to="/" className="flex w-fit items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] text-[#8C8C8C] transition-colors duration-150 hover:text-white">
        <ArrowLeft className="h-4 w-4" />
        HOME
      </Link>
      <h1 className="text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">{title}</h1>
    </div>
  </header>
);

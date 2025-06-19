import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useState } from 'react';
import { CommandPalette } from './CommandPalette';

export const GlobalShortcuts = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useKeyboardShortcuts({
    onCommandPaletteOpen: () => setCommandPaletteOpen(true),
  });

  return <CommandPalette open={commandPaletteOpen} onOpenChange={setCommandPaletteOpen} />;
};

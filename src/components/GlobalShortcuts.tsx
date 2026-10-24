import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useCommandPaletteStore } from '@/stores/commandPaletteStore';
import { CommandPalette } from './CommandPalette';

export const GlobalShortcuts = () => {
  const { open, setOpen } = useCommandPaletteStore();

  useKeyboardShortcuts({
    onCommandPaletteOpen: () => setOpen(true),
  });

  return <CommandPalette open={open} onOpenChange={setOpen} />;
};

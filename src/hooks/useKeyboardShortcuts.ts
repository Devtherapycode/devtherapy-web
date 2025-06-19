
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

interface UseKeyboardShortcutsProps {
  onCommandPaletteOpen: () => void;
}

export const useKeyboardShortcuts = ({ onCommandPaletteOpen }: UseKeyboardShortcutsProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Secret Dev Mode shortcut: Ctrl+Alt+D (or Cmd+Option+D on Mac)
      if (
        (event.ctrlKey || event.metaKey) &&
        event.altKey &&
        event.key.toLowerCase() === 'd'
      ) {
        event.preventDefault();
        toast({
          title: "🎧 You just unlocked Dev Mode",
          description: "Go listen to another episode.",
          action: (
            <button
              onClick={() => navigate('/episodes')}
              className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm hover:bg-primary/90 transition-colors"
            >
              Take me there
            </button>
          ),
          duration: 5000,
        });
        return;
      }

      // Command palette: Cmd+K or Ctrl+K
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        onCommandPaletteOpen();
        return;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [navigate, onCommandPaletteOpen]);
};

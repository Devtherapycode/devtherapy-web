import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from './use-toast';

interface UseKeyboardShortcutsProps {
  onCommandPaletteOpen: () => void;
}

export const useKeyboardShortcuts = ({ onCommandPaletteOpen }: UseKeyboardShortcutsProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Secret Dev Mode shortcut: Ctrl+Shift+D (or Cmd+Shift+D on Mac)
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === 'd') {
        event.preventDefault();
        toast({
          title: '🎧 You just unlocked Dev Mode',
          description: 'Go listen to another episode.',
          action: (
            <button
              onClick={() => navigate('/episodes')}
              className="rounded bg-primary px-3 py-1 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
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

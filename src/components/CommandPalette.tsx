import { CommandDialog, CommandDialogTitle, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { allEpisodes } from '@/server/data/episodes/episodes.data';
import { guests } from '@/server/data/guests/guests.data';
import { YOUTUBE_URL } from '@/utils/const';
import { Calendar, Headphones, Home, Image, Mic, User, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CommandPalette = ({ open, onOpenChange }: CommandPaletteProps) => {
  const navigate = useNavigate();

  const commands = [
    {
      id: 'subscribe-on-youtube',
      label: 'Subscribe on YouTube',
      icon: Youtube,
      action: () => window.open(YOUTUBE_URL, '_blank'),
      group: 'Commands',
    },
    {
      id: 'home',
      label: 'Go to Home',
      icon: Home,
      action: () => navigate('/'),
      group: 'Navigation',
    },
    {
      id: 'episodes',
      label: 'Listen to Latest Episode',
      icon: Headphones,
      action: () => navigate('/episodes'),
      group: 'Navigation',
    },
    {
      id: 'guests',
      label: 'View All Guests',
      icon: User,
      action: () => navigate('/guests'),
      group: 'Navigation',
    },
    {
      id: 'events',
      label: 'Check out our Events',
      icon: Calendar,
      action: () => navigate('/events'),
      group: 'Navigation',
    },
    {
      id: 'memes',
      label: 'Laugh on Meme Gallery',
      icon: Image,
      action: () => navigate('/memes'),
      group: 'Navigation',
    },
    {
      id: 'wrapped',
      label: 'View Dev Wrapped',
      icon: Mic,
      action: () => navigate('/wrapped'),
      group: 'Navigation',
    },
    ...allEpisodes.map((episode) => ({
      id: episode.slug,
      label: `Listen to Episode: ${episode.title}`,
      icon: Headphones,
      action: () => navigate(`/episodes/${episode.slug}`),
      group: 'Episodes',
    })),
    ...guests.map((guest) => ({
      id: guest.id,
      label: `View Guest: ${guest.name}`,
      icon: Mic,
      action: () => navigate(`/guests/${guest.id}`),
      group: 'Guests',
    })),
  ];

  const handleCommand = (command: (typeof commands)[0]) => {
    command.action();
    onOpenChange(false);
  };

  const groupedCommands = commands.reduce(
    (acc, command) => {
      if (!acc[command.group]) {
        acc[command.group] = [];
      }
      acc[command.group].push(command);
      return acc;
    },
    {} as Record<string, typeof commands>,
  );

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandDialogTitle className="sr-only">Command Palette</CommandDialogTitle>
      <CommandInput placeholder="Type a command or search..." className="border-border focus:ring-primary" />
      <CommandList className="max-h-[400px]">
        <CommandEmpty className="p-4 text-muted-foreground">No results found.</CommandEmpty>

        {Object.entries(groupedCommands).map(([group, groupCommands]) => (
          <CommandGroup key={group} heading={group}>
            {groupCommands.map((command) => (
              <CommandItem
                key={command.id}
                onSelect={() => handleCommand(command)}
                className="flex cursor-pointer items-center gap-3 px-3 py-2 hover:bg-accent data-[selected=true]:bg-accent/50"
              >
                <command.icon className="h-4 w-4 shrink-0 text-primary" />
                <span>{command.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
};

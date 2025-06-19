
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { 
  Headphones, 
  User, 
  ShoppingBag, 
  Moon, 
  Sun, 
  Mail,
  Home,
  Mic
} from 'lucide-react';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CommandPalette = ({ open, onOpenChange }: CommandPaletteProps) => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const commands = [
    {
      id: 'home',
      label: 'Go to Home',
      icon: Home,
      action: () => navigate('/'),
      group: 'Navigation'
    },
    {
      id: 'episodes',
      label: 'Listen to Latest Episode',
      icon: Headphones,
      action: () => navigate('/episodes'),
      group: 'Navigation'
    },
    {
      id: 'guests',
      label: 'View All Guests',
      icon: User,
      action: () => navigate('/guests'),
      group: 'Navigation'
    },
    {
      id: 'zura',
      label: 'View Guest: Zura Abelashvili',
      icon: Mic,
      action: () => navigate('/guests/zura-abelashvili'),
      group: 'Guests'
    },
    {
      id: 'shop',
      label: 'Go to Shop',
      icon: ShoppingBag,
      action: () => navigate('/shop'),
      group: 'Navigation'
    },
    {
      id: 'theme',
      label: isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      icon: isDarkMode ? Sun : Moon,
      action: () => {
        setIsDarkMode(!isDarkMode);
        // Theme toggle placeholder - would integrate with actual theme system
        console.log('Theme toggled:', !isDarkMode ? 'dark' : 'light');
      },
      group: 'Settings'
    },
    {
      id: 'newsletter',
      label: 'Subscribe to Newsletter',
      icon: Mail,
      action: () => {
        // Scroll to footer or show newsletter modal
        const footer = document.querySelector('footer');
        footer?.scrollIntoView({ behavior: 'smooth' });
        onOpenChange(false);
      },
      group: 'Actions'
    }
  ];

  const handleCommand = (command: typeof commands[0]) => {
    command.action();
    onOpenChange(false);
  };

  const groupedCommands = commands.reduce((acc, command) => {
    if (!acc[command.group]) {
      acc[command.group] = [];
    }
    acc[command.group].push(command);
    return acc;
  }, {} as Record<string, typeof commands>);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput 
        placeholder="Type a command or search..." 
        className="border-border focus:ring-primary"
      />
      <CommandList className="max-h-[400px]">
        <CommandEmpty className="text-muted-foreground">
          No results found.
        </CommandEmpty>
        
        {Object.entries(groupedCommands).map(([group, groupCommands]) => (
          <CommandGroup key={group} heading={group}>
            {groupCommands.map((command) => (
              <CommandItem
                key={command.id}
                onSelect={() => handleCommand(command)}
                className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-accent data-[selected=true]:bg-accent/50"
              >
                <command.icon className="h-4 w-4 text-primary" />
                <span>{command.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
};

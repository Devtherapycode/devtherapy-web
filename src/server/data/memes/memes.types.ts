export type MemeType = 'image' | 'video';

export type MemeItem = {
  url: string;
  filename: string;
  type: MemeType;
};

export type MemeFilters = MemeType[];

export type MemeModalProps = {
  selectedMeme: MemeItem | null;
  onCloseMeme: () => void;
  filteredMemes: MemeItem[];
  onShareMeme: (filename: string) => void;
  onOpenMeme: (filename: string) => void;
};

export type MemesFiltersProps = {
  filteredMemesCount: number;
  activeFilters: MemeFilters;
  onFiltersChange: (filters: MemeFilters) => void;
  updateLayout: () => void;
};

export type MemesMasonryGridProps = {
  filteredMemes: MemeItem[];
  onMemeOpen: (filename: string) => void;
  onMemeShare: (filename: string) => void;
  masonryRef: React.RefObject<HTMLDivElement>;
};

export type MasonryLayoutConfig = {
  gap: number;
  columns: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  breakpoints: {
    tablet: number;
    desktop: number;
  };
};
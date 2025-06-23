import { MemeItem } from '@/server/data/memes/memes.types';
import { create } from 'zustand';

interface MemeStore {
  selectedMeme: MemeItem | null;
  setSelectedMeme: (meme: MemeItem | null) => void;
  clearSelectedMeme: () => void;
}

export const useMemeStore = create<MemeStore>((set, get) => ({
  selectedMeme: null,
  onUrlUpdate: undefined,
  setSelectedMeme: (meme) => {
    set({ selectedMeme: meme });
  },
  clearSelectedMeme: () => {
    set({ selectedMeme: null });
  },
}));

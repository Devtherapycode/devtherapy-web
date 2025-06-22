import { MemeItem } from '@/server/data/memes/memes.types';
import { create } from 'zustand';

interface MemeStore {
  selectedMeme: MemeItem | null;
  setSelectedMeme: (meme: MemeItem | null) => void;
  clearSelectedMeme: () => void;
  // URL synchronization callbacks
  onUrlUpdate?: (filename: string | null) => void;
  setUrlUpdateCallback: (callback: (filename: string | null) => void) => void;
}

export const useMemeStore = create<MemeStore>((set, get) => ({
  selectedMeme: null,
  onUrlUpdate: undefined,
  setSelectedMeme: (meme) => {
    set({ selectedMeme: meme });
    if (get().onUrlUpdate) {
      get().onUrlUpdate?.(meme?.filename || null);
    }
  },
  clearSelectedMeme: () => {
    set({ selectedMeme: null });
    if (get().onUrlUpdate) {
      get().onUrlUpdate?.(null);
    }
  },
  setUrlUpdateCallback: (callback) => set({ onUrlUpdate: callback }),
}));

import { create } from 'zustand';

type RangeStore = {
  range: [number, number];
  setRange: (newRange: [number, number]) => void;
};

export const useRangeStore = create<RangeStore>((set) => ({
  range: [0, 1500],
  setRange: (newRange) => set({ range: newRange }),
}));
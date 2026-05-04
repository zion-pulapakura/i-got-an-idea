"use client";

import { create } from "zustand";

type BagState = {
  normal: string[];
  incl: string[];
  excl: string[];
  addToNormal: (tech: string) => void;
  addToIncl: (tech: string) => void;
  addToExcl: (tech: string) => void;
  cycleOptionState: (option: string) => void;
};

export const useBagStore = create<BagState>((set, get) => ({
  normal: [],
  incl: [],
  excl: [],
  addToNormal: (tech) => set((state) => ({ normal: [...state.normal, tech] })),
  addToIncl: (tech) => set((state) => ({ incl: [...state.incl, tech] })),
  addToExcl: (tech) => set((state) => ({ excl: [...state.excl, tech] })),

  cycleOptionState: (option) => {
    const { normal, incl, excl } = get();

    if (normal.includes(option)) {
      set({
        normal: normal.filter((t) => t !== option),
        incl: [...incl, option],
      });
    } else if (incl.includes(option)) {
      set({
        incl: incl.filter((t) => t !== option),
        excl: [...excl, option],
      });
    } else if (excl.includes(option)) {
      set({
        normal: [...normal, option],
        excl: excl.filter((t) => t !== option),
      });
    }
  },
}));

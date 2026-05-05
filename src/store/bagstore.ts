"use client";

import { create } from "zustand";

export type OptionState = "normal" | "incl" | "excl";

type BagItem = {
  tech: string;
  state: OptionState;
};

type BagStore = {
  items: BagItem[];
  setItem: (item: BagItem) => void;
  findTechState: (tech: string) => OptionState;
};

export const useBagStore = create<BagStore>((set, get) => ({
  items: [],
  setItem: (item) =>
    set((state) => {
      const idx = state.items.findIndex((i) => i.tech === item.tech);
      if (idx === -1) {
        return { items: [...state.items, item] };
      }
      const next = [...state.items];
      next[idx] = item;
      return { items: next };
    }),
  findTechState: (tech) => {
    const items = get().items;
    return items.find((i) => i.tech === tech)?.state ?? "normal";
  },
}));

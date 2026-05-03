"use client";

import { create } from "zustand";

type BagState = {
  normal: string[];
  incl: string[];
  excl: string[];
  addToNormal: (id: string) => void;
  addToIncl: (id: string) => void;
  addToExcl: (id: string) => void;
};

export const useBagStore = create<BagState>((set) => ({
  normal: [],
  incl: [],
  excl: [],
  addToNormal: (id) =>
    set((state) => ({ normal: [...state.normal, id] })),
  addToIncl: (id) =>
    set((state) => ({ incl: [...state.incl, id] })),
  addToExcl: (id) =>
    set((state) => ({ excl: [...state.excl, id] })),
}));

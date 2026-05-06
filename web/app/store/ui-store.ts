"use client";

import { create } from "zustand";

export type NavTab = "projects" | "media";
export type BuildTarget = "web" | "application" | "mobile";
export type BagSection = "AI & ML" | "FRONTEND" | "BACKEND" | "OTHER";

type UiState = {
  activeNavTab: NavTab;
  buildTarget: BuildTarget;
  activeBagSection: BagSection;
  setActiveNavTab: (tab: NavTab) => void;
  setBuildTarget: (target: BuildTarget) => void;
  setActiveBagSection: (section: BagSection) => void;
};

export const useUiStore = create<UiState>((set) => ({
  activeNavTab: "projects",
  buildTarget: "web",
  activeBagSection: "AI & ML",
  setActiveNavTab: (tab) => set({ activeNavTab: tab }),
  setBuildTarget: (target) => set({ buildTarget: target }),
  setActiveBagSection: (section) => set({ activeBagSection: section }),
}));

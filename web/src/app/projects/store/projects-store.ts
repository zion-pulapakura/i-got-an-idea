"use client";

import { create } from "zustand";

export type GeneratedProject = {
  title: string;
  description: string;
  techUsed: string[];
};

type ProjectsStoreState = {
  generatedProjects: GeneratedProject[];
  setGeneratedProjects: (projects: GeneratedProject[]) => void;
};

export const useProjectsStore = create<ProjectsStoreState>((set) => ({
  generatedProjects: [],
  setGeneratedProjects: (projects) => set({ generatedProjects: projects }),
}));

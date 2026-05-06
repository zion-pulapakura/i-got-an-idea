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
  generatedProjects: [
    {
      title: "Project Idea",
      description: "This project does something",
      techUsed: ["Tech", "Tech"],
    },
  ],
  setGeneratedProjects: (projects) => set({ generatedProjects: projects }),
}));

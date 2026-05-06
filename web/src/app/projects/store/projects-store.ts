"use client";

import { create } from "zustand";

export type GeneratedProject = {
  title: string;
  description: string;
  techUsed: string[];
};

type ProjectsStoreState = {
  openAiId: string;
  setOpenAiId: (id: string) => void;
  generatedProjects: GeneratedProject[];
  setGeneratedProjects: (projects: GeneratedProject[]) => void;
};

export const useProjectsStore = create<ProjectsStoreState>((set) => ({
  openAiId: "",
  setOpenAiId: (id) => set({ openAiId: id }),
  generatedProjects: [
    {
      title: "Project Idea",
      description: "This project does something",
      techUsed: ["Tech used"],
    },
  ],
  setGeneratedProjects: (projects) => set({ generatedProjects: projects }),
}));

"use client";

import { useState } from "react";

import { generateProjects } from "../../api/generateProjects";
import { ProjectCarousel } from "./project-carousel";

export type GeneratedProject = {
  title: string;
  description: string;
  techUsed: string[];
};

export function ProjectIdeasPanel() {
  const [projectTips, setProjectTips] = useState("");
  const [projects, setProjects] = useState<GeneratedProject[]>([]);

  return (
    <aside className="flex h-full min-h-0 flex-1 flex-col gap-3">
      <textarea
        value={projectTips}
        onChange={(e) => setProjectTips(e.target.value)}
        placeholder="Any extra tips..."
        className="h-32 w-full shrink-0 resize-none rounded-xl bg-brand-light p-4 text-brand-dark placeholder:text-brand-dark/70 focus:outline-none"
      />
      <button
        type="button"
        className="w-full shrink-0 rounded-xl bg-brand-dark py-3 text-base font-semibold tracking-[0.4em] text-brand-white"
        onClick={() => {
          generateProjects(projectTips).then((projects) =>
            setProjects(projects),
          );
        }}
      >
        GENERATE
      </button>
      <ProjectCarousel projects={projects} />
    </aside>
  );
}

"use client";

import { useState } from "react";

import { generateProjects } from "../../api/generateProjects";
import { useProjectsStore } from "@/app/projects/store/projects-store";

import { ProjectCarousel } from "./project-carousel";

export function ProjectIdeasPanel() {
  const [projectTips, setProjectTips] = useState("");
  const { setGeneratedProjects } = useProjectsStore();

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
            setGeneratedProjects(projects),
          );
        }}
      >
        GENERATE
      </button>
      <ProjectCarousel />
    </aside>
  );
}

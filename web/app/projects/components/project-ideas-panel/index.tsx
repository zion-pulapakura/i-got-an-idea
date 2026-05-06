"use client";

import { useState } from "react";

import { GenerateButton } from "./generate-button";
import { ProjectCarousel } from "./project-carousel";

export function ProjectIdeasPanel() {
  const [projectTips, setProjectTips] = useState("");

  return (
    <aside className="flex h-full min-h-0 flex-1 flex-col gap-3">
      <textarea
        value={projectTips}
        onChange={(e) => setProjectTips(e.target.value)}
        placeholder="Any extra tips..."
        className="h-32 w-full shrink-0 resize-none rounded-xl bg-brand-light p-4 text-brand-dark placeholder:text-brand-dark/70 focus:outline-none"
      />
      <GenerateButton tips={projectTips} />
      <ProjectCarousel />
    </aside>
  );
}

"use client";

import { ProjectIdeasPanel } from "@/app/projects/components/project-ideas-panel";
import { TheBag } from "@/app/projects/components/the-bag";
import { WhereIsIt } from "@/app/projects/components/where-is-it";
import { useProjectsUi } from "@/app/projects/hooks/use-projects-ui";

export default function ProjectsPage() {
  const {
    buildTarget,
    setBuildTarget,
    activeBagSection,
    setActiveBagSection,
  } = useProjectsUi();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-stretch">
      <div className="flex min-w-0 flex-1 flex-col gap-10 lg:basis-1/2">
        <WhereIsIt
          buildTarget={buildTarget}
          onBuildTargetChange={setBuildTarget}
        />
        <TheBag
          activeBagSection={activeBagSection}
          onBagSectionChange={setActiveBagSection}
        />
      </div>
      <div className="flex min-h-0 min-w-0 flex-1 flex-col lg:basis-1/2">
        <ProjectIdeasPanel />
      </div>
    </div>
  );
}

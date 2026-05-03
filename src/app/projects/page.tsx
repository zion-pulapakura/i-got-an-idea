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
    <main className=" flex w-full max-w-7xl flex-1 flex-col px-4 py-8 md:px-8">
      <section className="grid flex-1 gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-10">
          <WhereIsIt
            buildTarget={buildTarget}
            onBuildTargetChange={setBuildTarget}
          />
          <TheBag
            activeBagSection={activeBagSection}
            onBagSectionChange={setActiveBagSection}
          />
        </div>
        <ProjectIdeasPanel />
      </section>
    </main>
  );
}

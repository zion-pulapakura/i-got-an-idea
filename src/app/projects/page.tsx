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
    <div className="flex w-full flex-col lg:min-h-[calc(100vh-8rem)] lg:flex-row gap-5 px-10 lg:items-stretch py-10">
      <section className="box-border flex w-full min-w-0 flex-col gap-10 border-b border-brand-dark pb-8 lg:w-[60%] lg:flex-none lg:border-b-0 lg:border-r lg:border-r-brand-dark lg:pb-0">
        <WhereIsIt
          buildTarget={buildTarget}
          onBuildTargetChange={setBuildTarget}
        />
        <TheBag
          activeBagSection={activeBagSection}
          onBagSectionChange={setActiveBagSection}
        />
      </section>
      <section className="box-border flex min-h-0 w-full min-w-0 flex-colpt-8 lg:w-[40%] lg:flex-none lg:pt-0">
        <ProjectIdeasPanel />
      </section>
    </div>
  );
}

"use client";

import { ProjectIdeasPanel } from "@/app/projects/components/project-ideas-panel";
import { TheBag } from "@/app/projects/components/the-bag";
import { WhereIsIt } from "@/app/projects/components/where-is-it";

export default function ProjectsPage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] min-h-[calc(100vh-8rem)] w-full flex-row items-stretch py-10">
      <section className="box-border flex h-full min-h-0 w-1/2 min-w-0 flex-none flex-col px-10 border-r border-r-brand-dark pb-0">
        <div className="shrink-0">
          <WhereIsIt />
        </div>
        <TheBag />
      </section>
      <section className="box-border flex h-full min-h-0 w-1/2 min-w-0 flex-none flex-col px-10 pt-0">
        <ProjectIdeasPanel />
      </section>
    </div>
  );
}

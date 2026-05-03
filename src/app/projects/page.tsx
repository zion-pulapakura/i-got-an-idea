"use client";

import { ProjectIdeasPanel } from "@/app/projects/components/project-ideas-panel";
import { TheBag } from "@/app/projects/components/the-bag";
import { WhereIsIt } from "@/app/projects/components/where-is-it";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] w-full flex-row items-stretch gap-5 px-10 py-10">
      <section className="box-border flex w-1/2 min-w-0 flex-none flex-col gap-10 border-r border-r-brand-dark pb-0">
        <WhereIsIt />
        <TheBag />
      </section>
      <section className="box-border flex min-h-0 w-1/2 min-w-0 flex-none flex-col pt-0">
        <ProjectIdeasPanel />
      </section>
    </div>
  );
}

"use client";

import { ProjectIdeasPanel } from "@/app/projects/components/project-ideas-panel";
import { TheBag } from "@/app/projects/components/the-bag";
import { WhereIsIt } from "@/app/projects/components/where-is-it";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-full w-full flex-row items-stretch border ">
      <section className="box-border flex w-1/2 flex-none flex-col border-r-brand-dark">
        <div className="">
          <WhereIsIt />
        </div>
        <TheBag />
      </section>
      <section className="box-border flex h-full w-1/2 flex-none flex-col">
        <ProjectIdeasPanel />
      </section>
    </div>
  );
}

"use client";

import { useEffect } from "react";

import { ProjectIdeasPanel } from "@/app/projects/components/project-ideas-panel";
import { TheBag } from "@/app/projects/components/the-bag";
import { WhereIsIt } from "@/app/projects/components/where-is-it";
import { loadBagIntoState } from "@/app/projects/utils/loadBagIntoState";

export default function ProjectsPage() {
  useEffect(() => {
    loadBagIntoState();
  }, []);

  return (
    <div className="flex min-h-full w-full flex-row items-stretch">
      <section className=" flex w-1/2 flex-none flex-col gap-10 pr-10 border-r-brand-dark border-r">
        <WhereIsIt />
        <TheBag />
      </section>
      <section className="flex w-1/2 flex-none flex-col pl-10">
        <ProjectIdeasPanel />
      </section>

    </div>
  );
}

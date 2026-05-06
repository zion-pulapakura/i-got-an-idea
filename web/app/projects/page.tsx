"use client";

import { useEffect } from "react";

import { ProjectIdeasPanel } from "./components/project-ideas-panel";
import { TheBag } from "./components/the-bag";
import { WhereIsIt } from "./components/where-is-it";
import { loadBagIntoState } from "./utils/loadBagIntoState";

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

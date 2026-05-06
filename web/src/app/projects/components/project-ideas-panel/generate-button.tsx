"use client";

import { useState } from "react";

import { Loader } from "@/app/components/loader";
import { useProjectsStore } from "@/app/projects/store/projects-store";

import { generateProjects } from "../../api/generateProjects";

type Props = {
  tips: string;
};

export function GenerateButton({ tips }: Props) {
  const [isGenerating, setIsGenerating] = useState(false);
  const setGeneratedProjects = useProjectsStore((s) => s.setGeneratedProjects);

  return (
    <button
      type="button"
      disabled={isGenerating}
      className="flex w-full shrink-0 items-center justify-center rounded-xl bg-brand-dark py-3 text-base font-semibold tracking-[0.4em] text-brand-white disabled:opacity-70"
      onClick={async () => {
        try {
          setIsGenerating(true);
          const projects = await generateProjects(tips);
          setGeneratedProjects(projects);
        } finally {
          setIsGenerating(false);
        }
      }}
    >
      {isGenerating ? <Loader className="text-brand-white" /> : "GENERATE"}
    </button>
  );
}

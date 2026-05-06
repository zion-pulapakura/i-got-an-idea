"use client";

import { useState } from "react";

import { Loader } from "@/app/components/loader";
import { useProjectsStore } from "@/app/projects/store/projects-store";

import { generateProjects } from "../../api/generateProjects";

type Props = {
  tips: string;
};

export function GenerateButton({ tips }: Props) {
  const [loading, setLoading] = useState(false);
  const { setGeneratedProjects, setOpenAiId } = useProjectsStore();

  return (
    <button
      type="button"
      disabled={loading}
      className="flex w-full shrink-0 items-center justify-center rounded-xl bg-brand-dark py-3 text-base font-semibold tracking-[0.4em] text-brand-white disabled:opacity-70"
      onClick={async () => {
        try {
          setLoading(true);
          const { projects, id } = await generateProjects(tips);
          setGeneratedProjects(projects);
          setOpenAiId(id);
        } finally {
          setLoading(false);
        }
      }}
    >
      {loading ? <Loader className="text-brand-white" /> : "GENERATE"}
    </button>
  );
}

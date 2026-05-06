"use client";

import { useState } from "react";

import { Loader } from "@/app/components/loader";

import { explainProject } from "../../api/explainProject";

type Props = {
  projectTitle: string;
};

export function ExplainButton({ projectTitle }: Props) {
  const [loading, setLoading] = useState(false);

  return (
    <button
      type="button"
      disabled={loading}
      className="mt-3 inline-flex w-fit items-center justify-center rounded-lg border border-brand-black/20 bg-brand-light px-3 py-1 text-xs font-semibold text-brand-dark/90 hover:bg-brand-white disabled:opacity-70"
      onClick={async () => {
        try {
          setLoading(true);
          const explanation = await explainProject(projectTitle);
          console.log(explanation);
        } finally {
          setLoading(false);
        }
      }}
    >
      {loading ? (
        <Loader size={14} className="text-brand-dark/90" />
      ) : (
        "Explain more"
      )}
    </button>
  );
}


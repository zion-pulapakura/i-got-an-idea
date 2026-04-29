"use client";

import type { BuildTarget } from "@/app/projects/hooks/use-projects-ui";

const targets: { value: BuildTarget; label: string }[] = [
  { value: "web", label: "Web" },
  { value: "application", label: "Application" },
  { value: "mobile", label: "Mobile" },
];

type WhereIsItProps = {
  buildTarget: BuildTarget;
  onBuildTargetChange: (target: BuildTarget) => void;
};

export function WhereIsIt({ buildTarget, onBuildTargetChange }: WhereIsItProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Where is it?</h1>
      <div className="flex flex-wrap gap-8">
        {targets.map((target) => (
          <label
            key={target.value}
            className="flex cursor-pointer items-center gap-2 text-3xl"
          >
            <input
              type="radio"
              name="buildTarget"
              checked={buildTarget === target.value}
              onChange={() => onBuildTargetChange(target.value)}
              className="h-5 w-5 accent-brand-dark"
            />
            {target.label}
          </label>
        ))}
      </div>
    </div>
  );
}

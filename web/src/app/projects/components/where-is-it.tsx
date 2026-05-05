"use client";

import { useUiStore, type BuildTarget } from "@/store/ui-store";

const targets: { value: BuildTarget; label: string }[] = [
  { value: "web", label: "Web" },
  { value: "application", label: "Application" },
  { value: "mobile", label: "Mobile" },
];

export function WhereIsIt() {
  const {buildTarget, setBuildTarget} = useUiStore();
  
  return (
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Where is it?</h1>
      <div className="flex flex-wrap gap-10">
        {targets.map((target) => (
          <label
            key={target.value}
            className="flex cursor-pointer items-center gap-2 text-xl "
          >
            <input
              type="radio"
              name="buildTarget"
              checked={buildTarget === target.value}
              onChange={() => setBuildTarget(target.value)}
              className="h-4 w-4 shrink-0 accent-brand-dark"
            />
            {target.label}
          </label>
        ))}
      </div>
    </div>
  );
}

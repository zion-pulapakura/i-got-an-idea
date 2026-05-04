"use client";

import type { BagOption } from "@/app/projects/data/bag-options";
import { useBagStore } from "@/store/bag-store";

type TechnologyPillsProps = {
  options: BagOption[];
};

export function TechnologyPills({ options }: TechnologyPillsProps) {
  const cycleOptionState = useBagStore((s) => s.cycleOptionState);

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          type="button"
          key={option.tech}
          className="rounded-full bg-brand-light px-6 py-1 text-sm font-semibold text-brand-dark"
          onClick={() => cycleOptionState(option.tech)}
        >
          {option.tech}
        </button>
      ))}
    </div>
  );
}

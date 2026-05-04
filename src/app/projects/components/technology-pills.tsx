"use client";

import type { BagOption } from "@/app/projects/data/bag-options";

type TechnologyPillsProps = {
  options: BagOption[];
};

export function TechnologyPills({ options }: TechnologyPillsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <span
          key={option.tech}
          className="rounded-full bg-brand-light px-6 py-1 text-sm font-semibold text-brand-dark"
        >
          {option.tech}
        </span>
      ))}
    </div>
  );
}

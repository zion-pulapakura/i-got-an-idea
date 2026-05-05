"use client";

import { useEffect } from "react";

import type { BagOption } from "@/app/projects/data/bag-options";
import cycleOptionState from "../utils/cycleOptionState";
import { useBagStore, type OptionState } from "@/store/bagstore";

type TechnologyPillsProps = {
  options: BagOption[];
};

function pillClasses(state: OptionState): string | undefined {
  const base =
    "rounded-full border px-6 py-1 text-sm font-semibold transition-colors";
  switch (state) {
    case "normal":
      return `${base} border-transparent bg-brand-light text-brand-dark`;
    case "incl":
      return `${base} border-emerald-600/50 bg-emerald-500/20 text-emerald-950`;
    case "excl":
      return `${base} border-red-600/50 bg-red-500/20 text-red-950`;
  }
}

export function TechnologyPills({ options }: TechnologyPillsProps) {
  const items = useBagStore((s) => s.items);
  const setItem = useBagStore((s) => s.setItem);
  const findTechState = useBagStore((s) => s.findTechState);

  useEffect(() => {}, [options]);

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const state = findTechState(option.tech);
          
        return (
          <button
            type="button"
            key={option.tech}
            className={pillClasses(state)}
            onClick={() => {
              const newState = cycleOptionState(state);
              setItem({ tech: option.tech, state: newState });
            }}
          >
            {option.tech}
          </button>
        );
      })}
    </div>
  );
}

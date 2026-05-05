"use client";

import { useEffect } from "react";

import type { BagOption } from "@/app/projects/data/bag-options";
import cycleOptionState from "../utils/cycleOptionState";
import { useBagStore, type OptionState } from "@/store/bagstore";
import findDependents from "../utils/findDependents";

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
      return `${base} border-transparent bg-pill-incl text-brand-light`;
    case "excl":
      return `${base} border-transparent bg-pill-excl text-brand-light`;
  }
}

export function TechnologyPills({ options }: TechnologyPillsProps) {
  const { setItem, findTechState } = useBagStore();

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

              // if the selected tech has another tech which it depends on
              if (option.requires && newState === "incl") {
                setItem({ tech: option.requires, state: newState });
              }

              // if the selected tech has tech which depends on it
              const dependents = findDependents(option.tech);
              if (dependents.length > 0 && newState === "excl") {
                dependents.forEach((dependent) => {
                  setItem({ tech: dependent.tech, state: "excl" });
                });
              }
            }}
          >
            {option.tech}
          </button>
        );
      })}
    </div>
  );
}

"use client";

import { BagSectionTabs } from "./bag-section-tabs";
import { TechnologyPills } from "./technology-pills";
import { bag } from "../data/bag-options";
import { useUiStore } from "../../store/ui-store";

export function TheBag() {
  const activeBagSection = useUiStore((s) => s.activeBagSection);
  const currentSection =
    bag.find((section) => section.type === activeBagSection) ?? bag[0];

  return (
    <div className="flex flex-1 flex-col gap-4">
      <h2 className="text-5xl font-bold">The Bag</h2>
      <div className="grid min-h-0 flex-1 grid-cols-[140px_1fr] gap-4">
        <BagSectionTabs />
        <div className="min-h-0 overflow-y-auto pt-1">
          <TechnologyPills options={currentSection.options} />
        </div>
      </div>
    </div>
  );
}

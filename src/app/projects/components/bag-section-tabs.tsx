"use client";

import { bag } from "@/app/projects/data/bag-options";
import { useUiStore } from "@/store/ui-store";

export function BagSectionTabs() {
  const {activeBagSection, setActiveBagSection} = useUiStore();

  return (
    <div className="flex h-full flex-col rounded border border-l-0 border-brand-black">
      {bag.map((section) => {
        const isActive = section.type === activeBagSection;
        return (
          <button
            type="button"
            key={section.type}
            onClick={() => setActiveBagSection(section.type)}
            className={`flex flex-1 flex-col justify-center border-b border-brand-black text-sm font-bold tracking-wide transition last:border-b-0 ${
              isActive
                ? "border-r border-brand-black bg-brand-accent text-brand-dark"
                : ""
            }`}
          >
            {section.type}
          </button>
        );
      })}
    </div>
  );
}

"use client";

import { bagSections } from "@/app/projects/data/bag-options";
import { useProjectsUi } from "@/app/projects/hooks/use-projects-ui";

export function BagSectionTabs() {
  const { activeBagSection, setActiveBagSection } = useProjectsUi();

  return (
    <div className="overflow-hidden rounded border border-brand-black">
      {bagSections.map((section) => {
        const isActive = section.id === activeBagSection;
        return (
          <button
            type="button"
            key={section.id}
            onClick={() => setActiveBagSection(section.id)}
            className={`flex w-full items-center justify-center border-b border-brand-black px-3 py-8 text-sm font-bold tracking-wide transition last:border-b-0 ${
              isActive
                ? "bg-[#e1b39e] text-brand-orange"
                : "bg-brand-orange text-brand-white"
            }`}
          >
            {section.label}
          </button>
        );
      })}
    </div>
  );
}

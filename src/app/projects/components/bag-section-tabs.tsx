"use client";

import { bagSections } from "@/app/projects/data/bag-options";
import { useProjectsUi } from "@/app/projects/hooks/use-projects-ui";

export function BagSectionTabs() {
  const { activeBagSection, setActiveBagSection } = useProjectsUi();

  return (
    <div className="flex h-full flex-col rounded border border-l-0 border-brand-black">
      {bagSections.map((section) => {
        const isActive = section.id === activeBagSection;
        return (
          <button
            type="button"
            key={section.id}
            onClick={() => setActiveBagSection(section.id)}
            className={`flex flex-1 flex-col justify-center border-b border-brand-black text-sm font-bold tracking-wide transition last:border-b-0 ${
              isActive
                ? "border-r border-brand-black bg-brand-accent text-brand-dark"
                : ""
            }`}
          >
            {section.label}
          </button>
        );
      })}
    </div>
  );
}

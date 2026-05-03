"use client";

import { bagSections } from "@/app/projects/data/bag-options";
import { BagSectionTabs } from "@/app/projects/components/bag-section-tabs";
import { TechnologyPills } from "@/app/projects/components/technology-pills";
import { useProjectsUi } from "@/app/projects/hooks/use-projects-ui";

export function TheBag() {
  const { activeBagSection } = useProjectsUi();
  const currentSection =
    bagSections.find((section) => section.id === activeBagSection) ??
    bagSections[0];

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4">
      <h2 className="shrink-0 text-5xl font-bold">The Bag</h2>
      <div className="grid min-h-0 flex-1 grid-cols-[140px_1fr] gap-4">
        <BagSectionTabs />
        <div className="min-h-0 overflow-y-auto pt-1">
          <TechnologyPills options={currentSection.options} />
        </div>
      </div>
    </div>
  );
}

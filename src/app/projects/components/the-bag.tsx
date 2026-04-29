"use client";

import { bagSections } from "@/app/projects/data/bag-options";
import type { BagSection } from "@/app/projects/hooks/use-projects-ui";
import { BagSectionTabs } from "@/app/projects/components/bag-section-tabs";
import { TechnologyPills } from "@/app/projects/components/technology-pills";

type TheBagProps = {
  activeBagSection: BagSection;
  onBagSectionChange: (section: BagSection) => void;
};

export function TheBag({ activeBagSection, onBagSectionChange }: TheBagProps) {
  const currentSection =
    bagSections.find((section) => section.id === activeBagSection) ?? bagSections[0];

  return (
    <div className="space-y-4">
      <h2 className="text-5xl font-bold">The Bag</h2>
      <div className="grid grid-cols-[140px_1fr] gap-4">
        <BagSectionTabs
          activeSection={activeBagSection}
          onSectionChange={onBagSectionChange}
        />
        <div className="pt-1">
          <TechnologyPills options={currentSection.options} />
        </div>
      </div>
    </div>
  );
}

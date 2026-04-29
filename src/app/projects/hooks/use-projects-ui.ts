"use client";

import { useUiStore, type BagSection, type BuildTarget } from "@/store/ui-store";

export function useProjectsUi() {
  const buildTarget = useUiStore((s) => s.buildTarget);
  const setBuildTarget = useUiStore((s) => s.setBuildTarget);
  const activeBagSection = useUiStore((s) => s.activeBagSection);
  const setActiveBagSection = useUiStore((s) => s.setActiveBagSection);

  return {
    buildTarget,
    setBuildTarget,
    activeBagSection,
    setActiveBagSection,
  } as const;
}

export type { BagSection, BuildTarget };

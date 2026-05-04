import type { BagConfig } from "@/app/projects/data/bag-options";

/**
 * Appends every distinct tech from the bag into `normal` via `addToNormal`
 * (deduped across sections; order is first-seen).
 */
export function loadAllTechIntoNormal(
  bag: BagConfig[],
  addToNormal: (tech: string) => void,
): void {
  const seen = new Set<string>();
  for (const section of bag) {
    for (const { tech } of section.options) {
      if (!seen.has(tech)) {
        seen.add(tech);
        addToNormal(tech);
      }
    }
  }
}

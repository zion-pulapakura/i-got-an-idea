import { bag, type BagOption } from "../data/bag-options";

function findDependents(tech: string): BagOption[] {
  return bag
    .flatMap((section) => section.options)
    .filter((opt) => opt.requires === tech);
}

export default findDependents;

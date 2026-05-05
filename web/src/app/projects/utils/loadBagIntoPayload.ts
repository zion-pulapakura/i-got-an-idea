import { useBagStore } from "@/store/bagstore";

export function loadBagIntoPayload(): string[] {
  const items = useBagStore.getState().items;

  const incl = items
    .filter((item) => item.state === "incl")
    .map((item) => item.tech);
  const normal = items
    .filter((item) => item.state === "normal")
    .map((item) => item.tech);

  return [...new Set([...incl, ...normal])];
}

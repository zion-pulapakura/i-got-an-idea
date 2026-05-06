import { useBagStore } from "../store/bag-store";

export function loadBagIntoPayload() {
  const items = useBagStore.getState().items;

  const incl = items
    .filter((item) => item.state === "incl")
    .map((item) => item.tech);
  const normal = items
    .filter((item) => item.state === "normal")
    .map((item) => item.tech);

  return { incl, normal };
}

import { bag } from "@/app/projects/data/bag-options";
import { useBagStore } from "@/app/projects/store/bag-store";

export function loadBagIntoState() {
  useBagStore.setState({ items: [] });
  const { setItem } = useBagStore.getState();

  for (const section of bag) {
    for (const opt of section.options) {
      setItem({ tech: opt.tech, state: "normal" });
    }
  }
}

export default loadBagIntoState;

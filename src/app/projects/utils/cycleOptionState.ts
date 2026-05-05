import type { OptionState } from "@/store/bagstore";

const cycleOptionState = (state: OptionState): OptionState => {
  switch (state) {
    case "normal":
      return "incl";
    case "incl":
      return "excl";
    case "excl":
      return "normal";
  }
};

export default cycleOptionState;

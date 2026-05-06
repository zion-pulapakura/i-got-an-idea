import type { OptionState } from "../store/bag-store";

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

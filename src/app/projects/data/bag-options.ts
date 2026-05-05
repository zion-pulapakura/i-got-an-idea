import type { BagSection } from "@/store/ui-store";

export type OptionState = "normal" | "incl" | "excl";

export type BagOption = {
  tech: string;
  state: OptionState;
  requires?: string;
  incompatibleWith?: string[];
};

export type BagConfig = {
  type: BagSection;
  options: BagOption[];
};

function opt(
  tech: string,
  extra?: { requires?: string; incompatibleWith?: string[] },
): BagOption {
  return { tech, state: "normal", ...extra };
}

export const bag: BagConfig[] = [
  {
    type: "AI & ML",
    options: [
      opt("Python"),
      opt("Machine Learning"),
      opt("Natural Language Processing"),
      opt("Sentiment Analysis"),
      opt("Retrieval-Augmented Generation"),
      opt("Computer Vision"),
      opt("OpenAI API"),
      opt("LangChain"),
      opt("NLTK", { requires: "Python" }),
      opt("MediaPipe"),
      opt("OpenCV"),
      opt("PyTorch", { requires: "Python" }),
      opt("TensorFlow", { requires: "Python" }),
    ],
  },
  {
    type: "FRONTEND",
    options: [
      opt("JavaScript"),
      opt("TypeScript"),
      opt("React", { requires: "Vite.js" }),
      opt("Vite.js"),
      opt("Material-UI", { requires: "React" }),
      opt("Chakra-UI", { requires: "React" }),
      opt("Tailwind CSS"),
    ],
  },
  {
    type: "BACKEND",
    options: [
      opt("Node.js"),
      opt("Express", { requires: "Node.js" }),
      opt("FastAPI", { requires: "Python" }),
      opt("MongoDB"),
    ],
  },
  {
    type: "OTHER",
    options: [
      opt("Chroma DB"),
      opt("Pygame", { requires: "Python" }),
      opt("Docker"),
      opt("Postgres"),
      opt("Redis"),
    ],
  },
];

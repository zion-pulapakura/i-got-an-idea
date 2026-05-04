import type { BagSection } from "@/store/ui-store";

export type BagOption = {
  tech: string;
  requires?: string[];
  incompatibleWith?: string[];
};

type BagSectionConfig = {
  id: BagSection;
  label: string;
  options: BagOption[];
};

export const bagSections: BagSectionConfig[] = [
  {
    id: "ai-ml",
    label: "AI & ML",
    options: [
      { tech: "Python" },
      { tech: "Machine Learning" },
      { tech: "Natural Language Processing" },
      { tech: "Sentiment Analysis" },
      { tech: "Retrieval-Augmented Generation" },
      { tech: "Computer Vision" },
      { tech: "OpenAI API" },
      { tech: "LangChain" },
      { tech: "NLTK", requires: ["Python"] },
      { tech: "MediaPipe" },
      { tech: "OpenCV" },
      { tech: "PyTorch", requires: ["Python"] },
      { tech: "TensorFlow", requires: ["Python"] },
    ],
  },
  {
    id: "frontend",
    label: "FRONTEND",
    options: [
      { tech: "JavaScript" },
      { tech: "TypeScript" },
      { tech: "React", requires: ["Vite.js"] },
      { tech: "Vite.js" },
      { tech: "Material-UI", requires: ["React"] },
      { tech: "Chakra-UI", requires: ["React"] },
      { tech: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    label: "BACKEND",
    options: [
      { tech: "Node.js" },
      { tech: "Express", requires: ["Node.js"] },
      { tech: "FastAPI", requires: ["Python"] },
      { tech: "MongoDB" },
      { tech: "Mongoose", requires: ["MongoDB", "Node.js"] },
    ],
  },
  {
    id: "other",
    label: "OTHER",
    options: [
      { tech: "Chroma DB" },
      { tech: "Pygame", requires: ["Python"] },
      { tech: "Docker" },
      { tech: "Postgres" },
      { tech: "Redis" },
    ],
  },
];

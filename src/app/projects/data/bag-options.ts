import type { BagSection } from "@/store/ui-store";

type BagOption = {
  id: string;
  label: string;
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
      { id: "Python", label: "Python" },
      { id: "Machine Learning", label: "Machine Learning" },
      { id: "Natural Language Processing", label: "Natural Language Processing" },
      { id: "Sentiment Analysis", label: "Sentiment Analysis" },
      { id: "Retrieval-Augmented Generation", label: "Retrieval-Augmented Generation" },
      { id: "Computer Vision", label: "Computer Vision" },
      { id: "OpenAI API", label: "OpenAI API" },
      { id: "LangChain", label: "LangChain" },
      { id: "NLTK", label: "NLTK", requires: ["Python"] },
      { id: "MediaPipe", label: "MediaPipe" },
      { id: "OpenCV", label: "OpenCV" },
      { id: "PyTorch", label: "PyTorch", requires: ["Python"] },
      { id: "TensorFlow", label: "TensorFlow", requires: ["Python"] },
    ],
  },
  {
    id: "frontend",
    label: "FRONTEND",
    options: [
      { id: "JavaScript", label: "JavaScript" },
      { id: "TypeScript", label: "TypeScript" },
      { id: "React", label: "React", requires: ["Vite.js"] },
      { id: "Vite.js", label: "Vite.js" },
      { id: "Material-UI", label: "Material-UI", requires: ["React"] },
      { id: "Chakra-UI", label: "Chakra-UI", requires: ["React"] },
      { id: "Tailwind CSS", label: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    label: "BACKEND",
    options: [
      { id: "Node.js", label: "Node.js" },
      { id: "Express", label: "Express", requires: ["Node.js"] },
      { id: "FastAPI", label: "FastAPI", requires: ["Python"] },
      { id: "MongoDB", label: "MongoDB" },
      { id: "Mongoose", label: "Mongoose", requires: ["MongoDB", "Node.js"] },
    ],
  },
  {
    id: "other",
    label: "OTHER",
    options: [
      { id: "Chroma DB", label: "Chroma DB" },
      { id: "Pygame", label: "Pygame", requires: ["Python"] },
      { id: "Docker", label: "Docker" },
      { id: "Postgres", label: "Postgres" },
      { id: "Redis", label: "Redis" },
    ],
  },
];

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
      { id: "python", label: "Python" },
      { id: "machine-learning", label: "Machine Learning" },
      { id: "nlp", label: "Natural Language Processing" },
      { id: "sentiment-analysis", label: "Sentiment Analysis" },
      { id: "rag", label: "Retrieval-Augmented Generation" },
      { id: "computer-vision", label: "Computer Vision" },
      { id: "openai-api", label: "OpenAI API" },
      { id: "langchain", label: "LangChain" },
      { id: "nltk", label: "NLTK", requires: ["python"] },
      { id: "mediapipe", label: "MediaPipe" },
      { id: "opencv", label: "OpenCV" },
      { id: "pytorch", label: "PyTorch", requires: ["python"] },
      { id: "tensorflow", label: "TensorFlow", requires: ["python"] },
    ],
  },
  {
    id: "frontend",
    label: "FRONTEND",
    options: [
      { id: "javascript", label: "JavaScript" },
      { id: "typescript", label: "TypeScript" },
      { id: "react", label: "React", requires: ["vite"] },
      { id: "vite", label: "Vite.js" },
      { id: "material-ui", label: "Material-UI", requires: ["react"] },
      { id: "chakra-ui", label: "Chakra-UI", requires: ["react"] },
      { id: "tailwind", label: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    label: "BACKEND",
    options: [
      { id: "node", label: "Node.js" },
      { id: "express", label: "Express", requires: ["node"] },
      { id: "fastapi", label: "FastAPI", requires: ["python"] },
      { id: "mongodb", label: "MongoDB" },
      { id: "mongoose", label: "Mongoose", requires: ["mongodb", "node"] },
    ],
  },
  {
    id: "other",
    label: "OTHER",
    options: [
      { id: "chroma-db", label: "Chroma DB" },
      { id: "pygame", label: "Pygame", requires: ["python"] },
      { id: "docker", label: "Docker" },
      { id: "postgres", label: "Postgres" },
      { id: "redis", label: "Redis" },
    ],
  },
];

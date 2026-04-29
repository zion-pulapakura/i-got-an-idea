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
      { id: "pytorch", label: "PyTorch", requires: ["python"] },
      { id: "tensorflow", label: "TensorFlow", requires: ["python"] },
    ],
  },
  {
    id: "frontend",
    label: "FRONTEND",
    options: [
      { id: "react", label: "React", requires: ["vite"] },
      { id: "vite", label: "Vite" },
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
    ],
  },
  {
    id: "other",
    label: "OTHER",
    options: [
      { id: "docker", label: "Docker" },
      { id: "postgres", label: "Postgres" },
      { id: "redis", label: "Redis" },
    ],
  },
];

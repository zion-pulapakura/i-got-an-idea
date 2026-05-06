const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
import getHeaders from "@/app/utils/getHeaders";

import { useProjectsStore } from "@/app/projects/store/projects-store";

export async function explainProject(
  projectTitle: string,
) {
  if (!API_BASE_URL) {
    throw new Error("Missing NEXT_PUBLIC_API_BASE_URL");
  }

  const res = await fetch(`${API_BASE_URL}/gen/explain`, {
    method: "POST",
    mode: "cors",
    headers: getHeaders(),
    body: JSON.stringify({
      projectTitle,
      openAiId: useProjectsStore.getState().openAiId,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`POST /gen/explain failed (${res.status}): ${text}`);
  }

  const data = (await res.json()) as { explanation: string; };
  return data.explanation;
}


const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
import getHeaders from "@/app/utils/getHeaders";
import type { GeneratedProject } from "@/app/projects/store/projects-store";

import { loadBagIntoPayload } from "../utils/loadBagIntoPayload";

export async function generateProjects(
  tips: string,
): Promise<GeneratedProject[]> {
  if (!API_BASE_URL) {
    throw new Error("Missing NEXT_PUBLIC_API_BASE_URL");
  }

  const res = await fetch(`${API_BASE_URL}/gen/proj`, {
    method: "POST",
    mode: "cors",
    headers: getHeaders(),
    body: JSON.stringify({ tips, bag: loadBagIntoPayload() }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`POST /gen/proj failed (${res.status}): ${text}`);
  }

  const data = (await res.json()) as { projects: GeneratedProject[] };
  return data.projects;
}

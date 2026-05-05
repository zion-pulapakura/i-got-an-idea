const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
import { loadBagIntoPayload } from "../utils/loadBagIntoPayload";

export async function generateProjects(tips: string) {
  if (!API_BASE_URL) {
    throw new Error("Missing NEXT_PUBLIC_API_BASE_URL");
  }

  const res = await fetch(`${API_BASE_URL}/gen/proj`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ tips, bag: loadBagIntoPayload() }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`POST /gen/proj failed (${res.status}): ${text}`);
  }

  return res.json();
}

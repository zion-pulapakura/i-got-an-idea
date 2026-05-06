const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
import { loadBagIntoPayload } from "../utils/loadBagIntoPayload";
import getHeaders from "@/app/utils/getHeaders";

export async function generateProjects(tips: string) {
  if (!API_BASE_URL) {
    throw new Error("Missing NEXT_PUBLIC_API_BASE_URL");
  }

  console.log(`${API_BASE_URL}/gen/proj`);
  const res = await fetch(`${API_BASE_URL}/gen/proj`, {
    method: "POST",
    mode: "cors",
    headers: getHeaders(),
    body: JSON.stringify({ tips, bag: loadBagIntoPayload() }),
  });

  console.log('ok')

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`POST /gen/proj failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  console.log(data);
  return data.projects;
}

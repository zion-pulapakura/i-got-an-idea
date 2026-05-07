import getHeaders from "../../utils/getHeaders";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const MEDIA_SOURCE_OPTIONS = [
  { id: "medium", label: "Medium" },
  { id: "hackernews", label: "Hacker News" },
] as const;

export type MediaSource = (typeof MEDIA_SOURCE_OPTIONS)[number]["id"];

export type MediaItem = {
  source: MediaSource;
  title: string;
  url: string;
  publishedAt: string;
  author?: string;
};

export type MediaSourceError = {
  source: MediaSource;
  message: string;
};

export async function fetchLatestNews(sources: MediaSource[]) {
  if (!API_BASE_URL) {
    throw new Error("Missing NEXT_PUBLIC_API_BASE_URL");
  }

  const res = await fetch(`${API_BASE_URL}/gen/media/latest`, {
    method: "POST",
    mode: "cors",
    headers: getHeaders(),
    body: JSON.stringify({ sources }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`POST /gen/media/latest failed (${res.status}): ${text}`);
  }

  return (await res.json()) as {
    items: MediaItem[];
    errors: MediaSourceError[];
  };
}

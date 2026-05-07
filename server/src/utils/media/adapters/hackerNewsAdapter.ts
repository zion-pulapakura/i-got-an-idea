import { MediaItem, MediaSourceAdapter } from "../types";

const HN_TOP_STORIES_URL =
  "https://hacker-news.firebaseio.com/v0/topstories.json";
const HN_ITEM_URL = "https://hacker-news.firebaseio.com/v0/item";

type HackerNewsItem = {
  title?: string;
  url?: string;
  by?: string;
  time?: number;
  type?: string;
};

export const hackerNewsAdapter: MediaSourceAdapter = {
  source: "Hacker News",
  fetchLatest: async (limit: number): Promise<MediaItem[]> => {
    const topStoriesRes = await fetch(HN_TOP_STORIES_URL);
    if (!topStoriesRes.ok) {
      throw new Error(`Failed to load top stories (${topStoriesRes.status})`);
    }

    const storyIds = (await topStoriesRes.json()) as number[];
    const limitedStoryIds = storyIds.slice(0, Math.max(limit * 2, 20));
    const stories = await Promise.all(
      limitedStoryIds.map(async (id) => {
        const itemRes = await fetch(`${HN_ITEM_URL}/${id}.json`);
        if (!itemRes.ok) {
          return null;
        }
        return (await itemRes.json()) as HackerNewsItem;
      }),
    );

    return stories
      .filter((item): item is HackerNewsItem => Boolean(item))
      .filter((item) => item.type === "story" && Boolean(item.title))
      .slice(0, limit)
      .map((item) => ({
        source: "Hacker News",
        title: item.title ?? "Untitled story",
        url: item.url ?? "https://news.ycombinator.com",
        publishedAt: new Date((item.time ?? 0) * 1000).toISOString(),
        author: item.by,
      }));
  },
};

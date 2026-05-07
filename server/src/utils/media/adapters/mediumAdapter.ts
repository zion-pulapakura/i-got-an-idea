import { MediaItem, MediaSourceAdapter } from "../types";

const MEDIUM_TECH_RSS_URL = "https://medium.com/feed/tag/technology";

const decodeHtmlEntities = (text: string) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const stripCdata = (text: string) =>
  text.replace("<![CDATA[", "").replace("]]>", "").trim();

const getTag = (block: string, tag: string) => {
  const match = block.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match?.[1]?.trim();
};

const toIsoDate = (dateString?: string) => {
  if (!dateString) {
    return new Date().toISOString();
  }
  const parsed = new Date(dateString);
  if (Number.isNaN(parsed.getTime())) {
    return new Date().toISOString();
  }
  return parsed.toISOString();
};

export const mediumAdapter: MediaSourceAdapter = {
  source: "Medium",
  fetchLatest: async (limit: number): Promise<MediaItem[]> => {
    const response = await fetch(MEDIUM_TECH_RSS_URL);
    if (!response.ok) {
      throw new Error(`Failed to load Medium RSS (${response.status})`);
    }

    const xml = await response.text();
    const itemBlocks = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];

    return itemBlocks.slice(0, limit).map((itemBlock) => {
      const rawTitle = getTag(itemBlock, "title") ?? "Untitled article";
      const rawLink = getTag(itemBlock, "link") ?? "https://medium.com/tag/technology";
      const rawPubDate = getTag(itemBlock, "pubDate");
      const rawAuthor = getTag(itemBlock, "dc:creator");

      return {
        source: "Medium",
        title: decodeHtmlEntities(stripCdata(rawTitle)),
        url: decodeHtmlEntities(stripCdata(rawLink)),
        publishedAt: toIsoDate(rawPubDate),
        author: rawAuthor ? decodeHtmlEntities(stripCdata(rawAuthor)) : undefined,
      };
    });
  },
};

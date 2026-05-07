import { hackerNewsAdapter } from "./adapters/hackerNewsAdapter";
import { mediumAdapter } from "./adapters/mediumAdapter";
import { MediaSource, MediaSourceAdapter } from "./types";

export const mediaSourceRegistry: Record<MediaSource, MediaSourceAdapter> = {
  "Hacker News": hackerNewsAdapter,
  Medium: mediumAdapter,
};

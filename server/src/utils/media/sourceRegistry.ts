import { hackerNewsAdapter } from "./adapters/hackerNewsAdapter";
import { mediumAdapter } from "./adapters/mediumAdapter";
import { MediaSource, MediaSourceAdapter } from "./types";

export const mediaSourceRegistry: Record<MediaSource, MediaSourceAdapter> = {
  medium: mediumAdapter,
  hackernews: hackerNewsAdapter,
};

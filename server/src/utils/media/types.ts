export const MEDIA_SOURCES = ["Hacker News", "Medium"] as const;
export type MediaSource = (typeof MEDIA_SOURCES)[number];

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

export type MediaSourceAdapter = {
  source: MediaSource;
  fetchLatest: (limit: number) => Promise<MediaItem[]>;
};

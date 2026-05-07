import {
  MEDIA_SOURCES,
  MediaItem,
  MediaSource,
  MediaSourceError,
} from "./types";
import { mediaSourceRegistry } from "./sourceRegistry";

const MAX_PER_SOURCE = 10;
const MAX_TOTAL_ITEMS = 30;

const uniqueSources = (sources: MediaSource[]) =>
  [...new Set(sources)].filter((source): source is MediaSource =>
    MEDIA_SOURCES.includes(source),
  );

export const fetchLatestMedia = async (
  sources: MediaSource[],
): Promise<{ items: MediaItem[]; errors: MediaSourceError[] }> => {
  const selectedSources = uniqueSources(sources);

  const settled = await Promise.allSettled(
    selectedSources.map(async (source) => {
      const adapter = mediaSourceRegistry[source];
      const items = await adapter.fetchLatest(MAX_PER_SOURCE);
      return { source, items };
    }),
  );

  console.log("settled");
  console.log(settled);
  const items: MediaItem[] = [];
  const errors: MediaSourceError[] = [];

  for (const [index, result] of settled.entries()) {
    if (result.status === "fulfilled") {
      items.push(...result.value.items);
      continue;
    }

    const fallbackSource = selectedSources[index];
    errors.push({
      source: fallbackSource,
      message: result.reason instanceof Error ? result.reason.message : "Unknown source error",
    });
  }

  const sortedItems = items
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, MAX_TOTAL_ITEMS);

  return { items: sortedItems, errors };
};

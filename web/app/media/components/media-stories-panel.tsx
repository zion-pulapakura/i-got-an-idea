import type { MediaItem } from "../api/fetchLatestNews";
import { MediaStoryCard } from "./media-story-card";

type MediaStoriesPanelProps = {
  loading: boolean;
  error: string | null;
  items: MediaItem[];
};

export function MediaStoriesPanel({ loading, error, items }: MediaStoriesPanelProps) {
  const hasItems = items.length > 0;

  return (
    <div className="mt-6">
      {!loading && !error && !hasItems ? (
        <p className="text-sm text-brand-dark/70">
          No stories loaded yet. Choose your sources and press FETCH.
        </p>
      ) : null}

      {hasItems ? (
        <ul className="space-y-3">
          {items.map((item) => (
            <MediaStoryCard key={`${item.source}-${item.url}`} item={item} />
          ))}
        </ul>
      ) : null}
    </div>
  );
}

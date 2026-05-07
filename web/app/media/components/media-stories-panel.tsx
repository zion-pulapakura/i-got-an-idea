"use client";

import type { MediaItem } from "../api/fetchLatestNews";
import { useMediaUiStore } from "../store/media-ui-store";
import { MediaStoryCard } from "./media-story-card";

type Props = {
  items: MediaItem[];
};

export function MediaStoriesPanel({ items }: Props) {
  const loading = useMediaUiStore((s) => s.loading);
  const error = useMediaUiStore((s) => s.error);
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

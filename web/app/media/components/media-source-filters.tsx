"use client";

import { MEDIA_SOURCES } from "../api/fetchLatestNews";
import { useMediaUiStore } from "../store/media-ui-store";

export function MediaSourceFilters() {
  const selectedSources = useMediaUiStore((s) => s.selectedSources);
  const toggleSelectedSource = useMediaUiStore((s) => s.toggleSelectedSource);

  return (
    <div className="mt-7 flex flex-wrap items-center gap-6">
      {MEDIA_SOURCES.map((source) => (
        <label key={source} className="inline-flex cursor-pointer items-center gap-2 text-base">
          <input
            type="checkbox"
            checked={selectedSources.includes(source)}
            onChange={() => toggleSelectedSource(source)}
            className="h-4 w-4 accent-brand-dark"
          />
          <span>{source}</span>
        </label>
      ))}
    </div>
  );
}

import { MEDIA_SOURCES, type MediaSource } from "../api/fetchLatestNews";

type MediaSourceFiltersProps = {
  selectedSources: MediaSource[];
  onToggle: (source: MediaSource) => void;
};

export function MediaSourceFilters({ selectedSources, onToggle }: MediaSourceFiltersProps) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-6">
      {MEDIA_SOURCES.map((source) => (
        <label key={source} className="inline-flex cursor-pointer items-center gap-2 text-base">
          <input
            type="checkbox"
            checked={selectedSources.includes(source)}
            onChange={() => onToggle(source)}
            className="h-4 w-4 accent-brand-dark"
          />
          <span>{source}</span>
        </label>
      ))}
    </div>
  );
}

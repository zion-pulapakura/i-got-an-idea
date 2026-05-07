import type { MediaSource } from "../api/fetchLatestNews";

type SourceOption = { id: MediaSource; label: string };

type MediaSourceFiltersProps = {
  options: readonly SourceOption[];
  selectedSources: MediaSource[];
  onToggle: (source: MediaSource) => void;
};

export function MediaSourceFilters({
  options,
  selectedSources,
  onToggle,
}: MediaSourceFiltersProps) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-6">
      {options.map((source) => (
        <label key={source.id} className="inline-flex cursor-pointer items-center gap-2 text-base">
          <input
            type="checkbox"
            checked={selectedSources.includes(source.id)}
            onChange={() => onToggle(source.id)}
            className="h-4 w-4 accent-brand-dark"
          />
          <span>{source.label}</span>
        </label>
      ))}
    </div>
  );
}

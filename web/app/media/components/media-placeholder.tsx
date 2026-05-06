"use client";

import { useMemo, useState } from "react";

import { Loader } from "../../components/loader";
import {
  fetchLatestNews,
  MEDIA_SOURCE_OPTIONS,
  type MediaItem,
  type MediaSource,
  type MediaSourceError,
} from "../api/fetchLatestNews";

const formatDate = (iso: string) => {
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) {
    return "Unknown date";
  }
  return parsed.toLocaleString();
};

export function MediaPlaceholder() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sourceErrors, setSourceErrors] = useState<MediaSourceError[]>([]);
  const [items, setItems] = useState<MediaItem[]>([]);
  const [selectedSources, setSelectedSources] = useState<MediaSource[]>(
    MEDIA_SOURCE_OPTIONS.map((source) => source.id),
  );

  const hasSelection = selectedSources.length > 0;
  const hasItems = items.length > 0;

  const selectedCountLabel = useMemo(() => {
    if (selectedSources.length === 1) {
      return "1 source selected";
    }
    return `${selectedSources.length} sources selected`;
  }, [selectedSources.length]);

  const toggleSource = (source: MediaSource) => {
    setSelectedSources((prev) =>
      prev.includes(source)
        ? prev.filter((value) => value !== source)
        : [...prev, source],
    );
  };

  const runFetch = async () => {
    if (!hasSelection) {
      setError("Pick at least one source.");
      setItems([]);
      setSourceErrors([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const response = await fetchLatestNews(selectedSources);
      setItems(response.items);
      setSourceErrors(response.errors);
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : "Failed to fetch latest news.");
      setItems([]);
      setSourceErrors([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full rounded-xl border border-brand-black bg-brand-light p-8 text-brand-dark md:p-10">
      <h1 className="text-4xl font-bold">Media</h1>
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-brand-dark/70">
        Latest tech news feed
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-6">
        {MEDIA_SOURCE_OPTIONS.map((source) => (
          <label key={source.id} className="inline-flex cursor-pointer items-center gap-2 text-base">
            <input
              type="checkbox"
              checked={selectedSources.includes(source.id)}
              onChange={() => toggleSource(source.id)}
              className="h-4 w-4 accent-brand-dark"
            />
            <span>{source.label}</span>
          </label>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm text-brand-dark/80">{selectedCountLabel}</span>
        <button
          type="button"
          disabled={loading}
          onClick={runFetch}
          className="flex min-w-40 items-center justify-center rounded-xl bg-brand-dark px-6 py-2.5 text-sm font-semibold tracking-[0.25em] text-brand-white disabled:opacity-70"
        >
          {loading ? <Loader className="text-brand-white" /> : "FETCH"}
        </button>
      </div>

      {error ? (
        <p className="mt-5 rounded-lg border border-red-300 bg-red-100 px-3 py-2 text-sm text-red-800">
          {error}
        </p>
      ) : null}

      {sourceErrors.length > 0 ? (
        <div className="mt-5 rounded-lg border border-amber-300 bg-amber-100 px-3 py-2 text-sm text-amber-900">
          <p className="font-semibold">Some sources failed:</p>
          <ul className="mt-2 space-y-1">
            {sourceErrors.map((sourceError) => (
              <li key={`${sourceError.source}-${sourceError.message}`}>
                {sourceError.source}: {sourceError.message}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6">
        {!loading && !error && !hasItems ? (
          <p className="text-sm text-brand-dark/70">
            No stories loaded yet. Choose your sources and press FETCH.
          </p>
        ) : null}

        {hasItems ? (
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={`${item.source}-${item.url}`} className="rounded-lg border border-brand-black/20 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-dark/70">{item.source}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-base font-semibold hover:underline"
                >
                  {item.title}
                </a>
                <p className="mt-1 text-xs text-brand-dark/70">
                  {formatDate(item.publishedAt)}
                  {item.author ? ` - ${item.author}` : ""}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

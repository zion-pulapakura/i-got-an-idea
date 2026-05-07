"use client";

import { useMemo, useState } from "react";

import {
  fetchLatestNews,
  MEDIA_SOURCES,
  type MediaItem,
  type MediaSource,
  type MediaSourceError,
} from "./api/fetchLatestNews";
import { MediaErrorBanner } from "./components/media-error-banner";
import { MediaFetchBtn } from "./components/media-fetch-btn";
import { MediaSourceErrorsBanner } from "./components/media-source-errors-banner";
import { MediaSourceFilters } from "./components/media-source-filters";
import { MediaStoriesPanel } from "./components/media-stories-panel";

export default function MediaPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sourceErrors, setSourceErrors] = useState<MediaSourceError[]>([]);
  const [items, setItems] = useState<MediaItem[]>([]);
  const [selectedSources, setSelectedSources] = useState<MediaSource[]>([...MEDIA_SOURCES]);

  const hasSelection = selectedSources.length > 0;

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
      setError(
        fetchError instanceof Error
          ? fetchError.message
          : "Failed to fetch latest news.",
      );
      setItems([]);
      setSourceErrors([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-8 py-8">
      <section className="w-full rounded-xl border border-brand-black bg-brand-light p-8 text-brand-dark md:p-10">
        <h1 className="text-4xl font-bold">Media</h1>
        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-brand-dark/70">
          Latest tech news feed
        </p>

        <MediaSourceFilters selectedSources={selectedSources} onToggle={toggleSource} />

        <MediaFetchBtn
          selectedCountLabel={selectedCountLabel}
          loading={loading}
          onFetch={runFetch}
        />

        <MediaErrorBanner message={error} />
        <MediaSourceErrorsBanner errors={sourceErrors} />
        <MediaStoriesPanel loading={loading} error={error} items={items} />
      </section>
    </main>
  );
}

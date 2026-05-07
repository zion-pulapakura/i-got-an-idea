"use client";

import { useState } from "react";

import { fetchLatestNews, type MediaItem } from "./api/fetchLatestNews";
import { MediaErrorBanner } from "./components/media-error-banner";
import { MediaFetchBtn } from "./components/media-fetch-btn";
import { MediaSourceErrorsBanner } from "./components/media-source-errors-banner";
import { MediaSourceFilters } from "./components/media-source-filters";
import { MediaStoriesPanel } from "./components/media-stories-panel";
import { useMediaUiStore } from "./store/media-ui-store";

export default function MediaPage() {
  const [items, setItems] = useState<MediaItem[]>([]);

  const runFetch = async () => {
    const { selectedSources, setLoading, setError, setSourceErrors } =
      useMediaUiStore();

    if (selectedSources.length === 0) {
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

        <MediaSourceFilters />

        <MediaFetchBtn onFetch={runFetch} />

        <MediaErrorBanner />
        <MediaSourceErrorsBanner />
        <MediaStoriesPanel items={items} />
      </section>
    </main>
  );
}

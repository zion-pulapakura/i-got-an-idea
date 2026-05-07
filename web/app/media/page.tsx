"use client";

import { useState } from "react";
import { useMediaUiStore } from "./store/media-ui-store";

import { fetchLatestNews, type MediaItem } from "./api/fetchLatestNews";
import { ErrorBanner } from "./components/error-banner";
import { FetchBtn } from "./components/fetch-btn";
import { SourceErrorsBanner } from "./components/source-errors-banner";
import { SourceFilters } from "./components/source-filters";
import { StoriesPanel } from "./components/stories-panel";

export default function Page() {
  const [items, setItems] = useState<MediaItem[]>([]);

  const runFetch = async () => {
    const { selectedSources, setLoading, setError, setSourceErrors } = useMediaUiStore.getState();

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

        <SourceFilters />

        <FetchBtn onFetch={runFetch} />

        <ErrorBanner />
        <SourceErrorsBanner />
        <StoriesPanel items={items} />
      </section>
    </main>
  );
}

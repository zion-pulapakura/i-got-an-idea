"use client";

import { create } from "zustand";

import { MEDIA_SOURCES, type MediaSource, type MediaSourceError } from "../api/fetchLatestNews";

type MediaUiStore = {
  loading: boolean;
  error: string | null;
  sourceErrors: MediaSourceError[];
  selectedSources: MediaSource[];
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSourceErrors: (errors: MediaSourceError[]) => void;
  toggleSelectedSource: (source: MediaSource) => void;
};

export const useMediaUiStore = create<MediaUiStore>((set) => ({
  loading: false,
  error: null,
  sourceErrors: [],
  selectedSources: [...MEDIA_SOURCES],
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setSourceErrors: (sourceErrors) => set({ sourceErrors }),
  toggleSelectedSource: (source) =>
    set((state) => ({
      selectedSources: state.selectedSources.includes(source)
        ? state.selectedSources.filter((value) => value !== source)
        : [...state.selectedSources, source],
    })),
}));

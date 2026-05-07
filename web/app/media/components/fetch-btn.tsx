"use client";

import { useMemo } from "react";

import { Loader } from "../../components/loader";
import { useMediaUiStore } from "../store/media-ui-store";

type Props = {
  onFetch: () => void;
};

export function FetchBtn({ onFetch }: Props) {
  const { loading, selectedSources } = useMediaUiStore();

  const selectedCountLabel = useMemo(() => {
    const count = selectedSources.length;
    if (count === 1) {
      return "1 source selected";
    }
    return `${count} sources selected`;
  }, [selectedSources.length]);

  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
      <span className="text-sm text-brand-dark/80">{selectedCountLabel}</span>
      <button
        type="button"
        disabled={loading}
        onClick={onFetch}
        className="flex min-w-40 items-center justify-center rounded-xl bg-brand-dark px-6 py-2.5 text-sm font-semibold tracking-[0.25em] text-brand-white disabled:opacity-70"
      >
        {loading ? <Loader className="text-brand-white" /> : "FETCH"}
      </button>
    </div>
  );
}

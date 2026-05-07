"use client";

import { useMediaUiStore } from "../store/media-ui-store";

export function MediaSourceErrorsBanner() {
  const errors = useMediaUiStore((s) => s.sourceErrors);

  if (errors.length === 0) {
    return null;
  }

  return (
    <div className="mt-5 rounded-lg border border-amber-300 bg-amber-100 px-3 py-2 text-sm text-amber-900">
      <p className="font-semibold">Some sources failed:</p>
      <ul className="mt-2 space-y-1">
        {errors.map((sourceError) => (
          <li key={`${sourceError.source}-${sourceError.message}`}>
            {sourceError.source}: {sourceError.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

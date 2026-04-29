"use client";

export function ProjectIdeasPanel() {
  return (
    <aside className="space-y-3">
      <textarea
        placeholder="Any extra tips..."
        className="h-32 w-full resize-none rounded-xl bg-brand-light p-4 text-brand-dark placeholder:text-brand-dark/70 focus:outline-none"
      />
      <button
        type="button"
        className="w-full rounded-xl bg-brand-dark py-3 text-base font-semibold tracking-[0.4em] text-brand-white"
      >
        GENERATE
      </button>
      <div className="relative min-h-[430px] rounded-xl bg-brand-light p-4 text-brand-dark">
        <h3 className="text-2xl font-semibold">Project 1</h3>
        <button
          type="button"
          className="absolute top-1/2 left-[-14px] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-brand-dark text-lg text-brand-white"
        >
          {"<"}
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-[-14px] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-brand-dark text-lg text-brand-white"
        >
          {">"}
        </button>
      </div>
    </aside>
  );
}

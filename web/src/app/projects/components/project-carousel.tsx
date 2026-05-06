"use client";

import { useRef } from "react";

const SLIDE_COUNT = 3;

export function ProjectCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBySlide = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * el.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-0 flex-1 rounded-xl bg-brand-light text-brand-dark">
      <div
        ref={scrollerRef}
        className="flex h-full min-h-[120px] overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Array.from({ length: SLIDE_COUNT }, (_, i) => (
          <section
            key={i}
            className="flex min-h-0 min-w-full shrink-0 snap-center flex-col gap-2 p-4"
          >
            <h3 className="text-2xl font-semibold">Project {i + 1}</h3>
            <p className="text-sm text-brand-dark/80">
              Generated project details will appear here.
            </p>
          </section>
        ))}
      </div>
      <button
        type="button"
        aria-label="Previous project"
        className="absolute top-1/2 left-[-14px] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-brand-dark text-lg text-brand-white"
        onClick={() => scrollBySlide(-1)}
      >
        {"<"}
      </button>
      <button
        type="button"
        aria-label="Next project"
        className="absolute top-1/2 right-[-14px] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-brand-dark text-lg text-brand-white"
        onClick={() => scrollBySlide(1)}
      >
        {">"}
      </button>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

import { CarouselNavButton } from "./carousel-nav-button";
import type { GeneratedProject } from ".";

type Props = {
  projects: GeneratedProject[];
};

export function ProjectCarousel({ projects }: Props) {
  const slideCount = projects.length > 0 ? projects.length : 1;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [projects]);

  const go = (direction: -1 | 1) => {
    setActiveIndex((i) => {
      const next = i + direction;
      return ((next % slideCount) + slideCount) % slideCount;
    });
  };

  return (
    <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl bg-brand-light text-brand-dark">
      <div className="min-h-[120px] h-full overflow-hidden">
        <div
          className="flex h-full transition-[transform] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:transition-none"
          style={{
            width: `${slideCount * 100}%`,
            transform: `translateX(-${(activeIndex * 100) / slideCount}%)`,
          }}
        >
          {Array.from({ length: slideCount }, (_, i) => {
            const project = projects[i];
            return (
              <section
                key={
                  project
                    ? `${project.title}-${project.description}-${i}`
                    : `placeholder-${i}`
                }
                className="flex h-full min-h-0 shrink-0 flex-col gap-3 p-4"
                style={{ width: `${100 / slideCount}%` }}
              >
                {!project ? (
                  <>
                    <h3 className="text-2xl font-semibold">Project ideas</h3>
                    <p className="text-sm text-brand-dark/80">
                      Tap Generate to see three tailored project ideas here.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-brand-dark/90">
                      {project.description}
                    </p>
                    {(project.techUsed ?? []).length > 0 ? (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {(project.techUsed ?? []).map((tech) => (
                          <span
                            key={`${project.title}-${tech}`}
                            className="rounded-full border border-brand-dark/15 bg-brand-white px-3 py-1 text-xs font-semibold text-brand-dark"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </>
                )}
              </section>
            );
          })}
        </div>
      </div>
      <CarouselNavButton direction="prev" onClick={() => go(-1)} />
      <CarouselNavButton direction="next" onClick={() => go(1)} />
    </div>
  );
}

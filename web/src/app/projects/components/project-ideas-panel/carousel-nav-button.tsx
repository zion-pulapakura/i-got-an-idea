"use client";

type Props = {
  direction: "prev" | "next";
  onClick: () => void;
};

const baseClass =
  "absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-brand-dark text-lg text-brand-white transition-transform hover:scale-105 enabled:active:scale-95 disabled:pointer-events-none disabled:opacity-40";

export function CarouselNavButton({ direction, onClick }: Props) {
  const isPrev = direction === "prev";

  return (
    <button
      type="button"
      aria-label={isPrev ? "Previous project" : "Next project"}
      className={`${baseClass} ${isPrev ? "left-[-14px]" : "right-[-14px]"}`}
      onClick={onClick}
    >
      {isPrev ? "<" : ">"}
    </button>
  );
}

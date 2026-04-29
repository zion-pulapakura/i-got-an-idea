"use client";

type PillOption = { id: string; label: string };

type TechnologyPillsProps = {
  options: PillOption[];
};

export function TechnologyPills({ options }: TechnologyPillsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <span
          key={option.id}
          className="rounded-full bg-brand-light px-8 py-2 text-sm font-semibold text-brand-white"
        >
          {option.label}
        </span>
      ))}
    </div>
  );
}

"use client";

import Link from "next/link";

import type { NavTab } from "@/store/ui-store";

type Props = {
  tabKey: NavTab;
  label: string;
  href: string;
  isActive: boolean;
  index: number;
  onSelect: (tab: NavTab) => void;
};

export function NavbarTab({
  tabKey,
  label,
  href,
  isActive,
  index,
  onSelect,
}: Props) {
  const fillColor = isActive
    ? "var(--color-brand-dark)"
    : "var(--color-brand-grey)";
  const textColor = isActive ? "text-brand-white" : "text-brand-black";

  return (
    <Link
      href={href}
      onClick={() => onSelect(tabKey)}
      style={{ zIndex: 100 - index }}
      className="relative -ml-[64px] block h-[64px] w-[254px] first:ml-0"
    >
      <svg
        viewBox="0 0 274 64"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        style={
          isActive
            ? { filter: "drop-shadow(10px 0 14px rgba(0,0,0,0.35))" }
            : undefined
        }
        aria-hidden="true"
      >
        <path
          d="M 0 0 H 204 A 64 64 0 0 1 268 64 H 0 Z"
          fill={fillColor}
          stroke="var(--color-brand-black)"
          strokeWidth="1.5"
        />
      </svg>
      <span
        className={`relative z-10 flex h-full w-full items-center justify-center pl-0 pr-8 text-base font-bold tracking-wide ${textColor}`}
      >
        {label}
      </span>
    </Link>
  );
}

"use client";

import Link from "next/link";

import type { NavTab } from "@/store/ui-store";

type NavbarTabProps = {
  tabKey: NavTab;
  label: string;
  href: string;
  isActive: boolean;
  onSelect: (tab: NavTab) => void;
};

export function NavbarTab({
  tabKey,
  label,
  href,
  isActive,
  onSelect,
}: NavbarTabProps) {
  return (
    <Link
      href={href}
      onClick={() => onSelect(tabKey)}
      className={`rounded-t-[24px] border border-brand-dark px-7 py-5 text-base tracking-wide transition ${
        isActive
          ? "bg-brand-dark text-brand-white"
          : "bg-brand-light text-brand-black"
      }`}
    >
      {label}
    </Link>
  );
}

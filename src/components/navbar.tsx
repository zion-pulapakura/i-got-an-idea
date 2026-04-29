"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useUiStore, type NavTab } from "@/store/ui-store";

const navItems: { key: NavTab; label: string; href: string }[] = [
  { key: "projects", label: "PROJECTS", href: "/projects" },
  { key: "videos", label: "VIDEOS", href: "/videos" },
  { key: "articles", label: "ARTICLES", href: "/articles" },
];

function pathToTab(pathname: string): NavTab {
  if (pathname.startsWith("/videos")) return "videos";
  if (pathname.startsWith("/articles")) return "articles";
  return "projects";
}

export function Navbar() {
  const pathname = usePathname();
  const activeNavTab = useUiStore((state) => state.activeNavTab);
  const setActiveNavTab = useUiStore((state) => state.setActiveNavTab);

  useEffect(() => {
    setActiveNavTab(pathToTab(pathname));
  }, [pathname, setActiveNavTab]);

  return (
    <header className="border-b border-brand-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0 md:px-8">
        <nav className="flex items-end">
          {navItems.map((item) => {
            const isActive = activeNavTab === item.key;
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setActiveNavTab(item.key)}
                className={`rounded-t-[24px] border border-brand-dark px-7 py-5 text-base tracking-wide transition ${
                  isActive
                    ? "bg-brand-dark text-brand-white"
                    : "bg-brand-light text-brand-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <p className="text-xl font-semibold text-brand-white">i got an idea.com</p>
      </div>
    </header>
  );
}

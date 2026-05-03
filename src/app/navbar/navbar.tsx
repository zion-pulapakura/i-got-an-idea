"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { NavbarTab } from "@/app/navbar/components/navbar-tab";
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
      <div className="flex w-full items-center justify-between py-0 pr-4 md:pr-8">
        <nav className="flex items-end overflow-visible">
          {navItems.map((item, index) => (
            <NavbarTab
              key={item.key}
              tabKey={item.key}
              label={item.label}
              href={item.href}
              isActive={activeNavTab === item.key}
              index={index}
              onSelect={setActiveNavTab}
            />
          ))}
        </nav>
        <p className="text-xl font-semibold text-brand-white">i got an idea.com</p>
      </div>
    </header>
  );
}

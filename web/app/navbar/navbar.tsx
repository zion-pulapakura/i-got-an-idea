"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { NavbarTab } from "./components/navbar-tab";
import { useUiStore, type NavTab } from "../store/ui-store";

const navItems: NavTab[] = ["projects", "media"];

export function Navbar() {
  const pathname = usePathname();
  const activeNavTab = useUiStore((state) => state.activeNavTab);
  const setActiveNavTab = useUiStore((state) => state.setActiveNavTab);

  useEffect(() => {
    const currTab = pathname.startsWith("/projects") ? "projects" : "media";
    setActiveNavTab(currTab);
  }, [pathname, setActiveNavTab]);

  return (
    <header className="border-b border-brand-black">
      <div className="flex w-full items-center justify-between py-0 pr-8">
        <nav className="flex items-end overflow-visible">
          {navItems.map((item, index) => (
            <NavbarTab
              key={item}
              tabKey={item}
              label={item.toUpperCase()}
              href={`/${item}`}
              isActive={activeNavTab === item}
              index={index}
              onSelect={setActiveNavTab}
            />
          ))}
        </nav>
        <p className="text-xl font-semibold text-brand-white">
          i got an idea.com
        </p>
      </div>
    </header>
  );
}

"use client";

import { SECTIONS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function SideNavDots() {
  const activeSection = useActiveSection();

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 lg:flex"
      aria-label="Section navigation"
    >
      <div className="flex flex-col items-end gap-5">
        {SECTIONS.map(({ id, number }) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className="group relative flex items-center gap-3"
            aria-label={`Go to section ${number}`}
          >
            <span className="text-xs font-medium text-white/0 transition-all group-hover:text-white/70">
              {number}
            </span>
            <span
              className={cn(
                "block rounded-full transition-all duration-300",
                activeSection === id
                  ? "h-3 w-3 bg-gold"
                  : "h-2 w-2 bg-white/40 group-hover:bg-white/70"
              )}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}

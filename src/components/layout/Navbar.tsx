"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("nav");
  const { scrollY } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isScrolled = scrollY > 50;

  const navLinks = [
    { label: t("home"), href: `#${SECTION_IDS.hero}` },
    { label: t("services"), href: `#${SECTION_IDS.services}` },
    { label: t("whyUs"), href: `#${SECTION_IDS.whyUs}` },
    { label: t("contact"), href: `#${SECTION_IDS.contact}` },
  ];

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-navy/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href={`#${SECTION_IDS.hero}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(`#${SECTION_IDS.hero}`);
          }}
          className="relative h-14 w-56"
        >
          <Image
            src="/images/lomeli-logo.png"
            alt="Lomeli Financial Group"
            fill
            className="object-contain brightness-0 invert"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(href);
              }}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
          <LanguageToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-navy/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 pb-6">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(href);
                  }}
                  className="text-base font-medium text-white/80 transition-colors hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

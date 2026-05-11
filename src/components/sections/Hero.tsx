"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { SECTION_IDS } from "@/lib/constants";

interface HeroProps {
  splashComplete: boolean;
}

export function Hero({ splashComplete }: HeroProps) {
  const t = useTranslations("hero");

  const handleCTA = () => {
    const el = document.getElementById(SECTION_IDS.contact);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id={SECTION_IDS.hero}
      className="parallax-bg relative flex min-h-screen items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=2560&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          {splashComplete && (
            <>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "5rem" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mb-8 h-0.5 bg-gold"
              />
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
              >
                {t("headline")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl"
              >
                {t("subtitle")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <button
                  onClick={handleCTA}
                  className="group mt-10 inline-flex items-center gap-3 rounded-none border border-gold bg-gold px-10 py-5 text-sm font-semibold uppercase tracking-widest text-navy transition-all hover:bg-transparent hover:text-gold"
                >
                  {t("cta")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {splashComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/40">
              Scroll
            </span>
            <div className="h-12 w-px animate-pulse bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </motion.div>
      )}
    </section>
  );
}

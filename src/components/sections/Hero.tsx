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
          "url('https://images.unsplash.com/photo-1560472355-536de3962603?w=2560&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          {splashComplete && (
            <>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
              >
                {t("headline")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl"
              >
                {t("subtitle")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button
                  onClick={handleCTA}
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg"
                >
                  {t("cta")}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

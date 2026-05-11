"use client";

import { useTranslations } from "next-intl";
import { UserCheck, Languages, Award, Layers } from "lucide-react";
import { SECTION_IDS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const valueIcons = {
  personalized: UserCheck,
  bilingual: Languages,
  trusted: Award,
  comprehensive: Layers,
} as const;

const valueKeys = ["personalized", "bilingual", "trusted", "comprehensive"] as const;

export function WhyUs() {
  const t = useTranslations("whyUs");

  return (
    <section id={SECTION_IDS.whyUs} className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("heading")}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            {t("description")}
          </p>
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {valueKeys.map((key, index) => {
            const Icon = valueIcons[key];
            return (
              <AnimatedSection key={key} delay={index * 0.1}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {t(`values.${key}.description`)}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

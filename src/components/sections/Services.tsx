"use client";

import { useTranslations } from "next-intl";
import { SECTION_IDS, SERVICES } from "@/lib/constants";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Services() {
  const t = useTranslations("services");

  return (
    <section
      id={SECTION_IDS.services}
      className="bg-gray-50 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {t("heading")}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            {t("subheading")}
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.key}
              icon={service.icon}
              title={t(`${service.key}.title`)}
              description={t(`${service.key}.description`)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

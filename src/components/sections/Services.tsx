"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import {
  TrendingUp,
  Shield,
  Calculator,
  FileText,
  Heart,
  BarChart3,
  Briefcase,
} from "lucide-react";
import { SECTION_IDS, SERVICES } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const iconMap = {
  TrendingUp,
  Shield,
  Calculator,
  FileText,
  Heart,
  BarChart3,
  Briefcase,
} as const;

const serviceImages = [
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80", // retirement - planning at desk
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80", // social security - professional woman
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80", // tax - documents/charts
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80", // estate - signing documents
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80", // life insurance - family
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80", // wealth mgmt - charts/data
  "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=1200&q=80", // business - professional meeting
];

export function Services() {
  const t = useTranslations("services");

  return (
    <section id={SECTION_IDS.services}>
      {/* Section header */}
      <div className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              {t("subheading")}
            </span>
            <h2 className="mt-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
              {t("heading")}
            </h2>
            <div className="mx-auto mt-6 h-px w-20 bg-gold" />
          </AnimatedSection>
        </div>
      </div>

      {/* Alternating service blocks */}
      {SERVICES.map((service, index) => {
        const Icon = iconMap[service.icon];
        const isReversed = index % 2 !== 0;
        const number = String(index + 1).padStart(2, "0");

        return (
          <div
            key={service.key}
            className="relative flex min-h-[70vh] flex-col lg:flex-row"
          >
            {/* Image half */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative min-h-[50vh] w-full bg-cover bg-center lg:min-h-0 lg:w-1/2 ${
                isReversed ? "lg:order-2" : ""
              }`}
              style={{ backgroundImage: `url('${serviceImages[index]}')` }}
            >
              <div className="absolute inset-0 bg-navy/20" />
            </motion.div>

            {/* Content half */}
            <div
              className={`flex w-full items-center lg:w-1/2 ${
                isReversed ? "lg:order-1" : ""
              } ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <div className="mx-auto w-full max-w-xl px-8 py-16 md:px-16 md:py-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="font-serif text-6xl font-bold text-navy/10">
                    {number}
                  </span>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5">
                      <Icon className="h-5 w-5 text-navy" />
                    </div>
                    <div className="h-px flex-1 bg-navy/10" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-bold text-gray-900 md:text-3xl">
                    {t(`${service.key}.title`)}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                    {t(`${service.key}.description`)}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

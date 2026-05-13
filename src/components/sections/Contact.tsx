"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BRAND, SECTION_IDS } from "@/lib/constants";
import { ContactForm } from "@/components/ui/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id={SECTION_IDS.contact} className="bg-white py-24 md:py-32">
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

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <AnimatedSection>
            <ContactForm />
          </AnimatedSection>

          {/* Contact info */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-8 rounded-2xl bg-gray-50 p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10">
                  <Phone className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    {t("info.officePhone")}
                  </h4>
                  <a
                    href={`tel:${BRAND.officePhoneRaw}`}
                    className="mt-1 text-gray-600 transition-colors hover:text-navy"
                  >
                    {BRAND.officePhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10">
                  <Phone className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    {t("info.phone")}
                  </h4>
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="mt-1 text-gray-600 transition-colors hover:text-navy"
                  >
                    {BRAND.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10">
                  <Mail className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    {t("info.email")}
                  </h4>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="mt-1 text-gray-600 transition-colors hover:text-navy"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10">
                  <MapPin className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    {t("info.address")}
                  </h4>
                  <p className="mt-1 text-gray-600">{BRAND.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10">
                  <Clock className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    {t("info.hours")}
                  </h4>
                  <p className="mt-1 text-gray-600">{t("info.hoursValue")}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

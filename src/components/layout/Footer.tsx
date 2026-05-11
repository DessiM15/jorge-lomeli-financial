"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND, SECTION_IDS } from "@/lib/constants";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer id={SECTION_IDS.footer} className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo & tagline */}
          <div>
            <div className="relative mb-4 h-28 w-72">
              <Image
                src="/images/lomeli-logo.png"
                alt="Lomeli Financial Group"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/60">{t("tagline")}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2">
              {[
                { label: tNav("home"), href: `#${SECTION_IDS.hero}` },
                { label: tNav("services"), href: `#${SECTION_IDS.services}` },
                { label: tNav("whyUs"), href: `#${SECTION_IDS.whyUs}` },
                { label: tNav("contact"), href: `#${SECTION_IDS.contact}` },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              {t("contactInfo")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="transition-colors hover:text-white"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="transition-colors hover:text-white"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                <span>{BRAND.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>
            {t("license")} #{BRAND.license}
          </p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} {BRAND.name}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

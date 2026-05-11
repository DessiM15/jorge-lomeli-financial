"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "es" : "en";
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    router.refresh();
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
      aria-label={locale === "en" ? "Cambiar a Español" : "Switch to English"}
    >
      <Globe className="h-4 w-4" />
      <span>{locale === "en" ? "ES" : "EN"}</span>
    </button>
  );
}

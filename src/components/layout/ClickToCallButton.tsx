"use client";

import { Phone } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function ClickToCallButton() {
  return (
    <a
      href={`tel:${BRAND.phoneRaw}`}
      className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-transform hover:scale-110 active:scale-95 md:h-12 md:w-12"
      aria-label={`Call ${BRAND.phone}`}
    >
      <Phone className="h-6 w-6 md:h-5 md:w-5" />
      <span className="absolute inset-0 animate-ping rounded-full bg-navy/30" />
    </a>
  );
}

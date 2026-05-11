"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import type { ContactFormData } from "@/types";
import { SERVICES } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(1, "nameRequired"),
  email: z.string().min(1, "emailRequired").email("emailInvalid"),
  phone: z.string().min(1, "phoneRequired"),
  service: z.string().min(1, "serviceRequired"),
});

export function ContactForm() {
  const t = useTranslations("contact");
  const tServices = useTranslations("services");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const getError = (field: keyof ContactFormData) => {
    const msg = errors[field]?.message;
    if (!msg) return null;
    return t(`validation.${msg}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          {t("form.name")}
        </label>
        <input
          id="name"
          type="text"
          placeholder={t("form.namePlaceholder")}
          {...register("name")}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
        />
        {getError("name") && (
          <p className="mt-1 text-sm text-red-600">{getError("name")}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          {t("form.email")}
        </label>
        <input
          id="email"
          type="email"
          placeholder={t("form.emailPlaceholder")}
          {...register("email")}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
        />
        {getError("email") && (
          <p className="mt-1 text-sm text-red-600">{getError("email")}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          {t("form.phone")}
        </label>
        <input
          id="phone"
          type="tel"
          placeholder={t("form.phonePlaceholder")}
          {...register("phone")}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
        />
        {getError("phone") && (
          <p className="mt-1 text-sm text-red-600">{getError("phone")}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          {t("form.service")}
        </label>
        <select
          id="service"
          {...register("service")}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
          defaultValue=""
        >
          <option value="" disabled>
            {t("form.servicePlaceholder")}
          </option>
          {SERVICES.map(({ key }) => (
            <option key={key} value={key}>
              {tServices(`${key}.title`)}
            </option>
          ))}
        </select>
        {getError("service") && (
          <p className="mt-1 text-sm text-red-600">{getError("service")}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 font-semibold text-white transition-all hover:bg-navy-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <span>{t("form.submitting")}</span>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>{t("form.submit")}</span>
          </>
        )}
      </button>

      {status === "success" && (
        <div className="flex items-center gap-2 rounded-lg bg-green-50 p-4 text-sm text-green-700">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          <span>{t("form.success")}</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <span>{t("form.error")}</span>
        </div>
      )}
    </form>
  );
}

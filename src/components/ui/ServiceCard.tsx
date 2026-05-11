"use client";

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

const iconMap = {
  TrendingUp,
  Shield,
  Calculator,
  FileText,
  Heart,
  BarChart3,
  Briefcase,
} as const;

interface ServiceCardProps {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({
  icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </motion.div>
  );
}

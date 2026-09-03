"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";
import { BreadcrumbItem } from "@/types";

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  badge?: string;
  bgGradient?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  badge,
  bgGradient = "from-[#f2fbf9]/60 via-[#FBFDFC] to-white",
  children,
}: PageHeroProps) {
  return (
    <section
      className={`relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b ${bgGradient}`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#ccf0eb]/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#e5f6f4]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-6 space-y-4 max-w-3xl">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e5f6f4] border border-[#A3E3DF] text-[#00a896] text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-4 h-4 text-[#00a896]" />
              <span>{badge}</span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#101828] leading-[1.12]">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
            {subtitle}
          </p>
        </div>

        {/* Optional children for custom content */}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}


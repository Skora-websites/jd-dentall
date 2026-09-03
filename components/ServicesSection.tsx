"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Stethoscope, ShieldCheck, Smile, CheckCircle } from "lucide-react";
import Tilt3DCard from "./Tilt3DCard";
import { SERVICES } from "@/data/dentalData";
import { ServiceItem } from "@/types";

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export default function ServicesSection({ onSelectService, onOpenBooking }: ServicesSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [carouselIndex, setCarouselIndex] = useState(0);

  const categories = ["all", "Preventive Care", "Cosmetic Care", "Restorative Care", "Orthodontics"];

  const filteredServices = activeFilter === "all"
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeFilter);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : filteredServices.length - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev < filteredServices.length - 1 ? prev + 1 : 0));
  };

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="w-4 h-4 text-[#00a896]" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-[#00a896]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4 text-[#00a896]" />;
      case "Smile":
      default:
        return <Smile className="w-4 h-4 text-[#00a896]" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-[#FBFDFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row matching design.md */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          
          {/* Header Left */}
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00a896]">
              <Sparkles className="w-3.5 h-3.5" />
              Our Dental Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828] leading-tight">
              Complete Dental Care <br className="hidden sm:inline" />
              Under One Roof
            </h2>
          </div>

          {/* Header Right: Description & (←) (→) Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 max-w-md">
            <p className="text-sm text-[#475569] leading-relaxed">
              From routine checkups to advanced laser treatments and dental implants — we provide complete, gentle care for you and your family in Greater Noida.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-[#00a896] hover:text-white hover:border-[#00a896] text-[#101828] flex items-center justify-center transition-all shadow-xs"
                aria-label="Previous Service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-[#00a896] hover:text-white hover:border-[#00a896] text-[#101828] flex items-center justify-center transition-all shadow-xs"
                aria-label="Next Service"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeFilter === cat
                  ? "bg-[#00a896] text-white shadow-sm"
                  : "bg-white text-[#475569] hover:bg-[#e5f6f4] hover:text-[#00a896] border border-slate-200"
              }`}
            >
              {cat === "all" ? "All Specialized Treatments" : cat}
            </button>
          ))}
        </div>

        {/* 4 Service Cards Grid matching design.md */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <Tilt3DCard
              key={service.id}
              maxTilt={6}
              scale={1.02}
              className="h-full"
            >
              <div className="h-full rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#A3E3DF] overflow-hidden flex flex-col transition-all duration-300 group">
                
                {/* Image Header with Badge */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/service-checkup.jpg";
                    }}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Overlapping Badge Icon at Bottom Left */}
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white shadow-md border border-[#A3E3DF] flex items-center justify-center">
                    {getBadgeIcon(service.iconName)}
                  </div>

                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium">
                    {service.badgeText}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-[#101828] group-hover:text-[#00a896] transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-xs font-bold text-[#00a896] bg-[#e5f6f4] px-2 py-0.5 rounded-full">
                        {service.priceEstimate}
                      </span>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00a896] hover:text-[#008f7f] group/link transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[11px] font-medium text-slate-400">
                      {service.duration}
                    </span>
                  </div>
                </div>

              </div>
            </Tilt3DCard>
          ))}
        </div>

      </div>
    </section>
  );
}


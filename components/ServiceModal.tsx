"use client";

import React from "react";
import { X, CheckCircle2, Clock, Calendar, Sparkles } from "lucide-react";
import { ServiceItem } from "@/types";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookNow: (serviceId: string) => void;
}

export default function ServiceModal({ service, onClose, onBookNow }: ServiceModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Image Banner */}
        <div className="relative h-56 sm:h-64 w-full">
          <img
            src={service.image}
            alt={service.title}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/service-checkup.jpg";
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-[#0D7A75] text-white text-xs font-semibold uppercase tracking-wider mb-2">
              {service.badgeText} • {service.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0D7A75] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Clinical Overview
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {service.fullDetails}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#E6F5F4]/60 border border-[#CCECE8]">
            <h4 className="text-sm font-bold text-[#101828] mb-3">Key Treatment Benefits:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0D7A75] flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-[#0D7A75]" />
                <span>{service.duration}</span>
              </div>
              <div className="font-bold text-[#101828] text-base">
                Est. Fee: <span className="text-[#0D7A75]">{service.priceEstimate}</span>
              </div>
            </div>

            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookNow(service.id);
                }}
                className="px-6 py-2.5 rounded-full bg-[#0D7A75] text-white font-semibold text-sm hover:bg-[#095C58] transition-all shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Book This Treatment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, CalendarCheck, X, Sparkles } from "lucide-react";
import { CLINIC_INFO, CLINIC_LOCATIONS } from "@/data/dentalData";

interface FloatingWidgetProps {
  onOpenBooking: () => void;
}

export default function FloatingWidget({ onOpenBooking }: FloatingWidgetProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Quick Action Popover */}
      {expanded && (
        <div className="p-4 rounded-2xl bg-white shadow-2xl border border-slate-200/90 text-left space-y-3 w-72 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D7A75]">
              <Sparkles className="w-3.5 h-3.5" />
              Quick Help
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-600">
            Our specialists are available for consultations at both Greater Noida clinics.
          </p>

          <div className="space-y-2">
            <button
              onClick={() => {
                setExpanded(false);
                onOpenBooking();
              }}
              className="w-full py-2 px-3 rounded-xl bg-[#0D7A75] text-white text-xs font-bold hover:bg-[#095C58] flex items-center justify-center gap-2 transition-colors"
            >
              <CalendarCheck className="w-3.5 h-3.5" /> Book Consultation
            </button>

            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full py-2 px-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0D7A75]" /> Sky Plaza: {CLINIC_LOCATIONS[0].phone}
            </a>

            <a
              href={`tel:${CLINIC_LOCATIONS[1].phone}`}
              className="w-full py-2 px-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0D7A75]" /> Gaur City: {CLINIC_LOCATIONS[1].phone}
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 rounded-full bg-[#0D7A75] hover:bg-[#095C58] text-white shadow-2xl shadow-[#0D7A75]/40 flex items-center justify-center hover:scale-108 active:scale-95 transition-all relative group"
        aria-label="Quick Dental Help"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}

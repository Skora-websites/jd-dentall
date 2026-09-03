"use client";

import React from "react";
import { ArrowRight, Sparkles, Phone, CalendarCheck } from "lucide-react";
import Tilt3DCard from "./Tilt3DCard";
import { CLINIC_INFO } from "@/data/dentalData";

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export default function CtaBanner({ onOpenBooking }: CtaBannerProps) {
  return (
    <section className="py-12 md:py-20 bg-[#FBFDFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vibrant Teal Rounded Container matching design.md (#00c4b0 / #00a896) */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#00c4b0] to-[#00a896] text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Radial Highlights */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Experience Excellence in Greater Noida
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ready for Your <br />
                Perfect Smile?
              </h2>

              <p className="text-sm sm:text-base text-teal-50 max-w-lg leading-relaxed font-normal">
                Book your appointment today and experience painless, world-class dental care with our specialists across our modern Greater Noida clinics in Greater Noida.
              </p>

              {/* Action Buttons matching design.md */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-3.5 rounded-full bg-white text-[#00a896] font-extrabold text-sm sm:text-base hover:bg-slate-50 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2 group"
                >
                  <CalendarCheck className="w-4 h-4 text-[#00a896]" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="px-6 py-3.5 rounded-full bg-black/20 hover:bg-black/30 border border-white/30 text-white font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Helpline: {CLINIC_INFO.phone}</span>
                </a>
              </div>

            </div>

            {/* Right Visual: Modern State-of-the-Art Dental Operatory Room */}
            <div className="lg:col-span-5 flex justify-center">
              <Tilt3DCard maxTilt={6} scale={1.02} className="w-full max-w-md">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 bg-slate-900">
                  <img
                    src="/images/cta-operatory.jpg"
                    alt="Modern dental chair operatory room with clean lighting in Greater Noida"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/cta-operatory.jpg";
                    }}
                    className="w-full h-64 sm:h-72 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/50 backdrop-blur-md text-white text-xs flex items-center justify-between">
                    <span className="font-semibold">Greater Greater Noida Operatories</span>
                    <span className="text-[#A3E3DF] font-bold">100% Sterilized</span>
                  </div>
                </div>
              </Tilt3DCard>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


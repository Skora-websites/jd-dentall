"use client";

import React, { useEffect, useRef } from "react";
import { Play, Sparkles, UserCheck, Cpu, Smile, ShieldCheck, ArrowRight, MapPin, Star } from "lucide-react";
import Tilt3DCard from "./Tilt3DCard";
import { CLINIC_INFO } from "@/data/dentalData";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  const valueProps = [
    {
      title: "Expert Doctors",
      desc: "Dr. Adam & Dr. Eve (15+ Yrs)",
      icon: UserCheck,
      color: "text-[#0D7A75]",
      bg: "bg-[#E6F5F4]",
    },
    {
      title: "Advanced Technology",
      desc: "3D CBCT & Digital Scanners",
      icon: Cpu,
      color: "text-[#0D7A75]",
      bg: "bg-[#E6F5F4]",
    },
    {
      title: "Pain-Free Treatment",
      desc: "Gentle Laser Protocols",
      icon: ShieldCheck,
      color: "text-[#0D7A75]",
      bg: "bg-[#E6F5F4]",
    },
    {
      title: "Patient Satisfaction",
      desc: "25k+ Smiles Transformed",
      icon: Smile,
      color: "text-[#0D7A75]",
      bg: "bg-[#E6F5F4]",
    },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F0FDFB]/60 via-[#FBFDFC] to-white"
    >
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#CCECE8]/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#E6F5F4]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Copy & Right 3D Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Eyebrow badge matching design.md */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F5F4] border border-[#A3E3DF] text-[#0D7A75] text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-4 h-4 text-[#0D7A75]" />
              <span>Advanced Care, Brighter Smiles in Noida</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#101828] leading-[1.12]">
              Your Smile, <br />
              <span className="text-[#0D7A75] relative inline-block">
                Our Passion
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#CCECE8] -z-10"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C50 3 150 3 197 9"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl font-normal">
              Experience world-class dental care with modern technology and a gentle touch in Noida. Led by{" "}
              <strong className="text-[#101828] font-semibold">Dr. Adam</strong> and{" "}
              <strong className="text-[#101828] font-semibold">Dr. Eve</strong>, we make every smile healthy, confident, and beautiful across Sector 62 & 18.
            </p>

            {/* Action Buttons matching design.md */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-[#0D7A75] hover:bg-[#095C58] text-white text-base font-semibold tracking-wide shadow-lg shadow-[#0D7A75]/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-[#101828] text-base font-semibold shadow-sm hover:shadow transition-all flex items-center gap-3 group"
              >
                <span>Explore Services</span>
                <div className="w-7 h-7 rounded-full bg-[#E6F5F4] text-[#0D7A75] flex items-center justify-center group-hover:bg-[#0D7A75] group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
              </a>
            </div>

            {/* Doctor Trust Strip: Exactly 2 Doctors */}
            <div className="pt-4 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex -space-x-2">
                <img
                  src="/images/doctor-adam.jpg"
                  alt="Dr. Adam"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/images/doctor-adam.jpg"; }}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                />
                <img
                  src="/images/doctor-eve.jpg"
                  alt="Dr. Eve"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/images/doctor-eve.jpg"; }}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                />
              </div>
              <div>
                <span className="font-bold text-[#101828]">Consult Dr. Adam & Dr. Eve</span>
                <span className="block text-[11px] text-slate-500">Zero waiting time • Sector 62 & 18 Clinics in Noida</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Tilt Hero Visual with Floating Depth Cards */}
          <div className="lg:col-span-6 relative">
            <Tilt3DCard maxTilt={8} scale={1.01} className="relative z-10 mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow & Background Frame */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-tr from-[#0D7A75]/15 via-white to-[#CCECE8]/30 border border-white shadow-2xl overflow-hidden">
                
                {/* Main Hero Image matching design.md */}
                <div className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src="/images/hero-patient.jpg"
                    alt="Happy patient having gentle smile examination at Anti Dental Care in Noida"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/images/hero-patient.jpg"; }}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063B36]/50 via-transparent to-transparent" />

                  {/* Top Floating Badge on Image */}
                  <div className="absolute top-4 left-4 glass-panel px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2.5 animate-float">
                    <div className="w-8 h-8 rounded-xl bg-[#0D7A75] text-white flex items-center justify-center text-xs font-bold">
                      ★ 4.9
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#101828]">Top Dental Clinic</div>
                      <div className="text-[10px] text-slate-500">Noida Sector 62 & 18</div>
                    </div>
                  </div>

                  {/* Bottom Floating Badge on Image */}
                  <div className="absolute bottom-4 right-4 glass-panel px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 animate-float-reverse">
                    <div className="w-9 h-9 rounded-full bg-[#E6F5F4] text-[#0D7A75] flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5 text-[#0D7A75]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#101828]">100% Painless Care</div>
                      <div className="text-[10px] text-emerald-700 font-medium">Digital Laser Protocol</div>
                    </div>
                  </div>

                </div>

              </div>

            </Tilt3DCard>

            {/* Backing Geometric Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0D7A75]/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#CCECE8]/60 rounded-full blur-2xl -z-10" />
          </div>

        </div>

        {/* Bottom Feature Cards Grid (4 in a row matching design.md) */}
        <div className="mt-14 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={idx}
                className="tilt-card p-5 rounded-2xl bg-white border border-slate-100/90 shadow-sm hover:shadow-md hover:border-[#A3E3DF] flex items-center gap-4 transition-all group"
              >
                <div className={`w-12 h-12 rounded-2xl ${prop.bg} ${prop.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-[#101828] group-hover:text-[#0D7A75] transition-colors truncate">
                    {prop.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 truncate">{prop.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

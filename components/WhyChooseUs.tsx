"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ShieldCheck, Award, HeartHandshake, PhoneCall } from "lucide-react";
import Tilt3DCard from "./Tilt3DCard";
import { CLINIC_INFO } from "@/data/dentalData";

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export default function WhyChooseUs({ onOpenBooking }: WhyChooseUsProps) {
  const [activeTab, setActiveTab] = useState<"highlights" | "equipment">("highlights");

  const checklistItems = [
    {
      title: "Highly Qualified Dentists",
      sub: "Led directly by Dr. Adam (Implantologist) & Dr. Eve (Orthodontist) with global surgical credentials.",
    },
    {
      title: "Modern Equipment",
      sub: "Low-radiation 3D CBCT imaging, painless soft-tissue lasers, and German CAD/CAM scanners.",
    },
    {
      title: "Comfortable Environment",
      sub: "Relaxing, anxiety-free clinic ambience with noise-cancelling entertainment headsets.",
    },
    {
      title: "Affordable Pricing",
      sub: "Transparent treatment cost estimates in INR (₹), zero hidden fees, and flexible EMI options.",
    },
  ];

  const stats = [
    { value: "15+", label: "Years of Experience", sub: "Clinical Excellence in NCR" },
    { value: "25k+", label: "Happy Patients", sub: "Verified Smiles Transformed" },
    { value: "98%", label: "Satisfaction Rate", sub: "5-Star Patient Reviews" },
    { value: "24/7", label: "Emergency Support", sub: "On-Call Dental Care in Noida" },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#FBFDFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Forest Green Container matching design.md (#063B36) */}
        <div className="relative rounded-3xl bg-[#063B36] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-[#0A4A44]">
          
          {/* Subtle Ambient Background Highlights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D7A75]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#16938D]/15 rounded-full blur-3xl pointer-events-none" />

          {/* 3-Column Grid matching design.md */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Copy & Checklist */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A4A44] border border-[#A3E3DF]/20 text-[#A3E3DF] text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                Why Choose Us
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-snug">
                We Care for Your <br />
                <span className="text-[#A3E3DF]">Healthy Smile</span>
              </h2>

              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                Our experienced team combines surgical expertise with genuine compassion to deliver the best dental experience in Noida. Led by Dr. Adam and Dr. Eve, we are with you at every step of your journey.
              </p>

              {/* Checklist with green/white checkmarks matching design.md */}
              <div className="space-y-3 pt-2">
                {checklistItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-[#16938D] text-white flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#A3E3DF] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5 leading-normal">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button matching design.md */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#doctors"
                  className="px-7 py-3 rounded-full bg-white hover:bg-slate-100 text-[#063B36] font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
                >
                  <span>More About Us</span>
                  <ArrowRight className="w-4 h-4 text-[#063B36] group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-full bg-[#0D7A75] hover:bg-[#095C58] text-white font-semibold text-sm transition-all border border-[#A3E3DF]/30"
                >
                  Consult Dr. Adam & Dr. Eve
                </button>
              </div>

            </div>

            {/* Center Visual: Doctor & Patient Consultation in Noida */}
            <div className="lg:col-span-4 flex justify-center">
              <Tilt3DCard maxTilt={7} scale={1.02} className="w-full max-w-sm">
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-800">
                  <img
                    src="/images/why-us-consultation.jpg"
                    alt="Dr. Adam and Dr. Eve consulting with happy patient in Noida"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/images/why-us-consultation.jpg"; }}
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063B36]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/90 backdrop-blur-md text-[#101828]">
                    <div className="text-xs font-bold flex items-center gap-1.5 text-[#063B36]">
                      <Award className="w-3.5 h-3.5 text-[#0D7A75]" />
                      Noida Clinical Excellence Center
                    </div>
                    <div className="text-[11px] text-slate-600 mt-0.5">
                      Sector 62 Pinnacle Tower & Sector 18 Metro Plaza
                    </div>
                  </div>
                </div>
              </Tilt3DCard>
            </div>

            {/* Right Column: Floating White Stats Card matching design.md */}
            <div className="lg:col-span-3">
              <Tilt3DCard maxTilt={5} scale={1.03}>
                <div className="rounded-2xl bg-white text-[#101828] p-6 shadow-2xl border border-slate-100 space-y-5">
                  
                  {stats.map((stat, idx) => (
                    <div key={idx} className={idx > 0 ? "pt-4 border-t border-slate-100" : ""}>
                      <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828] group-hover:text-[#0D7A75]">
                        {stat.value}
                      </div>
                      <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5">
                        {stat.label}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {stat.sub}
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={`tel:${CLINIC_INFO.phoneDemo}`}
                      className="w-full py-2.5 px-3 rounded-xl bg-[#E6F5F4] hover:bg-[#CCECE8] text-[#0D7A75] text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      24/7 Helpline: {CLINIC_INFO.phoneDemo}
                    </a>
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

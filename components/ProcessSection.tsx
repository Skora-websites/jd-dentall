"use client";

import React, { useState } from "react";
import { Calendar, Search, FileText, HeartPulse, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Tilt3DCard from "./Tilt3DCard";

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export default function ProcessSection({ onOpenBooking }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      number: 1,
      title: "Book Appointment",
      desc: "Schedule your appointment online or by phone.",
      detail: "Select Dr. Adam or Dr. Eve, pick your preferred Noida branch and time slot in under 60 seconds.",
      icon: Calendar,
    },
    {
      number: 2,
      title: "Dental Checkup",
      desc: "We examine your teeth and understand your needs.",
      detail: "High-definition 3D intraoral scanning and low-radiation digital radiography with zero discomfort.",
      icon: Search,
    },
    {
      number: 3,
      title: "Personalized Plan",
      desc: "Get a customized treatment plan for your smile.",
      detail: "Transparent cost estimate, 3D smile simulation, and clear milestone scheduling tailored to your goals.",
      icon: FileText,
    },
    {
      number: 4,
      title: "Treatment & Care",
      desc: "Receive the best treatment with ongoing care.",
      detail: "Gentle laser-assisted execution with lifetime warranty options and routine preventive checkups.",
      icon: HeartPulse,
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching design.md */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-2 max-w-lg">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0D7A75]">
              <Sparkles className="w-3.5 h-3.5" />
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828] leading-tight">
              Simple Steps to a <br />
              Healthy Smile
            </h2>
          </div>

          <p className="text-sm text-[#475569] max-w-md leading-relaxed">
            We make dental care easy and comfortable in just a few simple steps. Experience seamless, anxiety-free dentistry from consultation to post-op recovery.
          </p>
        </div>

        {/* 4 Steps Horizontal Flow with Connecting Dashed Line */}
        <div className="relative">
          
          {/* Connecting Dashed Line for Desktop */}
          <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-[#A3E3DF] -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.number;

              return (
                <Tilt3DCard
                  key={step.number}
                  maxTilt={6}
                  scale={1.02}
                  className="h-full"
                >
                  <div
                    onClick={() => setActiveStep(step.number)}
                    className={`p-6 rounded-2xl border text-center transition-all duration-300 h-full flex flex-col items-center justify-between cursor-pointer group ${
                      isActive
                        ? "bg-white border-[#0D7A75] ring-2 ring-[#0D7A75]/20 shadow-xl"
                        : "bg-[#FBFDFC] border-slate-200/80 hover:border-[#A3E3DF] hover:bg-white shadow-xs"
                    }`}
                  >
                    {/* Top Icon & Step Number Circle matching design.md */}
                    <div className="space-y-4 flex flex-col items-center">
                      
                      {/* Icon inside mint rounded badge */}
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-[#0D7A75] text-white shadow-lg shadow-[#0D7A75]/30 scale-110"
                            : "bg-[#E6F5F4] text-[#0D7A75] group-hover:scale-105"
                        }`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Number Badge (1, 2, 3, 4) in circle */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                          isActive
                            ? "bg-[#101828] text-white"
                            : "bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-[#0D7A75] group-hover:text-white"
                        }`}
                      >
                        {step.number}
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-[#101828] group-hover:text-[#0D7A75] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-xs text-[#475569] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                    </div>

                    {/* Step Detail Expand on Active */}
                    <div className="mt-4 pt-3 border-t border-slate-100 w-full text-[11px] text-slate-500">
                      {step.detail}
                    </div>

                  </div>
                </Tilt3DCard>
              );
            })}
          </div>

        </div>

        {/* Quick CTA Bottom */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0D7A75] hover:bg-[#095C58] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <span>Start Step 1: Book Consultation in Noida</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

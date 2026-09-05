"use client";

import React, { useState } from "react";
import { Award, Calendar, Sparkles, Star, MapPin, CheckCircle2, ShieldCheck, ArrowRight, Trophy } from "lucide-react";
import Tilt3DCard from "./Tilt3DCard";
import { DOCTORS } from "@/data/dentalData";

interface DoctorsSectionProps {
  onBookWithDoctor: (doctorId: string) => void;
}

export default function DoctorsSection({ onBookWithDoctor }: DoctorsSectionProps) {
  const [activeDoctorIndex, setActiveDoctorIndex] = useState(0);

  return (
    <section id="doctors" className="py-16 md:py-24 bg-[#FBFDFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching design.md */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-2 max-w-lg">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00a896]">
              <Sparkles className="w-3.5 h-3.5" />
              Our 2 Specialist Founders
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828] leading-tight">
              Meet Our <br />
              Expert Dentists
            </h2>
          </div>

          <p className="text-sm text-[#475569] max-w-md leading-relaxed">
            Our clinic is exclusively headed by our two senior specialists, our specialists, delivering personalized, pain-free dental excellence across Greater Noida, Greater Noida.
          </p>
        </div>

        {/* 2 Doctor Cards Grid: Focused, High-Trust, Rich Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DOCTORS.map((doc, idx) => {
            const isFeatured = doc.isFeatured;

            return (
              <Tilt3DCard
                key={doc.id}
                maxTilt={5}
                scale={1.02}
                className="h-full"
              >
                <div
                  className={`h-full rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-2xl border ${
                    isFeatured
                      ? "bg-gradient-to-b from-[#0f3057] to-[#1a4f8c] text-white border-[#00a896] ring-2 ring-[#00a896]/40"
                      : "bg-white text-[#101828] border-slate-200 hover:border-[#A3E3DF]"
                  }`}
                >
                  {/* Photo Container */}
                  <div className="relative h-80 sm:h-96 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        isFeatured
                          ? "from-[#0f3057] via-[#0f3057]/20 to-transparent"
                          : "from-white/60 via-transparent to-transparent"
                      }`}
                    />

                    {/* Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 ${
                          isFeatured
                            ? "bg-white text-[#00a896]"
                            : "bg-[#00a896] text-white"
                        }`}
                      >
                        <Award className="w-3.5 h-3.5" />
                        {isFeatured ? "Lead Oral Surgeon" : "Orthodontist & Cosmetic Dentist"}
                      </span>
                    </div>

                    {/* Clinic Experience Pill */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div
                        className={`p-3 rounded-2xl backdrop-blur-md flex items-center justify-between text-xs font-semibold ${
                          isFeatured
                            ? "bg-black/40 text-teal-100 border border-white/10"
                            : "bg-white/90 text-slate-800 border border-slate-200 shadow-sm"
                        }`}
                      >
                        <span>{doc.experience}</span>
                        <span className="flex items-center gap-1 text-amber-400">
                          <Star className="w-3.5 h-3.5 fill-current" /> 4.97 (1,200+ Reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Info Body */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-baseline justify-between">
                        <h3
                          className={`text-2xl font-extrabold tracking-tight ${
                            isFeatured ? "text-white" : "text-[#101828]"
                          }`}
                        >
                          {doc.name}
                        </h3>
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${
                            isFeatured ? "text-[#A3E3DF]" : "text-[#00a896]"
                          }`}
                        >
                          Greater Noida Greater Noida
                        </span>
                      </div>

                      <p
                        className={`text-sm font-semibold ${
                          isFeatured ? "text-[#A3E3DF]" : "text-[#00a896]"
                        }`}
                      >
                        {doc.role}
                      </p>

                      <p
                        className={`text-xs leading-relaxed font-medium ${
                          isFeatured ? "text-teal-100" : "text-slate-500"
                        }`}
                      >
                        {doc.qualifications}
                      </p>

                      <p
                        className={`text-xs leading-relaxed ${
                          isFeatured ? "text-slate-200" : "text-slate-600"
                        }`}
                      >
                        {doc.bio}
                      </p>

                      <div
                        className={`p-3 rounded-xl text-xs space-y-1 ${
                          isFeatured
                            ? "bg-[#1a4f8c]/80 text-teal-100 border border-[#00a896]"
                            : "bg-[#e5f6f4]/60 text-slate-700 border border-[#A3E3DF]/50"
                        }`}
                      >
                        <div className="font-bold flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#00a896]" />
                          Focus: {doc.speciality}
                        </div>
                        <div className="text-[11px] opacity-90">
                          Available: {doc.availableDays}
                        </div>
                      </div>

                      {doc.awards && doc.awards.length > 0 && (
                        <div
                          className={`p-3 rounded-xl text-xs space-y-1 ${
                            isFeatured
                              ? "bg-[#1a4f8c]/80 text-teal-100 border border-[#00a896]"
                              : "bg-[#e5f6f4]/60 text-slate-700 border border-[#A3E3DF]/50"
                          }`}
                        >
                          <div className="font-bold flex items-center gap-1.5">
                            <Trophy className="w-3.5 h-3.5 text-amber-400" />
                            Awards & Certifications
                          </div>
                          <ul className="space-y-1">
                            {doc.awards.map((award, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 text-[11px]">
                                <span className="text-[#00a896] mt-0.5">•</span>
                                {award}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3 pt-4 border-t border-current/10">
                      <button
                        onClick={() => onBookWithDoctor(doc.id)}
                        className={`w-full py-3.5 px-5 rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] ${
                          isFeatured
                            ? "bg-white text-[#0f3057] hover:bg-slate-100"
                            : "bg-[#00a896] text-white hover:bg-[#008f7f]"
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book Consultation with {doc.name}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>
              </Tilt3DCard>
            );
          })}
        </div>

        {/* 2 Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {[0, 1].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveDoctorIndex(dot)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeDoctorIndex === dot
                  ? "w-8 bg-[#00a896]"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Doctor ${dot + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


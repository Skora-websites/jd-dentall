"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, Sparkles, CheckCircle2, User } from "lucide-react";
import Tilt3DCard from "./Tilt3DCard";
import { TESTIMONIALS } from "@/data/dentalData";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching design.md */}
        <div className="text-left mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0D7A75]">
            <MessageSquareQuote className="w-4 h-4" />
            What Our Patients Say
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">
            Real Stories, Real Smiles
          </h2>
        </div>

        {/* Split Layout: Left Testimonial Card & Right Happy Patient Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Testimonial Card matching design.md */}
          <div className="lg:col-span-6">
            <Tilt3DCard maxTilt={5} scale={1.01}>
              <div className="rounded-3xl bg-[#FBFDFC] border border-slate-200/90 p-8 sm:p-10 shadow-lg relative flex flex-col justify-between min-h-[380px]">
                
                {/* Decorative Giant Quote Mark */}
                <div className="text-6xl font-serif text-[#0D7A75] leading-none mb-2 select-none">
                  “
                </div>

                {/* Quote Content */}
                <div className="space-y-4">
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic font-normal">
                    {currentTestimonial.quote}
                  </p>

                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>
                </div>

                {/* Author Info & Navigation Controls */}
                <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between mt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#E6F5F4] border-2 border-[#0D7A75] flex items-center justify-center text-[#0D7A75] font-bold overflow-hidden shadow-xs">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/images/testimonial-patient-smile.jpg";
                        }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-[#101828] text-base">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-xs font-semibold text-[#0D7A75] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {currentTestimonial.role} • {currentTestimonial.location}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Treatment: {currentTestimonial.treatment}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows (←) (→) */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-[#0D7A75] hover:text-white hover:border-[#0D7A75] text-[#101828] flex items-center justify-center transition-all shadow-xs"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-[#0D7A75] hover:text-white hover:border-[#0D7A75] text-[#101828] flex items-center justify-center transition-all shadow-xs"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Carousel Indicator Dots */}
                <div className="flex items-center gap-1.5 pt-4">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === idx ? "w-6 bg-[#0D7A75]" : "w-2 bg-slate-300"
                      }`}
                      aria-label={`Testimonial slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>
            </Tilt3DCard>
          </div>

          {/* Right: Happy Patient Image matching design.md */}
          <div className="lg:col-span-6 flex justify-center">
            <Tilt3DCard maxTilt={6} scale={1.02} className="w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/images/testimonial-patient-smile.jpg"
                  alt="Happy patient pointing to her clean radiant smile after treatment at J.D. Dentals"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/testimonial-patient-smile.jpg";
                  }}
                  className="w-full h-[440px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063B36]/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel text-[#101828] shadow-xl flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#0D7A75] uppercase tracking-wider">
                      Verified Smile Transformation
                    </div>
                    <div className="text-sm font-extrabold text-[#101828] mt-0.5">
                      100% Pain-Free Experience
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-[#0D7A75] text-white text-xs font-bold shadow-xs">
                    ★ 5.0 Rating
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Play, Sparkles, UserCheck, Cpu, Smile, ShieldCheck, ArrowRight } from "lucide-react";
import gsap from "gsap";
import Tilt3DCard from "./Tilt3DCard";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const valuePropsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      badgesRef.current,
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6 }
    )
    .fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.3"
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.4"
    )
    .fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    );

    if (valuePropsRef.current) {
      const props = valuePropsRef.current.querySelectorAll(".value-prop");
      gsap.fromTo(
        props,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.5)",
          delay: 0.8,
        }
      );
    }
  }, []);

  const valueProps = [
    { title: "Expert Doctors", desc: "16+ Years Experience", icon: UserCheck },
    { title: "Advanced Technology", desc: "3D CBCT & Digital Scanners", icon: Cpu },
    { title: "Pain-Free Treatment", desc: "Gentle Laser Protocols", icon: ShieldCheck },
    { title: "Patient Satisfaction", desc: "25k+ Smiles Transformed", icon: Smile },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F0FDFB]/60 via-[#FBFDFC] to-white"
    >
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#CCECE8]/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#E6F5F4]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <div ref={badgesRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F5F4] border border-[#A3E3DF] text-[#0D7A75] text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-4 h-4 text-[#0D7A75]" />
              <span>Advanced Care, Brighter Smiles in Greater Noida</span>
            </div>

            <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#101828] leading-[1.12]">
              Your Smile, <br />
              <span className="text-[#0D7A75] relative inline-block">
                Our Passion
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#CCECE8] -z-10" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9C50 3 150 3 197 9" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p ref={subtitleRef} className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl font-normal">
              Experience world-class dental care with modern technology and a gentle touch in Greater Noida. Led by{" "}
              <strong className="text-[#101828] font-semibold">Dr. Vinay Saini</strong> and{" "}
              <strong className="text-[#101828] font-semibold">Dr. Shivani Saini</strong>, we make every smile healthy, confident, and beautiful across Greater Noida.
            </p>

            <div ref={buttonsRef} className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-[#0D7A75] hover:bg-[#095C58] text-white text-base font-semibold tracking-wide shadow-lg shadow-[#0D7A75]/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/services"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-[#101828] text-base font-semibold shadow-sm hover:shadow transition-all flex items-center gap-3 group"
              >
                <span>Explore Services</span>
                <div className="w-7 h-7 rounded-full bg-[#E6F5F4] text-[#0D7A75] flex items-center justify-center group-hover:bg-[#0D7A75] group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
              </Link>
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face" alt="Dr. Vinay Saini" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs" />
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face" alt="Dr. Shivani Saini" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs" />
              </div>
              <div>
                <span className="font-bold text-[#101828]">Consult Dr. Vinay & Dr. Shivani</span>
                <span className="block text-[11px] text-slate-500">Zero waiting time • Two Greater Noida Clinics</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <Tilt3DCard maxTilt={8} scale={1.01} className="relative z-10 mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl p-3 bg-gradient-to-tr from-[#0D7A75]/15 via-white to-[#CCECE8]/30 border border-white shadow-2xl overflow-hidden">
                <div className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop" 
                    alt="Happy patient at J.D. Dentals Greater Noida" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063B36]/50 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 glass-panel px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2.5 animate-float">
                    <div className="w-8 h-8 rounded-xl bg-[#0D7A75] text-white flex items-center justify-center text-xs font-bold">★ 4.9</div>
                    <div>
                      <div className="text-xs font-bold text-[#101828]">Top Dental Clinic</div>
                      <div className="text-[10px] text-slate-500">Greater Noida</div>
                    </div>
                  </div>

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

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0D7A75]/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#CCECE8]/60 rounded-full blur-2xl -z-10" />
          </div>
        </div>

        <div ref={valuePropsRef} className="mt-14 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={idx}
                className="value-prop tilt-card p-5 rounded-2xl bg-white border border-slate-100/90 shadow-sm hover:shadow-md hover:border-[#A3E3DF] flex items-center gap-4 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E6F5F4] text-[#0D7A75] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-[#101828] group-hover:text-[#0D7A75] transition-colors truncate">{prop.title}</h4>
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

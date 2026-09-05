"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Award, Calendar, Star, MapPin, ShieldCheck, ArrowRight, Trophy } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWidget from "@/components/FloatingWidget";
import Tilt3DCard from "@/components/Tilt3DCard";
import { AnimateOnScroll, StaggerContainer } from "@/components/ScrollAnimations";
import { DOCTORS } from "@/data/dentalData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DoctorsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>("dr-vinay");
  const doctorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!doctorsRef.current) return;

    const cards = doctorsRef.current.querySelectorAll(".doctor-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 80, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: doctorsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const doctorHighlights = [
    { title: "Global Training", desc: "Fellowship training from USA and Germany for world-class expertise.", icon: "🌍" },
    { title: "30+ Years Combined", desc: "Over 30 years of combined clinical experience in dental surgery.", icon: "⏱️" },
    { title: "6,500+ Implants", desc: "Successfully placed over 6,500 dental implants with 99.2% success rate.", icon: "🦷" },
    { title: "Invisalign Diamond", desc: "Certified Diamond Provider for Invisalign clear aligners.", icon: "💎" },
    { title: "Advanced Technology", desc: "Proficient with 3D CBCT, CAD/CAM, and laser dentistry.", icon: "🔬" },
    { title: "Patient-First Approach", desc: "Gentle, compassionate care tailored to each patient's needs.", icon: "❤️" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFDFC] text-[#101828]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-1">
        <PageHero
          title="Meet Our Expert Dentists"
          subtitle="Our clinic is exclusively headed by two senior specialists with global credentials, delivering personalized, pain-free dental excellence across Greater Noida."
          breadcrumbs={[{ label: "Doctors" }]}
          badge="Our Specialist Founders"
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={doctorsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {DOCTORS.map((doc) => {
                const isFeatured = doc.isFeatured;

                return (
                  <div key={doc.id} className="doctor-card">
                    <Tilt3DCard maxTilt={5} scale={1.02} className="h-full">
                      <div className={`h-full rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-2xl border ${
                        isFeatured
                          ? "bg-gradient-to-b from-[#0f3057] to-[#1a4f8c] text-white border-[#00a896] ring-2 ring-[#00a896]/40"
                          : "bg-white text-[#101828] border-slate-200 hover:border-[#A3E3DF]"
                      }`}>
                        <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                          <img 
                            src={doc.image}
                            alt={doc.name}
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${isFeatured ? "from-[#0f3057] via-[#0f3057]/20 to-transparent" : "from-white/60 via-transparent to-transparent"}`} />

                          <div className="absolute top-4 right-4 flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 ${isFeatured ? "bg-white text-[#00a896]" : "bg-[#00a896] text-white"}`}>
                              <Award className="w-3.5 h-3.5" />
                              {isFeatured ? "Lead Oral Surgeon" : "Orthodontist & Cosmetic Dentist"}
                            </span>
                          </div>

                          <div className="absolute bottom-4 left-4 right-4">
                            <div className={`p-3 rounded-2xl backdrop-blur-md flex items-center justify-between text-xs font-semibold ${isFeatured ? "bg-black/40 text-teal-100 border border-white/10" : "bg-white/90 text-slate-800 border border-slate-200 shadow-sm"}`}>
                              <span>{doc.experience}</span>
                              <span className="flex items-center gap-1 text-amber-400">
                                <Star className="w-3.5 h-3.5 fill-current" /> 4.97 (1,200+ Reviews)
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                          <div className="space-y-3">
                            <h3 className={`text-2xl font-extrabold tracking-tight ${isFeatured ? "text-white" : "text-[#101828]"}`}>{doc.name}</h3>
                            <p className={`text-sm font-semibold ${isFeatured ? "text-[#A3E3DF]" : "text-[#00a896]"}`}>{doc.role}</p>
                            <p className={`text-xs leading-relaxed font-medium ${isFeatured ? "text-teal-100" : "text-slate-500"}`}>{doc.qualifications}</p>
                            <p className={`text-sm leading-relaxed ${isFeatured ? "text-slate-200" : "text-slate-600"}`}>{doc.bio}</p>

                            <div className={`p-3 rounded-xl text-xs space-y-2 ${isFeatured ? "bg-[#1a4f8c]/80 text-teal-100 border border-[#00a896]" : "bg-[#e5f6f4]/60 text-slate-700 border border-[#A3E3DF]/50"}`}>
                              <div className="font-bold flex items-center gap-1.5">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#00a896]" />
                                Focus: {doc.speciality}
                              </div>
                              <div className="text-[11px] opacity-90">Available: {doc.availableDays}</div>
                            </div>

                            {doc.awards && doc.awards.length > 0 && (
                              <div className={`p-3 rounded-xl text-xs space-y-2 ${isFeatured ? "bg-[#1a4f8c]/80 text-teal-100 border border-[#00a896]" : "bg-[#e5f6f4]/60 text-slate-700 border border-[#A3E3DF]/50"}`}>
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

                            <div className="space-y-2">
                              <span className={`text-xs font-bold ${isFeatured ? "text-teal-100" : "text-slate-500"}`}>Available at:</span>
                              <div className="flex flex-wrap gap-2">
                                {doc.clinics.map((clinic, idx) => (
                                  <span key={idx} className={`px-2 py-1 rounded-full text-[10px] font-semibold ${isFeatured ? "bg-white/10 text-white" : "bg-[#e5f6f4] text-[#00a896]"}`}>
                                    <MapPin className="w-3 h-3 inline mr-1" />
                                    {clinic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3 pt-4 border-t border-current/10">
                            <button
                              onClick={() => { setSelectedDoctorId(doc.id); setIsBookingOpen(true); }}
                              className={`w-full py-3.5 px-5 rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] ${
                                isFeatured ? "bg-white text-[#0f3057] hover:bg-slate-100" : "bg-[#00a896] text-white hover:bg-[#008f7f]"
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
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#FBFDFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fadeUp">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">Why Our Doctors Stand Out</h2>
                <p className="text-sm text-[#475569]">Credentials and expertise that set us apart</p>
              </div>
            </AnimateOnScroll>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
              {doctorHighlights.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#A3E3DF] transition-all group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-base font-bold text-[#101828] group-hover:text-[#00a896] transition-colors">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} initialDoctorId={selectedDoctorId} />
      <FloatingWidget onOpenBooking={() => setIsBookingOpen(true)} />
    </div>
  );
}


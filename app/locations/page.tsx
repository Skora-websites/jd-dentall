"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, Star, ArrowRight, Navigation, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWidget from "@/components/FloatingWidget";
import Tilt3DCard from "@/components/Tilt3DCard";
import { AnimateOnScroll, StaggerContainer } from "@/components/ScrollAnimations";
import { CLINIC_LOCATIONS } from "@/data/dentalData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LocationsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  const locationImages = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop",
  ];

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".location-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFDFC] text-[#101828]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-1">
        <PageHero
          title="Find Us Near You"
          subtitle="Two convenient locations in Greater Noida, both offering the same world-class dental care with state-of-the-art equipment and specialist doctors."
          breadcrumbs={[{ label: "Locations" }]}
          badge="Our Greater Noida Clinics"
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {CLINIC_LOCATIONS.map((clinic, index) => (
                <div key={clinic.id} className="location-card">
                  <Tilt3DCard maxTilt={5} scale={1.02} className="h-full">
                    <div className="h-full rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#A3E3DF] overflow-hidden transition-all duration-300">
                      {/* Clinic Image */}
                      <div className="relative h-64 w-full overflow-hidden">
                        <img 
                          src={locationImages[index]}
                          alt={clinic.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-bold text-[#101828]">{clinic.rating}</span>
                          <span className="text-xs text-slate-500">({clinic.reviewCount} reviews)</span>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <h2 className="text-2xl font-extrabold text-white drop-shadow-lg">{clinic.name}</h2>
                          <p className="text-xs text-slate-200 mt-1">{clinic.landmark}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 sm:p-8 space-y-5">
                        <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FBFDFC] border border-slate-100">
                          <MapPin className="w-5 h-5 text-[#00a896] flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-sm font-semibold text-[#101828] block">Address</span>
                            <span className="text-xs text-slate-600">{clinic.fullAddress}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FBFDFC] border border-slate-100">
                          <Phone className="w-5 h-5 text-[#00a896] flex-shrink-0" />
                          <div>
                            <span className="text-sm font-semibold text-[#101828] block">Phone</span>
                            <a href={`tel:${clinic.phone}`} className="text-sm text-[#00a896] font-bold hover:underline">{clinic.phone}</a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FBFDFC] border border-slate-100">
                          <Clock className="w-5 h-5 text-[#00a896] flex-shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <span className="text-sm font-semibold text-[#101828] block">Opening Hours</span>
                            <div className="text-xs space-y-0.5">
                              <div className="flex justify-between gap-8">
                                <span className="text-slate-600">Monday - Friday:</span>
                                <span className="font-medium text-slate-800">{clinic.hours.weekday}</span>
                              </div>
                              <div className="flex justify-between gap-8">
                                <span className="text-slate-600">Saturday:</span>
                                <span className="font-medium text-slate-800">{clinic.hours.saturday}</span>
                              </div>
                              <div className="flex justify-between gap-8">
                                <span className="text-slate-600">Sunday:</span>
                                <span className="font-medium text-red-500">{clinic.hours.sunday}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Services Available</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {clinic.features.map((feature, idx) => (
                              <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#e5f6f4] text-[#00a896] text-[11px] font-semibold">
                                <CheckCircle2 className="w-3 h-3" />
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3 pt-2">
                          <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-full bg-[#00a896] text-white text-sm font-semibold text-center hover:bg-[#008f7f] transition-all flex items-center justify-center gap-2">
                            <Navigation className="w-4 h-4" />
                            Get Directions
                          </a>
                          <a href={`tel:${clinic.phone}`} className="px-5 py-3 rounded-full border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                            <Phone className="w-4 h-4 text-[#00a896]" />
                            Call
                          </a>
                        </div>
                      </div>
                    </div>
                  </Tilt3DCard>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <FloatingWidget onOpenBooking={() => setIsBookingOpen(true)} />
    </div>
  );
}


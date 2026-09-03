"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Stethoscope, ShieldCheck, Smile, CheckCircle2, Heart, Zap, Star, Shield } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWidget from "@/components/FloatingWidget";
import Tilt3DCard from "@/components/Tilt3DCard";
import { AnimateOnScroll, StaggerContainer } from "@/components/ScrollAnimations";
import { SERVICES } from "@/data/dentalData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>("dr-vinay");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("general-checkup");
  const [activeFilter, setActiveFilter] = useState("all");
  const cardsRef = useRef<HTMLDivElement>(null);

  const categories = ["all", "Preventive Care", "Cosmetic Care", "Restorative Care", "Orthodontics"];
  const filteredServices = activeFilter === "all" ? SERVICES : SERVICES.filter((s) => s.category === activeFilter);

  const serviceImages: Record<string, string> = {
    "general-checkup": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
    "teeth-whitening": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
    "dental-implants": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
    "orthodontics": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop",
  };

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".service-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, rotateX: -10 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [activeFilter]);

  const additionalServices = [
    { name: "Root Canal Treatment", desc: "Painless single-sitting root canal", icon: Heart, color: "bg-rose-50 text-rose-500", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop" },
    { name: "Dental Crowns", desc: "Same-day ceramic crowns", icon: Shield, color: "bg-amber-50 text-amber-500", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop" },
    { name: "Wisdom Tooth Removal", desc: "Safe surgical extraction", icon: Zap, color: "bg-purple-50 text-purple-500", image: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=400&h=300&fit=crop" },
    { name: "Pediatric Dentistry", desc: "Gentle care for kids", icon: Smile, color: "bg-blue-50 text-blue-500", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop" },
    { name: "Gum Treatment", desc: "Periodontal therapy", icon: Stethoscope, color: "bg-green-50 text-green-500", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop" },
    { name: "Dental Bridges", desc: "Missing teeth replacement", icon: Star, color: "bg-orange-50 text-orange-500", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop" },
    { name: "Smile Makeover", desc: "Complete smile transformation", icon: Sparkles, color: "bg-pink-50 text-pink-500", image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop" },
    { name: "Emergency Care", desc: "24/7 dental emergencies", icon: ShieldCheck, color: "bg-red-50 text-red-500", image: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=400&h=300&fit=crop" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFDFC] text-[#101828]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-1">
        <PageHero
          title="Our Dental Services"
          subtitle="From routine checkups to advanced laser treatments and dental implants — we provide complete, gentle care for you and your family in Greater Noida."
          breadcrumbs={[{ label: "Services" }]}
          badge="Complete Dental Care Under One Roof"
        />

        <section className="py-8 bg-white border-b border-slate-100 sticky top-[72px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    activeFilter === cat
                      ? "bg-[#00a896] text-white shadow-sm scale-105"
                      : "bg-white text-[#475569] hover:bg-[#e5f6f4] hover:text-[#00a896] border border-slate-200"
                  }`}
                >
                  {cat === "all" ? "All Treatments" : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#FBFDFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="service-card" style={{ perspective: "1000px" }}>
                  <Tilt3DCard maxTilt={6} scale={1.02} className="h-full">
                    <div className="h-full rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#A3E3DF] overflow-hidden flex flex-col transition-all duration-300 group">
                      <div className="relative h-52 w-full overflow-hidden">
                        <img 
                          src={serviceImages[service.id] || "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop"}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#00a896] text-white text-[11px] font-medium">{service.badgeText}</span>
                      </div>

                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-[#101828] group-hover:text-[#00a896] transition-colors">{service.title}</h3>
                            <span className="text-sm font-bold text-[#00a896] bg-[#e5f6f4] px-3 py-1 rounded-full">{service.priceEstimate}</span>
                          </div>
                          <p className="text-sm text-[#475569] leading-relaxed">{service.description}</p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-slate-100">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#00a896] flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                          <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-[#00a896] hover:text-[#008f7f] group/link transition-colors">
                            <span>View Details</span>
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                          <span className="text-xs font-medium text-slate-400">{service.duration}</span>
                        </div>
                      </div>
                    </div>
                  </Tilt3DCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fadeUp">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">More Services We Offer</h2>
                <p className="text-sm text-[#475569]">Comprehensive dental care for every need</p>
              </div>
            </AnimateOnScroll>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {additionalServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Tilt3DCard key={idx} maxTilt={4} scale={1.01} className="h-full">
                    <div className="h-full rounded-2xl bg-[#FBFDFC] border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#A3E3DF] transition-all group cursor-pointer overflow-hidden">
                      <div className="relative h-32 overflow-hidden">
                        <img 
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl ${service.color} flex items-center justify-center bg-white shadow-md`}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-base font-bold text-[#101828] group-hover:text-[#00a896] transition-colors">{service.name}</h3>
                        <p className="text-xs text-slate-500 mt-1">{service.desc}</p>
                      </div>
                    </div>
                  </Tilt3DCard>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} initialDoctorId={selectedDoctorId} initialServiceId={selectedServiceId} />
      <FloatingWidget onOpenBooking={() => setIsBookingOpen(true)} />
    </div>
  );
}


"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Award, Heart, Shield, Users, Target, ArrowRight, Star, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWidget from "@/components/FloatingWidget";
import Tilt3DCard from "@/components/Tilt3DCard";
import { AnimateOnScroll, StaggerContainer, CounterAnimation, ImageReveal } from "@/components/ScrollAnimations";
import { CLINIC_LOCATIONS } from "@/data/dentalData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const items = timelineRef.current.querySelectorAll(".timeline-item");
    gsap.fromTo(
      items,
      { opacity: 0, x: (i) => i % 2 === 0 ? -50 : 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const values = [
    { icon: Shield, title: "Patient Safety First", desc: "European sterilization protocols and 100% disposable instruments for your safety.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop" },
    { icon: Heart, title: "Compassionate Care", desc: "Gentle, anxiety-free treatments with a focus on patient comfort.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop" },
    { icon: Target, title: "Precision Excellence", desc: "Computer-guided treatments with 3D digital planning for optimal results.", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop" },
    { icon: Users, title: "Family Friendly", desc: "Comprehensive care for all ages, from kids to seniors.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop" },
  ];

  const milestones = [
    { year: "2010", title: "Founded", desc: "J.D. Dentals established in Greater Noida", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=300&h=200&fit=crop" },
    { year: "2015", title: "Expansion", desc: "Second clinic opened at Gaur City", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300&h=200&fit=crop" },
    { year: "2018", title: "Technology Upgrade", desc: "3D CBCT and digital scanners installed", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&fit=crop" },
    { year: "2020", title: "Digital Smile Design", desc: "AI-powered smile simulation launched", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300&h=200&fit=crop" },
    { year: "2023", title: "25,000+ Smiles", desc: "Milestone of 25k+ happy patients", image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=300&h=200&fit=crop" },
    { year: "2025", title: "Continued Excellence", desc: "200+ Google reviews with 4.9+ rating", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300&h=200&fit=crop" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFDFC] text-[#101828]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-1">
        <PageHero
          title="About J.D. Dentals"
          subtitle="Greater Noida's trusted dental care provider since 2010. We combine advanced technology with compassionate care to deliver exceptional dental experiences."
          breadcrumbs={[{ label: "About Us" }]}
          badge="Our Story & Mission"
        />

        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll animation="slideRight">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0D7A75]">
                    <Award className="w-3.5 h-3.5" />
                    Our Mission
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828] leading-tight">
                    Making World-Class Dental Care Accessible to Everyone
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    At J.D. Dentals, we believe everyone deserves a healthy, beautiful smile. Our mission
                    is to provide advanced, pain-free dental care using the latest technology, delivered
                    by our team of specialist doctors who genuinely care about your well-being.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    With two modern clinics in Greater Noida, we've transformed over 25,000 smiles and
                    continue to set the standard for dental excellence in the region.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link href="/doctors" className="px-6 py-3 rounded-full bg-[#0D7A75] text-white font-semibold text-sm hover:bg-[#095C58] transition-all flex items-center gap-2">
                      Meet Our Team <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/services" className="px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all">
                      Our Services
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slideLeft" delay={0.2}>
                <Tilt3DCard maxTilt={6} scale={1.02}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop" 
                      alt="Modern dental clinic interior"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#063B36]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#063B36] to-transparent">
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { value: 15, suffix: "+", label: "Years Experience" },
                          { value: 25000, suffix: "+", label: "Happy Patients" },
                          { value: 6500, suffix: "+", label: "Implants Placed" },
                          { value: 99.2, suffix: "%", label: "Success Rate" },
                        ].map((stat, idx) => (
                          <div key={idx} className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                            <div className="text-2xl font-black text-white">
                              <CounterAnimation target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-[10px] text-slate-200 mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tilt3DCard>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#FBFDFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fadeUp">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">Our Core Values</h2>
                <p className="text-sm text-[#475569]">The principles that guide everything we do</p>
              </div>
            </AnimateOnScroll>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <Tilt3DCard key={idx} maxTilt={5} scale={1.02} className="h-full">
                    <div className="h-full rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#A3E3DF] transition-all group overflow-hidden">
                      <div className="relative h-32 overflow-hidden">
                        <img 
                          src={value.image}
                          alt={value.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-[#0D7A75]">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-base font-bold text-[#101828] group-hover:text-[#0D7A75] transition-colors">{value.title}</h3>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">{value.desc}</p>
                      </div>
                    </div>
                  </Tilt3DCard>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fadeUp">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">Our Journey</h2>
                <p className="text-sm text-[#475569]">Milestones in our commitment to dental excellence</p>
              </div>
            </AnimateOnScroll>

            <div ref={timelineRef} className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0D7A75] to-[#A3E3DF] -translate-x-1/2" />

              <div className="space-y-8">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className={`timeline-item relative flex items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#0D7A75] border-4 border-white shadow-md -translate-x-1/2 z-10 hover:scale-125 transition-transform" />
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <Tilt3DCard maxTilt={3} scale={1.01}>
                        <div className="rounded-2xl bg-[#FBFDFC] border border-slate-200/90 hover:border-[#A3E3DF] hover:shadow-md transition-all overflow-hidden">
                          <div className="relative h-24 overflow-hidden">
                            <img 
                              src={milestone.image}
                              alt={milestone.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <span className="absolute bottom-2 left-2 text-xs font-bold text-white bg-[#0D7A75] px-2 py-0.5 rounded-full">{milestone.year}</span>
                          </div>
                          <div className="p-4">
                            <h3 className="text-base font-bold text-[#101828]">{milestone.title}</h3>
                            <p className="text-xs text-slate-500 mt-1">{milestone.desc}</p>
                          </div>
                        </div>
                      </Tilt3DCard>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#FBFDFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fadeUp">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">Our Clinics</h2>
                <p className="text-sm text-[#475569]">Two modern locations serving Greater Noida</p>
              </div>
            </AnimateOnScroll>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" staggerDelay={0.2}>
              {CLINIC_LOCATIONS.map((clinic, index) => (
                <Tilt3DCard key={clinic.id} maxTilt={4} scale={1.01} className="h-full">
                  <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden group">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={index === 0 ? "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=300&fit=crop" : "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=300&fit=crop"}
                        alt={clinic.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-bold text-white">{clinic.rating}</span>
                        <span className="text-xs text-slate-200">({clinic.reviewCount})</span>
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <h3 className="text-lg font-bold text-[#101828] group-hover:text-[#0D7A75] transition-colors">{clinic.shortName}</h3>
                      <div className="flex items-start gap-2 text-sm text-slate-600">
                        <MapPin className="w-4 h-4 text-[#0D7A75] flex-shrink-0 mt-0.5" />
                        {clinic.fullAddress}
                      </div>
                      <Link href={`/locations/${clinic.slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0D7A75] hover:underline">
                        View Details <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </Tilt3DCard>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <FloatingWidget onOpenBooking={() => setIsBookingOpen(true)} />
    </div>
  );
}

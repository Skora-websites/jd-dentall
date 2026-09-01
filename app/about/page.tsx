"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Award,
  Heart,
  Shield,
  Users,
  Target,
  CheckCircle2,
  ArrowRight,
  Star,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWidget from "@/components/FloatingWidget";
import Tilt3DCard from "@/components/Tilt3DCard";
import { DOCTORS, CLINIC_LOCATIONS } from "@/data/dentalData";

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const values = [
    {
      icon: Shield,
      title: "Patient Safety First",
      desc: "European sterilization protocols and 100% disposable instruments for your safety.",
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      desc: "Gentle, anxiety-free treatments with a focus on patient comfort.",
    },
    {
      icon: Target,
      title: "Precision Excellence",
      desc: "Computer-guided treatments with 3D digital planning for optimal results.",
    },
    {
      icon: Users,
      title: "Family Friendly",
      desc: "Comprehensive care for all ages, from kids to seniors.",
    },
  ];

  const milestones = [
    { year: "2010", title: "Founded", desc: "J.D. Dentals established in Greater Noida" },
    { year: "2015", title: "Expansion", desc: "Second clinic opened at Gaur City" },
    { year: "2018", title: "Technology Upgrade", desc: "3D CBCT and digital scanners installed" },
    { year: "2020", title: "Digital Smile Design", desc: "AI-powered smile simulation launched" },
    { year: "2023", title: "25,000+ Smiles", desc: "Milestone of 25k+ happy patients" },
    { year: "2025", title: "Continued Excellence", desc: "200+ Google reviews with 4.9+ rating" },
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

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  <Link
                    href="/doctors"
                    className="px-6 py-3 rounded-full bg-[#0D7A75] text-white font-semibold text-sm hover:bg-[#095C58] transition-all flex items-center gap-2"
                  >
                    Meet Our Team <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all"
                  >
                    Our Services
                  </Link>
                </div>
              </div>

              <div className="relative">
                <Tilt3DCard maxTilt={6} scale={1.02}>
                  <div className="rounded-3xl bg-gradient-to-br from-[#E6F5F4] to-[#CCECE8] p-8 md:p-12">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { value: "15+", label: "Years Experience" },
                        { value: "25k+", label: "Happy Patients" },
                        { value: "6500+", label: "Implants Placed" },
                        { value: "99.2%", label: "Success Rate" },
                      ].map((stat, idx) => (
                        <div key={idx} className="text-center p-4 rounded-2xl bg-white/80 shadow-sm">
                          <div className="text-3xl font-black text-[#0D7A75]">{stat.value}</div>
                          <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tilt3DCard>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-[#FBFDFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">
                Our Core Values
              </h2>
              <p className="text-sm text-[#475569]">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <Tilt3DCard key={idx} maxTilt={5} scale={1.02} className="h-full">
                    <div className="h-full p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#A3E3DF] transition-all group text-center">
                      <div className="w-14 h-14 rounded-2xl bg-[#E6F5F4] text-[#0D7A75] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-base font-bold text-[#101828] group-hover:text-[#0D7A75] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{value.desc}</p>
                    </div>
                  </Tilt3DCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">
                Our Journey
              </h2>
              <p className="text-sm text-[#475569]">Milestones in our commitment to dental excellence</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#A3E3DF] -translate-x-1/2" />

              <div className="space-y-8">
                {milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className={`relative flex items-center gap-8 ${
                      idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#0D7A75] border-4 border-white shadow-md -translate-x-1/2 z-10" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <div className="p-5 rounded-2xl bg-[#FBFDFC] border border-slate-200/90 hover:border-[#A3E3DF] transition-all">
                        <span className="text-xs font-bold text-[#0D7A75] bg-[#E6F5F4] px-2 py-1 rounded-full">
                          {milestone.year}
                        </span>
                        <h3 className="text-base font-bold text-[#101828] mt-2">{milestone.title}</h3>
                        <p className="text-xs text-slate-500 mt-1">{milestone.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Locations */}
        <section className="py-16 md:py-24 bg-[#FBFDFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">
                Our Clinics
              </h2>
              <p className="text-sm text-[#475569]">
                Two modern locations serving Greater Noida
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {CLINIC_LOCATIONS.map((clinic) => (
                <div
                  key={clinic.id}
                  className="rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all p-6 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#101828]">{clinic.shortName}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold">{clinic.rating}</span>
                      <span className="text-xs text-slate-500">({clinic.reviewCount})</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <MapPin className="w-4 h-4 text-[#0D7A75] flex-shrink-0 mt-0.5" />
                    {clinic.fullAddress}
                  </div>
                  <Link
                    href={`/locations/${clinic.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0D7A75] hover:underline"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
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

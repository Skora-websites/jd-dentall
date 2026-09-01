"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Stethoscope, ShieldCheck, Smile, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWidget from "@/components/FloatingWidget";
import Tilt3DCard from "@/components/Tilt3DCard";
import { SERVICES } from "@/data/dentalData";

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>("dr-adam");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("general-checkup");
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = ["all", "Preventive Care", "Cosmetic Care", "Restorative Care", "Orthodontics"];

  const filteredServices =
    activeFilter === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeFilter);

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="w-5 h-5 text-[#0D7A75]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#0D7A75]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#0D7A75]" />;
      case "Smile":
      default:
        return <Smile className="w-5 h-5 text-[#0D7A75]" />;
    }
  };

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

        {/* Category Filters */}
        <section className="py-8 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    activeFilter === cat
                      ? "bg-[#0D7A75] text-white shadow-sm"
                      : "bg-white text-[#475569] hover:bg-[#E6F5F4] hover:text-[#0D7A75] border border-slate-200"
                  }`}
                >
                  {cat === "all" ? "All Treatments" : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-[#FBFDFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <Tilt3DCard key={service.id} maxTilt={6} scale={1.02} className="h-full">
                  <div className="h-full rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#A3E3DF] overflow-hidden flex flex-col transition-all duration-300 group">
                    {/* Image Header */}
                    <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E6F5F4] to-[#CCECE8] flex items-center justify-center">
                        {getBadgeIcon(service.iconName)}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#0D7A75] text-white text-[11px] font-medium">
                        {service.badgeText}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold text-[#101828] group-hover:text-[#0D7A75] transition-colors">
                            {service.title}
                          </h3>
                          <span className="text-sm font-bold text-[#0D7A75] bg-[#E6F5F4] px-3 py-1 rounded-full">
                            {service.priceEstimate}
                          </span>
                        </div>
                        <p className="text-sm text-[#475569] leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Benefits Preview */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A75] flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="pt-4 flex items-center justify-between">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0D7A75] hover:text-[#095C58] group/link transition-colors"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                        <span className="text-xs font-medium text-slate-400">
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </Tilt3DCard>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">
                More Services We Offer
              </h2>
              <p className="text-sm text-[#475569]">
                Comprehensive dental care for every need
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Root Canal Treatment", desc: "Painless single-sitting root canal", icon: "🦷" },
                { name: "Dental Crowns", desc: "Same-day ceramic crowns", icon: "👑" },
                { name: "Wisdom Tooth Removal", desc: "Safe surgical extraction", icon: "⚕️" },
                { name: "Pediatric Dentistry", desc: "Gentle care for kids", icon: "👶" },
                { name: "Gum Treatment", desc: "Periodontal therapy", icon: "🩺" },
                { name: "Dental Bridges", desc: "Missing teeth replacement", icon: "🌉" },
                { name: "Smile Makeover", desc: "Complete smile transformation", icon: "✨" },
                { name: "Emergency Care", desc: "24/7 dental emergencies", icon: "🚨" },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FBFDFC] border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#A3E3DF] transition-all group"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-base font-bold text-[#101828] group-hover:text-[#0D7A75] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialDoctorId={selectedDoctorId}
        initialServiceId={selectedServiceId}
      />
      <FloatingWidget onOpenBooking={() => setIsBookingOpen(true)} />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, Star, Clock, CheckCircle2, Calendar } from "lucide-react";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import DoctorsSection from "@/components/DoctorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

import BookingModal from "@/components/BookingModal";
import ServiceModal from "@/components/ServiceModal";
import FloatingWidget from "@/components/FloatingWidget";
import Tilt3DCard from "@/components/Tilt3DCard";

import { ServiceItem } from "@/types";
import { CLINIC_LOCATIONS } from "@/data/dentalData";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>("dr-adam");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("general-checkup");
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (doctorId?: string, serviceId?: string) => {
    if (doctorId) setSelectedDoctorId(doctorId);
    if (serviceId) setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setActiveServiceModal(service);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFDFC] text-[#101828]">
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* Dental Services Section */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Why Choose Us */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* 4-Step Smile Process Timeline */}
        <ProcessSection onOpenBooking={() => handleOpenBooking()} />

        {/* Meet Our Expert Dentists */}
        <DoctorsSection onBookWithDoctor={(docId) => handleOpenBooking(docId)} />

        {/* Real Patient Testimonials */}
        <TestimonialsSection />

        {/* Our Locations Section - NEW */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0D7A75]">
                <MapPin className="w-3.5 h-3.5" />
                Our Locations
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">
                Visit Us at <br />
                Two Convenient Locations
              </h2>
              <p className="text-sm text-[#475569]">
                Choose the clinic nearest to you. Both locations offer the same world-class care
                with state-of-the-art equipment.
              </p>
            </div>

            {/* Location Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {CLINIC_LOCATIONS.map((clinic) => (
                <Tilt3DCard key={clinic.id} maxTilt={5} scale={1.02} className="h-full">
                  <div className="h-full rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#A3E3DF] overflow-hidden transition-all duration-300">
                    {/* Map Preview */}
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E6F5F4] to-[#CCECE8] flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="w-12 h-12 text-[#0D7A75] mx-auto mb-2" />
                          <span className="text-sm font-bold text-[#0D7A75]">
                            {clinic.shortName}
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold text-[#101828]">{clinic.rating}</span>
                        <span className="text-[10px] text-slate-500">
                          ({clinic.reviewCount} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-extrabold text-[#101828]">{clinic.name}</h3>
                        <p className="text-xs text-slate-500 mt-1">{clinic.landmark}</p>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-[#0D7A75] flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{clinic.fullAddress}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#0D7A75] flex-shrink-0" />
                          <a
                            href={`tel:${clinic.phone}`}
                            className="text-[#0D7A75] font-semibold hover:underline"
                          >
                            {clinic.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#0D7A75] flex-shrink-0" />
                          <span className="text-slate-600">Mon-Sat: {clinic.hours.weekday}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                        {clinic.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-full bg-[#E6F5F4] text-[#0D7A75] text-[10px] font-semibold"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Link
                          href={`/locations/${clinic.slug}`}
                          className="flex-1 py-2.5 rounded-full bg-[#0D7A75] text-white text-sm font-semibold text-center hover:bg-[#095C58] transition-all flex items-center justify-center gap-1.5"
                        >
                          View Details <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <a
                          href={clinic.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-full border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-all"
                        >
                          Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </Tilt3DCard>
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action Banner */}
        <CtaBanner onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialDoctorId={selectedDoctorId}
        initialServiceId={selectedServiceId}
      />

      <ServiceModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onBookNow={(serviceId) => handleOpenBooking(undefined, serviceId)}
      />

      {/* Floating Widget */}
      <FloatingWidget onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}

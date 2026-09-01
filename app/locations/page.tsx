"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  ArrowRight,
  Navigation,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWidget from "@/components/FloatingWidget";
import Tilt3DCard from "@/components/Tilt3DCard";
import { CLINIC_LOCATIONS } from "@/data/dentalData";

export default function LocationsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

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

        {/* Locations */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {CLINIC_LOCATIONS.map((clinic) => (
                <Tilt3DCard key={clinic.id} maxTilt={5} scale={1.02} className="h-full">
                  <div className="h-full rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#A3E3DF] overflow-hidden transition-all duration-300">
                    {/* Map Embed */}
                    <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                      <iframe
                        src={clinic.embedMapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${clinic.name}`}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 space-y-5">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-2xl font-extrabold text-[#101828]">{clinic.name}</h2>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex items-center gap-1 text-amber-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                              ))}
                            </div>
                            <span className="text-sm font-bold text-[#101828]">
                              {clinic.rating}
                            </span>
                            <span className="text-xs text-slate-500">
                              ({clinic.reviewCount} Google reviews)
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FBFDFC] border border-slate-100">
                        <MapPin className="w-5 h-5 text-[#0D7A75] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-semibold text-[#101828] block">
                            Address
                          </span>
                          <span className="text-xs text-slate-600">{clinic.fullAddress}</span>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FBFDFC] border border-slate-100">
                        <Phone className="w-5 h-5 text-[#0D7A75] flex-shrink-0" />
                        <div>
                          <span className="text-sm font-semibold text-[#101828] block">
                            Phone
                          </span>
                          <a
                            href={`tel:${clinic.phone}`}
                            className="text-sm text-[#0D7A75] font-bold hover:underline"
                          >
                            {clinic.phone}
                          </a>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FBFDFC] border border-slate-100">
                        <Clock className="w-5 h-5 text-[#0D7A75] flex-shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <span className="text-sm font-semibold text-[#101828] block">
                            Opening Hours
                          </span>
                          <div className="text-xs space-y-0.5">
                            <div className="flex justify-between gap-8">
                              <span className="text-slate-600">Monday - Friday:</span>
                              <span className="font-medium text-slate-800">
                                {clinic.hours.weekday}
                              </span>
                            </div>
                            <div className="flex justify-between gap-8">
                              <span className="text-slate-600">Saturday:</span>
                              <span className="font-medium text-slate-800">
                                {clinic.hours.saturday}
                              </span>
                            </div>
                            <div className="flex justify-between gap-8">
                              <span className="text-slate-600">Sunday:</span>
                              <span className="font-medium text-red-500">{clinic.hours.sunday}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Landmark */}
                      <div className="flex items-start gap-3 p-3 rounded-xl bg-[#E6F5F4]/60 border border-[#CCECE8]">
                        <Navigation className="w-5 h-5 text-[#0D7A75] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-semibold text-[#101828] block">
                            Landmark
                          </span>
                          <span className="text-xs text-slate-600">{clinic.landmark}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          Services Available
                        </span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {clinic.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E6F5F4] text-[#0D7A75] text-[11px] font-semibold"
                            >
                              <CheckCircle2 className="w-3 h-3" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        <a
                          href={clinic.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 rounded-full bg-[#0D7A75] text-white text-sm font-semibold text-center hover:bg-[#095C58] transition-all flex items-center justify-center gap-2"
                        >
                          <Navigation className="w-4 h-4" />
                          Get Directions
                        </a>
                        <a
                          href={`tel:${clinic.phone}`}
                          className="px-5 py-3 rounded-full border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                        >
                          <Phone className="w-4 h-4 text-[#0D7A75]" />
                          Call
                        </a>
                      </div>
                    </div>
                  </div>
                </Tilt3DCard>
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

"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  ArrowRight,
  Navigation,
  CheckCircle2,
  Mail,
  Calendar,
  Shield,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWidget from "@/components/FloatingWidget";
import { CLINIC_LOCATIONS, SERVICES } from "@/data/dentalData";

export default function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const clinic = CLINIC_LOCATIONS.find((c) => c.slug === slug);

  if (!clinic) {
    return (
      <div className="flex flex-col min-h-screen bg-[#FBFDFC] text-[#101828]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-extrabold text-[#101828]">Location Not Found</h1>
            <p className="text-slate-500">The location you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D7A75] text-white font-semibold hover:bg-[#095C58] transition-all"
            >
              View All Locations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFDFC] text-[#101828]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-1">
        <PageHero
          title={clinic.name}
          subtitle={clinic.landmark}
          breadcrumbs={[
            { label: "Locations", href: "/locations" },
            { label: clinic.shortName },
          ]}
          badge={`${clinic.rating} ★ (${clinic.reviewCount} Google Reviews)`}
        />

        {/* Location Details */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-8">
                {/* Full Map */}
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg h-[400px]">
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

                {/* About This Location */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-extrabold text-[#101828]">About This Clinic</h2>
                  <p className="text-slate-600 leading-relaxed">
                    {clinic.name} is one of Greater Noida&apos;s premier dental clinics, offering
                    comprehensive dental care with state-of-the-art equipment. Located at{" "}
                    {clinic.landmark}, our clinic provides easy access for patients across Greater
                    Noida and surrounding areas.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our team of specialist doctors, led byDr. Vinay Saini (Implantologist) and Dr. Shivani Saini (Orthodontist), ensures every patient receives personalized,
                    pain-free treatment with the highest standards of care.
                  </p>
                </div>

                {/* Services Available */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-extrabold text-[#101828]">
                    Services Available Here
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {clinic.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-4 rounded-xl bg-[#FBFDFC] border border-slate-100 hover:border-[#A3E3DF] transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#E6F5F4] text-[#0D7A75] flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold text-[#101828]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* How to Reach */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-extrabold text-[#101828]">How to Reach Us</h2>
                  <div className="p-6 rounded-2xl bg-[#E6F5F4]/60 border border-[#CCECE8] space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#0D7A75] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-bold text-[#101828]">Full Address:</span>
                        <p className="text-sm text-slate-600">{clinic.fullAddress}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Navigation className="w-5 h-5 text-[#0D7A75] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-bold text-[#101828]">Landmark:</span>
                        <p className="text-sm text-slate-600">{clinic.landmark}</p>
                      </div>
                    </div>
                    <div className="pt-3">
                      <a
                        href={clinic.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0D7A75] text-white text-sm font-semibold hover:bg-[#095C58] transition-all"
                      >
                        <Navigation className="w-4 h-4" />
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                {/* Contact Card */}
                <div className="sticky top-24 rounded-2xl bg-white border border-slate-200 shadow-lg p-6 space-y-5">
                  <h3 className="text-lg font-bold text-[#101828]">Clinic Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#E6F5F4] text-[#0D7A75] flex items-center justify-center flex-shrink-0">
                        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-[#101828]">{clinic.rating}</div>
                        <div className="text-xs text-slate-500">
                          {clinic.reviewCount} Google Reviews
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#0D7A75] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-slate-500 block">Phone</span>
                        <a
                          href={`tel:${clinic.phone}`}
                          className="text-sm font-bold text-[#0D7A75] hover:underline"
                        >
                          {clinic.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#0D7A75] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-slate-500 block">Email</span>
                        <a
                          href={`mailto:${clinic.email}`}
                          className="text-sm font-medium text-[#0D7A75] hover:underline"
                        >
                          {clinic.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#0D7A75] flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <span className="text-xs text-slate-500 block">Hours</span>
                        <div className="text-xs space-y-0.5">
                          <div className="flex justify-between gap-6">
                            <span className="text-slate-600">Mon-Fri:</span>
                            <span className="font-medium">{clinic.hours.weekday}</span>
                          </div>
                          <div className="flex justify-between gap-6">
                            <span className="text-slate-600">Saturday:</span>
                            <span className="font-medium">{clinic.hours.saturday}</span>
                          </div>
                          <div className="flex justify-between gap-6">
                            <span className="text-slate-600">Sunday:</span>
                            <span className="font-medium text-red-500">{clinic.hours.sunday}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <button
                      onClick={() => setIsBookingOpen(true)}
                      className="w-full py-3 rounded-full bg-[#0D7A75] text-white font-semibold hover:bg-[#095C58] transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      Book Appointment
                    </button>
                    <a
                      href={`tel:${clinic.phone}`}
                      className="w-full py-3 rounded-full border border-slate-200 text-slate-700 font-semibold text-center flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
                    >
                      <Phone className="w-4 h-4 text-[#0D7A75]" />
                      Call Now
                    </a>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/60 text-xs text-emerald-800 text-center flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-600" />
                    100% Sterilized Environment
                  </div>
                </div>
              </div>
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

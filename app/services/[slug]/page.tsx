"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  Sparkles,
  Calendar,
  Phone,
  ShieldCheck,
  Stethoscope,
  Smile,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWidget from "@/components/FloatingWidget";
import Tilt3DCard from "@/components/Tilt3DCard";
import { SERVICES, DOCTORS } from "@/data/dentalData";

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>("dr-vinay");
  const [selectedServiceId, setSelectedServiceId] = useState<string>(slug);

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="flex flex-col min-h-screen bg-[#FBFDFC] text-[#101828]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-extrabold text-[#101828]">Service Not Found</h1>
            <p className="text-slate-500">The service you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00a896] text-white font-semibold hover:bg-[#008f7f] transition-all"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="w-8 h-8 text-[#00a896]" />;
      case "Sparkles":
        return <Sparkles className="w-8 h-8 text-[#00a896]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-[#00a896]" />;
      case "Smile":
      default:
        return <Smile className="w-8 h-8 text-[#00a896]" />;
    }
  };

  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFDFC] text-[#101828]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-1">
        <PageHero
          title={service.title}
          subtitle={service.description}
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
          badge={`${service.category} • ${service.badgeText}`}
        />

        {/* Service Details */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-8">
                {/* Service Image */}
                <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-[#e5f6f4] to-[#ccf0eb]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {getBadgeIcon(service.iconName)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md">
                    <span className="text-sm font-bold text-[#00a896]">{service.badgeText}</span>
                  </div>
                </div>

                {/* Overview */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-extrabold text-[#101828] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#00a896]" />
                    Clinical Overview
                  </h2>
                  <p className="text-slate-600 leading-relaxed">{service.fullDetails}</p>
                </div>

                {/* Benefits */}
                <div className="p-6 rounded-2xl bg-[#e5f6f4]/60 border border-[#ccf0eb] space-y-4">
                  <h3 className="text-lg font-bold text-[#101828]">Key Treatment Benefits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-[#00a896] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-extrabold text-[#101828]">Treatment Process</h2>
                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Initial Consultation",
                        desc: "Comprehensive examination with 3D scanning and digital X-rays to assess your needs.",
                      },
                      {
                        step: "2",
                        title: "Treatment Planning",
                        desc: "Detailed treatment plan with transparent pricing and timeline discussion.",
                      },
                      {
                        step: "3",
                        title: "Treatment Execution",
                        desc: "Gentle, pain-free treatment using advanced technology and sterilized protocols.",
                      },
                      {
                        step: "4",
                        title: "Follow-up Care",
                        desc: "Post-treatment checkups and maintenance to ensure long-lasting results.",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-[#A3E3DF] transition-all"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#00a896] text-white flex items-center justify-center font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#101828]">{item.title}</h4>
                          <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                {/* Price Card */}
                <div className="sticky top-24 rounded-2xl bg-white border border-slate-200 shadow-lg p-6 space-y-6">
                  <div className="text-center space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00a896]">
                      Starting From
                    </span>
                    <div className="text-4xl font-black text-[#101828]">{service.priceEstimate}</div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="w-4 h-4 text-[#00a896]" />
                      <span>Duration: {service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Stethoscope className="w-4 h-4 text-[#00a896]" />
                      <span>Category: {service.category}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedServiceId(service.slug);
                      setIsBookingOpen(true);
                    }}
                    className="w-full py-3 rounded-full bg-[#00a896] text-white font-semibold hover:bg-[#008f7f] transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Book This Treatment
                  </button>

                  <a
                    href="tel:09800000881"
                    className="w-full py-3 rounded-full border border-slate-200 text-slate-700 font-semibold text-center flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#00a896]" />
                    Call: 098000 00881
                  </a>

                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/60 text-xs text-emerald-800 text-center">
                    ✓ Zero advance payment required
                  </div>
                </div>

                {/* Related Services */}
                <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4">
                  <h3 className="font-bold text-[#101828]">Other Services</h3>
                  <div className="space-y-3">
                    {relatedServices.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/services/${rel.slug}`}
                        className="flex items-center justify-between p-3 rounded-xl bg-[#FBFDFC] border border-slate-100 hover:border-[#A3E3DF] hover:bg-[#e5f6f4]/30 transition-all group"
                      >
                        <div>
                          <div className="text-sm font-bold text-[#101828] group-hover:text-[#00a896] transition-colors">
                            {rel.title}
                          </div>
                          <div className="text-xs text-slate-500">{rel.priceEstimate}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00a896] group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Doctors */}
                <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4">
                  <h3 className="font-bold text-[#101828]">Available Doctors</h3>
                  <div className="space-y-3">
                    {DOCTORS.map((doc) => (
                      <div key={doc.id} className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#e5f6f4] flex items-center justify-center text-[#00a896] font-bold text-sm">
                          {doc.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#101828]">{doc.name}</div>
                          <div className="text-xs text-slate-500">{doc.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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

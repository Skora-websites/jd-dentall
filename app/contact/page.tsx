"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWidget from "@/components/FloatingWidget";
import { CLINIC_LOCATIONS, CLINIC_INFO } from "@/data/dentalData";

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFDFC] text-[#101828]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-1">
        <PageHero
          title="Contact Us"
          subtitle="Have questions? We'd love to hear from you. Reach out to us via phone, email, or visit one of our two convenient locations in Greater Noida."
          breadcrumbs={[{ label: "Contact" }]}
          badge="Get in Touch"
        />

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Contact Form */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-8 sm:p-10">
                  <h2 className="text-2xl font-extrabold text-[#101828] mb-2">Send Us a Message</h2>
                  <p className="text-sm text-slate-500 mb-8">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>

                  {isSubmitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 bg-[#e5f6f4] text-[#00a896] rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-[#101828]">Message Sent!</h3>
                      <p className="text-sm text-slate-500">
                        Thank you for reaching out. We&apos;ll get back to you soon.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
                        }}
                        className="px-6 py-2.5 rounded-full bg-[#00a896] text-white font-semibold text-sm hover:bg-[#008f7f] transition-all"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#101828] mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00a896] text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#101828] mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 00000"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00a896] text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#101828] mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00a896] text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#101828] mb-1.5">
                            Subject
                          </label>
                          <select
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00a896] text-sm bg-white"
                          >
                            <option value="">Select a topic</option>
                            <option value="appointment">Book Appointment</option>
                            <option value="pricing">Pricing Inquiry</option>
                            <option value="treatment">Treatment Question</option>
                            <option value="emergency">Emergency</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#101828] mb-1.5">
                          Your Message *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your dental concern or question..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00a896] text-sm resize-none"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                        <p className="text-xs text-slate-500">
                          * Required fields. We respect your privacy.
                        </p>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-8 py-3 rounded-full bg-[#00a896] text-white font-semibold text-sm hover:bg-[#008f7f] transition-all shadow-md flex items-center gap-2"
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-5 space-y-6">
                {/* Quick Contact */}
                <div className="rounded-2xl bg-[#0f3057] text-white p-6 space-y-5">
                  <h3 className="text-lg font-bold">Quick Contact</h3>
                  <div className="space-y-4">
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#00a896] flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-300 block">Call Us</span>
                        <span className="font-bold">{CLINIC_INFO.phone}</span>
                      </div>
                    </a>
                    <a
                      href={`mailto:${CLINIC_INFO.email}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#00a896] flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-300 block">Email Us</span>
                        <span className="font-bold">{CLINIC_INFO.email}</span>
                      </div>
                    </a>
                    <button
                      onClick={() => setIsBookingOpen(true)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#00a896] flex items-center justify-center">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs text-slate-300 block">Book Online</span>
                        <span className="font-bold">Schedule Appointment</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Clinic Locations */}
                {CLINIC_LOCATIONS.map((clinic) => (
                  <div
                    key={clinic.id}
                    className="rounded-2xl bg-white border border-slate-200 p-5 space-y-3"
                  >
                    <h3 className="font-bold text-[#101828]">{clinic.shortName}</h3>
                    <div className="flex items-start gap-2 text-sm text-slate-600">
                      <MapPin className="w-4 h-4 text-[#00a896] flex-shrink-0 mt-0.5" />
                      {clinic.address}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-[#00a896] flex-shrink-0" />
                      <a
                        href={`tel:${clinic.phone}`}
                        className="text-[#00a896] font-semibold hover:underline"
                      >
                        {clinic.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="w-4 h-4 text-[#00a896] flex-shrink-0" />
                      Mon-Sat: {clinic.hours.weekday}
                    </div>
                    <Link
                      href={`/locations/${clinic.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#00a896] hover:underline"
                    >
                      View Details <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}

                {/* Emergency Notice */}
                <div className="rounded-2xl bg-red-50 border border-red-200 p-5">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-red-800 text-sm">Dental Emergency?</h4>
                      <p className="text-xs text-red-600 mt-1">
                        Call our emergency line immediately for after-hours dental emergencies.
                      </p>
                      <a
                        href={`tel:${CLINIC_INFO.emergencyHotline}`}
                        className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-red-700 hover:underline"
                      >
                        Call Emergency Line <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
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


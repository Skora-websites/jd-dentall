"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, MapPin, CheckCircle2, User, Phone, Mail, Sparkles, AlertCircle } from "lucide-react";
import { CLINIC_INFO, DOCTORS, SERVICES, CLINIC_LOCATIONS } from "@/data/dentalData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctorId?: string;
  initialServiceId?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialDoctorId,
  initialServiceId,
}: BookingModalProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedDoctor, setSelectedDoctor] = useState<string>(initialDoctorId || "dr-vinay");
  const [selectedService, setSelectedService] = useState<string>(initialServiceId || "general-checkup");
  const [selectedLocation, setSelectedLocation] = useState<string>(CLINIC_LOCATIONS[0].slug);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split("T")[0]
  );
  const [selectedSlot, setSelectedSlot] = useState<string>("10:30 AM");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState<string>("");

  if (!isOpen) return null;

  const timeSlots = [
    "09:30 AM", "10:30 AM", "11:30 AM",
    "02:00 PM", "03:30 PM", "04:45 PM",
    "06:00 PM", "07:15 PM"
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (!formData.name || !formData.phone) {
        alert("Please enter your name and contact phone number.");
        return;
      }
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        const refId = `JD-DENTALS-${Math.floor(1000 + Math.random() * 9000)}`;
        setBookingRef(refId);
        setStep(4);
      }, 700);
    }
  };

  const handleReset = () => {
    setStep(1);
    setBookingRef("");
    onClose();
  };

  const currentDoctorObj = DOCTORS.find((d) => d.id === selectedDoctor) || DOCTORS[0];
  const currentServiceObj = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];
  const currentLocationObj = CLINIC_LOCATIONS.find((c) => c.slug === selectedLocation) || CLINIC_LOCATIONS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md transition-all duration-300">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#0f3057] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a896]/40 border border-[#A3E3DF]/30 text-[#A3E3DF] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Greater Noida Dental Appointment
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {step === 4 ? "Appointment Confirmed!" : "Book Your Dental Visit"}
          </h3>
          <p className="text-slate-300 text-sm mt-1 max-w-md">
            {step === 4
              ? "Your consultation is reserved at our Greater Noida clinic."
              : "Consult Dr. Vinay or Dr. Shivani for painless, personalized dental care."}
          </p>

          {/* Step Progress Indicators */}
          {step < 4 && (
            <div className="flex items-center gap-2 mt-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex-1 flex items-center gap-2">
                  <div
                    className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                      step >= num ? "bg-[#00c4b0]" : "bg-white/20"
                    }`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#101828] mb-3">
                  1. Select Your Specialist Doctor:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DOCTORS.map((doc) => (
                    <button
                      type="button"
                      key={doc.id}
                      onClick={() => setSelectedDoctor(doc.id)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-200 flex items-center gap-3.5 ${
                        selectedDoctor === doc.id
                          ? "border-[#00a896] bg-[#e5f6f4]/60 ring-2 ring-[#00a896]"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="w-14 h-14 rounded-full bg-[#e5f6f4] flex items-center justify-center text-[#00a896] font-bold text-sm flex-shrink-0">
                        {doc.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-[#101828] text-sm truncate flex items-center gap-1.5">
                          {doc.name}
                          {doc.isFeatured && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00a896] text-white font-bold">
                              Lead
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-[#00a896] font-semibold truncate">{doc.role}</div>
                        <div className="text-[11px] text-slate-500 truncate">{doc.experience}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#101828] mb-3">
                  2. Select Treatment / Service:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((srv) => (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => setSelectedService(srv.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all duration-200 ${
                        selectedService === srv.id
                          ? "border-[#00a896] bg-[#e5f6f4]/60 font-semibold text-[#00a896] ring-2 ring-[#00a896]"
                          : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-semibold text-[#101828]">{srv.title}</div>
                        <div className="text-xs font-bold text-[#00a896]">{srv.priceEstimate}</div>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">{srv.category} • {srv.duration}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-7 py-3 rounded-full bg-[#00a896] text-white font-semibold hover:bg-[#008f7f] transition-all shadow-md"
                >
                  Continue to Location & Slot →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#101828] mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#00a896]" />
                  Select Clinic Location:
                </label>
                <div className="grid grid-cols-1 gap-2.5">
                  {CLINIC_LOCATIONS.map((clinic) => (
                    <button
                      type="button"
                      key={clinic.slug}
                      onClick={() => setSelectedLocation(clinic.slug)}
                      className={`p-3.5 rounded-xl text-left text-sm border transition-all ${
                        selectedLocation === clinic.slug
                          ? "border-[#00a896] bg-[#e5f6f4]/60 text-[#101828] font-semibold ring-2 ring-[#00a896]"
                          : "border-slate-200 hover:border-slate-300 text-slate-600 bg-white"
                      }`}
                    >
                      <div className="font-semibold">{clinic.name}</div>
                      <div className="text-xs text-slate-500 mt-1">{clinic.address}</div>
                      <div className="text-xs text-[#00a896] mt-1">📞 {clinic.phone}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#101828] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#00a896]" />
                    Preferred Date:
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00a896] text-sm text-[#101828]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#101828] mb-2 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#00a896]" />
                    Available Time Slots:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2 px-2 text-xs rounded-lg border font-medium transition-all ${
                          selectedSlot === slot
                            ? "border-[#00a896] bg-[#00a896] text-white"
                            : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-full text-slate-600 font-medium hover:bg-slate-100 text-sm"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-7 py-3 rounded-full bg-[#00a896] text-white font-semibold hover:bg-[#008f7f] transition-all shadow-md text-sm"
                >
                  Patient Details →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-[#e5f6f4]/50 border border-[#ccf0eb] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs gap-2">
                <div>
                  <span className="text-slate-500">Doctor: </span>
                  <span className="font-bold text-[#101828]">{currentDoctorObj?.name}</span>
                  <span className="text-slate-400 mx-1.5">•</span>
                  <span className="text-slate-500">Service: </span>
                  <span className="font-bold text-[#101828]">{currentServiceObj?.title}</span>
                </div>
                <div className="font-bold text-[#00a896]">{selectedDate} @ {selectedSlot}</div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#101828] mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#00a896]" /> Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma / Ananya Verma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00a896] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#101828] mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#00a896]" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00a896] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#101828] mb-1 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#00a896]" /> Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="patient@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00a896] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#101828] mb-1">
                  Primary Dental Concern / Symptoms:
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Tooth sensitivity in lower molar, interested in invisible aligners, routine annual cleaning..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00a896] text-sm resize-none"
                />
              </div>

              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-start gap-2 text-xs text-emerald-900">
                <AlertCircle className="w-4 h-4 text-[#00a896] flex-shrink-0 mt-0.5" />
                <span>
                  Zero advance booking fee. WhatsApp appointment confirmation will be sent to your phone.
                </span>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-full text-slate-600 font-medium hover:bg-slate-100 text-sm"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-full bg-[#00a896] text-white font-semibold hover:bg-[#008f7f] transition-all shadow-md text-sm flex items-center gap-2"
                >
                  {isSubmitting ? "Confirming..." : "Confirm Appointment ✓"}
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 bg-[#e5f6f4] text-[#00a896] rounded-full flex items-center justify-center mx-auto ring-8 ring-[#e5f6f4]/50">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-[#101828]">You&apos;re All Set!</h4>
                <p className="text-slate-600 text-sm mt-1">
                  We look forward to welcoming you at our {currentLocationObj?.shortName} clinic.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3 max-w-md mx-auto text-xs sm:text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-[#00a896]">{bookingRef}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Attending Doctor:</span>
                  <span className="font-bold text-[#101828]">{currentDoctorObj?.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-bold text-[#101828]">{currentServiceObj?.title}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Estimated Price:</span>
                  <span className="font-bold text-[#00a896]">{currentServiceObj?.priceEstimate}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Date & Slot:</span>
                  <span className="font-bold text-[#101828]">{selectedDate} @ {selectedSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Clinic Location:</span>
                  <span className="font-semibold text-slate-800 text-right">{currentLocationObj?.name}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-[#00a896] text-white font-semibold text-sm hover:bg-[#008f7f] transition-all"
                >
                  Done & Close
                </button>
                <a
                  href={`tel:${currentLocationObj?.phone}`}
                  className="px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#00a896]" /> Call: {currentLocationObj?.phone}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


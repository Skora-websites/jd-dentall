"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, Sparkles, HeartPulse, Crown, Users, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWidget from "@/components/FloatingWidget";
import Tilt3DCard from "@/components/Tilt3DCard";
import { AnimateOnScroll, StaggerContainer } from "@/components/ScrollAnimations";
import { PRICING_PLANS } from "@/data/dentalData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PricingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const plansRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!plansRef.current) return;

    const cards = plansRef.current.querySelectorAll(".pricing-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: plansRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const getPlanIcon = (iconName: string) => {
    switch (iconName) {
      case "Crown": return <Crown className="w-5 h-5 text-[#00a896]" />;
      case "Users": return <Users className="w-5 h-5 text-[#00a896]" />;
      case "HeartPulse": default: return <HeartPulse className="w-5 h-5 text-[#00a896]" />;
    }
  };

  const getPrice = (planId: string) => {
    if (billingCycle === "annual") {
      switch (planId) {
        case "basic-care": return { price: "₹9,999", period: "/year", savings: "Save ₹1,989" };
        case "premium-care": return { price: "₹24,999", period: "/year", savings: "Save ₹4,989" };
        case "family-care": return { price: "₹49,999", period: "/year", savings: "Save ₹9,989" };
        default: return { price: "₹9,999", period: "/year", savings: "" };
      }
    }
    switch (planId) {
      case "basic-care": return { price: "₹999", period: "/month", savings: "Billed monthly" };
      case "premium-care": return { price: "₹2,499", period: "/month", savings: "Billed monthly" };
      case "family-care": return { price: "₹4,999", period: "/month", savings: "Billed monthly" };
      default: return { price: "₹999", period: "/month", savings: "" };
    }
  };

  const faqs = [
    { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle." },
    { q: "Are there any hidden fees?", a: "No, all our pricing is transparent. The plan price includes all listed benefits with zero hidden charges." },
    { q: "Can I use my plan at both clinic locations?", a: "Absolutely! Your membership is valid at both our Sky Plaza and Gaur City locations." },
    { q: "Is there a family discount?", a: "Our Family Care plan covers up to 4 family members. Additional members get 25% discount." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFDFC] text-[#101828]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-1">
        <PageHero
          title="Pricing Plans"
          subtitle="Transparent pricing with zero hidden charges. Choose an individual or family dental wellness membership in Greater Noida."
          breadcrumbs={[{ label: "Pricing" }]}
          badge="Affordable Dental Care for Everyone"
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fadeUp">
              <div className="text-center mb-12">
                <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold">
                  <button onClick={() => setBillingCycle("monthly")} className={`px-5 py-2 rounded-full transition-all ${billingCycle === "monthly" ? "bg-[#00a896] text-white shadow-xs" : "text-slate-600 hover:text-[#101828]"}`}>
                    Monthly Plan (₹)
                  </button>
                  <button onClick={() => setBillingCycle("annual")} className={`px-5 py-2 rounded-full transition-all flex items-center gap-1.5 ${billingCycle === "annual" ? "bg-[#00a896] text-white shadow-xs" : "text-slate-600 hover:text-[#101828]"}`}>
                    <span>Annual Saver (₹)</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-900 font-bold">2 Months Free</span>
                  </button>
                </div>
              </div>
            </AnimateOnScroll>

            <div ref={plansRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              {PRICING_PLANS.map((plan) => {
                const isPopular = plan.isPopular;
                const priceInfo = getPrice(plan.id);

                return (
                  <div key={plan.id} className="pricing-card h-full">
                    <Tilt3DCard maxTilt={5} scale={isPopular ? 1.03 : 1.01} className="h-full">
                      <div className={`h-full rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative bg-white ${
                        isPopular ? "border-2 border-[#00a896] shadow-2xl shadow-[#00a896]/15 ring-4 ring-[#00a896]/10" : "border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#A3E3DF]"
                      }`}>
                        {isPopular && (
                          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00a896] text-white text-xs font-bold uppercase tracking-wider shadow-md">Most Popular</div>
                        )}

                        <div className="space-y-6">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-[#e5f6f4] border border-[#A3E3DF]/60 flex items-center justify-center flex-shrink-0">{getPlanIcon(plan.iconName)}</div>
                            <div>
                              <h3 className="text-xl font-extrabold text-[#101828]">{plan.name}</h3>
                              <p className="text-xs text-slate-500 line-clamp-1">{plan.recommendedFor}</p>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-slate-100">
                            <div className="flex items-baseline gap-1">
                              <span className="text-4xl sm:text-5xl font-black text-[#101828] tracking-tight">{priceInfo.price}</span>
                              <span className="text-xs text-slate-500 font-medium">{priceInfo.period}</span>
                            </div>
                            <p className="text-[11px] text-[#00a896] font-semibold mt-1">{priceInfo.savings} • Both Greater Noida clinics</p>
                          </div>

                          <div className="space-y-3 pt-2">
                            {plan.features.map((feature, fIdx) => (
                              <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                <div className="w-4 h-4 rounded-full bg-[#e5f6f4] text-[#00a896] flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                </div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-8">
                          <button onClick={() => setIsBookingOpen(true)} className={`w-full py-3 px-6 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xs ${
                            isPopular ? "bg-[#00a896] hover:bg-[#008f7f] text-white shadow-md hover:shadow-lg" : "bg-white hover:bg-[#00a896] text-[#00a896] hover:text-white border-2 border-[#00a896]"
                          }`}>
                            <span>Choose {plan.name}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </Tilt3DCard>
                  </div>
                );
              })}
            </div>

            <AnimateOnScroll animation="fadeUp" delay={0.3}>
              <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 max-w-6xl mx-auto">
                <div className="flex items-center gap-2 font-medium text-[#101828]">
                  <ShieldCheck className="w-5 h-5 text-[#00a896]" />
                  <span>Accepted Payment Modes:</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 font-semibold text-slate-700">
                  <span className="px-3 py-1 bg-slate-100 rounded-lg">UPI / GPay / PhonePe</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg">All Debit & Credit Cards</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg">0% EMI Available</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg">Corporate Health Insurance</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#FBFDFC]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fadeUp">
              <div className="text-center mb-12 space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">Frequently Asked Questions</h2>
                <p className="text-sm text-[#475569]">Common questions about our pricing and membership plans</p>
              </div>
            </AnimateOnScroll>

            <StaggerContainer className="space-y-4" staggerDelay={0.15}>
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-white border border-slate-200/90 p-6 hover:border-[#A3E3DF] hover:shadow-md transition-all">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#00a896] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-[#101828]">{faq.q}</h3>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
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


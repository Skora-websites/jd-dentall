"use client";

import React, { useState } from "react";
import { Check, Sparkles, HeartPulse, Crown, Users, ArrowRight, ShieldCheck, IndianRupee } from "lucide-react";
import Tilt3DCard from "./Tilt3DCard";
import { PRICING_PLANS } from "@/data/dentalData";

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const getPlanIcon = (iconName: string) => {
    switch (iconName) {
      case "Crown":
        return <Crown className="w-5 h-5 text-[#0D7A75]" />;
      case "Users":
        return <Users className="w-5 h-5 text-[#0D7A75]" />;
      case "HeartPulse":
      default:
        return <HeartPulse className="w-5 h-5 text-[#0D7A75]" />;
    }
  };

  const getPrice = (planId: string) => {
    if (billingCycle === "annual") {
      switch (planId) {
        case "basic-care":
          return { price: "₹9,999", period: "/year", savings: "Save ₹1,989" };
        case "premium-care":
          return { price: "₹24,999", period: "/year", savings: "Save ₹4,989" };
        case "family-care":
          return { price: "₹49,999", period: "/year", savings: "Save ₹9,989" };
        default:
          return { price: "₹9,999", period: "/year", savings: "" };
      }
    }
    switch (planId) {
      case "basic-care":
        return { price: "₹999", period: "/month", savings: "Billed monthly" };
      case "premium-care":
        return { price: "₹2,499", period: "/month", savings: "Billed monthly" };
      case "family-care":
        return { price: "₹4,999", period: "/month", savings: "Billed monthly" };
      default:
        return { price: "₹999", period: "/month", savings: "" };
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#FBFDFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0D7A75]">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Noida Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">
            Affordable Dental Care <br />
            for Everyone
          </h2>
          <p className="text-sm text-[#475569]">
            Transparent pricing with zero hidden charges. Choose an individual or family dental wellness membership in Sector 62 & 18, Noida.
          </p>

          {/* Billing Cycle Switcher (Monthly vs Annual in ₹ INR) */}
          <div className="pt-3 flex justify-center items-center gap-3">
            <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  billingCycle === "monthly"
                    ? "bg-[#0D7A75] text-white shadow-xs"
                    : "text-slate-600 hover:text-[#101828]"
                }`}
              >
                Monthly Plan (₹)
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  billingCycle === "annual"
                    ? "bg-[#0D7A75] text-white shadow-xs"
                    : "text-slate-600 hover:text-[#101828]"
                }`}
              >
                <span>Annual Saver (₹)</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-900 font-bold">
                  2 Months Free
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards Grid matching design.md */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            const priceInfo = getPrice(plan.id);

            return (
              <Tilt3DCard
                key={plan.id}
                maxTilt={5}
                scale={isPopular ? 1.03 : 1.01}
                className="h-full"
              >
                <div
                  className={`h-full rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative bg-white ${
                    isPopular
                      ? "border-2 border-[#0D7A75] shadow-2xl shadow-[#0D7A75]/15 ring-4 ring-[#0D7A75]/10"
                      : "border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#A3E3DF]"
                  }`}
                >
                  {/* "Popular" Badge centered at top matching design.md */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0D7A75] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div className="space-y-6">
                    
                    {/* Icon & Plan Title */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#E6F5F4] border border-[#A3E3DF]/60 flex items-center justify-center flex-shrink-0">
                        {getPlanIcon(plan.iconName)}
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-[#101828]">
                          {plan.name}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-1">{plan.recommendedFor}</p>
                      </div>
                    </div>

                    {/* Price Header in pure Indian Rupees (₹) */}
                    <div className="pt-2 border-t border-slate-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-black text-[#101828] tracking-tight">
                          {priceInfo.price}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {priceInfo.period}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#0D7A75] font-semibold mt-1">
                        {priceInfo.savings} • Direct consultation in Noida
                      </p>
                    </div>

                    {/* Feature Checklist matching design.md */}
                    <div className="space-y-3 pt-2">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <div className="w-4 h-4 rounded-full bg-[#E6F5F4] text-[#0D7A75] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* CTA Button matching design.md */}
                  <div className="pt-8">
                    <button
                      onClick={() => onSelectPlan(plan.name)}
                      className={`w-full py-3 px-6 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xs ${
                        isPopular
                          ? "bg-[#0D7A75] hover:bg-[#095C58] text-white shadow-md hover:shadow-lg"
                          : "bg-white hover:bg-[#0D7A75] text-[#0D7A75] hover:text-white border-2 border-[#0D7A75]"
                      }`}
                    >
                      <span>Choose {plan.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </Tilt3DCard>
            );
          })}
        </div>

        {/* Insurance & Payment Trust Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2 font-medium text-[#101828]">
            <ShieldCheck className="w-5 h-5 text-[#0D7A75]" />
            <span>Accepted Payment Modes in Noida Clinics:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 font-semibold text-slate-700">
            <span className="px-3 py-1 bg-slate-100 rounded-lg">UPI / GPay / PhonePe</span>
            <span className="px-3 py-1 bg-slate-100 rounded-lg">All Debit & Credit Cards</span>
            <span className="px-3 py-1 bg-slate-100 rounded-lg">0% EMI Available</span>
            <span className="px-3 py-1 bg-slate-100 rounded-lg">Corporate Health Insurance</span>
          </div>
        </div>

      </div>
    </section>
  );
}

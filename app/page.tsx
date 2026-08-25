"use client";

import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import DoctorsSection from "@/components/DoctorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

import BookingModal from "@/components/BookingModal";
import ServiceModal from "@/components/ServiceModal";
import BlogModal from "@/components/BlogModal";
import FloatingWidget from "@/components/FloatingWidget";

import { ServiceItem, BlogPost } from "@/types";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>("dr-adam");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("general-checkup");

  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [activeBlogModal, setActiveBlogModal] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Smooth subtle section reveal animations
      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0.88, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, []);

  const handleOpenBooking = (doctorId?: string, serviceId?: string) => {
    if (doctorId) setSelectedDoctorId(doctorId);
    if (serviceId) setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setActiveServiceModal(service);
  };

  const handleSelectPost = (post: BlogPost) => {
    setActiveBlogModal(post);
  };

  const handleSelectPlan = (planName: string) => {
    setIsBookingOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFDFC] text-[#101828]">
      {/* 1. Sticky Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Dental Services Section */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4. Why Choose Us (Dark Green Feature & Stats Banner) */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* 5. 4-Step Smile Process Timeline */}
        <ProcessSection onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Meet Our Expert Dentists (Dr. Adam & Dr. Eve) */}
        <DoctorsSection
          onBookWithDoctor={(docId) => handleOpenBooking(docId)}
        />

        {/* 7. Real Patient Testimonials */}
        <TestimonialsSection />

        {/* 8. Affordable Dental Care Pricing Plans */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 9. Dental Tips & News Blog */}
        <BlogSection onSelectPost={handleSelectPost} />

        {/* 10. Call To Action Banner */}
        <CtaBanner onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 11. Comprehensive Footer */}
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

      <BlogModal
        post={activeBlogModal}
        onClose={() => setActiveBlogModal(null)}
      />

      {/* Floating Emergency & Quick Consultation Widget */}
      <FloatingWidget onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}

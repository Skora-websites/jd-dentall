"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, Clock } from "lucide-react";
import { CLINIC_INFO, CLINIC_LOCATIONS, NAV_LINKS } from "@/data/dentalData";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Emergency & Announcement Bar */}
      <div className="bg-[#052824] text-white text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#A3E3DF] font-medium">
              <span className="text-sm">🦷</span>
              Greater Noida&apos;s Trusted Dental Care Since 2010
            </span>
            <span className="text-slate-400">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#A3E3DF]" />
              Mon - Sat: 9:00 AM – 9:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#16938D]" />
              Emergency: {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
            : "bg-[#FBFDFC]/90 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            {/* The actual logo image file */}
            <img 
              src="/logo.jpg" 
              alt="J.D. Dentals" 
              className="h-12 sm:h-14 w-auto group-hover:scale-[1.02] transition-transform duration-300"
              onError={(e) => {
                // Fallback text if the image isn't placed yet
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback displayed only if image is missing */}
            <div className="hidden flex flex-col justify-center ml-2">
              <span className="text-2xl font-extrabold text-[#07335E]">J.D. DENTALS</span>
              <span className="text-[10px] text-slate-500">Please add public/logo.jpg</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#475569] hover:text-[#0D7A75] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0D7A75] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-3.5 py-2 text-xs font-semibold text-[#0D7A75] bg-[#E6F5F4] hover:bg-[#CCECE8] rounded-full transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Us
            </a>
            {onOpenBooking && (
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-full bg-[#0D7A75] hover:bg-[#095C58] text-white text-sm font-semibold tracking-wide shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Book Appointment
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            {onOpenBooking && (
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 rounded-full bg-[#0D7A75] text-white text-xs font-semibold sm:hidden"
              >
                Book
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-[#E6F5F4] hover:text-[#0D7A75] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              {onOpenBooking && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-full bg-[#0D7A75] text-white font-semibold text-sm text-center shadow-md"
                >
                  Book Appointment Online
                </button>
              )}
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full py-2.5 rounded-full border border-slate-200 text-slate-700 font-semibold text-xs text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#0D7A75]" /> Call: {CLINIC_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

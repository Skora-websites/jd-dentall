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
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-[#E6F5F4] border border-[#A3E3DF]/50 flex items-center justify-center text-[#0D7A75] group-hover:scale-105 transition-transform">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5.5 2 9 .5 3 2 4.5 4 4.5s3.5-1.5 4-4.5c.5-3.5 2-6 2-9 0-3.5-2.5-6-6-6z" />
                <path d="M9 8c.5-1.5 2-2 3-2s2.5.5 3 2" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-[#101828]">
                J.D.<span className="text-[#0D7A75]"> Dentals</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#0D7A75] -mt-1">
                Dental Clinic
              </span>
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

"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUp, Star } from "lucide-react";
import { CLINIC_INFO, CLINIC_LOCATIONS, SERVICES } from "@/data/dentalData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#052824] text-slate-300 pt-16 pb-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & About */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              {/* The actual logo image file */}
              <img 
                src="/logo.jpg" 
                alt="J.D. Dentals" 
                className="h-12 sm:h-14 w-auto rounded-xl bg-white group-hover:scale-[1.02] transition-transform duration-300"
                onError={(e) => {
                  // Fallback text if the image isn't placed yet
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback displayed only if image is missing */}
              <div className="hidden flex flex-col justify-center ml-2">
                <span className="text-xl font-extrabold text-white">J.D. DENTALS</span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Greater Noida&apos;s premier dental clinic with two modern locations.
              Advanced care, gentle touch, and a passion for healthy smiles.
            </p>

            {/* Google Rating Badge */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#0A4A44] border border-[#16938D]/30">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-xs font-bold text-white">4.9+</span>
              <span className="text-[11px] text-slate-400">on Google (200+ reviews)</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/jddentals"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#0A4A44] hover:bg-[#0D7A75] text-[#A3E3DF] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/jddentals"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#0A4A44] hover:bg-[#0D7A75] text-[#A3E3DF] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/jddentals"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#0A4A44] hover:bg-[#0D7A75] text-[#A3E3DF] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Doctors", href: "/doctors" },
                { label: "Locations", href: "/locations" },
                { label: "Blog", href: "/blog" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-[#A3E3DF] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#16938D]">•</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">Our Services</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-300 hover:text-[#A3E3DF] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#16938D]">•</span> {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {CLINIC_LOCATIONS.map((clinic) => (
                <li key={clinic.id} className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#16938D] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">{clinic.shortName}</strong>
                    <span className="text-slate-400">{clinic.address}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <a
                        href={`tel:${clinic.phone}`}
                        className="text-[#A3E3DF] hover:text-white font-medium transition-colors"
                      >
                        {clinic.phone}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-2.5 pt-2">
                <Mail className="w-4 h-4 text-[#16938D] flex-shrink-0" />
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="hover:text-[#A3E3DF] transition-colors"
                >
                  {CLINIC_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2025 J.D. Dentals. All Rights Reserved. Greater Noida, India.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <span>|</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#0A4A44] hover:bg-[#0D7A75] text-white flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

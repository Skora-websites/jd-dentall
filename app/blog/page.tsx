"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWidget from "@/components/FloatingWidget";
import Tilt3DCard from "@/components/Tilt3DCard";
import { AnimateOnScroll } from "@/components/ScrollAnimations";
import { BLOG_POSTS } from "@/data/dentalData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlogPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const postsRef = useRef<HTMLDivElement>(null);

  const categories = ["all", ...new Set(BLOG_POSTS.map((post) => post.category))];
  const filteredPosts = activeCategory === "all" ? BLOG_POSTS : BLOG_POSTS.filter((post) => post.category === activeCategory);

  useEffect(() => {
    if (!postsRef.current) return;

    const cards = postsRef.current.querySelectorAll(".blog-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, rotateY: -5 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: postsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [activeCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFDFC] text-[#101828]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-1">
        <PageHero
          title="Dental Tips & News"
          subtitle="Stay informed with the latest dental care tips, treatment guides, and oral health news from our specialist doctors."
          breadcrumbs={[{ label: "Blog" }]}
          badge="Expert Dental Insights"
        />

        <section className="py-8 bg-white border-b border-slate-100 sticky top-[72px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    activeCategory === cat
                      ? "bg-[#0D7A75] text-white shadow-sm scale-105"
                      : "bg-white text-[#475569] hover:bg-[#E6F5F4] hover:text-[#0D7A75] border border-slate-200"
                  }`}
                >
                  {cat === "all" ? "All Articles" : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#FBFDFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={postsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id} className="blog-card" style={{ perspective: "1000px" }}>
                  <Tilt3DCard maxTilt={5} scale={1.02} className="h-full">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="h-full rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#A3E3DF] overflow-hidden flex flex-col justify-between cursor-pointer group transition-all duration-300">
                        <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-[#E6F5F4] to-[#CCECE8]">
                          <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <BookOpen className="w-12 h-12 text-[#0D7A75] opacity-30" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#0D7A75] text-[11px] font-bold shadow-xs">{post.category}</span>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-2.5">
                            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{post.date}</span>
                              <span>•</span>
                              <Clock className="w-3.5 h-3.5" />
                              <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-[#101828] group-hover:text-[#0D7A75] transition-colors leading-snug line-clamp-2">{post.title}</h3>
                            <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">{post.excerpt}</p>
                          </div>
                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs font-bold text-[#0D7A75] group-hover:underline inline-flex items-center gap-1">
                              Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {post.author.split(" ").slice(0, 2).join(" ")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Tilt3DCard>
                </div>
              ))}
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

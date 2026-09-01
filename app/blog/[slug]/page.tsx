"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  BookOpen,
  ArrowRight,
  Share2,
  ArrowLeft,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWidget from "@/components/FloatingWidget";
import Tilt3DCard from "@/components/Tilt3DCard";
import { BLOG_POSTS } from "@/data/dentalData";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-[#FBFDFC] text-[#101828]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-extrabold text-[#101828]">Article Not Found</h1>
            <p className="text-slate-500">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D7A75] text-white font-semibold hover:bg-[#095C58] transition-all"
            >
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFDFC] text-[#101828]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-1">
        <PageHero
          title={post.title}
          subtitle={post.excerpt}
          breadcrumbs={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
          badge={post.category}
        />

        {/* Article Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Article Header */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 pb-6 border-b border-slate-100 mb-8">
              <span className="flex items-center gap-1.5 font-medium text-[#101828]">
                <User className="w-4 h-4 text-[#0D7A75]" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" /> {post.readTime}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#E6F5F4] text-[#0D7A75] text-xs font-semibold">
                {post.category}
              </span>
            </div>

            {/* Article Body */}
            <div className="space-y-6 text-slate-700 leading-relaxed">
              {/* Featured Excerpt */}
              <div className="p-5 rounded-xl bg-[#E6F5F4]/40 border-l-4 border-[#0D7A75] text-slate-700 italic text-base">
                {post.excerpt}
              </div>

              {/* Content Paragraphs */}
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <BookOpen className="w-4 h-4 text-[#0D7A75]" />
                  <span>Published by J.D. Dentals Clinical Team, Greater Noida</span>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0D7A75] hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Articles
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-16 md:py-24 bg-[#FBFDFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-extrabold text-[#101828] mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                {relatedPosts.map((relPost) => (
                  <Tilt3DCard key={relPost.id} maxTilt={5} scale={1.02} className="h-full">
                    <Link href={`/blog/${relPost.slug}`}>
                      <div className="h-full rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#A3E3DF] overflow-hidden flex flex-col cursor-pointer group transition-all duration-300">
                        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#E6F5F4] to-[#CCECE8]">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <BookOpen className="w-10 h-10 text-[#0D7A75] opacity-30" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-[#0D7A75] text-[11px] font-bold">
                            {relPost.category}
                          </span>
                        </div>
                        <div className="p-5 space-y-3">
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <Calendar className="w-3 h-3" />
                            {relPost.date}
                            <span>•</span>
                            <Clock className="w-3 h-3" />
                            {relPost.readTime}
                          </div>
                          <h3 className="text-base font-bold text-[#101828] group-hover:text-[#0D7A75] transition-colors line-clamp-2">
                            {relPost.title}
                          </h3>
                          <span className="text-xs font-bold text-[#0D7A75] inline-flex items-center gap-1">
                            Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Tilt3DCard>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <FloatingWidget onOpenBooking={() => setIsBookingOpen(true)} />
    </div>
  );
}

"use client";

import React from "react";
import { Sparkles, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Tilt3DCard from "./Tilt3DCard";
import { BLOG_POSTS } from "@/data/dentalData";
import { BlogPost } from "@/types";

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export default function BlogSection({ onSelectPost }: BlogSectionProps) {
  return (
    <section id="blog" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching design.md */}
        <div className="text-left mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00a896]">
            <Sparkles className="w-3.5 h-3.5" />
            Our Blog
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">
            Dental Tips & News
          </h2>
        </div>

        {/* 3 Article Cards Grid matching design.md */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Tilt3DCard
              key={post.id}
              maxTilt={5}
              scale={1.02}
              className="h-full"
            >
              <div
                onClick={() => onSelectPost(post)}
                className="h-full rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#A3E3DF] overflow-hidden flex flex-col justify-between cursor-pointer group transition-all duration-300"
              >
                {/* Image Thumbnail */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/blog-enamel.jpg";
                    }}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#00a896] text-[11px] font-bold shadow-xs">
                    {post.category}
                  </span>
                </div>

                {/* Article Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    
                    {/* Date matching design.md */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#101828] group-hover:text-[#00a896] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#00a896] group-hover:underline inline-flex items-center gap-1">
                      Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">By {post.author}</span>
                  </div>

                </div>

              </div>
            </Tilt3DCard>
          ))}
        </div>

        {/* Bottom CTA matching design.md */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onSelectPost(BLOG_POSTS[0])}
            className="px-8 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-[#e5f6f4] hover:text-[#00a896] hover:border-[#00a896] transition-all shadow-xs"
          >
            View All Blog Articles
          </button>
        </div>

      </div>
    </section>
  );
}


"use client";

import React from "react";
import { X, Calendar, Clock, User, BookOpen } from "lucide-react";
import { BlogPost } from "@/types";

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogModal({ post, onClose }: BlogModalProps) {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[85vh]">
        
        {/* Header Visual */}
        <div className="relative h-60 w-full flex-shrink-0">
          <img
            src={post.image}
            alt={post.title}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/blog-enamel.jpg";
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-[#0D7A75] text-white text-xs font-semibold uppercase tracking-wider mb-2">
              {post.category}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white line-clamp-2">
              {post.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-3 border-b border-slate-100">
            <span className="flex items-center gap-1 font-medium text-[#101828]">
              <User className="w-3.5 h-3.5 text-[#0D7A75]" /> By {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> {post.readTime}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#E6F5F4]/40 border-l-4 border-[#0D7A75] text-slate-700 italic text-sm">
            {post.excerpt}
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <BookOpen className="w-4 h-4 text-[#0D7A75]" />
              <span>Published by Anti Dental Care Clinical Team (Sector 62 & 18, Noida)</span>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-[#0D7A75] text-white font-semibold text-sm hover:bg-[#095C58] transition-all"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { HistorySectionProps } from "@/types/history";
import { Compass, Quote } from "lucide-react";

// Asumimos la existencia de InstagramEmbed o un placeholder mientras carga
import { InstagramEmbed } from "react-social-media-embed";

export default function HistoryLeftEmbed({
  title,
  subtitle,
  text,
  instagramUrl,
  badge = "Nuestra Historia",
  quote,
}: HistorySectionProps) {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-slate-50/50 font-sans border-b border-slate-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Instagram Embed (Izquierda en Desktop) */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="w-full max-w-[328px] bg-white p-2 rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden">
            <InstagramEmbed url={instagramUrl} width="100%" />
          </div>
        </div>

        {/* Texto (Derecha en Desktop) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-sky-50 text-sky-800 rounded-full text-xs font-semibold uppercase tracking-wider border border-sky-200">
            <Compass className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="text-lg font-medium text-sky-700">{subtitle}</p>
          )}

          <p className="text-slate-600 leading-relaxed text-base whitespace-pre-line">
            {text}
          </p>

          {quote && (
            <blockquote className="p-4 bg-amber-50/60 border-l-4 border-amber-400 rounded-r-xl text-slate-700 italic text-sm flex gap-3">
              <Quote className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <span>"{quote}"</span>
            </blockquote>
          )}
        </div>

      </div>
    </section>
  );
}
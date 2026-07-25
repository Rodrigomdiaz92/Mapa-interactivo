"use client";

import React from "react";
import { HistorySectionProps } from "@/types/history";
import { Anchor } from "lucide-react";
import { InstagramEmbed } from "react-social-media-embed";

export default function HistoryRightEmbed({
  title,
  subtitle,
  text,
  instagramUrl,
  badge = "El Origen",
  quote,
}: HistorySectionProps) {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white font-sans border-b border-slate-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Texto (Izquierda en Desktop / Arriba en Mobile) */}
        <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold uppercase tracking-wider border border-emerald-200">
            <Anchor className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="text-lg font-medium text-emerald-700">{subtitle}</p>
          )}

          <p className="text-slate-600 leading-relaxed text-base whitespace-pre-line">
            {text}
          </p>

          {quote && (
            <div className="p-4 bg-slate-50 border-l-4 border-slate-700 rounded-r-xl text-slate-700 text-sm font-serif italic">
              "{quote}"
            </div>
          )}
        </div>

        {/* Instagram Embed (Derecha en Desktop) */}
        <div className="lg:col-span-5 flex justify-center w-full order-1 lg:order-2">
          <div className="w-full max-w-[328px] bg-white p-2 rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden">
            <InstagramEmbed url={instagramUrl} width="100%" />
          </div>
        </div>

      </div>
    </section>
  );
}
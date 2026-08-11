"use client";

import React from "react";
import dynamic from "next/dynamic";
import { HistorySectionProps } from "@/types/history";
import { Waves } from "lucide-react";

// Importación dinámica sin SSR
const InstagramEmbedWrapper = dynamic(
  () => import("@/components/navegacionynaturaleza/InstagramEmbedWrapper"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[440px] bg-slate-800 animate-pulse rounded-xl border border-slate-700" />
    ),
  }
);

export default function HistoryGridCard({
  title,
  subtitle,
  text,
  instagramUrl,
  badge = "Vida a Bordo",
  quote,
}: HistorySectionProps) {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white font-sans">
      <div className="max-w-6xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden relative">
        
        {/* Adorno de fondo estilizado */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Embed */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-[328px] bg-slate-800 p-2 rounded-2xl shadow-lg border border-slate-700 overflow-hidden">
              <InstagramEmbedWrapper url={instagramUrl} />
            </div>
          </div>

          {/* Contenido */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-semibold uppercase tracking-wider border border-sky-500/30">
              <Waves className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
              {title}
            </h2>

            {subtitle && (
              <p className="text-lg text-sky-300 font-medium">{subtitle}</p>
            )}

            <p className="text-slate-300 leading-relaxed text-base whitespace-pre-line">
              {text}
            </p>

            {quote && (
              <p className="text-sm font-serif italic text-amber-200/90 border-l-2 border-amber-400/80 pl-4 py-1">
                "{quote}"
              </p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
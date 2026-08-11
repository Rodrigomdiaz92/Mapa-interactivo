"use client";

import React from "react";
import dynamic from "next/dynamic";
import { HistorySectionProps } from "@/types/history";
import { Sparkles } from "lucide-react";

// Importación dinámica para desactivar SSR en el Embed de Instagram
const InstagramEmbedWrapper = dynamic(
  () => import("@/components/navegacionynaturaleza/InstagramEmbedWrapper"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[440px] bg-slate-100 animate-pulse rounded-xl border border-slate-200" />
    ),
  }
);

export default function HistoryCenterBanner({
  title,
  subtitle,
  text,
  instagramUrl,
  badge = "Momento Clave",
}: HistorySectionProps) {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-amber-50/30 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 text-center space-y-6">
        
        {/* Encabezado */}
        <div className="flex flex-col items-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            {title}
          </h2>

          {subtitle && (
            <p className="text-base sm:text-lg font-medium text-slate-600 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Instagram Centrado */}
        <div className="flex justify-center w-full my-6">
          <div className="w-full max-w-[328px] bg-slate-50 p-2 rounded-2xl shadow-md border border-slate-200 overflow-hidden">
            <InstagramEmbedWrapper url={instagramUrl} />
          </div>
        </div>

        {/* Texto descriptivo */}
        <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto text-base">
          {text}
        </p>

      </div>
    </section>
  );
}
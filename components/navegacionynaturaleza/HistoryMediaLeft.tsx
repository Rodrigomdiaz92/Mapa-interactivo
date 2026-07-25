"use client";

import React from "react";
import { HistorySectionProps } from "@/types/history";
import { Camera, Quote } from "lucide-react";

interface HistoryMediaProps extends Omit<HistorySectionProps, "instagramUrl"> {
  mediaSrc: string;
  mediaType?: "image" | "video";
  mediaAlt?: string;
}

export default function HistoryMediaLeft({
  title,
  subtitle,
  text,
  mediaSrc,
  mediaType = "image",
  mediaAlt = "Fotografía de la historia",
  badge = "Bitácora de Viaje",
  quote,
}: HistoryMediaProps) {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-amber-50/20 font-sans border-b border-slate-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Lado Multimedia (Izquierda) */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="w-full max-w-md bg-white p-3 rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden transform lg:-rotate-1 hover:rotate-0 transition-transform duration-300">
            {mediaType === "image" ? (
              <img
                src={mediaSrc}
                alt={mediaAlt}
                className="w-full h-[400px] object-cover rounded-xl"
              />
            ) : (
              <video
                src={mediaSrc}
                controls
                className="w-full h-[400px] object-cover rounded-xl bg-black"
              />
            )}
          </div>
        </div>

        {/* Lado Texto (Derecha) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-100/80 text-amber-900 rounded-full text-xs font-semibold uppercase tracking-wider border border-amber-200">
            <Camera className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="text-lg font-medium text-amber-800">{subtitle}</p>
          )}

          <p className="text-slate-600 leading-relaxed text-base whitespace-pre-line">
            {text}
          </p>

          {quote && (
            <blockquote className="p-4 bg-white border-l-4 border-amber-400 rounded-r-xl text-slate-700 italic text-sm shadow-sm flex gap-3">
              <Quote className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <span>"{quote}"</span>
            </blockquote>
          )}
        </div>

      </div>
    </section>
  );
}
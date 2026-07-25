"use client";

import React from "react";
import { HistorySectionProps } from "@/types/history";
import { Images, Compass } from "lucide-react";

interface HistoryCarouselProps extends Omit<HistorySectionProps, "instagramUrl"> {
  images: { src: string; alt?: string }[];
}

export default function HistoryMediaCarousel({
  title,
  subtitle,
  text,
  images,
  badge = "Galería de Excursiones",
}: HistoryCarouselProps) {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white font-sans border-b border-slate-100">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header con Texto Centrado */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-sky-50 text-sky-800 rounded-full text-xs font-semibold uppercase tracking-wider border border-sky-200">
            <Compass className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            {title}
          </h2>

          {subtitle && (
            <p className="text-base sm:text-lg font-medium text-sky-700">
              {subtitle}
            </p>
          )}

          <p className="text-slate-600 leading-relaxed text-base">
            {text}
          </p>
        </div>

        {/* Mosaico de Imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100"
            >
              <img
                src={img.src}
                alt={img.alt || `Fotografía ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-medium flex items-center gap-1.5">
                  <Images className="w-3.5 h-3.5 text-sky-300" />
                  {img.alt || "Sailing the World"}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
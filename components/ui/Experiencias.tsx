"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { EXPERIENCES_DATA } from "@/data/experiencesData";

export const Experiencias = () => {
  const [showAll, setShowAll] = useState(false);

  // En desktop mostramos 6 elementos por defecto o la totalidad
  const visibleExperiencesDesktop = showAll
    ? EXPERIENCES_DATA
    : EXPERIENCES_DATA.slice(0, 6);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-neutral-50/50">
      {/* Encabezado */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block mb-2">
          Lo que vivirás
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-slate-900 font-semibold tracking-tight uppercase">
          Experiencias & Actividades
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
          Todas estas vivencias forman parte del viaje a bordo de nuestros barcos.
        </p>
      </div>

      {/* VISTA MOBILE: Carrusel Horizontal con ancho reducido (se distingue el siguiente elemento) */}
      <div
        className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {EXPERIENCES_DATA.map((item) => (
          <Link
            key={item.id}
            href={`/actividades/${item.slug}`}
            className="group relative h-72 w-[220px] sm:w-[250px] shrink-0 snap-start rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm transition-transform active:scale-[0.98]"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

            {/* Botón flotante de acción */}
            <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>

            {/* Información básica */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              {item.subtitle && (
                <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-300 block mb-1">
                  {item.subtitle}
                </span>
              )}
              <h3 className="text-sm font-serif font-semibold leading-tight mb-1.5 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-[11px] text-neutral-200 line-clamp-2 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* VISTA DESKTOP: Grid de tarjetas */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleExperiencesDesktop.map((item) => (
          <Link
            key={item.id}
            href={`/actividades/${item.slug}`}
            className="group relative h-80 rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 block"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent group-hover:from-slate-950/95 transition-colors" />

            {/* Icono interactivo */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>

            {/* Textos */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              {item.subtitle && (
                <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-300 block mb-1">
                  {item.subtitle}
                </span>
              )}
              <h3 className="text-base sm:text-lg font-serif font-semibold leading-tight mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-200 line-clamp-2 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Botón Ver Más (Desktop) */}
      {EXPERIENCES_DATA.length > 6 && (
        <div className="hidden md:flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-sm hover:shadow-md"
          >
            <span>{showAll ? "Mostrar menos" : "Ver más actividades"}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      )}
    </section>
  );
};

export default Experiencias;
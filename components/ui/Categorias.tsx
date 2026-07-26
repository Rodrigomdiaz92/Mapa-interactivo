"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES_DATA } from "@/data/categoriesData";

export const Categorias = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-neutral-50/50">
      
      {/* Encabezado */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block mb-2">
          Elige tu estilo de estadía
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-slate-900 font-semibold tracking-tight uppercase">
          Categorías Destacadas
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
          Encuentra la opción ideal para explorar y hospedarte en el archipiélago de San Blas.
        </p>
      </div>

      {/* Contenedor con Scroll Horizontal */}
      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none justify-start md:justify-center"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {CATEGORIES_DATA.map((category) => (
          <Link
            key={category.id}
            href={`/charters?category=${category.categoryFilter}`}
            className="group relative h-80 w-[240px] sm:w-[280px] shrink-0 snap-start rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 block cursor-pointer focus:outline-none"
          >
            {/* Imagen de fondo */}
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Degradado para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-900/10 group-hover:from-slate-950/95 transition-colors" />

            {/* Badge con cantidad de opciones disponibles */}
            <div className="hidden absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-full uppercase shadow-md">
              {category.listingsCount} OPCIONES
            </div>

            {/* Botón flotante de acción */}
            <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>

            {/* Textos y Beneficios */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex flex-col justify-end">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 mb-1">
                ¿Por qué elegir esta opción?
              </span>
              <p className="text-[11px] text-neutral-200 line-clamp-2 font-light leading-snug mb-3">
                {category.benefitText}
              </p>
              <h3 className="text-lg font-serif font-semibold leading-tight group-hover:text-emerald-300 transition-colors">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
};

export default Categorias;
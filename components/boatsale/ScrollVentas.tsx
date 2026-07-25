"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Ruler, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

// 1. Importación de Tipos desde la carpeta 'types'
//import { CategoryVentaType, SaleItem } from "@/types/sale";

// 2. Importación de Datos desde la carpeta 'data'
import { INITIAL_SALE_ITEMS, CategoryVentaType, SaleItem } from "@/data/saleData";

export interface ScrollVentasProps {
  title?: string;
  subtitle?: string;
  category?: CategoryVentaType;
  minYear?: number;
  maxPriceUSD?: number;
  minSizeFT?: number;
}

export default function ScrollVentas({
  title = "Embarcaciones en Venta",
  subtitle = "Oportunidades destacadas de compraventa",
  category,
  minYear,
  maxPriceUSD,
  minSizeFT,
}: ScrollVentasProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filtrado dinámico basado en las props
  const items = INITIAL_SALE_ITEMS.filter((item) => {
    if (category && item.category !== category) return false;
    if (minYear !== undefined && item.year < minYear) return false;
    if (maxPriceUSD !== undefined && item.priceUSD > maxPriceUSD) return false;
    if (minSizeFT !== undefined && item.lengthFT && item.lengthFT < minSizeFT) return false;
    return true;
  });

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (items.length === 0) return null;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Encabezado */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-serif text-slate-900 font-semibold">{title}</h3>
          {subtitle && <p className="text-xs sm:text-sm text-neutral-500 mt-1">{subtitle}</p>}
        </div>

        {/* Botones de Navegación */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => handleScroll("left")}
            className="p-2.5 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-700 transition shadow-sm"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="p-2.5 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-700 transition shadow-sm"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Contenedor Horizontal con Scroll */}
      <div
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/boatsonsale/${item.id}`}
            className="group snap-start shrink-0 w-[280px] sm:w-[320px] bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-md">
                  {item.category === "Catamaran"
                    ? "CATAMARAN"
                    : item.category === "Sailboat"
                    ? "SAILBOAT"
                    : "PROPIEDAD"}
                </span>
              </div>

              <div className="p-4">
                <h4 className="font-serif font-semibold text-slate-900 text-base line-clamp-1 group-hover:text-slate-700 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[10px] font-bold text-slate-600 tracking-wider uppercase mt-0.5">
                  {item.subtitle}
                </p>

                <div className="flex items-center gap-2 mt-3 text-xs text-neutral-600">
                  {item.lengthFT && (
                    <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 px-2 py-0.5 rounded-full font-medium">
                      <Ruler className="w-3 h-3" /> {item.lengthFT} FT
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 bg-neutral-100 px-2 py-0.5 rounded-full">
                    <Calendar className="w-3 h-3" /> {item.year}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 pt-2 border-t border-neutral-100 flex items-center justify-between bg-neutral-50/50">
              <div>
                <span className="text-[10px] text-neutral-400 block">Precio de venta</span>
                <span className="font-bold text-slate-950 text-base">${item.priceUSD.toLocaleString()} USD</span>
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 group-hover:text-slate-950 uppercase transition-colors">
                <span>FICHA</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
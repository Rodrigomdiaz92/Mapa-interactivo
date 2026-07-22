"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Ruler, Calendar, ArrowRight } from "lucide-react";
import { CategoryVentaType, SaleItem } from "./CatalogoVenta";

// Datos de referencia para embarcaciones/propiedades en venta
const SALE_DATA: SaleItem[] = [
  {
    id: "leopard-40-2018-sale",
    title: "LEOPARD 40",
    subtitle: "CATAMARÁN EN EXCELENTE ESTADO",
    category: "Catamaran",
    priceUSD: 385000,
    lengthFT: 40,
    year: 2018,
    location: "San Blas, Panamá",
    image: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?auto=format&fit=crop&w=800&q=80",
    featureBadge: "3 Cabinas",
    description: "Equipado para navegación oceánica, paneles solares.",
  },
  {
    id: "lagoon-421-2024-sale",
    title: "LAGOON 421",
    subtitle: "REFURBISHED 2024",
    category: "Catamaran",
    priceUSD: 420000,
    lengthFT: 42,
    year: 2013,
    location: "San Blas, Panamá",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    featureBadge: "Versión VIP",
    description: "Suite de propietario completa, Starlink instalado.",
  },
  {
    id: "oceanis-58-sale",
    title: "BENETEAU OCEANIS 58",
    subtitle: "GRAN PERFORMANCE",
    category: "Sailboat",
    priceUSD: 490000,
    lengthFT: 58,
    year: 2016,
    location: "Mar Caribe",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    featureBadge: "3 Cabinas En-Suite",
    description: "Velero de gran eslora con acabados de lujo.",
  },
  {
    id: "private-island-cabin-sale",
    title: "CABAÑA TROPICAL",
    subtitle: "PROPIEDAD EN ISLA",
    category: "IslandLodge",
    priceUSD: 210000,
    year: 2021,
    location: "Archipiélago San Blas",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    featureBadge: "Frente al Mar",
    description: "Cabaña autosustentable con muelle privado.",
  },
];

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

  // Filtrado dinamico basado en las props
  const items = SALE_DATA.filter((item) => {
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
          <div
            key={item.id}
            className="snap-start shrink-0 w-[280px] sm:w-[320px] bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                  {item.category === "Catamaran" ? "CATAMARAN" : item.category === "Sailboat" ? "SAILBOAT" : "PROPIEDAD"}
                </span>
              </div>

              <div className="p-4">
                <h4 className="font-serif font-semibold text-slate-900 text-base line-clamp-1">{item.title}</h4>
                <p className="text-[10px] font-bold text-slate-600 tracking-wider uppercase mt-0.5">{item.subtitle}</p>

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
              <a
                href={`/venta/${item.id}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 hover:text-slate-950 uppercase"
              >
                <span>FICHA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
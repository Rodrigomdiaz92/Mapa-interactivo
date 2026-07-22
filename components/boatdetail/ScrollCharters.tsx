"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Users, ArrowRight } from "lucide-react";
import { CategoryType, CatalogItem } from "./Catalogo";

// Datos fuente compartidos o de referencia
const CHARTER_DATA: CatalogItem[] = [
  {
    id: "leopard-40",
    name: "LEOPARD 40 (2018)",
    subtitle: "UNMATCHED COMFORT & FRONT DECK ACCESS",
    category: "Catamaran",
    captainOrHost: "Capt. Thomas",
    image: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?auto=format&fit=crop&w=800&q=80",
    maxGuests: 8,
    isPrivate: true,
    isSharedAllowed: true,
    featureBadge: "3 Double Cabins",
    description: "Modern Leopard catamaran offering a unique front door connecting saloon to deck.",
    pricePerPersonPerDay: 220,
  },
  {
    id: "overwater-cabin-san-blas",
    name: "CABANA SOBRE EL AGUA",
    subtitle: "TRADITIONAL OVERWATER LODGE",
    category: "IslandLodge",
    captainOrHost: "Familia Guna",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    maxGuests: 4,
    isPrivate: true,
    isSharedAllowed: false,
    featureBadge: "Private Balcony",
    description: "Auténtica experiencia sobre el mar Caribe con acceso directo al arrecife.",
    pricePerPersonPerDay: 130,
  },
  {
    id: "lagoon-421",
    name: "LAGOON 421 (2024 REFIT)",
    subtitle: "VIP LUXURY & STARLINK CONNECTED",
    category: "Catamaran",
    captainOrHost: "Capt. Jean-Christophe",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    maxGuests: 6,
    isPrivate: true,
    isSharedAllowed: false,
    featureBadge: "VIP Owner Suite",
    description: "Refurbished with high-end luxury finishes and Starlink high-speed internet.",
    pricePerPersonPerDay: 290,
  },
  {
    id: "oceanis-58",
    name: "BLUE MARYS (58FT)",
    subtitle: "PREMIUM MONOHULL ELEGANCE",
    category: "Sailboat",
    captainOrHost: "Capt. Nico",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    maxGuests: 6,
    isPrivate: true,
    isSharedAllowed: true,
    featureBadge: "Ensuite Cabins",
    description: "Spacious Beneteau sailboat for authentic luxury sailing in San Blas.",
    pricePerPersonPerDay: 195,
  },
];

export interface ScrollChartersProps {
  title?: string;
  subtitle?: string;
  category?: CategoryType;
  isSharedAllowed?: boolean;
  maxPrice?: number;
}

export default function ScrollCharters({
  title = "Embarcaciones Destacadas para Charter",
  subtitle = "Desliza para explorar nuestras opciones destacadas",
  category,
  isSharedAllowed,
  maxPrice,
}: ScrollChartersProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filtrado de elementos segun las props pasadas por codigo
  const items = CHARTER_DATA.filter((item) => {
    if (category && item.category !== category) return false;
    if (isSharedAllowed !== undefined && item.isSharedAllowed !== isSharedAllowed) return false;
    if (maxPrice !== undefined && item.pricePerPersonPerDay > maxPrice) return false;
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
      {/* Encabezado con Botones de Navegacion */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-serif text-emerald-950 font-semibold">{title}</h3>
          {subtitle && <p className="text-xs sm:text-sm text-neutral-500 mt-1">{subtitle}</p>}
        </div>

        {/* Controles de Scroll (Flechas) */}
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

      {/* Contenedor Horizontal de Scroll */}
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
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                  {item.category === "Catamaran" ? "CATAMARAN" : item.category === "Sailboat" ? "SAILBOAT" : "HOSPEDAJE"}
                </span>
              </div>

              <div className="p-4">
                <h4 className="font-serif font-semibold text-neutral-900 text-base line-clamp-1">{item.name}</h4>
                <p className="text-[10px] font-bold text-emerald-800 tracking-wider uppercase mt-0.5">{item.subtitle}</p>

                <div className="flex items-center gap-2 mt-3 text-xs text-neutral-600">
                  <span className="inline-flex items-center gap-1 bg-neutral-100 px-2 py-0.5 rounded-full">
                    <Users className="w-3 h-3" /> Max {item.maxGuests}
                  </span>
                  <span className="bg-neutral-100 px-2 py-0.5 rounded-full text-[11px] font-medium">
                    {item.featureBadge}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 pt-2 border-t border-neutral-100 flex items-center justify-between bg-neutral-50/50">
              <div>
                <span className="text-[10px] text-neutral-400 block">Desde</span>
                <span className="font-bold text-emerald-950 text-sm">${item.pricePerPersonPerDay} USD/día</span>
              </div>
              <a
                href={`/catalogo/${item.id}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 uppercase"
              >
                <span>VER</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
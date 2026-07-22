"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ChevronDown, ChevronUp, Anchor, Calendar, Ruler, DollarSign, ArrowRight, Home } from "lucide-react";

export type CategoryVentaType = "Catamaran" | "Sailboat" | "IslandLodge";

export interface SaleItem {
  id: string;
  title: string;
  subtitle: string;
  category: CategoryVentaType;
  priceUSD: number; // Precio total de venta en USD
  lengthFT?: number; // Eslora en pies (para barcos)
  year: number; // Año de fabricación / construcción
  location: string;
  image: string;
  featureBadge: string;
  description: string;
}

// Datos de ejemplo para catálogo de venta
const INITIAL_SALE_ITEMS: SaleItem[] = [
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
    featureBadge: "3 Cabinas / 2 Baños",
    description: "Equipado para navegación oceánica, paneles solares, dessalinizador y diseño de acceso directo a la proa.",
  },
  {
    id: "lagoon-421-2024-sale",
    title: "LAGOON 421",
    subtitle: "TOTALMENTE REFURBISHED 2024",
    category: "Catamaran",
    priceUSD: 420000,
    lengthFT: 42,
    year: 2013,
    location: "San Blas, Panamá",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    featureBadge: "Versión Propietario VIP",
    description: "Suite de propietario completa, Starlink instalado, motores con pocas horas de uso y recién pintado.",
  },
  {
    id: "oceanis-58-sale",
    title: "BENETEAU OCEANIS 58",
    subtitle: "ELEGANCIA Y GRAN PERFORMANCE",
    category: "Sailboat",
    priceUSD: 490000,
    lengthFT: 58,
    year: 2016,
    location: "Mar Caribe",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    featureBadge: "3 Cabinas En-Suite",
    description: "Velero de gran eslora con acabados de lujo, vela mayor enrollable, teca en cubierta y electrónica de última generación.",
  },
  {
    id: "vintage-wooden-sailboat-sale",
    title: "CLASSIC WOODEN SCHOONER",
    subtitle: "JOYA DE COLECCIÓN EN MADERA",
    category: "Sailboat",
    priceUSD: 165000,
    lengthFT: 45,
    year: 1998,
    location: "San Blas, Panamá",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
    featureBadge: "Doble Mástil Clásico",
    description: "Restaurado minuciosamente. Ideal para amantes de la navegación clásica o negocio de charter privado.",
  },
  {
    id: "private-island-cabin-sale",
    title: "CABAÑA TROPICAL EN ISLA",
    subtitle: "PROPIEDAD / CONCESIÓN EXCLUSIVA",
    category: "IslandLodge",
    priceUSD: 210000,
    year: 2021,
    location: "Archipiélago San Blas",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    featureBadge: "Frente al Mar / Muelle",
    description: "Cabaña autosustentable sobre pilotes de madera con energía solar, recolector de agua de lluvia y muelle privado.",
  },
];

export default function CatalogoVenta() {
  // Filtros Visibles Siempre
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | CategoryVentaType>("ALL");

  // Filtros Avanzados (Desplegables)
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [maxPriceUSD, setMaxPriceUSD] = useState<number>(600000);
  const [minYear, setMinYear] = useState<number>(1990);
  const [minSizeFT, setMinSizeFT] = useState<number>(30);

  // Lógica de filtrado
  const filteredItems = useMemo(() => {
    return INITIAL_SALE_ITEMS.filter((item) => {
      // 1. Categoría
      if (selectedCategory !== "ALL" && item.category !== selectedCategory) return false;

      // 2. Búsqueda por texto
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesLocation = item.location.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation && !matchesDesc) return false;
      }

      // 3. Filtro por Precio Máximo
      if (item.priceUSD > maxPriceUSD) return false;

      // 4. Filtro por Año de Fabricación Mínimo
      if (item.year < minYear) return false;

      // 5. Filtro por Tamaño Mínimo en Pies (FT) - Solo aplica si el ítem tiene eslora
      if (item.lengthFT && item.lengthFT < minSizeFT) return false;

      return true;
    });
  }, [selectedCategory, searchQuery, maxPriceUSD, minYear, minSizeFT]);

  // Contador de Filtros Avanzados Activos
  const activeAdvancedCount = useMemo(() => {
    let count = 0;
    if (maxPriceUSD < 600000) count++;
    if (minYear > 1990) count++;
    if (minSizeFT > 30) count++;
    return count;
  }, [maxPriceUSD, minYear, minSizeFT]);

  const resetFilters = () => {
    setSelectedCategory("ALL");
    setSearchQuery("");
    setMaxPriceUSD(600000);
    setMinYear(1990);
    setMinSizeFT(30);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-neutral-50/50">
      
      {/* Encabezado */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-slate-900 font-semibold tracking-tight">
          Embarcaciones y Propiedades en Venta
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
          Encuentra tu próximo velero, catamarán o propiedad insular con especificaciones verificadas.
        </p>
      </div>

      {/* BARRA DE FILTROS */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-neutral-200/80 mb-10 space-y-4">
        
        {/* --- FILTROS SIEMPRE VISIBLES --- */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* 1. Barra de Búsqueda */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Buscar por modelo, ubicación o características..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-slate-700/30 focus:border-slate-800 transition"
            />
          </div>

          {/* 2. Filtro Categoría (Categorías Visibles) */}
          <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-xl overflow-x-auto">
            {[
              { id: "ALL", label: "Todos" },
              { id: "Catamaran", label: "Catamarán" },
              { id: "Sailboat", label: "Velero" },
              { id: "IslandLodge", label: "Hospedaje / Propiedad" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Botón para Desplegar Filtros Avanzados */}
          <button
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700 rounded-xl text-xs font-semibold transition border border-neutral-200 shrink-0"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-600" />
            <span>Filtros</span>
            {activeAdvancedCount > 0 && (
              <span className="w-5 h-5 bg-slate-900 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                {activeAdvancedCount}
              </span>
            )}
            {showAdvancedFilters ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

        </div>

        {/* --- FILTROS DESPLEGABLES (PRECIO, PIES, AÑO) --- */}
        {showAdvancedFilters && (
          <div className="pt-4 border-t border-neutral-100 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
            
            {/* Filtro por Precio Total Máximo */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-medium text-neutral-700">
                <span>Precio Máx. Venta:</span>
                <span className="font-bold text-slate-900">${maxPriceUSD.toLocaleString()} USD</span>
              </div>
              <input
                type="range"
                min="100000"
                max="600000"
                step="25000"
                value={maxPriceUSD}
                onChange={(e) => setMaxPriceUSD(Number(e.target.value))}
                className="w-full accent-slate-800 cursor-pointer h-2 bg-neutral-200 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 font-medium">
                <span>$100,000 USD</span>
                <span>$600,000 USD</span>
              </div>
            </div>

            {/* Filtro por Eslora / Tamaño en Pies (FT) */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-neutral-700">
                Eslora Mínima (Tamaño en FT):
              </label>
              <select
                value={minSizeFT}
                onChange={(e) => setMinSizeFT(Number(e.target.value))}
                className="w-full py-2 px-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-slate-700/30"
              >
                <option value={30}>Desde 30 ft</option>
                <option value={40}>Desde 40 ft</option>
                <option value={45}>Desde 45 ft</option>
                <option value={50}>Desde 50 ft o más</option>
              </select>
            </div>

            {/* Filtro por Año de Fabricación */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-neutral-700">
                Año de Fabricación Mínimo:
              </label>
              <select
                value={minYear}
                onChange={(e) => setMinYear(Number(e.target.value))}
                className="w-full py-2 px-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-slate-700/30"
              >
                <option value={1990}>Cualquier año (1990+)</option>
                <option value={2010}>2010 o más reciente</option>
                <option value={2015}>2015 o más reciente</option>
                <option value={2020}>2020 o más reciente</option>
              </select>
            </div>

          </div>
        )}

      </div>

      {/* GRID RESPONSIVE (1 col celular, 2 tablet, 3 PC) */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-neutral-300">
          <Anchor className="w-10 h-10 text-neutral-400 mx-auto mb-3 stroke-[1.5]" />
          <p className="text-neutral-600 font-medium">No se encontraron embarcaciones o propiedades con esos criterios.</p>
          <button
            onClick={resetFilters}
            className="mt-3 text-xs text-slate-800 underline font-medium hover:text-slate-950"
          >
            Restablecer filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Imagen con Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Badge Categoría */}
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    {item.category === "IslandLodge" && <Home className="w-3 h-3 text-amber-400" />}
                    <span>
                      {item.category === "Catamaran"
                        ? "CATAMARAN"
                        : item.category === "Sailboat"
                        ? "SAILBOAT"
                        : "PROPIEDAD"}
                    </span>
                  </div>

                  {/* Tag Ubicación */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-md">
                    {item.location}
                  </div>
                </div>

                {/* Contenido / Info de Venta */}
                <div className="p-5 sm:p-6">
                  
                  <h3 className="text-lg font-serif tracking-wide text-neutral-900 font-semibold group-hover:text-slate-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[11px] font-bold tracking-wider text-slate-700 uppercase mt-0.5">
                    {item.subtitle}
                  </p>

                  {/* Pills Específicas de Venta: Pies (FT), Año, Característica */}
                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    
                    {/* Tamaño en FT (si aplica) */}
                    {item.lengthFT && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
                        <Ruler className="w-3.5 h-3.5 text-slate-500" />
                        {item.lengthFT} FT
                      </span>
                    )}

                    {/* Año de fabricación */}
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-medium">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                      Año {item.year}
                    </span>

                    {/* Badge de característica */}
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-medium border border-amber-200/60">
                      {item.featureBadge}
                    </span>

                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              </div>

              {/* Pie de Tarjeta / Precio de Venta Total */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-neutral-100 mt-2 bg-neutral-50/40">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-xs text-neutral-500 block">Precio de venta</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-slate-950">${item.priceUSD.toLocaleString()}</span>
                      <span className="text-xs font-semibold text-neutral-600">USD</span>
                    </div>
                  </div>
                </div>

                <a
                  href={`/venta/${item.id}`}
                  className="w-full inline-flex items-center justify-between pt-2 text-xs font-bold tracking-wider uppercase text-slate-800 hover:text-slate-950 transition-colors group/btn"
                >
                  <span>VER DETALLES Y FICHA</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      )}

    </section>
  );
}
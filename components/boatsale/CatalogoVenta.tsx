"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ChevronDown, ChevronUp, Anchor, Calendar, Ruler, ArrowRight, Home } from "lucide-react";
import Link from "next/link";
import { INITIAL_SALE_ITEMS, CategoryVentaType } from "@/data/saleData";

export default function CatalogoVentaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | CategoryVentaType>("ALL");

  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [maxPriceUSD, setMaxPriceUSD] = useState<number>(600000);
  const [minYear, setMinYear] = useState<number>(1990);
  const [minSizeFT, setMinSizeFT] = useState<number>(30);

  const filteredItems = useMemo(() => {
    return INITIAL_SALE_ITEMS.filter((item) => {
      if (selectedCategory !== "ALL" && item.category !== selectedCategory) return false;

      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesLocation = item.location.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation && !matchesDesc) return false;
      }

      if (item.priceUSD > maxPriceUSD) return false;
      if (item.year < minYear) return false;
      if (item.lengthFT && item.lengthFT < minSizeFT) return false;

      return true;
    });
  }, [selectedCategory, searchQuery, maxPriceUSD, minYear, minSizeFT]);

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

  const getCategoryBadgeLabel = (cat: CategoryVentaType) => {
    switch (cat) {
      case "Catamaran": return "Catamarán";
      case "Sailboat": return "Velero";
      // case "Monohull": return "Monocasco";
      case "Trimaran": return "Trimarán";
      // case "IslandLodge": return "Propiedad";
      default: return cat;
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-neutral-50/50">
      
      {/* Encabezado */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-slate-900 font-semibold tracking-tight">
          Embarcaciones en Venta
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
          Tu nueva experiencia comienza aquí.
        </p>
      </div>

      {/* Barra de Filtros */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-neutral-200/80 mb-10 space-y-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
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

          <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-xl overflow-x-auto">
            {[
              { id: "ALL", label: "Todos" },
              { id: "Catamaran", label: "Catamarán" },
              // { id: "Monohull", label: "Monocasco" },
              // { id: "Trimaran", label: "Trimarán" },
              { id: "Sailboat", label: "Velero" },
              // { id: "IslandLodge", label: "Propiedad" },
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

        {showAdvancedFilters && (
          <div className="pt-4 border-t border-neutral-100 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
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
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-neutral-700">
                Eslora Mínima (FT):
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

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-neutral-700">
                Año Mínimo:
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

      {/* Grid de Items */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-neutral-300">
          <Anchor className="w-10 h-10 text-neutral-400 mx-auto mb-3 stroke-[1.5]" />
          <p className="text-neutral-600 font-medium">No se encontraron ítems con esos criterios.</p>
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
            <Link
              key={item.id}
              href={`/boatsonsale/${item.id}`}
              className="group block h-full focus:outline-none"
            >
              <article className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full cursor-pointer">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    
                    <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      {item.category === "IslandLodge" && <Home className="w-3 h-3 text-amber-400" />}
                      <span>{getCategoryBadgeLabel(item.category)}</span>
                    </div>

                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-md">
                      {item.location}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-serif tracking-wide text-neutral-900 font-semibold group-hover:text-slate-900 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-[11px] font-bold tracking-wider text-slate-700 uppercase mt-0.5">
                      {item.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mt-4">
                      {item.lengthFT && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
                          <Ruler className="w-3.5 h-3.5 text-slate-500" />
                          {item.lengthFT} FT
                        </span>
                      )}

                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-medium">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                        Año {item.year}
                      </span>

                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-medium border border-amber-200/60">
                        {item.featureBadge}
                      </span>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

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

                  <div className="w-full inline-flex items-center justify-between pt-2 text-xs font-bold tracking-wider uppercase text-slate-800 group-hover:text-slate-950 transition-colors">
                    <span>VER FICHA TÉCNICA Y DETALLES</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CatalogItem, CategoryType } from "@/types/catalog";
import { Users, Lock, Bed, UsersRound, ArrowRight, Search, Anchor, SlidersHorizontal, ChevronDown, ChevronUp, Home, Tag } from "lucide-react";

interface CatalogoProps {
  /** Lista completa de barcos y hospedajes a mostrar */
  items: CatalogItem[];
  /** Callback para notificar cuando se selecciona una embarcación enviando su id */
  onSelectBoat?: (id: number) => void;
  /** Título opcional del catálogo */
  title?: string;
  /** Subtítulo opcional del catálogo */
  subtitle?: string;
  /** Idioma actual */
  lang?: "es" | "en";
}

export default function Catalogo({
  items = [],
  onSelectBoat,
  title = "Explora la Flota y Hospedajes",
  subtitle = "Encuentra el catamarán, velero o hospedaje en la isla ideal para tu próxima aventura en San Blas.",
  lang = "es",
}: CatalogoProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  // Filtros principales
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | CategoryType>("ALL");

  useEffect(() => {
    if (categoryParam && ["Catamaran", "Sailboat", "IslandLodge"].includes(categoryParam)) {
      setSelectedCategory(categoryParam as CategoryType);
    }
  }, [categoryParam]);

  // Filtros Avanzados
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number>(2500);
  const [minGuests, setMinGuests] = useState<number>(1);
  const [modalityFilter, setModalityFilter] = useState<"ALL" | "Private" | "Shared">("ALL");

  // Lógica de filtrado adaptada al nuevo modelo de datos
  const filteredItems = useMemo(() => {
    if (!Array.isArray(items)) return [];

    return items.filter((item) => {
      // 1. Categoría
      if (selectedCategory !== "ALL" && item.category !== selectedCategory) return false;

      // 2. Búsqueda por texto (Soporta objetos LocalizedString)
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = item.boatName.toLowerCase().includes(query);
        const matchesCaptain = item.captain.name.toLowerCase().includes(query);
        const matchesDesc = (item.boatDescription[lang] || "").toLowerCase().includes(query);
        if (!matchesName && !matchesCaptain && !matchesDesc) return false;
      }

      // 3. Filtro por Precio Máximo
      const currentPrice = item.pricing.discountPricePerPersonPerDay || item.pricing.basePricePerPersonPerDay;
      if (currentPrice > maxPrice) return false;

      // 4. Filtro por Huéspedes Mínimos
      if (item.maxGuests < minGuests) return false;

      // 5. Filtro por Modalidad
      if (modalityFilter === "Private" && !item.isPrivate) return false;
      if (modalityFilter === "Shared" && !item.isSharedAllowed) return false;

      return true;
    });
  }, [items, selectedCategory, searchQuery, maxPrice, minGuests, modalityFilter, lang]);

  const activeAdvancedFiltersCount = useMemo(() => {
    let count = 0;
    if (maxPrice < 350) count++;
    if (minGuests > 1) count++;
    if (modalityFilter !== "ALL") count++;
    return count;
  }, [maxPrice, minGuests, modalityFilter]);

  const resetFilters = () => {
    setSelectedCategory("ALL");
    setSearchQuery("");
    setMaxPrice(350);
    setMinGuests(1);
    setModalityFilter("ALL");
  };

  const handleItemClick = (id: number) => {
    if (onSelectBoat) {
      onSelectBoat(id);
    } else {
      window.location.href = `/charters/${id}`;
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-neutral-50/50 font-sans">
      
      {/* Encabezado */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-emerald-950 font-semibold tracking-tight">
          {title}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* BARRA DE FILTROS */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-neutral-200/80 mb-10 space-y-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Búsqueda por Texto */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Buscar por nombre, capitán o descripción..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition"
            />
          </div>

          {/* Filtro por Categorías */}
          <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-xl overflow-x-auto">
            {[
              { id: "ALL", label: "Todos" },
              { id: "Catamaran", label: "Catamarán" },
              { id: "Sailboat", label: "Velero" },
              { id: "IslandLodge", label: "Hospedaje Isla" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-emerald-900 text-white shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Botón Filtros Avanzados */}
          <button
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700 rounded-xl text-xs font-semibold transition border border-neutral-200 shrink-0"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-600" />
            <span>Filtros</span>
            {activeAdvancedFiltersCount > 0 && (
              <span className="w-5 h-5 bg-emerald-800 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                {activeAdvancedFiltersCount}
              </span>
            )}
            {showAdvancedFilters ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* SECCIÓN DESPLEGABLE */}
        {showAdvancedFilters && (
          <div className="pt-4 border-t border-neutral-100 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-medium text-neutral-700">
                <span>Precio Máx. p/persona:</span>
                <span className="font-bold text-emerald-900">${maxPrice} USD / día</span>
              </div>
              <input
                type="range"
                min="100"
                max="2500"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-emerald-800 cursor-pointer h-2 bg-neutral-200 rounded-lg"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-neutral-700">Capacidad Mínima:</label>
              <select
                value={minGuests}
                onChange={(e) => setMinGuests(Number(e.target.value))}
                className="w-full py-2 px-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
              >
                <option value={1}>Para 1+ persona</option>
                <option value={2}>Para 2+ huéspedes</option>
                <option value={4}>Para 4+ huéspedes</option>
                <option value={6}>Para 6+ huéspedes</option>
                <option value={8}>Para 8+ huéspedes</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-neutral-700">Modalidad:</label>
              <select
                value={modalityFilter}
                onChange={(e) => setModalityFilter(e.target.value as any)}
                className="w-full py-2 px-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
              >
                <option value="ALL">Cualquier modalidad</option>
                <option value="Private">Exclusivo / Privado</option>
                <option value="Shared">Permite Compartido</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* GRID RESPONSIVE */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-neutral-300">
          <Anchor className="w-10 h-10 text-neutral-400 mx-auto mb-3 stroke-[1.5]" />
          <p className="text-neutral-600 font-medium">No se encontraron opciones con estos filtros.</p>
          <button onClick={resetFilters} className="mt-3 text-xs text-emerald-800 underline font-medium hover:text-emerald-950">
            Restablecer todos los filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => {
            const hasPromo = item.hasDiscount && item.pricing.discountPricePerPersonPerDay;
            const effectivePrice = hasPromo ? item.pricing.discountPricePerPersonPerDay : item.pricing.basePricePerPersonPerDay;

            return (
              <article
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
              >
                <div>
                  {/* Portada */}
                  <div className="relative aspect-16/10 overflow-hidden bg-neutral-100">
                    <img
                      src={item.boatCoverPhoto}
                      alt={item.boatName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    
                    {/* Badge Categoría */}
                    <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      {item.category === "IslandLodge" && <Home className="w-3 h-3 text-amber-400" />}
                      <span>{item.category === "Catamaran" ? "CATAMARAN" : item.category === "Sailboat" ? "VELERO" : "HOSPEDAJE ISLA"}</span>
                    </div>

                    {/* Badge Promoción */}
                    {hasPromo && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        <span>OFERTA</span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-serif tracking-wide text-neutral-900 font-semibold group-hover:text-emerald-900 transition-colors">
                      {item.boatName}
                    </h3>

                    <p className="text-[11px] font-bold tracking-wider text-emerald-800 uppercase mt-0.5">
                      {item.location[lang]}
                    </p>

                    {/* Pills Cortos */}
                    <div className="flex flex-wrap items-center gap-2 mt-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-medium">
                        <Users className="w-3.5 h-3.5 text-neutral-500" />
                        Max {item.maxGuests} guests
                      </span>

                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-medium border border-amber-200/60">
                        <Lock className="w-3.5 h-3.5 text-amber-700" />
                        {item.isPrivate ? "Private" : "Shared option"}
                      </span>

                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-medium">
                        <Bed className="w-3.5 h-3.5 text-neutral-500" />
                        {item.featureBadge[lang]}
                      </span>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                      {item.boatDescription[lang]}
                    </p>
                  </div>
                </div>

                {/* Pie de Tarjeta */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-neutral-100 mt-2 bg-neutral-50/40">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-xs text-neutral-500 block">Precio est. por persona</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-bold text-emerald-950">${effectivePrice}</span>
                        {hasPromo && (
                          <span className="text-xs text-neutral-400 line-through">${item.pricing.basePricePerPersonPerDay}</span>
                        )}
                        <span className="text-xs font-semibold text-neutral-600">USD / día</span>
                      </div>
                    </div>

                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${item.isSharedAllowed ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-700"}`}>
                      {item.isSharedAllowed ? "Privado o Compartido" : "Solo Privado"}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleItemClick(item.id);
                    }}
                    className="w-full inline-flex items-center justify-between pt-2 text-xs font-bold tracking-wider uppercase text-emerald-800 hover:text-emerald-950 transition-colors group/btn"
                  >
                    <span>VER DETALLE</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
"use client";

import { useState, useMemo } from "react";
import { Users, Lock, Bed, UsersRound, ArrowRight, Search, Anchor, SlidersHorizontal, ChevronDown, ChevronUp, Home } from "lucide-react";

export type CategoryType = "Sailboat" | "Catamaran" | "IslandLodge";

export interface CatalogItem {
  id: string;
  name: string;
  subtitle: string;
  category: CategoryType;
  captainOrHost: string;
  image: string;
  maxGuests: number;
  isPrivate: boolean;
  isSharedAllowed: boolean;
  featureBadge: string;
  description: string;
  pricePerPersonPerDay: number; // USD por día por persona
  pricingNote?: string;
}

// Datos de ejemplo
const INITIAL_ITEMS: CatalogItem[] = [
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
    description: "Modern Leopard catamaran offering a unique front door connecting saloon to deck. Exceptional value & comfort for San Blas.",
    pricePerPersonPerDay: 220,
  },
  {
    id: "overwater-cabin-san-blas",
    name: "CABANA SOBRE EL AGUA - ISLA KIKIRGUP",
    subtitle: "TRADITIONAL OVERWATER LODGE",
    category: "IslandLodge",
    captainOrHost: "Familia Guna",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    maxGuests: 4,
    isPrivate: true,
    isSharedAllowed: false,
    featureBadge: "Private Balcony & Sea View",
    description: "Auténtica experiencia sobre el mar Caribe. Incluye todas las comidas tradicionales, baño privado y acceso directo al arrecife.",
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
    description: "Refurbished in 2024 with high-end luxury finishes, Starlink high-speed internet, and gourmet dining.",
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
    description: "Spacious Beneteau sailboat for authentic luxury sailing in San Blas. High stability and unmatched elegance.",
    pricePerPersonPerDay: 195,
  },
  {
    id: "eco-lodge-island",
    name: "ECO-ECO LODGE ISLA PALMA",
    subtitle: "ISLAND BUNGALOW EXPERIENCE",
    category: "IslandLodge",
    captainOrHost: "Anfitrión Local",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80",
    maxGuests: 10,
    isPrivate: false,
    isSharedAllowed: true,
    featureBadge: "Includes Meals & Tours",
    description: "Bungalows ecológicos en isla privada con playas de arena blanca. Ideal para grupos grandes o viajeros individuales.",
    pricePerPersonPerDay: 95,
  },
  {
    id: "vintage-sailboat",
    name: "CAPTAIN ROBERTO VINTAGE",
    subtitle: "CLASSIC DOUBLE-MAST EXPERIENCE",
    category: "Sailboat",
    captainOrHost: "Capt. Roberto",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
    maxGuests: 5,
    isPrivate: false,
    isSharedAllowed: true,
    featureBadge: "Italian-Caribbean Cuisine",
    description: "Classic wooden sailboat with over 20 years of experience sailing San Blas. Warm, rustic, and peaceful atmosphere.",
    pricePerPersonPerDay: 160,
  },
];

export default function Catalogo() {
  // Filtros principales (Siempre Visibles)
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | CategoryType>("ALL");

  // Filtros Avanzados (Colapsables)
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number>(350);
  const [minGuests, setMinGuests] = useState<number>(1);
  const [modalityFilter, setModalityFilter] = useState<"ALL" | "Private" | "Shared">("ALL");

  // Lógica de filtrado
  const filteredItems = useMemo(() => {
    return INITIAL_ITEMS.filter((item) => {
      // 1. Categoria (Visión Siempre)
      if (selectedCategory !== "ALL" && item.category !== selectedCategory) return false;

      // 2. Búsqueda por texto (Visión Siempre)
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesHost = item.captainOrHost.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesHost && !matchesDesc) return false;
      }

      // 3. Filtro por Precio Máximo (Avanzado)
      if (item.pricePerPersonPerDay > maxPrice) return false;

      // 4. Filtro por Huéspedes Mínimos (Avanzado)
      if (item.maxGuests < minGuests) return false;

      // 5. Filtro por Modalidad (Avanzado)
      if (modalityFilter === "Private" && !item.isPrivate) return false;
      if (modalityFilter === "Shared" && !item.isSharedAllowed) return false;

      return true;
    });
  }, [selectedCategory, searchQuery, maxPrice, minGuests, modalityFilter]);

  // Contar cuántos filtros avanzados están activos
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

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-neutral-50/50">
      
      {/* Encabezado */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-emerald-950 font-semibold tracking-tight">
          Explora la Flota y Hospedajes
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
          Encuentra el catamarán, velero o hospedaje en la isla ideal para tu próxima aventura en San Blas.
        </p>
      </div>

      {/* BARRA DE FILTROS */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-neutral-200/80 mb-10 space-y-4">
        
        {/* --- SECCIÓN SIEMPRE VISIBLE --- */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* 1. Búsqueda por Texto */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Buscar por nombre, anfitrión o descripción..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition"
            />
          </div>

          {/* 2. Filtro por Categorías (Barra Always Visible) */}
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

          {/* Botón para Desplegar Filtros Avanzados */}
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

        {/* --- SECCIÓN DESPLEGABLE / COLAPSADA --- */}
        {showAdvancedFilters && (
          <div className="pt-4 border-t border-neutral-100 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
            
            {/* Filtro por Precio Máximo */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-medium text-neutral-700">
                <span>Precio Máx. p/persona:</span>
                <span className="font-bold text-emerald-900">${maxPrice} USD / día</span>
              </div>
              <input
                type="range"
                min="80"
                max="350"
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-emerald-800 cursor-pointer h-2 bg-neutral-200 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 font-medium">
                <span>$80 USD</span>
                <span>$350 USD</span>
              </div>
            </div>

            {/* Filtro por Número de Huéspedes */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-neutral-700">
                Capacidad Mínima (Huéspedes):
              </label>
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

            {/* Filtro por Modalidad (Privado / Compartido) */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-neutral-700">
                Modalidad de Alquiler:
              </label>
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

      {/* GRID RESPONSIVE (1 col móvil, 2 tablet, 3 PC) */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-neutral-300">
          <Anchor className="w-10 h-10 text-neutral-400 mx-auto mb-3 stroke-[1.5]" />
          <p className="text-neutral-600 font-medium">No se encontraron opciones con estos filtros.</p>
          <button
            onClick={resetFilters}
            className="mt-3 text-xs text-emerald-800 underline font-medium hover:text-emerald-950"
          >
            Restablecer todos los filtros
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
                {/* Visual / Imagen */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.name}
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
                        : "HOSPEDAJE ISLA"}
                    </span>
                  </div>

                  {/* Tag Compartido */}
                  {item.isSharedAllowed && (
                    <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                      <UsersRound className="w-3 h-3" />
                      <span>Compartido</span>
                    </div>
                  )}
                </div>

                {/* Contenido / Info */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-serif tracking-wide text-neutral-900 font-semibold group-hover:text-emerald-900 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-[11px] font-bold tracking-wider text-emerald-800 uppercase mt-0.5">
                    {item.subtitle}
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
                      {item.featureBadge}
                    </span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Pie de Tarjeta */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-neutral-100 mt-2 bg-neutral-50/40">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-xs text-neutral-500 block">Precio est. por persona</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-emerald-950">${item.pricePerPersonPerDay}</span>
                      <span className="text-xs font-semibold text-neutral-600">USD / día</span>
                    </div>
                  </div>

                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${
                    item.isSharedAllowed 
                      ? "bg-emerald-100 text-emerald-800" 
                      : "bg-slate-100 text-slate-700"
                  }`}>
                    {item.isSharedAllowed ? "Privado o Compartido" : "Solo Privado"}
                  </span>
                </div>

                <a
                  href={`/catalogo/${item.id}`}
                  className="w-full inline-flex items-center justify-between pt-2 text-xs font-bold tracking-wider uppercase text-emerald-800 hover:text-emerald-950 transition-colors group/btn"
                >
                  <span>SEE MORE</span>
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
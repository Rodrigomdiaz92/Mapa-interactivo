"use client";

import { 
  Users, 
  Bed, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  XCircle, 
  Home, 
  Anchor, 
  Utensils, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Tag,
  Globe2
} from "lucide-react";
import Link from "next/link";
import { CatalogItem } from "@/types/catalog";

function ImageCarousel({ images, altPrefix }: { images: string[]; altPrefix: string }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="relative group/carousel w-full">
      {images.length > 1 && (
        <button
          type="button"
          aria-label="Imagen anterior"
          onClick={(e) => {
            const container = e.currentTarget.parentElement?.querySelector('.carousel-container');
            if (container) container.scrollBy({ left: -350, behavior: 'smooth' });
          }}
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-800 items-center justify-center shadow-lg backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>
      )}

      <div className="carousel-container flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 pt-1 rounded-2xl scroll-smooth">
        {images.map((imgUrl, idx) => (
          <div
            key={idx}
            className="snap-center shrink-0 w-full md:w-[85%] lg:w-[80%] h-[320px] sm:h-[420px] relative rounded-2xl overflow-hidden bg-neutral-100 shadow-sm"
          >
            <img
              src={imgUrl}
              alt={`${altPrefix} - Foto ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            {images.length > 1 && (
              <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                {idx + 1} / {images.length}
              </span>
            )}
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <button
          type="button"
          aria-label="Siguiente imagen"
          onClick={(e) => {
            const container = e.currentTarget.parentElement?.querySelector('.carousel-container');
            if (container) container.scrollBy({ left: 350, behavior: 'smooth' });
          }}
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-800 items-center justify-center shadow-lg backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}

export default function BoatDetailClient({ item, lang }: { item: CatalogItem; lang: "es" | "en" }) {
  const isLodge = item.category === "IslandLodge";
  const categoryLabel =
    item.category === "Catamaran"
      ? "Catamarán"
      : item.category === "Sailboat"
      ? "Velero"
      : "Hospedaje en Isla";

  const hasPromo = item.hasDiscount && item.pricing?.discountPricePerPersonPerDay;
  const effectivePrice = hasPromo
    ? item.pricing.discountPricePerPersonPerDay
    : item.pricing?.basePricePerPersonPerDay || 0;

  const boatAllPhotos = [
    ...(item.boatCoverPhoto ? [item.boatCoverPhoto] : []),
    ...(item.boatGalleryPhotos || []),
  ];

  const whatsappUrl = `https://wa.me/50761234567?text=${encodeURIComponent(
    `¡Hola! Quisiera consultar disponibilidad para: ${item.boatName} (ID: ${item.id})`
  )}`;

  return (
    <main className="min-h-screen bg-neutral-50/60 pb-20 pt-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-neutral-500">
          <Link href="/charters" className="hover:text-emerald-900 transition">
            Catálogo
          </Link>
          <span>/</span>
          <span className="text-neutral-900 font-semibold">{item.boatName}</span>
        </nav>

        {/* Encabezado */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-emerald-900 text-white rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5">
              {isLodge ? <Home className="w-3 h-3 text-amber-400" /> : <Anchor className="w-3 h-3" />}
              {categoryLabel}
            </span>

            {item.location?.[lang] && (
              <span className="flex items-center gap-1 text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <MapPin className="w-3 h-3 text-emerald-600" />
                {item.location[lang]}
              </span>
            )}

            {hasPromo && (
              <span className="flex items-center gap-1 text-xs font-bold text-white bg-red-600 px-2.5 py-1 rounded-full">
                <Tag className="w-3 h-3" />
                OFERTA ESPECIAL
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
            {item.boatName}
          </h1>

          {item.featureBadge?.[lang] && (
            <p className="text-sm sm:text-base font-bold text-emerald-800 uppercase tracking-wider">
              {item.featureBadge[lang]}
            </p>
          )}
        </div>

        {/* Carrusel Principal */}
        {boatAllPhotos.length > 0 && (
          <ImageCarousel images={boatAllPhotos} altPrefix={item.boatName} />
        )}

        {/* Grid Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            
            {/* Especificaciones */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-emerald-800 shrink-0" />
                <div>
                  <span className="block text-[11px] text-neutral-500 uppercase font-bold">Capacidad</span>
                  <span className="text-sm font-semibold text-neutral-900">Hasta {item.maxGuests} huéspedes</span>
                </div>
              </div>

              {item.specs?.cabins && (
                <div className="flex items-center gap-3">
                  <Bed className="w-6 h-6 text-emerald-800 shrink-0" />
                  <div>
                    <span className="block text-[11px] text-neutral-500 uppercase font-bold">Camarotes</span>
                    <span className="text-sm font-semibold text-neutral-900">{item.specs.cabins} Camarotes</span>
                  </div>
                </div>
              )}

              {item.captain?.name && (
                <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                  <ShieldCheck className="w-6 h-6 text-emerald-800 shrink-0" />
                  <div>
                    <span className="block text-[11px] text-neutral-500 uppercase font-bold">
                      {isLodge ? "Anfitrión" : "Capitán"}
                    </span>
                    <span className="text-sm font-semibold text-neutral-900">{item.captain.name}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Capitán */}
            {item.captain && (item.captain.name || item.captain.description?.[lang]) && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  {item.captain.photoUrl && (
                    <div className="shrink-0">
                      <img
                        src={item.captain.photoUrl}
                        alt={item.captain.name || "Capitán"}
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-emerald-800/10 shadow-md"
                      />
                    </div>
                  )}
                  <div className="text-center sm:text-left space-y-1">
                    {item.captain.name && (
                      <h3 className="text-xl font-serif font-bold text-neutral-900">{item.captain.name}</h3>
                    )}
                    {item.captain.role?.[lang] && (
                      <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                        {item.captain.role[lang]}
                      </p>
                    )}
                    {item.captain.languages && item.captain.languages.length > 0 && (
                      <div className="flex items-center justify-center sm:justify-start gap-1 text-xs text-neutral-500 pt-1">
                        <Globe2 className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{item.captain.languages.join(", ")}</span>
                      </div>
                    )}
                  </div>
                </div>

                {item.captain.description?.[lang] && (
                  <p className="text-neutral-600 leading-relaxed text-sm pt-2 border-t border-neutral-100">
                    {item.captain.description[lang]}
                  </p>
                )}
              </div>
            )}

            {/* Descripción */}
            {(item.boatLongDescription?.[lang] || item.boatDescription?.[lang]) && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm space-y-3">
                <h2 className="text-xl font-serif font-semibold text-neutral-900">
                  {isLodge ? "Acerca de este hospedaje" : "Acerca de la embarcación"}
                </h2>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                  {item.boatLongDescription?.[lang] || item.boatDescription[lang]}
                </p>
              </div>
            )}

            {/* Experiencia y Actividades */}
            {item.activities && (item.activities.description?.[lang] || (item.activities.photoUrls && item.activities.photoUrls.length > 0)) && (
              <div className="bg-gradient-to-br from-emerald-900/5 via-white to-amber-500/5 p-6 sm:p-8 rounded-2xl border border-emerald-950/10 shadow-sm space-y-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-emerald-900">
                    <Sparkles className="w-5 h-5 text-amber-600 fill-amber-500" />
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">Tu Aventura en San Blas</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900">
                    La Experiencia que Vivirás a Bordo
                  </h2>
                </div>

                {item.activities.description?.[lang] && (
                  <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                    {item.activities.description[lang]}
                  </p>
                )}

                {item.activities.photoUrls && item.activities.photoUrls.length > 0 && (
                  <div className="pt-2">
                    <ImageCarousel images={item.activities.photoUrls} altPrefix="Experiencia de actividades" />
                  </div>
                )}
              </div>
            )}

            {/* Gastronomía */}
            {item.dining && (item.dining.description?.[lang] || item.dining.photoUrl) && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-emerald-800" />
                  <h2 className="text-xl font-serif font-semibold text-neutral-900">Gastronomía a Bordo</h2>
                </div>

                {item.dining.description?.[lang] && (
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {item.dining.description[lang]}
                  </p>
                )}

                {item.dining.photoUrl && (
                  <div className="pt-2">
                    <ImageCarousel images={[item.dining.photoUrl]} altPrefix="Gastronomía" />
                  </div>
                )}
              </div>
            )}

            {/* Tarifas */}
            {item.pricing?.htmlTableContent?.[lang] && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm space-y-4">
                <h2 className="text-xl font-serif font-semibold text-neutral-900">Estructura de Tarifas</h2>
                <div className="w-full overflow-x-auto rounded-xl border border-neutral-200/60 p-2 sm:p-4 bg-neutral-50/50">
                  <div 
                    className="prose prose-sm max-w-none 
                               [&_table]:w-full [&_table]:min-w-[480px] [&_table]:border-collapse 
                               [&_th]:bg-emerald-900 [&_th]:text-white [&_th]:p-2.5 [&_th]:text-left [&_th]:text-xs [&_th]:font-semibold
                               [&_td]:p-2.5 [&_td]:border-b [&_td]:border-neutral-200 [&_td]:text-xs [&_td]:text-neutral-700
                               [&_tr:nth-child(even)]:bg-white"
                    dangerouslySetInnerHTML={{ __html: item.pricing.htmlTableContent[lang] }} 
                  />
                </div>
              </div>
            )}

            {/* Inclusiones */}
            {item.includes && item.includes.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm space-y-4">
                <h2 className="text-xl font-serif font-semibold text-neutral-900">
                  {isLodge ? "¿Qué incluye la estadía?" : "¿Qué incluye el charter?"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.includes.map((inc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{typeof inc === "string" ? inc : inc[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* No Incluido */}
            {item.excludes && item.excludes.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm space-y-4">
                <h2 className="text-xl font-serif font-semibold text-neutral-900">No Incluido</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.excludes.map((exc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{typeof exc === "string" ? exc : exc[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-lg space-y-6">
              <div>
                <span className="text-xs text-neutral-500 font-medium">Precio estimado desde</span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-3xl font-bold text-emerald-950">${effectivePrice}</span>
                  {hasPromo && item.pricing?.basePricePerPersonPerDay && (
                    <span className="text-sm text-neutral-400 line-through">${item.pricing.basePricePerPersonPerDay}</span>
                  )}
                  <span className="text-xs font-semibold text-neutral-600">USD / día</span>
                </div>
              </div>

              <div className="space-y-3 border-y border-neutral-100 py-4 text-xs text-neutral-600">
                <div className="flex justify-between">
                  <span>Modalidad:</span>
                  <span className="font-semibold text-neutral-900">
                    {item.isPrivate ? "Privado / Exclusivo" : "Opción Compartida"}
                  </span>
                </div>

                {item.captain?.name && (
                  <div className="flex justify-between">
                    <span>{isLodge ? "Anfitrión:" : "Capitán:"}</span>
                    <span className="font-semibold text-neutral-900">{item.captain.name}</span>
                  </div>
                )}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-900 hover:bg-emerald-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all duration-200"
              >
                <span>Consultar Fechas por WhatsApp</span>
              </a>

              <p className="text-[10px] text-center text-neutral-400">
                Sin cargos ocultos. Respuesta directa del equipo en menos de 1 hora.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
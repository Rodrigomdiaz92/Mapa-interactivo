import { notFound } from "next/navigation";
import { INITIAL_CATALOG_ITEMS } from "@/data/catalogData";
import { Users, Bed, ShieldCheck, MapPin, CheckCircle2, Home, Anchor } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function BoatDetailPage({ params }: PageProps) {
  // Manejo dinámico de params para compatibilidad con Next.js 13, 14 y 15
  const resolvedParams = params instanceof Promise ? await params : params;
  const { id } = resolvedParams;

  // 1. Buscar la embarcación u hospedaje por ID
  const item = INITIAL_CATALOG_ITEMS.find((el) => el.id === id);

  // 2. Si el ID no existe en los datos, lanza la página 404 automática de Next.js
  if (!item) {
    notFound();
  }

  const isLodge = item.category === "IslandLodge";

  // Textos adaptativos según si es Barco o Hospedaje en Isla
  const categoryLabel =
    item.category === "Catamaran"
      ? "Catamarán"
      : item.category === "Sailboat"
      ? "Velero"
      : "Hospedaje en Isla";

  const hostTitle = isLodge ? "Anfitrión" : "Tripulación / Capitán";
  const aboutTitle = isLodge ? "Acerca de este hospedaje" : "Acerca de esta embarcación";
  const includesTitle = isLodge ? "¿Qué incluye la estadía?" : "¿Qué incluye el charter?";

  const defaultIncludes = isLodge
    ? [
        "Pensión completa (desayuno, almuerzo y cena con pesca del día)",
        "Alojamiento en cabaña / bungalow con vista al mar",
        "Uso de equipos de snorkel y kayak en la isla",
        "Atención personalizada por la comunidad local",
        "Traslados en lancha hacia arrecifes cercanos",
      ]
    : [
        "Pensión completa (3 comidas diarias con mariscos frescos)",
        "Bebidas y refrescos a bordo",
        "Equipos de Snorkel y Paddleboards",
        "Capitán experimentado e itinerario a medida",
        "Traslados dinghy a las islas y playas",
      ];

  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
    `¡Hola! Quisiera consultar disponibilidad para: ${item.name} (${item.id})`
  )}`;

  return (
    <main className="min-h-screen bg-neutral-50/60 pb-20 pt-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navegación superior / Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-neutral-500">
          <Link href="/charters" className="hover:text-emerald-900 transition">
            Hospedajes
          </Link>
          <span>/</span>
          <span className="text-neutral-900 font-semibold">{item.name}</span>
        </nav>

        {/* Encabezado Principal */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-emerald-900 text-white rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5">
              {isLodge ? <Home className="w-3 h-3 text-amber-400" /> : <Anchor className="w-3 h-3" />}
              {categoryLabel}
            </span>
            <span className="flex items-center gap-1 text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <MapPin className="w-3 h-3 text-emerald-600" />
              Islas San Blas, Panamá
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
            {item.name}
          </h1>
          <p className="text-sm sm:text-base font-bold text-emerald-800 uppercase tracking-wider">
            {item.subtitle}
          </p>
        </div>

        {/* Galería de Fotos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[350px] sm:h-[480px] rounded-3xl overflow-hidden shadow-sm">
          <div className="md:col-span-2 relative h-full">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:flex flex-col gap-4 h-full">
            <div className="relative h-1/2 bg-neutral-200 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
                alt="Vista interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-1/2 bg-neutral-200 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"
                alt="Vista al mar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Detalles e Información + Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Detalles e Inclusiones */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Tarjetas rápidas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-emerald-800" />
                <div>
                  <span className="block text-[11px] text-neutral-500 uppercase font-bold">Capacidad</span>
                  <span className="text-sm font-semibold text-neutral-900">Hasta {item.maxGuests} huéspedes</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Bed className="w-6 h-6 text-emerald-800" />
                <div>
                  <span className="block text-[11px] text-neutral-500 uppercase font-bold">Distribución</span>
                  <span className="text-sm font-semibold text-neutral-900">{item.featureBadge}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-6 h-6 text-emerald-800" />
                <div>
                  <span className="block text-[11px] text-neutral-500 uppercase font-bold">{hostTitle}</span>
                  <span className="text-sm font-semibold text-neutral-900">{item.captainOrHost}</span>
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm space-y-4">
              <h2 className="text-xl font-serif font-semibold text-neutral-900">{aboutTitle}</h2>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </div>

            {/* Inclusiones */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm space-y-4">
              <h2 className="text-xl font-serif font-semibold text-neutral-900">{includesTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {defaultIncludes.map((inc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Widget Lateral Sticky de Reserva */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-lg space-y-6">
              <div>
                <span className="text-xs text-neutral-500 font-medium">Precio estimado desde</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-bold text-emerald-950">${item.pricePerPersonPerDay}</span>
                  <span className="text-sm font-semibold text-neutral-600">USD / día / persona</span>
                </div>
              </div>

              <div className="space-y-3 border-y border-neutral-100 py-4 text-xs text-neutral-600">
                <div className="flex justify-between">
                  <span>Modalidad:</span>
                  <span className="font-semibold text-neutral-900">
                    {item.isPrivate ? "Privado / Exclusivo" : "Opción Compartida"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{hostTitle}:</span>
                  <span className="font-semibold text-neutral-900">{item.captainOrHost}</span>
                </div>
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
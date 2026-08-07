import { notFound } from "next/navigation";
import { INITIAL_SALE_ITEMS, CategoryVentaType } from "@/data/saleData";
import { MapPin, Calendar, Ruler, ShieldCheck, CheckCircle2, Home, Anchor, Compass } from "lucide-react";
import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function SaleDetailPage({ params }: PageProps) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const { id } = resolvedParams;

  const item = INITIAL_SALE_ITEMS.find((el) => el.id === id);

  if (!item) {
    notFound();
  }

  const isLodge = item.category === "IslandLodge";

  const getCategoryLabel = (cat: CategoryVentaType) => {
    switch (cat) {
      case "Catamaran": return "Catamarán";
      case "Sailboat": return "Velero";
      case "Monohull": return "Monocasco";
      case "Trimaran": return "Trimarán";
      case "IslandLodge": return "Propiedad Insular";
      default: return cat;
    }
  };

  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
    `¡Hola! Quisiera recibir la ficha completa e información para la compra de: ${item.title} (${item.id})`
  )}`;

  return (
    <main className="min-h-screen bg-neutral-50/60 pb-20 pt-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-neutral-500">
          <Link href="/boatsonsale" className="hover:text-slate-900 transition">
            Catálogo de Venta
          </Link>
          <span>/</span>
          <span className="text-neutral-900 font-semibold">{item.title}</span>
        </nav>

        {/* Header */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-slate-900 text-white rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5">
              {isLodge ? <Home className="w-3 h-3 text-amber-400" /> : <Anchor className="w-3 h-3" />}
              {getCategoryLabel(item.category)}
            </span>
            <span className="flex items-center gap-1 text-xs font-medium text-slate-800 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
              <MapPin className="w-3 h-3 text-slate-600" />
              {item.location}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
            {item.title}
          </h1>
          <p className="text-sm sm:text-base font-bold text-slate-700 uppercase tracking-wider">
            {item.subtitle}
          </p>
        </div>

        {/* Galería de Fotos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[350px] sm:h-[480px] rounded-3xl overflow-hidden shadow-sm">
          <div className="md:col-span-2 relative h-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:flex flex-col gap-4 h-full">
            <div className="relative h-1/2 bg-neutral-200 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
                alt="Vista interior o detalles"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-1/2 bg-neutral-200 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"
                alt="Vista en navegación o exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Layout Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 space-y-8">
            
            {/* Especificaciones Rápidas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm">
              {item.lengthFT && (
                <div className="flex items-center gap-3">
                  <Ruler className="w-6 h-6 text-slate-800" />
                  <div>
                    <span className="block text-[11px] text-neutral-500 uppercase font-bold">Eslora</span>
                    <span className="text-sm font-semibold text-neutral-900">{item.lengthFT} FT</span>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-slate-800" />
                <div>
                  <span className="block text-[11px] text-neutral-500 uppercase font-bold">Año</span>
                  <span className="text-sm font-semibold text-neutral-900">{item.year}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-6 h-6 text-slate-800" />
                <div>
                  <span className="block text-[11px] text-neutral-500 uppercase font-bold">Estado</span>
                  <span className="text-sm font-semibold text-neutral-900">{item.featureBadge}</span>
                </div>
              </div>
            </div>

            {/* Ficha Técnica Extendida (si existe) */}
            {item.specifications && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm space-y-4">
                <h2 className="text-xl font-serif font-semibold text-neutral-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-slate-800" />
                  <span>Ficha Técnica y Dimensiones</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                  {item.specifications.beamFT && (
                    <div className="p-3 bg-neutral-50 rounded-xl">
                      <span className="text-neutral-400 block text-[10px] uppercase font-bold">Manga (Width)</span>
                      <span className="font-semibold text-neutral-800">{item.specifications.beamFT} ft</span>
                    </div>
                  )}
                  {item.specifications.draftFT && (
                    <div className="p-3 bg-neutral-50 rounded-xl">
                      <span className="text-neutral-400 block text-[10px] uppercase font-bold">Calado (Draft)</span>
                      <span className="font-semibold text-neutral-800">{item.specifications.draftFT} ft</span>
                    </div>
                  )}
                  {item.specifications.cabins && (
                    <div className="p-3 bg-neutral-50 rounded-xl">
                      <span className="text-neutral-400 block text-[10px] uppercase font-bold">Cabinas</span>
                      <span className="font-semibold text-neutral-800">{item.specifications.cabins}</span>
                    </div>
                  )}
                  {item.specifications.engine && (
                    <div className="p-3 bg-neutral-50 rounded-xl col-span-2 sm:col-span-1">
                      <span className="text-neutral-400 block text-[10px] uppercase font-bold">Motorización</span>
                      <span className="font-semibold text-neutral-800">{item.specifications.engine}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Descripción */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm space-y-4">
              <h2 className="text-xl font-serif font-semibold text-neutral-900">Descripción General</h2>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </div>

            {/* Lo que incluye la compra / inspección */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm space-y-4">
              <h2 className="text-xl font-serif font-semibold text-neutral-900">Servicios e Inspección Incluida</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Inspección técnica de casco y motor pre-compra",
                  "Historial de mantenimiento verificado",
                  "Asesoría en traspaso de bandera y registro",
                  "Prueba de mar coordinada en ubicación de origen",
                ].map((inc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Widget Lateral Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-lg space-y-6">
              <div>
                <span className="text-xs text-neutral-500 font-medium">Precio de Venta</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-bold text-slate-950">${item.priceUSD.toLocaleString()}</span>
                  <span className="text-sm font-semibold text-neutral-600">USD</span>
                </div>
              </div>

              <div className="space-y-3 border-y border-neutral-100 py-4 text-xs text-neutral-600">
                <div className="flex justify-between">
                  <span>Ubicación actual:</span>
                  <span className="font-semibold text-neutral-900">{item.location}</span>
                </div>
                <div className="flex justify-between">
                  <span>Categoría:</span>
                  <span className="font-semibold text-neutral-900">{getCategoryLabel(item.category)}</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-slate-900 hover:bg-slate-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all duration-200"
              >
                <span>Solicitar Ficha y Agendar Visita</span>
              </a>

              <p className="text-[10px] text-center text-neutral-400">
                Respuesta directa del broker en menos de 1 hora.
              </p>
            </div>
          </div>

        </div>

      </div>
      <WhatsAppButton 
              phoneNumber="+50766302038" 
              message="(BS)Hola, quisiera más información sobre este barco."
              tooltipText="Te ayudamos a elegir tu barco ideal.¡Escríbenos!"
            />
    </main>
  );
}
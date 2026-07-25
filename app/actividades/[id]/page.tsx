import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, MessageCircle, Anchor, Calendar, Compass } from "lucide-react";
import { EXPERIENCES_DATA } from "@/data/experiencesData";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generación de rutas estáticas para Next.js (SSG)
export async function generateStaticParams() {
  return EXPERIENCES_DATA.map((item) => ({
    id: item.slug || item.id,
  }));
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { id } = await params;

  // Buscar por slug o por id
  const experience = EXPERIENCES_DATA.find(
    (item) => item.slug === id || item.id === id
  );

  if (!experience) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-50/50 pb-24 font-sans">
      {/* Botón Volver */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <Link
          href="/#experiencias"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a Experiencias</span>
        </Link>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Banner / Imagen Principal */}
        <div className="relative w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm">
          <img
            src={experience.imageUrl}
            alt={experience.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
            {experience.subtitle && (
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-400 block mb-2">
                {experience.subtitle}
              </span>
            )}
            <h1 className="text-2xl sm:text-4xl font-serif font-semibold tracking-tight leading-tight">
              {experience.title}
            </h1>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Detalles & Descripción Extendida */}
          <div className="lg:col-span-2 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
                Resumen de la Actividad
              </h2>
              <p className="text-base sm:text-lg text-slate-800 font-serif leading-relaxed">
                {experience.description}
              </p>
            </div>

            <hr className="border-neutral-100" />

            {experience.longDescription && (
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                  ¿En qué consiste?
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed whitespace-pre-line">
                  {experience.longDescription}
                </p>
              </div>
            )}

            {/* Puntos Destacados */}
            <div className="pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
                Qué incluye esta vivencia
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Equipo & logística incluidos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Acompañamiento por tripulación</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Adaptable según clima y ruta</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Apto para todas las edades</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tarjeta Lateral de Acción / Reserva */}
          <aside className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm space-y-6 lg:sticky lg:top-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                Modalidad
              </span>
              <p className="text-base font-serif font-semibold text-slate-900">
                Incluido en tu itinerario de charter
              </p>
            </div>

            <div className="space-y-3 text-xs text-neutral-600 border-t border-neutral-100 pt-4">
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-slate-700" />
                <span>Disponible en veleros y catamaranes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Anchor className="w-4 h-4 text-slate-700" />
                <span>Navegación por el archipiélago de San Blas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-slate-700" />
                <span>Coordinación diaria a bordo</span>
              </div>
            </div>

            <a
              href="https://wa.me/tu-numero-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consultar Disponibilidad</span>
            </a>
          </aside>
        </div>
      </article>
    </main>
  );
}
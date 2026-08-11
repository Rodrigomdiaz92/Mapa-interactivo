"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Tag,
  Calendar,
  Compass,
  Users,
  Anchor,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const InstagramEmbedWrapper = dynamic(
  () => import("@/components/navegacionynaturaleza/InstagramEmbedWrapper"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[480px] bg-slate-900 animate-pulse rounded-2xl border border-slate-800" />
    ),
  }
);

export interface DestacadoBarcoProps {
  id: string;
  titulo: string;
  subtitulo?: string;
  precio: string;
  ubicacion: string;
  anio: number;
  eslora: string;
  capacidad: string;
  imagenes?: string[];
  destacados?: string[];
  badgeText?: string;
  instagramReelUrl?: string;
  whatsappMessage?: string;
}

export default function DestacadoBarcoReelWidget({
  titulo,
  subtitulo = "Oportunidad Exclusiva",
  precio,
  ubicacion,
  anio,
  eslora,
  capacidad,
  imagenes = [],
  destacados = [],
  badgeText = "Destacado",
  instagramReelUrl,
  whatsappMessage,
}: DestacadoBarcoProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const prevSlide = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentImgIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  const defaultMessage = `Hola Sailing the World, me interesa recibir más información sobre: ${titulo}`;
  const encodedWhatsappMsg = encodeURIComponent(whatsappMessage || defaultMessage);
  const whatsappUrl = `https://wa.me/50760000000?text=${encodedWhatsappMsg}`;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-white">
        
        {/* Fondo decorativo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* LADO IZQUIERDO: Reel de Instagram O Carrusel de Fotos */}
          <div className="lg:col-span-5 relative bg-slate-950 flex items-center justify-center min-h-[400px] sm:min-h-[480px] p-2 overflow-hidden">
            {instagramReelUrl ? (
              <div className="w-full max-w-[328px] my-auto">
                <InstagramEmbedWrapper url={instagramReelUrl} />
              </div>
            ) : imagenes.length > 0 ? (
              <div className="relative w-full h-full min-h-[400px]">
                <Image
                  src={imagenes[currentImgIndex]}
                  alt={titulo}
                  fill
                  className="object-cover"
                />
                {imagenes.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div className="text-slate-500 text-sm">Sin multimedia disponible</div>
            )}
          </div>

          {/* LADO DERECHO: Información Dinámica */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-full text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{badgeText}</span>
                </span>
                
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <Anchor className="w-3.5 h-3.5 text-emerald-400" />
                  {ubicacion}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {titulo}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {subtitulo}
                </p>
              </div>
            </div>

            {/* Grid de Specs */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 py-3 border-y border-slate-800">
              <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 text-center sm:text-left">
                <span className="text-[10px] uppercase font-bold text-slate-400 block flex items-center justify-center sm:justify-start gap-1">
                  <Calendar className="w-3 h-3 text-emerald-400" /> Año
                </span>
                <span className="text-sm font-bold text-slate-100 mt-0.5 block">
                  {anio}
                </span>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 text-center sm:text-left">
                <span className="text-[10px] uppercase font-bold text-slate-400 block flex items-center justify-center sm:justify-start gap-1">
                  <Compass className="w-3 h-3 text-emerald-400" /> Eslora
                </span>
                <span className="text-sm font-bold text-slate-100 mt-0.5 block">
                  {eslora}
                </span>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 text-center sm:text-left">
                <span className="text-[10px] uppercase font-bold text-slate-400 block flex items-center justify-center sm:justify-start gap-1">
                  <Users className="w-3 h-3 text-emerald-400" /> Capacidad
                </span>
                <span className="text-sm font-bold text-slate-100 mt-0.5 block">
                  {capacidad}
                </span>
              </div>
            </div>

            {/* Puntos destacados */}
            {destacados.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Puntos Destacados
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {destacados.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Precio y WhatsApp CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Precio
                </span>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400">
                  {precio}
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-emerald-950/50 border border-emerald-600/40 transition-all hover:scale-[1.02] active:scale-[0.98] group shrink-0"
              >
                <Tag className="w-4 h-4 text-amber-200" />
                <span>Consultar Embarcación</span>
                <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
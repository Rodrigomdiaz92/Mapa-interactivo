"use client";

import Link from "next/link";
import { Anchor, Calendar, Star, ChevronRight } from "lucide-react";

interface HeroVideoProps {
  lang?: "es" | "en";
  videoUrl?: string;
  posterUrl?: string;
}

export default function HeroVideo({
  lang = "es",
  videoUrl = "/contenido/experiencias/videos/1.mp4",
  posterUrl = "/contenido/experiencias/explorar/1.jpg",
}: HeroVideoProps) {
  const isEs = lang === "es";

  const content = {
    badge: isEs ? "ISLAS • SELVA • AVENTURAS ECOLÓGICAS" : "ISLANDS • JUNGLE • ECO ADVENTURES",
    title: isEs ? "Siente el verdadero San Blas" : "Sail the Real San Blas",
    description: isEs
      ? "Navega por el archipiélago más virgen del Caribe panameño a bordo de nuestros catamaranes y veleros exclusivos."
      : "Navigate through the most pristine archipelago in the Panamanian Caribbean aboard our exclusive catamarans and sailboats.",
    btnReserve: isEs ? "Reservar Experiencia" : "Book Experience",
    btnDetails: isEs ? "Ver Embarcaciones" : "Yacht & Price",
    reviewsText: isEs ? "Más de 135 reseñas de 5 estrellas" : "137 five-star reviews",
  };

  return (
    <section className="relative w-full h-[85vh] min-h-[550px] max-h-[850px] flex items-center justify-center overflow-hidden bg-neutral-900 text-white">
      {/* Video de fondo con fallback poster */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={posterUrl}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      >
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>

      {/* Capa de degradado (Overlay) para asegurar legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

      {/* Contenido flotante principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-700">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 backdrop-blur-md text-[11px] sm:text-xs font-bold tracking-widest text-emerald-300 uppercase shadow-lg">
          <Anchor className="w-3.5 h-3.5 text-amber-400" />
          <span>{content.badge}</span>
        </div>

        {/* Título Principal estilo Serif Náutico */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white drop-shadow-md max-w-4xl mx-auto leading-tight">
          {content.title}
        </h1>

        {/* Descripción corta */}
        <p className="text-base sm:text-lg lg:text-xl text-neutral-200 font-light max-w-2xl mx-auto drop-shadow leading-relaxed">
          {content.description}
        </p>

        {/* Badge opcional de valoración (estilo imagen de referencia) */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full border border-white/10 text-xs text-amber-300 font-medium">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <span className="text-white/90">{content.reviewsText}</span>
        </div>

        {/* Botones de Acción */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Botón Principal: Reservar Experiencia */}
          <Link
            href="/reserva"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl hover:shadow-emerald-900/30 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>{content.btnReserve}</span>
          </Link>

          {/* Botón Secundario: Ver Detalle / Embarcaciones */}
          <Link
            href="/charters"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider rounded-xl backdrop-blur-md border border-white/20 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>{content.btnDetails}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Sombra sutil inferior para conectar suavemente con la sección siguiente */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-neutral-50/60 to-transparent pointer-events-none" />
    </section>
  );
}
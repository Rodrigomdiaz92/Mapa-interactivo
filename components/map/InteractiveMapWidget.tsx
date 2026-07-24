"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Compass, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Island } from "@/types/island";
import SidePanel from "../panel/SidePanel";

const MapCanvas = dynamic(() => import("./MapCanvas"), {
  ssr: false,
});

interface InteractiveMapWidgetProps {
  /** Título principal de la sección promocional */
  title?: string;
  /** Subtítulo destacador (ej. "Guna Yala", "San Blas") */
  highlightTitle?: string;
  /** Descripción corta o texto promocional */
  description?: string;
  /** Texto para la insignia / badge superior */
  badgeText?: string;
  /** Texto del botón CTA */
  buttonText?: string;
  /** Enlace al que redirige el botón CTA */
  buttonHref?: string;
  /** Posición del mapa en pantallas de escritorio */
  mapPosition?: "right" | "left";
}

export const InteractiveMapWidget: React.FC<InteractiveMapWidgetProps> = ({
  title = "Descubre el Paraíso desde",
  highlightTitle = "El Mapa",
  description = "Explora los cayos más exclusivos de San Blas en tiempo real. Selecciona una isla para conocer itinerarios y disponibilidad para tu próxima aventura.",
  badgeText = "Experiencia Interactiva",
  buttonText = "Ver todos los destinos",
  buttonHref = "#flota",
  mapPosition = "right",
}) => {
  const [selectedIsland, setSelectedIsland] = useState<Island | null>(null);

  const isMapLeft = mapPosition === "left";

  return (
    <section className="w-full my-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gradient-to-br from-[#0F1E2E] to-[#182C40] rounded-3xl shadow-2xl text-white border border-slate-700/50 overflow-hidden relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Bloque de Texto Promocional */}
          <div
            className={`lg:col-span-5 flex flex-col space-y-5 ${
              isMapLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {/* Badge Promocional */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full w-fit text-xs font-semibold tracking-wider uppercase border border-emerald-500/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badgeText}</span>
            </div>

            {/* Encabezado */}
            <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight text-slate-100">
              {title} <span className="text-emerald-400">{highlightTitle}</span>
            </h2>

            {/* Descripción */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {description}
            </p>

            {/* Ayuda de interacción */}
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
              <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Toca cualquier punto del mapa para ver detalles y fotos.</span>
            </div>

            {/* Botón CTA opcional */}
            {buttonHref && (
              <div className="pt-2">
                <a
                  href={buttonHref}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-sm rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <span>{buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {/* Bloque del Mapa Interactivo (Caja delimitada) */}
          <div
            className={`lg:col-span-7 relative w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden shadow-inner border border-slate-700/80 bg-slate-900/80 z-0 ${
              isMapLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative w-full h-full z-0 overflow-hidden">
              <MapCanvas
                selectedIsland={selectedIsland}
                onSelectIsland={setSelectedIsland}
              />

              <SidePanel
                island={selectedIsland}
                onClose={() => setSelectedIsland(null)}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InteractiveMapWidget;
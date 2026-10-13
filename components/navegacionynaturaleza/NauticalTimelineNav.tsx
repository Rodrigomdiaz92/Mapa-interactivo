"use client";

import React, { useRef, useState } from "react";
import { Compass, Anchor, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export interface TimelineMilestone {
  id: string;
  label: string;
  yearOrTag?: string;
}

interface NauticalTimelineNavProps {
  title?: string;
  milestones?: TimelineMilestone[];
  navbarOffsetClass?: string; 
  onSelectMilestone?: (id: string) => void;
}

const DEFAULT_MILESTONES: TimelineMilestone[] = [
  { id: "origen", label: "Origen", yearOrTag: "Origen" },
  { id: "venezuela", label: "Venezuela", yearOrTag: "Inicios" },
  { id: "zarpe", label: "Zarpe", yearOrTag: "Desafío" },
  { id: "navegando", label: "Navegando", yearOrTag: "Nuevo Destino" },
  { id: "curazao", label: "Curazao", yearOrTag: "Curazao" },
  { id: "canal", label: "Canal", yearOrTag: "Panamá" },
  { id: "cruce", label: "Pacífico", yearOrTag: "Cruce" },
  { id: "polinesia", label: "Polinesia Francesa", yearOrTag: "🤩" },
];

export default function NauticalTimelineNav({
  title = "Línea de Tiempo y Trayectoria",
  milestones = DEFAULT_MILESTONES,
  // Ajuste de altura top-[108px] para móvil y sm:top-20 para pantallas más grandes
  navbarOffsetClass = "top-[108px] sm:top-20", 
  onSelectMilestone,
}: NauticalTimelineNavProps) {
  const [activeId, setActiveId] = useState<string>(milestones[0]?.id || "");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (id: string) => {
    setActiveId(id);
    if (onSelectMilestone) {
      onSelectMilestone(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const scrollTimeline = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav 
      className={`w-full bg-white/95 backdrop-blur-md py-2.5 px-3 sm:px-6 font-sans sticky z-20 border-b border-slate-200/80 shadow-sm transition-all duration-200 ${navbarOffsetClass}`}
    >
      <div className="max-w-7xl mx-auto space-y-1">
        
        {/* Cabecera miniatura en desktop */}
        <div className="hidden md:flex items-center justify-between border-b border-slate-100 pb-1.5 mb-1">
          <div className="flex items-center gap-2 text-sky-800 font-serif text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            <span>{title}</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => scrollTimeline("left")}
              className="p-1 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => scrollTimeline("right")}
              className="p-1 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Contenedor horizontal con margen superior en móvil */}
        <div className="relative w-full pt-1 sm:pt-0">
          <div 
            ref={scrollContainerRef}
            className="flex items-start gap-8 sm:gap-12 overflow-x-auto scrollbar-none relative px-4 py-1 min-w-full"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* LÍNEA CONTINUA DE CONEXIÓN */}
            <div className="absolute left-8 right-8 h-[2px] bg-slate-200 z-0 top-[31px] sm:top-[35px]" />

            {milestones.map((item) => {
              const isActive = activeId === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className="group flex flex-col items-center flex-shrink-0 focus:outline-none relative z-10"
                >
                  {item.yearOrTag ? (
                    <span className={`text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider mb-1 transition-colors ${
                      isActive ? "text-emerald-700 font-bold" : "text-slate-400 group-hover:text-slate-600"
                    }`}>
                      {item.yearOrTag}
                    </span>
                  ) : (
                    <span className="h-4" />
                  )}

                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                      isActive
                        ? "bg-emerald-500 text-white scale-105 ring-2 ring-emerald-200"
                        : "bg-white text-slate-500 border border-slate-300 group-hover:bg-slate-50 group-hover:text-slate-800"
                    }`}
                  >
                    {isActive ? (
                      <Anchor className="w-3.5 h-3.5" />
                    ) : (
                      <MapPin className="w-3 h-3" />
                    )}
                  </div>

                  <span
                    className={`text-[11px] sm:text-xs font-medium mt-1 whitespace-nowrap transition-colors ${
                      isActive
                        ? "text-slate-900 font-bold"
                        : "text-slate-600 group-hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </nav>
  );
}
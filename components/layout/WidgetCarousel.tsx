"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";

interface WidgetCarouselProps {
  /** Título opcional para la sección */
  title?: string;
  /** Subtítulo o badge */
  badgeText?: string;
  /** Tiempo en milisegundos para el autoplay (predeterminado: 2000ms = 2s) */
  autoPlayInterval?: number;
  /** Lista de componentes/widgets a renderizar */
  children: React.ReactNode[];
}

export default function WidgetCarousel({
  title,
  badgeText = "Sailing the World",
  autoPlayInterval = 2000,
  children,
}: WidgetCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = React.Children.count(children);

  // Función para desplazarse a un índice específico
  const scrollToIndex = useCallback(
    (index: number) => {
      if (scrollRef.current) {
        const width = scrollRef.current.clientWidth;
        scrollRef.current.scrollTo({
          left: width * index,
          behavior: "smooth",
        });
        setCurrentIndex(index);
      }
    },
    []
  );

  const nextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % totalSlides;
    scrollToIndex(nextIndex);
  }, [currentIndex, totalSlides, scrollToIndex]);

  const prevSlide = useCallback(() => {
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    scrollToIndex(prevIndex);
  }, [currentIndex, totalSlides, scrollToIndex]);

  // Autoplay de 2 segundos
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [nextSlide, isPaused, totalSlides, autoPlayInterval]);

  // Detectar scroll manual para sincronizar el índice activo
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const newIndex = Math.round(scrollLeft / clientWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  return (
    <section 
      className="w-full font-sans my-8 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full space-y-4">
        
        {/* Encabezado Opcional */}
        {(title || badgeText) && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end justify-between border-b border-slate-200/80 pb-4">
            <div className="space-y-1">
              {badgeText && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold uppercase tracking-wider border border-sky-200">
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>{badgeText}</span>
                </div>
              )}
              {title && (
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                  {title}
                </h2>
              )}
            </div>

            {/* Controles laterales */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition active:scale-95 shadow-sm"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition active:scale-95 shadow-sm"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Carrusel Full Width */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-none py-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {React.Children.map(children, (child, idx) => (
            <div
              key={idx}
              className="snap-center flex-shrink-0 w-full min-w-full px-4 sm:px-6 lg:px-8 transition-all duration-300"
            >
              <div className="w-full max-w-7xl mx-auto">
                {child}
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de Puntos (Dots) */}
        {totalSlides > 1 && (
          <div className="flex justify-center items-center gap-2 pt-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-sky-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
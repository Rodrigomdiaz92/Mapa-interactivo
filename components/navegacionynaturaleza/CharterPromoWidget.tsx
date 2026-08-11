"use client";

import React from "react";
import { Anchor, ArrowRight, ShieldCheck, Star } from "lucide-react";

interface CharterPromoProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CharterPromoWidget({
  title = "Siente la experiencia de navegar San Blas en un Catamarán Privado",
  description = "Conoce nuestra flota seleccionada con capitanes experimentados. Incluye todas las comidas, bebidas e itinerarios personalizados.",
  buttonText = "Explorar Flota y Charters",
  buttonHref = "/charters",
}: CharterPromoProps) {
  return (
    <div className="my-12 max-w-5xl mx-auto px-4 font-sans">
      <div className="bg-gradient-to-r from-[#0F1E2E] via-[#182C40] to-[#0F1E2E] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-700/60 relative overflow-hidden">
        
        {/* Glow ornamental */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold tracking-wider uppercase border border-emerald-500/30">
              <Anchor className="w-3.5 h-3.5" />
              <span>Sailing the World Charters</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 leading-tight">
              {title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                4.9/5 en valoraciones
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Tripulación Certificada
              </span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <a
              href={buttonHref}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm sm:text-base rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
"use client";

import React from "react";
import { ShieldCheck, HeartPulse, Anchor, ArrowRight, Sparkles, AlertCircle } from "lucide-react";

interface AsistenciaViajeroWidgetProps {
  onConsultar?: () => void;
  customWhatsappLink?: string;
}

export default function AsistenciaViajeroWidget({
  onConsultar,
  customWhatsappLink,
}: AsistenciaViajeroWidgetProps) {
  const defaultWhatsappLink =
    "https://wa.me/+50766302038?text=" +
    encodeURIComponent(
      "(AV)Hola Sailing the World, me gustaría recibir más información y cotizar una asistencia al viajero para mi viaje."
    );

  const targetLink = customWhatsappLink || defaultWhatsappLink;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F1E2E] via-[#14283C] to-[#0A1520] border border-slate-800 shadow-xl p-6 sm:p-8 lg:p-10 text-white transition-all hover:shadow-2xl">
        
        {/* Elementos decorativos de fondo */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Contenido Izquierda / Principal */}
          <div className="lg:col-span-8 space-y-4 text-center sm:text-left">
            
            {/* Tag Superior */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-[11px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Navega Tranquilo</span>
            </div>

            {/* Título */}
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
              Protege tu Experiencia con Asistencia al Viajero
            </h3>

            {/* Descripción */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Viajar a mar abierto y explorar islas paradisíacas como San Blas requiere tranquilidad. Contamos con cobertura integral adaptada a actividades náuticas y emergencias médicas.
            </p>

            {/* Features Rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center justify-center sm:justify-start gap-2 bg-white/5 border border-white/10 rounded-xl p-2.5">
                <HeartPulse className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Atención Médica 24/7</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 bg-white/5 border border-white/10 rounded-xl p-2.5">
                <Anchor className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Cobertura Náutica</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 bg-white/5 border border-white/10 rounded-xl p-2.5">
                <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Cancelaciones y Equipaje</span>
              </div>
            </div>

          </div>

          {/* Botón de Acción Derecha */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center pt-2 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-700/60 lg:pl-8">
            <a
              href={targetLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onConsultar}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-emerald-950/40 border border-emerald-600/40 transition-all hover:scale-[1.02] active:scale-[0.98] group"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Consultar por tu Asistencia</span>
              <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-[10px] text-slate-400 text-center lg:text-right mt-2">
              Haz clic para asesoría inmediata por WhatsApp
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
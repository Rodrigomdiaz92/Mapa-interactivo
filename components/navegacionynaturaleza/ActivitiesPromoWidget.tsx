"use client";

import React from "react";
import { Compass, Waves, Utensils, Palmtree, ArrowUpRight } from "lucide-react";

interface ActivitiesPromoProps {
  buttonHref?: string;
}

export default function ActivitiesPromoWidget({
  buttonHref = "#actividades",
}: ActivitiesPromoProps) {
  const activities = [
    {
      icon: Waves,
      title: "Snorkel & Corales",
      desc: "Equipos incluidos para explorar arrecifes vírgenes.",
    },
    {
      icon: Palmtree,
      title: "Islas Exclusivas",
      desc: "Acceso a cayos deshabitados en Guna Yala.",
    },
    {
      icon: Utensils,
      title: "Gastronomía Fresca",
      desc: "Pescados, mariscos y cocina local a bordo.",
    },
  ];

  return (
    <div className="my-12 max-w-5xl mx-auto px-4 font-sans">
      <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-700 mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Experiencias a Bordo</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              ¿Qué incluye tu viaje con nosotros?
            </h3>
          </div>

          <a
            href={buttonHref}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-900 transition-colors"
          >
            <span>Ver todas las actividades</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Tarjetas de actividades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {activities.map((act, idx) => {
            const IconComponent = act.icon;
            return (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-2"
              >
                <div className="p-2 bg-sky-50 text-sky-700 rounded-xl w-fit">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{act.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {act.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
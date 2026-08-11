"use client";

import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

export interface DecisionOption {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

interface DecisionButtonsProps {
  optionPrimary: DecisionOption;
  optionSecondary: DecisionOption;
  className?: string;
}

export default function DecisionButtons({
  optionPrimary,
  optionSecondary,
  className = "",
}: DecisionButtonsProps) {
  const IconPrimary = optionPrimary.icon;
  const IconSecondary = optionSecondary.icon;

  return (
    <div className={`w-full max-w-4xl mx-auto px-4 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        
        {/* Opción Principal / Destacada */}
        <Link
          href={optionPrimary.href}
          className="group relative flex flex-col justify-between p-6 sm:p-7 bg-emerald-900 hover:bg-emerald-950 text-white rounded-2xl border border-emerald-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              {IconPrimary && (
                <div className="p-2.5 rounded-xl bg-white/10 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                  <IconPrimary className="w-6 h-6" />
                </div>
              )}
              <ArrowRight className="w-5 h-5 text-emerald-300 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white pt-2">
              {optionPrimary.label}
            </h3>

            {optionPrimary.description && (
              <p className="text-xs sm:text-sm text-emerald-100/80 font-light leading-relaxed">
                {optionPrimary.description}
              </p>
            )}
          </div>

          <span className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:underline">
            Explorar opción &rarr;
          </span>
        </Link>

        {/* Opción Secundaria / Complementaria */}
        <Link
          href={optionSecondary.href}
          className="group relative flex flex-col justify-between p-6 sm:p-7 bg-white hover:bg-emerald-50/40 text-neutral-900 rounded-2xl border border-neutral-200/90 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              {IconSecondary && (
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 group-hover:scale-110 transition-transform duration-300">
                  <IconSecondary className="w-6 h-6" />
                </div>
              )}
              <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-emerald-800 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-neutral-900 pt-2">
              {optionSecondary.label}
            </h3>

            {optionSecondary.description && (
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                {optionSecondary.description}
              </p>
            )}
          </div>

          <span className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-wider text-emerald-800 group-hover:underline">
            Ver más detalles &rarr;
          </span>
        </Link>

      </div>
    </div>
  );
}
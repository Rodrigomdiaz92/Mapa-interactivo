"use client";

import { LucideIcon } from "lucide-react";

interface TitlesProps {
  /** ID para anclaje de navegación (ej: id="actividades" -> href="#actividades") */
  id?: string;
  /** Pequeña etiqueta superior opcional */
  badge?: string;
  /** Ícono opcional junto al badge */
  badgeIcon?: LucideIcon;
  /** Título principal */
  title: string;
  /** Subtítulo o descripción aclaratoria */
  subtitle?: string;
  /** Alineación del texto */
  align?: "left" | "center" | "right";
  className?: string;
}

export default function Titles({
  id,
  badge,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  align = "center",
  className = "",
}: TitlesProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      id={id}
      className={`scroll-mt-28 flex flex-col space-y-3 max-w-3xl mx-auto px-4 ${alignmentClasses[align]} ${className}`}
    >
      {/* Badge opcional */}
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-900/10 text-emerald-900 border border-emerald-800/20 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase">
          {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-amber-600" />}
          {badge}
        </span>
      )}

      {/* Título Principal */}
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight leading-tight">
        {title}
      </h2>

      {/* Subtítulo u Oración descriptiva */}
      {subtitle && (
        <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}

      {/* Detalle decorativo inferior opcional para alineación al centro */}
      {align === "center" && (
        <div className="w-12 h-0.5 bg-emerald-800/30 rounded-full pt-1" />
      )}
    </div>
  );
}
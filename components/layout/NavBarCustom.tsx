'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, ChevronDown, Anchor, MapPin, Sparkles } from 'lucide-react';

export const NavbarCustom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ES');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const navLinks = [
    { name: 'Nosotros', href: '/navegacionynaturaleza' },
    { name: 'Experiencias', href: '/charters' },
    { name: 'Ventas', href: '/boatsonsale' },
    { name: 'Actividades', href: '/actividades' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const languages = [
    { code: 'ES', label: 'Español' },
    { code: 'EN', label: 'English' },
    { code: 'FR', label: 'Français' },
  ];

  const handleLangSelect = (code: string) => {
    setCurrentLang(code);
    setIsLangOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm font-sans transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor Principal */}
        <div className="flex items-center justify-between py-3.5 sm:h-20">
          
          {/* Logo / Marca + Ubicación debajo en Mobile */}
          <div className="flex flex-col items-start gap-1.5">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0F1E2E] flex items-center justify-center text-amber-100 group-hover:bg-emerald-800 transition-colors shrink-0">
                <Anchor className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-lg font-serif font-bold tracking-wider text-[#0F1E2E] uppercase leading-tight">
                  Sailing <span className="text-emerald-700 font-light">The World</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium tracking-widest text-slate-500 uppercase">
                  by Navegación y Naturaleza
                </span>
              </div>
            </Link>

            {/* Selector Ubicación - Debajo de la marca en pantallas pequeñas (Mobile) */}
            <div className="relative md:hidden pl-11">
              <button
                onClick={() => {
                  setIsLocationOpen(!isLocationOpen);
                  setIsLangOpen(false);
                }}
                className="flex items-center gap-1 bg-neutral-100 hover:bg-neutral-200/80 text-slate-800 text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full border border-neutral-200/80 transition-all"
              >
                <MapPin className="w-2.5 h-2.5 text-emerald-700 shrink-0" />
                <span>San Blas, Panamá</span>
                <ChevronDown className="w-2.5 h-2.5 text-slate-400 shrink-0" />
              </button>

              {isLocationOpen && (
                <div className="absolute left-0 mt-1.5 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in duration-150">
                  <div className="px-2.5 py-1.5 bg-emerald-50/70 rounded-xl mb-1 border border-emerald-100">
                    <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-widest block">
                      Destino Activo
                    </span>
                    <p className="text-xs font-bold text-slate-900 mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-700" />
                      San Blas, Panamá
                    </p>
                  </div>
                  <div className="px-2.5 py-1.5 text-[10px] text-slate-500 flex items-center gap-1 border-t border-slate-100 mt-1">
                    <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
                    <span>Próximamente más destinos en el mundo.</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Menú Desktop (Navegación + Ubicación + Idioma) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            
            {/* Selector de Ubicación (Desktop) */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsLocationOpen(!isLocationOpen);
                  setIsLangOpen(false);
                }}
                className="flex items-center gap-1.5 bg-neutral-100 hover:bg-neutral-200/80 text-slate-800 text-xs font-semibold tracking-wider px-3 py-1.5 rounded-full border border-neutral-200/80 transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>San Blas, Panamá</span>
                <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
              </button>

              {isLocationOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in duration-150">
                  <div className="px-3 py-2 bg-emerald-50/70 rounded-xl mb-1 border border-emerald-100">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest block">
                      Destino Activo
                    </span>
                    <p className="text-xs font-bold text-slate-900 mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                      San Blas, Panamá
                    </p>
                  </div>
                  <div className="px-3 py-2 text-[11px] text-slate-500 flex items-center gap-1.5 border-t border-slate-100 mt-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Próximamente más destinos en el mundo.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Links Desktop */}
            <nav className="flex gap-5 lg:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-[#0F1E2E] text-xs lg:text-sm font-medium tracking-wide uppercase transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Idioma (Desktop) */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsLangOpen(!isLangOpen);
                  setIsLocationOpen(false);
                }}
                className="flex items-center gap-1.5 bg-[#F9F6EE] hover:bg-slate-200/60 text-slate-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-slate-200 transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-700" />
                <span>{currentLang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50 animate-in fade-in duration-150">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangSelect(lang.code)}
                      className={`w-full text-left px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors ${
                        currentLang === lang.code
                          ? 'bg-slate-50 text-emerald-800 font-bold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Botón Menú Hamburguesa Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-slate-900 p-2 rounded-lg focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          
          {/* Links de Navegación */}
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase text-slate-700 hover:bg-[#F9F6EE] hover:text-emerald-800 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Selector de Idioma en Menú Mobile */}
          <div className="pt-3 border-t border-slate-100">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-3">
              Idioma / Language
            </span>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangSelect(lang.code)}
                  className={`flex-1 py-2 text-xs text-center rounded-xl border uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    currentLang === lang.code
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                      : 'bg-neutral-50 text-slate-600 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  <Globe className="w-3 h-3" />
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      )}
    </header>
  );
};

export default NavbarCustom;
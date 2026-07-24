'use client';

import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown, Anchor } from 'lucide-react';

export const NavbarCustom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ES');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navLinks = [
    { name: 'Nosotros', href: './navegacionynaturaleza' },
    { name: 'Experiencias', href: '/charters' },
    { name: 'Ventas', href: '/boatsonsale' },
    { name: 'Actividades', href: './gunayalamap' },
    { name: 'Contacto', href: './boat' },
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
    <header className="sticky top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm font-sans transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Nombre de la marca */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-[#0F1E2E] flex items-center justify-center text-amber-100 group-hover:bg-emerald-800 transition-colors">
              <Anchor className="w-5 h-5" />
            </div>
            <span className="text-lg sm:text-xl font-serif font-bold tracking-wider text-[#0F1E2E] uppercase">
              Sailing <span className="text-emerald-700 font-light">The World</span>
            </span>
          </a>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-[#0F1E2E] text-sm font-medium tracking-wide uppercase transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Selector de Idioma */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 bg-[#F9F6EE] hover:bg-slate-200/60 text-slate-700 text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-full border border-slate-200 transition-all"
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

          {/* Botón Menú Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 bg-[#F9F6EE] text-slate-700 text-xs font-bold px-2.5 py-1.5 rounded-full border border-slate-200"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-700" />
              <span>{currentLang}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-slate-900 p-1.5 rounded-lg focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold tracking-wider uppercase text-slate-700 hover:bg-[#F9F6EE] hover:text-emerald-800 transition-all"
            >
              {link.name}
            </a>
          ))}

          {isLangOpen && (
            <div className="pt-3 border-t border-slate-100 flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangSelect(lang.code)}
                  className={`flex-1 py-1.5 text-xs text-center rounded-lg border uppercase tracking-wider font-semibold ${
                    currentLang === lang.code
                      ? 'bg-emerald-800 text-white border-emerald-800'
                      : 'bg-slate-50 text-slate-600 border-slate-200'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default NavbarCustom;
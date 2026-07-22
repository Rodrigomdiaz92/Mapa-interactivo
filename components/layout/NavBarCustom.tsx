'use client';
import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const NavbarCustom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ES');
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Links de navegación principales
  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nuestra Flota', href: '#flota' },
    { name: 'Destinos', href: '#destinos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const languages = [
    { code: 'ES', label: 'Español' },
    { code: 'EN', label: 'English' },
    { code: 'FR', label: 'Français' },
  ];

  /*const handleLangChange = (code) => {
    setCurrentLang(code);
    setIsLangOpen(false);
    // Aquí puedes disparar tu lógica de i18n / cambio de idioma
  };*/

  return (
    <nav className="bg-slate-900 text-white fixed w-full top-0 left-0 z-50 shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Nombre de la marca */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-bold tracking-wider text-cyan-400 uppercase">
              Sailing <span className="text-white font-light">The World</span>
            </span>
          </div>

          {/* Menú Desktop (Navegación + Selector Idioma) */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            {/* Selector de Idioma (Desktop) */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-sm font-medium px-3 py-2 rounded-lg border border-slate-700 transition-all"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>{currentLang}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      //onClick={() => handleLangChange(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-700 transition-colors ${
                        currentLang === lang.code ? 'text-cyan-400 font-semibold' : 'text-gray-300'
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
            {/* Selector rápido de idioma en Mobile */}
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 bg-slate-800 text-xs font-medium px-2.5 py-1.5 rounded-md border border-slate-700"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentLang}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all"
            >
              {link.name}
            </a>
          ))}

          {/* Opciones de Idioma Mobile (si despliega la opción) */}
          {isLangOpen && (
            <div className="pt-2 border-t border-slate-700 flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  //onClick={() => handleLangChange(lang.code)}
                  className={`flex-1 py-1.5 text-xs text-center rounded-md border ${
                    currentLang === lang.code
                      ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50 font-semibold'
                      : 'bg-slate-900 text-gray-400 border-slate-700'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavbarCustom;
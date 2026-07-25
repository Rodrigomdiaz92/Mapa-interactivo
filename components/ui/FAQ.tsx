"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";
import { FAQ_DATA, FAQItem } from "@/data/faqData";

export const FAQ = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [showFullFAQ, setShowFullFAQ] = useState(false);

  const toggleFAQ = (key: string) => {
    setOpenKey(openKey === key ? null : key);
  };

  const displayedCategories = showFullFAQ
    ? FAQ_DATA
    : [
        {
          ...FAQ_DATA[0],
          items: FAQ_DATA[0].items.slice(0, 3),
        },
      ];

  const renderAnswerContent = (item: FAQItem) => {
    return (
      <div className="space-y-3">
        {item.paragraphs?.map((p, idx) => (
          <p key={idx} className="whitespace-pre-line">
            {p}
          </p>
        ))}

        {item.options && item.options.length > 0 && (
          <ol className="list-decimal list-inside space-y-2 mt-2">
            {item.options.map((opt, idx) => (
              <li key={idx}>
                <strong className="text-slate-800">{opt.title}:</strong> {opt.description}
              </li>
            ))}
          </ol>
        )}

        {item.footerNote && (
          <p className="text-neutral-500 italic text-xs mt-2">{item.footerNote}</p>
        )}
      </div>
    );
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-neutral-50/50">
      
      {/* Encabezado */}
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block mb-2">
          Todo lo que necesitas saber
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-slate-900 font-semibold tracking-tight">
          Preguntas Frecuentes
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
          Resuelve tus dudas sobre la navegación, preparación del viaje y vida a bordo.
        </p>
      </div>

      {/* Categorías y Acordeón */}
      <div className="space-y-10">
        {displayedCategories.map((cat, catIdx) => (
          <div key={cat.category} className="space-y-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-neutral-400 border-b border-neutral-200 pb-2">
              {cat.category}
            </h3>

            <div className="space-y-3">
              {cat.items.map((item, itemIdx) => {
                const key = `${catIdx}-${itemIdx}`;
                const isOpen = openKey === key;

                return (
                  <div
                    key={item.question}
                    className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFAQ(key)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-slate-900 font-semibold text-sm sm:text-base hover:text-emerald-900 transition-colors focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4 font-serif">{item.question}</span>
                      <span className="p-1 rounded-full text-neutral-400 shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-emerald-800" />
                        ) : (
                          <Plus className="w-4 h-4 text-neutral-500" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-neutral-600 text-xs sm:text-sm leading-relaxed border-t border-neutral-100 pt-4 animate-in fade-in slide-in-from-top-1 duration-200">
                        {renderAnswerContent(item)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Botón Ver Más / Ver Menos */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowFullFAQ(!showFullFAQ)}
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-sm hover:shadow-md"
        >
          <span>{showFullFAQ ? "Mostrar menos preguntas" : "Ver todas las preguntas"}</span>
          {showFullFAQ ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

    </section>
  );
};

export default FAQ;
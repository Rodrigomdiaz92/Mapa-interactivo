'use client';

import React, { useState } from 'react';
import { Plus, X, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    category: 'LA EXPERIENCIA',
    items: [
      {
        question: '¿Cómo es el itinerario?',
        answer:
          'No hay un itinerario fijo — esa es la magia. Cada día navegamos según el viento y el clima, descubriendo distintas islas paradisíacas: algunas sociales y animadas (bebidas, voleibol), otras tranquilas y remotas. Navegación diaria, snorkel en arrecifes de coral, kayak, paddle board y exploración de islas en cancha son parte de la experiencia. Cada día es flexible y único.',
      },
      {
        question: '¿Qué hace diferente navegar con ustedes?',
        answer:
          'No es solo un viaje, es una experiencia de vida enfocada en la naturaleza, la simplicidad y la conexión.',
      },
      {
        question: '¿Cuántos días se recomiendan y cuál es la mejor época para visitar San Blas?',
        answer: (
          <div className="space-y-3">
            <p>
              La estadía mínima es de 2 noches, pero recomendamos 3 o más. San Blas es tropical e impredecible: sol y lluvia pueden ocurrir el mismo día durante todo el año.
            </p>
            <p>
              <strong>Diciembre a mayo:</strong> más viento y sol (mejor para navegar).
              <br />
              <strong>Mayo a noviembre:</strong> mar más calmo (mejor para snorkel y actividades acuáticas).
            </p>
            <p>
              El agua siempre está cálida y las actividades se realizan todo el año.
            </p>
          </div>
        ),
      },
      {
        question: '¿Se marea uno en el velero?',
        answer:
          'En la mayoría de los casos, no. Alrededor del 90% de nuestros huéspedes no sufre mareos. San Blas está naturalmente protegida por arrecifes de coral, lo que mantiene el mar muy tranquilo — a menudo como una piscina. Las olas fuertes, principal causa de mareos, son poco frecuentes. Además elegimos fondeaderos resguardados y seguros en lugares hermosos, para que puedas relajarte y disfrutar de una navegación suave y cómoda.',
      },
    ],
  },
  {
    category: 'PLANIFICA TU VIAJE',
    items: [
      {
        question: '¿Cómo llego desde Ciudad de Panamá al velero?',
        answer: (
          <div className="space-y-3">
            <p className="font-semibold text-slate-800">Dos opciones:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Tierra + lancha rápida:</strong> Recogida alrededor de las 5:00 AM → Transfer en 4x4 hasta el puerto → Lancha hasta el velero. Llegada alrededor de las 10:00 AM. Aproximadamente $140 por persona (ida y vuelta).
              </li>
              <li>
                <strong>Avión privado (Cessna):</strong> Hasta 3 pasajeros, $1,097 ida y vuelta + impuestos locales y tasas de aterrizaje (se pagan en efectivo).
              </li>
            </ol>
            <p className="text-slate-500 italic text-xs">
              Te ayudamos a organizar todo para una llegada sin contratiempos.
            </p>
          </div>
        ),
      },
      {
        question: '¿Qué pasa si Lady Lou no está disponible?',
        answer:
          'Trabajamos con una selección cuidadosa de veleros y catamaranes en San Blas con tripulaciones de confianza que ofrecen una experiencia de igual calidad.',
      },
    ],
  },
  {
    category: 'VIDA A BORDO',
    items: [
      {
        question: '¿El barco se comparte con otros pasajeros?',
        answer: 'No. Es privado exclusivamente para tu grupo (2 a 4 huéspedes) más la tripulación.',
      },
      {
        question: '¿Cuántos pasajeros puede llevar Lady Lou?',
        answer: 'Hasta 4 huéspedes. Ideal para parejas, familias o amigos.',
      },
      {
        question: '¿Cuántos camarotes y baños hay a bordo?',
        answer:
          'Dos camarotes privados y dos baños (uno en suite para los huéspedes y uno compartido con la tripulación).',
      },
      {
        question: '¿Navegan todos los días?',
        answer:
          'Sí, siempre que el clima lo permita. La navegación es parte del ritmo diario.',
      },
      {
        question: '¿Qué debo saber sobre la vida diaria en el velero?',
        answer:
          'La vida es simple y natural: navegar, nadar, hacer snorkel y relajarse. Usamos energía solar, agua dulce limitada y vivimos de forma minimalista pero cómoda. Los traslados y paseos en lancha requieren comodidad básica con el agua. Se recomienda protector solar apto para arrecifes.',
      },
      {
        question: '¿Los niños son bienvenidos a bordo?',
        answer:
          '¡Sí! Los niños son muy bienvenidos. San Blas es perfecto para familias, con aguas tranquilas, snorkel, natación, tiempo en la playa e islas hermosas para explorar juntos.',
      },
      {
        question: '¿Dónde está la ducha?',
        answer:
          'La ducha principal es al aire libre, como es común en los veleros de San Blas. También contamos con una ducha interior disponible. El agua dulce se provee cada noche, y solo pedimos a los huéspedes que la usen con responsabilidad.',
      },
      {
        question: '¿Qué pasa si llueve?',
        answer:
          'La lluvia es parte de la vida caribeña y normalmente pasa rápido. Las actividades continúan según lo planeado, y no se realizan reembolsos por condiciones climáticas.',
      },
    ],
  },
  {
    category: 'COMIDA E INCLUIDOS',
    items: [
      {
        question: '¿Qué está incluido en la experiencia?',
        answer:
          'Alojamiento, navegación diaria, capitán y tripulación, tours de snorkel, equipo de snorkel, kayak, paddle board, lancha, comidas caseras y jugos naturales.',
      },
      {
        question: '¿Qué no está incluido?',
        answer: 'Transporte a San Blas, tasas de entrada y bebidas alcohólicas.',
      },
      {
        question: '¿Qué tipo de comida se sirve a bordo?',
        answer:
          'Comidas caseras frescas, saludables y de temporada, con opciones vegetarianas y veganas, más jugos naturales.',
      },
    ],
  },
  {
    category: 'RESERVAS',
    items: [
      {
        question: '¿Qué métodos de pago aceptan?',
        answer:
          'PayPal, Wise, Payoneer y cripto. Se requiere un depósito del 20% para confirmar la reserva. El saldo restante se paga en efectivo al llegar a bordo, por la logística de las islas remotas.',
      },
    ],
  },
  {
    category: 'NUESTRO IMPACTO',
    items: [
      {
        question: '¿Cómo apoyan a la comunidad local y al medio ambiente?',
        answer:
          'Trabajamos directamente con familias locales de San Blas comprando productos frescos y apoyando pequeños negocios. También organizamos tours por la selva con ríos y cascadas, generando ingresos adicionales para las comunidades. Contribuimos a la educación y el apoyo comunitario con útiles escolares y lámparas solares. A bordo, reducimos el uso de plástico, utilizamos productos de limpieza biodegradables, protector solar para arrecifes y rellenamos envases siempre que es posible.',
      },
    ],
  },
];

export const FAQ = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [showFullFAQ, setShowFullFAQ] = useState(false);

  const toggleFAQ = (key: string) => {
    setOpenKey(openKey === key ? null : key);
  };

  // Prepara los datos iniciales (solo las primeras 3 preguntas de la primera categoría)
  const displayedCategories = showFullFAQ
    ? faqData
    : [
        {
          ...faqData[0],
          items: faqData[0].items.slice(0, 3),
        },
      ];

  return (
    <section className="py-20 bg-[#F9F6EE] text-slate-800 font-sans px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Encabezado Principal */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-600 block mb-2">
            TODO LO QUE NECESITÁS SABER
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 uppercase tracking-tight">
            ¿PREGUNTAS ANTES DE RESERVAR?
          </h2>
        </div>

        {/* Lista de Categorías y Preguntas */}
        <div className="space-y-12">
          {displayedCategories.map((cat, catIdx) => (
            <div key={cat.category} className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200/80 pb-2">
                {cat.category}
              </h3>

              <div className="space-y-3">
                {cat.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = openKey === key;

                  return (
                    <div
                      key={item.question}
                      className="bg-white rounded-xl shadow-sm border border-slate-200/60 overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFAQ(key)}
                        className="w-full flex items-center justify-between p-5 text-left text-slate-800 font-semibold text-base sm:text-lg hover:text-slate-900 transition-colors focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className="pr-4">{item.question}</span>
                        <span className="p-1 rounded-full text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0">
                          {isOpen ? (
                            <X className="w-5 h-5 text-slate-700" />
                          ) : (
                            <Plus className="w-5 h-5 text-slate-700" />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                          {item.answer}
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
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowFullFAQ(!showFullFAQ)}
            className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span>{showFullFAQ ? 'Ver menos preguntas' : 'Ver más preguntas'}</span>
            {showFullFAQ ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
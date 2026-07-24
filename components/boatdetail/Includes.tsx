import React from 'react';
import { Check, X, Scroll } from 'lucide-react';

interface IncludesProps {
  onHowToGetThereClick?: () => void;
}

export const Includes: React.FC<IncludesProps> = ({ onHowToGetThereClick }) => {
  const includedItems = [
    'Homemade meals daily (vegan & gluten-free options available)',
    'Unlimited fresh drinking water & natural juices',
    'Daily sailing to different islands & hidden beaches',
    'Water activities: snorkeling, kayaking & island hopping',
    'Motorized dinghy for exploration & transport',
    'Full service: Captain & cook on board',
    'GoPro10 footage of your adventure',
  ];

  const notIncludedItems = [
    'Transportation to the boat',
    'Local taxes (Guna Yala entrance ~$23/person)',
    'Alcoholic beverages',
    'Personal expenses',
    'Guaranteed perfect weather',
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* CARD: WHAT'S INCLUDED */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            {/* Header con Icono y Título */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0 text-amber-700">
                <Scroll className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif uppercase tracking-wider text-slate-800">
                What's included
              </h2>
            </div>

            {/* Lista de Incluidos */}
            <ul className="space-y-3.5">
              {includedItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-snug">
                  <span className="shrink-0 mt-0.5 text-emerald-600 font-bold">
                    <Check className="w-4 h-4 stroke-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CARD: NOT INCLUDED */}
        <div className="bg-[#F5EFE6] rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Título */}
            <h2 className="text-2xl sm:text-3xl font-serif uppercase tracking-wider text-slate-800 mb-6">
              Not included
            </h2>

            {/* Lista de No Incluidos */}
            <ul className="space-y-3.5 mb-6">
              {notIncludedItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-snug">
                  <span className="shrink-0 mt-0.5 text-rose-500 font-bold">
                    <X className="w-4 h-4 stroke-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Nota Informativa */}
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              We'll be happy to help coordinate your transportation from Panama City.
            </p>
          </div>

          {/* Botón de Acción */}
          <div>
            <button
              onClick={onHowToGetThereClick}
              className="w-full sm:w-auto px-6 py-3 bg-[#0F1E2E] hover:bg-[#182C40] text-white font-medium text-sm rounded-full transition-colors shadow-sm text-center block"
            >
              How to get to San Blas
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Includes;
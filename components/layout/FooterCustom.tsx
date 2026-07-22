import React from 'react';

export const FooterCustom = () => {
  return (
    <footer className="w-full bg-slate-50 text-slate-700 border-t border-slate-200 font-sans">
      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Columna 1: Sailing The World */}
          <div>
            <h3 className="text-slate-900 font-bold text-base mb-4">
              Sailing The World
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Charters in San Blas
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2: Categories */}
          <div>
            <h3 className="text-slate-900 font-bold text-base mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {['Sailboat', 'Catamaran', 'Yacht'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
                    <span className="text-slate-400 text-xs font-mono">&gt;</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Blog */}
          <div>
            <h3 className="text-slate-900 font-bold text-base mb-4">
              Blog
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {[
                'Activities',
                'Boats on Sale',
                'How to Get to San Blas',
                'Info',
                'San blas',
                'Tips',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
                    <span className="text-slate-400 text-xs font-mono">&gt;</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Social */}
          <div>
            <h3 className="text-slate-900 font-bold text-base mb-4">
              Social
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {[
                'Instagram',
                'Facebook',
                'Whatsapp',
                'LinkTree',
                'E-Mail',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
                    <span className="text-slate-400 text-xs font-mono">&gt;</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Barra Inferior (Copyright y Políticas) */}
      <div className="border-t border-slate-200 py-6 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wider text-slate-500 uppercase">
          <p>© 2025 Sailing The World</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-800 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCustom;
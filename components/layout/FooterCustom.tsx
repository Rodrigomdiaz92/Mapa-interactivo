import React from 'react';
import { ChevronRight } from 'lucide-react';

export const FooterCustom = () => {
  return (
    <footer className="relative w-full bg-[#F9F6EE] text-slate-700 border-t border-slate-200/80 font-sans mt-auto">
      {/* Contenido del Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Columna 1 */}
          <div>
            <h3 className="text-slate-900 font-serif font-bold text-lg uppercase tracking-wider mb-4">
              Sailing The World
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Experiencias únicas de navegación privada y chárter en el archipiélago de San Blas.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="/charters" className="hover:text-emerald-700 font-medium transition-colors">
                  Charters in San Blas
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div>
            <h3 className="text-slate-900 font-serif font-bold text-lg uppercase tracking-wider mb-4">
              ¡Hospedate con nosotros!
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {[
                {categoria: 'Veleros',
                href: '/charters?category=Sailboat' },
                {categoria: 'Catamaranes',
                href: '/charters?category=Catamaran'},
              ].map((item) => (
                <li key={item.categoria}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 hover:text-emerald-700 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 transition-colors" />
                    {item.categoria}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h3 className="text-slate-900 font-serif font-bold text-lg uppercase tracking-wider mb-4">
              Info
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {[
                {titulo: 'Actividades en San Blas',
                href: '/actividades#experiencias'},
                /*{titulo: 'Barcos a Venta',
                href: '/barcos-a-venta'},*/
                {titulo: 'Mapa Interactivo',
                href: '/actividades#mapa-interactivo'},
                {titulo: 'FAQs',
                href: '/actividades#faqs'},
                {titulo: 'Reseñas',
                href: '/actividades#resenas'},
                {titulo: 'Como Llegar a San Blas',
                href: '/actividades#como-llegar'},
                {titulo: 'Contacto',
                href: '/contacto'},
                
              ].map((item) => (
                <li key={item.titulo}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 hover:text-emerald-700 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 transition-colors" />
                    {item.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 */}
          <div>
            <h3 className="text-slate-900 font-serif font-bold text-lg uppercase tracking-wider mb-4">
              Social
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {[
                {titulo: 'Instagram', href: 'https://www.instagram.com/sailingthe.world/'},
                {titulo: 'Facebook', href: 'https://www.facebook.com/sailingtheworld25'},
                {titulo: 'WhatsApp', href: 'https://wa.me/+50766302038?text=(F)Hola! Quisiera más información sobre los charters en San Blas.'},
                {titulo: 'LinkTree', href: 'https://linktr.ee/sailingtheworld'},
                {titulo: 'E-Mail', href: 'mailto:contacto@sailingtheworld.net'},
              ].map((item) => (
                <li key={item.titulo}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 hover:text-emerald-700 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 transition-colors" />
                    {item.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Barra Inferior */}
      <div className="border-t border-slate-200 py-6 px-6 lg:px-8 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wider text-slate-500 uppercase">
          <p>© {new Date().getFullYear()} Sailing The World. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="./privacypolicy" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </a>
            <a href="./termsofservice" className="hover:text-slate-800 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCustom;
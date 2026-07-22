import React from 'react';

interface Category {
  id: string;
  name: string;
  listingsCount: number;
  imageUrl: string;
  href: string;
}

const categories: Category[] = [
  {
    id: 'catamaran',
    name: 'Catamaran',
    listingsCount: 9,
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
    href: '#catamaran',
  },
  {
    id: 'sailboat',
    name: 'Sailboat',
    listingsCount: 8,
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
    href: '#sailboat',
  },
  {
    id: 'yacht',
    name: 'Yacht',
    listingsCount: 0,
    imageUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop',
    href: '#yacht',
  },
];

export const Categorias = () => {
  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <div className="w-12 h-1 bg-emerald-500 mx-auto mb-4 rounded-full" />
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight mb-2">
            Top Categories
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Explore the most popular categories.
          </p>
        </div>

        {/* Carrusel Desplazable a la derecha (siempre activo) */}
        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-200">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="group relative h-96 w-80 sm:w-96 flex-shrink-0 snap-start rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
            >
              {/* Imagen de fondo */}
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 group-hover:from-black/90 transition-colors" />

              {/* Badge */}
              <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-full uppercase">
                {category.listingsCount} LISTINGS
              </div>

              {/* Nombre */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-200 font-medium tracking-wide">
                  Book now!
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categorias;
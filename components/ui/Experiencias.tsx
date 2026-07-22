import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Activity {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

const activities: Activity[] = [
  {
    id: '1',
    title: 'SLOW DAILY SAILING AMONG CORAL REEFS',
    description: 'Gentle daily navigation through turquoise waters and living coral reefs.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'GUNA PEOPLE — CULTURAL CONNECTION',
    description: 'Share respectful moments and learn about local island life.',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'ISLAND HOPPING & UNTOUCHED BEACHES',
    description: 'Discover remote islands and white-sand beaches far from the crowds.',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'SNORKELING IN CRYSTAL-CLEAR REEFS',
    description: 'Swim among colorful fish and healthy coral in clear, warm waters.',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc23?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'KAYAKING & PADDLEBOARD',
    description: 'Glide quietly across calm seas and explore at your own pace.',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'BEACH TIME & SUNSETS',
    description: 'Volleyball in the sand, salt on your skin, and a sunset made just for you.',
    imageUrl: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '7',
    title: 'SLOW MORNINGS, OCEAN SWIMS & RELAXATION',
    description: 'Start the day slowly with ocean swims, rest, and simple pleasures.',
    imageUrl: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop',
  },
];

export const Experiencias = () => {
  return (
    <section className="py-16 bg-[#F9F6EE] px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-emerald-700 font-semibold block mb-2">
            WHAT YOU'LL DO
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-800 tracking-tight uppercase mb-3">
            ACTIVITIES
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            These are the activities included in the experience:
          </p>
        </div>

        {/* Grid de Experiencias / Actividades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((item) => (
            <a
              key={item.id}
              href={item.link || '#'}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
            >
              {/* Imagen de fondo con Zoom al Hover */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Degradado oscuro para lectura del texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 transition-colors" />

              {/* Icono circular de la esquina */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Textos inferiores */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end">
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-2 leading-snug drop-shadow-sm">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 font-light">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
'use client';

import React, { useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Utensils, 
  Users, 
  BedDouble, 
  Bath, 
  Dog, 
  Heart,
  CheckCircle2
} from 'lucide-react';

export interface Boat {
  id: string;
  name: string;
  type: 'CATAMARAN' | 'SAILBOAT' | 'YACHT';
  imageUrl: string;
  location: string;
  mealsPerDay: number;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  petsAllowed: boolean;
  pricePerNight: number;
  isVerified?: boolean;
}

// Datos de ejemplo basados en el video
const mockBoats: Boat[] = [
  {
    id: '1',
    name: 'Leopard 40',
    type: 'CATAMARAN',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
    location: 'San Blas Islands, Guna Yala, Pa...',
    mealsPerDay: 3,
    capacity: 6,
    bedrooms: 3,
    bathrooms: 1,
    petsAllowed: false,
    pricePerNight: 1260,
    isVerified: true,
  },
  {
    id: '2',
    name: 'Lagoon 42 ft',
    type: 'CATAMARAN',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
    location: 'San Blas Islands, Guna Yala, Pa...',
    mealsPerDay: 3,
    capacity: 8,
    bedrooms: 3,
    bathrooms: 3,
    petsAllowed: false,
    pricePerNight: 1200,
    isVerified: true,
  },
  {
    id: '3',
    name: 'COOLCAT',
    type: 'CATAMARAN',
    imageUrl: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800&auto=format&fit=crop',
    location: 'San Blas Islands, Guna Yala, Pa...',
    mealsPerDay: 3,
    capacity: 6,
    bedrooms: 3,
    bathrooms: 1,
    petsAllowed: false,
    pricePerNight: 255,
    isVerified: true,
  },
  {
    id: '4',
    name: 'Bali 44 Premium Charter',
    type: 'CATAMARAN',
    imageUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop',
    location: 'San Blas Islands, Guna Yala, Pa...',
    mealsPerDay: 3,
    capacity: 8,
    bedrooms: 3,
    bathrooms: 2,
    petsAllowed: true,
    pricePerNight: 1800,
    isVerified: true,
  },
  {
    id: '5',
    name: 'Bavaria 46',
    type: 'SAILBOAT',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop',
    location: 'Baja California, Mexico',
    mealsPerDay: 2,
    capacity: 4,
    bedrooms: 2,
    bathrooms: 2,
    petsAllowed: false,
    pricePerNight: 810,
    isVerified: true,
  },
];

export const CardCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
            Top Charters
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Check our popular top-rated Charters.
          </p>
        </div>

        {/* Contenedor del carrusel con botones */}
        <div className="relative group">
          {/* Botón Izquierdo */}
          <button
            onClick={() => scroll('left')}
            aria-label="Anterior"
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white text-slate-700 rounded-full shadow-md hover:shadow-lg border border-slate-200 flex items-center justify-center hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Lista Scrolleable */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {mockBoats.map((boat) => (
              <div
                key={boat.id}
                className="flex-shrink-0 w-[290px] sm:w-[320px] bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
              >
                {/* Imagen & Tag */}
                <div className="relative h-48 w-full bg-slate-100">
                  <img
                    src={boat.imageUrl}
                    alt={boat.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-md uppercase">
                    {boat.type}
                  </span>
                </div>

                {/* Detalles de la tarjeta */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Título y Verificación */}
                    <div className="flex items-center gap-1.5 mb-1">
                      <h3 className="font-bold text-slate-800 text-lg truncate">
                        {boat.name}
                      </h3>
                      {boat.isVerified && (
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 fill-cyan-100 flex-shrink-0" />
                      )}
                    </div>

                    {/* Ubicación */}
                    <div className="flex items-center gap-1 text-slate-400 text-xs mb-4">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{boat.location}</span>
                    </div>

                    {/* Especificaciones */}
                    <div className="space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Utensils className="w-3.5 h-3.5 text-slate-400" />
                          <span>Meals per day:</span>
                        </div>
                        <span className="font-semibold text-slate-700">{boat.mealsPerDay}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          <span>Capacity:</span>
                        </div>
                        <span className="font-semibold text-slate-700">{boat.capacity}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <BedDouble className="w-3.5 h-3.5 text-slate-400" />
                          <span>Bedrooms:</span>
                        </div>
                        <span className="font-semibold text-slate-700">{boat.bedrooms}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Bath className="w-3.5 h-3.5 text-slate-400" />
                          <span>Bathrooms:</span>
                        </div>
                        <span className="font-semibold text-slate-700">{boat.bathrooms}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Dog className="w-3.5 h-3.5 text-slate-400" />
                          <span>Pets:</span>
                        </div>
                        <span className="font-semibold text-slate-700">
                          {boat.petsAllowed ? 'Allowed' : 'Not Allowed'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer de la tarjeta: Precio y Favoritos */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">From</span>
                      <span className="text-cyan-600 font-bold text-base">
                        USD ${boat.pricePerNight.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500 font-normal"> /per night</span>
                    </div>

                    <button
                      aria-label="Agregar a favoritos"
                      className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón Derecho */}
          <button
            onClick={() => scroll('right')}
            aria-label="Siguiente"
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white text-slate-700 rounded-full shadow-md hover:shadow-lg border border-slate-200 flex items-center justify-center hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
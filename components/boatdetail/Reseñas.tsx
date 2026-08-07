import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  platform: 'airbnb' | 'booking' | 'google';
  rating: number;
  comment: string;
  author: string;
  initial: string;
  location: string;
  year: string;
}

const reviewsData: Review[] = [
  {
    id: '1',
    platform: 'airbnb',
    rating: 5,
    comment:
      '"Best trip I\'ve ever taken! I came with my mom and sister and this was a perfect family trip, very low stress with healthy food and lots of activities like snorkeling and visiting islands. Guadalupe is an amazing cook and has good relationships with many Guna people — a true cultural experience."',
    author: 'Thyra S.',
    initial: 'T',
    location: 'United States',
    year: '2024',
  },
  {
    id: '2',
    platform: 'booking',
    rating: 5,
    comment:
      '"Without a doubt, one of the best trips I\'ve ever taken. The San Blas Archipelago is a true Caribbean paradise. This trip with Guadalupe was so much more — you genuinely feel like part of their community and get a glimpse of what it\'s like to live on a boat."',
    author: 'Sarah M.',
    initial: 'S',
    location: 'Canada',
    year: '2024',
  },
  {
    id: '3',
    platform: 'google',
    rating: 5,
    comment:
      '"Four of us stayed with Guadalupe for three nights and it was an unforgettable experience. She is a very warm person and an excellent cook, and took us to the most beautiful and remote places. Highly recommended to everyone who wants to visit San Blas."',
    author: 'Johannes S.',
    initial: 'J',
    location: 'Germany',
    year: '2024',
  },
  {
    id: '4',
    platform: 'airbnb',
    rating: 5,
    comment:
      '"Loved everything about this trip! Guadalupe was fantastic, the food was delicious and the scenery breathtaking. She found wonderful snorkeling spots, sailed between islands, beautiful sunsets — just fantastic!"',
    author: 'James R.',
    initial: 'J',
    location: 'United Kingdom',
    year: '2024',
  },
];

export const Reseñas = () => {
  // Helper para renderizar los logos según la plataforma
  const renderPlatformLogo = (platform: Review['platform']) => {
    switch (platform) {
      case 'airbnb':
        return (
          <svg className="w-6 h-6 text-[#FF5A5F]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      case 'booking':
        return <span className="text-xl font-bold text-[#003580] tracking-tighter">B.</span>;
      case 'google':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
        );
    }
  };

  return (
    <section className="py-16 bg-[#F9F6EE] font-sans px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado Principal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Título */}
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-800 uppercase tracking-tight text-center md:text-left">
            Lo que dicen nuestros clientes
          </h2>

          {/* Estadísticas y Botón */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-serif font-bold text-emerald-800">+50</span>
              <span className="text-sm text-slate-600 font-medium">
                Reseñas en Trip Advisor, Airbnb, Google & Booking.com
              </span>
            </div>

            <a
              href="https://linktr.ee/sailingtheworld"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0F1E2E] hover:bg-[#182C40] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm"
            >
              {renderPlatformLogo('google')}
              <span>Escribir una reseña</span>
            </a>
          </div>
        </div>

        {/* Carrusel Desplazable a la Derecha (Siempre horizontal) */}
        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="w-[85vw] sm:w-[350px] lg:w-[380px] bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-100 flex-shrink-0 snap-start flex flex-col justify-between"
            >
              {/* Parte Superior: Logo + Rating */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>{renderPlatformLogo(review.platform)}</div>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                </div>

                {/* Comentario */}
                <p className="text-slate-600 text-sm sm:text-base italic leading-relaxed mb-6 line-clamp-6">
                  {review.comment}
                </p>
              </div>

              {/* Pie de la Card: Autor */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  {review.initial}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">{review.author}</h4>
                  <p className="text-xs text-slate-400">
                    {review.location} · {review.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reseñas;
import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  platform: 'airbnb' | 'booking' | 'google' | 'tripadvisor';
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
    platform: 'google',
    rating: 5,
    comment:
      '"Nos hospedamos en el velero Youth,  gran atención de Nicolas y Belén, atentos a todos los detalles. Nos mostraron todos los detalles de San blas. 100% recomendable esta experiencia  🥳"',
    author: 'Rodrigo D.',
    initial: 'R',
    location: 'Argentina',
    year: '2026',
  },
  {
    id: '2',
    platform: 'google',
    rating: 5,
    comment:
      '"Navegar con Belu y Nico es como irte de vacaciones con tus amigos de toda la vida, literalmente. Estuvimos 3 días y nos quedamos con ganas de más, estuvieron en todos los detalles. Desde que llegamos nos explicaron todo, respondieron todas nuestras preguntas y nos invitaron a compartir momentos que terminaron siendo los favoritos en nuestra estadía en Panamá. La comida es increíble, el velero está en perfectas condiciones y los planes que nos propusieron hacer fueron increíbles, es un plus a la experiencia hacerlo de la mano de biólogos porque aprovechas la naturaleza que te rodea. Hacen que valga la pena cada minuto, son apasionados y su entrega es absoluta. Gracias por acompañarnos a vivir su vida unos días, esperamos volver"',
    author: 'Maria Emilia Cajal',
    initial: 'M',
    location: 'Argentina',
    year: '2025',
  },
  {
    id: '3',
    platform: 'google',
    rating: 5,
    comment:
      '"Ha sido una experiencia genial conocer un poquito de San Blas de la mano de Nico y Belén a bordo de un velero. Hemos hecho snorkel en zonas preciosas, visitado varias islas y hemos comido espectacular, Nico y Belén cocinan muy rico. La experiencia con ellos sin duda volvería a repetirla, son anfitriones muy buenos y muy cercanos. Gracias por estos 3 días!"',
    author: 'Beatriz Rubio Páramo',
    initial: 'B',
    location: 'Argentina',
    year: '2024',
  },
  {
    id: '4',
    platform: 'google',
    rating: 5,
    comment:
      '"Nico y Belu son los mejores capitanes, anfitriones y cocineros! En su barco estás como en casa, y nunca pasarás hambre ni te faltará una cerveza fresquita! Han sido 3 días increíbles!"',
    author: 'Rocio Mangana',
    initial: 'R',
    location: 'Argentina',
    year: '2025',
  },
  {
    id: '5',
    platform: 'google',
    rating: 5,
    comment:
      '"Magníficos 3dias en el velero con Nico y Belén. Son una pareja excelente, muy agradables, simpaticos, hacen muy bien de comer, pescamos juntos, Nico nos llevó a hacer snorkel, tocamos un tiburón, 3 dias de ensueño por San Blas, nunca me olvidaré de la experiencia, para mí, lo más destacable de Panamá"',
    author: 'Tania Fernández Salgado',
    initial: 'T',
    location: 'Argentina',
    year: '2025',
  },
  {
    id: '6',
    platform: 'google',
    rating: 5,
    comment:
      '"Mi primera experiencia en este tipo de viajes y la verdad que ha sido una maravilla! Lo mejor de todas las vacaciones sin duda. Nico y Belen son personas increibles, te hacen sentir como  en casa. Te tratan bien, se preocupan y cuidan de todo. Gratamente sorprendida por su nivel en todos los sentidos. Admirable todo lo que hacen ♥️"',
    author: 'Marta Gábana',
    initial: 'M',
    location: 'España',
    year: '2025',
  },
  {
    id: '7',
    platform: 'google',
    rating: 5,
    comment:
      '"La mejor experiencia humana y natural que podrás encontrar en uno de los paraísos naturales más bellos del mundo!"',
    author: 'Kevin Pons',
    initial: 'K',
    location: 'Australia',
    year: '2025',
  },
  {
    id: '8',
    platform: 'google',
    rating: 5,
    comment:
      '"Una experiencia inolvidable. Fuimos con mi mujer, Estela, y pasamos cuatro noches a bordo del LUPA. Desde el primer momento, Nico y Belu nos hicieron sentir como en casa. Son excelentes navegantes y anfitriones, pero, por sobre todo, personas maravillosas. Y eso hace la diferencia.La gastronomía fue espectacular. Comimos el pulpo y la langosta más ricos, frescos y abundantes que recordamos. Cada comida fue un lujo. Los desayunos , increíbles! Siempre estuvieron atentos a que disfrutáramos cada momento y compartieron con nosotros su enorme pasión por el mar. Como ambos son biólogos, cada salida de snorkel se transforma en una experiencia única: no solo recorrés lugares increíbles, sino que aprendés sobre corales, peces, estrellas de mar y todo el ecosistema marino. Es como hacer una excursión con dos científicos apasionados por lo que hacen. El Velero , es muy cómodo y seguro y está muy bien equipado : equipo de snorkel, tabla , dingui , linternas , microscopio óptico, etc. Si buscan conocer San Blas de una forma auténtica, navegando por lugares paradisíacos, con excelente comida, atención personalizada y personas que realmente aman lo que hacen, no duden en elegir a Nico y Belu. ¡Gracias por regalarnos una experiencia que vamos a recordar para toda la vida! Marcelo y Estela !"',
    author: 'Dr MArcelo Nahin',
    initial: 'K',
    location: 'Brasil',
    year: '2026',
  },
  {
    id: '9',
    platform: 'google',
    rating: 5,
    comment:
      '"Fue una experiencia increíble, los nativos parecían poco amigables y al final eran super amigables, sin dudas uno de los lugares más bonitos y salvaje a los que viaje"',
    author: 'Santiago Palmero',
    initial: 'K',
    location: 'España',
    year: '2026',
  },
  {
    id: '10',
    platform: 'google',
    rating: 5,
    comment:
      '"Tuve un viaje en velero absolutamente increíble en San Blas con Nicolás y Belu como anfitriones. ¡Fue inolvidable desde el momento en que subí al barco hasta que desembarcamos! Las impresionantes islas, las aguas cristalinas y la sensación de aventura lo convirtieron en una experiencia de ensueño. Nicolás y Belu son unos anfitriones maravillosos y navegantes con mucha experiencia; su calidez, experiencia y entusiasmo crearon un ambiente muy positivo y acogedor para todos. Se esforzaron al máximo para asegurarse de que todos nos sintiéramos cómodos y pasáramos el mejor rato posible. :) Las comodidades a bordo fueron perfectas y la gastronomía fue excepcional, ¡casi digna de una estrella Michelin! Me sorprendieron las comidas frescas y sabrosas que prepararon en una cocina tan compacta, utilizando ingredientes locales con una creatividad increíble. Si buscas una aventura en velero auténtica y mágica, te recomiendo encarecidamente reservar con Nicolás y Belu. ¡Gracias por los recuerdos! ¡Sin duda volveré!"',
    author: 'Georgios Apostolopoulos',
    initial: 'K',
    location: 'Reino Unido',
    year: '2025',
  },
  {
    id: '11',
    platform: 'google',
    rating: 5,
    comment:
      '"Nuestro chárter en San Blas fue absolutamente mágico gracias a nuestra increíble tripulación: Belén, Vicky y los dos Nicos. Desde el momento en que subimos a bordo, nos hicieron sentir como en casa con su trato cálido y personal. Lo más destacado fue, sin duda, el snorkel y las excursiones por la isla. Su conocimiento de la vida marina es impresionante y nos enseñaron muchísimo sobre el mundo submarino. Mención especial merece su interacción con los niños: fueron pacientes, divertidos y los mantuvieron entretenidos todo el tiempo. Además, la comida fue simplemente excepcional: ¡cada plato fue una delicia! Si buscas un equipo profesional y a la vez cercano que te muestre este paraíso, no busques más. ¡Gracias por todo"',
    author: 'Pablo Ayestaran',
    initial: 'K',
    location: 'Reino Unido',
    year: '2025',
  },
  {
    id: '12',
    platform: 'tripadvisor',
    rating: 5,
    comment:
      '"It has been a great experience to meet a little San Blas from Nico and Bethlehem on board a sailboat. We have snorkeled in beautiful areas, visited several islands and eaten spectacularly, Nico and Bethlehem cook very rich. The experience with them would definitely repeat it again, they are very good hosts and very close. Thanks for these 3 days!"',
    author: 'Bea Rubio',
    initial: 'B',
    location: 'Reino Unido',
    year: '2025',
  },
  {
    id: '13',
    platform: 'tripadvisor',
    rating: 5,
    comment:
      '"The best patterns to visit a wonderful place. Sometimes, however much you seek, you are not right and in this case looking for little we find the experience of the trip First time living on a boat and we will repeat, 3 days dream mostly by the bosses Nico and Belu who are great professionals and even better people, explain the marine fauna and flora, be able to catch your dinner and visit locals away from touristic. We even played volleyball on the islands. The boat and the islands were already waiting for it but the good energy of the skippers was the icing. Search for them if you want excellence and get carried away by their vibe"',
    author: 'Loureiroo',
    initial: 'L',
    location: 'España',
    year: '2025',
  },
  {
    id: '14',
    platform: 'tripadvisor',
    rating: 5,
    comment:
      '"An unforgettable family adventure in Guna Yala! Our sailing charter in San Blas was absolutely magical, thanks to our incredible crew: Belén, Vicky, and the two Nicos. From the moment we stepped on board, they made us feel at home with their warm and personal touch. The highlights were definitely the snorkeling and the island excursions. Their knowledge of marine life is impressive, and they taught us so much about the underwater world. A special mention goes to how they interacted with the children; they were patient, fun, and kept them engaged the whole time. Also, the food was simply outstanding—every meal was a delight! If you are looking for a professional yet close-knit team to show you this paradise, look no further. Thank you for everything!"',
    author: 'Pablo A.',
    initial: 'P',
    location: 'España',
    year: '2026',
  },
  /*{
    id: '12',
    platform: 'tripadvisor',
    rating: 5,
    comment:
      '""',
    author: '',
    initial: '',
    location: '',
    year: '',
  },*/
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
      case 'tripadvisor':
        return <span className="text-xl font-bold text-[#33993f] tracking-tighter">TA.</span>;
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
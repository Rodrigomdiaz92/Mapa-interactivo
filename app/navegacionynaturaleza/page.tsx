'use client';
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import ActivitiesPromoWidget from "@/components/navegacionynaturaleza/ActivitiesPromoWidget";
import CharterPromoWidget from "@/components/navegacionynaturaleza/CharterPromoWidget";
import HistoryCenterBanner from "@/components/navegacionynaturaleza/HistoryCenterBanner";
import HistoryGridCard from "@/components/navegacionynaturaleza/HistoryGridCard";
import HistoryLeftEmbed from "@/components/navegacionynaturaleza/HistoryLeftEmbed";
import HistoryMediaCarousel from "@/components/navegacionynaturaleza/HistoryMediaCarousel";
import HistoryMediaLeft from "@/components/navegacionynaturaleza/HistoryMediaLeft";
import HistoryRightEmbed from "@/components/navegacionynaturaleza/HistoryRightEmbed";
import NauticalTimelineNav from "@/components/navegacionynaturaleza/NauticalTimelineNav";
import InstagramReel from "@/components/ui/InstagramReel";
import { InstagramEmbed } from "react-social-media-embed/dist/components/embeds/InstagramEmbed";


export default function NavegacionYNaturaleza() {
  return (
    
     <article >
      {/* <InstagramEmbed url="https://www.instagram.com/reel/DXMnGfbAFRa" width={328}  /> */}
      <NauticalTimelineNav />
      <section>
        
      {/* 1. Inicio del viaje */}
      <HistoryLeftEmbed
        badge="El Comienzo"
        title="Nuestra Pasión por el Mar y la Naturaleza"
        subtitle="De un sueño navegante a Sailing the World"
        text="Sailing the World nace del amor incondicional por la navegación libre y el respeto a los ecosistemas vírgenes. A través de @navegacionynaturaleza comenzamos a compartir la magia de vivir a bordo."
        instagramUrl="https://www.instagram.com/p/EXAMPLE1/"
        quote="El mar no es un lugar que visitas, es un estado mental."
      />
      </section>
      <section>
      {/* 2. Capítulos en San Blas */}
      <HistoryRightEmbed
        badge="San Blas & Guna Yala"
        title="Descubriendo el Archipiélago Paradisiaco"
        subtitle="Un encuentro cultural y natural inigualable"
        text="Nuestra travesía nos llevó a las cristalinas aguas de Guna Yala. Nos enamoramos de sus cayos, su gente y la paz que solo este lugar ofrece."
        instagramUrl="https://www.instagram.com/p/EXAMPLE2/"
      />
      </section>
      <section>
      {/* 3. Momento destacado */}
      <HistoryCenterBanner
        badge="Vida en el Catamarán"
        title="Experiencias Únicas para Nuestros Huéspedes"
        subtitle="Atardeceres, snorkel y gastronomía fresca a bordo"
        text="Cada charter es una historia única. Nos dedicamos a crear memorias imborrables combinando comodidad, aventura y desconexión total."
        instagramUrl="https://www.instagram.com/p/EXAMPLE3/"
      />
      </section>
      <section>

      {/* 4. Filosofía y comunidad */}
      <HistoryGridCard
        badge="Nuestra Filosofía"
        title="Navegación Consciente y Sostenible"
        text="Cuidamos el entorno que nos rodea. Colaboramos con las comunidades locales y promovemos un turismo respetuoso que cuide los arrecifes de San Blas."
        instagramUrl="https://www.instagram.com/p/EXAMPLE4/"
        quote="Preservamos el paraíso que nos acoge."
      />
      </section>
      <WhatsAppButton 
        phoneNumber="50761234567" 
        message="Hola, me gustaría consultar la disponibilidad para un catamarán."
        tooltipText="¡Escríbenos directamente por WhatsApp!"
      />
      <section>
        <CharterPromoWidget
        title="¿Listo para escribir tu propia historia en el paraíso?"
        description="Reserva tu catamarán privado en San Blas con todo incluido: capitán, marinero, comidas frescas y equipos de agua."
        buttonText="Ver Catamaranes Disponibles"
        buttonHref="/barcos"
      />
      </section>
      <section>
        <HistoryMediaCarousel
        badge="Momentos Inolvidables"
        title="La Magia de la Vida a Bordo"
        subtitle="Fotografías que capturan la esencia de San Blas"
        text="Cada jornada en el archipiélago ofrece una perspectiva única: desde amaneceres sobre aguas cristalinas hasta tardes compartiendo la cultura con la comunidad Guna Yala."
        images={[
          {
            src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop",
            alt: "Snorkel en arrecife de coral",
          },
          {
            src: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=600&auto=format&fit=crop",
            alt: "Playa en cayo deshabitado",
          },
          {
            src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
            alt: "Atardecer marino en San Blas",
          },
        ]}
      />
      </section>
      <section><ActivitiesPromoWidget buttonHref="/experiencias" /></section>
      <section>
        <HistoryMediaLeft
        badge="Bitácora de Viaje"
        title="Los Primeros Pasos en el Catamarán"
        subtitle="Un recorrido por nuestras primeras expediciones"
        text={`Antes de convertirnos en un servicio de charters, todo comenzó con travesías personales. 

Aprender a convivir con el viento, respetar los tiempos del mar y descubrir rincones inalcanzables en las Islas San Blas fue lo que encendió nuestra pasión.`}
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1500514966906-fe245eea9344?q=80&w=1000&auto=format&fit=crop"
        mediaAlt="Catamarán navegando en San Blas"
        quote="Navegar no es solo desplazarse, es aprender a vivir en armonía con el entorno."
      />
      </section>
    </article>
    
    
  );
}

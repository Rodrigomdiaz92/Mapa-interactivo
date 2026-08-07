"use client";
//import InteractiveMap from "@/components/map/InteractiveMap";
import ImageGallery from "@/components/panel/ImageGallery";
import CardCarousel from "@/components/ui/CardCarrousel";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import { useRef } from "react";
import CarrouselHome from "@/components/ui/CarrouselHome";
import Experiencias from "@/components/ui/Experiencias";
import Categorias from "@/components/ui/Categorias";
import { FAQ } from "@/components/ui/FAQ";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import ScrollCharters from "@/components/boatdetail/ScrollCharters";
import WidgetCarousel from "@/components/layout/WidgetCarousel";
import HistoryGridCard from "@/components/navegacionynaturaleza/HistoryGridCard";
import ActivitiesPromoWidget from "@/components/navegacionynaturaleza/ActivitiesPromoWidget";
import CharterPromoWidget from "@/components/navegacionynaturaleza/CharterPromoWidget";
import AsistenciaViajeroWidget from "@/components/ui/AsistenciaViajeroWidget";
import { Reseñas } from "@/components/boatdetail/Reseñas";



export default function Home() {

 
  
  return (
    <article >    
      <section id="map" className="flex-1">
        {/*<InteractiveMap />*/}
      </section>
      <section id="carousel" className="flex-1">
        {/* <CarrouselHome />       */}
        <WidgetCarousel title="Destacados de la Semana">
        {/* Widget 1 */}
        <CharterPromoWidget
          title="Reserva tu Catamarán Privado"
          description="Navega por San Blas con todo incluido."
          buttonText="Ver Flota"
        />

        {/* Widget 2 */}
        <ActivitiesPromoWidget buttonHref="/actividades" />

        {/* Widget 3 */}
        <HistoryGridCard
          title="Nuestra Filosofía a Bordo"
          text="Navegación consciente, gastronomía fresca y respeto por la cultura Guna Yala."
          instagramUrl="https://www.instagram.com/p/EXAMPLE/"
          badge="Filosofía"
        />
      </WidgetCarousel>
      </section>
      <section id="categories">
        <Categorias />        
      </section>
      <section id="experiences">
        <Experiencias />
      </section>
      
      <section id="testimonials">       
        
      <ScrollCharters 
        title="Catamaranes Exclusivos"
        subtitle="Espacio y confort superior para navegar el Caribe"
        category="Catamaran"
      />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="asistencia-viajero">
        <AsistenciaViajeroWidget />
      </section>
      <Reseñas />
      <WhatsAppButton 
        phoneNumber="50761234567" 
        message="Hola, me gustaría consultar la disponibilidad para un catamarán."
        tooltipText="¡Escríbenos directamente por WhatsApp!"
      />
    </article>
    
  );
}
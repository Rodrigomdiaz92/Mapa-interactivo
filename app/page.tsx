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
import HeroVideo from "@/components/layout/HeroVideo";
import DestacadoBarcoReelWidget from "@/components/boatsale/DestacadoBarcoReelWidget";



export default function Home() {

  const barcoDestacadoReel = {
  id: "Franca Austral",
  titulo: "Franca Austral a la Venta (Dufour 4800)",
  subtitulo: "Listo para navegar o continuar negocio de Charter en San Blas",
  precio: "$30,000 USD",
  ubicacion: "San Blas, Panamá",
  anio: 1982,
  eslora: "34,94 pies / 10,65 metros",
  capacidad: " 6 Pax aprox",
  badgeText: "Vendemos nuestra casa flotante ❤️",
  // Se define la URL del Reel para que el componente muestre Instagram
  instagramReelUrl: "https://www.instagram.com/reel/DXPgIORgKix/", 
  whatsappMessage: "Hola Sailing the World, me interesa recibir más información sobre el Franca Austral",
  destacados: [
    "Volvo Penta. MD11C, 25 HP",
    "380 litros (2 tanque de inoxidable)",
    "Ecosonda: fishfinder Garmin",
    "radio VHF Unidem",
    "2 Camarotes + cabina central ",
    "Paneles solares ",
    "Excelente estado de mantenimiento",
    "Mantenimiento al día",
    "Consultanos por mas especificaciones y fotos de la embarcación",
  ],
};

 
  
  return (
    <article >    
      <section id="map" className="flex-1">
        <HeroVideo />
      </section>
      <section id="carousel" >
        <DestacadoBarcoReelWidget {...barcoDestacadoReel} />
        
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
        phoneNumber="+50766302038" 
        message="(H)Hola, me gustaría conocer mas sobre su servicio."
        tooltipText="¿Dudas?¡Escríbenos por WhatsApp!"
      />
    </article>
    
  );
}
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
      <section id="about-us" >
                
        <WidgetCarousel title="¿Quienes Somos?">
        {/* Widget 1 */}
        <HistoryGridCard
          title="Viví San Blas con Nico, Belu y Nuestra Flota Aliada"
          text={`Somos Nico y Belu, biólogos y navegantes. Después de recorrer el mundo a vela, hoy te abrimos las puertas de nuestro barco para que vivas San Blas de forma auténtica: playas vírgenes, gastronomía fresca y una conexión real con la cultura local.\n \n ** ¿Buscás otra fecha o un barco diferente? ** \n Si nuestro barco no tiene disponibilidad, trabajamos junto a una red de embarcaciones y capitanes aliados de total confianza, garantizando los mismos estándares de seguridad, confort y atención personalizada que definen a Sailing the World.`}
          instagramUrl="https://www.instagram.com/reel/DXMnGfbAFRa/"
          badge="ANFITRIONES & FLOTA"
        />       

        {/* Widget 2 */}
        
        
        

        {/* Widget 3 */}
        <DestacadoBarcoReelWidget {...barcoDestacadoReel} />
        
      </WidgetCarousel>
      <CharterPromoWidget
          title="Hospedate con Nico y Belu"
          description="Viví la experiencia San Blas a bordo de nuestro velero."
          buttonText="Conocer Barco"
          buttonHref = "/charters/1"
        />
      </section>
      <section id="categories">
        <Categorias />        
      </section>
      <section id="experiences">
        <Experiencias />
      </section>
      
      <section id="catalogo">
        <ScrollCharters 
        title="Veleros Recomendados"
        subtitle="Tu proxima aventura navegando por el Caribe Panameño"
        category="Sailboat"
      />  
      <ScrollCharters 
        title="Catamaranes Exclusivos"
        subtitle="Espacio y confort superior para navegar el Caribe"
        category="Catamaran"
      />
      <ActivitiesPromoWidget buttonHref="/actividades" />
      </section>
      <section id="faqs">
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
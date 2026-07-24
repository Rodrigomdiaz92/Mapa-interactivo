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



export default function Home() {

 
  
  return (
    <div >    
      <section className="flex-1">
        {/*<InteractiveMap />*/}
      </section>
      <section className="flex-1">
        <CarrouselHome />      
      </section>
      <section>
        <Experiencias />
      </section>
      <section>
        <Categorias />        
      </section>
      <section>
        <CardCarousel/>
      </section>
      <section>
        <FAQ />
      </section>
      <WhatsAppButton 
  phoneNumber="50761234567" 
  message="Hola, me gustaría consultar la disponibilidad para un catamarán."
  tooltipText="¡Escríbenos directamente por WhatsApp!"
/>
    </div>
    
  );
}
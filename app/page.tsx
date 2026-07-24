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



export default function Home() {

 
  
  return (
    <article >    
      <section id="map" className="flex-1">
        {/*<InteractiveMap />*/}
      </section>
      <section id="carousel" className="flex-1">
        <CarrouselHome />      
      </section>
      <section id="experiences">
        <Experiencias />
      </section>
      <section id="categories">
        <Categorias />        
      </section>
      <section id="testimonials">
        {/* <CardCarousel/> */}
        <ScrollCharters 
        title="Catamaranes destacados en San Blas" 
         
      />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <WhatsAppButton 
  phoneNumber="50761234567" 
  message="Hola, me gustaría consultar la disponibilidad para un catamarán."
  tooltipText="¡Escríbenos directamente por WhatsApp!"
/>
    </article>
    
  );
}
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



export default function Home() {

 
  
  return (
    
    <main className="h-screen w-screen flex flex-col">
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
      <section><FAQ /></section>
    </main>
  );
}
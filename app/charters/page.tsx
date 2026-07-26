//import Catalogo from "@/components/boatdetail/Catalogo";
"use client";
import Catalogo from "@/components/boatdetail/Catalogo";
import ScrollCharters from "@/components/boatdetail/ScrollCharters";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import InteractiveMap from "@/components/map/InteractiveMap";
import Categorias from "@/components/ui/Categorias";
import { INITIAL_CATALOG_ITEMS } from "@/data/catalogData";
import { useRouter } from "next/navigation";
import { Suspense } from 'react';  




export default function Charters() {
  const router = useRouter();

  const handleSelectBoat = (boatId: string) => {
    // Redirige hacia la pantalla de detalle enviando el ID seleccionado
    router.push(`/charters/${boatId}`);
  };
  return (
    <article>
     {/* <Catalogo /> */}
     <Suspense fallback={<div>Loading...</div>}><Catalogo 
        items={INITIAL_CATALOG_ITEMS} 
        onSelectBoat={handleSelectBoat} 
      /></Suspense>
     
     <WhatsAppButton 
        phoneNumber="50761234567" 
        message="Hola, me gustaría consultar la disponibilidad para un catamarán."
        tooltipText="¡Escríbenos directamente por WhatsApp!"
      />
      <Suspense fallback={<div>Loading...</div>}><ScrollCharters 
        title="Catamaranes destacados en San Blas" 
        category="Catamaran" 
      /></Suspense> 
        

    </article>
  );
}
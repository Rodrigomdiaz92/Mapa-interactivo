"use client";

import Catalogo from "@/components/boatdetail/Catalogo";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { INITIAL_CATALOG_ITEMS } from "@/data/catalogData";
import { useRouter } from "next/navigation";
import { Suspense } from 'react';  

export default function Charters() {
  const router = useRouter();
  //let barcos = console.log(INITIAL_CATALOG_ITEMS);

  const handleSelectBoat = (boatId: number) => {
    router.push(`/charters/${boatId}`);
  };

  return (
    <article>
      <Suspense fallback={<div className="p-12 text-center text-neutral-500">Cargando catálogo...</div>}>
        <Catalogo 
          items={INITIAL_CATALOG_ITEMS} 
          onSelectBoat={handleSelectBoat} 
        />
      </Suspense>
     
      <WhatsAppButton 
        phoneNumber="50761234567" 
        message="Hola, me gustaría consultar la disponibilidad para un catamarán."
        tooltipText="¡Escríbenos directamente por WhatsApp!"
      />
    </article>
  );
}
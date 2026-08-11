'use client';
import Reseñas from "@/components/boatdetail/Reseñas";
import DestacadoBarcoReelWidget from "@/components/boatsale/DestacadoBarcoReelWidget";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import InteractiveMap from "@/components/map/InteractiveMap";
import { InteractiveMapWidget } from "@/components/map/InteractiveMapWidget";
import DecisionButtons from "@/components/ui/DecisionButtons";
import Experiencias from "@/components/ui/Experiencias";
import FAQ from "@/components/ui/FAQ";
import { Anchor, Sparkles } from "lucide-react";

export default function GunayalaMap() {
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
    <div> 
     <InteractiveMap />
     <Experiencias />
     <DecisionButtons
  optionPrimary={{
    label: "Paseos & Charters",
    href: "/charters",
    description: "Navega por las islas de San Blas a bordo de nuestras embarcaciones.",
    icon: Anchor,
  }}
  optionSecondary={{
    label: "Quienes somos",
    href: "/navegacionynaturaleza",
    description: "Conoce nuestra historia y cómo surgió Sailing the World.",
    icon: Sparkles,
  }}
/>
     <FAQ />
     <Reseñas/>
     <DestacadoBarcoReelWidget {...barcoDestacadoReel} /> 
     
     <WhatsAppButton 
        phoneNumber="+50766302038" 
        message="(E)Hola, me gustaría recibir más información sobre las experiencias en San Blas."
        tooltipText="Te ayudamos a elegir tu experiencia.¡Escríbenos!"
      />  

    </div>
  );
}
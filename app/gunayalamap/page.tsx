import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import InteractiveMap from "@/components/map/InteractiveMap";

export default function GunayalaMap() {
  return (
    <main className="h-screen w-screen flex flex-col"> 
     <InteractiveMap />
     <WhatsAppButton 
  phoneNumber="50761234567" 
  message="Hola, me gustaría consultar la disponibilidad para un catamarán."
  tooltipText="¡Escríbenos directamente por WhatsApp!"
/>    

    </main>
  );
}
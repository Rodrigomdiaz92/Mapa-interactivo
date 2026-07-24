import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import InteractiveMap from "@/components/map/InteractiveMap";
import { InteractiveMapWidget } from "@/components/map/InteractiveMapWidget";
import Experiencias from "@/components/ui/Experiencias";
import FAQ from "@/components/ui/FAQ";

export default function GunayalaMap() {
  return (
    <div> 
     <InteractiveMap />
     <Experiencias />
     <FAQ /> 
     {/* <InteractiveMapWidget /> */}
     <WhatsAppButton 
  phoneNumber="50761234567" 
  message="Hola, me gustaría consultar la disponibilidad para un catamarán."
  tooltipText="¡Escríbenos directamente por WhatsApp!"
/>    

    </div>
  );
}
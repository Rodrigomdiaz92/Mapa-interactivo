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
     
     <WhatsAppButton 
        phoneNumber="+50766302038" 
        message="(E)Hola, me gustaría recibir más información sobre las experiencias en San Blas."
        tooltipText="Te ayudamos a elegir tu experiencia.¡Escríbenos!"
      />  

    </div>
  );
}
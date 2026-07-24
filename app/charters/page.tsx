import Catalogo from "@/components/boatdetail/Catalogo";
import ScrollCharters from "@/components/boatdetail/ScrollCharters";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import InteractiveMap from "@/components/map/InteractiveMap";
import Categorias from "@/components/ui/Categorias";

export default function Charters() {
  return (
    <article>
     <Catalogo />
     <WhatsAppButton 
        phoneNumber="50761234567" 
        message="Hola, me gustaría consultar la disponibilidad para un catamarán."
        tooltipText="¡Escríbenos directamente por WhatsApp!"
      /> 
      {/* <ScrollCharters 
        title="Catamaranes destacados en San Blas" 
        category="Catamaran" 
      /> */}

    </article>
  );
}
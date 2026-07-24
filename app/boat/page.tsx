import Catalogo from "@/components/boatdetail/Catalogo";
import FloatingCTA from "@/components/boatdetail/FloatingCTA";
import Includes from "@/components/boatdetail/Includes";
import Reseñas from "@/components/boatdetail/Reseñas";
import { Experiencias } from "@/components/ui/Experiencias";
import FAQ from "@/components/ui/FAQ";

export default function Boat() {
  return (
    <div>
     <Includes />
     <Experiencias />
     <FAQ /> 
     <Reseñas />
     <FloatingCTA 
  text="Consultar disponibilidad"
  phoneNumber="50761234567"
  whatsappMessage="Hola, me gustaría consultar precios y fechas disponibles."
/>
     
     </div>  

    
  );
}
import ScrollCharters from "@/components/boatdetail/ScrollCharters";
import CatalogoVenta from "@/components/boatsale/CatalogoVenta";
import ScrollVentas from "@/components/boatsale/ScrollVentas";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { InstagramEmbed } from "react-social-media-embed";



export default function BoatsOnSale() {
  return (
    <article > 
     <CatalogoVenta />
     
    {/* <ScrollVentas 
      title="Barcos Recientes en Venta" 
      minYear={2015} 
    /> */}     
    <WhatsAppButton 
      phoneNumber="50761234567" 
      message="Hola, me gustaría consultar la disponibilidad para un catamarán."
      tooltipText="¡Escríbenos directamente por WhatsApp!"
    />
    </article>
  );
}
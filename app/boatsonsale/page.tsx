import ScrollCharters from "@/components/boatdetail/ScrollCharters";
import CatalogoVenta from "@/components/boatsale/CatalogoVenta";
import ScrollVentas from "@/components/boatsale/ScrollVentas";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { InstagramEmbed } from "react-social-media-embed";



export default function BoatsOnSale() {
  return (
    <main className="h-screen w-screen flex flex-col"> 
     {/*<CatalogoVenta />*/}
     // Ejemplo: Promocionar solo Catamaranes en Alquiler
<ScrollCharters 
  title="Catamaranes destacados en San Blas" 
  category="Catamaran" 
/>

// Ejemplo: Promocionar embarcaciones en venta fabricadas después del año 2015
<ScrollVentas 
  title="Barcos Recientes en Venta" 
  minYear={2015} 
/>
     
    <WhatsAppButton />
    </main>
  );
}
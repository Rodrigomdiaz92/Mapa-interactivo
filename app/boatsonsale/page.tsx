import ScrollCharters from "@/components/boatdetail/ScrollCharters";
import CatalogoVenta from "@/components/boatsale/CatalogoVenta";
import DestacadoBarcoFotosWidget from "@/components/boatsale/DestacadoBarcoFotosWidget";
import DestacadoBarcoWidget from "@/components/boatsale/DestacadoBarcoFotosWidget";
import DestacadoBarcoReelWidget from "@/components/boatsale/DestacadoBarcoReelWidget";
import ScrollVentas from "@/components/boatsale/ScrollVentas";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { InstagramEmbed } from "react-social-media-embed";



export default function BoatsOnSale() {

  const barcoDestacado = {
    id: "leopard-40-2018",
    titulo: "Leopard 40 (2018)",
    subtitulo: "Excelente estado, totalmente equipado para chárter o navegación oceánica.",
    precio: "USD 320,000",
    ubicacion: "San Blas, Panamá",
    anio: 2018,
    eslora: "40 ft / 12 m",
    capacidad: "6 + 2 Pax",
    imagenes: [
      "/images/barcos/leopard40-1.jpg",
      "/images/barcos/leopard40-2.jpg",
      "/images/barcos/leopard40-3.jpg",
    ],
    destacados: [
      "3 Camarotes dobles + 2 proa",
      "Paneles solares e Inversor",
      "Motorización Yanmar al día",
      "Listo para navegar / Chárter activo",
    ],
    badgeText: "Oportunidad Destacada",
    instagramReelUrl: "https://www.instagram.com/reel/example",
  };
  return (
    <article > 
      <DestacadoBarcoReelWidget {...barcoDestacado} />
     <CatalogoVenta />     
     <ScrollVentas 
      title="Barcos Recientes en Venta" 
      minYear={2015} 
    />
    <DestacadoBarcoFotosWidget {...barcoDestacado} />
    
    <WhatsAppButton 
      phoneNumber="50761234567" 
      message="Hola, me gustaría consultar la disponibilidad para un catamarán."
      tooltipText="¡Escríbenos directamente por WhatsApp!"
    />
    </article>
  );
}
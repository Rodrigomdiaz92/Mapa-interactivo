import ScrollCharters from "@/components/boatdetail/ScrollCharters";
import CatalogoVenta from "@/components/boatsale/CatalogoVenta";
import DestacadoBarcoFotosWidget from "@/components/boatsale/DestacadoBarcoFotosWidget";
import DestacadoBarcoWidget from "@/components/boatsale/DestacadoBarcoFotosWidget";
import DestacadoBarcoReelWidget from "@/components/boatsale/DestacadoBarcoReelWidget";
import ScrollVentas from "@/components/boatsale/ScrollVentas";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { InstagramEmbed } from "react-social-media-embed";



export default function BoatsOnSale() {

  const barcoDestacadoCarrousel = {
  id: "leopard-40-galeria",
  titulo: "Leopard 40 (2018)",
  subtitulo: "Catamarán de Lujo para Chárter o Venta",
  precio: "$320,000 USD",
  ubicacion: "San Blas, Panamá",
  anio: 2018,
  eslora: "40 ft / 12.2m",
  capacidad: "6 + 2 Pax",
  badgeText: "Galería de Fotos",
  // Se omite o pasa como undefined para que NO cargue Instagram
  instagramReelUrl: undefined, 
  // Se proporciona el listado de imágenes para que se active el carrusel
  imagenes: [
    "/images/barcos/leopard40-exterior.jpg",
    "/images/barcos/leopard40-interior.jpg",
    "/images/barcos/leopard40-camarote.jpg",
  ],
  whatsappMessage: "Hola Sailing the World, me interesa recibir más información sobre el Leopard 40",
  destacados: [
    "3 Camarotes dobles + 2 individuales",
    "Paneles solares y potabilizadora",
    "Excelente estado de mantenimiento",
    "Mantenimiento al día",
  ],
};
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
    <article > 
      <DestacadoBarcoReelWidget {...barcoDestacadoCarrousel} />
     <CatalogoVenta />     
     <ScrollVentas 
      title="Barcos Recientes en Venta" 
      minYear={2015} 
    />
    <DestacadoBarcoReelWidget {...barcoDestacadoReel} />
    
    <WhatsAppButton 
        phoneNumber="+50766302038" 
        message="(BS)Hola, necesito ayuda para elegir un barco."
        tooltipText="Te ayudamos a elegir tu barco ideal.¡Escríbenos!"
      />
    </article>
  );
}
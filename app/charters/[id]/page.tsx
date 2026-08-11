import { Metadata } from "next";
import { notFound } from "next/navigation";
import { INITIAL_CATALOG_ITEMS } from "@/data/catalogData";
import { CatalogItem } from "@/types/catalog";
import BoatDetailClient from "@/components/boatdetail/BoatDetailClient";
import FloatingCTA from "@/components/boatdetail/FloatingCTA";
import HistoryGridCard from "@/components/navegacionynaturaleza/HistoryGridCard";
import HistoryMediaCarousel from "@/components/navegacionynaturaleza/HistoryMediaCarousel";
import ScrollCharters from "@/components/boatdetail/ScrollCharters";
import AsistenciaViajeroWidget from "@/components/ui/AsistenciaViajeroWidget";
import { FAQ } from "@/components/ui/FAQ";
import { InteractiveMapWidget } from "@/components/map/InteractiveMapWidget";
import { CardCarousel } from "@/components/ui/CardCarrousel";
import Reseñas from "@/components/boatdetail/Reseñas";
import DestacadoBarcoReelWidget from "@/components/boatsale/DestacadoBarcoReelWidget";

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
  searchParams?: Promise<{ lang?: string }> | { lang?: string };
}

// 1. Generador de Metadatos Dinámicos para SEO
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const resolvedSearchParams = searchParams instanceof Promise ? await searchParams : searchParams;
  
  const idNumeric = Number(resolvedParams.id);
  const lang = (resolvedSearchParams?.lang === "en" ? "en" : "es") as "es" | "en";
  const item = INITIAL_CATALOG_ITEMS.find((el) => el.id === idNumeric);

  if (!item) {
    return {
      title: "Embarcación no encontrada | Sailing the World",
    };
  }

  const categoryLabel =
    item.category === "Catamaran"
      ? "Catamarán"
      : item.category === "Sailboat"
      ? "Velero"
      : "Hospedaje";

  const rawDescription = item.boatDescription?.[lang] || item.boatLongDescription?.[lang] || "";
  const metaDescription = rawDescription.length > 155 ? `${rawDescription.substring(0, 152)}...` : rawDescription;
  
  const pageTitle = `${item.boatName} - Alquiler de ${categoryLabel} en San Blas | Sailing the World`;
  const mainImage = item.boatCoverPhoto || (item.boatGalleryPhotos && item.boatGalleryPhotos[0]) || "";

  return {
    title: pageTitle,
    description: metaDescription,
    keywords: [
      item.boatName,
      categoryLabel,
      "San Blas",
      "Panamá",
      "Charter San Blas",
      "Alquiler de veleros",
      "Sailing the World"
    ],
    openGraph: {
      title: pageTitle,
      description: metaDescription,
      url: `https://sailingtheworld.com/charters/${item.id}`,
      siteName: "Sailing the World",
      images: mainImage ? [{ url: mainImage, width: 1200, height: 630, alt: item.boatName }] : [],
      locale: lang === "es" ? "es_PA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: metaDescription,
      images: mainImage ? [mainImage] : [],
    },
  };
}

// 2. Componente de Servidor Principal
export default async function BoatDetailPage({ params, searchParams }: PageProps) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const resolvedSearchParams = searchParams instanceof Promise ? await searchParams : searchParams;

  const idNumeric = Number(resolvedParams.id);
  const lang = (resolvedSearchParams?.lang === "en" ? "en" : "es") as "es" | "en";
  const item: CatalogItem | undefined = INITIAL_CATALOG_ITEMS.find((el) => el.id === idNumeric);

  if (!item) {
    notFound();
  }

  // 3. Schema.org / JSON-LD (Datos estructurados para fragmentos enriquecidos en Google)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": item.boatName,
    "image": item.boatCoverPhoto ? [item.boatCoverPhoto] : [],
    "description": item.boatDescription?.[lang] || "",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": item.pricing?.discountPricePerPersonPerDay || item.pricing?.basePricePerPersonPerDay || 0,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Sailing the World"
      }
    }
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
    <>
      {/* Inyección de Schema JSON-LD para los motores de búsqueda */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Renderizado de la UI de Cliente */}
      <BoatDetailClient item={item} lang={lang} />
      <HistoryGridCard
              badge="GUÍA DE VIAJE"
              title="¿Cómo llegar al paraíso de San Blas?"
              text="Te mostramos el paso a paso para llegar a nuestras embarcaciones y empezar la aventura. Nuestros queridos amigos de @flotandoando_ te cuentan de primera mano cómo es la experiencia para llegar a tu proximo hospedaje en el archipiélago de San Blas."
              instagramUrl="https://www.instagram.com/reel/DVRn9SHDgzv"
              quote="El viaje hacia el paraíso también es parte de la aventura."
            />
      <ScrollCharters 
              title="Otras opciones recomendadas en San Blas"
              subtitle="Confort superior para navegar el Caribe"
              category={item.category}
            />
            <InteractiveMapWidget />
            
      
            <section id="asistencia-viajero">
                    <AsistenciaViajeroWidget />
                  </section>
                  
                  <section id="faq">
                          <FAQ />
                        </section>
                        <Reseñas />
            <HistoryMediaCarousel
                    badge="Momentos Inolvidables"
                    title="La Magia de la Vida a Bordo"
                    subtitle="Fotografías que capturan la esencia de San Blas"
                    text="Cada jornada en el archipiélago ofrece una perspectiva única: desde amaneceres sobre aguas cristalinas hasta tardes compartiendo la cultura con la comunidad Guna Yala."
                    images={[
                      {
                        src: "/contenido/experiencias/snorkel/1.jpg",
                        alt: "Snorkel en arrecife de coral",
                      },
                      {
                        src: "/contenido/experiencias/explorar/1.jpg",
                        alt: "Playa en cayo deshabitado",
                      },
                      {
                        src: "/contenido/experiencias/atardecer/1.jpg",
                        alt: "Atardecer marino en San Blas",
                      },
                    ]}
                  />
                  <DestacadoBarcoReelWidget {...barcoDestacadoReel} />
      <FloatingCTA
        text = 'Consultar disponibilidad'
        phoneNumber = '+50766302038'
        whatsappMessage = {`(CDF)¡Hola! Quisiera consultar disponibilidad para: ${item.boatName} (ID: ${item.id})`} />
    </>
  );
}
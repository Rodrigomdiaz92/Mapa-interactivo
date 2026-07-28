import { Metadata } from "next";
import { notFound } from "next/navigation";
import { INITIAL_CATALOG_ITEMS } from "@/data/catalogData";
import { CatalogItem } from "@/types/catalog";
import BoatDetailClient from "@/components/boatdetail/BoatDetailClient";

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

  return (
    <>
      {/* Inyección de Schema JSON-LD para los motores de búsqueda */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Renderizado de la UI de Cliente */}
      <BoatDetailClient item={item} lang={lang} />
    </>
  );
}
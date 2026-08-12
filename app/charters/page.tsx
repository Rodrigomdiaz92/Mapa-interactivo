


import { Metadata } from 'next';
import ChartersClient from "@/components/urls/ChartersClient";

export const metadata: Metadata = {
  title: 'Catálogo de Catamaranes, Veleros y Cabañas en San Blas | Sailing the World',
  description: 'Explora nuestras opciones de hospedaje en San Blas: Catamaranes de lujo, veleros de expedición y cabañas en islas privadas. Precios desde $220/día.',
  keywords: [
    'alquiler catamaran san blas',
    'veleros en san blas panama',
    'san blas sailboat charter options',
    'cabanas islas san blas',
    'precios charter guna yala'
  ],
  alternates: {
    canonical: 'https://sailingtheworld.net/charters',
  },
  openGraph: {
    title: 'Hospedajes en Catamarán y Velero en San Blas | Sailing the World',
    description: 'Encuentra la embarcación ideal para explorar las Islas San Blas. Tripulación y atención personalizada incluida.',
    url: 'https://sailingtheworld.net/charters',
    siteName: 'Sailing the World',
    locale: 'es_PA',
    type: 'website',
    images: [
      {
        url: 'https://sailingtheworld.net/contenido/catamaranes/Zenith/catalogo/1.png',
        width: 1200,
        height: 630,
        alt: 'Catamarán en las Islas San Blas',
      },
    ],
  },
};

export default function Charters() {
  
  const chartersSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Flota de Catamaranes, Veleros y Hospedajes en San Blas',
    'description': 'Catálogo de opciones de alojamiento navegable y terrestre en el archipiélago de Guna Yala.',
    'url': 'https://sailingtheworld.net/charters',
    'provider': {
      '@type': 'TravelAgency',
      'name': 'Sailing the World'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chartersSchema) }}
      />
      <ChartersClient/>
    </>
  );
}
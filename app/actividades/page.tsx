
import ActividadesClient from "@/components/urls/ActividadesClient";


// app/actividades/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mapa Interactivo de San Blas (Guna Yala) & Experiencias a Vela | Sailing the World',
  description: 'Explora nuestro mapa interactivo de las Islas San Blas. Descubre puntos de snorkel, navegación en arrecifes, islas vírgenes y actividades culturales en Guna Yala.',
  keywords: [
    'mapa interactivo san blas',
    'mapa guna yala panama',
    'que hacer en san blas',
    'san blas interactive map',
    'snorkeling reef san blas',
    'island hopping guna yala map',
    'actividades velero san blas',
    'paddleboard san blas islands'
  ],
  alternates: {
    canonical: 'https://sailingtheworld.net/actividades',
  },
  openGraph: {
    title: 'Mapa Interactivo de San Blas (Guna Yala) & Experiencias | Sailing the World',
    description: 'Navega en nuestro mapa interactivo y planifica tus actividades en San Blas: snorkel en arrecifes, kayak, atardeceres y conexión cultural Guna.',
    url: 'https://sailingtheworld.net/actividades',
    siteName: 'Sailing the World',
    locale: 'es_PA',
    type: 'website',
    images: [
      {
        url: 'https://sailingtheworld.net/contenido/experiencias/explorar/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Mapa interactivo y experiencias de exploración en las Islas San Blas Guna Yala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mapa Interactivo de San Blas & Experiencias en Velero',
    description: 'Explora las Islas San Blas con nuestro mapa interactivo: arrecifes de snorkel, playas vírgenes y cultura Guna Yala.',
    images: ['https://sailingtheworld.net/contenido/experiencias/explorar/1.jpg'],
  },
  other: {
    'geo.region': 'PA-KY', // Código ISO de Guna Yala, Panamá
    'geo.placename': 'San Blas Islands, Guna Yala',
    'geo.position': '9.5541;-78.9619',
    'ICBM': '9.5541, -78.9619',
  },
};

export default function GunayalaMap() {
  
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    'name': 'Mapa Interactivo y Experiencias en San Blas (Guna Yala)',
    'description': 'Navega de forma interactiva por los mejores puntos de snorkel, islas vírgenes y rutas de navegación en el archipiélago de San Blas.',
    'touristType': ['EcoTourism', 'Adventure', 'Sailing'],
    'location': {
      '@type': 'Place',
      'name': 'Islas San Blas (Guna Yala)',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Guna Yala',
        'addressCountry': 'PA'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 9.5541,
        'longitude': -78.9619
      }
    },
    'provider': {
      '@type': 'TravelAgency',
      'name': 'Sailing the World',
      'url': 'https://sailingtheworld.net'
    }
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ActividadesClient/>

    </>
  );
}
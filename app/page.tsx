

import { Metadata } from 'next';
import HomeClient from "@/components/urls/HomeClient";

export const metadata: Metadata = {
  title: 'Sailing the World | Charters & Hospedaje en Catamarán y Velero en San Blas',
  description: 'Vive el verdadero San Blas en el archipiélago de Guna Yala. Alquiler de catamaranes y veleros privados con Nico, Belu y flota aliada. Biología, navegación y hospedaje exclusivo.',
  keywords: [
    'san blas catamaran charter',
    'alquiler velero san blas',
    'charter guna yala',
    'hospedaje en velero panama',
    'san blas sailboat rental',
    'private boat charter guna yala',
    'sailing the world san blas',
    'franca austral dufour 4800'
  ],
  alternates: {
    canonical: 'https://sailingtheworld.net',
  },
  openGraph: {
    title: 'Sailing the World | Hospedaje y Charters en Catamarán en San Blas, Panamá',
    description: 'Navega por el archipiélago de San Blas a bordo de veleros y catamaranes exclusivos. Guías locales, biólogos y tripulación experta.',
    url: 'https://sailingtheworld.net',
    siteName: 'Sailing the World',
    locale: 'es_PA',
    type: 'website',
    images: [
      {
        url: 'https://sailingtheworld.net/contenido/experiencias/explorar/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Catamarán navegando en las aguas turquesas de San Blas Guna Yala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sailing the World | Veleros & Catamaranes en San Blas',
    description: 'Explora San Blas Guna Yala a bordo de nuestros catamaranes y veleros privados.',
    images: ['https://sailingtheworld.net/contenido/experiencias/explorar/1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function Home() {

  
const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    'name': 'Sailing the World',
    'alternateName': 'Sailing the World by Navegación y Naturaleza',
    'url': 'https://sailingtheworld.net',
    'logo': 'https://sailingtheworld.net/icons/3.svg',
    'image': 'https://sailingtheworld.net/contenido/experiencias/explorar/1.jpg',
    'description': 'Charters y hospedajes exclusivos en catamarán y velero en las Islas San Blas (Guna Yala), Panamá. Experiencias de navegación ecológica guiadas por biólogos y tripulación local.',
    'telephone': '+50766302038',
    'priceRange': '$$$',
    'address': {
      '@type': 'PostalAddress',
      'addressRegion': 'Guna Yala',
      'addressCountry': 'PA'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 9.5541,
      'longitude': -78.9619
    },
    'sameAs': [
      'https://www.instagram.net/sailingtheworld',
       'https://www.instagram.com/sailingthe.world/',
       'https://www.facebook.com/sailingtheworld25', // Agregar redes sociales
    ]
  };

 
  
  return (
    < >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />    
      <HomeClient />
    </>
    
  );
}
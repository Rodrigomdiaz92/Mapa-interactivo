

import NosotrosClient from '@/components/urls/NosotrosClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Biólogos & Capitanes en San Blas | Sailing the World',
  description: 'Conoce a Nico y Belu, biólogos marinos y navegantes. Descubre la historia detrás de Sailing the World y nuestra red de capitanes aliados en Guna Yala.',
  keywords: [
    'biologos en san blas',
    'nico y belu sailing the world',
    'capitanes velero san blas',
    'turismo sostenible guna yala',
    'navegacion y naturaleza'
  ],
  alternates: {
    canonical: 'https://sailingtheworld.net/navegacionynaturaleza',
  },
  openGraph: {
    title: 'Nico y Belu | Biólogos y Capitanes en San Blas Guna Yala',
    description: 'Explora el archipiélago de San Blas con un enfoque biológico, ecológico y respetuoso con la comunidad local.',
    url: 'https://sailingtheworld.net/navegacionynaturaleza',
    siteName: 'Sailing the World',
    locale: 'es_PA',
    type: 'profile',
    images: [
      {
        url: 'https://sailingtheworld.net/contenido/experiencias/explorar/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Nico y Belu navegando por las Islas San Blas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Nosotros | Sailing the World',
    description: 'Conoce a Nico y Belu, biólogos y navegantes en las Islas San Blas.',
  },
};

export default function NavegacionYNaturaleza() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Sailing the World',
      'alternateName': 'Navegación y Naturaleza',
      'url': 'https://sailingtheworld.net',
      'founder': [
        {
          '@type': 'Person',
          'name': 'Nico',
          'jobTitle': 'Biólogo Marino y Capitán de Velero'
        },
        {
          '@type': 'Person',
          'name': 'Belu',
          'jobTitle': 'Bióloga Marina y Navegante'
        }
      ],
      'knowsAbout': [
        'Navegación a vela',
        'Ecología marina',
        'San Blas Guna Yala',
        'Conservación oceánica'
      ]
    }
  };
  return (
    
     < >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <NosotrosClient/>
      
    </>
    
    
  );
}

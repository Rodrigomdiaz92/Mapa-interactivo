import Contacto from "@/components/contacto/Contacto";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto & Reservas | Alquiler de Barcos en San Blas | Sailing the World',
  description: 'Ponte en contacto con Sailing the World para coordinar tu viaje en catamarán o velero por San Blas (Guna Yala). Asesoría personalizada por WhatsApp o email.',
  keywords: [
    'contacto san blas sailboat charter',
    'reserva catamaran san blas',
    'informacion viajes guna yala',
    'telefono sailing the world'
  ],
  alternates: {
    canonical: 'https://sailingtheworld.net/contacto',
  },
  openGraph: {
    title: 'Contacto y Reservas | Sailing the World San Blas',
    description: 'Contáctanos para planificar tu hospedaje a bordo en San Blas, Panamá.',
    url: 'https://sailingtheworld.net/contacto',
    siteName: 'Sailing the World',
    locale: 'es_PA',
    type: 'website',
  },
};

export default function ContactoPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'mainEntity': {
      '@type': 'TravelAgency',
      'name': 'Sailing the World',
      'telephone': '+50766302038',
      'url': 'https://sailingtheworld.net',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+50766302038',
        'contactType': 'customer service',
        'availableLanguage': ['Spanish', 'English'],
        'areaServed': 'PA'
      }
    }
  };
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Contacto />
    </article>
  );
}

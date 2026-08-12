import Contacto from "@/components/contacto/Contacto";
import TermsOfService from "@/components/contacto/TermsOfService";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Servicio | Sailing the World',
  description: 'Consulta los términos y condiciones para reservas de charters, depósitos, políticas de cancelación y normas de navegación en San Blas con Sailing the World.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://sailingtheworld.net/termsofservice',
  },
};

export default function TermsPage() {
  const termsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Términos y Condiciones de Servicio',
    'description': 'Términos legales y condiciones de contratación para excursiones y charters en San Blas con Sailing the World.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Sailing the World'
    }
  };
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <TermsOfService />
    </article>
  );
}
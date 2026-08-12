import Contacto from "@/components/contacto/Contacto";
import PrivacyPolicy from "@/components/contacto/PrivacyPolicy";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Sailing the World',
  description: 'Conoce cómo recopilamos, protegemos y utilizamos la información personal de nuestros clientes en Sailing the World.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://sailingtheworld.net/privacypolicy',
  },
};

export default function PrivacyPolicyPage() {
  const privacySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Política de Privacidad',
    'description': 'Información sobre el tratamiento de datos personales en Sailing the World.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Sailing the World'
    }
  };
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      <PrivacyPolicy />
    </article>
  );
}
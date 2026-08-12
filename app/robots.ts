// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://sailingtheworld.net';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'], // Bloquear apis o paneles internos si existieran
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
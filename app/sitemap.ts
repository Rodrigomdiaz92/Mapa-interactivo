// app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sailingtheworld.net'; // Dominio final

  // URLs estáticas principales
  const staticRoutes = [
    '',
    '/charters',
    '/actividades',
    '/navegacionynaturaleza',
    '/contacto',
    '/boatsonsale',
    '/termsofservice',
    '/privacypolicy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Ejemplo si tus charters vienen de una API/array dinámico (ej. IDs del 1 al 6 + Zenith)
  const boatIds = ['1', '2', '3', '4', '5', '6', 'zenith'];
  const boatRoutes = boatIds.map((id) => ({
    url: `${baseUrl}/charters/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Rutas dinámicas de actividades (ejemplos de tus rutas actuales)
  const activitySlugs = [
    'slow-daily-sailing',
    'guna-cultural-connection',
    'island-hopping',
    'snorkeling-reefs',
    'kayak-paddleboard',
    'beach-time-sunsets',
    'slow-mornings-swims',
  ];
  const activityRoutes = activitySlugs.map((slug) => ({
    url: `${baseUrl}/actividades/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...boatRoutes, ...activityRoutes];
}
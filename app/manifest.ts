// app/manifest.ts
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sailing the World by Navegación y Naturaleza',
    short_name: 'Sailing the World',
    description: 'Charters y Hospedaje en Catamarán y Velero en San Blas, Panamá',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0e1726',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
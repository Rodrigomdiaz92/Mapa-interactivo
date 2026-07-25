export interface ExperienceItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
}

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "1",
    slug: "slow-daily-sailing",
    title: "Navegación Diaria en Arrecifes",
    subtitle: "San Blas",
    description: "Navegación suave y relajada a través de aguas turquesas y arrecifes de coral vivos.",
    longDescription:
      "Disfruta del ritmo del viento sin prisas. Navegamos entre islas cada día explorando cayos remotos y fondeaderos tranquilos.",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    slug: "guna-cultural-connection",
    title: "Conexión Cultural Guna Yala",
    subtitle: "Cultura Local",
    description: "Comparte momentos de respeto e intercambio cultural con las comunidades locales.",
    longDescription:
      "Conoce de primera mano la cultura Guna, sus tradiciones, artesanías (molas) y su forma de vida en armonía con el mar.",
    imageUrl:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    slug: "island-hopping",
    title: "Island Hopping & Playas Vírgenes",
    subtitle: "Exploración",
    description: "Descubre islas remotas de arena blanca y palmeras alejadas de las multitudes.",
    longDescription:
      "Cada jornada ofrece una nueva isla por descubrir. Camina por playas vírgenes, nada en piscinas naturales y desconéctate.",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    slug: "snorkeling-reefs",
    title: "Snorkel en Arrecifes Cristalinos",
    subtitle: "Aventura Marina",
    description: "Sumergete entre peces multicolores y corales prístinos en aguas cálidas.",
    longDescription:
      "Equipamiento completo a bordo para explorar la abundante vida marina de San Blas: rayas, estrellas de mar y peces de arrecife.",
    imageUrl:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc23?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    slug: "kayak-paddleboard",
    title: "Kayak & Paddleboard",
    subtitle: "Deportes Acuáticos",
    description: "Deslízate en silencio sobre aguas calmas y explora los manglares a tu propio ritmo.",
    longDescription:
      "Disponibles en todo momento a bordo para explorar las orillas, ejercitarte o simplemente remar al atardecer.",
    imageUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    slug: "beach-time-sunsets",
    title: "Atardeceres & Relax en la Playa",
    subtitle: "Estilo de Vida",
    description: "Momentos de desconexión, brisa marina y atardeceres memorables desde el mar.",
    longDescription:
      "Finaliza el día disfrutando de bebidas heladas, juegos en la playa o contemplando la puesta de sol desde la proa.",
    imageUrl:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "7",
    slug: "slow-mornings-swims",
    title: "Mañanas de Mar & Desconexión",
    subtitle: "Bienestar",
    description: "Comienza el día con un chapuzón matutino en el mar y un desayuno tropical al aire libre.",
    longDescription:
      "Sin horarios estrictos. Despiértate con el sonido del agua y disfruta de mañanas tranquilas bajo el sol.",
    imageUrl:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop",
  },
];
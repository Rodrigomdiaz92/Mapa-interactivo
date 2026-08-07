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
      "/contenido/experiencias/navegacion/1.jpg",
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
      "/contenido/experiencias/guna/1.jpg",
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
      "/contenido/experiencias/explorar/1.jpg",
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
      "/contenido/experiencias/snorkel/1.jpg",
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
      "/contenido/experiencias/paddle/1.jpg",
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
      "/contenido/experiencias/atardecer/1.jpg",
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
      "/contenido/experiencias/desayuno/1.jpg",
  },
];
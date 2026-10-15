// types/admin.ts

export type LanguageCode = "es" | "en";

export interface BilingualText {
  es: string;
  en: string;
}

// Estructura Editable para Barcos / Catamaranes
export interface EditableBoatItem {
  id: number;
  slug: string;
  category: "Sailboat" | "Catamaran" | "IslandLodge";
  isAvailable: boolean;
  boatName: string;
  boatCoverPhoto: string;
  boatGalleryPhotos: string[];
  boatDescription: BilingualText;
  boatLongDescription: BilingualText;
  maxGuests: number;
  pricePerNightUSD: number;
  featureBadge: BilingualText;
  isFeatured: boolean;
}

// Estructura Editable para Islas
export interface EditableIslandItem {
  id: number;
  name: string;
  x: number;
  y: number;
  description: BilingualText;
  images: string[];
  videos: string[];
  socialReel: string;
  activities: string[];
}

// Estructura Editable para Timeline (Hitos)
export interface EditableTimelineItem {
  id: string;
  sectionId?: string;
  badge: BilingualText;
  title: BilingualText;
  subtitle?: BilingualText;
  text: BilingualText;
  instagramUrl: string;
  quote?: BilingualText;
  layout: "left" | "right" | "center";
}

// Estructura Editable para Experiencias
export interface EditableExperienceItem {
  id: string;
  slug: string;
  title: BilingualText;
  subtitle?: BilingualText;
  description: BilingualText;
  longDescription?: BilingualText;
  imageUrl: string;
}


export type CategoryType = "Catamaran" | "Sailboat" | "IslandLodge";

export type LocalizedString = {
  es: string;
  en: string;
};

// 👨‍✈️ Perfil del Capitán / Anfitrión
export interface HostProfile {
  name: string;
  role: LocalizedString;          // ej. { es: "Capitán", en: "Captain" }
  photoUrl?: string;              // Link foto del capitán
  description: LocalizedString;   // Descripción del capitán
  languages?: string[];
  certifications?: string[];
}

// 🍽️ Gastronomía y Comida
export interface DiningInfo {
  description: LocalizedString;   // Descripción del menú
  photoUrl?: string;              // Link foto de la comida
}

// 🏄‍♂️ Actividades
export interface ActivityInfo {
  description: LocalizedString;   // Descripción de actividades
  photoUrls: string[];            // Links fotos de actividades
}

// 📊 Tabla de Precios (Soporta Estructura y/o HTML Directo)
export interface PricingTier {
  seasonOrType: LocalizedString;  // ej. { es: "Charter Privado", en: "Private Charter" }
  guestsCount?: number;
  pricePerNight: number;          // Precio regular por noche/día
  discountPricePerNight?: number; // Precio promocional por noche/día (si aplica)
  notes?: LocalizedString;
}

export interface PricingTable {
  currency: string;               // USD
  basePricePerPersonPerDay: number;
  discountPricePerPersonPerDay?: number; // Precio promocional base por persona
  tiers?: PricingTier[];          // Array estructurado para render dinámico
  htmlTableContent?: LocalizedString; // 📝 HTML en texto listo para renderizar (dangerouslySetInnerHTML / HTML Parser)
}

// 🔍 SEO & Metadata para Next.js
export interface OpenGraphData {
  title?: LocalizedString;
  description?: LocalizedString;
  images?: string[];
}

export interface SEOData {
  title: LocalizedString;
  description: LocalizedString;
  keywords: LocalizedString[];
  openGraph?: OpenGraphData;
  canonicalUrl?: string;
  noIndex?: boolean;
}

// 📐 Especificaciones Técnicas
export interface TechnicalSpecs {
  lengthFeet?: number;
  cabins?: number;
  bathrooms?: number;
  doubleBeds?: number;
  singleBeds?: number;
}

// ⛵ Estructura Principal del Ítem del Catálogo
export interface CatalogItem {
  id: number;                          // 🔢 Identificador numérico único
  slug: string;                        // URL amigable para Next.js (ej. "leopard-40-2018")
  category: CategoryType;
  isAvailable: boolean,
  location: LocalizedString;

  // 🔍 SEO / Metadata
  seo: SEOData;

  // 🚢 Datos del Barco / Hospedaje
  boatName: string;                     // Nombre del barco / embarcación
  boatCoverPhoto: string;              // Link foto portada del barco
  boatGalleryPhotos: string[];         // Fotos adicionales del barco
  boatDescription: LocalizedString;    // Descripción corta / general
  boatLongDescription?: LocalizedString;// Descripción detallada
  specs?: TechnicalSpecs;

  // 👨‍✈️ Capitán / Anfitrión
  captain: HostProfile;

  // 🍽️ Comida
  dining: DiningInfo;

  // 🏄‍♂️ Actividades
  activities: ActivityInfo;

  // 💰 Precios y Tabla HTML
  pricing: PricingTable;

  // ✅ Incluye / No Incluye
  includes: LocalizedString[];
  excludes?: LocalizedString[];

  // 🔗 Experiencias Relacionadas
  relatedExperienceIds?: number[];     // Array de IDs numéricos relacionados

  // Capacidad y Configuración
  maxGuests: number;
  isPrivate: boolean;
  isSharedAllowed: boolean;
  featureBadge: LocalizedString;

  // 🚩 Banderas de Interfaz / Promociones
  isFeatured: boolean;                 // Destacado en la web
  hasDiscount: boolean;                // Bandera para aplicar/mostrar promociones
}
export type CategoryVentaType = "Catamaran" | "Sailboat" | "Monohull" | "Trimaran" | "IslandLodge";

export interface SaleItem {
  id: string;
  title: string;
  subtitle: string;
  category: CategoryVentaType;
  priceUSD: number;
  lengthFT?: number;
  year: number;
  location: string;
  image: string;
  featureBadge: string;
  description: string;
  specifications?: {
    beamFT?: number;
    draftFT?: number;
    cabins?: number;
    bathrooms?: number;
    engine?: string;
    fuelType?: string;
  };
}

export const INITIAL_SALE_ITEMS: SaleItem[] = [
  {
    id: "leopard-40-2018-sale",
    title: "LEOPARD 40",
    subtitle: "CATAMARÁN EN EXCELENTE ESTADO",
    category: "Catamaran",
    priceUSD: 385000,
    lengthFT: 40,
    year: 2018,
    location: "San Blas, Panamá",
    image: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?auto=format&fit=crop&w=800&q=80",
    featureBadge: "3 Cabinas / 2 Baños",
    description: "Equipado para navegación oceánica, paneles solares, desalinizador y diseño de acceso directo a la proa.",
    specifications: {
      beamFT: 22,
      draftFT: 4.1,
      cabins: 3,
      bathrooms: 2,
      engine: "2x Yanmar 29HP",
      fuelType: "Diésel"
    }
  },
  {
    id: "oceanis-58-sale",
    title: "BENETEAU OCEANIS 58",
    subtitle: "ELEGANCIA Y GRAN PERFORMANCE",
    category: "Monohull",
    priceUSD: 490000,
    lengthFT: 58,
    year: 2016,
    location: "Mar Caribe",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    featureBadge: "Monocasco High Performance",
    description: "Velero monocasco de gran eslora con acabados de lujo, vela mayor enrollable, teca en cubierta y electrónica de última generación.",
    specifications: {
      beamFT: 16.3,
      draftFT: 8.5,
      cabins: 3,
      bathrooms: 3,
      engine: "Volkswagen 140HP",
      fuelType: "Diésel"
    }
  },
  {
    id: "neat-trimaran-40-sale",
    title: "NEEL 51 TRIMARAN",
    subtitle: "VELOCIDAD Y ESPACIO INCOMPARABLE",
    category: "Trimaran",
    priceUSD: 540000,
    lengthFT: 51,
    year: 2020,
    location: "San Blas, Panamá",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    featureBadge: "3 Cascos / Gran Estabilidad",
    description: "Trimarán de gran velocidad en ceñida y máxima estabilidad. Gran flybridge e interiores panorámicos.",
    specifications: {
      beamFT: 29.2,
      draftFT: 4.9,
      cabins: 4,
      bathrooms: 3,
      engine: "Volvo Penta 75HP",
      fuelType: "Diésel"
    }
  },
  {
    id: "vintage-wooden-sailboat-sale",
    title: "CLASSIC WOODEN SCHOONER",
    subtitle: "JOYA DE COLECCIÓN EN MADERA",
    category: "Sailboat",
    priceUSD: 165000,
    lengthFT: 45,
    year: 1998,
    location: "San Blas, Panamá",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
    featureBadge: "Doble Mástil Clásico",
    description: "Restaurado minuciosamente. Ideal para amantes de la navegación clásica o negocio de charter privado.",
    specifications: {
      beamFT: 13.5,
      draftFT: 6.2,
      cabins: 2,
      bathrooms: 1,
      engine: "Perkins 85HP",
      fuelType: "Diésel"
    }
  },
  {
    id: "private-island-cabin-sale",
    title: "CABAÑA TROPICAL EN ISLA",
    subtitle: "PROPIEDAD / CONCESIÓN EXCLUSIVA",
    category: "IslandLodge",
    priceUSD: 210000,
    year: 2021,
    location: "Archipiélago San Blas",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    featureBadge: "Frente al Mar / Muelle",
    description: "Cabaña autosustentable sobre pilotes de madera con energía solar, recolector de agua de lluvia y muelle privado.",
  }
];
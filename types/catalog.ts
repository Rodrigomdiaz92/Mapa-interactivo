export type CategoryType = "Sailboat" | "Catamaran" | "IslandLodge";

export interface CatalogItem {
  id: string;
  name: string;
  subtitle: string;
  category: CategoryType;
  captainOrHost: string;
  image: string;
  maxGuests: number;
  isPrivate: boolean;
  isSharedAllowed: boolean;
  featureBadge: string;
  description: string;
  pricePerPersonPerDay: number; // USD por día por persona
  pricingNote?: string;
}
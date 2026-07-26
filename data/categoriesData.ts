export interface CategoryItem {
  id: string;
  name: string;
  categoryFilter: string; // Parámetro para filtrar en /charters
  benefitText: string;
  listingsCount: number;
  imageUrl: string;
}

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: "catamaran",
    name: "Catamarán",
    categoryFilter: "Catamaran",
    benefitText: "Espacio amplio, máxima estabilidad y confort superior para familias o grupos.",
    listingsCount: 9,
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "sailboat",
    name: "Velero",
    categoryFilter: "Sailboat",
    benefitText: "Auténtica experiencia de navegación a vela, íntima y de espíritu aventurero.",
    listingsCount: 8,
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "island-stay",
    name: "Viví en una Isla",
    categoryFilter: "IslandLodge",
    benefitText: "Hospedaje en cabañas tradicionales sobre la playa en contacto directo con la comunidad.",
    listingsCount: 3,
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
  },
];
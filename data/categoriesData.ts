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
    imageUrl: "/contenido/catamaranes/Zenith/catalogo/1.png",
  },
  {
    id: "sailboat",
    name: "Velero",
    categoryFilter: "Sailboat",
    benefitText: "Auténtica experiencia de navegación a vela, íntima y de espíritu aventurero.",
    listingsCount: 8,
    imageUrl: "/contenido/veleros/Mola mola/catalogo/1.png",
  },
  {
    id: "island-stay",
    name: "Viví en una Isla",
    categoryFilter: "IslandLodge",
    benefitText: "Hospedaje en cabañas tradicionales sobre la playa en contacto directo con la comunidad.",
    listingsCount: 3,
    imageUrl: "/contenido/experiencias/explorar/1.jpg",
  },
];
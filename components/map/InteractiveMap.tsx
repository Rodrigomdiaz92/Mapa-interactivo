"use client";

import { useState } from "react";
import { Island } from "@/types/island";
import SidePanel from "../panel/SidePanel";
import SearchBar from "../ui/SearchBar";
import MapControls from "../ui/MapControls";
import dynamic from "next/dynamic";
import { Compass, MapPin } from "lucide-react";
import FloatingCTA from "../boatdetail/FloatingCTA";

const MapCanvas = dynamic(
  () => import("./MapCanvas"),
  {
    ssr: false,
  }
);

export default function InteractiveMap() {
  const [selectedIsland, setSelectedIsland] = useState<Island | null>(null);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Columna Izquierda (Texto explicativo) - Se muestra arriba en Mobile */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full w-fit text-xs font-semibold tracking-wider uppercase border border-emerald-200">
            <Compass className="w-4 h-4" />
            <span>Mapa Interactivo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
            Explora <span className="text-emerald-700">Guna Yala</span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Navega a través de las cristalinas aguas de San Blas y descubre cada una de nuestras islas paradisíacas. Selecciona un punto en el mapa para conocer los detalles, itinerarios y experiencias disponibles en cada ubicación.
          </p>

          <div className="pt-2 flex items-center gap-3 text-slate-500 text-sm">
            <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>Haz clic en cualquier cayo o isla para ver la información.</span>
          </div>
        </div>

        {/* Columna Derecha (Mapa Interactivo) - Contenido dentro de su caja */}
        <div className="lg:col-span-7 relative w-full h-[450px] sm:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 z-0">
          
          {/* Canvas o Contenedor de Mapa con z-0 para no pisar el Navbar ni otros modales */}
          <div className="relative w-full h-full z-0 overflow-hidden">
            <MapCanvas
              selectedIsland={selectedIsland}
              onSelectIsland={setSelectedIsland}
            />

            {/* Panel lateral que se despliega sobre el mapa cuando hay una isla seleccionada */}
            <SidePanel
              island={selectedIsland}
              onClose={() => setSelectedIsland(null)}
            />
          </div>
        </div>

      </div>
      {/* <FloatingCTA/> */}
    </section>
  );
}
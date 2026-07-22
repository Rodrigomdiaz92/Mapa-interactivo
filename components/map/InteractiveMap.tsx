"use client";

import { useState } from "react";
//import MapCanvas from "./MapCanvas";
import { Island } from "@/types/island";
import SidePanel from "../panel/SidePanel";
import SearchBar from "../ui/SearchBar";
import MapControls from "../ui/MapControls";
import dynamic from "next/dynamic";

const MapCanvas = dynamic(
  () => import("./MapCanvas"),
  {
    ssr: false,
  }
);

export default function InteractiveMap() {

  const [selectedIsland, setSelectedIsland] = useState<Island | null>(null);

  // 👇 Agrega esta línea debajo del useState
  console.log(selectedIsland);

  return (

<div className="relative w-full h-full">  
  <MapControls />

    <MapCanvas
        selectedIsland={selectedIsland}
        onSelectIsland={setSelectedIsland}
    />

    <SidePanel
        island={selectedIsland}
        onClose={() => setSelectedIsland(null)}
    />

</div>

);
}
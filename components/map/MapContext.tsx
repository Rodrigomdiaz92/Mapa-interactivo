"use client";

import { createContext, useContext } from "react";
import { Map } from "leaflet";

interface MapContextType {
  map: Map | null;
}

export const MapContext = createContext<MapContextType>({
  map: null,
});

export const useMapContext = () => useContext(MapContext);
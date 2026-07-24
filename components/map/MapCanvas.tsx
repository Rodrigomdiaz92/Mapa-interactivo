"use client";

import { MapContainer, ImageOverlay } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import IslandMarkers from "./IslandMarkers";
import MapController from "./MapController";
import { Island } from "@/types/island";
import FlyToIsland from "./FlyToIsland";

interface Props {
  selectedIsland: Island | null;
  onSelectIsland: (island: Island) => void;
}

const imageWidth = 1200;
const imageHeight = 900;

const bounds: L.LatLngBoundsExpression = [
  [0, 0],
  [imageHeight, imageWidth],
];

export default function MapCanvas({
  selectedIsland,
  onSelectIsland,
}: Props) {
  return (
    <MapContainer
      crs={L.CRS.Simple}
      bounds={bounds}
      maxBounds={bounds}
      minZoom={0}
      maxZoom={4}
      zoomSnap={0.25}
      style={{
    width: "100%",
    height: "100%",
}}
    >
      <ImageOverlay
        url="/map-imgs/guna-yala-map.png"
        bounds={bounds}
      />
      <IslandMarkers
    selectedIsland={selectedIsland}
    onSelect={onSelectIsland}
/>
      <MapController />
      <FlyToIsland island={selectedIsland} />
    </MapContainer>
  );
}
"use client";

import { MapContainer, ImageOverlay } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const imageWidth = 1200;
const imageHeight = 900;

const bounds: L.LatLngBoundsExpression = [
  [0, 0],
  [imageHeight, imageWidth],
];

export default function MapCanvas() {
  return (
    <MapContainer
      crs={L.CRS.Simple}
      bounds={bounds}
      maxBounds={bounds}
      minZoom={-1}
      maxZoom={4}
      zoomSnap={0.25}
      style={{
        width: "100%",
        height: "700px",
        borderRadius: "16px",
      }}
    >
      <ImageOverlay
        url="/images/guna-yala-map.png"
        bounds={bounds}
      />
    </MapContainer>
  );
}
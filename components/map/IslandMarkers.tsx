"use client";

import { CircleMarker, Tooltip } from "react-leaflet";
import { islands } from "@/data/islands";
import { Island } from "@/types/island";

interface Props {
  selectedIsland: Island | null;
  onSelect: (island: Island) => void;
}

export default function IslandMarkers({
  selectedIsland,
  onSelect,
}: Props) {
  return (
    <>
      {islands.map((island) => {
        const isSelected = selectedIsland?.id === island.id;

        return (
          <CircleMarker
            key={island.id}
            center={[island.y, island.x]}
            radius={isSelected ? 12 : 8}
            pathOptions={{
              color: "#ffffff",
              fillColor: isSelected ? "#ef4444" : "#0ea5e9",
              fillOpacity: 1,
              weight: 2,
            }}
            eventHandlers={{
              click: () => onSelect(island),
            }}
          >
            <Tooltip direction="top">
              {island.name}
            </Tooltip>
          </CircleMarker>
        );
      })}
    </>
  );
}
"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { Island } from "@/types/island";

interface Props {
  island: Island | null;
}

export default function FlyToIsland({ island }: Props) {
  const map = useMap();

  useEffect(() => {
    if (!island) return;

    map.flyTo(
      [island.y, island.x],
      2,
      {
        animate: true,
        duration: 1.5,
      }
    );
  }, [island, map]);

  return null;
}
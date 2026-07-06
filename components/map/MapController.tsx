"use client";

import { useMapEvents } from "react-leaflet";

export default function MapController() {

  useMapEvents({

    click(e) {

      console.log(
        "X:",
        Math.round(e.latlng.lng),
        "Y:",
        Math.round(e.latlng.lat)
      );

    },

  });

  return null;
}
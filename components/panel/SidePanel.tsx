"use client";

import { Island } from "@/types/island";
import VideoGallery from "./VideoGallery";
import SocialReelButton from "./SocialReelButton";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import { useRef } from "react";
import { X, MapPin, Compass } from "lucide-react";

interface Props {
  island: Island | null;
  onClose: () => void;
  /** Función opcional para restablecer el zoom del mapa al cerrar */
  onResetZoom?: () => void;
}

export default function SidePanel({ island, onClose, onResetZoom }: Props) {
  const galleryRef = useRef<ImageGalleryRef>(null);

  const images: GalleryItem[] = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  if (!island) return null;

  const handleClose = () => {
    onClose();
    if (onResetZoom) {
      onResetZoom();
    }
  };

  const galleryItems = island.images
    ? island.images.map((img) => ({ original: img, thumbnail: img }))
    : images;

  return (
    <>
      {/* Backdrop sutil en móviles para cerrar al tocar fuera */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-slate-900/20 backdrop-blur-[1px] z-[999] md:hidden animate-in fade-in duration-200"
      />

      {/* Panel lateral con despliegue desde la derecha */}
      <aside
        className="
          absolute top-0 right-0 h-full
          w-full sm:w-[380px]
          bg-white/95 backdrop-blur-md
          shadow-2xl z-[1000]
          border-l border-slate-200
          flex flex-col overflow-hidden
          text-slate-800 font-sans
          animate-in slide-in-from-right duration-300
        "
      >
        {/* Encabezado Fijo con botón de Cierre */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-slate-50/80 flex-shrink-0">
          <div className="flex items-center gap-2 text-sky-700">
            <Compass className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Detalles de la Isla
            </span>
          </div>

          <button
            onClick={handleClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-200/60 hover:bg-slate-200 px-3 py-1.5 rounded-full transition"
            title="Cerrar y restablecer mapa"
          >
            <X className="w-4 h-4" />
            <span>Cerrar</span>
          </button>
        </div>

        {/* Contenido con Scroll Vertical */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1 custom-scrollbar">
          {/* Título y Ubicación */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-1">
              {island.name}
            </h2>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
              <span>Guna Yala, San Blas</span>
            </div>
          </div>

          {/* Galería de Imágenes */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
            <ImageGallery
              ref={galleryRef}
              items={galleryItems}
              showPlayButton={false}
              showBullets={true}
              autoPlay={true}
              showNav={false}
            />
          </div>

          {/* Descripción */}
          {island.description && (
            <section>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Descripción
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {island.description}
              </p>
            </section>
          )}

          {/* Actividades */}
          {island.activities && island.activities.length > 0 && (
            <section>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Actividades
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-600">
                {island.activities.map((activity) => (
                  <li
                    key={activity}
                    className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 flex-shrink-0" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Galería de Videos */}
          {island.videos && (
            <section className="pt-2">
              <VideoGallery videos={island.videos} />
            </section>
          )}

          {/* Botón Reel Social */}
          {island.socialReel && (
            <section className="pt-2">
              <SocialReelButton url={island.socialReel} />
            </section>
          )}
        </div>
      </aside>
    </>
  );
}
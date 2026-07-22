"use client";

import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

interface Props {
  images: string[];
  islandName: string;
}

export default function ImageGallery({
  images,
  islandName,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [open, setOpen] = useState(false);

  if (images.length === 0) {
    return (
      <div className="w-full h-56 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
        No images available
      </div>
    );
  }

  return (
    <div className="mb-6">
      <img
        src={images[selectedImage]}
  alt={islandName}
  className="w-full h-56 object-cover rounded-xl cursor-pointer"
  onClick={() => setOpen(true)}
      />

      <div className="flex gap-2 mt-3 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`border-2 rounded-lg overflow-hidden ${
              selectedImage === index
                ? "border-blue-500"
                : "border-transparent"
            }`}
          >
            <img
              src={image}
              alt={`${islandName} ${index + 1}`}
              className="w-20 h-20 object-cover"
            />
          </button>
        ))}
      </div>
      <ImageLightbox
  images={images}
  index={selectedImage}
  open={open}
  onClose={() => setOpen(false)}
/>
    </div>
  );
}
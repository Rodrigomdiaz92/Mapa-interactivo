"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  images: string[];
  index: number;
  open: boolean;
  onClose: () => void;
}

export default function ImageLightbox({
  images,
  index,
  open,
  onClose,
}: Props) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={images.map((img) => ({
        src: img,
      }))}
    />
  );
}
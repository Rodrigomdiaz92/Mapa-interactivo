"use client";
import { Island } from "@/types/island";
//import ImageGallery from "./ImageGallery";


import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import { useRef } from "react";



export default function CarrouselHome() {

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
const galleryRef = useRef<ImageGalleryRef>(null);


  

  return (
    
<ImageGallery
      ref={galleryRef}
      items={images}
      showPlayButton={false}
      showThumbnails={false}
      showBullets={true}
      autoPlay={true}
      showNav={false}
      slideInterval={4000}
      showFullscreenButton={false}
      onClick={() => {console.log("Image clicked");}}/>

  );
}

"use client";
import { Island } from "@/types/island";
//import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";
import SocialReelButton from "./SocialReelButton";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import { useRef } from "react";

interface Props {
  island: Island | null;
  onClose: () => void;
}

export default function SidePanel({ island, onClose }: Props) {

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


  if (!island) return null;

  return (
    <aside
      className="
absolute
top-0
right-0
h-full
w-[380px]
bg-white
shadow-2xl
z-[1000]
p-6
overflow-y-auto
text-black
"
    >
      <button
        onClick={onClose}
        className="
mb-6
text-black
font-semibold
hover:text-gray-700
transition
"
      >
        ✕ Cerrar
      </button>

      <h2 className="text-3xl font-bold mb-4">{island.name}</h2>
      {/*<ImageGallery
    images={island.images}
    islandName={island.name}
/>*/}
<ImageGallery
      ref={galleryRef}
      items={images}
      showPlayButton={false}
      showBullets={true}
      autoPlay={true}
      showNav={false}/>

<section className="mt-6">

    <h3 className="font-bold text-xl mb-3">
        Description
    </h3>

    <p>
        {island.description}
    </p>

</section>

<section className="mt-6">

    <h3 className="font-bold text-xl mb-3">

        Activities

    </h3>

    <ul className="list-disc pl-5">

        {island.activities.map(activity=>(

            <li key={activity}>
                {activity}
            </li>

        ))}

    </ul>

</section>

<VideoGallery
    videos={island.videos}
/>

<SocialReelButton
    url={island.socialReel}
/>


      <p className="mb-6">{island.description}</p>

      <h3 className="font-semibold mb-2">Activities</h3>

      <ul className="list-disc pl-5">
        {island.activities.map((activity) => (
          <li key={activity}>{activity}</li>
        ))}
      </ul>
    </aside>
  );
}

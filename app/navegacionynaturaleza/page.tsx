'use client';
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import InstagramReel from "@/components/ui/InstagramReel";
import { InstagramEmbed } from "react-social-media-embed/dist/components/embeds/InstagramEmbed";


export default function NavegacionYNaturaleza() {
  return (
    <main className="h-screen w-screen flex flex-col"> 
     <div style={{ display: 'flex', justifyContent: 'center' }}>
      <InstagramEmbed url="https://www.instagram.com/reel/DXMnGfbAFRa" width={328}  />
    </div>
    <WhatsAppButton />
    </main>
  );
}

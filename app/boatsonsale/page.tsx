import { InstagramEmbed } from "react-social-media-embed";



export default function BoatsOnSale() {
  return (
    <main className="h-screen w-screen flex flex-col"> 
     <div style={{ display: 'flex', justifyContent: 'center' }}>
      <InstagramEmbed url="https://www.instagram.com/reel/DXMnGfbAFRa" width={328}  />
    </div>
    </main>
  );
}
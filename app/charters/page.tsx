import Catalogo from "@/components/boatdetail/Catalogo";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import InteractiveMap from "@/components/map/InteractiveMap";
import Categorias from "@/components/ui/Categorias";

export default function GunayalaMap() {
  return (
    <main className="h-screen w-screen flex flex-col"> 
     <Catalogo />
     <WhatsAppButton />     

    </main>
  );
}
import Catalogo from "@/components/boatdetail/Catalogo";
import FloatingCTA from "@/components/boatdetail/FloatingCTA";
import Includes from "@/components/boatdetail/Includes";
import Reseñas from "@/components/boatdetail/Reseñas";
import { Experiencias } from "@/components/ui/Experiencias";
import FAQ from "@/components/ui/FAQ";

export default function Boat() {
  return (
    <main className="h-screen w-screen flex flex-col"> 
     <Includes />
     <Experiencias />
     <FAQ /> 
     <Reseñas />
     <FloatingCTA />
     <Catalogo />   

    </main>
  );
}
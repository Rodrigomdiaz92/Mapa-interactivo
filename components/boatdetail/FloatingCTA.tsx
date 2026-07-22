"use client";

import { MessageCircle } from "lucide-react"; // O el ícono que prefieras

interface FloatingCTAProps {
  onConsult?: () => void;
  text?: string;
}

export default function FloatingCTA({ 
  onConsult, 
  text = "Consultar disponibilidad" 
}: FloatingCTAProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xs sm:max-w-sm">
      <button
        onClick={onConsult}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 
                   bg-sky-600/90 hover:bg-sky-600 text-white font-medium text-sm sm:text-base 
                   rounded-full shadow-lg shadow-sky-900/20 backdrop-blur-md 
                   border border-white/20 transition-all duration-200 
                   active:scale-95 hover:shadow-xl
                   
                   /* ✅ AÑADE ESTA CLASE PARA LA ANIMACIÓN */
                   animate-subtle-pulse"
      >
        <MessageCircle className="w-5 h-5" />
        <span>{text}</span>
      </button>
    </div>
  );
}
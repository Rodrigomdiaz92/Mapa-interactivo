"use client";

import { useEffect, useState, useRef } from "react";
import { InstagramEmbed } from "react-social-media-embed";

interface InstagramEmbedWrapperProps {
  url: string;
}

export default function InstagramEmbedWrapper({ url }: InstagramEmbedWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Limpieza manual de nodos al desmontar para evitar que React ejecute removeChild en nodos huérfanos
  useEffect(() => {
    const currentContainer = containerRef.current;
    return () => {
      if (currentContainer) {
        // Vaciamos el innerHTML manualmente antes de que React intente desmontar el árbol virtual
        currentContainer.innerHTML = "";
      }
    };
  }, [url]);

  if (!isMounted || !url) {
    return <InstagramSkeleton />;
  }

  return (
    <div 
      ref={containerRef} 
      className="w-full flex justify-center min-h-[440px]"
    >
      <InstagramEmbed url={url} width="100%" />
    </div>
  );
}

function InstagramSkeleton() {
  return (
    <div className="w-full h-[440px] bg-slate-100 animate-pulse rounded-xl border border-slate-200 flex flex-col justify-between p-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-slate-200 shrink-0" />
        <div className="space-y-1.5 flex-1">
          <div className="h-3 bg-slate-200 rounded w-1/2" />
          <div className="h-2 bg-slate-200 rounded w-1/3" />
        </div>
      </div>
      <div className="w-full h-56 bg-slate-200 rounded-lg my-3" />
      <div className="space-y-2">
        <div className="h-3 bg-slate-200 rounded w-3/4" />
        <div className="h-2.5 bg-slate-200 rounded w-1/2" />
      </div>
    </div>
  );
}
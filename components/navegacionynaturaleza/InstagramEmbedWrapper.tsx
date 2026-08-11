"use client";

import { useEffect, useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";

interface InstagramEmbedWrapperProps {
  url: string;
}

export default function InstagramEmbedWrapper({ url }: InstagramEmbedWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !url) {
    return <InstagramSkeleton />;
  }

  return (
    // La clave key={url} fuerza a React a desmontar y volver a montar el div limpiamente si la URL cambia
    // suppressHydrationWarning evita colisiones si scripts de terceros inyectan nodos extra
    <div
      key={url}
      suppressHydrationWarning
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
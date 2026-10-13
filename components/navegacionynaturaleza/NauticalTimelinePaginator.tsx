// "use client";

// import React, { useState } from "react";
// import { TimelineItem } from "@/types/timeline";
// import HistoryLeftEmbed from "@/components/navegacionynaturaleza/HistoryLeftEmbed";
// import HistoryRightEmbed from "@/components/navegacionynaturaleza/HistoryRightEmbed";
// import HistoryCenterBanner from "@/components/navegacionynaturaleza/HistoryCenterBanner";
// import { ChevronLeft, ChevronRight, Compass } from "lucide-react";

// interface TimelinePaginatorProps {
//   items: TimelineItem[];
//   itemsPerPage?: number;
// }

// export default function NauticalTimelinePaginator({
//   items,
//   itemsPerPage = 5,
// }: TimelinePaginatorProps) {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

//   const handlePageChange = (newPage: number) => {
//     setCurrentPage(newPage);
//     // Smooth scroll hacia el inicio del timeline para mejorar la experiencia
//     const timelineElement = document.getElementById("timeline-container");
//     if (timelineElement) {
//       timelineElement.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div id="timeline-container" className="w-full space-y-8 scroll-mt-20">
//       {/* Contenedor de la lista renderizada (Solo 5 ítems en el DOM) */}
//       <div className="space-y-4">
//         {currentItems.map((item) => {
//           return (
//             <div key={item.id} id={item.sectionId}>
//               {item.layout === "left" && (
//                 <HistoryLeftEmbed
//                   badge={item.badge}
//                   title={item.title}
//                   subtitle={item.subtitle}
//                   text={item.text}
//                   instagramUrl={item.instagramUrl}
//                   quote={item.quote}
//                 />
//               )}
//               {item.layout === "right" && (
//                 <HistoryRightEmbed
//                   badge={item.badge}
//                   title={item.title}
//                   subtitle={item.subtitle}
//                   text={item.text}
//                   instagramUrl={item.instagramUrl}
//                   quote={item.quote}
//                 />
//               )}
//               {item.layout === "center" && (
//                 <HistoryCenterBanner
//                   badge={item.badge}
//                   title={item.title}
//                   subtitle={item.subtitle}
//                   text={item.text}
//                   instagramUrl={item.instagramUrl}
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* Bar de Controles de Paginación */}
//       <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
//         <div className="text-sm font-medium text-slate-600 flex items-center gap-2">
//           <Compass className="w-4 h-4 text-emerald-600 animate-spin-slow" />
//           <span>
//             Mostrando hito <strong className="text-slate-900">{startIndex + 1}</strong> a{" "}
//             <strong className="text-slate-900">
//               {Math.min(startIndex + itemsPerPage, items.length)}
//             </strong>{" "}
//             de <strong className="text-slate-900">{items.length}</strong>
//           </span>
//         </div>

//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="inline-flex items-center gap-1 px-4 py-2 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-sm"
//           >
//             <ChevronLeft className="w-4 h-4" />
//             Anterior
//           </button>

//           {/* Números de páginas */}
//           <div className="flex items-center gap-1 px-2">
//             {Array.from({ length: totalPages }, (_, index) => {
//               const pageNum = index + 1;
//               return (
//                 <button
//                   key={pageNum}
//                   onClick={() => handlePageChange(pageNum)}
//                   className={`w-8 h-8 rounded-lg text-xs font-bold transition ${
//                     currentPage === pageNum
//                       ? "bg-emerald-800 text-white shadow-md"
//                       : "bg-slate-100 text-slate-600 hover:bg-slate-200"
//                   }`}
//                 >
//                   {pageNum}
//                 </button>
//               );
//             })}
//           </div>

//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="inline-flex items-center gap-1 px-4 py-2 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-sm"
//           >
//             Siguiente
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState, useImperativeHandle, forwardRef } from "react";
import { TimelineItem } from "@/types/timeline";
import HistoryLeftEmbed from "@/components/navegacionynaturaleza/HistoryLeftEmbed";
import HistoryRightEmbed from "@/components/navegacionynaturaleza/HistoryRightEmbed";
import HistoryCenterBanner from "@/components/navegacionynaturaleza/HistoryCenterBanner";
import { ChevronLeft, ChevronRight, Compass } from "lucide-react";

export interface TimelinePaginatorRef {
  goToMilestone: (sectionId: string) => void;
}

interface TimelinePaginatorProps {
  items: TimelineItem[];
  itemsPerPage?: number;
}

const NauticalTimelinePaginator = forwardRef<TimelinePaginatorRef, TimelinePaginatorProps>(
  ({ items, itemsPerPage = 5 }, ref) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

    // Permite que un componente padre llame a goToMilestone(id)
    useImperativeHandle(ref, () => ({
      goToMilestone: (sectionId: string) => {
        // Buscamos el índice del hito en todo el array
        const itemIndex = items.findIndex((item) => item.sectionId === sectionId);
        if (itemIndex !== -1) {
          const targetPage = Math.floor(itemIndex / itemsPerPage) + 1;
          setCurrentPage(targetPage);

          // Damos un pequeño delay para permitir que React renderice la nueva página antes de scrollear
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }, 100);
        }
      },
    }));

    const handlePageChange = (newPage: number) => {
      setCurrentPage(newPage);
      const timelineElement = document.getElementById("timeline-container");
      if (timelineElement) {
        timelineElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <div id="timeline-container" className="w-full space-y-8 scroll-mt-28">
        <div className="space-y-4">
          {currentItems.map((item) => (
            <div key={item.id} id={item.sectionId} className="scroll-mt-32">
              {item.layout === "left" && (
                <HistoryLeftEmbed
                  badge={item.badge}
                  title={item.title}
                  subtitle={item.subtitle}
                  text={item.text}
                  instagramUrl={item.instagramUrl}
                  quote={item.quote}
                />
              )}
              {item.layout === "right" && (
                <HistoryRightEmbed
                  badge={item.badge}
                  title={item.title}
                  subtitle={item.subtitle}
                  text={item.text}
                  instagramUrl={item.instagramUrl}
                  quote={item.quote}
                />
              )}
              {item.layout === "center" && (
                <HistoryCenterBanner
                  badge={item.badge}
                  title={item.title}
                  subtitle={item.subtitle}
                  text={item.text}
                  instagramUrl={item.instagramUrl}
                />
              )}
            </div>
          ))}
        </div>

        {/* Controles de Paginación */}
        <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
          <div className="text-sm font-medium text-slate-600 flex items-center gap-2">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>
              Mostrando <strong className="text-slate-900">{startIndex + 1}</strong> a{" "}
              <strong className="text-slate-900">
                {Math.min(startIndex + itemsPerPage, items.length)}
              </strong>{" "}
              de <strong className="text-slate-900">{items.length}</strong> hitos
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1 px-4 py-2 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </button>

            <div className="flex items-center gap-1 px-2">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition ${
                      currentPage === pageNum
                        ? "bg-emerald-800 text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1 px-4 py-2 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-sm"
            >
              Siguiente
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

NauticalTimelinePaginator.displayName = "NauticalTimelinePaginator";
export default NauticalTimelinePaginator;
'use client';

import React, { useRef } from "react";
import { Reseñas } from "@/components/boatdetail/Reseñas";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import HistoryMediaCarousel from "@/components/navegacionynaturaleza/HistoryMediaCarousel";
import HistoryMediaLeft from "@/components/navegacionynaturaleza/HistoryMediaLeft";
import NauticalTimelineNav from "@/components/navegacionynaturaleza/NauticalTimelineNav";
import NauticalTimelinePaginator, { TimelinePaginatorRef } from "@/components/navegacionynaturaleza/NauticalTimelinePaginator";
import AsistenciaViajeroWidget from "@/components/ui/AsistenciaViajeroWidget";
import { Categorias } from "@/components/ui/Categorias";
import DecisionButtons from "@/components/ui/DecisionButtons";
import { FAQ } from "@/components/ui/FAQ";
import { Anchor, Sparkles } from "lucide-react";
import { TimelineItems } from "@/data/timelineData";

export default function NosotrosClient() {
  const paginatorRef = useRef<TimelinePaginatorRef>(null);

  const handleSelectMilestone = (sectionId: string) => {
    if (paginatorRef.current) {
      paginatorRef.current.goToMilestone(sectionId);
    }
  };

  return (
    // Se elimina 'overflow-hidden' para preservar el funcionamiento de sticky
    <article className="w-full">
      {/* 1. Introducción y Origen */}
      <section>
        <HistoryMediaLeft
          badge="SOBRE NOSOTROS"
          title="El Origen de Sailing the World"
          subtitle="De una travesía personal a una pasión compartida"
          text={`Sailing the World nació del sueño de Nico y Belu, dos biólogos que decidieron dejar la rutina en Buenos Aires para abrazar la vida en el mar a bordo del Franca Austral.

Tras años de navegación libre, explorando las costas del Caribe, sorteando desafíos en alta mar y descubriendo el paraíso de San Blas, comprendieron que la verdadera riqueza del mar está en ser compartido. Así transformaron su bitácora de viaje en un proyecto de charters náuticos diseñado para conectar a otros viajeros con la esencia pura del océano.`}
          mediaType="image"
          mediaSrc="/contenido/veleros/Lupa/capitan/1.png"
          mediaAlt="founders sailing the world"
          quote="Nuestra historia no empezó como un negocio, sino como una búsqueda de libertad que hoy se convirtió en nuestra forma de vida."
        />
      </section>

      {/* 2. Propuesta de Valor y Galería */}
      <section>
        <HistoryMediaCarousel
          badge="NUESTRA PROPUESTA"
          title="Experiencias Auténticas en Navegación"
          subtitle="Más que un charter, una expedición a medida"
          text={`Ofrecemos hospedajes privados y de grupo a bordo de veleros y catamaranes equipados con todas las comodidades, combinando seguridad, confort y una profunda conexión con la naturaleza.

Nuestro compromiso es brindar una experiencia náutica genuina y responsable. Como amantes del mar y biólogos de vocación, promovemos el respeto por la vida marina, la cultura local de cada destino y la sostenibilidad en cada milla navegada.`}
          images={[
            {
              src: "/contenido/otros/1.jpg",
              alt: "navegando en velero",
            },
            {
              src: "/contenido/otros/2.png",
              alt: "diversion en catamaran",
            },
            {
              src: "/contenido/otros/3.jpg",
              alt: "comida a bordo",
            },
          ]}
        />
      </section>

      {/* 3. Botones de Navegación Rápida */}
      <DecisionButtons
        optionPrimary={{
          label: "Paseos & Charters",
          href: "/charters",
          description: "Navega por las islas de San Blas a bordo de nuestras embarcaciones.",
          icon: Anchor,
        }}
        optionSecondary={{
          label: "Experiencias & Actividades",
          href: "/actividades",
          description: "Conéctate con la naturaleza y la cultura local.",
          icon: Sparkles,
        }}
      />

      {/* 4. Barra de Navegación Sticky para la Bitácora */}
      <NauticalTimelineNav onSelectMilestone={handleSelectMilestone} />

      {/* 5. Introducción a la Trayectoria */}
      <section>
        <HistoryMediaLeft
          badge="NUESTRA TRAYECTORIA"
          title="Explora Nuestra Bitácora de Viaje"
          subtitle="De Buenos Aires al Pacífico: revive el camino recorrido"
          text={`Desde la preparación del Franca Austral en Venezuela y los primeros fondeos en Curazao, hasta la travesía del Canal de Panamá y el mítico cruce del Pacífico hacia la Polinesia Francesa.

Te invitamos a recorrer los hitos que marcaron el rumbo de nuestra vida y que dieron origen a todo lo que hoy es Sailing the World.`}
          mediaType="image"
          mediaSrc="/contenido/otros/4.jpg"
          mediaAlt="founders sailing the world"
          quote="Hacé clic en la línea de tiempo y navega por cada hito de nuestra historia"
        />
      </section>

      {/* 6. Paginador de Hitos de Instagram (5 publicaciones por página) */}
      <section className="py-8">
        <NauticalTimelinePaginator
          ref={paginatorRef}
          items={TimelineItems}
          itemsPerPage={5}
        />
      </section>

      {/* 7. Reseñas y Testimonios */}
      <section id="reseñas">
        <Reseñas />
      </section>

      {/* 8. Preguntas Frecuentes */}
      <section id="faq">
        <FAQ />
      </section>

      {/* 9. Asistencia al Viajero */}
      <section id="asistencia-viajero">
        <AsistenciaViajeroWidget />
      </section>

      {/* 10. Categorías y Flotante de WhatsApp */}
      <section id="categories">
        <Categorias />
      </section>

      <section id="whatsapp">
        <WhatsAppButton
          phoneNumber="+50766302038"
          message="(NN)Hola, me gustaría recibir más información sobre las experiencias en San Blas."
          tooltipText="Viví con nosotros esta experiencia. ¡Escríbenos!"
        />
      </section>
    </article>
  );
}
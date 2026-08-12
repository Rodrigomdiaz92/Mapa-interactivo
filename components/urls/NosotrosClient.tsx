'use client';
import { Reseñas } from "@/components/boatdetail/Reseñas";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import ActivitiesPromoWidget from "@/components/navegacionynaturaleza/ActivitiesPromoWidget";
import CharterPromoWidget from "@/components/navegacionynaturaleza/CharterPromoWidget";
import HistoryCenterBanner from "@/components/navegacionynaturaleza/HistoryCenterBanner";
import HistoryGridCard from "@/components/navegacionynaturaleza/HistoryGridCard";
import HistoryLeftEmbed from "@/components/navegacionynaturaleza/HistoryLeftEmbed";
import HistoryMediaCarousel from "@/components/navegacionynaturaleza/HistoryMediaCarousel";
import HistoryMediaLeft from "@/components/navegacionynaturaleza/HistoryMediaLeft";
import HistoryRightEmbed from "@/components/navegacionynaturaleza/HistoryRightEmbed";
import NauticalTimelineNav from "@/components/navegacionynaturaleza/NauticalTimelineNav";
import AsistenciaViajeroWidget from "@/components/ui/AsistenciaViajeroWidget";
import { Categorias } from "@/components/ui/Categorias";
import DecisionButtons from "@/components/ui/DecisionButtons";
import { FAQ } from "@/components/ui/FAQ";
import InstagramReel from "@/components/ui/InstagramReel";
import Titles from "@/components/ui/Titles";
import { Anchor, Compass, Home, Sparkles } from "lucide-react";
import { InstagramEmbed } from "react-social-media-embed/dist/components/embeds/InstagramEmbed";



export default function NosotrosClient() {
  
  return (
    
     <article >
      
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
      <section>
        <HistoryMediaCarousel
        badge="NUESTRA PROPUESTA"
        title="Experiencias Auténticas en Navegación"
        subtitle="Más que un charter, una expedición a medida"
        text="Ofrecemos hospedajes privados y de grupo a bordo de veleros y catamaranes equipados con todas las comodidades, combinando seguridad, confort y una profunda conexión con la naturaleza.

Nuestro compromiso es brindar una experiencia náutica genuina y responsable. Como amantes del mar y biólogos de vocación, promovemos el respeto por la vida marina, la cultura local de cada destino y la sostenibilidad en cada milla navegada."
        images={[
          {
            src: "/contenido/otros/1.jpg",
            alt: "navegando en velero",
          },
          {
            src: "/contenido/otros/2.jpg",
            alt: "diversion en catamaran",
          },
          {
            src: "/contenido/otros/3.jpg",
            alt: "comida a bordo",
          },
        ]}
      />
      
      </section>
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
<NauticalTimelineNav />

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
      

      <section>
        
      </section>
      
      {/* <Titles
  id="experiencias"
  badge="San Blas Exclusivo"
  badgeIcon={Sparkles}
  title="Descubre Nuestras Actividades"
  subtitle="Elige la modalidad que mejor se adapte a tu itinerario de viaje."
  align="center"
/> */}
      <section id="origen">
                
      {/* 1. Inicio del viaje */}
      <HistoryLeftEmbed
        badge="Argentina / Inicio de viaje"
        title="Soñar en grande"
        subtitle="El comienzo de una aventura transformadora"
        text="Nico y Belu decidieron dar el salto y apostar por un sueño que los entusiasmaba y desafiaba. Con el apoyo de sus seres queridos, encararon esta nueva etapa de vida listos para llevar su pasión por la naturaleza a aguas internacionales."
        instagramUrl="https://www.instagram.com/p/Cm27QWKLsu5/"
        quote="Nico y Belu"
      />
      <span id="venezuela"></span>
      <HistoryRightEmbed
       badge="Venezuela / Lechería"
        title="Llegada a Lechería y al Franca Austral"
        subtitle="El primer contacto con su nuevo hogar"
        text="Tras un largo trayecto entre micros y aviones, desembarcaron en la costa caribeña de Venezuela. Allí los esperaba su velero (entonces llamado Tinta China), el cual bautizarían como Franca Austral para dar inicio oficialmente a su vida sobre el mar."
        instagramUrl="https://www.instagram.com/p/Cm-Y_hOrUbA/"
      />
      <HistoryLeftEmbed
        badge="Bautismo de mar caribeño"
        title="Primera navegación caribeña"
        subtitle="Aprendizaje y puesta a punto en aguas tropicales"
        text="Invitados por un vecino de amarra, tuvieron su debut navegando en aguas costarricenses y venezolanas. Entre brisas calmas y vientos fuertes, pusieron en práctica sus conocimientos náuticos mientras continuaban trabajando a diario para dejar el barco en óptimas condiciones."
        instagramUrl="https://www.instagram.com/reel/CnvU2rhImGp/"
        quote="Nico y Belu"
      />
      <HistoryRightEmbed
        badge="Vida a bordo"
        title="Primeros sabores a bordo"
        subtitle="La cocina del velero se pone en marcha"
        text="La cocina del Franca Austral se estrenó oficialmente con un banquete de frutos de mar recolectados por ellos mismos. Tener el océano como patio trasero empezó a dar sus primeros y deliciosos frutos."
        instagramUrl="https://www.instagram.com/reel/Co2yVGDgcs4/"
      />
      <HistoryLeftEmbed
        badge="Explorando"
        title="Escoltados por delfines"
        subtitle="La magia del mar en plena navegación"
        text="Durante una de sus salidas, se cruzaron con una numerosa manada de delfines que, guiados por la curiosidad, se acercaron a acompañar el rumbo del velero durante varios minutos, regalandoles un momento inolvidable."
        instagramUrl="https://www.instagram.com/reel/CrbTZOtgLxA/"
        quote="Nico y Belu"
      />
      
      <HistoryCenterBanner
        badge="Tramites y gestiones"
        title="¡Dueños oficiales del Franca Austral!"
        subtitle="Cierre de un ciclo de incertidumbre"
        text="Tras meses de esfuerzo y gestiones, concretaron oficialmente la compra de la embarcación. Con el título en mano, encararon los siguientes pasos administrativos para obtener la baja de bandera y planificar la zarpada definitiva."
        instagramUrl="https://www.instagram.com/reel/Cse-AHygEaa/"
      />
      </section>
      <section id="zarpe">
      {/* 2. Zarpe Venezuela */}
      <HistoryRightEmbed
        badge="Preparando velas"
        title="Vela mayor lista para el viaje"
        subtitle="Puesta a punto del aparejo y motor"
        text="Luego de realizar retoques, reajustes y preparar los cabos, izaron la vela mayor del Franca Austral. Con el velero listo y el trabajo de los mecánicos en el motor, la partida quedaba cada vez más cerca."
        instagramUrl="https://www.instagram.com/reel/CttvPzqATvF/"
      />
      <HistoryLeftEmbed
        badge="Nueva nacionalidad náutica"
        title="Izando el pabellón polaco"
        subtitle="Confección artesanal y libertad para navegar"
        text="Para solucionar las restricciones de la matrícula venezolana, tramitaron el registro bajo bandera polaca. Ellos mismos confeccionaron el nuevo pabellón con sus propias manos, un símbolo de autogestión que les otorgó la libertad legal para soltar amarras."
        instagramUrl="https://www.instagram.com/reel/CvnZPx9gXAB/"
        quote="Nico y Belu"
      />
      <HistoryCenterBanner
        badge="El gran momento"
        title="¡El Franca Austral zarpó!"
        subtitle="Rumbo a Curazao y nuevas metas"
        text="Nico y Belu, biólogos y aventureros, concretaron seis meses de intenso trabajo e iniciaron su travesía con destino a Curazao, haciendo paradas estratégicas para descansar, recargar provisiones y disfrutar de la navegación."
        instagramUrl="https://www.instagram.com/p/CvImDoWPz3X/"
      />
      </section>
      <section id="navegando">
      {/* 3. El Franca Navegando */}
      <HistoryLeftEmbed
        badge="Venezuela / Isla La Tortuga"
        title="Paradas en Isla La Tortuga"
        subtitle="Inspecciones, pesca y atardeceres"
        text="Tras superar las inspecciones antidroga de rutina en Venezuela, navegaron 14 horas a motor y realizando guardias nocturnas hasta Cayo Herradura. La recompensa incluyó su primera pesca (un dorado) y jornadas de descanso en la playa."
        instagramUrl="https://www.instagram.com/p/CvvP-aWPhYN/"
        quote="Nico y Belu"
      />
      <HistoryRightEmbed
        badge="Belleza en Los Roques"
        title="Navegando por Los Roques"
        subtitle="Desafíos de navegación y vida sustentable"
        text="Avanzaron en solitario por canales estrechos hacia Cayo Carenero, rodeados de manglares y pastos marinos. Aprendieron a optimizar el uso del agua dulce lavando con agua de mar y disfrutaron de tranquilas tardes de mate frente al atardecer."
        instagramUrl="https://www.instagram.com/p/Cv28SSHvyIt/"
      />
      <HistoryLeftEmbed
        badge="Santuario natural"
        title="En tierra de aves"
        subtitle="Isla Aves de Barlovento"
        text="Arribaron a un refugio natural habitado por miles de aves migratorias. Entre anécdotas de a bordo —como incidentes con la parrilla—, disfrutaron de la gastronomía local adoptando las arepas venezolanas y pescando pargo fresco para sus comidas."
        instagramUrl="https://www.instagram.com/p/CwL_wuFLNmU/"
        quote="Nico y Belu"
      />
      
      </section>
      {/* 5. Curazao */}
      <section id="curazao">
      <HistoryCenterBanner
        badge="Bienvenido Curazao"
        title="Arribo al primer objetivo"
        subtitle="Más de 26 horas de guardia continua"
        text="Luego de una exigente travesía de más de 26 horas sin piloto automático, tocaron puerto en Curazao. El esfuerzo culminó con la emoción de izar la bandera argentina y la de su proyecto en su primer destino internacional."
        instagramUrl="https://www.instagram.com/p/CwVaT6ZrTyc/"
      />
      <HistoryRightEmbed
        badge="Playas y corales"
        title="Explorando Curazao"
        subtitle="Snorkel, aguas cristalinas y rincones especiales"
        text="Recorrieron la isla disfrutando de sus calas rodeadas de coral y aguas turquesas. Desde la animada Mambo Beach hasta la tranquilidad de Diana Beach, aprovecharon para hacer snorkel, sumergirse en la vida marina y celebrar hitos personales."
        instagramUrl="https://www.instagram.com/p/C2iWUxFvWJF/"
      />
      </section>
      {/* 5. Canala de panama */}
      <section id="canal">
      <HistoryCenterBanner
        badge="Paso clave"
        title="Del Caribe al Océano Pacífico"
        subtitle="Más de 26 horas de guardia continua"
        text="Cruzaron las emblemáticas compuertas del Canal de Panamá, completando la transición del mar Caribe hacia las aguas del Océano Pacífico y preparándose para el mayor desafío náutico de su travesía."
        instagramUrl="https://www.instagram.com/reel/C5bwdb4RDz3/"
      />
      <HistoryLeftEmbed
        badge="Rumbo a las Marquesas"
        title="El inicio del Gran Pacífico"
        subtitle="Convivencia, cocina a bordo y compañerismo"
        text="Acompañando la tripulación de @el_barco_amarillo, emprendieron el cruce hacia la Polinesia Francesa. Las primeras jornadas incluyeron mates, repostería casera, atardeceres en alta mar y un ambiente festivo en plena navegación."
        instagramUrl="https://www.instagram.com/p/C56cZwdvxM8/"
        quote="Nico y Belu"
      />
      </section>
      {/* 6. Cruce Pacifico */}
      <section id="cruce">
        <HistoryLeftEmbed
        badge="Vida marina en Galápago"
        title="Avistamientos junto a Galápagos"
        subtitle="Biodiversidad única en mar abierto"
        text="A la altura del archipiélago de Galápagos, contemplaron en menos de una hora la presencia de orcas, lobos marinos, piqueros de pata roja y tiburones saltando fuera del agua, viviendo un espectáculo zoológico único frente a Isla Pinta."
        instagramUrl="https://www.instagram.com/p/C6CBQoTLyWJ/"
        quote="Nico y Belu"
      />
        <HistoryRightEmbed
        badge="Ceremonia en la línea ecuatorial"
        title="Cruce de la Latitud 0° 00' 00 "
        subtitle="Tradición marinera y tributo a Neptuno"
        text="Cumplieron con el tradicional ritual náutico al cruzar el Ecuador terrestre: disfraces, discursos, ofrendas al mar y regalos para los más chicos marcaron el paso hacia el hemisferio sur navegando a buen ritmo."
        instagramUrl="https://www.instagram.com/p/C6HR_vmrdAd/"
      />
      <HistoryLeftEmbed
        badge="Proveeduría del mar"
        title="Pesca en alta mar"
        subtitle="Menú fresco en mitad del océano"
        text="Con los víveres frescos agotándose, la pesca se volvió protagonista. Nico aportó atunes y un dorado de gran tamaño, permitiéndoles elaborar platos variados como ceviche, sashimi y pescado a la plancha directo del mar a la mesa."
        instagramUrl="https://www.instagram.com/p/C6UgclmPoEO/"
        quote="Nico y Belu"
      />
        <HistoryRightEmbed
        badge="Guardias bajo las estrellas"
        title="La rutina de las guardias nocturnas"
        subtitle="Viento, olas y vida interior"
        text="A mitad de camino a Fatu Hiva, la navegación demandó guardias de madrugada con rachas de viento y mar movido. La vida dentro del velero se mantuvo activa entre cocina casera, lectura de instrumentos y avance constante."
        instagramUrl="https://www.instagram.com/p/C6cA5fMvbHz/"
      />
      <HistoryLeftEmbed
        badge="Reflexiones de altamar"
        title="Cielos estrellados y convicción"
        subtitle="La magia de la noche en el océano"
        text="Guíandose por las estrellas durante las guardias nocturnas, apreciaron la inmensidad del cielo sin contaminación lumínica. La contemplación de las estrellas fugaces se transformó en una reflexión sobre el compromiso necesario para hacer realidad los propios sueños."
        instagramUrl="https://www.instagram.com/p/C6rzb4ZSPK7/"
        quote="Nico y Belu"
      />            

      </section>
      
      <section id="polinesia">
        {/* 7. Polinesia */}
        <HistoryCenterBanner
        badge="Polinesia a la vista"
        title="Primera escala: Fatu Hiva"
        subtitle="La llegada a un paisaje de cuento"
        text="Tras semanas en el océano, las prominentes montañas de Fatu Hiva emergieron en el horizonte, marcando una llegada emocionante a los paisajes frondosos de la Polinesia."
        instagramUrl="https://www.instagram.com/reel/C6629Y6ykYM/"
      />
      <HistoryLeftEmbed
        badge="Tesoros en Hanavave"
        title="Encuentros en las Marquesas"
        subtitle="Naturaleza, comunidad y vida silvestre"
        text="Exploraron bahías paradisíacas, compartieron fogones en la playa y nadaron junto a mantarrayas, tortugas y tiburones. La experiencia en la isla les dejó recuerdos compartidos con amigos, anécdotas y frutas locales."
        instagramUrl="https://www.instagram.com/reel/C7QNVJVxSEl/"
        quote="Nico y Belu"
      />
      <HistoryRightEmbed
        badge="Soñando despiertos"
        title="De Buenos Aires a los confines del Pacífico"
        subtitle="Viento, olas y vida interior"
        text="Al recorrer la última isla del archipiélago de las Marquesas, reflexionaron sobre el largo camino recorrido desde que salieron de Argentina con tres bolsos. Con el Franca Austral resguardado en Panamá, reafirmaron la satisfacción de vivir intensamente su espíritu aventurero."
        instagramUrl="https://www.instagram.com/p/C7hpzUkygd_/"
      />
      </section>
      <section id="reseñas">
      <Reseñas />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="asistencia-viajero">
        <AsistenciaViajeroWidget />
      </section>      
      <section id="categories">
        <Categorias />        
      </section>
      <section id="whatsapp">
      <WhatsAppButton 
        phoneNumber="+50766302038" 
        message="(NN)Hola, me gustaría recibir más información sobre las experiencias en San Blas."
        tooltipText="Vivi con nosotros esta experiencia.¡Escríbenos!"
      />
      </section> 
      
      {/*
      <hr />
      <hr />


      
      <HistoryGridCard
        badge="Nuestra Filosofía"
        title="Navegación Consciente y Sostenible"
        text="Cuidamos el entorno que nos rodea. Colaboramos con las comunidades locales y promovemos un turismo respetuoso que cuide los arrecifes de San Blas."
        instagramUrl="https://www.instagram.com/p/EXAMPLE4/"
        quote="Preservamos el paraíso que nos acoge."
      />
      </section>
      
      <section>
        <CharterPromoWidget
        title="¿Listo para escribir tu propia historia en el paraíso?"
        description="Reserva tu catamarán privado en San Blas con todo incluido: capitán, marinero, comidas frescas y equipos de agua."
        buttonText="Ver Catamaranes Disponibles"
        buttonHref="/barcos"
      />
      </section>
      <section>
        <HistoryMediaCarousel
        badge="Momentos Inolvidables"
        title="La Magia de la Vida a Bordo"
        subtitle="Fotografías que capturan la esencia de San Blas"
        text="Cada jornada en el archipiélago ofrece una perspectiva única: desde amaneceres sobre aguas cristalinas hasta tardes compartiendo la cultura con la comunidad Guna Yala."
        images={[
          {
            src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop",
            alt: "Snorkel en arrecife de coral",
          },
          {
            src: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=600&auto=format&fit=crop",
            alt: "Playa en cayo deshabitado",
          },
          {
            src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
            alt: "Atardecer marino en San Blas",
          },
        ]}
      />
      </section>
      <section><ActivitiesPromoWidget buttonHref="/experiencias" /></section>
      <section>
        <HistoryMediaLeft
        badge="Bitácora de Viaje"
        title="Los Primeros Pasos en el Catamarán"
        subtitle="Un recorrido por nuestras primeras expediciones"
        text={`Antes de convertirnos en un servicio de charters, todo comenzó con travesías personales. 

Aprender a convivir con el viento, respetar los tiempos del mar y descubrir rincones inalcanzables en las Islas San Blas fue lo que encendió nuestra pasión.`}
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1500514966906-fe245eea9344?q=80&w=1000&auto=format&fit=crop"
        mediaAlt="Catamarán navegando en San Blas"
        quote="Navegar no es solo desplazarse, es aprender a vivir en armonía con el entorno."
      />
      </section>*/}
    </article>
    
    
  );
}

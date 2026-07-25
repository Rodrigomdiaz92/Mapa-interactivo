export interface FAQItem {
  question: string;
  // Los párrafos se guardan como arreglos de strings
  paragraphs?: string[];
  // Opciones estructuradas si la respuesta es una lista
  options?: {
    title: string;
    description: string;
  }[];
  footerNote?: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export const FAQ_DATA: FAQCategory[] = [
  {
    category: "LA EXPERIENCIA",
    items: [
      {
        question: "¿Cómo es el itinerario?",
        paragraphs: [
          "No hay un itinerario fijo — esa es la magia. Cada día navegamos según el viento y el clima, descubriendo distintas islas paradisíacas: algunas sociales y animadas (bebidas, voleibol), otras tranquilas y remotas.",
          "Navegación diaria, snorkel en arrecifes de coral, kayak, paddle board y exploración de islas son parte de la experiencia. Cada día es flexible y único."
        ],
      },
      {
        question: "¿Qué hace diferente navegar con ustedes?",
        paragraphs: [
          "No es solo un viaje, es una experiencia de vida enfocada en la naturaleza, la simplicidad y la conexión auténtica."
        ],
      },
      {
        question: "¿Cuántos días se recomiendan y cuál es la mejor época para visitar San Blas?",
        paragraphs: [
          "La estadía mínima es de 2 noches, pero recomendamos 3 o más. San Blas es tropical e impredecible: sol y lluvia pueden ocurrir el mismo día durante todo el año.",
          "Diciembre a mayo: más viento y sol (ideal para navegar).\nMayo a noviembre: mar más calmo (perfecto para snorkel y actividades acuáticas).",
          "El agua siempre está cálida y las actividades se realizan todo el año."
        ],
      },
      {
        question: "¿Se marea uno en el velero?",
        paragraphs: [
          "En la mayoría de los casos, no. Alrededor del 90% de nuestros huéspedes no sufre mareos. San Blas está naturalmente protegida por arrecifes de coral, lo que mantiene el mar muy tranquilo. Elegimos fondeaderos resguardados para garantizar una estancia estable y cómoda."
        ],
      },
    ],
  },
  {
    category: "PLANIFICA TU VIAJE",
    items: [
      {
        question: "¿Cómo llego desde Ciudad de Panamá al velero?",
        paragraphs: ["Dos opciones de traslado:"],
        options: [
          {
            title: "Tierra + lancha rápida",
            description: "Recogida temprano en Panamá (5:00 AM) → Traslado 4x4 al puerto → Lancha al velero. Aprox. $140 USD por persona (ida y vuelta)."
          },
          {
            title: "Avión privado (Cessna)",
            description: "Volando directamente al archipiélago para mayor comodidad y vistas panorámicas."
          }
        ],
        footerNote: "Te asistimos con toda la logística para coordinar tu llegada de forma segura."
      },
      {
        question: "¿Cuántos barcos tienen disponibles?",
        paragraphs: [
          "Trabajamos con una cuidada selección de veleros y catamaranes en San Blas, operados por tripulaciones profesionales y capacitadas."
        ],
      },
    ],
  },
  {
    category: "VIDA A BORDO",
    items: [
      {
        question: "¿El barco se comparte con otros pasajeros?",
        paragraphs: [
          "La gran mayoría de nuestras reservas son en modalidad charter privado exclusivamente para tu grupo. No obstante, en ciertas embarcaciones existe la opción de reservar camarote compartido."
        ],
      },
      {
        question: "¿Cuántos pasajeros se pueden hospedar?",
        paragraphs: [
          "Nuestras embarcaciones acogen habitualmente de 2 a 8 huéspedes. Para grupos más numerosos, coordinamos flotillas de múltiples catamaranes o veleros que navegan juntos."
        ],
      },
      {
        question: "¿Cuántos camarotes y baños hay a bordo?",
        paragraphs: [
          "Dependiendo del modelo, las embarcaciones disponen de entre 2 y 4 camarotes dobles con baños privados o compartidos equipados para la estadía."
        ],
      },
      {
        question: "¿Navegan todos los días?",
        paragraphs: [
          "Sí, la navegación diaria entre islas forma parte esencial de la rutina."
        ],
      },
      {
        question: "¿Qué debo saber sobre la vida diaria a bordo?",
        paragraphs: [
          "Es un estilo de vida relajado y natural. Hacemos uso eficiente de energía solar y agua dulce. Se aconseja llevar vestimenta ligera, traje de baño y protector solar seguro para arrecifes de coral."
        ],
      },
      {
        question: "¿Los niños son bienvenidos a bordo?",
        paragraphs: [
          "¡Por supuesto! San Blas es un entorno magnífico para viajes en familia gracias a sus aguas calmas y playas de baja profundidad."
        ],
      },
      {
        question: "¿Dónde está la ducha?",
        paragraphs: [
          "Cada barco cuenta con baños con ducha interior y duchas al aire libre en la plataforma de popa, ideales para quitarse la sal tras nadar."
        ],
      },
      {
        question: "¿Qué pasa si llueve?",
        paragraphs: [
          "En el Caribe tropical las lluvias suelen ser breves y pasajeras. Tras un chubasco el sol regresa rápidamente y las actividades continúan normalmente."
        ],
      },
    ],
  },
  {
    category: "COMIDA E INCLUIDOS",
    items: [
      {
        question: "¿Qué está incluido en la experiencia?",
        paragraphs: [
          "Alojamiento a bordo, pensión completa (desayunos, almuerzos, cenas), bebidas, uso de equipos de snorkel, kayaks, paddle boards, navegación diaria y atención de la tripulación."
        ],
      },
      {
        question: "¿Qué no está incluido?",
        paragraphs: [
          "Impuestos de entrada a la comarca Guna Yala y los traslados terrestres o aéreos hacia el puerto."
        ],
      },
      {
        question: "¿Qué tipo de comida se sirve a bordo?",
        paragraphs: [
          "Menús frescos inspirados en la cocina local e internacional, con abundantes mariscos y opciones adaptadas a dietas vegetarianas, veganas o celíacas con aviso previo."
        ],
      },
    ],
  },
  {
    category: "RESERVAS",
    items: [
      {
        question: "¿Qué métodos de pago aceptan?",
        paragraphs: [
          "Aceptamos transferencias, Wise, PayPal o tarjetas. Se requiere un depósito inicial para bloquear las fechas y el saldo restante se abona según las condiciones acordadas."
        ],
      },
    ],
  },
  {
    category: "NUESTRO IMPACTO",
    items: [
      {
        question: "¿Cómo apoyan a la comunidad local y al medio ambiente?",
        paragraphs: [
          "Fomentamos el turismo responsable comprando insumos frescos a las comunidades indígenas Guna, respetando sus tradiciones, minimizando el plástico de un solo uso a bordo y protegiendo los ecosistemas marinos."
        ],
      },
    ],
  },
];
import { CatalogItem } from "@/types/catalog";

export const INITIAL_CATALOG_ITEMS: CatalogItem[] = [
  // ---------------------------------------------------------------------------
  // 1. LUPA
  // ---------------------------------------------------------------------------
  {
    id: 1,
    slug: "lupa-jeanneau-sun-odyssey-40ft",
    category: "Sailboat",
    isAvailable: true,
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Velero Lupa (Jeanneau 40FT) en San Blas | Sailing the World",
        en: "Charter Lupa (Jeanneau 40FT) Sailboat in San Blas | Sailing the World",
      },
      description: {
        es: "Expedición biológica en San Blas a bordo del velero Lupa (Jeanneau 40ft) con los biólogos Nico y Belu. Pensión completa y snorkel guiado.",
        en: "Biologist-led San Blas expedition aboard Lupa (Jeanneau 40ft) with hosts Nico & Belu. All-inclusive meals and guided snorkeling.",
      },
      keywords: [
        { es: "velero Lupa san blas", en: "Lupa sailboat san blas" },
        { es: "expedicion biologia san blas", en: "biologist led charter san blas" },
      ],
      openGraph: {
        title: {
          es: "Velero Lupa en San Blas - Expedición con Biólogos Marinos",
          en: "Lupa Sailboat in San Blas - Biologist-Led Expedition",
        },
        description: {
          es: "Explora San Blas con los biólogos marinos Nico y Belu a bordo de un Jeanneau Sun Odyssey de 40 pies.",
          en: "Explore San Blas with marine biologists Nico & Belu aboard a 40ft Jeanneau Sun Odyssey.",
        },
        images: [
          "/contenido/veleros/Lupa/catalogo/1.png",
          "/contenido/veleros/Lupa/catalogo/2.png",
          "/contenido/veleros/Lupa/catalogo/3.png",
          "/contenido/veleros/Lupa/catalogo/4.png",
          "/contenido/veleros/Lupa/catalogo/5.png",
          "/contenido/veleros/Lupa/catalogo/6.png",
          "/contenido/veleros/Lupa/catalogo/7.png",
        ],
      },
    },
    boatName: "LUPA (Jeanneau Sun Odyssey 40FT)",
    boatCoverPhoto: "/contenido/veleros/Lupa/catalogo/1.png",
    boatGalleryPhotos: [
      "/contenido/veleros/Lupa/catalogo/1.png",
      "/contenido/veleros/Lupa/catalogo/2.png",
      "/contenido/veleros/Lupa/catalogo/3.png",
      "/contenido/veleros/Lupa/catalogo/4.png",
      "/contenido/veleros/Lupa/catalogo/5.png",
      "/contenido/veleros/Lupa/catalogo/6.png",
      "/contenido/veleros/Lupa/catalogo/7.png",
    ],
    boatDescription: {
      es: "Expedición guiada por biólogos marinos en San Blas a bordo de un acogedor Jeanneau Sun Odyssey de 40 pies.",
      en: "Biologist-led San Blas expedition aboard a comfortable 40ft Jeanneau Sun Odyssey sailboat.",
    },
    boatLongDescription: {
      es: "¡Bienvenidos a bordo! Somos Nico y Belu, tus anfitriones y biólogos marinos profesionales argentinos que dejamos la rutina hace más de 3 años para vivir a bordo. Diseñamos una experiencia en el archipiélago de San Blas que va mucho más allá de un paseo en barco, con snorkel guiado e incluso uso de microscopio a bordo.",
      en: "Welcome aboard! We are Nico and Belu, your hosts and professional Argentine biologists who left the routine over 3 years ago to live aboard our sailboat. Explore San Blas guided by experts who know and love marine life, complete with guided snorkeling and an onboard microscope.",
    },
    specs: {
      lengthFeet: 40,
      cabins: 2,
      bathrooms: 1,
      doubleBeds: 2,
    },
    captain: {
      name: "Nico & Belu",
      role: {
        es: "Biólogos Marinos y Capitanes",
        en: "Marine Biologists & Expert Captains",
      },
      photoUrl: "/contenido/veleros/Lupa/capitan/1.png",
      description: {
        es: "Biólogos marinos profesionales y navegantes expertos que han recorrido desde el Caribe hasta la Polinesia Francesa.",
        en: "Professional marine biologists and expert sailors who have navigated from the Caribbean to French Polynesia.",
      },
      languages: ["Español", "English", "Português"],
    },
    dining: {
      description: {
        es: "Gastronomía basada en marisco fresco del día o productos adquiridos directamente a los pescadores locales Guna. Incluye 3 comidas diarias, snacks y bebidas.",
        en: "Fresh daily seafood gastronomy featuring the catch of the day or direct purchases from local Guna fishermen. Includes 3 daily meals, snacks, and drinks.",
      },
      photoUrl: "/contenido/veleros/Lupa/comidas/1.png",
    },
    activities: {
      description: {
        es: "Snorkel guiado con enfoque biológico, sesiones interactivas con microscopio a bordo e island hopping diario por Guna Yala.",
        en: "Biologist-guided snorkeling, interactive onboard microscope sessions, and daily island hopping across Guna Yala.",
      },
      photoUrls: [
        "/contenido/veleros/Lupa/experiencia/1.png",
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 300,
      tiers: [
        {
          seasonOrType: { es: "2 Huéspedes (Camarote Popa)", en: "2 Guests (Aft Cabin)" },
          guestsCount: 2,
          pricePerNight: 600,
          notes: { es: "Camarote Privado", en: "Private Cabin" },
        },
        {
          seasonOrType: { es: "3 Huéspedes (2 Camarotes)", en: "3 Guests (2 Cabins)" },
          guestsCount: 3,
          pricePerNight: 790,
          notes: { es: "Charter Privado", en: "Private Charter" },
        },
        {
          seasonOrType: { es: "4 Huéspedes (2 Camarotes)", en: "4 Guests (2 Cabins)" },
          guestsCount: 4,
          pricePerNight: 990,
          notes: { es: "Charter Privado", en: "Private Charter" },
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Ocupación / Configuración</th>
                <th class="p-3 border">Modalidad</th>
                <th class="p-3 border">Precio (USD / Noche)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">2 Huéspedes (Camarote Popa)</td>
                <td class="p-3 border">Camarote Privado</td>
                <td class="p-3 border font-bold text-green-600">$600 USD</td>
              </tr>
              <tr>
                <td class="p-3 border">3 Huéspedes (2 Camarotes)</td>
                <td class="p-3 border">Charter Privado</td>
                <td class="p-3 border font-bold text-green-600">$790 USD</td>
              </tr>
              <tr>
                <td class="p-3 border">4 Huéspedes (2 Camarotes)</td>
                <td class="p-3 border">Charter Privado</td>
                <td class="p-3 border font-bold text-green-600">$990 USD</td>
              </tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Occupancy & Setup</th>
                <th class="p-3 border">Mode</th>
                <th class="p-3 border">Price (USD / Night)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">2 Guests (Aft Cabin)</td>
                <td class="p-3 border">Private Cabin</td>
                <td class="p-3 border font-bold text-green-600">$600 USD</td>
              </tr>
              <tr>
                <td class="p-3 border">3 Guests (2 Cabins)</td>
                <td class="p-3 border">Private Charter</td>
                <td class="p-3 border font-bold text-green-600">$790 USD</td>
              </tr>
              <tr>
                <td class="p-3 border">4 Guests (2 Cabins)</td>
                <td class="p-3 border">Private Charter</td>
                <td class="p-3 border font-bold text-green-600">$990 USD</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    },
    includes: [
      { es: "Anfitriones y guía biológica profesional (Nico & Belu)", en: "Hosting and guidance by professional biologist crew (Nico & Belu)" },
      { es: "Pensión completa: 3 comidas, marisco fresco diario, snacks y bebidas", en: "All-inclusive meals, daily fresh seafood, snacks, and drinks" },
      { es: "Equipamiento del barco, snorkel y microscopio a bordo", en: "Use of vessel equipment, snorkeling gear, and onboard microscope" },
      { es: "Limpieza del barco y agua dulce", en: "Vessel cleaning and fresh water" },
    ],
    excludes: [
      { es: "Seguro personal de viaje", en: "Personal travel insurance" },
      { es: "Transporte hacia/desde San Blas", en: "Transport to/from San Blas" },
      { es: "Impuestos de entrada a Guna Yala (pago en efectivo local)", en: "Guna Yala Entrance Fees (local cash tax)" },
      { es: "Gastos personales en las islas", en: "Personal expenses on the islands" },
    ],
    relatedExperienceIds: [2, 3, 4],
    maxGuests: 4,
    isPrivate: true,
    isSharedAllowed: true,
    featureBadge: { es: "Expedición Biológica", en: "Biologist-Led Charter" },
    isFeatured: true,
    hasDiscount: false,
  },

  // ---------------------------------------------------------------------------
  // 2. THYRA
  // ---------------------------------------------------------------------------
  {
    id: 2,
    slug: "thyra-danish-handcrafted-monohull",
    category: "Sailboat",
    isAvailable: true, 
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Velero Clásico THYRA en San Blas | Sailing the World",
        en: "Charter THYRA Handcrafted Danish Sailboat in San Blas | Sailing the World",
      },
      description: {
        es: "Reserva el velero danés THYRA en San Blas. Embarcación artesanal de caoba, ideal para parejas o grupos pequeños. Incluye 3 comidas y paddleboard.",
        en: "Book the Danish handcrafted THYRA sailboat in San Blas. Mahogany interior, ideal for couples or small groups. Includes 3 daily meals and SUP.",
      },
      keywords: [
        { es: "velero clasico THYRA san blas", en: "THYRA sailboat san blas" },
        { es: "charter privado caoba san blas", en: "private classic boat charter panama" },
      ],
      openGraph: {
        title: {
          es: "Velero Clásico THYRA en San Blas - Experiencia Privada",
          en: "THYRA Classic Sailboat in San Blas - Private Experience",
        },
        description: {
          es: "Un refugio caribeño privado hecho a mano en Dinamarca. Interiores en caoba e intimidad en San Blas.",
          en: "A private handcrafted Danish Caribbean hideaway with mahogany interiors in San Blas.",
        },
        images: [
          "/contenido/veleros/Thyra/catalogo/1.png",
          "/contenido/veleros/Thyra/catalogo/2.png",
          "/contenido/veleros/Thyra/catalogo/3.png",
          "/contenido/veleros/Thyra/catalogo/4.png",
           "/contenido/veleros/Thyra/catalogo/5.png",
           "/contenido/veleros/Thyra/catalogo/6.png",
           "/contenido/veleros/Thyra/catalogo/7.png",
        ],
      },
    },
    boatName: "THYRA (Danish Handcrafted Monohull)",
    boatCoverPhoto: "/contenido/veleros/Thyra/catalogo/1.png",
    boatGalleryPhotos: [
          "/contenido/veleros/Thyra/catalogo/1.png",
          "/contenido/veleros/Thyra/catalogo/2.png",
          "/contenido/veleros/Thyra/catalogo/3.png",
          "/contenido/veleros/Thyra/catalogo/4.png",
          "/contenido/veleros/Thyra/catalogo/5.png",
          "/contenido/veleros/Thyra/catalogo/6.png",
          "/contenido/veleros/Thyra/catalogo/7.png",
    ],
    boatDescription: {
      es: "Embarcación artesanal danesa con elegantes interiores en caoba. Ideal para parejas o grupos reducidos.",
      en: "Danish handcrafted monohull with beautiful mahogany interiors. Ideal for couples or small groups.",
    },
    boatLongDescription: {
      es: "THYRA conserva la autenticidad de un velero clásico combinado con el confort moderno. Diseñado especialmente para parejas que buscan romanticismo o pequeños grupos de amigos que priorizan la intimidad. Ofrecido exclusivamente como charter privado.",
      en: "THYRA features beautiful mahogany interiors that preserve classic character while offering modern comfort. Ideal for couples seeking romance or small groups prioritizing intimacy on an exclusive private charter.",
    },
    specs: {
      cabins: 1,
      bathrooms: 1,
      doubleBeds: 1,
      singleBeds: 1,
    },
    captain: {
      name: "Leo",
      role: { es: "Anfitrión y Capitán", en: "Host & Captain" },
      photoUrl: "/contenido/veleros/Thyra/capitan/1.png",
      description: {
        es: "Anfitrión dedicado a ofrecer hospitalidad excepcional y una navegación auténtica por el Caribe.",
        en: "Dedicated host offering exceptional hospitality and an authentic Caribbean sailing experience.",
      },
    },
    dining: {
      description: {
        es: "Tres comidas diarias incluidas (desayuno, almuerzo y cena) preparadas a bordo.",
        en: "Three daily meals included (breakfast, lunch, dinner) served onboard.",
      },
      photoUrl: "/contenido/veleros/Thyra/comidas/1.png",
    },
    activities: {
      description: {
        es: "Uso de equipo de snorkel y Stand-Up Paddleboard (SUP) para explorar los arrecifes e islas vírgenes.",
        en: "Snorkel and Paddleboard (SUP) equipment available to explore pristine reefs and islands.",
      },
      photoUrls: [
        "/contenido/veleros/Thyra/experiencia/1.png"
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 220,
      tiers: [
        {
          seasonOrType: { es: "Charter Privado (Exclusivo)", en: "Private Charter (Exclusive Boat)" },
          pricePerNight: 220,
          notes: { es: "Precio por persona por noche", en: "Price per person per night" },
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Tipo de Alojamiento</th>
                <th class="p-3 border">Precio (USD / Persona / Noche)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Charter Privado (Barco Exclusivo)</td>
                <td class="p-3 border font-bold text-green-600">$220 USD</td>
              </tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Accommodation Type</th>
                <th class="p-3 border">Price (USD / Person / Night)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Private Charter (Exclusive Boat)</td>
                <td class="p-3 border font-bold text-green-600">$220 USD</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    },
    includes: [
      { es: "Tres comidas diarias (desayuno, almuerzo, cena)", en: "Three daily meals (breakfast, lunch, dinner)" },
      { es: "Uso de equipo de snorkel y paddleboard", en: "Use of Snorkel and Paddleboard equipment" },
      { es: "Navegación y hospitalidad del capitán", en: "Sailing and captain hospitality" },
    ],
    excludes: [
      { es: "Transporte hacia/desde San Blas", en: "Transport to/from San Blas" },
      { es: "Impuesto de entrada a Guna Yala", en: "Mandatory entrance fee to Guna Yala" },
      { es: "Seguro personal de viaje", en: "Personal travel insurance" },
    ],
    relatedExperienceIds: [1, 5, 7],
    maxGuests: 3,
    isPrivate: true,
    isSharedAllowed: false,
    featureBadge: { es: "Diseño Artesanal Danés", en: "Danish Handcrafted" },
    isFeatured: false,
    hasDiscount: false,
  },

  // ---------------------------------------------------------------------------
  // 3. BlueMarys
  // ---------------------------------------------------------------------------
  {
    id: 3,
    slug: "bluemarys-beneteau-oceanis",
    category: "Sailboat",
    isAvailable: true, 
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Velero BlueMarys (Beneteau Oceanis 58ft) en San Blas | Sailing the World",
        en: "Charter BlueMarys (Beneteau Oceanis 58ft) Sailboat in San Blas | Sailing the World",
      },
      description: {
        es: "Alquila el velero BlueMarys de 58 pies en San Blas. 3 camarotes dobles con baño privado, Wi-Fi Starlink, barra libre moderada y ambiente familiar.",
        en: "Charter the 58ft BlueMarys sailboat in San Blas. 3 double cabins with private bathrooms, Starlink Wi-Fi, moderate open bar, and family vibe.",
      },
      keywords: [
        { es: "velero BlueMarys san blas", en: "BlueMarys sailboat san blas" },
        { es: "beneteau oceanis san blas", en: "beneteau oceanis charter panama" },
      ],
      openGraph: {
        title: {
          es: "Velero BlueMarys en San Blas - Confort y Gran Esplendor",
          en: "BlueMarys Sailboat in San Blas - Luxury & Family Atmosphere",
        },
        description: {
          es: "Magnífico velero Beneteau Oceanis de 58 pies con 3 camarotes dobles y baño privado cada uno.",
          en: "Magnificent 58ft Beneteau Oceanis sailboat featuring 3 double cabins with private bathrooms.",
        },
        images: [
          "/contenido/veleros/BlueMarys/catalogo/1.png",
          "/contenido/veleros/BlueMarys/catalogo/2.png",
          "/contenido/veleros/BlueMarys/catalogo/3.png",
          "/contenido/veleros/BlueMarys/catalogo/4.png", 
          "/contenido/veleros/BlueMarys/catalogo/5.png",
          "/contenido/veleros/BlueMarys/catalogo/6.png", 
        ],
      },
    },
    boatName: "BlueMarys (Beneteau Oceanis)",
    boatCoverPhoto: "/contenido/veleros/BlueMarys/catalogo/1.png",
    boatGalleryPhotos: [
      "/contenido/veleros/BlueMarys/catalogo/1.png",
          "/contenido/veleros/BlueMarys/catalogo/2.png",
          "/contenido/veleros/BlueMarys/catalogo/3.png",
          "/contenido/veleros/BlueMarys/catalogo/4.png", 
          "/contenido/veleros/BlueMarys/catalogo/5.png",
          "/contenido/veleros/BlueMarys/catalogo/6.png",
    ],
    boatDescription: {
      es: "Espacioso velero Beneteau Oceanis de 58 pies con 3 camarotes dobles, cada uno con su propio baño privado.",
      en: "Spacious 58ft Beneteau Oceanis monohull featuring 3 double cabins, each with its own private bathroom.",
    },
    boatLongDescription: {
      es: "BlueMarys ofrece amplios espacios interiores y exteriores, incluyendo dos salones comedor y una extensa cubierta. Ya sea en modalidad compartida o charter privado, navegarás San Blas con una cálida tripulación familiar (Capitán, Chef/Marinero y su hija Franchesca de 8 años) dedicada a tu comodidad.",
      en: "BlueMarys offers spacious indoor and outdoor living areas, including two dining saloons and a sprawling deck. Guided by a welcoming family crew (Captain, Chef/Sailor, and their 8-year-old daughter Franchesca), it is perfect for a refined Caribbean getaway.",
    },
    specs: {
      lengthFeet: 58,
      cabins: 3,
      bathrooms: 3,
      doubleBeds: 3,
    },
    captain: {
      name: "Captain & Family Crew",
      role: { es: "Capitán Profesional y Chef", en: "Professional Captain & Chef" },
      photoUrl: "/contenido/veleros/BlueMarys/capitan/1.png",
      description: {
        es: "Capitán profesional y chef/marinera junto a su hija Franchesca de 8 años, creando un ambiente familiar cálido y seguro.",
        en: "Professional captain and chef/sailor accompanied by their 8-year-old daughter Franchesca, creating a warm family atmosphere.",
      },
    },
    dining: {
      description: {
        es: "Tres comidas diarias a base de pescado y marisco fresco local. Incluye barra libre moderada (refrescos, cerveza, vino y agua). Se adaptan restricciones dietéticas.",
        en: "Three daily meals centered around fresh local fish and seafood. Moderate open bar included (soft drinks, beer, wine, water). Dietary needs accommodated.",
      },
      photoUrl: "/contenido/veleros/BlueMarys/comidas/1.png",
    },
    activities: {
      description: {
        es: "Navegación diaria flexible, snorkel, Stand-Up Paddleboard (SUP) y paseos en bote auxiliar para acceder a playas y arrecifes.",
        en: "Flexible daily sailing, snorkeling, Stand-Up Paddleboard (SUP), and dinghy rides to beaches and reefs.",
      },
      photoUrls: [
        "/contenido/veleros/BlueMarys/experiencias/1.png" ,
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 490,
      tiers: [
        {
          seasonOrType: { es: "Habitación King Size (Compartido)", en: "King Size Room (Shared)" },
          pricePerNight: 570,
        },
        {
          seasonOrType: { es: "Habitación Standard (Compartido)", en: "Standard Room (Shared)" },
          pricePerNight: 490,
        },
        {
          seasonOrType: { es: "Charter Privado (Tarifa Base)", en: "Private Charter (Base Rate)" },
          pricePerNight: 900,
          notes: { es: "Base incluye primeros huéspedes + $165/noche por persona adicional", en: "Base includes first guests + $165/night extra guest" },
        },
      ],
      htmlTableContent: {
        es: `
          <div class="space-y-4 text-sm">
            <h4 class="font-bold">Opción A: Barco Compartido</h4>
            <table class="w-full border-collapse border border-slate-200 text-left">
              <thead>
                <tr class="bg-slate-100">
                  <th class="p-3 border">Tipo de Camarote</th>
                  <th class="p-3 border">Precio (USD / Noche)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-3 border">Habitación King Size (con baño privado)</td>
                  <td class="p-3 border font-bold text-green-600">$570 USD</td>
                </tr>
                <tr>
                  <td class="p-3 border">Habitación Standard (con baño privado)</td>
                  <td class="p-3 border font-bold text-green-600">$490 USD</td>
                </tr>
              </tbody>
            </table>
            <h4 class="font-bold">Opción B: Barco Privado</h4>
            <p><strong>Tarifa Base:</strong> $900 USD / Noche | <strong>Persona adicional:</strong> +$165 USD / Noche</p>
          </div>
        `,
        en: `
          <div class="space-y-4 text-sm">
            <h4 class="font-bold">Option A: Shared Boat Mode</h4>
            <table class="w-full border-collapse border border-slate-200 text-left">
              <thead>
                <tr class="bg-slate-100">
                  <th class="p-3 border">Cabin Type</th>
                  <th class="p-3 border">Price (USD / Night)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-3 border">King Size Room (private bathroom)</td>
                  <td class="p-3 border font-bold text-green-600">$570 USD</td>
                </tr>
                <tr>
                  <td class="p-3 border">Standard Room (private bathroom)</td>
                  <td class="p-3 border font-bold text-green-600">$490 USD</td>
                </tr>
              </tbody>
            </table>
            <h4 class="font-bold">Option B: Private Boat Mode</h4>
            <p><strong>Base Rate:</strong> $900 USD / Night | <strong>Additional Guest Fee:</strong> +$165 USD / Night</p>
          </div>
        `,
      },
    },
    includes: [
      { es: "Servicio de tripulación profesional y navegación diaria", en: "Professional crew service and daily navigation" },
      { es: "3 comidas gourmet diarias y barra libre moderada", en: "3 daily gourmet meals and moderate open bar" },
      { es: "Wi-Fi, equipo de snorkel, paddleboard y traslados en dinghy", en: "Wi-Fi, snorkeling equipment, paddleboard, and dinghy rides" },
      { es: "Amenidades de baño, sábanas limpias y toallas de ducha", en: "Bathroom amenities, fresh linens, and shower towels" },
    ],
    excludes: [
      { es: "Transporte desde Ciudad de Panamá al barco", en: "Transport from Panama City to the boat" },
      { es: "Impuestos de entrada a Guna Yala ($23 USD por persona en efectivo)", en: "Guna Yala Entrance Fees ($23 USD per person in cash)" },
      { es: "Toallas de playa y gastos personales", en: "Beach towels and personal expenses" },
    ],
    relatedExperienceIds: [1, 4, 6],
    maxGuests: 5,
    isPrivate: true,
    isSharedAllowed: true,
    featureBadge: { es: "3 Baños Privados", en: "3 Private Bathrooms" },
    isFeatured: true,
    hasDiscount: false,
  },

  // ---------------------------------------------------------------------------
  // 4. Naboa
  // ---------------------------------------------------------------------------
  {
    id: 4,
    slug: "naboa-bavaria-39-cruiser",
    category: "Sailboat",
    isAvailable: true, 
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Velero Naboa (Bavaria 39) en San Blas | Sailing the World",
        en: "Charter Naboa (Bavaria 39 Cruiser) Sailboat in San Blas | Sailing the World",
      },
      description: {
        es: "Hospitalidad brasileña en San Blas a bordo del Naboa (Bavaria 39). Capitán Marcelo, Starlink, barra libre, snorkel y SUP incluidos.",
        en: "Brazilian hospitality in San Blas aboard Naboa (Bavaria 39). Captain Marcelo, Starlink internet, open bar, snorkel, and SUP included.",
      },
      keywords: [
        { es: "velero Naboa san blas", en: "Naboa sailboat san blas" },
        { es: "bavaria 39 san blas marcelo", en: "bavaria 39 charter panama" },
      ],
      openGraph: {
        title: {
          es: "Velero Naboa en San Blas - Calidez Brasileña y Confort",
          en: "Naboa Sailboat in San Blas - Brazilian Hospitality",
        },
        description: {
          es: "Disfruta de la hospitalidad de Marcelo a bordo del Bavaria 39 con Starlink e itinerarios de ensueño.",
          en: "Enjoy Brazilian hospitality with Captain Marcelo aboard a Bavaria 39 featuring Starlink.",
        },
        images: [
          "/contenido/veleros/Naboa/catalogo/1.png",
          "/contenido/veleros/Naboa/catalogo/2.png",
          "/contenido/veleros/Naboa/catalogo/3.png",
          "/contenido/veleros/Naboa/catalogo/4.png", 
          "/contenido/veleros/Naboa/catalogo/5.png",
          "/contenido/veleros/Naboa/catalogo/6.png",
          "/contenido/veleros/Naboa/catalogo/7.png",
          "/contenido/veleros/Naboa/catalogo/8.png",
        ],
      },
    },
    boatName: "Naboa (Bavaria 39 Cruiser)",
    boatCoverPhoto: "/contenido/veleros/Naboa/catalogo/1.png",
    boatGalleryPhotos: [
      "/contenido/veleros/Naboa/catalogo/1.png",
          "/contenido/veleros/Naboa/catalogo/2.png",
          "/contenido/veleros/Naboa/catalogo/3.png",
          "/contenido/veleros/Naboa/catalogo/4.png", 
          "/contenido/veleros/Naboa/catalogo/5.png",
          "/contenido/veleros/Naboa/catalogo/6.png",
          "/contenido/veleros/Naboa/catalogo/7.png",
          "/contenido/veleros/Naboa/catalogo/8.png",
    ],
    boatDescription: {
      es: "Velero de alta estabilidad y confort operado con cálida hospitalidad brasileña por el Capitán Marcelo.",
      en: "A stable and comfortable monohull hosted with warm Brazilian hospitality by Captain Marcelo.",
    },
    boatLongDescription: {
      es: "¡Prepárate para desconectar! Naboa ofrece una experiencia de navegación guiada por el capitán Marcelo, ideal para quienes buscan tranquilidad, exploración y el espíritu acogedor brasileño. Equipado con Starlink, barra libre y equipamiento de deportes acuáticos.",
      en: "Prepare to disconnect! Naboa offers a delightful sailing experience hosted by Captain Marcelo. Perfect for those seeking tranquility, exploration, and warm Brazilian hospitality in San Blas.",
    },
    specs: {
      lengthFeet: 39,
      cabins: 2,
      bathrooms: 1,
      doubleBeds: 2,
    },
    captain: {
      name: "Capt. Marcelo & First Mate",
      role: { es: "Capitán y Primer Oficial", en: "Captain and First Mate" },
      photoUrl: "/contenido/veleros/Naboa/capitan/1.png",
      description: {
        es: "Capitán Marcelo y su primer oficial brindan una atención personalizada y alegre al estilo brasileño.",
        en: "Captain Marcelo and his first mate offer personalized, warm Brazilian hospitality.",
      },
      languages: ["Português", "Español", "English"],
    },
    dining: {
      description: {
        es: "Menú gourmet con mariscos, pescado fresco, arroces, pastas, aperitivos y frutas tropicales. Incluye barra libre con bebidas y cócteles (consumo moderado).",
        en: "Gourmet menu featuring seafood, fresh fish, rice, pasta, appetizers, and tropical fruits. Open bar with drinks and cocktails included (moderate consumption).",
      },
      photoUrl: "/contenido/veleros/Naboa/comidas/1.png",
    },
    activities: {
      description: {
        es: "Navegación diaria entre islas, snorkel, Stand Up Paddle (SUP), pesca deportiva ligera y conexión con Internet Starlink a bordo.",
        en: "Daily island navigation, snorkeling, Stand Up Paddle (SUP), fishing gear, and Starlink internet onboard.",
      },
      photoUrls: [
        "/contenido/veleros/Naboa/experiencia/1.png",
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 345,
      tiers: [
        {
          seasonOrType: { es: "Charter Privado (2 Huéspedes)", en: "Private Charter (2 Guests)" },
          guestsCount: 2,
          pricePerNight: 690,
          notes: { es: "Huésped adicional: $150 USD", en: "Extra guest: $150 USD" },
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Tipo de Alojamiento</th>
                <th class="p-3 border">Precio Base (2 Personas)</th>
                <th class="p-3 border">Persona Adicional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Charter Privado (Barco Exclusivo)</td>
                <td class="p-3 border font-bold text-green-600">$690 USD / Noche</td>
                <td class="p-3 border">+$150 USD / Noche</td>
              </tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Accommodation Type</th>
                <th class="p-3 border">Base Price (2 Guests)</th>
                <th class="p-3 border">Extra Guest</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Private Charter (Exclusive Boat)</td>
                <td class="p-3 border font-bold text-green-600">$690 USD / Night</td>
                <td class="p-3 border">+$150 USD / Night</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    },
    includes: [
      { es: "Servicio de tripulación privada (Capitán y Primer Oficial)", en: "Private boat with crew (Captain and First Mate)" },
      { es: "Menú gourmet y barra libre con cócteles (consumo moderado)", en: "Gourmet menu and open bar (moderate consumption)" },
      { es: "Sábanas, toallas de baño, equipo de pesca, snorkel y SUP", en: "Bed linen, bath towels, fishing gear, snorkel equipment, and SUP" },
      { es: "Internet Starlink, combustible y tanque de agua dulce", en: "Starlink Internet, fuel, and fresh water tank" },
    ],
    excludes: [
      { es: "Transporte hacia el barco", en: "Transport to the boat" },
      { es: "Seguro de viaje personal", en: "Personal travel insurance" },
      { es: "Impuestos obligatorios de entrada a Guna Yala", en: "Mandatory entrance fees to Guna Yala" },
    ],
    relatedExperienceIds: [1, 3, 6],
    maxGuests: 4,
    isPrivate: true,
    isSharedAllowed: false,
    featureBadge: { es: "Internet Starlink Incluido", en: "Starlink Internet Onboard" },
    isFeatured: false,
    hasDiscount: false,
  },

  // ---------------------------------------------------------------------------
  // 5. Splendid
  // ---------------------------------------------------------------------------
  {
    id: 5,
    slug: "splendid-cheoy-lee-classic-yawl",
    category: "Sailboat",
    isAvailable: true,
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Velero Clásico Splendid (Cheoy Lee 1973) en San Blas | Sailing the World",
        en: "Charter Classic Sailboat Splendid (Cheoy Lee 1973) in San Blas | Sailing the World",
      },
      description: {
        es: "Navega en la joya de madera Cheoy Lee Yawl 1973 en San Blas. Charter exclusivo de lujo clásico para 2 personas con pensión completa.",
        en: "Sail on the 1973 Cheoy Lee Yawl classic masterpiece in San Blas. Exclusive private charter for 2 guests with full board.",
      },
      keywords: [
        { es: "velero Splendid cheoy lee", en: "Splendid cheoy lee yawl san blas" },
        { es: "velero madera clasico panama", en: "classic wooden sailboat san blas" },
      ],
      openGraph: {
        title: {
          es: "Velero Clásico Splendid en San Blas - Elegancia Atemporal",
          en: "Splendid Classic Yawl in San Blas - Timeless Elegance",
        },
        description: {
          es: "Una obra maestra de la náutica con detalles en madera teca construida en 1973.",
          en: "A marine masterpiece with classic teak wood detailing built in 1973.",
        },
        images: [
          "/contenido/veleros/Splendid/catalogo/1.png",
          "/contenido/veleros/Splendid/catalogo/2.png",
          "/contenido/veleros/Splendid/catalogo/3.png",
          "/contenido/veleros/Splendid/catalogo/4.png", 
          "/contenido/veleros/Splendid/catalogo/5.png",
          "/contenido/veleros/Splendid/catalogo/6.png",
          "/contenido/veleros/Splendid/catalogo/7.png",
          "/contenido/veleros/Splendid/catalogo/8.png",
        ],
      },
    },
    boatName: "Splendid (Cheoy Lee Classic Yawl 1973)",
    boatCoverPhoto: "/contenido/veleros/Splendid/catalogo/1.png",
    boatGalleryPhotos: [
      "/contenido/veleros/Splendid/catalogo/1.png",
          "/contenido/veleros/Splendid/catalogo/2.png",
          "/contenido/veleros/Splendid/catalogo/3.png",
          "/contenido/veleros/Splendid/catalogo/4.png", 
          "/contenido/veleros/Splendid/catalogo/5.png",
          "/contenido/veleros/Splendid/catalogo/6.png",
          "/contenido/veleros/Splendid/catalogo/7.png",
          "/contenido/veleros/Splendid/catalogo/8.png",
    ],
    boatDescription: {
      es: "Joya náutica de estilo Yawl (1973) en madera teca que combina elegancia atemporal y navegación suave.",
      en: "A 1973 classic yawl marine masterpiece combining teak wood elegance and smooth navigation.",
    },
    boatLongDescription: {
      es: "Construido en 1973, este velero tipo Yawl destaca por su casco robusto y líneas refinadas, convirtiéndolo en una pieza única en el Caribe. Su interior detallado en madera de teca ofrece un ambiente sumamente acogedor e íntimo, ideal para 2 personas.",
      en: "Built in 1973, this yawl-style sailboat stands out for its robust hull and refined lines, making it a unique jewel on the Caribbean Sea. Renowned for smooth and stable navigation, perfect for a romantic couple escape.",
    },
    specs: {
      cabins: 1,
      bathrooms: 1,
      doubleBeds: 1,
    },
    captain: {
      name: "Splendid Host",
      role: { es: "Capitán y Anfitrión", en: "Captain & Host" },
      photoUrl:"/contenido/veleros/Splendid/capitan/1.png",
      description: {
        es: "Capitán experto dedicado a preservar el estilo clásico y la navegación auténtica a vela.",
        en: "Expert captain passionate about classic sailing tradition and hospitality.",
      },
    },
    dining: {
      description: {
        es: "Incluye 3 comidas preparadas a bordo diariamente con ingredientes frescos locales.",
        en: "Includes 3 daily meals prepared onboard featuring fresh local ingredients.",
      },
      photoUrl:"/contenido/veleros/Splendid/comidas/1.png",
    },
    activities: {
      description: {
        es: "Navegación diaria a vela, equipo de snorkel, visita a piscinas naturales e islas vírgenes.",
        en: "Daily sailing, snorkeling, visits to natural swimming pools and untouched islands.",
      },
      photoUrls: [
        "/contenido/veleros/Splendid/experiencia/1.png"
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 240,
      tiers: [
        {
          seasonOrType: { es: "Charter Privado (Barco Exclusivo)", en: "Private Charter (Exclusive Boat)" },
          pricePerNight: 240,
          notes: { es: "Precio por persona por noche", en: "Price per person per night" },
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Tipo de Alojamiento</th>
                <th class="p-3 border">Precio (USD / Persona / Noche)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Charter Privado (Barco Exclusivo)</td>
                <td class="p-3 border font-bold text-green-600">$240 USD</td>
              </tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Accommodation Type</th>
                <th class="p-3 border">Price (USD / Person / Night)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Private Charter (Exclusive Boat)</td>
                <td class="p-3 border font-bold text-green-600">$240 USD</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    },
    includes: [
      { es: "3 comidas diarias", en: "3 meals per day" },
      { es: "Uso de equipo de snorkel", en: "Use of Snorkel equipment" },
      { es: "Navegación a vela por las islas y piscinas naturales", en: "Sailboat navigation and visits to natural pools and islands" },
      { es: "Hospitalidad y atención personalizada", en: "Exceptional hospitality and guidance" },
    ],
    excludes: [
      { es: "Transporte hacia/desde San Blas", en: "Transport to/from San Blas" },
      { es: "Impuestos de entrada a Guna Yala y tasas insulares", en: "Guna Yala entrance fees and island taxes" },
      { es: "Seguro personal de viaje", en: "Personal travel insurance" },
    ],
    relatedExperienceIds: [2, 7],
    maxGuests: 2,
    isPrivate: true,
    isSharedAllowed: false,
    featureBadge: { es: "Clásico de Colección (1973)", en: "Classic 1973 Yawl" },
    isFeatured: false,
    hasDiscount: false,
  },

  // ---------------------------------------------------------------------------
  // 6. Youth
  // ---------------------------------------------------------------------------
  {
    id: 6,
    slug: "youth-jeanneau-sun-odyssey-45",
    category: "Sailboat",
    isAvailable: true, 
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Velero Youth (Jeanneau 45) en San Blas | Sailing the World",
        en: "Charter Youth (Jeanneau 45) Sailboat in San Blas | Sailing the World",
      },
      description: {
        es: "Alquila el velero moderno Youth (Jeanneau 45) en San Blas. Capacidad para 6 personas, 3 camarotes, 2 baños, paddleboard, snorkel y bebidas incluidas.",
        en: "Rent the modern Youth sailboat (Jeanneau 45) in San Blas. Capacity for 6 guests, 3 cabins, 2 bathrooms, paddleboard, snorkel, and drinks included.",
      },
      keywords: [
        { es: "velero Youth san blas", en: "Youth sailboat san blas" },
        { es: "jeanneau 45 charter panama", en: "jeanneau 45 san blas" },
      ],
      openGraph: {
        title: {
          es: "Velero Youth en San Blas - Experiencia Dinámica y Moderna",
          en: "Youth Sailboat in San Blas - Dynamic & Modern Charter",
        },
        description: {
          es: "Navegación moderna y dinámica por el archipiélago Guna Yala para hasta 6 personas.",
          en: "Modern and dynamic sailing across Guna Yala archipelago for up to 6 guests.",
        },
        images: [
          "/contenido/veleros/Youth/catalogo/1.png",
          "/contenido/veleros/Youth/catalogo/2.png",
          "/contenido/veleros/Youth/catalogo/3.png",
          "/contenido/veleros/Youth/catalogo/4.png", 
          "/contenido/veleros/Youth/catalogo/5.png",
          "/contenido/veleros/Youth/catalogo/6.png",
          
        ],
      },
    },
    boatName: "Youth (Jeanneau Sun Odyssey 45)",
    boatCoverPhoto: "/contenido/veleros/Youth/catalogo/1.png",
    boatGalleryPhotos: [
          "/contenido/veleros/Youth/catalogo/1.png",
          "/contenido/veleros/Youth/catalogo/2.png",
          "/contenido/veleros/Youth/catalogo/3.png",
          "/contenido/veleros/Youth/catalogo/4.png", 
          "/contenido/veleros/Youth/catalogo/5.png",
          "/contenido/veleros/Youth/catalogo/6.png",
          "/contenido/veleros/Youth/catalogo/7.png",
    ],
    boatDescription: {
      es: "Velero moderno de 45 pies con amplio solárium de cubierta, ideal para grupos sociales o familias.",
      en: "Modern 45ft sailboat with vibrant social deck spaces, ideal for groups or families.",
    },
    boatLongDescription: {
      es: "Youth es una embarcación moderna de alta energía pensada para quienes buscan diversión, velocidad y recuerdos inolvidables. Con líneas limpias y espacios sociales en cubierta, ofrece una forma dinámica y sumamente cómoda de recorrer las islas de San Blas.",
      en: "Youth is a modern, high-energy vessel designed for travelers who want fun, speed, and vibrant memories. Features social deck spaces and contemporary interiors ideal for small groups or families.",
    },
    specs: {
      lengthFeet: 45,
      cabins: 3,
      bathrooms: 2,
      doubleBeds: 3,
    },
    captain: {
      name: "Youth Crew",
      role: { es: "Capitán y Tripulación", en: "Captain and Crew" },
      photoUrl: "/contenido/veleros/Youth/capitan/1.png",
      description: {
        es: "Tripulación joven y enérgica comprometida con una experiencia segura, divertida y confortable.",
        en: "Dynamic crew focused on providing a fun, high-energy, and comfortable sailing tour.",
      },
    },
    dining: {
      description: {
        es: "Tres comidas diarias junto con bebidas alcohólicas y no alcohólicas incluidas (bebidas con alcohol servidas bajo consumo moderado).",
        en: "Three daily meals with alcoholic and non-alcoholic beverages included (alcoholic drinks provided for moderate consumption).",
      },
      photoUrl: "/contenido/veleros/Youth/comidas/1.png",
    },
    activities: {
      description: {
        es: "Island hopping dinámico, snorkel en los mejores arrecifes, Stand Up Paddleboard y amplio solárium para relajarse.",
        en: "High-energy island hopping, snorkeling in top reef spots, Stand-Up Paddleboard, and sunbathing deck.",
      },
      photoUrls: [
        "/contenido/veleros/Youth/experiencia/1.png",
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 250,
      tiers: [
        {
          seasonOrType: { es: "Charter Compartido (Por Persona)", en: "Shared Boat Charter (Per Person)" },
          pricePerNight: 250,
        },
        {
          seasonOrType: { es: "Charter Privado (2 Huéspedes)", en: "Private Charter (2 Guests)" },
          guestsCount: 2,
          pricePerNight: 850,
        },
        {
          seasonOrType: { es: "Charter Privado (3 o más Huéspedes)", en: "Private Charter (3+ Guests)" },
          pricePerNight: 1200,
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Modalidad</th>
                <th class="p-3 border">Precio (USD / Noche)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Charter Compartido (Por Persona)</td>
                <td class="p-3 border font-bold text-green-600">$250 USD / persona</td>
              </tr>
              <tr>
                <td class="p-3 border">Charter Privado (2 Huéspedes)</td>
                <td class="p-3 border font-bold text-green-600">$850 USD</td>
              </tr>
              <tr>
                <td class="p-3 border">Charter Privado (3 o más Huéspedes)</td>
                <td class="p-3 border font-bold text-green-600">$1,200 USD</td>
              </tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Accommodation Type</th>
                <th class="p-3 border">Price (USD / Night)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Shared Boat Charter (Per Person)</td>
                <td class="p-3 border font-bold text-green-600">$250 USD / person</td>
              </tr>
              <tr>
                <td class="p-3 border">Private Charter (2 Guests)</td>
                <td class="p-3 border font-bold text-green-600">$850 USD</td>
              </tr>
              <tr>
                <td class="p-3 border">Private Charter (3+ Guests)</td>
                <td class="p-3 border font-bold text-green-600">$1,200 USD</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    },
    includes: [
      { es: "Tres comidas diarias y bebidas (alcohólicas con moderación)", en: "Three daily meals, alcoholic and non-alcoholic beverages (moderate consumption)" },
      { es: "Uso de equipo de snorkel y paddleboard (SUP)", en: "Use of Snorkel Gear and Paddleboard" },
      { es: "Espacioso solárium y amplias zonas sociales", en: "Spacious sun deck and social areas" },
    ],
    excludes: [
      { es: "Transporte hacia/desde San Blas", en: "Transport to/from San Blas" },
      { es: "Entrada obligatoria al territorio Guna Yala", en: "Mandatory entrance fee to Guna Yala territory" },
      { es: "Seguro personal de viaje", en: "Personal travel insurance" },
    ],
    relatedExperienceIds: [1, 3, 4],
    maxGuests: 6,
    isPrivate: true,
    isSharedAllowed: true,
    featureBadge: { es: "Espacioso Solárium", en: "Spacious Sun Deck" },
    isFeatured: false,
    hasDiscount: false,
  },

  // ---------------------------------------------------------------------------
  // 7. Mola Mola
  // ---------------------------------------------------------------------------
  {
    id: 7,
    slug: "mola-mola-beneteau-411",
    category: "Sailboat",
    isAvailable: true, 
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Velero Mola Mola (Beneteau 411) en San Blas | Sailing the World",
        en: "Charter Mola Mola (Beneteau 411) Sailboat in San Blas | Sailing the World",
      },
      description: {
        es: "Siente el espíritu de Guna Yala a bordo del velero Mola Mola (Beneteau 411). Red de hamacas, guía local Guna, snorkel y comidas incluidas.",
        en: "Experience the Guna Yala spirit aboard Mola Mola (Beneteau 411). Hammock net, local Guna guide, snorkeling, and meals included.",
      },
      keywords: [
        { es: "velero Mola Mola san blas", en: "Mola Mola sailboat san blas" },
        { es: "beneteau 411 san blas panama", en: "beneteau 411 charter guna yala" },
      ],
      openGraph: {
        title: {
          es: "Velero Mola Mola en San Blas - Espíritu y Cultura Local",
          en: "Mola Mola Sailboat in San Blas - Cultural & Relaxing Experience",
        },
        description: {
          es: "Inspirado en el arte textil tradicional Guna. Conexión auténtica y red de hamacas para relajarse.",
          en: "Inspired by traditional Guna textiles. Authentic cultural connection and hammock lounging area.",
        },
        images: [
          "/contenido/veleros/Mola mola/catalogo/1.png",
          "/contenido/veleros/Mola mola/catalogo/2.png",
          "/contenido/veleros/Mola mola/catalogo/3.png",
          "/contenido/veleros/Mola mola/catalogo/4.png", 
          "/contenido/veleros/Mola mola/catalogo/5.png",
          "/contenido/veleros/Mola mola/catalogo/6.png",
          "/contenido/veleros/Mola mola/catalogo/7.png",
          "/contenido/veleros/Mola mola/catalogo/8.png",
        ],
      },
    },
    boatName: "Mola Mola (Beneteau 411)",
    boatCoverPhoto: "/contenido/veleros/Mola mola/catalogo/1.png",
    boatGalleryPhotos: [
      "/contenido/veleros/Mola mola/catalogo/1.png",
          "/contenido/veleros/Mola mola/catalogo/2.png",
          "/contenido/veleros/Mola mola/catalogo/3.png",
          "/contenido/veleros/Mola mola/catalogo/4.png", 
          "/contenido/veleros/Mola mola/catalogo/5.png",
          "/contenido/veleros/Mola mola/catalogo/6.png",
          "/contenido/veleros/Mola mola/catalogo/7.png",
          "/contenido/veleros/Mola mola/catalogo/8.png",
    ],
    boatDescription: {
      es: "Velero relajado y conectado con la cultura autóctona Guna, equipado con zona de red hamaca para descanso.",
      en: "Relaxed sailboat with local cultural connection, featuring a hammock netting lounging area.",
    },
    boatLongDescription: {
      es: "Bautizado en honor al colorido textil tradicional de la comarca Guna Yala, Mola Mola ofrece un viaje sereno y conectado con el entorno. Diseñado para quienes buscan descanso absoluto, intercambio cultural respetuoso y la belleza natural del archipiélago.",
      en: "Named after the colorful traditional textile of the Guna people, Mola Mola offers a relaxed and culturally connected journey. Ideal for guests who want tranquility, natural beauty, and authentic cultural connection.",
    },
    specs: {
      lengthFeet: 41,
      cabins: 2,
      bathrooms: 1,
      doubleBeds: 2,
    },
    captain: {
      name: "Mola Mola Captain & Local Guide",
      role: { es: "Capitán y Guía Local Guna", en: "Captain and Local Guna Guide" },
      photoUrl: "/contenido/veleros/Mola mola/capitan/1.png",
      description: {
        es: "Anfitriones locales con profundo conocimiento del mar y las tradiciones del pueblo Guna.",
        en: "Local hosts with deep knowledge of the sea and local Guna traditions.",
      },
    },
    dining: {
      description: {
        es: "Pensión completa: 3 comidas al día más bebidas alcohólicas (consumo moderado) y no alcohólicas.",
        en: "Three daily meals, alcoholic and non-alcoholic beverages included (moderate consumption).",
      },
      photoUrl: "/contenido/veleros/Mola mola/comidas/1.png",
    },
    activities: {
      description: {
        es: "Uso de equipo de snorkel, servicios de guía local para intercambio cultural y descanso en la zona de hamaca en proa.",
        en: "Snorkel gear, local guide services for cultural exchange, and lounging in the hammock netting.",
      },
      photoUrls: [
        "/contenido/veleros/Mola mola/experiencia/1.png"
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 335,
      tiers: [
        {
          seasonOrType: { es: "Charter Privado (2 Huéspedes)", en: "Private Charter (Two Guests)" },
          guestsCount: 2,
          pricePerNight: 670,
          notes: { es: "Huésped adicional: $220 USD", en: "Extra guest: $220 USD" },
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Tipo de Ocupación</th>
                <th class="p-3 border">Precio (USD / Noche)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Charter Privado (Dos Huéspedes)</td>
                <td class="p-3 border font-bold text-green-600">$670 USD</td>
              </tr>
              <tr>
                <td class="p-3 border">Huésped Adicional</td>
                <td class="p-3 border font-bold text-green-600">+$220 USD / Noche</td>
              </tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Accommodation Type</th>
                <th class="p-3 border">Price (USD / Night)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Private Charter (Two Guests)</td>
                <td class="p-3 border font-bold text-green-600">$670 USD</td>
              </tr>
              <tr>
                <td class="p-3 border">Extra Guest</td>
                <td class="p-3 border font-bold text-green-600">+$220 USD / Night</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    },
    includes: [
      { es: "Tres comidas diarias, bebidas alcohólicas y no alcohólicas (moderado)", en: "Three daily meals, alcoholic and non-alcoholic beverages (moderate consumption)" },
      { es: "Uso de equipo de snorkel y servicios de guía local Guna", en: "Use of Snorkel Gear and Local Guide Services" },
      { es: "Área de relax con red hamaca", en: "Hammock Netting / Lounging Area" },
    ],
    excludes: [
      { es: "Transporte hacia/desde el barco", en: "Transport to/from the boat" },
      { es: "Tasa obligatoria de entrada a Guna Yala", en: "Mandatory entrance fee to Guna Yala territory" },
      { es: "Seguro personal de viaje", en: "Personal travel insurance" },
    ],
    relatedExperienceIds: [2, 4, 5],
    maxGuests: 4,
    isPrivate: true,
    isSharedAllowed: false,
    featureBadge: { es: "Red Hamaca & Guía Guna", en: "Hammock Net & Local Guide" },
    isFeatured: false,
    hasDiscount: false,
  },
  // ---------------------------------------------------------------------------
  // 8. Zenith - Deluxe Catamaran
  // ---------------------------------------------------------------------------
  {
    id: 8,
    slug: "zenith-deluxe-catamaran",
    category: "Catamaran",
    isAvailable: true, 
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Catamarán de Lujo Zenith en San Blas | Sailing the World",
        en: "Charter Zenith Deluxe Catamaran in San Blas | Sailing the World",
      },
      description: {
        es: "Disfruta del catamarán ultra lujo Zenith en San Blas. All-Inclusive exclusivo para hasta 8 personas, 4 camarotes, tripulación privada (Capitán, Chef, Azafata) y permisos insulares incluidos.",
        en: "Experience ultimate luxury aboard Zenith Catamaran in San Blas. Exclusive all-inclusive charter for up to 8 guests, 4 cabins, private crew & island permits included.",
      },
      keywords: [
        { es: "catamaran de lujo san blas", en: "deluxe catamaran charter san blas" },
        { es: "charter lujo zenith panama", en: "zenith luxury yacht san blas" },
      ],
      openGraph: {
        title: {
          es: "Catamarán Zenith en San Blas - Lujo y Confort All-Inclusive",
          en: "Zenith Catamaran in San Blas - Ultimate All-Inclusive Luxury",
        },
        description: {
          es: "Navegación exclusiva por el archipiélago Guna Yala a bordo del Zenith con tripulación de 3 personas y servicio 5 estrellas.",
          en: "Exclusive sailing across Guna Yala archipelago aboard Zenith with 3-person crew and 5-star service.",
        },
        images: [
          "/contenido/catamaranes/Zenith/catalogo/1.png",
          "/contenido/catamaranes/Zenith/catalogo/2.png",
          "/contenido/catamaranes/Zenith/catalogo/3.png",
          "/contenido/catamaranes/Zenith/catalogo/4.png", 
          "/contenido/catamaranes/Zenith/catalogo/5.png",
          "/contenido/catamaranes/Zenith/catalogo/6.png",
          "/contenido/catamaranes/Zenith/catalogo/7.png",

        ],
      },
    },
    boatName: "Zenith Deluxe Catamaran",
    boatCoverPhoto: "/contenido/catamaranes/Zenith/catalogo/1.png",
    boatGalleryPhotos: [
      "/contenido/catamaranes/Zenith/catalogo/1.png",
          "/contenido/catamaranes/Zenith/catalogo/2.png",
          "/contenido/catamaranes/Zenith/catalogo/3.png",
          "/contenido/catamaranes/Zenith/catalogo/4.png", 
          "/contenido/catamaranes/Zenith/catalogo/5.png",
          "/contenido/catamaranes/Zenith/catalogo/6.png",
          "/contenido/catamaranes/Zenith/catalogo/7.png",
    ],
    boatDescription: {
      es: "Catamarán deluxe all-inclusive diseñado para grandes grupos y familias con servicio vip de 3 tripulantes.",
      en: "Deluxe all-inclusive catamaran designed for large groups and families with 3-person crew.",
    },
    boatLongDescription: {
      es: "Zenith ofrece una experiencia náutica de ultra lujo en el archipiélago de San Blas. Tripulado por un equipo profesional de 3 a 4 personas (Capitán, Chef y Azafata), garantiza máxima estabilidad, privacidad y confort. Incluye todas las tasas insulares, permisos de fondeo y licencias comerciales de Guna Yala en el precio final.",
      en: "Zenith delivers an ultimate luxury cruising experience in San Blas. Crewed by 3 to 4 professionals (Captain, Chef, Stewardess), it guarantees stability, privacy, and high-end comfort. All island fees and Guna Yala commercial charter permits are fully included in the price.",
    },
    specs: {
      cabins: 4,
      bathrooms: 4,
      doubleBeds: 4,
    },
    captain: {
      name: "Zenith VIP Crew (Captain, Chef, Stewardess)",
      role: { es: "Tripulación Profesional VIP", en: "Professional VIP Crew" },
      photoUrl: "/contenido/catamaranes/Zenith/capitan/1.png",
      description: {
        es: "Tripulación completa dedicada a brindar servicio gastronómico, hospitalidad de primera clase y gestión náutica sin preocupaciones.",
        en: "Full crew dedicated to providing fine dining, first-class hospitality, and seamless sailing.",
      },
      languages: ["English", "Español"],
    },
    dining: {
      description: {
        es: "Pensión completa deluxe (4 comidas diarias): desayuno, almuerzo, merienda y cena gourmet elaborada por chef a bordo. Opciones Kosher, No Alcohol o No Food con ajuste de precio.",
        en: "Deluxe full board (4 meals per day): breakfast, lunch, afternoon snack, and chef-prepared gourmet dinner. Kosher, No Alcohol, or No Food options available with price adjustments.",
      },
      photoUrl: "/contenido/catamaranes/Zenith/comidas/1.png",
    },
    activities: {
      description: {
        es: "Exploración de islas privadas, snorkel de alta gama, paddleboarding y asistencia integral en traslados dentro de Guna Yala.",
        en: "Private island hopping, premium snorkeling, paddleboarding, and full transfer assistance in Guna Yala.",
      },
      photoUrls: [
        "/contenido/catamaranes/Zenith/experiencias/1.png",
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 1292,
      tiers: [
        {
          seasonOrType: { es: "Charter Privado (2 Huéspedes)", en: "Private Charter (2 Guests)" },
          guestsCount: 2,
          pricePerNight: 2585,
          notes: { es: "Huésped adicional: $345 USD/noche. Niños 4-12 años: 50% desc. Niños 0-3 años: Gratis.", en: "Extra guest: $345 USD/night. Children 4-12 yrs: 50% off. Under 3 yrs: Free." },
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Modalidad / Ocupación</th>
                <th class="p-3 border">Precio (USD / Noche)</th>
                <th class="p-3 border">Huésped Adicional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Charter Privado Exclusivo (2 Huéspedes)</td>
                <td class="p-3 border font-bold text-green-600">$2,585 USD</td>
                <td class="p-3 border">+$345 USD / Noche</td>
              </tr>
            </tbody>
          </table>
          <p class="text-xs text-slate-500 mt-2">* Descuento especial niños: 4-12 años pagan 50%. Niños de 3 años o menos viajan gratis. Permisos de islas comerciales incluidos.</p>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Type / Occupancy</th>
                <th class="p-3 border">Price (USD / Night)</th>
                <th class="p-3 border">Extra Guest</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Exclusive Private Charter (2 Guests)</td>
                <td class="p-3 border font-bold text-green-600">$2,585 USD</td>
                <td class="p-3 border">+$345 USD / Night</td>
              </tr>
            </tbody>
          </table>
          <p class="text-xs text-slate-500 mt-2">* Child discounts: Ages 4-12 charged 50%. Age 3 and under sail free. Commercial island permits included.</p>
        `,
      },
    },
    includes: [
      { es: "Tripulación VIP completa (Capitán, Chef, Azafata)", en: "Full VIP crew (Captain, Chef, Stewardess)" },
      { es: "4 comidas diarias gourmet y servicio de bar", en: "4 daily gourmet meals and beverage service" },
      { es: "Todas las tasas de islas, fondeadero y permisos comerciales de Guna Yala", en: "All island fees, anchorage fees, and Guna Yala commercial permits" },
      { es: "Uso completo de equipos de agua y confort a bordo", en: "Full use of water sports equipment and onboard amenities" },
    ],
    excludes: [
      { es: "Transporte terrestre/marítimo hacia/desde San Blas", en: "Ground/water transport to/from San Blas" },
      { es: "Compras de artesanías nativas o consumos fuera del barco", en: "Native craft purchases or food/drinks purchased off the boat" },
      { es: "Seguro personal de viaje", en: "Personal travel insurance" },
    ],
    relatedExperienceIds: [9, 14, 16],
    maxGuests: 8,
    isPrivate: true,
    isSharedAllowed: false,
    featureBadge: { es: "Catamarán Deluxe All-Inclusive", en: "Deluxe All-Inclusive Catamaran" },
    isFeatured: true,
    hasDiscount: true,
  },

  // ---------------------------------------------------------------------------
  // 9. MBR - Lagoon 42 ft
  // ---------------------------------------------------------------------------
  {
    id: 9,
    slug: "mbr-lagoon-42ft",
    category: "Catamaran",
    isAvailable: true, 
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Catamarán MBR (Lagoon 42) en San Blas | Sailing the World",
        en: "Charter MBR (Lagoon 42) Catamaran in San Blas | Sailing the World",
      },
      description: {
        es: "Alquila el refinado Lagoon 42 MBR en San Blas. Con Starlink, proyector de cine, alfombra flotante de 10x10 pies, A/C y suite Owner's Version para hasta 6 personas.",
        en: "Rent the refined Lagoon 42 MBR in San Blas. Features Starlink, movie projector, 10x10ft floating water mat, A/C, and Owner's Suite for up to 6 guests.",
      },
      keywords: [
        { es: "catamaran MBR lagoon 42", en: "MBR lagoon 42 san blas" },
        { es: "alquiler lagoon 42 panama starlink", en: "lagoon 42 charter starlink panama" },
      ],
      openGraph: {
        title: {
          es: "Catamarán MBR (Lagoon 42) - Suite de Lujo y Cine a Bordo",
          en: "MBR Catamaran (Lagoon 42) - Owner's Suite & Movie Projector",
        },
        description: {
          es: "Navega en el Lagoon 42 Owner's Version renovado con Starlink, máquina de espresso, A/C y juegos acuáticos.",
          en: "Sail on the refurbished Owner's Version Lagoon 42 with Starlink, espresso machine, A/C, and water toys.",
        },
        images: [
          "/contenido/catamaranes/mbr/catalogo/1.png",
          "/contenido/catamaranes/mbr/catalogo/2.png",
          "/contenido/catamaranes/mbr/catalogo/3.png",
          "/contenido/catamaranes/mbr/catalogo/4.png", 
          "/contenido/catamaranes/mbr/catalogo/5.png",
          "/contenido/catamaranes/mbr/catalogo/6.png",
          "/contenido/catamaranes/mbr/catalogo/7.png",

        ],
      },
    },
    boatName: "MBR (Lagoon 42 FT)",
    boatCoverPhoto: "/contenido/catamaranes/mbr/catalogo/1.png",
    boatGalleryPhotos: [
      "/contenido/catamaranes/mbr/catalogo/1.png",
          "/contenido/catamaranes/mbr/catalogo/2.png",
          "/contenido/catamaranes/mbr/catalogo/3.png",
          "/contenido/catamaranes/mbr/catalogo/4.png", 
          "/contenido/catamaranes/mbr/catalogo/5.png",
          "/contenido/catamaranes/mbr/catalogo/6.png",
          "/contenido/catamaranes/mbr/catalogo/7.png",
    ],
    boatDescription: {
      es: "Lagoon 42 Owner's Version remodelado con Suite VIP, Starlink High-Speed, proyector de cine y alfombra flotante gigante.",
      en: "Refurbished Owner's Version Lagoon 42 featuring VIP Suite, Starlink Internet, movie projector, and giant water mat.",
    },
    boatLongDescription: {
      es: "El catamarán MBR (Lagoon 42) representa la combinación perfecta entre lujo y tecnología moderna. Al ser versión de armador (Owner's Version), ofrece un amplio camarote VIP Suite con cama King y salón privado, además de 2 camarotes dobles Queen. Equipado con Starlink, A/C (6h/día), máquina de espresso, alfombra flotante de 10x10ft y proyector de cine para noches bajo las estrellas.",
      en: "MBR (Lagoon 42) represents the ultimate blend of luxury and modern technology. As an Owner's Version, it boasts a huge VIP Suite with a King bed and private lounge, plus 2 Queen cabins. Features Starlink, A/C (6h/day), espresso machine, giant 10x10ft floating water mat, and movie projector.",
    },
    specs: {
      lengthFeet: 42,
      cabins: 3,
      bathrooms: 2,
      doubleBeds: 3,
    },
    captain: {
      name: "Capt. & First Mate (MBR Crew)",
      role: { es: "Capitán y Primer Oficial", en: "Captain & First Mate" },
      photoUrl: "/contenido/catamaranes/mbr/capitan/1.png",
      description: {
        es: "Tripulación profesional dedicada a llevarte a los mejores arrecifes de Guna Yala con servicio de primera.",
        en: "Professional crew dedicated to guiding you to Guna Yala's top reefs with premium service.",
      },
      languages: ["English", "Español"],
    },
    dining: {
      description: {
        es: "3 comidas diarias de alta calidad con mariscos frescos, pescados locales, arroces, pastas y frutas tropicales. Barra libre incluida (consumo moderado de alcohol). Cocina equipada con espresso e hielera.",
        en: "3 high-quality daily meals with fresh seafood, local fish, pasta, and tropical fruits. Open bar included (moderate alcohol). Galley with espresso machine & ice maker.",
      },
      photoUrl: "/contenido/catamaranes/mbr/comidas/1.png",
    },
    activities: {
      description: {
        es: "Starlink Satelital, proyector de cine a bordo, Stand-Up Paddleboards (SUP), alfombra de agua flotante de 10x10ft, equipo de snorkel profesional y pesca deportiva.",
        en: "Starlink Satellite Internet, onboard movie projector, SUPs, giant 10x10ft floating water mat, pro snorkeling gear, and fishing gear.",
      },
      photoUrls: [
        "/contenido/catamaranes/mbr/experiencias/1.png",
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 725,
      tiers: [
        {
          seasonOrType: { es: "Charter Privado (2 Huéspedes)", en: "Private Charter (2 Guests)" },
          guestsCount: 2,
          pricePerNight: 1450,
        },
        {
          seasonOrType: { es: "Charter Privado (4 Huéspedes)", en: "Private Charter (4 Guests)" },
          guestsCount: 4,
          pricePerNight: 1950,
        },
        {
          seasonOrType: { es: "Charter Privado (6 Huéspedes)", en: "Private Charter (6 Guests)" },
          guestsCount: 6,
          pricePerNight: 2450,
          notes: { es: "Huésped adicional: +$250 USD", en: "Extra guest: +$250 USD" },
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Número de Huéspedes</th>
                <th class="p-3 border">Modalidad</th>
                <th class="p-3 border">Precio (USD / Noche)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-3 border">2 Huéspedes</td><td class="p-3 border">Charter Privado</td><td class="p-3 border font-bold text-green-600">$1,450 USD</td></tr>
              <tr><td class="p-3 border">3 Huéspedes</td><td class="p-3 border">Charter Privado</td><td class="p-3 border font-bold text-green-600">$1,700 USD</td></tr>
              <tr><td class="p-3 border">4 Huéspedes</td><td class="p-3 border">Charter Privado</td><td class="p-3 border font-bold text-green-600">$1,950 USD</td></tr>
              <tr><td class="p-3 border">5 Huéspedes</td><td class="p-3 border">Charter Privado</td><td class="p-3 border font-bold text-green-600">$2,200 USD</td></tr>
              <tr><td class="p-3 border">6 Huéspedes</td><td class="p-3 border">Charter Privado</td><td class="p-3 border font-bold text-green-600">$2,450 USD</td></tr>
              <tr><td class="p-3 border">Persona Adicional</td><td class="p-3 border">Extra Guest</td><td class="p-3 border font-bold text-green-600">+$250 USD</td></tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Guests Count</th>
                <th class="p-3 border">Mode</th>
                <th class="p-3 border">Price (USD / Night)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-3 border">2 Guests</td><td class="p-3 border">Private Charter</td><td class="p-3 border font-bold text-green-600">$1,450 USD</td></tr>
              <tr><td class="p-3 border">3 Guests</td><td class="p-3 border">Private Charter</td><td class="p-3 border font-bold text-green-600">$1,700 USD</td></tr>
              <tr><td class="p-3 border">4 Guests</td><td class="p-3 border">Private Charter</td><td class="p-3 border font-bold text-green-600">$1,950 USD</td></tr>
              <tr><td class="p-3 border">5 Guests</td><td class="p-3 border">Private Charter</td><td class="p-3 border font-bold text-green-600">$2,200 USD</td></tr>
              <tr><td class="p-3 border">6 Guests</td><td class="p-3 border">Private Charter</td><td class="p-3 border font-bold text-green-600">$2,450 USD</td></tr>
              <tr><td class="p-3 border">Extra Guest</td><td class="p-3 border">Extra Guest</td><td class="p-3 border font-bold text-green-600">+$250 USD</td></tr>
            </tbody>
          </table>
        `,
      },
    },
    includes: [
      { es: "Servicio completo de tripulación, combustible y agua dulce", en: "Full crew service, fuel, and fresh water" },
      { es: "Pensión completa (3 comidas) y barra libre", en: "All meals and open bar" },
      { es: "Internet Starlink, proyector de cine, A/C (6h/día) y juguetes acuáticos", en: "Starlink internet, movie projector, A/C (6h/day), and water sports gear" },
      { es: "Ropa de cama y toallas de baño", en: "Bed linens and bath towels" },
    ],
    excludes: [
      { es: "Transporte hacia/desde San Blas", en: "Transport to/from San Blas" },
      { es: "Impuestos de entrada a Guna Yala (pago en efectivo)", en: "Guna Yala entrance fees (cash payment)" },
      { es: "Seguro médico/viaje", en: "Personal travel insurance" },
    ],
    relatedExperienceIds: [8, 11, 16],
    maxGuests: 6,
    isPrivate: true,
    isSharedAllowed: false,
    featureBadge: { es: "Starlink & Cine a bordo", en: "Starlink & Movie Projector" },
    isFeatured: true,
    hasDiscount: false,
  },

  // ---------------------------------------------------------------------------
  // 10. YOYO
  // ---------------------------------------------------------------------------
  {
    id: 10,
    slug: "yoyo-catamaran-guna-yala",
    category: "Catamaran",
    isAvailable: true, 
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Catamarán YOYO en San Blas | Sailing the World",
        en: "Charter YOYO Catamaran in San Blas | Sailing the World",
      },
      description: {
        es: "Escapada íntima en San Blas a bordo del catamarán YOYO. Ideal para parejas (capacidad 4 personas), 2 camarotes, all-inclusive con barra libre y kayak/paddleboard.",
        en: "Intimate San Blas escape aboard YOYO Catamaran. Perfect for couples (capacity 4 guests), 2 cabins, all-inclusive with open bar and kayak/SUP.",
      },
      keywords: [
        { es: "catamaran YOYO san blas", en: "YOYO catamaran san blas" },
        { es: "alquiler parejas san blas", en: "couple catamaran charter panama" },
      ],
      openGraph: {
        title: {
          es: "Catamarán YOYO en San Blas - Privacidad y Relax para Parejas",
          en: "YOYO Catamaran in San Blas - Private Romantic Sanctuary",
        },
        description: {
          es: "Tu santuario privado en San Blas. Salón acogedor, atención personalizada y navegación entre islas vírgenes.",
          en: "Your private sanctuary in San Blas. Cozy saloon, personalized service, and pristine island hopping.",
        },
        images: [
          "/contenido/catamaranes/YOYO/catalogo/1.png",
      "/contenido/catamaranes/YOYO/catalogo/2.png",
      "/contenido/catamaranes/YOYO/catalogo/3.png",
      "/contenido/catamaranes/YOYO/catalogo/4.png", 
      "/contenido/catamaranes/YOYO/catalogo/5.png",
        ],
      },
    },
    boatName: "Catamarán YOYO",
    boatCoverPhoto: "/contenido/catamaranes/YOYO/catalogo/1.png",
    boatGalleryPhotos: [
      "/contenido/catamaranes/YOYO/catalogo/1.png",
      "/contenido/catamaranes/YOYO/catalogo/2.png",
      "/contenido/catamaranes/YOYO/catalogo/3.png",
      "/contenido/catamaranes/YOYO/catalogo/4.png", 
      "/contenido/catamaranes/YOYO/catalogo/5.png",

    ],
    boatDescription: {
      es: "Santuario privado e íntimo en Guna Yala ideal para parejas o grupos reducidos de hasta 4 personas.",
      en: "Intimate private sanctuary in Guna Yala ideal for couples or small groups of up to 4 guests.",
    },
    boatLongDescription: {
      es: "Catamarán YOYO está diseñado para brindar un ambiente libre de preocupaciones en el corazón del archipiélago Guna Yala. Con 2 camarotes confortables y bien ventilados, ofrece la combinación exacta de navegación aventurera y máxima relajación para parejas o grupos pequeños.",
      en: "Catamaran YOYO is optimized for comfort and privacy in Guna Yala. Featuring 2 well-ventilated cabins, it provides the perfect balance between sailing adventure and peaceful Caribbean relaxation for couples or small groups.",
    },
    specs: {
      cabins: 2,
      bathrooms: 1,
      doubleBeds: 2,
    },
    captain: {
      name: "YOYO Host & Captain",
      role: { es: "Capitán y Anfitrión", en: "Captain & Host" },
      photoUrl: "/contenido/catamaranes/YOYO/capitan/1.png",
      description: {
        es: "Atención cálida y personalizada para hacerte sentir como en casa en medio del mar.",
        en: "Warm, personalized attention to ensure a seamless home-away-from-home feel.",
      },
      languages: ["Español", "English"],
    },
    dining: {
      description: {
        es: "Gastronomía All-Inclusive: desayunos frescos, snacks tropicales, almuerzos y cenas elaboradas con insumos locales. Barra libre completa de bebidas incluida.",
        en: "All-Inclusive Dining: fresh breakfast, daily tropical snacks, delicious lunch and dinner prepared with local ingredients. Full open bar included.",
      },
      photoUrl: "/contenido/catamaranes/YOYO/comidas/1.png",
    },
    activities: {
      description: {
        es: "Navegación diaria entre islas apartadas, snorkel en arrecifes de coral, kayaks / Stand-Up Paddleboard y visitas a comunidades Guna.",
        en: "Daily sailing between secluded islands, coral reef snorkeling, kayaks/SUPs, and Guna community visits.",
      },
      photoUrls: [
        "/contenido/catamaranes/YOYO/experiencias/1.png"
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 475,
      tiers: [
        {
          seasonOrType: { es: "Camarote / Charter Privado (Pareja)", en: "Private Cabin / Charter (Couple)" },
          guestsCount: 2,
          pricePerNight: 950,
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Ocupación / Modalidad</th>
                <th class="p-3 border">Precio (USD / Noche)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Charter / Camarote Privado (2 Personas / Pareja)</td>
                <td class="p-3 border font-bold text-green-600">$950 USD</td>
              </tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Occupancy & Setup</th>
                <th class="p-3 border">Price (USD / Night)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Private Cabin / Charter (2 Guests / Couple)</td>
                <td class="p-3 border font-bold text-green-600">$950 USD</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    },
    includes: [
      { es: "Servicio de tripulación, combustible y agua dulce", en: "Crew service, fuel, and fresh water" },
      { es: "Comidas gourmet (Desayuno, Almuerzo, Cena), snacks y barra libre", en: "Gourmet meals (Breakfast, Lunch, Dinner), snacks, and open bar" },
      { es: "Uso de equipos náuticos (snorkel, kayak/paddleboard)", en: "Use of onboard nautical gear (snorkel, kayak/SUP)" },
      { es: "Limpieza profesional diaria, ropa de cama y toallas", en: "Daily cleaning service, bed linens, and towels" },
    ],
    excludes: [
      { es: "Traslado en Jeep 4x4 / Lancha hacia San Blas", en: "Jeep / Water taxi transport to San Blas" },
      { es: "Impuestos de entrada a Guna Yala", en: "Guna Yala entrance fees" },
      { es: "Seguro personal de viaje", en: "Personal travel insurance" },
    ],
    relatedExperienceIds: [12, 13, 15],
    maxGuests: 4,
    isPrivate: true,
    isSharedAllowed: false,
    featureBadge: { es: "Ideal Parejas All-Inclusive", en: "Perfect for Couples All-Inclusive" },
    isFeatured: false,
    hasDiscount: false,
  },

  // ---------------------------------------------------------------------------
  // 11. Yoli - Lagoon 440
  // ---------------------------------------------------------------------------
  {
    id: 11,
    slug: "yoli-lagoon-440",
    category: "Catamaran",
    isAvailable: true, 
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Catamarán Yoli (Lagoon 440) en San Blas | Sailing the World",
        en: "Charter Yoli (Lagoon 440) Catamaran in San Blas | Sailing the World",
      },
      description: {
        es: "Navega con el Capitán argentino Gabriel a bordo del Lagoon 440 Yoli en San Blas. Wi-Fi Starlink, 4 camarotes, barra libre completa y ambiente relajado.",
        en: "Sail with Argentine Captain Gabriel aboard Lagoon 440 Yoli in San Blas. Features Starlink Wi-Fi, 4 cabins, full open bar, and relaxed vibes.",
      },
      keywords: [
        { es: "catamaran Yoli lagoon 440", en: "Yoli lagoon 440 san blas" },
        { es: "capitan gabriel san blas", en: "lagoon 440 charter panama" },
      ],
      openGraph: {
        title: {
          es: "Catamarán Yoli (Lagoon 440) - Elegancia y Capitán Argentino",
          en: "Yoli Catamaran (Lagoon 440) - Classic Comfort & Argentine Captain",
        },
        description: {
          es: "Espacioso Lagoon 440 con Starlink, áreas de descanso panorámicas y cocina deliciosa.",
          en: "Spacious Lagoon 440 featuring Starlink, panoramic lounge deck, and delicious cuisine.",
        },
        images: [
          "/contenido/catamaranes/Yoli/catalogo/1.png",
          "/contenido/catamaranes/Yoli/catalogo/2.png",
          "/contenido/catamaranes/Yoli/catalogo/3.png",
          "/contenido/catamaranes/Yoli/catalogo/4.png", 
          "/contenido/catamaranes/Yoli/catalogo/5.png",
          "/contenido/catamaranes/Yoli/catalogo/6.png",
          "/contenido/catamaranes/Yoli/catalogo/7.png",
          "/contenido/catamaranes/Yoli/catalogo/8.png",
          "/contenido/catamaranes/Yoli/catalogo/9.png",

        ],
      },
    },
    boatName: "Yoli (Lagoon 440)",
    boatCoverPhoto: "/contenido/catamaranes/Yoli/catalogo/1.png",
    boatGalleryPhotos: [
      "/contenido/catamaranes/Yoli/catalogo/1.png",
      "/contenido/catamaranes/Yoli/catalogo/2.png",
      "/contenido/catamaranes/Yoli/catalogo/3.png",
      "/contenido/catamaranes/Yoli/catalogo/4.png", 
      "/contenido/catamaranes/Yoli/catalogo/5.png",
      "/contenido/catamaranes/Yoli/catalogo/6.png",
      "/contenido/catamaranes/Yoli/catalogo/7.png",
      "/contenido/catamaranes/Yoli/catalogo/8.png",
      "/contenido/catamaranes/Yoli/catalogo/9.png",

    ],
    boatDescription: {
      es: "Clásico de gran confort y estabilidad con 4 camarotes privados, Starlink Wi-Fi y la calidez del Capitán Gabriel.",
      en: "Classic comfort and stability featuring 4 private cabins, Starlink Wi-Fi, hosted by Argentine Captain Gabriel.",
    },
    boatLongDescription: {
      es: "El Lagoon 440 'Yoli' combina un salón panorámico con amplias áreas al aire libre en proa y flybridge. Su capitán Gabriel (Argentina), con más de 3 años en San Blas, destaca por su amabilidad, maestría en la navegación y pasión por sorprender a los huéspedes con platillos deliciosos.",
      en: "The Lagoon 440 'Yoli' blends a panoramic saloon with outdoor rest areas and flybridge views. Argentine Captain Gabriel, with over 3 years navigating San Blas, is passionate about top-tier hospitality and gourmet cooking onboard.",
    },
    specs: {
      lengthFeet: 44,
      cabins: 4,
      bathrooms: 1,
      doubleBeds: 4,
    },
    captain: {
      name: "Capt. Gabriel (Argentina)",
      role: { es: "Capitán y Chef", en: "Captain & Chef" },
      photoUrl: "/contenido/catamaranes/Yoli/capitan/1.png",
      description: {
        es: "Apasionado del mar y la gastronomía con más de tres años capitaneando en San Blas.",
        en: "Passionate sailor and chef with over 3 years navigating the San Blas archipelago.",
      },
      languages: ["Español", "English"],
    },
    dining: {
      description: {
        es: "3 comidas diarias nutritivas y sabrosas con ingredientes frescos. Barra libre completa con refrescos (Coca Zero/Reg, Ginger Ale), jugos, cervezas nacionales, vino (blanco/tinto), vodka, ron y ginebra (consumo moderado).",
        en: "3 daily healthy and delicious meals. Full open bar including soft drinks, natural juices, national beer, wine (white/red), vodka, rum, and gin (moderate consumption).",
      },
      photoUrl: "/contenido/catamaranes/Yoli/comidas/1.png" ,
    },
    activities: {
      description: {
        es: "Starlink Wi-Fi de alta velocidad, Stand-Up Paddleboard, alfombra flotante, snorkel y excursiones a playas de arena blanca.",
        en: "High-speed Starlink Wi-Fi, SUP paddleboard, floating mat, snorkeling, and beach excursions.",
      },
      photoUrls: [
        "/contenido/catamaranes/Yoli/experiencia/1.png" ,
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 700,
      tiers: [
        {
          seasonOrType: { es: "Charter Privado (2 Huéspedes)", en: "Private Charter (2 Guests)" },
          guestsCount: 2,
          pricePerNight: 1400,
          notes: { es: "Huésped adicional: +$240 USD/noche", en: "Extra guest: +$240 USD/night" },
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Modalidad</th>
                <th class="p-3 border">Precio Base (2 Huéspedes)</th>
                <th class="p-3 border">Huésped Extra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Charter Privado (Barco Exclusivo)</td>
                <td class="p-3 border font-bold text-green-600">$1,400 USD / Noche</td>
                <td class="p-3 border">+$240 USD / Noche</td>
              </tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Accommodation Type</th>
                <th class="p-3 border">Base Rate (2 Guests)</th>
                <th class="p-3 border">Extra Guest</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Private Charter (Exclusive Boat)</td>
                <td class="p-3 border font-bold text-green-600">$1,400 USD / Night</td>
                <td class="p-3 border">+$240 USD / Night</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    },
    includes: [
      { es: "Capitán y tripulación con pensión completa (3 comidas diarias y snacks)", en: "Captain and crew with full board (3 daily meals & snacks)" },
      { es: "Barra libre de licores, cerveza, vinos y refrescos (consumo moderado)", en: "Open bar with spirits, beers, wines, and soft drinks (moderate consumption)" },
      { es: "Starlink Wi-Fi, toallas de baño y playa, juguetes acuáticos", en: "Starlink Wi-Fi, bath and beach towels, water toys" },
    ],
    excludes: [
      { es: "Transporte hacia/desde el barco", en: "Transport to/from the boat" },
      { es: "Impuesto de entrada al territorio Guna Yala", en: "Guna Yala entrance fee" },
      { es: "Seguro de viaje personal", en: "Personal travel insurance" },
    ],
    relatedExperienceIds: [9, 12, 16],
    maxGuests: 8,
    isPrivate: true,
    isSharedAllowed: false,
    featureBadge: { es: "Starlink & Capitán Chef", en: "Starlink & Captain Chef" },
    isFeatured: true,
    hasDiscount: false,
  },

  // ---------------------------------------------------------------------------
  // 12. Don C - Lagoon 400S2
  // ---------------------------------------------------------------------------
  {
    id: 12,
    slug: "don-c-lagoon-400s2",
    category: "Catamaran",
    isAvailable: true,
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Catamarán Don C (Lagoon 400S2) en San Blas | Sailing the World",
        en: "Charter Don C (Lagoon 400S2) Catamaran in San Blas | Sailing the World",
      },
      description: {
        es: "Navega a bordo del renovado Lagoon 400S2 Don C con el Capitán Marcos (Brasil) y la Chef Melisa (Argentina). Starlink, kayak, paddleboard y parrilla a bordo.",
        en: "Sail on the upgraded Lagoon 400S2 Don C with Captain Marcos (Brazil) & Chef Melisa (Argentina). Starlink, kayak, SUP, and onboard grill.",
      },
      keywords: [
        { es: "catamaran Don C lagoon 400S2", en: "Don C lagoon 400S2 san blas" },
        { es: "alquiler compartido san blas", en: "shared cabin charter san blas" },
      ],
      openGraph: {
        title: {
          es: "Catamarán Don C (Lagoon 400S2) - Chef Melisa & Capitán Marcos",
          en: "Don C Catamaran (Lagoon 400S2) - Chef Melisa & Captain Marcos",
        },
        description: {
          es: "Totalmente modernizado en 2024 con nueva cubierta de popa, Starlink y alta gastronomía a la parrilla.",
          en: "Fully modernized in 2024 with new aft deck, Starlink, and exquisite grilled cuisine.",
        },
        images: [
          "/contenido/catamaranes/Don c/catalogo/1.png",
          "/contenido/catamaranes/Don c/catalogo/2.png",
          "/contenido/catamaranes/Don c/catalogo/3.png",
          "/contenido/catamaranes/Don c/catalogo/4.png", 
          "/contenido/catamaranes/Don c/catalogo/5.png",
          "/contenido/catamaranes/Don c/catalogo/6.png",

        ],
      },
    },
    boatName: "Don C (Lagoon 400S2)",
    boatCoverPhoto: "/contenido/catamaranes/Don c/catalogo/1.png",
    boatGalleryPhotos: [
      "/contenido/catamaranes/Don c/catalogo/1.png",
          "/contenido/catamaranes/Don c/catalogo/2.png",
          "/contenido/catamaranes/Don c/catalogo/3.png",
          "/contenido/catamaranes/Don c/catalogo/4.png", 
          "/contenido/catamaranes/Don c/catalogo/5.png",
          "/contenido/catamaranes/Don c/catalogo/6.png",
    ],
    boatDescription: {
      es: "Lagoon 400S2 reeditado en 2024 con nueva cubierta de popa, Starlink y dúo de tripulación experto (Brasil/Argentina).",
      en: "Lagoon 400S2 updated in 2024 with new aft deck, Starlink, and expert Brazilian/Argentine crew.",
    },
    boatLongDescription: {
      es: "Don C es un moderno Lagoon 400S2 mejorado sustancialmente en 2024. Cuenta con una nueva cubierta de popa óptima para atardeceres. El Capitán Marcos (Buzo comercial brasileño) garantiza total seguridad en la navegación, mientras la Chef Melisa (Argentina, 16 años de experiencia) deleita con asados, cenas en la playa y postres memorables.",
      en: "Don C is a modern Lagoon 400S2 upgraded in 2024 featuring an extended aft deck for sunsets. Captain Marcos (former commercial diver from Brazil) ensures effortless navigation, while Chef Melisa (Argentina, 16 yrs experience) creates beach BBQs and gourmet meals.",
    },
    specs: {
      lengthFeet: 40,
      cabins: 4,
      bathrooms: 2,
      doubleBeds: 4,
    },
    captain: {
      name: "Marcos & Melisa",
      role: { es: "Capitán y Chef Profesional", en: "Captain & Professional Chef" },
      photoUrl: "/contenido/catamaranes/Don c/capitan/1.png",
      description: {
        es: "Marcos (Capitán/Buzo) y Melisa (Chef profesional con 16 años de trayectoria). Hablan español, inglés y portugués.",
        en: "Marcos (Captain/Diver) and Melisa (Pro Chef with 16 yrs experience). Trilingual in Spanish, English, Portuguese.",
      },
      languages: ["Español", "Português", "English"],
    },
    dining: {
      description: {
        es: "Pensión completa por la Chef Melisa: parrilladas, cenas en la playa y postres gourmet. Barra libre de bebidas alcohólicas y refrescos bajo consumo moderado.",
        en: "Full board by Chef Melisa: beach BBQs, gourmet desserts, and grilled meals. Open bar with wines, spirits, and soft drinks (moderate consumption).",
      },
      photoUrl: "/contenido/catamaranes/Don c/comidas/1.png",
    },
    activities: {
      description: {
        es: "Starlink Wi-Fi, Kayak, Stand-Up Paddleboard, alfombra flotante, snorkel y exploración de arrecifes vírgenes.",
        en: "Starlink Wi-Fi, Kayak, SUP, floating water mat, snorkeling gear, and reef exploration.",
      },
      photoUrls: [
        "/contenido/catamaranes/Don c/experiencia/1.png",
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 345, //REVISAR
      tiers: [
        {
          seasonOrType: { es: "Camarote Compartido (2 Personas)", en: "Shared Cabin (2 Guests)" },
          pricePerNight: 690,
          notes: { es: "$345 USD por persona por noche", en: "$345 USD per person per night" },
        },
        {
          seasonOrType: { es: "Charter Privado (2 Huéspedes)", en: "Private Charter (2 Guests)" },
          guestsCount: 2,
          pricePerNight: 1150,
          notes: { es: "Huésped adicional: +$230 USD/noche", en: "Extra guest: +$230 USD/night" },
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Modalidad</th>
                <th class="p-3 border">Precio (USD / Noche)</th>
                <th class="p-3 border">Notas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Camarote Compartido (2 personas)</td>
                <td class="p-3 border font-bold text-green-600">$690 USD</td>
                <td class="p-3 border">$345 por persona</td>
              </tr>
              <tr>
                <td class="p-3 border">Charter Privado (2 huéspedes)</td>
                <td class="p-3 border font-bold text-green-600">$1,150 USD</td>
                <td class="p-3 border">Huésped extra: +$230 USD</td>
              </tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Accommodation Type</th>
                <th class="p-3 border">Price (USD / Night)</th>
                <th class="p-3 border">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Shared Cabin Charter (2 guests)</td>
                <td class="p-3 border font-bold text-green-600">$690 USD</td>
                <td class="p-3 border">$345 per person</td>
              </tr>
              <tr>
                <td class="p-3 border">Private Charter (2 guests)</td>
                <td class="p-3 border font-bold text-green-600">$1,150 USD</td>
                <td class="p-3 border">Extra guest: +$230 USD</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    },
    includes: [
      { es: "Pensión completa por chef profesional (3 comidas y snacks)", en: "Full board by professional chef (3 meals & snacks)" },
      { es: "Barra libre completa de bebidas y cócteles moderados", en: "Open bar with drinks and moderate spirits" },
      { es: "Starlink Wi-Fi, Kayak, Paddleboard, Snorkel, alfombra flotante", en: "Starlink Wi-Fi, Kayak, SUP, Snorkel gear, floating mat" },
      { es: "Toallas de baño y playa", en: "Bath and beach towels" },
    ],
    excludes: [
      { es: "Transporte hacia/desde San Blas", en: "Transport to/from San Blas" },
      { es: "Entrada en efectivo al territorio Guna Yala", en: "Guna Yala territory cash entrance fee" },
      { es: "Seguro personal de viaje", en: "Personal travel insurance" },
    ],
    relatedExperienceIds: [11, 13, 14],
    maxGuests: 8,
    isPrivate: true,
    isSharedAllowed: true,
    featureBadge: { es: "Chef Profesional & Starlink", en: "Pro Chef & Starlink" },
    isFeatured: true,
    hasDiscount: false,
  },
/*
  // ---------------------------------------------------------------------------
  // 13. Coolcat
  // ---------------------------------------------------------------------------
  {
    id: 13,
    slug: "coolcat-catamaran-40ft",
    category: "Catamaran",
    isAvailable: true, 
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Catamarán Coolcat (40ft) en San Blas | Sailing the World",
        en: "Charter Coolcat Catamaran (40ft) in San Blas | Sailing the World",
      },
      description: {
        es: "Navega en el catamarán Coolcat de 40 pies en San Blas. Opción económica por camarote privado ($255 USD/pers) o barco completo hasta 6 personas.",
        en: "Charter the 40ft Coolcat catamaran in San Blas. Budget-friendly option for shared private cabin ($255 USD/person) or private charter up to 6 guests.",
      },
      keywords: [
        { es: "catamaran Coolcat san blas", en: "Coolcat catamaran san blas" },
        { es: "charter economico san blas", en: "affordable catamaran charter panama" },
      ],
      openGraph: {
        title: {
          es: "Catamarán Coolcat en San Blas - Modalidad Compartida y Privada",
          en: "Coolcat Catamaran in San Blas - Shared & Private Options",
        },
        description: {
          es: "Flexibilidad total para solteros, parejas o grupos pequeños. All-inclusive con bebidas y equipamiento náutico.",
          en: "Total flexibility for solo travelers, couples, or small groups. All-inclusive with drinks and nautical gear.",
        },
        images: [
          "/contenido/catamaranes/coolcat/catalogo/1.png",
          "/contenido/catamaranes/coolcat/catalogo/2.png",
          "/contenido/catamaranes/coolcat/catalogo/3.png",
          "/contenido/catamaranes/coolcat/catalogo/4.png", 
          "/contenido/catamaranes/coolcat/catalogo/5.png",
          "/contenido/catamaranes/coolcat/catalogo/6.png",
          "/contenido/catamaranes/coolcat/catalogo/7.png",
          "/contenido/catamaranes/coolcat/catalogo/8.png",
          "/contenido/catamaranes/coolcat/catalogo/9.png",
          "/contenido/catamaranes/coolcat/catalogo/10.png",

        ],
      },
    },
    boatName: "Coolcat (40 FT)",
    boatCoverPhoto: "/contenido/catamaranes/coolcat/catalogo/1.png",
    boatGalleryPhotos: [
      "/contenido/catamaranes/coolcat/catalogo/1.png",
          "/contenido/catamaranes/coolcat/catalogo/2.png",
          "/contenido/catamaranes/coolcat/catalogo/3.png",
          "/contenido/catamaranes/coolcat/catalogo/4.png", 
          "/contenido/catamaranes/coolcat/catalogo/5.png",
          "/contenido/catamaranes/coolcat/catalogo/6.png",
          "/contenido/catamaranes/coolcat/catalogo/7.png",
          "/contenido/catamaranes/coolcat/catalogo/8.png",
          "/contenido/catamaranes/coolcat/catalogo/9.png",
          "/contenido/catamaranes/coolcat/catalogo/10.png",
    ],
    boatDescription: {
      es: "Catamarán de 40 pies con opciones flexibles de reserva por camarote o barco completo para hasta 6 personas.",
      en: "40ft catamaran offering flexible charter options by cabin or full private boat for up to 6 guests.",
    },
    boatLongDescription: {
      es: "Coolcat brinda el equilibrio perfecto entre aventura y confort en San Blas. Permite reservar camarotes dobles privados en modalidad compartida (ideal para parejas/viajeros solos) o alquilar la embarcación entera para grupos reducidos.",
      en: "Coolcat delivers a balanced sailing experience in San Blas. Perfect for booking a private double cabin in shared mode or reserving the entire yacht for an intimate group of up to 6 guests.",
    },
    specs: {
      lengthFeet: 40,
      cabins: 3,
      bathrooms: 1,
      doubleBeds: 3,
    },
    captain: {
      name: "Coolcat Crew",
      role: { es: "Capitán y Tripulación", en: "Captain & Crew" },
      photoUrl: "/contenido/catamaranes/coolcat/capitan/1.png",
      description: {
        es: "Tripulación atenta enfocada en una navegación amigable, segura y relajada.",
        en: "Attentive crew focused on friendly, safe, and relaxing sailing.",
      },
      languages: ["Español", "English"],
    },
    dining: {
      description: {
        es: "3 comidas diarias (desayuno, almuerzo, cena) y snacks. Barra libre de bebidas no alcohólicas y alcohólicas (con consumo moderado y cócteles especiales).",
        en: "3 daily meals (breakfast, lunch, dinner) and snacks. Open bar with non-alcoholic and alcoholic beverages (moderate consumption and special cocktails).",
      },
      photoUrl: "/contenido/catamaranes/coolcat/comidas/1.png",
    },
    activities: {
      description: {
        es: "Equipamiento de snorkel, Stand-Up Paddleboard y traslados en dinghy a playas e islas de San Blas.",
        en: "Snorkeling gear, SUP paddleboard, and dinghy rides to San Blas beaches and islets.",
      },
      photoUrls: [
        "/contenido/catamaranes/coolcat/experiencia/1.png",
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 255,
      tiers: [
        {
          seasonOrType: { es: "Camarote Doble Compartido (Por Persona)", en: "Shared Double Cabin (Per Person)" },
          pricePerNight: 255,
        },
        {
          seasonOrType: { es: "Charter Privado (2 Huéspedes)", en: "Private Charter (2 Guests)" },
          guestsCount: 2,
          pricePerNight: 1200,
          notes: { es: "Huésped adicional: +$100 USD/noche", en: "Extra guest: +$100 USD/night" },
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Modalidad</th>
                <th class="p-3 border">Precio (USD / Noche)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Charter Compartido (Camarote Doble Privado)</td>
                <td class="p-3 border font-bold text-green-600">$255 USD / persona</td>
              </tr>
              <tr>
                <td class="p-3 border">Charter Privado (2 personas)</td>
                <td class="p-3 border font-bold text-green-600">$1,200 USD / noche</td>
              </tr>
              <tr>
                <td class="p-3 border">Huésped Extra en Charter Privado</td>
                <td class="p-3 border font-bold text-green-600">+$100 USD / noche</td>
              </tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Type / Mode</th>
                <th class="p-3 border">Price (USD / Night)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Shared Charter (Private Double Cabin)</td>
                <td class="p-3 border font-bold text-green-600">$255 USD / person</td>
              </tr>
              <tr>
                <td class="p-3 border">Private Charter (2 guests)</td>
                <td class="p-3 border font-bold text-green-600">$1,200 USD / night</td>
              </tr>
              <tr>
                <td class="p-3 border">Extra Guest in Private Charter</td>
                <td class="p-3 border font-bold text-green-600">+$100 USD / night</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    },
    includes: [
      { es: "Tres comidas diarias, snacks y barra libre con cócteles moderados", en: "Three daily meals, snacks, and open bar with moderate cocktails" },
      { es: "Equipo de snorkel, paddleboard y bote auxiliar", en: "Snorkeling equipment, paddleboard, and dinghy" },
      { es: "Servicio completo de tripulación", en: "Full crew service" },
    ],
    excludes: [
      { es: "Transporte hacia/desde San Blas", en: "Transport to/from San Blas" },
      { es: "Tasas locales de entrada a Guna Yala", en: "Local Guna Yala entrance fees" },
      { es: "Seguro personal de viaje", en: "Personal travel insurance" },
    ],
    relatedExperienceIds: [10, 12, 15],
    maxGuests: 6,
    isPrivate: true,
    isSharedAllowed: true,
    featureBadge: { es: "Opción Camarote Compartido", en: "Shared Cabin Available" },
    isFeatured: false,
    hasDiscount: false,
  },
*/
  // ---------------------------------------------------------------------------
  // 14. Nomade - Lagoon 570 Owner's Edition
  // ---------------------------------------------------------------------------
  {
    id: 14,
    slug: "nomade-lagoon-570-owners-edition",
    category: "Catamaran",
    isAvailable: true, 
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Catamarán Nomade (Lagoon 570 Kevlar) en San Blas | Sailing the World",
        en: "Charter Nomade (Lagoon 570 Owner's Edition) in San Blas | Sailing the World",
      },
      description: {
        es: "Mega catamarán de 57 pies Nomade en San Blas (Casco Kevlar). 4 camarotes con A/C, Starlink, karaoke, máquinas de helado y trago congelado, scooters subacuáticos.",
        en: "Mega 57ft Nomade Catamaran in San Blas (Kevlar hull). 4 A/C cabins, Starlink, karaoke, ice cream & frozen drink machines, underwater scooters.",
      },
      keywords: [
        { es: "catamaran Nomade lagoon 570", en: "Nomade lagoon 570 san blas" },
        { es: "megacatamaran de lujo san blas", en: "luxury mega catamaran charter panama" },
      ],
      openGraph: {
        title: {
          es: "Catamarán Nomade (Lagoon 570) - Lujo y Diversión de Clase Mundial",
          en: "Nomade Catamaran (Lagoon 570) - World-Class Luxury Yacht",
        },
        description: {
          es: "El catamarán más equipado de San Blas: A/C en todos los camarotes, desalinizador, Starlink y scooters subacuáticos.",
          en: "San Blas's premier yacht: A/C in every cabin, unlimited watermaker, Starlink, and underwater scooters.",
        },
        images: [
          "/contenido/catamaranes/Nomade/catalogo/1.png",
          "/contenido/catamaranes/Nomade/catalogo/2.png",
          "/contenido/catamaranes/Nomade/catalogo/3.png",
          "/contenido/catamaranes/Nomade/catalogo/4.png", 
          "/contenido/catamaranes/Nomade/catalogo/5.png",
          "/contenido/catamaranes/Nomade/catalogo/6.png",

        ],
      },
    },
    boatName: "Nomade (Lagoon 570 Owner's Edition)",
    boatCoverPhoto: "/contenido/catamaranes/Nomade/catalogo/1.png",
    boatGalleryPhotos: [
      "/contenido/catamaranes/Nomade/catalogo/1.png",
          "/contenido/catamaranes/Nomade/catalogo/2.png",
          "/contenido/catamaranes/Nomade/catalogo/3.png",
          "/contenido/catamaranes/Nomade/catalogo/4.png", 
          "/contenido/catamaranes/Nomade/catalogo/5.png",
          "/contenido/catamaranes/Nomade/catalogo/6.png",
    ],
    boatDescription: {
      es: "Exclusivo Lagoon 570 con casco de Kevlar, aire acondicionado en cada camarote, máquinas de helado y juguetes de alta tecnología.",
      en: "Exclusive Lagoon 570 with Kevlar hull, A/C in all cabins, ice cream machine, and high-tech water toys.",
    },
    boatLongDescription: {
      es: "Nomade es la definición de lujo flotante en San Blas. Un super catamarán Lagoon 570 con casco de Kevlar, diseñado para brindar entretenimiento ilimitado. Cuenta con A/C en sus 4 camarotes dobles, Starlink Satelital, desalinizador para agua dulce ilimitada, Karaoke, máquina de helados, máquina de tragos congelados y scooters subacuáticos.",
      en: "Nomade defines floating luxury in San Blas. A Lagoon 570 mega-catamaran with Kevlar hull built for maximum comfort. Features A/C in all 4 double cabins, Starlink Satellite Internet, unlimited fresh watermaker, Karaoke system, ice cream machine, frozen drink machine, and underwater water scooters.",
    },
    specs: {
      lengthFeet: 57,
      cabins: 4,
      bathrooms: 4,
      doubleBeds: 4,
    },
    captain: {
      name: "Nomade Trilingual Crew",
      role: { es: "Tripulación Trilingüe VIP", en: "Trilingual VIP Crew" },
      photoUrl: "/contenido/catamaranes/Nomade/capitan/1.png",
      description: {
        es: "Tripulación trilingüe (Español, Inglés, Portugués) dedicada a ofrecer una experiencia impecable de nivel resort.",
        en: "Trilingual crew (English, Spanish, Portuguese) delivering resort-level hospitality.",
      },
      languages: ["English", "Español", "Português"],
    },
    dining: {
      description: {
        es: "Gastronomía gourmet All-Inclusive: carnes rojas, pescados y mariscos frescos, jugos naturales, menú infantil personalizado y barra libre. Incluye máquina de helados y tragos congelados.",
        en: "Gourmet All-Inclusive: red meats, fresh local fish/seafood, natural juices, custom kids menu, open bar, plus ice cream & frozen drink machines.",
      },
      photoUrl: "/contenido/catamaranes/Nomade/comidas/1.png",
    },
    activities: {
      description: {
        es: "2 Scooters subacuáticos, 2 Paddleboards, 2 Kayaks, equipo completo de pesca (caña y pesca submarina), Karaoke, TV y Starlink.",
        en: "2 Underwater water scooters, 2 SUPs, 2 Kayaks, rod & spear fishing equipment, Karaoke, TV, and Starlink.",
      },
      photoUrls: [
        "/contenido/catamaranes/Nomade/experiencia/1.png",
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 400,
      tiers: [
        {
          seasonOrType: { es: "Camarote Compartido (Por Persona)", en: "Shared Cabin Charter (Per Person)" },
          pricePerNight: 400,
        },
        {
          seasonOrType: { es: "Charter Privado (2 Huéspedes)", en: "Private Charter (2 Guests)" },
          guestsCount: 2,
          pricePerNight: 1325,
          notes: { es: "Huésped adicional: +$250 USD/noche", en: "Extra guest: +$250 USD/night" },
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Modalidad</th>
                <th class="p-3 border">Precio (USD / Noche)</th>
                <th class="p-3 border">Notas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Camarote Compartido</td>
                <td class="p-3 border font-bold text-green-600">$400 USD / pers.</td>
                <td class="p-3 border">Por persona por noche</td>
              </tr>
              <tr>
                <td class="p-3 border">Charter Privado (2 personas)</td>
                <td class="p-3 border font-bold text-green-600">$1,325 USD</td>
                <td class="p-3 border">Huésped extra: +$250 USD</td>
              </tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Accommodation Type</th>
                <th class="p-3 border">Price (USD / Night)</th>
                <th class="p-3 border">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Shared Cabin Charter</td>
                <td class="p-3 border font-bold text-green-600">$400 USD / guest</td>
                <td class="p-3 border">Per person per night</td>
              </tr>
              <tr>
                <td class="p-3 border">Private Charter (2 guests)</td>
                <td class="p-3 border font-bold text-green-600">$1,325 USD</td>
                <td class="p-3 border">Extra guest: +$250 USD</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    },
    includes: [
      { es: "Aire Acondicionado en cada camarote y agua dulce ilimitada", en: "Air Conditioning in every cabin and unlimited fresh watermaker" },
      { es: "Gastronomía gourmet, barra libre, máquina de helados y slushies", en: "Gourmet dining, open bar, ice cream & slushie machines" },
      { es: "2 Scooters subacuáticos, 2 SUP, 2 Kayaks, Karaoke y Starlink", en: "2 Underwater scooters, 2 SUPs, 2 Kayaks, Karaoke, Starlink" },
      { es: "Tripulación VIP trilingüe dedicada", en: "Dedicated trilingual VIP crew" },
    ],
    excludes: [
      { es: "Transporte hacia/desde San Blas", en: "Transport to/from San Blas" },
      { es: "Entrada en efectivo a Guna Yala", en: "Guna Yala entrance fees" },
      { es: "Seguro personal de viaje", en: "Personal travel insurance" },
    ],
    relatedExperienceIds: [8, 9, 12],
    maxGuests: 8,
    isPrivate: true,
    isSharedAllowed: true,
    featureBadge: { es: "A/C & Scooters Subacuáticos", en: "A/C & Underwater Scooters" },
    isFeatured: true,
    hasDiscount: false,
  },

  // ---------------------------------------------------------------------------
  // 15. KAYA
  // ---------------------------------------------------------------------------
  {
    id: 15,
    slug: "kaya-caribbean-catamaran",
    category: "Catamaran",
    isAvailable: true,
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Catamarán Kaya en San Blas | Sailing the World",
        en: "Charter Kaya Catamaran in San Blas | Sailing the World",
      },
      description: {
        es: "Disfruta de una navegación auténtica en San Blas a bordo del catamarán Kaya. Capitana Ahielen y Chef Gastón (Argentina). Starlink, 2 paddleboards y pesca.",
        en: "Enjoy authentic San Blas sailing aboard Kaya Catamaran. Captain Ahielen & Chef Gastón (Argentina). Starlink, 2 SUPs, and fishing gear.",
      },
      keywords: [
        { es: "catamaran Kaya san blas", en: "Kaya catamaran san blas" },
        { es: "charter ahielen gaston san blas", en: "argentine crew catamaran panama" },
      ],
      openGraph: {
        title: {
          es: "Catamarán Kaya en San Blas - Cálida Atención Argentina",
          en: "Kaya Catamaran in San Blas - Authentic Sailing & Pro Chef",
        },
        description: {
          es: "Navegación acogedora con la Capitana Ahielen (8+ años en San Blas) y el Chef Gastón.",
          en: "Cozy Caribbean sailing with Captain Ahielen (8+ yrs in San Blas) and Chef Gastón.",
        },
        images: [
          "/contenido/catamaranes/KAYA/catalogo/1.png",
          "/contenido/catamaranes/KAYA/catalogo/2.png",
          "/contenido/catamaranes/KAYA/catalogo/3.png",
          "/contenido/catamaranes/KAYA/catalogo/4.png", 
          "/contenido/catamaranes/KAYA/catalogo/5.png",
          "/contenido/catamaranes/KAYA/catalogo/6.png",
          "/contenido/catamaranes/KAYA/catalogo/7.png",
          "/contenido/catamaranes/KAYA/catalogo/8.png",
          "/contenido/catamaranes/KAYA/catalogo/9.png",
          "/contenido/catamaranes/KAYA/catalogo/10.png",

        ],
      },
    },
    boatName: "Kaya Catamaran",
    boatCoverPhoto: "/contenido/catamaranes/KAYA/catalogo/1.png",
    boatGalleryPhotos: [
      "/contenido/catamaranes/KAYA/catalogo/1.png",
          "/contenido/catamaranes/KAYA/catalogo/2.png",
          "/contenido/catamaranes/KAYA/catalogo/3.png",
          "/contenido/catamaranes/KAYA/catalogo/4.png", 
          "/contenido/catamaranes/KAYA/catalogo/5.png",
          "/contenido/catamaranes/KAYA/catalogo/6.png",
          "/contenido/catamaranes/KAYA/catalogo/7.png",
          "/contenido/catamaranes/KAYA/catalogo/8.png",
          "/contenido/catamaranes/KAYA/catalogo/9.png",
          "/contenido/catamaranes/KAYA/catalogo/10.png",
    ],
    boatDescription: {
      es: "Catamarán acogedor y robusto con tripulación argentina experta (Capitana Ahielen y Chef Gastón) y Starlink.",
      en: "Cozy and sturdy catamaran with expert Argentine crew (Captain Ahielen & Chef Gastón) plus Starlink.",
    },
    boatLongDescription: {
      es: "Kaya es un catamarán ideal para familias o grupos de amigos hasta 8 personas. Ofrece 3 camarotes estándar dobles más 1 camarote familiar. La Capitana Ahielen aporta más de 8 años de experiencia en las aguas de San Blas, mientras que el Chef Gastón deleita con platillos variados con insumos locales frescos.",
      en: "Kaya is ideal for families or friends up to 8 guests. Features 3 standard double cabins and 1 family cabin. Captain Ahielen brings over 8 years of San Blas navigation experience, paired with Chef Gastón's culinary excellence.",
    },
    specs: {
      cabins: 4,
      bathrooms: 2,
      doubleBeds: 4,
      singleBeds: 1,
    },
    captain: {
      name: "Ahielen & Gastón",
      role: { es: "Capitana y Chef Profesional", en: "Captain & Professional Chef" },
      photoUrl: "/contenido/catamaranes/KAYA/capitan/1.png",
      description: {
        es: "Ahielen (Capitana con 8+ años en San Blas) y Gastón (Chef profesional argentino).",
        en: "Ahielen (Captain with 8+ years in San Blas) and Gastón (Professional Argentine Chef).",
      },
      languages: ["Español", "English"],
    },
    dining: {
      description: {
        es: "3 comidas diarias preparadas por Chef profesional con productos locales frescos. Barra libre con bebidas no alcohólicas, cervezas, vinos y cócteles especiales (consumo moderado).",
        en: "3 daily gourmet meals prepared by professional chef using fresh local ingredients. Open bar with soft drinks, beer, wine, and cocktails (moderate consumption).",
      },
      photoUrl: "/contenido/catamaranes/KAYA/comidas/1.png",
    },
    activities: {
      description: {
        es: "Starlink Wi-Fi, 2 Paddleboards, equipo de snorkel, cañas de pesca y bote auxiliar para exploración de islotes.",
        en: "Starlink Wi-Fi, 2 Paddleboards, snorkeling gear, fishing rods, and dinghy excursions.",
      },
      photoUrls: [
        "/contenido/catamaranes/KAYA/experiencia/1.png",
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 575,
      tiers: [
        {
          seasonOrType: { es: "Charter Privado (2 Huéspedes)", en: "Private Charter (2 Guests)" },
          guestsCount: 2,
          pricePerNight: 1150,
          notes: { es: "Huésped adicional: +$175 USD/noche", en: "Extra guest: +$175 USD/night" },
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Modalidad</th>
                <th class="p-3 border">Precio Base (2 Personas)</th>
                <th class="p-3 border">Huésped Extra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Charter Privado (Barco Exclusivo)</td>
                <td class="p-3 border font-bold text-green-600">$1,150 USD / Noche</td>
                <td class="p-3 border">+$175 USD / Noche</td>
              </tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Accommodation Type</th>
                <th class="p-3 border">Base Price (2 Guests)</th>
                <th class="p-3 border">Extra Guest</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Private Charter (Exclusive Boat)</td>
                <td class="p-3 border font-bold text-green-600">$1,150 USD / Night</td>
                <td class="p-3 border">+$175 USD / Night</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    },
    includes: [
      { es: "Servicio de Capitana y Chef con pensión completa", en: "Captain and Chef service with full board" },
      { es: "Barra libre completa con cócteles moderados", en: "Full open bar with moderate drinks/cocktails" },
      { es: "Starlink Wi-Fi, ventiladores en camarotes, 2 SUP, snorkel y pesca", en: "Starlink Wi-Fi, cabin fans, 2 SUPs, snorkel & fishing gear" },
    ],
    excludes: [
      { es: "Transporte hacia/desde San Blas", en: "Transport to/from San Blas" },
      { es: "Entrada obligatoria a Guna Yala", en: "Mandatory Guna Yala entrance fee" },
      { es: "Seguro personal de viaje", en: "Personal travel insurance" },
    ],
    relatedExperienceIds: [10, 12, 13],
    maxGuests: 8,
    isPrivate: true,
    isSharedAllowed: false,
    featureBadge: { es: "Capitana Experta & Chef", en: "Expert Captain & Chef" },
    isFeatured: false,
    hasDiscount: false,
  },

  // ---------------------------------------------------------------------------
  // 16. Berenice - Leopard 40
  // ---------------------------------------------------------------------------
  {
    id: 16,
    slug: "berenice-leopard-40-2018",
    category: "Catamaran",
    isAvailable: true, 
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Catamarán Berenice (Leopard 40 2018) en San Blas | Sailing the World",
        en: "Charter Berenice (Leopard 40 2018) Catamaran in San Blas | Sailing the World",
      },
      description: {
        es: "Alquila el catamarán francés Leopard 40 Berenice (2018) en San Blas. A/C silencioso, puerta frontal a proa, tripulación francesa y capacidad hasta 9 huéspedes.",
        en: "Charter French Leopard 40 Berenice (2018) in San Blas. Silent A/C generator, forward cockpit door, French crew, capacity for up to 9 guests.",
      },
      keywords: [
        { es: "catamaran Berenice leopard 40", en: "Berenice leopard 40 san blas" },
        { es: "tripulacion francesa san blas", en: "french crew catamaran charter panama" },
      ],
      openGraph: {
        title: {
          es: "Catamarán Berenice (Leopard 40) - Excelencia Francesa & Confort",
          en: "Berenice Catamaran (Leopard 40) - French Sailing Excellence",
        },
        description: {
          es: "Diseño moderno con puerta de proa, solárium superior, A/C con generador silencioso y tripulación de capitanes franceses.",
          en: "Modern layout with front door, upper deck sunpads, silent A/C generator, and French captains.",
        },
        images: [
          "/contenido/catamaranes/Berenice/catalogo/1.png",
          "/contenido/catamaranes/Berenice/catalogo/2.png",
          "/contenido/catamaranes/Berenice/catalogo/3.png",
          "/contenido/catamaranes/Berenice/catalogo/4.png", 
          "/contenido/catamaranes/Berenice/catalogo/5.png",
          "/contenido/catamaranes/Berenice/catalogo/6.png",
          "/contenido/catamaranes/Berenice/catalogo/7.png",
          "/contenido/catamaranes/Berenice/catalogo/8.png",

        ],
      },
    },
    boatName: "Berenice (Leopard 40 2018)",
    boatCoverPhoto: "/contenido/catamaranes/Berenice/catalogo/1.png",
    boatGalleryPhotos: [
          "/contenido/catamaranes/Berenice/catalogo/1.png",
          "/contenido/catamaranes/Berenice/catalogo/2.png",
          "/contenido/catamaranes/Berenice/catalogo/3.png",
          "/contenido/catamaranes/Berenice/catalogo/4.png", 
          "/contenido/catamaranes/Berenice/catalogo/5.png",
          "/contenido/catamaranes/Berenice/catalogo/6.png",
          "/contenido/catamaranes/Berenice/catalogo/7.png",
          "/contenido/catamaranes/Berenice/catalogo/8.png",    ],
    boatDescription: {
      es: "Leopard 40 del 2018 con acceso frontal directo a proa, A/C con generador silencioso y tripulación francesa experimentada.",
      en: "2018 Leopard 40 featuring forward cockpit door, silent generator A/C, and experienced French crew.",
    },
    boatLongDescription: {
      es: "Berenice (Leopard 40) destaca por su arquitectura vanguardista con puerta frontal que conecta el salón interior directamente con la malla de proa. Su distribución Owner's Layout asigna todo el casco de estribor para un espacio privado exclusivo. Cuenta con A/C alimentado por generador silencioso, cojines tipo bean bag y tripulación de Capitanes franceses (Capt. Thomas & Capt. JC).",
      en: "Berenice (Leopard 40) showcases innovative architecture with a unique forward door connecting saloon to deck. Owner's Layout grants exclusive access to the starboard hull. Equipped with ultra-quiet generator A/C, bean bag lounge chairs, and led by French Captains (Capt. Thomas & Capt. JC).",
    },
    specs: {
      lengthFeet: 40,
      cabins: 4,
      bathrooms: 1,
      doubleBeds: 3,
      singleBeds: 2,
    },
    captain: {
      name: "Captain Thomas & Captain JC",
      role: { es: "Capitanes Franceses Certificados", en: "Certified French Captains" },
      photoUrl: "/contenido/catamaranes/Berenice/capitan/1.png",
      description: {
        es: "Capt. Thomas (Bretania, Capitaine 200, 5 años en San Blas) y Capt. JC (Veterano de la Marina Francesa, políglota habla 6 idiomas).",
        en: "Capt. Thomas (Capitaine 200 certified, 5 yrs in San Blas) & Capt. JC (French Navy veteran, speaks 6 languages).",
      },
      languages: ["Français", "Español", "English", "Português", "Mandarin", "Cantonese"],
    },
    dining: {
      description: {
        es: "Comidas gourmet caribeñas preparadas por la tripulación. Barra libre incluida (refrescos, cervezas, vinos y licores bajo consumo moderado).",
        en: "Gourmet Caribbean meals prepared by crew. Open bar included (soft drinks, beers, wines, and spirits in moderation).",
      },
      photoUrl: "/contenido/catamaranes/Berenice/comidas/1.png",
    },
    activities: {
      description: {
        es: "Sunbeds en cubierta de proa, pufs bean bags, solárium superior, equipo de snorkel, kayaks/paddleboards y pesca deportiva.",
        en: "Front deck sunbeds, bean bags, upper deck sunpads, snorkeling gear, kayaks/SUPs, and fishing gear.",
      },
      photoUrls: [
        "/contenido/catamaranes/Berenice/experiencia/1.png",
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 630,
      tiers: [
        { seasonOrType: { es: "2 Huéspedes", en: "2 Guests" }, guestsCount: 2, pricePerNight: 1260 },
        { seasonOrType: { es: "4 Huéspedes", en: "4 Guests" }, guestsCount: 4, pricePerNight: 1720 },
        { seasonOrType: { es: "6 Huéspedes", en: "6 Guests" }, guestsCount: 6, pricePerNight: 2060 },
        { seasonOrType: { es: "8 Huéspedes", en: "8 Guests" }, guestsCount: 8, pricePerNight: 2640 },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Huéspedes</th>
                <th class="p-3 border">Modalidad</th>
                <th class="p-3 border">Precio (USD / Noche)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-3 border">2 Huéspedes</td><td class="p-3 border">Charter Privado Exclusivo</td><td class="p-3 border font-bold text-green-600">$1,260 USD</td></tr>
              <tr><td class="p-3 border">3 Huéspedes</td><td class="p-3 border">Charter Privado Exclusivo</td><td class="p-3 border font-bold text-green-600">$1,490 USD</td></tr>
              <tr><td class="p-3 border">4 Huéspedes</td><td class="p-3 border">Charter Privado Exclusivo</td><td class="p-3 border font-bold text-green-600">$1,720 USD</td></tr>
              <tr><td class="p-3 border">5 Huéspedes</td><td class="p-3 border">Charter Privado Exclusivo</td><td class="p-3 border font-bold text-green-600">$1,830 USD</td></tr>
              <tr><td class="p-3 border">6 Huéspedes</td><td class="p-3 border">Charter Privado Exclusivo</td><td class="p-3 border font-bold text-green-600">$2,060 USD</td></tr>
              <tr><td class="p-3 border">7 Huéspedes</td><td class="p-3 border">Charter Privado Exclusivo</td><td class="p-3 border font-bold text-green-600">$2,290 USD</td></tr>
              <tr><td class="p-3 border">8 Huéspedes</td><td class="p-3 border">Charter Privado Exclusivo</td><td class="p-3 border font-bold text-green-600">$2,640 USD</td></tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Guests</th>
                <th class="p-3 border">Mode</th>
                <th class="p-3 border">Price (USD / Night)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-3 border">2 Guests</td><td class="p-3 border">Exclusive Private Charter</td><td class="p-3 border font-bold text-green-600">$1,260 USD</td></tr>
              <tr><td class="p-3 border">3 Guests</td><td class="p-3 border">Exclusive Private Charter</td><td class="p-3 border font-bold text-green-600">$1,490 USD</td></tr>
              <tr><td class="p-3 border">4 Guests</td><td class="p-3 border">Exclusive Private Charter</td><td class="p-3 border font-bold text-green-600">$1,720 USD</td></tr>
              <tr><td class="p-3 border">5 Guests</td><td class="p-3 border">Exclusive Private Charter</td><td class="p-3 border font-bold text-green-600">$1,830 USD</td></tr>
              <tr><td class="p-3 border">6 Guests</td><td class="p-3 border">Exclusive Private Charter</td><td class="p-3 border font-bold text-green-600">$2,060 USD</td></tr>
              <tr><td class="p-3 border">7 Guests</td><td class="p-3 border">Exclusive Private Charter</td><td class="p-3 border font-bold text-green-600">$2,290 USD</td></tr>
              <tr><td class="p-3 border">8 Guests</td><td class="p-3 border">Exclusive Private Charter</td><td class="p-3 border font-bold text-green-600">$2,640 USD</td></tr>
            </tbody>
          </table>
        `,
      },
    },
    includes: [
      { es: "Tripulación profesional francesa (Capitán y Azafata/Primer Oficial)", en: "Professional French crew (Captain & Hostess/First Mate)" },
      { es: "Pensión completa gourmet y barra libre", en: "All-inclusive gourmet meals and open bar" },
      { es: "Aire acondicionado con generador silencioso", en: "Silent generator A/C usage" },
      { es: "Equipos náuticos (kayaks, paddleboards, snorkel, pesca)", en: "Nautical gear (kayaks, SUPs, snorkel, fishing)" },
    ],
    excludes: [
      { es: "Transporte hacia/desde San Blas", en: "Transport to/from San Blas" },
      { es: "Tasas de entrada a Guna Yala", en: "Guna Yala entrance fees" },
      { es: "Seguro personal de viaje", en: "Personal travel insurance" },
    ],
    relatedExperienceIds: [8, 9, 11],
    maxGuests: 9,
    isPrivate: true,
    isSharedAllowed: false,
    featureBadge: { es: "A/C Silencioso & Tripulación Francesa", en: "Silent A/C & French Crew" },
    isFeatured: true,
    hasDiscount: false,
  },
  // ---------------------------------------------------------------------------
  // 17. Cayos Holandeses - Hospedaje en Isla
  // ---------------------------------------------------------------------------
  /*{
    id: 17,
    slug: "cayos-holandeses-private-bungalows",
    category: "IslandLodge",
    isAvailable: true, 
    location: {
      es: "Cayos Holandeses, Islas San Blas, Panamá",
      en: "Dutch Cays, San Blas Islands, Panama",
    },

    // 🔍 SEO & Metadata
    seo: {
      title: {
        es: "Hospedaje en Isla Cayos Holandeses | Cabañas de Lujo en San Blas",
        en: "Dutch Cays Island Lodge | Private Bungalows in San Blas",
      },
      description: {
        es: "Reserva cabañas de lujo frente al mar en Cayos Holandeses, San Blas. Pensión completa, cóctel de bienvenida, snorkel y la mejor experiencia de descanso.",
        en: "Book luxury beachfront bungalows in Dutch Cays, San Blas. Full board, welcome drinks, snorkeling, and the ultimate island retreat.",
      },
      keywords: [
        { es: "hospedaje en isla san blas", en: "island lodge san blas" },
        { es: "cabanas cayos holandeses", en: "dutch cays bungalows" },
      ],
      openGraph: {
        title: {
          es: "Cayos Holandeses - Private Bungalows & Lux Cabañas",
          en: "Dutch Cays - Private Bungalows & Lux Cabañas",
        },
        description: {
          es: "Hospedaje de lujo frente al mar en una de las zonas más exclusivas de San Blas con pensión completa incluida.",
          en: "Luxury beachfront lodging in one of the most exclusive areas of San Blas with full board included.",
        },
        images: [
          "/contenido/islas/Ibin/catalogo/1.png",
          "/contenido/islas/Ibin/catalogo/2.png",
          "/contenido/islas/Ibin/catalogo/3.png",
          "/contenido/islas/Ibin/catalogo/4.png", 
        ],
      },
    },

    // 🚢 Datos del Hospedaje en Isla
    boatName: "Cayos Holandeses - Private Bungalows & Lux Cabañas",
    boatCoverPhoto: "/contenido/islas/Ibin/catalogo/1.png",
    boatGalleryPhotos: [
      "/contenido/islas/Ibin/catalogo/1.png",
          "/contenido/islas/Ibin/catalogo/2.png",
          "/contenido/islas/Ibin/catalogo/3.png",
          "/contenido/islas/Ibin/catalogo/4.png",
    ],
    boatDescription: {
      es: "Cabañas de lujo frente al mar en Cayos Holandeses con pensión completa y experiencia insular exclusiva.",
      en: "Luxury beachfront bungalows in Dutch Cays with full board and an exclusive island experience.",
    },
    boatLongDescription: {
      es: "Disfruta de una estadía inolvidable en Cayos Holandeses, uno de los sectores más vírgenes y alejados de San Blas. Nuestras cabañas privadas frente al mar ofrecen comodidad, brisa marina constante y pensión completa gourmet con marisco fresco local.",
      en: "Enjoy an unforgettable stay in Dutch Cays, one of the most pristine and remote areas of San Blas. Our private beachfront bungalows offer comfort, ocean breezes, and full-board gourmet dining featuring fresh local seafood.",
    },
    specs: {
      cabins: 4,
      bathrooms: 4,
      doubleBeds: 4,
    },

    // 👨‍✈️ Anfitrión / Staff
    captain: {
      name: "Staff Cayos Holandeses",
      role: { es: "Anfitriones y Guías Locales Guna", en: "Hosts & Local Guna Guides" },
      photoUrl: "/contenido/islas/Ibin/capitan/1.png",
      description: {
        es: "Anfitriones locales comprometidos con brindar hospitalidad de primera clase y guiado en la isla.",
        en: "Local hosts dedicated to providing top-tier hospitality and island guidance.",
      },
      languages: ["Español", "English"],
    },

    // 🍽️ Comida
    dining: {
      description: {
        es: "Pensión completa incluida: desayunos tropicales, almuerzos y cenas a base de pesca fresca del día, mariscos y opciones locales, además de cóctel de bienvenida.",
        en: "Full board included: tropical breakfasts, lunches, and dinners featuring daily catch seafood, local dishes, and a welcome cocktail.",
      },
      photoUrl: "/contenido/islas/Ibin/comidas/1.png",
    },

    // 🏄‍♂️ Actividades
    activities: {
      description: {
        es: "Snorkel en arrecifes de coral virgen, caminatas por la playa, relax en hamacas frente al mar y excursiones adicionales.",
        en: "Pristine reef snorkeling, beach walks, oceanfront hammock lounging, and optional island tours.",
      },
      photoUrls: [
        "/contenido/islas/Ibin/experiencia/1.png",
      ],
    },

    // 💰 Precios y Tabla HTML
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 225,
      tiers: [
        {
          seasonOrType: { es: "Cabaña Estándar (Por Persona)", en: "Standard Bungalow (Per Person)" },
          pricePerNight: 225,
          notes: { es: "Incluye comidas y actividades", en: "Includes meals and activities" },
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Tipo de Cabaña</th>
                <th class="p-3 border">Precio (USD / Persona / Noche)</th>
                <th class="p-3 border">Notas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Cabaña Estándar Frente al Mar</td>
                <td class="p-3 border font-bold text-green-600">$225 USD</td>
                <td class="p-3 border">Pensión completa e impuestos incluidos</td>
              </tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Bungalow Type</th>
                <th class="p-3 border">Price (USD / Person / Night)</th>
                <th class="p-3 border">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Standard Oceanfront Bungalow</td>
                <td class="p-3 border font-bold text-green-600">$225 USD</td>
                <td class="p-3 border">Full board & island taxes included</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    },

    // ✅ Incluye / No Incluye
    includes: [
      { es: "Hospedaje en cabaña privada frente al mar", en: "Private oceanfront bungalow accommodation" },
      { es: "Pensión completa (Desayuno, Almuerzo, Cena)", en: "Full board meals (Breakfast, Lunch, Dinner)" },
      { es: "Cóctel de bienvenida y bebidas de cortesía", en: "Welcome cocktail and complimentary drinks" },
      { es: "Uso de equipo de snorkel y actividades en la isla", en: "Use of snorkeling gear and island activities" },
    ],
    excludes: [
      { es: "Traslado terrestre/marítimo hacia la isla", en: "Ground/boat transfers to the island" },
      { es: "Tasa de entrada al territorio Guna Yala", en: "Guna Yala territory entry fee" },
      { es: "Seguro personal de viaje", en: "Personal travel insurance" },
    ],

    // 🔗 Experiencias Relacionadas
    relatedExperienceIds: [8, 9, 10],

    // Capacidad y Flags
    maxGuests: 8,
    isPrivate: true,
    isSharedAllowed: false,
    featureBadge: { es: "Cabañas de Lujo Frente al Mar", en: "Luxury Beachfront Bungalows" },

    isFeatured: true,
    hasDiscount: false,
  },*/
  // ---------------------------------------------------------------------------
  // 18. Falkor
  // ---------------------------------------------------------------------------
  {
    id: 18,
    slug: "falkor-sailboat-san-blas",
    category: "Sailboat",
    isAvailable: true, 
    location: {
      es: "Islas San Blas, Guna Yala, Panamá",
      en: "San Blas Islands, Guna Yala, Panama",
    },
    seo: {
      title: {
        es: "Alquiler Velero Falkor en San Blas | Sailing the World",
        en: "Charter Falkor Sailboat in San Blas | Sailing the World",
      },
      description: {
        es: "Navega a bordo del velero Falkor en San Blas. Disfruta de una experiencia inolvidable con pensión completa, snorkel y paseos por las islas.",
        en: "Sail aboard the Falkor sailboat in San Blas. Enjoy an unforgettable experience with full board, snorkeling, and island hopping.",
      },
      keywords: [
        { es: "velero Falkor san blas", en: "Falkor sailboat san blas" },
        { es: "charter velero san blas", en: "sailboat charter panama" },
      ],
      openGraph: {
        title: {
          es: "Velero Falkor en San Blas - Experiencia Única en el Caribe",
          en: "Falkor Sailboat in San Blas - Unique Caribbean Experience",
        },
        description: {
          es: "Explora las aguas cristalinas de Guna Yala a bordo del velero Falkor con atención personalizada.",
          en: "Explore the crystal-clear waters of Guna Yala aboard the Falkor sailboat with personalized service.",
        },
        images: [
          "/contenido/veleros/Falkor/catalogo/1.png",
          "/contenido/veleros/Falkor/catalogo/2.png",
          "/contenido/veleros/Falkor/catalogo/3.png",
          "/contenido/veleros/Falkor/catalogo/4.png",
          "/contenido/veleros/Falkor/catalogo/5.png",
          "/contenido/veleros/Falkor/catalogo/6.png",
          "/contenido/veleros/Falkor/catalogo/7.png",
          "/contenido/veleros/Falkor/catalogo/8.png",
        ],
      },
    },
    boatName: "Falkor",
    boatCoverPhoto: "/contenido/veleros/Falkor/catalogo/1.png",
    boatGalleryPhotos: [
          "/contenido/veleros/Falkor/catalogo/1.png",
          "/contenido/veleros/Falkor/catalogo/2.png",
          "/contenido/veleros/Falkor/catalogo/3.png",
          "/contenido/veleros/Falkor/catalogo/4.png",
          "/contenido/veleros/Falkor/catalogo/5.png",
          "/contenido/veleros/Falkor/catalogo/6.png",
          "/contenido/veleros/Falkor/catalogo/7.png",
          "/contenido/veleros/Falkor/catalogo/8.png",
    ],
    boatDescription: {
      es: "Acogedor velero diseñado para ofrecer comodidad, navegación fluida y una estancia inolvidable en San Blas.",
      en: "Cozy sailboat designed to offer comfort, smooth navigation, and an unforgettable stay in San Blas.",
    },
    boatLongDescription: {
      es: "El velero Falkor ofrece una combinación perfecta de confort y aventura en el archipiélago de San Blas. Diseñado para quienes buscan relajarse entre islas paradisíacas con pensión completa y servicio cálido a bordo.",
      en: "The Falkor sailboat delivers the perfect mix of comfort and adventure in the San Blas archipelago. Designed for guests seeking relaxation among paradise islands with full board and warm hospitality.",
    },
    specs: {
      lengthFeet: 40, // Ajustar según PDF
      cabins: 2,
      bathrooms: 1,
      doubleBeds: 2,
    },
    captain: {
      name: "Falkor Captain & Crew",
      role: {
        es: "Capitán y Anfitrión",
        en: "Captain & Host",
      },
      photoUrl: "/contenido/veleros/Falkor/capitan/1.png",
      description: {
        es: "Tripulación experimentada enfocada en brindar una navegación segura y una cálida atención.",
        en: "Experienced crew dedicated to providing safe navigation and warm hospitality.",
      },
      languages: ["Español", "English"],
    },
    dining: {
      description: {
        es: "Pensión completa: 3 comidas diarias elaboradas a bordo con ingredientes frescos y mariscos locales, además de bebidas y snacks.",
        en: "Full board: 3 daily meals prepared onboard with fresh local ingredients and seafood, plus drinks and snacks.",
      },
      photoUrl: "/contenido/veleros/Falkor/comidas/1.png",
    },
    activities: {
      description: {
        es: "Navegación diaria entre islas, equipo de snorkel, paddleboard y paseos a playas vírgenes de Guna Yala.",
        en: "Daily island hopping, snorkeling gear, paddleboard, and trips to pristine Guna Yala beaches.",
      },
      photoUrls: [
        "/contenido/veleros/Falkor/experiencia/1.png",
      ],
    },
    pricing: {
      currency: "USD",
      basePricePerPersonPerDay: 300,
      tiers: [
        {
          seasonOrType: { es: "Charter Privado (2 Huéspedes)", en: "Private Charter (2 Guests)" },
          guestsCount: 2,
          pricePerNight: 600,
          notes: { es: "Precio por noche para 2 personas", en: "Price per night for 2 guests" },
        },
      ],
      htmlTableContent: {
        es: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Modalidad / Ocupación</th>
                <th class="p-3 border">Precio (USD / Noche)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Charter Privado (2 Huéspedes)</td>
                <td class="p-3 border font-bold text-green-600">$600 USD</td>
              </tr>
            </tbody>
          </table>
        `,
        en: `
          <table class="w-full border-collapse border border-slate-200 text-left text-sm">
            <thead>
              <tr class="bg-slate-100">
                <th class="p-3 border">Type / Occupancy</th>
                <th class="p-3 border">Price (USD / Night)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border">Private Charter (2 Guests)</td>
                <td class="p-3 border font-bold text-green-600">$600 USD</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    },
    includes: [
      { es: "Servicio de capitán y tripulación", en: "Captain and crew service" },
      { es: "Pensión completa (3 comidas diarias, snacks y bebidas)", en: "Full board (3 daily meals, snacks, and drinks)" },
      { es: "Uso de equipos de snorkel y paddleboard", en: "Use of snorkeling and paddleboard equipment" },
      { es: "Ropa de cama y toallas de baño", en: "Bed linens and bath towels" },
    ],
    excludes: [
      { es: "Transporte hacia/desde San Blas", en: "Transport to/from San Blas" },
      { es: "Impuestos de entrada a Guna Yala", en: "Guna Yala entrance fees" },
      { es: "Seguro personal de viaje", en: "Personal travel insurance" },
    ],
    relatedExperienceIds: [1, 4, 7],
    maxGuests: 4,
    isPrivate: true,
    isSharedAllowed: false,
    featureBadge: { es: "Velero Clásico", en: "Classic Sailboat" },
    isFeatured: false,
    hasDiscount: false,
  },
];

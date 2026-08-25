export interface Package {
  id: string;
  category: string;
  name: string;
  priceFrom: string;
  duration: string;
  delivery: string;
  includes: string[];
  highlighted?: boolean;
}

export const packages: Package[] = [
  {
    id: "retrato-esencial",
    category: "Retratos",
    name: "Esencial",
    priceFrom: "$2,800 MXN",
    duration: "1 hora en locación",
    delivery: "15 fotografías editadas en 10 días hábiles",
    includes: [
      "1 locación a elegir",
      "1 cambio de vestuario",
      "Galería privada en línea",
      "Descarga en alta resolución",
    ],
  },
  {
    id: "retrato-graduacion",
    category: "Retratos",
    name: "Graduación",
    priceFrom: "$4,200 MXN",
    duration: "2 horas, estudio o locación",
    delivery: "30 fotografías editadas en 10 días hábiles",
    includes: [
      "2 locaciones o combinación estudio + exterior",
      "2 cambios de vestuario",
      "Retrato individual y grupo reducido",
      "Galería privada + descarga en alta resolución",
    ],
    highlighted: true,
  },
  {
    id: "boda-intima",
    category: "Bodas",
    name: "Íntima",
    priceFrom: "$14,500 MXN",
    duration: "Cobertura de 6 horas",
    delivery: "300+ fotografías editadas en 4 semanas",
    includes: [
      "Ceremonia y recepción",
      "1 fotógrafo principal",
      "Galería privada por folio",
      "Descarga total en alta resolución",
    ],
  },
  {
    id: "boda-completa",
    category: "Bodas",
    name: "Completa",
    priceFrom: "$24,000 MXN",
    duration: "Cobertura de 10 horas",
    delivery: "500+ fotografías editadas en 4 semanas",
    includes: [
      "Preparativos, ceremonia y recepción",
      "2 fotógrafos",
      "Sesión de compromiso incluida",
      "Galería privada por folio + descarga total",
    ],
    highlighted: true,
  },
  {
    id: "evento-social",
    category: "Eventos",
    name: "Social",
    priceFrom: "$6,500 MXN",
    duration: "Cobertura de 3 horas",
    delivery: "150+ fotografías editadas en 2 semanas",
    includes: [
      "1 fotógrafo",
      "Cobertura documental del evento",
      "Galería privada por folio",
      "Descarga en alta resolución",
    ],
  },
  {
    id: "evento-corporativo",
    category: "Eventos",
    name: "Corporativo",
    priceFrom: "$9,800 MXN",
    duration: "Cobertura de 5 horas",
    delivery: "Entrega express en 72 horas",
    includes: [
      "1–2 fotógrafos según aforo",
      "Retratos de marca en el evento",
      "Entrega express para redes",
      "Galería privada + licencia de uso comercial",
    ],
  },
  {
    id: "comercial-producto",
    category: "Comercial",
    name: "Producto",
    priceFrom: "$5,200 MXN",
    duration: "Sesión de medio día en estudio",
    delivery: "20 fotografías editadas en 5 días hábiles",
    includes: [
      "Estudio con montaje incluido",
      "Hasta 8 productos o looks",
      "Retoque de alta gama",
      "Licencia de uso comercial",
    ],
  },
  {
    id: "comercial-campana",
    category: "Comercial",
    name: "Campaña",
    priceFrom: "$18,000 MXN",
    duration: "Jornada completa, estudio o locación",
    delivery: "40+ fotografías editadas en 10 días hábiles",
    includes: [
      "Dirección de arte incluida",
      "Casting de talento (opcional)",
      "Set de imágenes para campaña digital",
      "Licencia de uso comercial extendida",
    ],
    highlighted: true,
  },
];

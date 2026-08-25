export interface FolioPhoto {
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
}

export interface Folio {
  code: string;
  clientName: string;
  sessionTitle: string;
  sessionDate: string;
  status: "active" | "expired";
  expiresOn: string;
  photos: FolioPhoto[];
}

// Base de datos simulada. En producción esto vive en el backend
// (o Supabase) y se consulta por folio con autenticación real.
export const folios: Folio[] = [
  {
    code: "SOFIA-DIEGO-2026",
    clientName: "Sofía & Diego",
    sessionTitle: "Boda Sofía & Diego",
    sessionDate: "14 de febrero, 2026",
    status: "active",
    expiresOn: "14 de agosto, 2026",
    photos: [
      { src: "/images/bodas/bodas-01.jpg", alt: "Novios con ramo a contraluz", orientation: "landscape" },
      { src: "/images/bodas/bodas-02.jpg", alt: "Manos entrelazadas con anillos", orientation: "landscape" },
      { src: "/images/bodas/bodas-05.jpg", alt: "Novios tomados de la mano", orientation: "portrait" },
      { src: "/images/bodas/bodas-04.jpg", alt: "Beso entre pétalos", orientation: "portrait" },
      { src: "/images/bodas/bodas-03.jpg", alt: "Mesa de banquete con flores", orientation: "landscape" },
      { src: "/images/bodas/bodas-06.jpg", alt: "Ramo colgando del arco", orientation: "portrait" },
      { src: "/images/bodas/bodas-09.jpg", alt: "Glorieta de ceremonia", orientation: "portrait" },
      { src: "/images/bodas/bodas-07.jpg", alt: "Mesa larga con candelabros", orientation: "portrait" },
      { src: "/images/bodas/bodas-08.jpg", alt: "Anillos sobre arreglo floral", orientation: "landscape" },
    ],
  },
  {
    code: "DERECHO-TEC-2026",
    clientName: "Generación Derecho Tec",
    sessionTitle: "Graduación Derecho Tec 2026",
    sessionDate: "3 de junio, 2026",
    status: "active",
    expiresOn: "3 de diciembre, 2026",
    photos: [
      { src: "/images/retratos/retratos-01.jpg", alt: "Retrato de estudio", orientation: "portrait" },
      { src: "/images/retratos/retratos-03.jpg", alt: "Retrato con fondo gris", orientation: "portrait" },
      { src: "/images/retratos/retratos-07.jpg", alt: "Retrato corporativo", orientation: "portrait" },
      { src: "/images/retratos/retratos-06.jpg", alt: "Retrato casual sonriendo", orientation: "portrait" },
      { src: "/images/retratos/retratos-05.jpg", alt: "Retrato editorial con color", orientation: "portrait" },
      { src: "/images/retratos/retratos-02.jpg", alt: "Retrato callejero", orientation: "portrait" },
    ],
  },
  {
    code: "ANA-15-2025",
    clientName: "Ana Sofía",
    sessionTitle: "XV Años Ana Sofía",
    sessionDate: "22 de noviembre, 2025",
    status: "expired",
    expiresOn: "22 de mayo, 2026",
    photos: [
      { src: "/images/retratos/retratos-04.jpg", alt: "Retrato artístico", orientation: "landscape" },
      { src: "/images/eventos/eventos-06.jpg", alt: "Liberación de globos", orientation: "portrait" },
      { src: "/images/eventos/eventos-05.jpg", alt: "Brindis entre invitados", orientation: "portrait" },
    ],
  },
];

export function findFolio(code: string): Folio | undefined {
  const normalized = code.trim().toUpperCase();
  return folios.find((f) => f.code === normalized);
}

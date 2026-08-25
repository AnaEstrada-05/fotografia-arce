export type Category = "bodas" | "retratos" | "eventos" | "comercial";

export interface PortfolioImage {
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
  featured?: boolean;
}

export interface CategoryInfo {
  slug: Category;
  label: string;
  eyebrow: string;
  description: string;
  cover: string;
}

export const categories: CategoryInfo[] = [
  {
    slug: "bodas",
    label: "Bodas",
    eyebrow: "Ruta 01",
    description:
      "Ceremonias, banquetes y los minutos entre ambos. Cobertura documental con dirección de arte editorial.",
    cover: "/images/bodas/bodas-05.jpg",
  },
  {
    slug: "retratos",
    label: "Retratos",
    eyebrow: "Ruta 02",
    description:
      "Graduaciones, sesiones individuales y de familia. Estudio o locación, siempre sobre la persona.",
    cover: "/images/retratos/retratos-05.jpg",
  },
  {
    slug: "eventos",
    label: "Eventos",
    eyebrow: "Ruta 03",
    description:
      "Cobertura social y corporativa con ritmo documental — el evento contado como sucede.",
    cover: "/images/eventos/eventos-01.jpg",
  },
  {
    slug: "comercial",
    label: "Comercial",
    eyebrow: "Ruta 04",
    description:
      "Marca, producto y editorial de moda. Imagen con intención de campaña.",
    cover: "/images/comercial/comercial-02.jpg",
  },
];

export const portfolioImages: Record<Category, PortfolioImage[]> = {
  bodas: [
    { src: "/images/bodas/bodas-01.jpg", alt: "Novios sosteniendo un ramo a contraluz al atardecer", orientation: "landscape", featured: true },
    { src: "/images/bodas/bodas-02.jpg", alt: "Manos entrelazadas de los novios con los anillos", orientation: "landscape" },
    { src: "/images/bodas/bodas-05.jpg", alt: "Novios tomados de la mano, sombra proyectada en el pasto", orientation: "portrait", featured: true },
    { src: "/images/bodas/bodas-04.jpg", alt: "Beso de los novios entre pétalos lanzados por los invitados", orientation: "portrait" },
    { src: "/images/bodas/bodas-03.jpg", alt: "Mesa de banquete vestida con flores silvestres", orientation: "landscape" },
    { src: "/images/bodas/bodas-06.jpg", alt: "Ramo de novia colgando del arco de ceremonia", orientation: "portrait" },
    { src: "/images/bodas/bodas-09.jpg", alt: "Glorieta de ceremonia decorada con flores", orientation: "portrait", featured: true },
    { src: "/images/bodas/bodas-07.jpg", alt: "Mesa larga con candelabros durante la recepción", orientation: "portrait" },
    { src: "/images/bodas/bodas-08.jpg", alt: "Anillos de bodas sobre un arreglo floral rosa", orientation: "landscape" },
  ],
  retratos: [
    { src: "/images/retratos/retratos-01.jpg", alt: "Retrato de estudio de un chef con los brazos cruzados", orientation: "portrait", featured: true },
    { src: "/images/retratos/retratos-02.jpg", alt: "Retrato callejero de una joven con chamarra de mezclilla", orientation: "portrait" },
    { src: "/images/retratos/retratos-05.jpg", alt: "Retrato editorial de una mujer con fondo de color", orientation: "portrait", featured: true },
    { src: "/images/retratos/retratos-03.jpg", alt: "Retrato de un hombre con fondo gris neutro", orientation: "portrait" },
    { src: "/images/retratos/retratos-06.jpg", alt: "Retrato casual de un hombre sentado sonriendo", orientation: "portrait" },
    { src: "/images/retratos/retratos-04.jpg", alt: "Retrato artístico de una mujer con el cabello extendido", orientation: "landscape" },
    { src: "/images/retratos/retratos-07.jpg", alt: "Retrato corporativo de un hombre con lentes", orientation: "portrait" },
  ],
  eventos: [
    { src: "/images/eventos/eventos-01.jpg", alt: "Confeti cayendo sobre el público en un concierto", orientation: "landscape", featured: true },
    { src: "/images/eventos/eventos-02.jpg", alt: "Manos levantadas del público durante un concierto", orientation: "landscape" },
    { src: "/images/eventos/eventos-07.jpg", alt: "Ceremonia con decoración floral colorida", orientation: "portrait", featured: true },
    { src: "/images/eventos/eventos-03.jpg", alt: "Panel de conversación en una galería de arte", orientation: "landscape" },
    { src: "/images/eventos/eventos-06.jpg", alt: "Liberación de globos durante una celebración", orientation: "portrait" },
    { src: "/images/eventos/eventos-04.jpg", alt: "Sesión de trabajo colaborativo en una reunión corporativa", orientation: "landscape" },
    { src: "/images/eventos/eventos-05.jpg", alt: "Brindis con copas de vino entre invitados", orientation: "portrait" },
    { src: "/images/eventos/eventos-08.jpg", alt: "Brindis grupal durante una celebración", orientation: "landscape" },
  ],
  comercial: [
    { src: "/images/comercial/comercial-01.jpg", alt: "Interior de una tienda de ropa con exhibición de producto", orientation: "landscape", featured: true },
    { src: "/images/comercial/comercial-02.jpg", alt: "Retrato editorial de moda sobre fondo oscuro", orientation: "portrait", featured: true },
    { src: "/images/comercial/comercial-03.jpg", alt: "Editorial de moda con bolsas de compras", orientation: "portrait" },
    { src: "/images/comercial/comercial-04.jpg", alt: "Fotografía de producto: playera blanca lisa", orientation: "portrait" },
    { src: "/images/comercial/comercial-05.jpg", alt: "Retrato corporativo editorial de un hombre de traje", orientation: "portrait" },
  ],
};

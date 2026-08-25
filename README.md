# Fotografía Arce

Sitio web y portal privado de clientes para un estudio de fotografía editorial en Chihuahua, Chih. — portafolio (bodas, retratos, eventos, comercial), servicios y precios, y un portal de descarga de fotos por folio.

## Stack

- React + TypeScript + Vite
- React Router
- Framer Motion
- CSS a la medida sobre un sistema de tokens (`src/styles/tokens.css`)

## Identidad visual

El sistema deriva del apellido **Arce** (maple): el anillo de crecimiento es el motivo de firma que aparece en dividers, loaders y el portal de folios. Paleta de carbón / hueso / ámbar. Tipografía Bodoni Moda (display) + Archivo (body) + IBM Plex Mono (datos/folios).

## Desarrollo

```bash
npm install
npm run dev
```

## Estructura

- `src/pages/` — Home, Portafolio (índice + categorías), Servicios, Sobre mí, Mis Fotos (portal)
- `src/components/` — Nav, Footer, MasonryGrid, Lightbox, RingMotif, Reveal, ContextCursor
- `src/data/` — datos de portafolio, paquetes de servicios y folios de sesión (simulados)
- `public/images/` — fotografías por categoría

## Portal de folios (`/mis-fotos`)

Actualmente usa datos simulados (`src/data/folios.ts`) con los 4 estados reales de UI: código inválido, cargando, expirado y éxito (galería + descarga individual/masiva). Folios de prueba: `SOFIA-DIEGO-2026`, `DERECHO-TEC-2026`, `ANA-15-2025` (vencido).

Conectar a un backend real (folios, autenticación, almacenamiento de fotos) es la siguiente fase.

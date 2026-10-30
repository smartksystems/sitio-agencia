# SMART K SYSTEMS – sitio-agencia
Astro 5 + Tailwind CSS 4 · sitio 100 % estático (SSG) · sin React ni JS de framework.

## Puesta en marcha
1. `npm install`
2. `npm run assets`  → descarga el logo e imágenes originales de agenciasks.com a `/public` (reemplaza el logo provisional). Hacer commit de lo descargado.
3. `npm run dev` para trabajar · `npm run build` genera `/dist`.

## Publicar
    git init && git add . && git commit -m "Sitio SMART K SYSTEMS"
    gh repo create smartksystems/sitio-agencia --public --source=. --push
Luego importa el repositorio en Vercel (detecta Astro solo).

## Dónde editar
- `src/config/site.ts`: contacto, redes, horarios, menú, enlaces de WhatsApp.
- `src/data/content.ts`: textos de servicios, destrezas, clientes y la lista `BANNERS` del portafolio.
- `src/layouts/Layout.astro`: SEO (title, description, canonical, Open Graph, JSON-LD).
- `src/styles/global.css`: colores y tipografías (`@theme`).

## Rutas
/ · /servicios/ · /soluciones/ · /portafolio/socios/ · /portafolio/banners/ · /sobre-nosotros/ · /sobre-nosotros/trabaja-con-nosotros/ · /contacto/ · 404

## Indexación
`public/robots.txt`, `public/favicon.ico` y `sitemap-index.xml` (lo genera Astro al compilar, excluye la 404).

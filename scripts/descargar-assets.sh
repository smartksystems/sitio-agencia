#!/usr/bin/env sh
# Descarga el logo e imágenes originales de agenciasks.com a /public.
# Uso: npm run assets   (ejecutar una vez, luego hacer commit de los archivos)
set -e
B="https://agenciasks.com/wp-content/uploads"
get() { curl -fsSL "$1" -o "$2" && echo "ok  $2" || echo "FALLÓ $2 ($1)"; }
get "$B/2020/06/cropped-logo_sks_startransparente-270x270.png" public/logo.png
get "$B/2020/07/domain-registration.png" public/images/servicio-identidad.png
get "$B/2020/07/startup.png" public/images/servicio-marketing.png
get "$B/2020/07/social-media-4698431_1920-1024x683.jpg" public/images/redes-sociales.jpg
get "$B/2026/07/logo-yan-png.png" public/images/clientes/yan-calefones.png
get "$B/2026/07/Aster-1024x384.jpg" public/images/clientes/aster-ecuador.jpg
get "$B/2026/07/Captura-de-pantalla-2026-07-23-140726-e1785419310325.png" public/images/clientes/galeria-moncayo.png
get "$B/2026/07/logotipo-tecnocostex-1024x827.jpeg" public/images/clientes/tecnocostex.jpeg
get "$B/2026/09/logo-cerein.jpeg" public/images/clientes/cerein.jpeg

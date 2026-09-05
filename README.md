# Aguamarina Piletas — sitio web

Sitio de una sola página (HTML + CSS + JS, sin dependencias, sin build).

## Cómo verlo

Abrí `index.html` directamente en el navegador, o serví la carpeta con cualquier
servidor estático (por ejemplo `npx serve` o la extensión "Live Server" de VS Code).
No necesita instalación ni build.

## Qué personalizar antes de publicar

Todo lo que hay que tocar está al principio de `js/main.js`:

### 1. Número de WhatsApp
```js
const WHATSAPP_NUMBER = "5493790000000";
```
Reemplazá por tu número real, formato `549` + código de área + número, sin espacios ni signos.

### 2. Piletas (array `pools`)
Cada pileta es un objeto. Para agregar, editar o quitar un modelo, solo tenés que
modificar este array — el resto del sitio (tarjetas, filtros, modal, mensajes de
WhatsApp) se genera automáticamente:
```js
{
  id: 1,
  name: "Pileta Modelo Roma",
  image: "URL o assets/images/roma.jpg",
  dimensions: "8m x 4m",
  depth: "1,50m de profundidad",
  size: "grande",        // chica | mediana | grande
  shape: "rectangular",  // rectangular | otras-formas
  description: "...",
  features: ["...", "..."],
  price: "Consultar precio"  // o un precio real, ej. "USD 4.500"
}
```

### 3. Imágenes
Actualmente las fotos usan URLs de stock (Unsplash) como placeholder, claramente
reemplazables. Para usar tus propias fotos:
1. Guardalas dentro de `assets/images/`.
2. Cambiá el campo `image` de cada pileta (y las de `galleryImages`) por la ruta
   relativa, ej. `"assets/images/roma.jpg"`.

Si una imagen no carga, el sitio muestra automáticamente un fondo de color de
respaldo (no se rompe el diseño).

### 4. Galería y testimonios
Los arrays `galleryImages` y `testimonials` funcionan igual: agregá, editá o
quitá elementos sin tocar el HTML.

### 5. Datos de contacto y footer
Editá directamente en `index.html`, sección `<footer>`: teléfono, email y
dirección son de ejemplo.

## Notas técnicas

- Sin frameworks ni dependencias de build — HTML, CSS y JS vanilla.
- Mobile-first, responsive hasta desktop.
- Accesibilidad: foco visible, `aria-label`/`aria-expanded` en menú y modales,
  respeta `prefers-reduced-motion`.
- SEO básico: meta title/description, Open Graph, `alt` en todas las imágenes,
  `loading="lazy"` en fotos fuera del viewport inicial.

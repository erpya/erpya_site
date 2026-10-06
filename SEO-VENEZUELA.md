# Arquitectura comercial Venezuela

Las nuevas páginas reutilizan `PageHero`, `Section`, `SectionHeading`, `Layout`, colores, temas y la imagen local `laptop-adempiere.png`. Cada URL tiene un idioma editorial fijo; el selector del sitio conserva su función en navegación y páginas existentes. No se declaran traducciones `hreflang` entre páginas con intenciones distintas.

| Ruta | Idioma | Intención principal |
| --- | --- | --- |
| `/erp-venezuela` | ES | ERP para gestión y expansión en Venezuela |
| `/invest-in-venezuela-erp` | EN | Entrada al mercado y plataforma local para inversionistas |
| `/sap-alternative-venezuela` | EN | Evaluación de alternativa a SAP o coexistencia local |
| `/venezuela-erp-localization` | EN | Localización contable, multimoneda, nómina e interfaces |
| `/manufacturing-erp-venezuela` | ES | Manufactura, materiales y órdenes de producción |
| `/oil-gas-erp-venezuela` | EN | Administración de empresas de energía y servicios |
| `/agroindustry-erp-venezuela` | ES | Recepción, transformación y comercialización agroindustrial |

`src/content/venezuela.ts` centraliza contenido, metadatos, enlaces relacionados, solicitud de evaluación y schema. La cobertura se basa en el contenido existente de `Adempiere.tsx`, `coverage-data.ts`, `Servicio.tsx` y en las capacidades indicadas por el usuario. No se añaden testimonios, cifras, certificaciones ni datos de prospectos. No se promete compatibilidad automática con SAP, ahorro garantizado ni cobertura de sistemas especializados. La localización se presenta como alcance sujeto a validación, sin afirmar cumplimiento general de normas.

Los enlaces de evaluación abren el WhatsApp comercial existente con texto editable y contextual. También se ofrece `info@erpya.com`. No se envía una solicitud automáticamente.

## Archivos

Nuevos:
- `src/content/venezuela.ts`: contenido propio y arquitectura de enlaces.
- `src/pages/VenezuelaLanding.tsx`: plantilla editorial reutilizable.
- `src/components/LandingSeo.tsx`: metadatos y limpieza al navegar.
- `src/entry-prerender.tsx`: renderizado de producción sin navegador.
- `scripts/prerender.mjs`: HTML estático por URL, sitemap y robots.
- `scripts/check-seo.mjs`: validación del HTML y assets generados.
- `SEO-VENEZUELA.md`: esta documentación.

Modificados:
- `src/App.tsx`: siete rutas explícitas antes del catch-all; rutas reutilizables para prerender.
- `src/components/Layout.tsx`: descubrimiento desde menú ERP y footer; acceso rápido al contenido y menú móvil desplazable.
- `src/lib/i18n.tsx`: soporte de renderizado estático e idioma inicial de landings internacionales.
- `src/index.css`: foco visible, ajuste de texto y movimiento reducido.
- `index.html`: idioma inicial español para páginas existentes.
- `vite.config.ts`: manifest de assets para Open Graph.
- `package.json`: build con prerender y comando de verificación.
- `.gitignore`: salida temporal de prerender.

## Validación local

Desde `/Users/josebotero/Documents/erpya_site`:

```sh
npm run build
npm run check:seo
npm run preview -- --host 127.0.0.1 --port 4173
```

Visitar `http://127.0.0.1:4173/invest-in-venezuela-erp` y las otras seis rutas. La vista de producción es necesaria para comprobar el HTML estático; `npm run dev` sirve la SPA de desarrollo. Revisar navegación interna, FAQs con teclado, CTAs, tema claro/oscuro y anchos móvil/tablet/escritorio.

El build produce `dist/<ruta>/index.html`, `dist/sitemap.xml` y `dist/robots.txt`. La publicación existente de GitHub Pages utiliza `npm run build`, por lo que recoge estos archivos sin cambios de hosting. El sitemap también incluye las rutas públicas actuales. No se generan fechas de actualización ficticias ni schema de reseñas o precios. Schema incluye WebPage, Service y BreadcrumbList; las FAQs visibles no prometen resultados enriquecidos.

Las páginas quedan implementadas localmente. Publicar mediante el proceso habitual del repositorio y verificar las URLs en producción antes de enviar el sitemap a Search Console. Este trabajo no realiza push ni despliegue.

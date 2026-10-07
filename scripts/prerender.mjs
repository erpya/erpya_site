import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { load } from 'cheerio'
import { render, landings, siteUrl, structuredData } from '../.prerender/entry-prerender.js'

const template = await readFile('dist/index.html', 'utf8')
const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'))
const image = Object.values(manifest).find(asset => asset.src === 'src/assets/laptop-adempiere.png')?.file
if (!image) throw new Error('ADempiere social image is missing from the build manifest')

// Páginas núcleo del sitio (no son "landings" de Venezuela, son las páginas
// principales de navegación). Título y descripción tomados literalmente del
// copy real en src/lib/i18n.tsx y src/pages/ErpAiKnowledge.tsx — no se inventa
// contenido nuevo, solo se expone como meta/HTML estático lo que el sitio ya dice.
const corePages = [
  { slug: '', lang: 'es',
    title: 'ERPyA — ERP, CRM y BI implementados por expertos en Venezuela y Latinoamérica',
    description: 'ERP, CRM, BI e Infraestructura — implementados por expertos con más de 15 años de experiencia en Venezuela y Latinoamérica.' },
  { slug: 'adempiere', lang: 'es',
    title: 'ADempiere ERP implementado por expertos | ERPyA',
    description: 'ADempiere es una plataforma ERP/CRM/SCM con más de 15 años de evolución. ERPyA lleva más de 100 empresas implementadas en Venezuela y Latinoamérica.' },
  { slug: 'odoo', lang: 'es',
    title: 'Odoo ERP implementado por expertos | ERPyA',
    description: 'Odoo es una plataforma modular todo-en-uno con más de 30 aplicaciones integradas. ERPyA la implementa y adapta a la realidad de cada empresa en Venezuela y Latinoamérica.' },
  { slug: 'nube', lang: 'es',
    title: '¿Qué es un Software ERP en la Nube? | ERPyA',
    description: 'La computación en la Nube permite llevar los sistemas de gestión empresarial fuera de sus servidores físicos. ERPyA le acompaña en cada opción.' },
  { slug: 'nosotros', lang: 'es',
    title: 'Acerca de ERPyA',
    description: 'Conozca más sobre nuestra visión y compromiso tecnológico con las empresas de Latinoamérica.' },
  { slug: 'erp-ai-knowledge', lang: 'es',
    title: 'ERP AI Knowledge | ERPyA',
    description: 'Estamos desarrollando una memoria técnica inteligente que comprende el contexto de tus repositorios, acompaña las decisiones del equipo y reutiliza lo aprendido en el próximo desafío.' },
]

// Páginas de servicio (ruta :serviceId en App.tsx). Título y descripción
// tomados literalmente de SERVICIOS en src/pages/Servicio.tsx (headline/desc.es).
// 'odoo' se excluye porque ya tiene página propia en corePages.
const servicePages = [
  { slug: 'docker', lang: 'es', title: 'Docker | ERPyA',
    description: 'ERPyA diseña y administra entornos Docker garantizando ambientes consistentes desde desarrollo hasta producción.' },
  { slug: 'kubernetes', lang: 'es', title: 'Kubernetes | ERPyA',
    description: 'ERPyA despliega y opera clústeres Kubernetes que garantizan escalabilidad automática y resiliencia.' },
  { slug: 'power-bi', lang: 'es', title: 'Power BI | ERPyA',
    description: 'Power BI conecta sus datos de ADempiere, Odoo y otras fuentes para producir reportes visuales y dashboards ejecutivos en tiempo real.' },
  { slug: 'apache-superset', lang: 'es', title: 'Apache Superset | ERPyA',
    description: 'Apache Superset es la plataforma de visualización de datos open-source de mayor crecimiento. ERPyA lo despliega sin costos de licencia.' },
  { slug: 'n8n', lang: 'es', title: 'N8N | ERPyA',
    description: 'N8N conecta sus sistemas ERP con cualquier API, base de datos o servicio externo. ERPyA diseña flujos de integración a medida.' },
  { slug: 'pentaho', lang: 'es', title: 'Pentaho | ERPyA',
    description: 'Pentaho es la plataforma líder para integración de datos y analítica empresarial conectada a su ERP.' },
  { slug: 'ai-docs', lang: 'es', title: 'IA · Documentos | ERPyA',
    description: 'Nuestra integración de IA lee facturas, órdenes de compra y documentos digitalizados, extrae los datos relevantes y los carga directamente a su ERP.' },
  { slug: 'ai-quotes', lang: 'es', title: 'IA · Cotizaciones | ERPyA',
    description: 'Compare cotizaciones de múltiples proveedores en segundos. La IA analiza precios, plazos y condiciones, y le sugiere la mejor opción.' },
  { slug: 'ai-bank', lang: 'es', title: 'IA · Extractos | ERPyA',
    description: 'Nuestra inteligencia artificial procesa sus extractos bancarios en PDF o Excel, identificando transacciones y conciliando automáticamente en su ERP.' },
  { slug: 'seniat', lang: 'es', title: 'SENIAT | ERPyA',
    description: 'Cargue datos de proveedores y clientes con solo el RIF. Nuestra integración consulta el portal del SENIAT, valida la información y crea el socio automáticamente.' },
  { slug: 'bcv', lang: 'es', title: 'BCV | ERPyA',
    description: 'Cada mañana, nuestra integración consulta el portal del Banco Central de Venezuela y actualiza la tasa en su ERP.' },
  { slug: 'seniat-homologacion', lang: 'es', title: 'Homologación SENIAT | ERPyA',
    description: 'Nuestra solución ADempiere ERP está oficialmente autorizada y homologada por el SENIAT para la emisión de facturas y otros documentos fiscales en Venezuela según Providencia Administrativa N° SNAT/2024/000121.' },
  { slug: 'the-factory-hk', lang: 'es', title: 'Facturación Electrónica con The Factory HK | ERPyA',
    description: 'Integramos su ERP directamente con The Factory HK para la emisión automática de facturas electrónicas, cumpliendo con todas las normativas fiscales sin procesos manuales.' },
]

function siteStructuredData(entry) {
  const url = entry.slug ? `${siteUrl}/${entry.slug}` : siteUrl
  return {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'Organization', '@id': `${siteUrl}#organization`, name: 'ERPyA', alternateName: 'ERP Consultores y Asociados, C.A.', url: siteUrl, foundingDate: '2012' },
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: entry.title, description: entry.description, inLanguage: entry.lang, isPartOf: { '@id': `${siteUrl}#organization` } },
    ],
  }
}

// Escribe una ruta pre-renderizada: home sobrescribe dist/index.html
// directamente, el resto va en dist/<slug>/index.html.
async function writePage(entry, structured) {
  const $ = load(template)
  $('html').attr('lang', entry.lang)
  $('title').text(entry.title)
  $('#root').html(render(entry.slug ? `/${entry.slug}` : '/', entry.lang))
  const add = (tag, attrs, content) => {
    const element = $(`<${tag}>`).attr({ ...attrs, 'data-landing-seo': '' })
    if (content) element.text(content)
    $('head').append(element)
  }
  const url = entry.slug ? `${siteUrl}/${entry.slug}` : siteUrl
  add('meta', { name: 'description', content: entry.description })
  add('link', { rel: 'canonical', href: url })
  const og = { title: entry.title, description: entry.description, type: 'website', url, site_name: 'ERPya', locale: entry.lang === 'en' ? 'en_US' : 'es_VE', image: `${siteUrl}/${image}`, 'image:alt': 'ADempiere ERP · ERPya' }
  Object.entries(og).forEach(([key, value]) => add('meta', { property: `og:${key}`, content: value }))
  add('meta', { name: 'twitter:card', content: 'summary_large_image' })
  add('script', { type: 'application/ld+json' }, JSON.stringify(structured).replace(/</g, '\\u003c'))
  // Server-rendered animation content must be visible before JavaScript runs.
  $('#root [style]').each((_, element) => {
    const style = $(element).attr('style').replace(/opacity:0(;|$)/g, 'opacity:1$1').replace(/transform:translateY\([^)]+\)(;|$)/g, 'transform:none$1')
    $(element).attr('style', style)
  })
  if (entry.slug) {
    await mkdir(`dist/${entry.slug}`, { recursive: true })
    await writeFile(`dist/${entry.slug}/index.html`, $.html())
  } else {
    await writeFile('dist/index.html', $.html())
  }
}

for (const page of landings) await writePage(page, structuredData(page))
for (const page of corePages) await writePage(page, siteStructuredData(page))
for (const page of servicePages) await writePage(page, siteStructuredData(page))
// Include all explicitly configured public routes, including dynamic service entries.
const app = await readFile('src/App.tsx', 'utf8')
const services = await readFile('src/pages/Servicio.tsx', 'utf8')
const serviceBlock = services.split('const SERVICIOS:')[1].split('const BADGE_LABELS')[0]
const routes = new Set(['', ...landings.map(page => page.slug)])
for (const match of app.matchAll(/<Route path="([^":]*)"/g)) if (match[1] !== '/') routes.add(match[1])
for (const match of serviceBlock.matchAll(/^  (?:'([^']+)'|([a-z0-9-]+)): \{/gm)) routes.add(match[1] || match[2])
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;')
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...routes].map(route => `  <url><loc>${escape(`${siteUrl}/${route}`)}</loc></url>`).join('\n')}\n</urlset>\n`)
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
await rm('.prerender', { recursive: true, force: true })
console.log(`Prerendered ${landings.length} landing pages; sitemap includes ${routes.size} routes.`)

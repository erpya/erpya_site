import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { load } from 'cheerio'
import { render, landings, siteUrl, structuredData } from '../.prerender/entry-prerender.js'

const template = await readFile('dist/index.html', 'utf8')
const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'))
const image = Object.values(manifest).find(asset => asset.src === 'src/assets/laptop-adempiere.png')?.file
if (!image) throw new Error('ADempiere social image is missing from the build manifest')
for (const page of landings) {
  const $ = load(template)
  $('html').attr('lang', page.lang)
  $('title').text(page.title)
  $('#root').html(render(`/${page.slug}`, page.lang))
  const add = (tag, attrs, content) => {
    const element = $(`<${tag}>`).attr({ ...attrs, 'data-landing-seo': '' })
    if (content) element.text(content)
    $('head').append(element)
  }
  add('meta', { name: 'description', content: page.description })
  add('link', { rel: 'canonical', href: `${siteUrl}/${page.slug}` })
  const og = { title: page.title, description: page.description, type: 'website', url: `${siteUrl}/${page.slug}`, site_name: 'ERPya', locale: page.lang === 'en' ? 'en_US' : 'es_VE', image: `${siteUrl}/${image}`, 'image:alt': 'ADempiere ERP · ERPya' }
  Object.entries(og).forEach(([key, value]) => add('meta', { property: `og:${key}`, content: value }))
  add('meta', { name: 'twitter:card', content: 'summary_large_image' })
  add('script', { type: 'application/ld+json' }, JSON.stringify(structuredData(page)).replace(/</g, '\\u003c'))
  // Server-rendered animation content must be visible before JavaScript runs.
  $('#root [style]').each((_, element) => {
    const style = $(element).attr('style').replace(/opacity:0(;|$)/g, 'opacity:1$1').replace(/transform:translateY\([^)]+\)(;|$)/g, 'transform:none$1')
    $(element).attr('style', style)
  })
  await mkdir(`dist/${page.slug}`, { recursive: true })
  await writeFile(`dist/${page.slug}/index.html`, $.html())
}
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

import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { load } from 'cheerio'
const slugs = ['erp-venezuela', 'invest-in-venezuela-erp', 'sap-alternative-venezuela', 'venezuela-erp-localization', 'manufacturing-erp-venezuela', 'oil-gas-erp-venezuela', 'agroindustry-erp-venezuela']
const titles = new Set(), descriptions = new Set(), headings = new Set()
const sitemap = await readFile('dist/sitemap.xml', 'utf8')
for (const slug of slugs) {
  const $ = load(await readFile(`dist/${slug}/index.html`, 'utf8'))
  assert.equal($('title').length, 1, `${slug}: title`)
  assert.equal($('meta[name="description"]').length, 1, `${slug}: description`)
  assert.equal($('h1').length, 1, `${slug}: H1`)
  for (const [set, value] of [[titles, $('title').text()], [descriptions, $('meta[name="description"]').attr('content')], [headings, $('h1').text()]]) {
    assert.ok(value && !set.has(value), `${slug}: missing or duplicate SEO content`)
    set.add(value)
  }
  assert.equal($('link[rel="canonical"]').attr('href'), `https://erpya.com/${slug}`)
  assert.equal($('meta[property="og:url"]').attr('content'), `https://erpya.com/${slug}`)
  assert.equal($('article').attr('lang'), $('html').attr('lang'))
  const graph = JSON.parse($('script[type="application/ld+json"]').text())['@graph']
  assert.deepEqual(graph.map(item => item['@type']), ['WebPage', 'Service', 'BreadcrumbList'])
  assert.ok(sitemap.includes(`https://erpya.com/${slug}`))
  assert.ok($('a[href*="wa.me"][href*="text="]').length >= 2, `${slug}: assessment CTA`)
  for (const node of $('img').toArray()) {
    assert.ok($(node).attr('alt'))
    const src = $(node).attr('src')
    if (src.startsWith('/')) await access(`dist${src}`)
  }
  const image = $('meta[property="og:image"]').attr('content')
  await access(`dist${new URL(image).pathname}`)
  assert.ok(!$('article [style]').toArray().some(node => /opacity:0(?:;|$)/.test($(node).attr('style'))), `${slug}: hidden prerender content`)
}
const en = load(await readFile('dist/invest-in-venezuela-erp/index.html', 'utf8'))
assert.equal(en('h1').text(), 'ERP & Technology Platform for Companies Investing in Venezuela')
assert.equal(en('html').attr('lang'), 'en')
assert.ok((await readFile('dist/robots.txt', 'utf8')).includes('https://erpya.com/sitemap.xml'))
console.log('SEO checks passed: 7 static pages, unique metadata/H1, canonical, OG assets, language, schema, CTAs, sitemap and visible HTML.')

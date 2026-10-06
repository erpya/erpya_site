import { useEffect } from 'react'
import type { Landing } from '../content/venezuela'
import { siteUrl, structuredData } from '../content/venezuela'
import { useI18n } from '../lib/i18n'

export default function LandingSeo({ page, image }: { page: Landing; image: string }) {
  const { lang } = useI18n()
  useEffect(() => {
    const previousLang = document.documentElement.lang
    document.querySelectorAll('[data-landing-seo]').forEach(node => node.remove())
    document.title = page.title
    document.documentElement.lang = page.lang
    const nodes: HTMLElement[] = []
    const add = (tag: string, attrs: Record<string, string>, text?: string) => {
      const node = document.createElement(tag)
      Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value))
      node.setAttribute('data-landing-seo', '')
      if (text) node.textContent = text
      document.head.appendChild(node)
      nodes.push(node)
    }
    const url = `${siteUrl}/${page.slug}`
    add('meta', { name: 'description', content: page.description })
    add('link', { rel: 'canonical', href: url })
    Object.entries({ title: page.title, description: page.description, url, type: 'website', site_name: 'ERPya', locale: page.lang === 'en' ? 'en_US' : 'es_VE', image: new URL(image, siteUrl).href, 'image:alt': 'ADempiere ERP · ERPya' }).forEach(([key, value]) => add('meta', { property: `og:${key}`, content: value }))
    add('meta', { name: 'twitter:card', content: 'summary_large_image' })
    add('script', { type: 'application/ld+json' }, JSON.stringify(structuredData(page)))
    return () => {
      nodes.forEach(node => node.remove())
      document.title = 'ERPyA - Software de Gestión Integral'
      document.documentElement.lang = previousLang
    }
  }, [page, image, lang])
  return null
}

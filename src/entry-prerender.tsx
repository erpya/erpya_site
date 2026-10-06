import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { I18nProvider } from './lib/i18n'
import { SiteRoutes } from './App'
export { landings, siteUrl, structuredData } from './content/venezuela'
export function render(path: string, lang: 'es' | 'en') {
  return renderToString(<I18nProvider initialLang={lang}><StaticRouter location={path}><SiteRoutes /></StaticRouter></I18nProvider>)
}

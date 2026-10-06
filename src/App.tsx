import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { I18nProvider } from './lib/i18n'
import Layout from './components/Layout'
import Home from './pages/Home'
import Adempiere from './pages/Adempiere'
import Odoo from './pages/Odoo'
import Servicio from './pages/Servicio'
import Nube from './pages/Nube'
import Nosotros from './pages/Nosotros'
import ErpAiKnowledge from './pages/ErpAiKnowledge'
import VenezuelaLanding from './pages/VenezuelaLanding'
import { landings } from './content/venezuela'

export function SiteRoutes() {
  return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="adempiere" element={<Adempiere />} />
            <Route path="odoo" element={<Odoo />} />
            <Route path="nube" element={<Nube />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="erp-ai-knowledge" element={<ErpAiKnowledge />} />
            {landings.map(page => <Route key={page.slug} path={page.slug} element={<VenezuelaLanding page={page} />} />)}
            {/* Catch-all for service detail pages */}
            <Route path=":serviceId" element={<Servicio />} />
          </Route>
        </Routes>
  )
}

function App() {
  return <I18nProvider><BrowserRouter basename={import.meta.env.BASE_URL}><SiteRoutes /></BrowserRouter></I18nProvider>
}

export default App

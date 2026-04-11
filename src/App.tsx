import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Funcionalidades from './pages/Funcionalidades'
import Soluciones from './pages/Soluciones'
import Nosotros from './pages/Nosotros'

// Generated Imports
import PortfolioGestionFinanciera from './pages/generated/PortfolioGestionFinanciera'
import PortfolioGestionDeCapitalHumano from './pages/generated/PortfolioGestionDeCapitalHumano'
import PortfolioGestionDeManufactura from './pages/generated/PortfolioGestionDeManufactura'
import PortfolioGestionDelClienteCrm from './pages/generated/PortfolioGestionDelClienteCrm'
import PortfolioGestionDeDistribucion from './pages/generated/PortfolioGestionDeDistribucion'
import PortfolioGestionDeActivos from './pages/generated/PortfolioGestionDeActivos'
import PortfolioGestionDeServicios from './pages/generated/PortfolioGestionDeServicios'
import PortfolioGestionDeProyectos from './pages/generated/PortfolioGestionDeProyectos'
import PortfolioRetail from './pages/generated/PortfolioRetail'
import PortfolioDistribucionYLogistica from './pages/generated/PortfolioDistribucionYLogistica'
import PortfolioTransporte from './pages/generated/PortfolioTransporte'
import PortfolioSupermercadoDeNoAlimentos from './pages/generated/PortfolioSupermercadoDeNoAlimentos'
import PortfolioSupermercadoDeAlimentos from './pages/generated/PortfolioSupermercadoDeAlimentos'
import Nube from './pages/generated/Nube'
import ConsultoriaDeProcesos from './pages/generated/ConsultoriaDeProcesos'
import SoporteYMantenimiento from './pages/generated/SoporteYMantenimiento'
import QuienesSomos from './pages/generated/QuienesSomos'
import PorQueNosotros from './pages/generated/PorQueNosotros'
import GestionDeCompras from './pages/generated/GestionDeCompras'
import GestionDeVentas from './pages/generated/GestionDeVentas'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="funcionalidades" element={<Funcionalidades />} />
          <Route path="soluciones" element={<Soluciones />} />
          <Route path="nosotros" element={<Nosotros />} />
          
          {/* Subpages dinamicas */}
          <Route path="gestion-financiera" element={<PortfolioGestionFinanciera />} />
          <Route path="gestion-de-capital-humano" element={<PortfolioGestionDeCapitalHumano />} />
          <Route path="gestion-de-manufactura" element={<PortfolioGestionDeManufactura />} />
          <Route path="gestion-del-cliente-crm" element={<PortfolioGestionDelClienteCrm />} />
          <Route path="gestion-de-distribucion" element={<PortfolioGestionDeDistribucion />} />
          <Route path="gestion-de-activos" element={<PortfolioGestionDeActivos />} />
          <Route path="gestion-de-servicios" element={<PortfolioGestionDeServicios />} />
          <Route path="gestion-de-proyectos" element={<PortfolioGestionDeProyectos />} />
          <Route path="retail" element={<PortfolioRetail />} />
          <Route path="distribucion-y-logistica" element={<PortfolioDistribucionYLogistica />} />
          <Route path="transporte" element={<PortfolioTransporte />} />
          <Route path="supermercado-de-no-alimentos" element={<PortfolioSupermercadoDeNoAlimentos />} />
          <Route path="supermercado-de-alimentos" element={<PortfolioSupermercadoDeAlimentos />} />
          <Route path="nube" element={<Nube />} />
          <Route path="consultoria-de-procesos" element={<ConsultoriaDeProcesos />} />
          <Route path="soporte-y-mantenimiento" element={<SoporteYMantenimiento />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="por-que-nosotros" element={<PorQueNosotros />} />
          <Route path="gestion-de-compras" element={<GestionDeCompras />} />
          <Route path="gestion-de-ventas" element={<GestionDeVentas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

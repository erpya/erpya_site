import { ShoppingCart, Package, Truck, Landmark } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Soluciones() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Soluciones por Industria
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl"
          >
            Sea cual sea su sector, nuestro entorno escalable está listo para ser desplegado optimizando completamente sus flujos de trabajo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Comercio Minorista */}
          <Link to="/retail" className="block transition-transform hover:scale-[1.02] duration-300">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-10 rounded-2xl border border-border shadow-lg h-full"
            >
              <div className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <ShoppingCart size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Comercio Minorista (Retail)</h3>
              <p className="text-muted-foreground leading-relaxed">
                El modulo para el comercio minorista gestiona en su totalidad todo el proceso de la comercialización, Puntos de Venta (POS) integrados de alta disponibilidad, manejo de promociones automatizadas, control de precios, listas y gestión rápida con clientes finales.
              </p>
            </motion.div>
          </Link>

          {/* Supermercados */}
          <Link to="/supermercado-de-alimentos" className="block transition-transform hover:scale-[1.02] duration-300">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-10 rounded-2xl border border-border shadow-lg h-full"
            >
              <div className="bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Package size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Supermercados y Alimentos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dirigido tanto a supermercados de alimentos como no alimentos. Mantiene el estricto control de lotes, mermas, caducidades e integración precisa con el piso de venta, balanzas y despachos al mayor.
              </p>
            </motion.div>
          </Link>

          {/* Transporte y Logística */}
          <Link to="/distribucion-y-logistica" className="block transition-transform hover:scale-[1.02] duration-300">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card p-10 rounded-2xl border border-border shadow-lg h-full"
            >
              <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Truck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Distribución y Logística</h3>
              <p className="text-muted-foreground leading-relaxed">
                Módulos diseñados para empresas de distribución y transporte. Gestión completa de rutas comerciales, seguimiento de flota, despachos, recolección y logística ininterrumpida a nivel gerencial y operativo.
              </p>
            </motion.div>
          </Link>

          {/* Sector Público */}
          <Link to="/supermercado-de-no-alimentos" className="block transition-transform hover:scale-[1.02] duration-300">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card p-10 rounded-2xl border border-border shadow-lg h-full"
            >
              <div className="bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Landmark size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Supermercados de No Alimentos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Gestión estructurada requeridos por cadenas departamentales garantizando fluidez de inventario en anaqueles, compras multimoneda y promociones cruzadas.
              </p>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  )
}

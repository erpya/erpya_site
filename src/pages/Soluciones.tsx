import { ShoppingCart, Package, Truck, Landmark } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useI18n } from '../lib/i18n'

export default function Soluciones() {
  const { t, lang } = useI18n()
  const cards = [
    {
      to: '/retail',
      Icon: ShoppingCart,
      titleEs: 'Comercio Minorista (Retail)',
      titleEn: 'Retail Trade',
      descEs: 'El módulo para el comercio minorista gestiona en su totalidad todo el proceso de la comercialización, Puntos de Venta (POS) integrados de alta disponibilidad, manejo de promociones automatizadas, control de precios, listas y gestión rápida con clientes finales.',
      descEn: 'The retail module manages the entire commercialization process, with high-availability POS, automated promotions, price control, price lists and fast customer service.',
    },
    {
      to: '/supermercado-de-alimentos',
      Icon: Package,
      titleEs: 'Supermercados y Alimentos',
      titleEn: 'Supermarkets and Food',
      descEs: 'Dirigido tanto a supermercados de alimentos como no alimentos. Mantiene el estricto control de lotes, mermas, caducidades e integración precisa con el piso de venta, balanzas y despachos al mayor.',
      descEn: 'Designed for food and non-food supermarkets. It maintains strict control of lots, shrinkage, expiries and integrates precisely with the sales floor, scales and wholesale dispatches.',
    },
    {
      to: '/distribucion-y-logistica',
      Icon: Truck,
      titleEs: 'Distribución y Logística',
      titleEn: 'Distribution and Logistics',
      descEs: 'Módulos diseñados para empresas de distribución y transporte. Gestión completa de rutas comerciales, seguimiento de flota, despachos, recolección y logística ininterrumpida a nivel gerencial y operativo.',
      descEn: 'Modules designed for distribution and transportation companies. Complete management of commercial routes, fleet tracking, dispatches, collections and uninterrupted logistics at management and operational levels.',
    },
    {
      to: '/supermercado-de-no-alimentos',
      Icon: Landmark,
      titleEs: 'Supermercados de No Alimentos',
      titleEn: 'Non-Food Supermarkets',
      descEs: 'Gestión estructurada requeridos por cadenas departamentales garantizando fluidez de inventario en anaqueles, compras multimoneda y promociones cruzadas.',
      descEn: 'Structured management required by department store chains, ensuring inventory flow on shelves, multi-currency purchasing and cross-promotions.',
    },
  ]

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
          >
            {t('soluciones', 'title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl"
          >
            {t('soluciones', 'sub')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => {
            const Icon = card.Icon
            return (
              <Link key={card.to} to={card.to} className="block transition-transform hover:scale-[1.02] duration-300">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="bg-card p-10 rounded-2xl border border-border shadow-lg h-full"
                >
                  <div className={`mb-6 w-16 h-16 flex items-center justify-center rounded-2xl ${index === 0 ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400' : index === 1 ? 'bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400' : index === 2 ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400' : 'bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400'}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{lang === 'en' ? card.titleEn : card.titleEs}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {lang === 'en' ? card.descEn : card.descEs}
                  </p>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

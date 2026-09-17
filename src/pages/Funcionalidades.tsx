import { BarChart3, Users, Settings, Database, Activity, Package, Briefcase, ShoppingCart, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useI18n } from '../lib/i18n'

function FeatureCard({ title, description, icon: Icon, delay = 0, href }: { title: string, description: string, icon: any, delay?: number, href: string }) {
  return (
    <Link to={href} className="block transition-transform hover:scale-[1.02] duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="glass-card p-6 md:p-8 flex flex-col items-start gap-4 hover:bg-black/5 dark:hover:bg-white/[0.08] transition-colors border-t border-t-black/10 dark:border-t-white/20 h-full cursor-pointer"
      >
        <div className="p-4 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary mb-2">
          <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
      </motion.div>
    </Link>
  )
}

export default function Funcionalidades() {
  const { t, lang } = useI18n()
  const features = [
    {
      href: '/gestion-financiera',
      icon: BarChart3,
      titleEs: 'Gestión Financiera',
      titleEn: 'Financial Management',
      descEs: 'Potente funcionalidad que puede ser utilizada por una empresa pequeña o gran organización. Controle sus finanzas de manera exacta, sin necesidad de cambiar su plataforma cuando crezca.',
      descEn: 'Powerful functionality for small or large companies. Control your finances precisely without changing platforms as you grow.',
      delay: 0.1,
    },
    {
      href: '/gestion-de-compras',
      icon: ShoppingCart,
      titleEs: 'Gestión de Compras',
      titleEn: 'Purchasing Management',
      descEs: 'Obtenga visión general y detallada. Una vez definidas las condiciones con el proveedor, los usuarios operan y ADempiere se encarga utilizar los precios y documentos involucrados.',
      descEn: 'Gain general and detailed visibility. Once vendor terms are set, users operate while ADempiere applies the prices and documents automatically.',
      delay: 0.2,
    },
    {
      href: '/gestion-de-ventas',
      icon: Activity,
      titleEs: 'Gestión de Ventas',
      titleEn: 'Sales Management',
      descEs: 'Ejecute las ventas expeditamente y sin equivocaciones. Defina reglas por cliente y el sistema controlará listas de precio, costos, y automatización contable.',
      descEn: 'Execute sales quickly and accurately. Define customer rules and the system will control price lists, costs, and accounting automation.',
      delay: 0.3,
    },
    {
      href: '/gestion-de-capital-humano',
      icon: Users,
      titleEs: 'Capital Humano',
      titleEn: 'Human Capital',
      descEs: 'Herramientas necesarias para hacer más transparente la relación con el personal. Gestione todo lo referente a empleados, asistencia, préstamos, compras y remuneraciones.',
      descEn: 'Tools needed to make staff relationships more transparent. Manage employees, attendance, loans, purchases and payroll.',
      delay: 0.4,
    },
    {
      href: '/gestion-de-manufactura',
      icon: Database,
      titleEs: 'Gestión de Manufactura',
      titleEn: 'Manufacturing Management',
      descEs: 'Integre compras, administración, finanzas, logística y rentabilidad industrial. Tenga una operación más controlada, planificada y segura.',
      descEn: 'Integrate purchasing, administration, finance, logistics and industrial profitability. Achieve a more controlled, planned and secure operation.',
      delay: 0.5,
    },
    {
      href: '/gestion-del-cliente-crm',
      icon: Activity,
      titleEs: 'Gestión de Clientes (CRM)',
      titleEn: 'Customer Management (CRM)',
      descEs: 'Dé seguimiento a su relación con clientes y prospectos de forma fácil y rápida. Controle todas las etapas del embudo de ventas y soporte.',
      descEn: 'Track customer and prospect relationships easily and quickly. Control all stages of the sales and support funnel.',
      delay: 0.6,
    },
    {
      href: '/gestion-de-distribucion',
      icon: Package,
      titleEs: 'Gestión de Distribución',
      titleEn: 'Distribution Management',
      descEs: 'Automatiza sus flujos, minimizando errores en el suministro, cumplimiento de pedidos, seguimiento de inventario multi-almacén y logística.',
      descEn: 'Automate your workflows, minimizing errors in supply, order fulfillment, multi-warehouse inventory tracking and logistics.',
      delay: 0.7,
    },
    {
      href: '/gestion-de-activos',
      icon: ShieldCheck,
      titleEs: 'Gestión de Activos',
      titleEn: 'Asset Management',
      descEs: 'Planifica, organiza y ejecuta actividades de mantenimiento correctivo y preventivo, incluyendo inventarios físicos y depreciación.',
      descEn: 'Plan, organize and execute corrective and preventive maintenance activities, including physical inventories and depreciation.',
      delay: 0.8,
    },
    {
      href: '/gestion-de-servicios',
      icon: Settings,
      titleEs: 'Gestión de Servicios',
      titleEn: 'Service Management',
      descEs: 'Solución de punta a punta tanto para Servicios Profesionales, como Reparaciones o Servicios por Proyecto. Visión 360 del ciclo de ticket.',
      descEn: 'End-to-end solution for Professional Services, Repairs or Project Services. 360 view of the ticket lifecycle.',
      delay: 0.9,
    },
    {
      href: '/gestion-de-proyectos',
      icon: Briefcase,
      titleEs: 'Gestión de Proyectos',
      titleEn: 'Project Management',
      descEs: 'Gestiona la totalidad del ciclo de vida útil del proyecto. Tiempos, gastos, materiales consumidos y facturación al cliente.',
      descEn: 'Manage the full project lifecycle. Time, expenses, consumed materials and client billing.',
      delay: 1.0,
    },
  ]

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
          >
            {t('funcionalidades', 'title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-3xl"
          >
            {t('funcionalidades', 'sub')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.titleEs}
              href={feature.href}
              icon={feature.icon}
              title={lang === 'en' ? feature.titleEn : feature.titleEs}
              description={lang === 'en' ? feature.descEn : feature.descEs}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

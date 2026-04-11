import { BarChart3, Users, Settings, Database, Activity, Package, Briefcase, ShoppingCart, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Funcionalidades Integrales
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-3xl"
          >
            Administre tanto sus operaciones internas con empleados como las externas con sus clientes y proveedores, potenciando la eficiencia de su empresa de clase mundial.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            href="/gestion-financiera"
            icon={BarChart3}
            title="Gestión Financiera" 
            description="Potente funcionalidad que puede ser utilizada por una empresa pequeña o gran organización. Controle sus finanzas de manera exacta, sin necesidad de cambiar su plataforma cuando crezca."
            delay={0.1}
          />
          <FeatureCard 
            href="/gestion-de-compras"
            icon={ShoppingCart}
            title="Gestión de Compras" 
            description="Obtenga visión general y detallada. Una vez definidas las condiciones con el proveedor, los usuarios operan y ADempiere se encarga utilizar los precios y documentos involucrados."
            delay={0.2}
          />
          <FeatureCard 
            href="/gestion-de-ventas"
            icon={Activity}
            title="Gestión de Ventas" 
            description="Ejecute las ventas expeditamente y sin equivocaciones. Defina reglas por cliente y el sistema controlará listas de precio, costos, y automatización contable."
            delay={0.3}
          />
          <FeatureCard 
            href="/gestion-de-capital-humano"
            icon={Users}
            title="Capital Humano" 
            description="Herramientas necesarias para hacer más transparente la relación con el personal. Gestione todo lo referente a empleados, asistencia, préstamos, compras y remuneraciones."
            delay={0.4}
          />
          <FeatureCard 
            href="/gestion-de-manufactura"
            icon={Database}
            title="Gestión de Manufactura" 
            description="Integre compras, administración, finanzas, logística y rentabilidad industrial. Tenga una operación más controlada, planificada y segura."
            delay={0.5}
          />
          <FeatureCard 
            href="/gestion-del-cliente-crm"
            icon={Activity}
            title="Gestión de Clientes (CRM)" 
            description="Dé seguimiento a su relación con clientes y prospectos de forma fácil y rápida. Controle todas las etapas del embudo de ventas y soporte."
            delay={0.6}
          />
          <FeatureCard 
            href="/gestion-de-distribucion"
            icon={Package}
            title="Gestión de Distribución" 
            description="Automatiza sus flujos, minimizando errores en el suministro, cumplimiento de pedidos, seguimiento de inventario multi-almacén y logística."
            delay={0.7}
          />
          <FeatureCard 
            href="/gestion-de-activos"
            icon={ShieldCheck}
            title="Gestión de Activos" 
            description="Planifica, organiza y ejecuta actividades de mantenimiento correctivo y preventivo, incluyendo inventarios físicos y depreciación."
            delay={0.8}
          />
          <FeatureCard 
            href="/gestion-de-servicios"
            icon={Settings}
            title="Gestión de Servicios" 
            description="Solución de punta a punta tanto para Servicios Profesionales, como Reparaciones o Servicios por Proyecto. Visión 360 del ciclo de ticket."
            delay={0.9}
          />
          <FeatureCard 
            href="/gestion-de-proyectos"
            icon={Briefcase}
            title="Gestión de Proyectos" 
            description="Gestiona la totalidad del ciclo de vida útil del proyecto. Tiempos, gastos, materiales consumidos y facturación al cliente."
            delay={1.0}
          />
        </div>
      </div>
    </div>
  )
}

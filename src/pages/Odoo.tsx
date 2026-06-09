import {
  BarChart3, ShoppingCart, Users, Settings, Package, Wrench,
  Truck, Layers, Cloud, MessageSquare, ShieldCheck, Zap,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useI18n } from '../lib/i18n'
import { PageHero, StatsBar, Section, SectionHeading, CtaBanner } from '../components/PageHero'
import macbookFront from '../assets/macbook_front.svg'

const FEATURES = [
  { Icon: ShoppingCart, keyEs: 'Ventas y CRM',          keyEn: 'Sales & CRM',          descEs: 'Pipeline de ventas, presupuestos, pedidos y facturación en un solo flujo.', descEn: 'Sales pipeline, quotes, orders and invoicing in one flow.' },
  { Icon: Package,      keyEs: 'Inventario',            keyEn: 'Inventory',            descEs: 'Multi-almacén, rutas, lotes y trazabilidad completa de productos.',          descEn: 'Multi-warehouse, routes, lots and full product traceability.' },
  { Icon: BarChart3,    keyEs: 'Contabilidad',          keyEn: 'Accounting',           descEs: 'Contabilidad integrada, conciliación bancaria y reportes fiscales.',         descEn: 'Integrated accounting, bank reconciliation and tax reports.' },
  { Icon: Users,        keyEs: 'Recursos Humanos',      keyEn: 'Human Resources',      descEs: 'Empleados, nómina, asistencia y gestión de vacaciones.',                    descEn: 'Employees, payroll, attendance and leave management.' },
  { Icon: Settings,     keyEs: 'Manufactura',           keyEn: 'Manufacturing',        descEs: 'Órdenes de producción, listas de materiales y control de calidad.',         descEn: 'Production orders, bills of materials and quality control.' },
  { Icon: Truck,        keyEs: 'Logística y Compras',   keyEn: 'Logistics & Purchases',descEs: 'Proveedores, órdenes de compra y gestión de la cadena de suministro.',      descEn: 'Vendors, purchase orders and supply chain management.' },
  { Icon: Wrench,       keyEs: 'Mantenimiento',         keyEn: 'Maintenance',          descEs: 'Mantenimiento preventivo y correctivo vinculado a activos.',                 descEn: 'Preventive and corrective maintenance linked to assets.' },
  { Icon: Layers,       keyEs: 'Proyectos',             keyEn: 'Projects',             descEs: 'Gestión de tareas, tiempos y facturación por proyecto.',                    descEn: 'Task management, time tracking and project billing.' },
  { Icon: MessageSquare,keyEs: 'Comunicación',          keyEn: 'Communication',        descEs: 'Chatter integrado, correo y notificaciones en toda la plataforma.',         descEn: 'Integrated chatter, email and notifications across the platform.' },
  { Icon: ShieldCheck,  keyEs: 'Permisos y Auditoría', keyEn: 'Permissions & Audit',  descEs: 'Control de acceso granular y trazabilidad completa de cambios.',            descEn: 'Granular access control and full change traceability.' },
]

const PLATFORM_FEATURES_ICONS = [Layers, Cloud, Zap]

export default function Odoo() {
  const { lang, t } = useI18n()

  const platformFeatures = [
    { Icon: PLATFORM_FEATURES_ICONS[0], label: t('odoo', 'platformFeature1') },
    { Icon: PLATFORM_FEATURES_ICONS[1], label: t('odoo', 'platformFeature2') },
    { Icon: PLATFORM_FEATURES_ICONS[2], label: t('odoo', 'platformFeature3') },
  ]

  return (
    <div>
      <PageHero
        badge={t('odoo', 'badge')}
        title={t('odoo', 'headline')}
        titleAccent={t('odoo', 'headlineAccent')}
        subtitle={t('odoo', 'sub')}
        cta1={t('odoo', 'cta1')}
        cta2={t('odoo', 'cta2')}
      />

      <StatsBar stats={[
        { value: '30+',  label: lang === 'en' ? 'Integrated apps'      : 'Aplicaciones integradas' },
        { value: '+15',  label: lang === 'en' ? 'Years of experience'   : 'Años de experiencia' },
        { value: '+100', label: lang === 'en' ? 'Companies implemented' : 'Empresas implementadas' },
        { value: '10+',  label: lang === 'en' ? 'Countries served'      : 'Países atendidos' },
      ]} />

      {/* Platform visual card */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-border bg-white dark:bg-card shadow-[0_4px_24px_rgba(13,33,103,0.07)] hover:shadow-[0_16px_48px_rgba(26,170,212,0.15)] transition-shadow duration-500"
        >
          {/* Visual area */}
          <div
            className="relative flex items-end justify-center pt-10 px-8 overflow-hidden min-h-[320px]"
            style={{
              background:
                'radial-gradient(ellipse at 60% 0%, rgba(26,170,212,0.18) 0%, transparent 65%), linear-gradient(160deg, #0D2167 0%, #071329 100%)',
            }}
          >
            <img
              src={macbookFront}
              alt="Odoo ERP"
              className="relative w-full max-w-[480px] object-contain drop-shadow-2xl translate-y-4 group-hover:translate-y-1 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col p-7">
            <h3 className="text-2xl font-extrabold text-foreground mb-1">Odoo ERP</h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              {t('odoo', 'platformDesc')}
            </p>
            <ul className="space-y-2.5 mb-2">
              {platformFeatures.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan">
                    <Icon size={14} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Section>

      <Section alt>
        <SectionHeading title={t('odoo', 'features')} sub={t('odoo', 'featuresSub')} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-0">
          {FEATURES.map((f, i) => {
            const { Icon } = f
            return (
              <motion.div
                key={f.keyEs}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (i % 5) * 0.04 }}
                className="flex gap-3 py-3.5 border-b border-border/60"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-foreground mb-0.5">{lang === 'en' ? f.keyEn : f.keyEs}</div>
                  <div className="text-[12.5px] text-muted-foreground leading-relaxed">{lang === 'en' ? f.descEn : f.descEs}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Section>

      <CtaBanner
        title={t('odoo', 'ctaFinal')}
        sub={t('odoo', 'ctaFinalSub')}
        btnLabel={t('odoo', 'ctaFinalBtn')}
      />
    </div>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BrainCircuit, FileText, MessageSquare, Building2, Banknote } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import { Section } from './PageHero'

type NovedadItem = {
  to: string
  tagEs: string
  tagEn: string
  titleEs: string
  titleEn: string
  descEs: string
  descEn: string
  Icon: typeof FileText
}

const ITEMS: NovedadItem[] = [
  { to: '/ai-docs',   tagEs: 'IA',    tagEn: 'AI',
    titleEs: 'Carga de documentos con IA', titleEn: 'AI document capture',
    descEs: 'Facturas y órdenes de compra leídas automáticamente y cargadas a su ERP.',
    descEn: 'Invoices and purchase orders read automatically and loaded into your ERP.',
    Icon: FileText },
  { to: '/ai-quotes', tagEs: 'IA',    tagEn: 'AI',
    titleEs: 'Análisis de cotizaciones',   titleEn: 'Quote analysis',
    descEs: 'Compare cotizaciones de proveedores con IA y elija la mejor opción.',
    descEn: 'Compare vendor quotes with AI and pick the best option.',
    Icon: MessageSquare },
  { to: '/seniat',    tagEs: 'Local', tagEn: 'Local',
    titleEs: 'Captura SENIAT',             titleEn: 'SENIAT capture',
    descEs: 'Datos de socios de negocio cargados desde el portal del SENIAT con solo el RIF.',
    descEn: 'Business partner data loaded from the SENIAT portal with just the RIF.',
    Icon: Building2 },
  { to: '/bcv',       tagEs: 'Local', tagEn: 'Local',
    titleEs: 'Tasas BCV automáticas',      titleEn: 'Automatic BCV rates',
    descEs: 'Tasas bancarias diarias cargadas cada mañana desde el portal del BCV.',
    descEn: 'Daily bank rates loaded every morning from the BCV portal.',
    Icon: Banknote },
  { to: '/seniat-homologacion', tagEs: 'SENIAT', tagEn: 'SENIAT',
    titleEs: 'Homologación del SENIAT', titleEn: 'SENIAT Homologation',
    descEs: 'ADempiere ERP autorizado oficialmente por el SENIAT para facturación electrónica.',
    descEn: 'ADempiere ERP officially authorized by SENIAT for electronic invoicing.',
    Icon: Building2 },
  { to: '/the-factory-hk', tagEs: 'Facturación', tagEn: 'Invoicing',
    titleEs: 'The Factory HK', titleEn: 'The Factory HK',
    descEs: 'Integración directa para emisión automática de facturas electrónicas fiscales.',
    descEn: 'Direct integration for automatic issuance of electronic tax invoices.',
    Icon: Banknote },
]

export default function NovedadesSection() {
  const { lang, t } = useI18n()
  return (
    <Section>
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-cyan/20 text-brand-navy dark:text-brand-cyan text-[11px] font-bold uppercase tracking-wider mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
          {t('home', 'novedadesEyebrow')}
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground">{t('home', 'novedadesTitle')}</h2>
        <p className="text-[15px] text-muted-foreground mt-1.5 max-w-xl">{t('home', 'novedadesSub')}</p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-4 overflow-hidden rounded-2xl border border-brand-cyan/30 bg-brand-navy shadow-[0_18px_50px_rgba(13,33,103,0.16)]"
      >
        <Link to="/erp-ai-knowledge" className="group grid min-h-[310px] lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)]">
          <div className="relative flex flex-col justify-center overflow-hidden p-7 sm:p-9 lg:p-11">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 78% 20%, rgba(26,170,212,0.45), transparent 30%), linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
                backgroundSize: 'auto, 36px 36px, 36px 36px',
              }}
            />
            <div className="relative max-w-2xl">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-navy">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-navy" />
                  {lang === 'en' ? 'In development' : 'En desarrollo'}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">ERP AI Knowledge</span>
              </div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-brand-cyan-light">
                <BrainCircuit size={25} />
              </div>
              <h3 className="max-w-xl text-[clamp(25px,3vw,39px)] font-extrabold leading-[1.08] tracking-tight text-white">
                {lang === 'en'
                  ? 'Technical knowledge that grows with every software change.'
                  : 'Conocimiento técnico que crece con cada cambio de software.'}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-[15px]">
                {lang === 'en'
                  ? 'A living memory for your repositories: it connects issues, decisions, code and releases so every new challenge starts with real context.'
                  : 'Una memoria viva para tus repositorios: conecta incidencias, decisiones, código y entregas para que cada nuevo reto comience con contexto real.'}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-cyan-light transition-[gap] group-hover:gap-3">
                {lang === 'en' ? 'Explore the concept' : 'Conoce el concepto'} <ArrowRight size={16} />
              </span>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden border-t border-white/10 bg-[#071329] lg:border-l lg:border-t-0">
            <video
              className="absolute inset-0 h-full w-full object-cover object-center opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
              src="/media/erp-ai-knowledge.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={lang === 'en' ? 'ERP AI Knowledge product preview' : 'Vista previa del producto ERP AI Knowledge'}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071329]/70 via-transparent to-[#071329]/15" />
          </div>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((it, i) => {
          const { Icon } = it
          return (
            <motion.div
              key={it.to}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to={it.to}
                className="relative block bg-card border border-border rounded-xl p-4 hover:border-brand-cyan hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(13,33,103,0.10)] transition-all overflow-hidden h-full"
              >
                <div className="absolute top-3.5 right-3.5 text-[9.5px] font-extrabold px-1.5 py-[3px] rounded bg-brand-cyan text-brand-navy tracking-wider">
                  {lang === 'en' ? it.tagEn : it.tagEs}
                </div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-navy to-brand-navy-light text-brand-cyan flex items-center justify-center mb-3">
                  <Icon size={20} />
                </div>
                <h3 className="text-[15px] font-bold text-foreground leading-tight mb-2">{lang === 'en' ? it.titleEn : it.titleEs}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{lang === 'en' ? it.descEn : it.descEs}</p>
                <div className="text-xs font-semibold text-primary mt-3">{t('home', 'learnMore')} →</div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

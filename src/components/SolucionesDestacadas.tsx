import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Box, Cloud, Layers, ShieldCheck, Zap } from 'lucide-react'
import macbookFront from '../assets/macbook_front.svg'
import laptopAdempiere from '../assets/laptop-adempiere.png'

const ODOO_FEATURES = [
  { icon: Layers,       label: 'Módulos integrados en un solo sistema' },
  { icon: Cloud,        label: 'Disponible en la nube o en tus servidores' },
  { icon: BarChart3,    label: 'Reportes en tiempo real para tomar decisiones' },
]

const ADEMPIERE_FEATURES = [
  { icon: ShieldCheck,  label: 'ERP empresarial robusto y auditable' },
  { icon: Box,          label: 'Gestión de inventario y cadena de suministro' },
  { icon: Zap,          label: 'Automatización contable y fiscal avanzada' },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function SolucionesDestacadas() {
  const navigate = useNavigate()

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Background grid decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(13,33,103,1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,33,103,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-navy dark:text-brand-cyan text-[11px] font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(26,170,212,0.8)]" />
            Nuestras Plataformas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] max-w-3xl mx-auto">
            Tecnología que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-navy dark:from-brand-cyan dark:to-sky-300">
              transforma tu operación
            </span>{' '}
            de raíz
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Implementamos las plataformas ERP más poderosas del mercado, adaptadas
            a la realidad de cada empresa. Sin fricciones, sin límites.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* ── Odoo Card ── */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-border bg-white dark:bg-card shadow-[0_4px_24px_rgba(13,33,103,0.07)] hover:shadow-[0_16px_48px_rgba(26,170,212,0.15)] transition-shadow duration-500"
          >
            {/* Visual area */}
            <div
              className="relative flex items-end justify-center pt-10 px-8 overflow-hidden min-h-[280px]"
              style={{
                background:
                  'radial-gradient(ellipse at 60% 0%, rgba(26,170,212,0.18) 0%, transparent 65%), linear-gradient(160deg, #0D2167 0%, #071329 100%)',
              }}
            >


              <img
                src={macbookFront}
                alt="Odoo en laptop"
                className="relative w-full max-w-[420px] object-contain drop-shadow-2xl translate-y-4 group-hover:translate-y-1 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-7">
              <h3 className="text-2xl font-extrabold text-foreground mb-1">
                Odoo ERP
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                La suite empresarial más completa del mundo. Ventas, inventario,
                contabilidad, RRHH y más — todo conectado en una sola plataforma
                que crece con tu negocio.
              </p>

              <ul className="space-y-2.5 mb-6">
                {ODOO_FEATURES.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan">
                      <Icon size={14} />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate('/soluciones')}
                className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-brand-cyan hover:text-brand-navy dark:hover:text-brand-cyan-light transition-colors group/btn"
              >
                Conocer Odoo
                <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* ── ADempiere Card ── */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.12 }}
            className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-border bg-white dark:bg-card shadow-[0_4px_24px_rgba(13,33,103,0.07)] hover:shadow-[0_16px_48px_rgba(26,170,212,0.15)] transition-shadow duration-500"
          >
            {/* Visual area */}
            <div
              className="relative flex items-end justify-center pt-10 px-8 overflow-hidden min-h-[280px]"
              style={{
                background:
                  'radial-gradient(ellipse at 40% 0%, rgba(26,170,212,0.14) 0%, transparent 65%), linear-gradient(160deg, #08122A 0%, #0D2167 100%)',
              }}
            >


              <img
                src={laptopAdempiere}
                alt="ADempiere ERP"
                className="relative w-full max-w-[420px] object-contain translate-y-4 group-hover:translate-y-1 transition-transform duration-500"
                style={{ clipPath: 'inset(4px)' }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-7">
              <h3 className="text-2xl font-extrabold text-foreground mb-1">
                ADempiere ERP
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                El ERP empresarial de código abierto con más de 20 años de trayectoria.
                Ideal para empresas con procesos complejos que exigen control total,
                trazabilidad y cumplimiento normativo.
              </p>

              <ul className="space-y-2.5 mb-6">
                {ADEMPIERE_FEATURES.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan">
                      <Icon size={14} />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate('/adempiere')}
                className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-brand-cyan hover:text-brand-navy dark:hover:text-brand-cyan-light transition-colors group/btn"
              >
                Conocer ADempiere
                <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

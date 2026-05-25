import { motion, type Variants } from 'framer-motion'
import { useI18n } from '../lib/i18n'
import { Section } from './PageHero'

// Importación de logos
import logoMary from '../assets/Logo Alimentos Mary.webp'
import logoMasia from '../assets/Logo Alimentos Masia.png'
import logoChispa from '../assets/Logo Arrocera Chispa.png'
import logoCaivet from '../assets/Logo Caivet.png'
import logoAmapola from '../assets/Logo Industrias Amapola.png'
import logoMaros from '../assets/Logo Industrias Maros.jpeg'
import logoAnca from '../assets/Logo_Anca.png'
import logoInalsa from '../assets/logo-inalsa.png'
import logoProsein from '../assets/logo-prosein.jpg'

const CLIENTS = [
  { name: 'Alimentos Mary', logo: logoMary },
  { name: 'Alimentos Masia', logo: logoMasia },
  { name: 'Arrocera Chispa', logo: logoChispa },
  { name: 'Caivet', logo: logoCaivet },
  { name: 'Industrias Amapola', logo: logoAmapola },
  { name: 'Industrias Maros', logo: logoMaros },
  { name: 'Anca', logo: logoAnca },
  { name: 'Inalsa', logo: logoInalsa },
  { name: 'Prosein', logo: logoProsein },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 16,
    },
  },
}

export default function ClientesSection() {
  const { t } = useI18n()

  return (
    <Section alt={true} className="py-16">
      <div className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-navy dark:text-brand-cyan text-[11px] font-bold uppercase tracking-wider mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(26,170,212,0.8)]" />
          {t('home', 'clientsEyebrow')}
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {t('home', 'clientsTitle')}
        </h2>
        <p className="text-[15px] text-muted-foreground mt-2 max-w-2xl leading-relaxed">
          {t('home', 'clientsSub')}
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-4 items-stretch"
      >
        {CLIENTS.map((client, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex items-center justify-center p-4 bg-white rounded-xl border border-slate-200/80 shadow-[0_2px_8px_rgba(13,33,103,0.03)] hover:shadow-[0_12px_24px_rgba(26,170,212,0.12)] hover:border-brand-cyan/40 transition-all duration-300 group h-24 sm:h-28"
          >
            <img
              src={client.logo}
              alt={client.name}
              title={client.name}
              className="max-h-full max-w-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

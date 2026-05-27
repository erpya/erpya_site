import { useI18n } from '../lib/i18n'
import { Section } from './PageHero'

// Importación de logos
import logoMary from '../assets/Logo Alimentos Mary.webp'
import logoMasia from '../assets/Logo Alimentos Masia.jpeg'
import logoChispa from '../assets/Logo Arrocera Chispa.png'
import logoCaivet from '../assets/Logo Caivet.png'
import logoAmapola from '../assets/Logo Industrias Amapola.png'
import logoMaros from '../assets/Logo Industrias Maros.jpeg'
import logoAnca from '../assets/Logo_Anca.png'
import logoInalsa from '../assets/logo-inalsa.png'
import logoProsein from '../assets/logo-prosein.jpg'
import logoFple from '../assets/laespecial.png'
import logoAgrosilos from '../assets/Logo Agrosilos.png'
import logoFaparca from '../assets/logo_faparca.png'
import logoElmor from '../assets/Logo elmor.png'
import logoTodoagro from '../assets/Logo Todoagro.jpeg'

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
  { name: 'La Especial', logo: logoFple },
  { name: 'Agrosilos', logo: logoAgrosilos },
  { name: 'Faparca', logo: logoFaparca },
  { name: 'Elmor', logo: logoElmor },
  { name: 'Todoagro', logo: logoTodoagro },
]

// Duplicamos la lista para el loop continuo
const TRACK = [...CLIENTS, ...CLIENTS, ...CLIENTS]

export default function ClientesSection() {
  const { t } = useI18n()

  return (
    <Section alt={true} className="py-16 overflow-hidden">
      {/* Encabezado */}
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

      {/* Carrusel marquee */}
      <div className="relative w-full">


        {/* Pista animada */}
        <div
          className="flex gap-4 clients-marquee"
          style={{ width: 'max-content' }}
        >
          {TRACK.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center p-5 bg-white rounded-xl border border-slate-200 shadow-[0_2px_10px_rgba(13,33,103,0.07)] hover:shadow-[0_12px_28px_rgba(26,170,212,0.20)] hover:border-brand-cyan/40 hover:scale-110 transition-all duration-300 group"
              style={{ width: 168, height: 104 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                title={client.name}
                className="max-h-full max-w-full object-contain transition-all duration-300 ease-in-out"
                style={{ maxHeight: 64, maxWidth: 128 }}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

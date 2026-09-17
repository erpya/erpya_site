import { motion } from 'framer-motion'
import {
  ArrowRight,
  BrainCircuit,
  GitPullRequest,
  History,
  Network,
  ShieldCheck,
} from 'lucide-react'
import { CtaBanner, PageHero, Section, SectionHeading } from '../components/PageHero'
import { useI18n } from '../lib/i18n'

const COPY = {
  es: {
    badge: 'ERP AI Knowledge',
    title: 'Convierte cada cambio de software en conocimiento que permanece.',
    subtitle: 'Estamos desarrollando una memoria técnica inteligente que comprende el contexto de tus repositorios, acompaña las decisiones del equipo y reutiliza lo aprendido en el próximo desafío.',
    heroCta: 'Conocer el proyecto',
    videoEyebrow: 'Una nueva forma de preservar contexto',
    videoTitle: 'Tu equipo cambia. El conocimiento no tiene que empezar de cero.',
    videoText: 'ERP AI Knowledge busca conectar la historia que normalmente queda dispersa entre incidencias, conversaciones, código y entregas. El resultado: decisiones mejor informadas y una evolución del software más fácil de comprender.',
    principlesTitle: 'Una memoria construida alrededor del trabajo real',
    principlesSub: 'La propuesta combina inteligencia artificial, trazabilidad y control humano para convertir la actividad técnica diaria en conocimiento útil.',
    principles: [
      { title: 'Contexto del repositorio', text: 'Comprende arquitectura, convenciones y antecedentes antes de proponer un camino.', Icon: Network },
      { title: 'Decisiones explicables', text: 'Conserva el porqué de cada elección para que pueda revisarse y reutilizarse.', Icon: BrainCircuit },
      { title: 'Evidencia conectada', text: 'Relaciona incidencias, cambios, revisiones y entregas en una historia verificable.', Icon: GitPullRequest },
      { title: 'Control del equipo', text: 'La inteligencia artificial asiste; las decisiones importantes siguen en manos de las personas.', Icon: ShieldCheck },
    ],
    flowTitle: 'Cada entrega fortalece la siguiente',
    flowSub: 'Un ciclo continuo que transforma el trabajo terminado en contexto para lo que viene.',
    steps: ['Entender', 'Proponer', 'Decidir', 'Construir', 'Validar', 'Entregar', 'Aprender'],
    closeTitle: '¿Quieres explorar ERP AI Knowledge con tu equipo?',
    closeSub: 'Conversemos sobre tu flujo de desarrollo y los retos de conocimiento que quieres resolver.',
    closeCta: 'Quiero conocer el avance',
  },
  en: {
    badge: 'ERP AI Knowledge',
    title: 'Turn every software change into knowledge that lasts.',
    subtitle: 'We are building an intelligent technical memory that understands repository context, supports team decisions and reuses what was learned in the next challenge.',
    heroCta: 'Discover the project',
    videoEyebrow: 'A new way to preserve context',
    videoTitle: 'Teams change. Knowledge should not have to start over.',
    videoText: 'ERP AI Knowledge aims to connect the history that usually stays scattered across issues, conversations, code and releases. The result: better-informed decisions and software evolution that is easier to understand.',
    principlesTitle: 'A memory built around real work',
    principlesSub: 'The concept combines artificial intelligence, traceability and human control to turn daily technical activity into useful knowledge.',
    principles: [
      { title: 'Repository context', text: 'Understands architecture, conventions and prior decisions before suggesting a path.', Icon: Network },
      { title: 'Explainable decisions', text: 'Preserves the reasoning behind each choice so it can be reviewed and reused.', Icon: BrainCircuit },
      { title: 'Connected evidence', text: 'Links issues, changes, reviews and releases into a verifiable story.', Icon: GitPullRequest },
      { title: 'Team control', text: 'Artificial intelligence assists; important decisions remain in people’s hands.', Icon: ShieldCheck },
    ],
    flowTitle: 'Every release strengthens the next one',
    flowSub: 'A continuous cycle that turns completed work into context for what comes next.',
    steps: ['Understand', 'Propose', 'Decide', 'Build', 'Validate', 'Release', 'Learn'],
    closeTitle: 'Want to explore ERP AI Knowledge with your team?',
    closeSub: 'Let’s discuss your development workflow and the knowledge challenges you want to solve.',
    closeCta: 'Tell me about the progress',
  },
}

export default function ErpAiKnowledge() {
  const { lang } = useI18n()
  const copy = COPY[lang]

  const scrollToConcept = () => {
    document.getElementById('concepto')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div>
      <PageHero
        badge={copy.badge}
        title={copy.title}
        subtitle={copy.subtitle}
        cta1={copy.heroCta}
        onCta1={scrollToConcept}
      />

      <Section>
        <div id="concepto" className="grid items-center gap-9 scroll-mt-24 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-[330px] overflow-hidden rounded-[28px] border border-border bg-[#071329] p-2 shadow-[0_24px_65px_rgba(7,19,41,0.28)]"
          >
            <video
              className="aspect-[9/16] w-full rounded-[21px] bg-[#071329] object-cover"
              src="/media/erp-ai-knowledge.mp4"
              controls
              playsInline
              preload="metadata"
            >
              {lang === 'en' ? 'Your browser cannot play this video.' : 'Tu navegador no puede reproducir este video.'}
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">
              <History size={15} /> {copy.videoEyebrow}
            </div>
            <h2 className="max-w-2xl text-[clamp(27px,3.7vw,43px)] font-extrabold leading-[1.1] tracking-tight text-foreground">
              {copy.videoTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:text-base">
              {copy.videoText}
            </p>
            <div className="mt-7 inline-flex items-center gap-2 rounded-lg border border-primary/15 bg-primary/5 px-4 py-3 text-sm font-semibold text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-cyan" />
              {lang === 'en' ? 'Concept currently in beta' : 'Concepto actualmente en modo beta'}
            </div>
          </motion.div>
        </div>
      </Section>

      <Section alt>
        <SectionHeading title={copy.principlesTitle} sub={copy.principlesSub} />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {copy.principles.map(({ title, text, Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-xl border border-border bg-background p-5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={20} />
              </div>
              <h3 className="text-sm font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title={copy.flowTitle} sub={copy.flowSub} />
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
          <div className="grid gap-2 sm:grid-cols-7">
            {copy.steps.map((step, index) => (
              <div key={step} className="relative flex items-center gap-3 sm:block sm:text-center">
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-extrabold text-brand-cyan-light sm:mx-auto">
                  {index + 1}
                </div>
                {index < copy.steps.length - 1 && (
                  <div className="absolute left-9 top-[18px] hidden h-px w-[calc(100%-36px)] bg-gradient-to-r from-brand-cyan/70 to-border sm:block" />
                )}
                <p className="text-xs font-semibold text-foreground sm:mt-3">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 border-t border-border pt-5 text-xs font-semibold text-muted-foreground">
            <ArrowRight size={14} className="text-brand-cyan" />
            {lang === 'en' ? 'What the team learns returns as context for the next cycle.' : 'Lo que el equipo aprende vuelve como contexto para el siguiente ciclo.'}
          </div>
        </div>
      </Section>

      <CtaBanner title={copy.closeTitle} sub={copy.closeSub} btnLabel={copy.closeCta} />
    </div>
  )
}

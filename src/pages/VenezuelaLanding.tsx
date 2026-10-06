import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PageHero, Section, SectionHeading } from '../components/PageHero'
import LandingSeo from '../components/LandingSeo'
import { landings, assessmentUrl } from '../content/venezuela'
import type { Landing } from '../content/venezuela'
import platformImage from '../assets/laptop-adempiere.png'

export default function VenezuelaLanding({ page }: { page: Landing }) {
  const en = page.lang === 'en'
  const cta = en ? 'Request a Venezuela Technology Readiness Assessment' : 'Solicitar evaluación tecnológica para Venezuela'
  const href = assessmentUrl(page)
  const ctaClass = 'inline-flex items-center justify-center gap-2 rounded-lg bg-brand-cyan px-5 py-3 text-sm font-bold text-brand-navy hover:bg-brand-cyan-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan'
  return (
    <article lang={page.lang} className="venezuela-landing">
      <LandingSeo page={page} image={platformImage} />
      <PageHero badge={page.badge} title={page.h1} subtitle={page.intro}>
        <a href={href} target="_blank" rel="noopener noreferrer" className={ctaClass}>{cta}<ArrowRight size={16} aria-hidden="true" className="shrink-0" /></a>
        <a href="#assessment" className="rounded-lg border border-white/30 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">{en ? 'Explore the assessment' : 'Conocer la evaluación'}</a>
      </PageHero>
      <Section>
        <nav aria-label={en ? 'Breadcrumb' : 'Ruta de navegación'} className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="text-primary hover:underline">ERPya</Link><span aria-hidden="true"> / </span><span>{page.h1}</span>
        </nav>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div><SectionHeading title={page.focus} /><p className="text-base leading-relaxed text-muted-foreground">{page.decision}</p></div>
          <figure className="rounded-xl border border-border bg-card p-5">
            <img src={platformImage} alt={en ? 'ADempiere ERP interface displayed on a laptop' : 'Interfaz de ADempiere ERP en un portátil'} width="525" height="350" loading="lazy" className="h-auto w-full" />
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">{en ? 'ADempiere ERP · Implementation and support by ERPya' : 'ADempiere ERP · Implementación y soporte de ERPya'}</figcaption>
          </figure>
        </div>
      </Section>
      <Section alt>
        <div className="grid gap-4 md:grid-cols-3">
          {page.sections.map(section => <div key={section.title} className="rounded-xl border border-border bg-background p-6"><h2 className="mb-3 text-lg font-bold text-foreground">{section.title}</h2><p className="text-sm leading-relaxed text-muted-foreground">{section.text}</p></div>)}
        </div>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link to="/adempiere" className="text-primary hover:underline">{en ? 'ADempiere functional coverage' : 'Cobertura funcional de ADempiere'}</Link>
          <Link to="/n8n" className="text-primary hover:underline">{en ? 'APIs and integration services' : 'APIs y servicios de integración'}</Link>
          <Link to="/nube" className="text-primary hover:underline">{en ? 'Cloud and infrastructure' : 'Cloud e infraestructura'}</Link>
        </div>
      </Section>
      <Section className="scroll-mt-24">
        <div id="assessment" className="scroll-mt-24 grid gap-8 md:grid-cols-2">
          <div><SectionHeading title={en ? 'Venezuela Technology Readiness Assessment' : 'Evaluación de preparación tecnológica para Venezuela'} sub={en ? 'Start with a scoping conversation for your Venezuelan operation.' : 'Comience con una conversación para definir el alcance de su operación venezolana.'} />
            <p className="text-sm leading-relaxed text-muted-foreground">{en ? 'Review processes, ERP coverage, data migration, local requirements, integrations and infrastructure. Agree on priorities, responsibilities and the next steps with the ERPya team.' : 'Revise procesos, cobertura ERP, migración de datos, requisitos locales, integraciones e infraestructura. Acuerde prioridades, responsables y próximos pasos con el equipo de ERPya.'}</p>
          </div>
          <ul className="space-y-4">{page.questions.map(question => <li key={question} className="flex gap-3 text-sm leading-relaxed text-foreground"><CheckCircle2 size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-primary" />{question}</li>)}</ul>
        </div>
        <div className="mt-8 rounded-xl bg-brand-navy p-6 sm:p-8">
          <h3 className="mb-3 text-xl font-bold text-white">{en ? 'Planning to enter or expand in Venezuela?' : '¿Está entrando o expandiéndose en Venezuela?'}</h3>
          <p className="mb-5 text-sm leading-relaxed text-white/80">{en ? 'Share your sector, current systems and planned operation. The link opens WhatsApp with an editable assessment request.' : 'Comparta su sector, sistemas actuales y operación prevista. El enlace abre WhatsApp con una solicitud de evaluación que puede editar.'}</p>
          <a href={href} target="_blank" rel="noopener noreferrer" className={ctaClass}>{cta}<ArrowRight size={16} aria-hidden="true" className="shrink-0" /></a>
          <a className="mt-4 block text-sm text-white underline" href={`mailto:info@erpya.com?subject=${encodeURIComponent(en ? 'Venezuela Technology Readiness Assessment' : 'Evaluación tecnológica para Venezuela')}`}>{en ? 'Prefer email? Contact ERPya' : '¿Prefiere correo? Contacte a ERPya'}</a>
        </div>
      </Section>
      <Section alt><SectionHeading title={en ? 'Questions before you start' : 'Preguntas antes de comenzar'} />
        <div className="space-y-3">{page.faq.map(faq => <details key={faq.question} className="rounded-xl border border-border bg-background p-5"><summary className="cursor-pointer font-semibold text-foreground">{faq.question}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p></details>)}</div>
      </Section>
      <Section><SectionHeading title={en ? 'Explore your next priority' : 'Explore su siguiente prioridad'} />
        <div className="grid gap-3 sm:grid-cols-2">{page.related.map(slug => {
          const related = landings.find(item => item.slug === slug)!
          return <Link key={slug} to={`/${slug}`} lang={related.lang} className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 text-sm font-semibold text-foreground hover:border-primary"><span>{related.h1}<span className="ml-2 text-xs text-muted-foreground">({related.lang.toUpperCase()})</span></span><ArrowRight size={18} aria-hidden="true" className="shrink-0 text-primary" /></Link>
        })}</div>
      </Section>
    </article>
  )
}

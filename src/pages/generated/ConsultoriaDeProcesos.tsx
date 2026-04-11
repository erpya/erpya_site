import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronRight, LayoutGrid } from 'lucide-react'

export default function ConsultoriaDeProcesos() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* HEADER SECTION */}
      <div className="px-6 max-w-5xl mx-auto flex flex-col items-start gap-6">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs font-medium text-primary shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Módulo ERPyA
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground"
        >
          Consultoría de procesos de negocio
        </motion.h1>

        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mt-2 mb-8"
        >
          <p className="mb-4">Consultoría de procesosCada empresa tiene procesos que resolver y que desea le sean adecuados por un sistema informático.Los procesos pueden estar en las mentes de los usuarios o documentados en algún lugar. Dichos procesos son semejantes en todas las empresas, pero cada una tiene sus particularidades.Las semejanzas son conocidas y existen Buenas Prácticas – reconocidas mundialmente – que son implementadas por ERPs como ADempiere.</p>
          <p className="mb-4">Una consultoría de calidad es necesaria para identificar no sólo el alcance de las Buenas Pácticas por implementar en un cliente, sino también las diferencias de los procesos estándar.</p>
          <p className="mb-4">MetodologíaAIM (Applications Implementation Methodology):  AIM está basada en seis fases: definición, análisis operacional, diseño de la solución, construcción, transición, producción.Scrum: Es un proceso en el que se aplican de manera regular un conjunto de buenas prácticas para trabajar colaborativamente, en equipo, y obtener el mejor resultado posible de un proyecto.</p>
          <p className="mb-4">La metodología para implementar una solución comienza con la Definicion del Proyecto y  Análisis de brecha, que consta de sostener conversaciones con usuarios claves de las áreas de interés. Luego se documenta el resultado, que es una radiografía de la situación actual y posibles funcionalidades de la empresa.Partiendo del Análisis, el cliente y el implementador acuerdan la funcionalidad, y se procede a implementar.El procreso incluye migración, desarrollo, configuración, adaptación, capacitación.</p>
          <p className="mb-4">Consultoría exitosaHay que destacar que muchos proyectos de implementación de ERPs fracasan en gran parte debido a que la consultoría de Análisis de Brecha no fue realizada o fue realizada, pero incorrectamente.Otro motivo de fracaso es que los consultores no conocen el área de desempeño del cliente o las áreas generales como Contabilidad, Costos, Almacenes, Compras, Ventas, etc..Finalmente, un motivo de fracaso es el desconocimiento del ERP utilizado.</p>
          <p className="mb-4">Nosotros con más de 10 años de experiencia en Consultoría Informática Empresarial, aplicamos las mejores practicas y la implementamos exitosamente el ERP ADempiere en empresas especificas en diferentes especialidades.Igualmente, somos desarrolladores de ADempiere y somos colaboradores del código fuente.</p>
          <p className="mb-4">¿Interesado? Acceda a nuestra página de contacto, y gustosamente daremos información adicional.  Le contestaremos cualquier pregunta y despejaremos cualquier duda!</p>
        </motion.div>
        
      </div>

      {/* RICH CONTENT GRID */}
      
      
      {/* CTA FOOTER */}
      <div className="px-6 max-w-5xl mx-auto mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 border border-border rounded-2xl bg-gradient-to-r from-card to-muted flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Despliega el potencial</h3>
            <p className="text-muted-foreground">Conversemos sobre cómo adaptar <strong>Consultoría de procesos de negocio</strong> a tus requerimientos.</p>
          </div>
          <a href="#contacto" className="whitespace-nowrap px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20">
            Contáctanos ahora <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

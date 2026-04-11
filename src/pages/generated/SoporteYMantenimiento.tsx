import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronRight, LayoutGrid } from 'lucide-react'

export default function SoporteYMantenimiento() {
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
          ERPyA
        </motion.h1>

        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mt-2 mb-8"
        >
          <p className="mb-4">Conocemos lo importante que es para usted el soporte de sus sistemas de gestión.  Es por eso que estamos comprometidos en responder todas sus preguntas, aplicando las mejores prácticas de manera rápida y efectiva.</p>
          <p className="mb-4">Para ERPYA es indispensable tomar todos los requerimientos y para darles el debido soporte usamos varios métodos tal como el cuadrante Eisenhower.</p>
          <p className="mb-4">Para ello contamos con varios planes de soporte, según las necesidades de su empresa, el sistema y sus horarios de actividad. Usted siempre contará con un equipo 100% capacitado, velando por la eficiencia de sus sistemas.</p>
          <p className="mb-4">Cuente con el apoyo de especialistas en procesos y código.</p>
        </motion.div>
        
      </div>

      {/* RICH CONTENT GRID */}
      
      <div className="w-full bg-muted/20 border-t border-border mt-12 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
               <LayoutGrid size={24} />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Características Principales</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Plataforma de Tickets</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Contamos con una Plataforma de Soporte mediante tickets, donde usted o los usuarios habilitados de su empresa, transmitirán su consulta o problema. Según el tema de petición de soporte, ésta será atendida por un consultor especialista.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">En la Plataforma se escribirá la solución, quedando una total trazabilidad del tema.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Chat en Slack</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Usted podrá chatear con el equipo de soporte mediante Slack, quien atenderá sus necesidades de manera inmediata. En el caso que por su temática requiera la intervención de otros consultores, el tema se escalará al consultor que corresponda.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Slack es la empresa de mensajería corporativa número uno en Estados Unidos.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Llamadas telefónicas a callcenter</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Usted podrá comunicarse telefónicamente con el equipo de soporte, quienes atenderán su solicitud de forma inmediata.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">También está disponible, en el caso que la empresa lo requiera la comunicación telefónica directa con el consultor jefe.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.30000000000000004 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Soporte Básico</h3>
              
              
              <ul className="mt-2 space-y-3 w-full">
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Uso de los métodos de comunicación (plataforma Tickets, Chat en Slack, Línea telefónica)</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Respuesta dentro de las próximas 24 horas habiles.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">El horario de atención es de Lunes a Viernes de 8:00 am ~ 5:00 pm</span>
                </li>
                
              </ul>
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Soporte Premium</h3>
              
              
              <ul className="mt-2 space-y-3 w-full">
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Uso de los métodos de comunicación (Plataforma Tickets, Chat en Discord o Línea telefónica).</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Contacto directo con nuestros consultores Senior.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Horario de atencion de 8 am a 5pm</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Respuesta inmediata.</span>
                </li>
                
              </ul>
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Especializado</h3>
              
              
              <ul className="mt-2 space-y-3 w-full">
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Uso de los métodos de comunicación (plataforma Tickets, Chat en Discord o Línea telefónica).</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Contacto directo con nuestros consultores Especializados.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Análisis y Asesoría de Propuesta de las mejores prácticas usadas.</span>
                </li>
                
              </ul>
              
            </motion.div>
              
          </div>
        </div>
      </div>
      
      
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
            <p className="text-muted-foreground">Conversemos sobre cómo adaptar <strong>ERPyA</strong> a tus requerimientos.</p>
          </div>
          <a href="#contacto" className="whitespace-nowrap px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20">
            Contáctanos ahora <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

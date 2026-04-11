import { motion } from 'framer-motion'
import { ArrowRight, Cloud, ShieldCheck, Zap, Server } from 'lucide-react'

export default function Nube() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* HEADER SECTION */}
      <div className="px-6 max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-cyan-500/10 text-sm font-medium text-cyan-600 dark:text-cyan-400 shadow-sm"
        >
          <Cloud size={16} />
          Servicio Cloud
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground"
        >
          ¿Qué es un Software ERP en la Nube?
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mt-4"
        >
          <p className="mb-4">
            La computación en la Nube es hoy en día uno de los principales temas relacionados a tecnología y reducción de costos. La misma tecnología que facilita compartir fotos o música, nos permite llevar los sistemas de gestión empresarial a la nube.
          </p>
          <p className="font-medium text-foreground text-xl">
            La Nube es más que una decisión de implementación, es una elección estratégica y fortalece el futuro de su negocio.
          </p>
        </motion.div>
      </div>

      {/* CARDS SECTION */}
      <div className="w-full mt-16 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-10 flex flex-col items-center text-center gap-4 hover:shadow-2xl transition-all border-t border-t-cyan-500/20 group"
            >
              <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-500 group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mt-2">Flexible</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ya sea que esté evaluando mover su sistema ERP a la Nube, desee implementar funcionalidades localmente y otras en la nube, o busque un sistema 100% web: podemos apoyarle.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-10 flex flex-col items-center text-center gap-4 hover:shadow-2xl transition-all border-t border-t-blue-500/20 group"
            >
              <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mt-2">Accesible</h3>
              <p className="text-muted-foreground leading-relaxed">
                Particularmente conveniente para pequeñas y medianas empresas. Le permite el acceso a aplicaciones profesionales de alta performance a un precio sumamente razonable que antes sólo alcanzaban las grandes.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-10 flex flex-col items-center text-center gap-4 hover:shadow-2xl transition-all border-t border-t-indigo-500/20 group"
            >
              <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-500 group-hover:scale-110 transition-transform">
                <Server size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mt-2">Escalable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aproveche la oportunidad de reducir costos de infraestructura local y al mismo tiempo obtener funcionalidades de clase mundial implementando ADempiere Cloud en su empresa sin límites de crecimiento.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA FOOTER */}
      <div className="px-6 max-w-5xl mx-auto mt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 border border-border rounded-3xl bg-card flex flex-col items-center text-center gap-6 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">Concéntrate en tu negocio, nosotros del ERP</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mb-8">ADempiere Cloud te proporciona la libertad de enfocarte en tus productos y clientes sin distraerte en el mantenimiento de servidores físicos.</p>
            
            <a href="#contacto" className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20">
              Solicitar Demostración en la Nube <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

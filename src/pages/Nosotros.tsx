import { motion } from 'framer-motion'
import { Target, Lightbulb, PenTool } from 'lucide-react'

export default function Nosotros() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4 mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
        >
          Acerca de ERPyA
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg"
        >
          Conozca más sobre nuestra visión y compromiso tecnológico.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 flex flex-col items-center text-center gap-6 border-t border-t-black/10 dark:border-t-white/20"
        >
          <div className="bg-primary/10 text-primary p-4 rounded-full">
            <Target size={32} />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Nuestra Misión</h3>
          <p className="text-muted-foreground leading-relaxed">
            Nuestra misión es clara: realizar un esfuerzo continuo para innovar y crear soluciones tecnológicamente avanzadas que resuelvan los problemas de negocio de nuestros clientes de la manera más simple, ágil y eficiente.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-10 flex flex-col items-center text-center gap-6 border-t border-t-black/10 dark:border-t-white/20"
        >
          <div className="bg-blue-500/10 text-blue-500 p-4 rounded-full">
            <Lightbulb size={32} />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Innovación Continua</h3>
          <p className="text-muted-foreground leading-relaxed">
            Creemos que al unir tecnología de punta con modernos y dinámicos procedimientos de negocios se alcanzan increíbles avances hacia la productividad empresarial.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass-card p-10 flex flex-col items-center text-center gap-6 border-t border-t-black/10 dark:border-t-white/20"
        >
          <div className="bg-cyan-500/10 text-cyan-500 p-4 rounded-full">
            <PenTool size={32} />
          </div>
          <h3 className="text-2xl font-bold text-foreground">A Medida (Custom)</h3>
          <p className="text-muted-foreground leading-relaxed">
            Nuestro potencial lo enfocamos en proveer las herramientas que su negocio requiere. En caso de que no exista un módulo, eso no es impedimento: podemos diseñarlo a medida fusionando nuestros conocimientos.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronRight, LayoutGrid } from 'lucide-react'

export default function PortfolioRetail() {
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
          Venda, entregue, cobre, gane, repita…
        </motion.h1>

        
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
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Control de inventario y reposición</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Con ADempiere para Comercios Minoristas, las operaciones de su casa central tienen completa visibilidad del stock a lo largo de toda la cadena de comercios.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Usted podrá trasladar mercaderías entre locales eficientemente, con control y trazabilidad en vez de realizar un pedido al depósito central.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Punto de Venta</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">La operativa con el sistema en el punto de venta tiene que adaptarse a la velocidad del rubro. La interfaz tiene que ser amigable y flexible para que se pueda brindar un buen servicio rápidamente, minimizando la posibilidad de errores.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Gracias al Punto de Venta ADempiere, la operativa se maneja ágilmente, logrando manejar la gestión del local y su inventario de manera simple y completamente integrado a la administración.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Uno de los puntos más críticos es la facturación, y que esta no brinde obstáculos a la hora de terminar un pedido. Todos los medios de pago pueden ser utilizados para cobrar un pedido, permitiendo dinamismo y rapidez tanto a la hora de cobrar como a la hora de realizar una liquidación.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Nuestra solución Retail Punto de Venta viene preparada para maximizar los movimientos de los usuarios manejando una interfaz apropiado para utilizar con pantallas táctiles. La innovación viene de la mano de buenas prácticas, mejorando los tiempos de atención, reduciendo así las filas en la caja.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Realice promociones que maximicen su rentabilidad</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Administre diversas promociones analizando fácilmente tendencias de compras de clientes en comercios particulares y a través de la cadena de locales. Estas promociones pueden ser definidas en base a distintos criterios como descuentos según periodos, descuentos cuantitativos, productos cruzados o 2 x 1</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.30000000000000004 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Asegúrese de tener lo necesario en el momento justo</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Monitoree y administre su cadena de suministro de manera más eficiente y con una mejor relación costo-beneficio. Obtenga el mayor valor de sus clientes y proveedores. Permitiendo la compra tanto de bienes como de servicios, administrar las Cotizaciones de Proveedores, Compras recurrentes y Provisiones y Devengamientos.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">ADempiere le ayudará a que sin mayores problemas se integre y automatice los procesos de negocio a lo largo de su cadena de suministro. Gestione toda la operativa de su empresa mediante un completo conjunto de aprobaciones tan controlantes como usted desee. Cumpla con aquellos procedimientos que nunca logró seguir de manera simple y rápida, determine cuáles son los pasos a seguir en cada una de las transacciones y sus empleados los seguirán sin frenos ni complicaciones. Cuente con una auditoría detallada de cada una de las operaciones realizadas a lo largo de los procesos para encontrar errores u omisiones en la gestión.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Clientes (CRM)</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">La Gestión de Clientes (CRM) en ADempiere está embebido totalmente. No es un módulo externo como usted podrá conseguir varios.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Es una potente herramienta de mercadeo donde usted podrá hacer un seguimiento detallado de todas las actividades relacionadas al cliente, desde que es un prospecto hasta que se convierte en cliente.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Puntos de Venta</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">ADempiere Punto de Venta le otorga la tecnología de punta necesaria que le permite alcanzar su objetivo, para que su negocio tenga éxito.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6000000000000001 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Almacenes</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">La Gestión de Almacenes es de vital importancia en el negocio de venta al por menos. Es imprescindible disponer en todo momento de una información completa, accesible y 100% confiable.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7000000000000001 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Ordenes de Compras</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">La utilización de órdenes de compra le brindará a su empresa un ambiente de orden y control, que le permitirá tener un mejor relacionamiento con sus proveedores.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión Financiera</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">El beneficio de disponer de una Plataforma de Gestión Integral se traduce en que usted siempre dispondrá de la información financiera que usted necesita en línea y con una visibilidad de 360 grados.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Ordenes de Venta</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Incorpore varias herramientas en el manejo de órdenes de ventas que le permitirá administrar sus ventas con mayor control y trazabilidad.</p>
              
              
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
            <p className="text-muted-foreground">Conversemos sobre cómo adaptar <strong>Venda, entregue, cobre, gane, repita…</strong> a tus requerimientos.</p>
          </div>
          <a href="#contacto" className="whitespace-nowrap px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20">
            Contáctanos ahora <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

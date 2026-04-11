import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronRight, LayoutGrid } from 'lucide-react'

export default function PortfolioTransporte() {
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
          Gestione todo el ciclo de negocio, desde la cotización hasta el cobro con una sola plataforma de gestión moderna
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
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Controle con eficiencia el mantenimiento de su flota de vehículos</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Las tareas de mantenimiento se clasifican en correctivas, preventivas o predictivas. Las correctivas suceden cuando ocurre algún siniestro o falla, obligando a generar un servicio de mantenimiento.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Las preventivas tienen como objetivo prevenir cualquier futura falla, planificando una revisión o acción según corresponda. Estas previsiones se pueden programar a su vez según medidores: kilometraje, por períodos de fechas, por programación libre, por programación de fechas y kilometraje. Sobre estas tareas preventivas se puede programar alarmas para asegurarse su correcto control en tiempo y forma.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Gestione cada uno de los servicios de manera detallada, asignándole cada uno de los costos a su respectivo vehículo. En caso de realizar la tarea en un taller interno puede hasta asignarle la cantidad de horas dedicadas a cada tarea por sus operarios y así agregarle el componente de mano de obra. De ser realizada en un taller externo dicho servicio genera una orden de servicio que es enviada al taller o los talleres solicitando cotización. Una vez seleccionado el taller, cuando tenga la factura esta se asociará a dicha orden de servicio dejando una trazabilidad perfecta de la gestión del servicio.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Expedientes</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Cada viaje de Transporte Internacional será administrado mediante la gestión de expedientes. Estos pueden ser tanto de importación, exportación, o tránsito, en los cuales se incorporará toda la información pertinente: origen, destino, fronteras, mercadería, información de embarque, fletes de terceros y toda la información que requiera trazabilidad.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Carga</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Para cada carga asociada a una orden de transporte el sistema permite llevar una lista de los movimientos y cambios de estado de dicha carga, que van desde su inicio hasta la entrega de la misma. En cada cambio que sufre la carga se maneja la siguiente información: fecha y hora, remolque, tractor, remolque, conductor, si está detenida o no y su estado actual (liberada, cargada, en depósito, ingresada en aduana, despachada en aduana o entregada).</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.30000000000000004 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Orden de Transporte</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Una orden de transporte es la asociación de un vehículo con expedientes. Puede ser con varios en el caso de consolidado o simplemente un expediente cuando se trata de carga completa. Dentro de las órdenes de transporte se incluye información del vehículo, remolque, conductor, valor total de la mercadería transportada, kilos, volumen y cantidad. ADempiere llevará en todo momento una trazabilidad exacta y completa de los expedientes en transcurso desde todo punto de vista.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Transmisión de Documentos Aduaneros</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Continuando con la idea de centralizar toda la operativa dentro de un mismo sistema, con ADempiere es posible también conectarse con el sistema de control aduanero. El envío de la documentación (CRT y MIC – DTA) puede ser realizada directamente desde el sistema, sin salir de las ventanas de gestión de la carga en cuestión. Gracias a contar con un sistema unificado, todos los datos necesarios son obtenidos de los ya pre-cargados a lo largo que el negocio va avanzando. Toda su operativa, un solo sistema.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Tráfico Nacional</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Gestione todas las operaciones y movimientos del transporte nacional, desde la cotización (en el caso que la realice) hasta la facturación de los servicios.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Transmita desde el propio sistema a la entidad regulatoria.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Todo en una sola Plataforma.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6000000000000001 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Su combustible, siempre bajo control</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Trazabilidad exacta de todos los consumos generados por cada vehículo, permitiendo un importante nivel de detalle. Los controles se pueden efectuar sobre datos recibidos directamente de los proveedores y datos cargados mediante liquidaciones de conductores.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">El sistema automáticamente genera un control entre los comprobantes presentado por los conductores y la información que nos pasa directamente el proveedor, logrando conciliar los datos. Las cargas pueden ser automatizadas tanto como se desee, pudiendo ingresar cargas masivas mediante una planilla Excel así como también ADempiere puede ingresar a la página web de su estación de combustible de confianza para tomar los datos referentes de las cargas realizadas por su cuenta.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">El resultado de estos cálculos será un reporte de consulta por vehículo y conductor.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7000000000000001 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Neumáticos controlados</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Gasto muy importante a controlar son los neumáticos, los cuales representan una de las más complicadas tareas si no se cuenta con las herramientas correctas. ADempiere administra la vida útil de cada uno de los neumáticos con herramientas de control especialmente diseñada para ello.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Mediante esta herramienta todo lo que ingresa al sistema automáticamente se ve reflejado en el historial general de las unidades, de forma que podamos dividir los costos entre llantas nuevas, usadas o recauchutadas. También permite registrar las bajas de cada neumático junto con los motivos del caso, de modo que se puedan realizar posteriores reportes donde analizar las causas más comunes de desgaste o rotura, en que vehículo, y hasta evaluar qué tipo de neumático y marca es el que brinda mayor rendimiento.</p>
              
              
              <ul className="mt-2 space-y-3 w-full">
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Historial de mediciones o desgaste</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Rotación de neumáticos y su trazabilidad</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Gráficas de rendimientos y reportes de costos</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Ordenes y control sobre renovaciones</span>
                </li>
                
              </ul>
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Vehículos</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Clasifique sus vehículos diferenciando entre remolques, tractores, vehículos de uso en transporte nacional, internacional, portuario, frigoríficos o cualquier otra opción que desee. Centralice toda información respectiva a sus vehículos de manera simple.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Combustibles</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Trazabilidad exacta de todos los consumos generados por cada vehículo, permitiendo un importante nivel de detalle. Los controles se pueden efectuar sobre datos recibidos directamente de los proveedores de combustible, cargas en la empresa o mediante datos cargados mediante liquidaciones de choferes.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Repuestos</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Mediante el manejo del almacén su empresa podrá administrar con seguridad sus existencias de repuestos.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Mantenimiento</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Todas estas tareas tanto correctivas como preventivas se incluirán en una “orden de servicio” donde podrá realizarle un seguimiento detallado. Dichas ordenes podrán realizarse tanto en talleres externos como internos y detallando que repuestos se utilizaran.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Tráfico</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Cuente con un tablero donde resuma toda la operativa de manera unificada para tenera siempre a su alcance toda la información acutalizada de su flota.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión Financiera</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">La información exacta y oportuna le permitirá mejorar la performance de su negocio, utilizando métricas que lo ayudarán a tomar mejores decisiones.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Neumáticos</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Gasto muy importante a controlar son los Neumáticos, los cuales representan una de las más complicadas tareas si no se cuenta con las herramientas correctas. ADempiere Transporte administra la vida útil de cada uno de los neumáticos con herramientas de control especialmente diseñada para ello.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Facturación</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">La trazabilidad de documentos le permitirá vincular las cotizaciones, órdenes de carga y facturas.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Comunicaciones</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">El transporte de hoy día requiere sistemas abiertos que faciliten comunicaciones con sistemas externas.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Tanto en el transporte de cargas como de pasajeros, la comunicación dejará de ser un problema.</p>
              
              
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
            <p className="text-muted-foreground">Conversemos sobre cómo adaptar <strong>Gestione todo el ciclo de negocio, desde la cotización hasta el cobro con una sola plataforma de gestión moderna</strong> a tus requerimientos.</p>
          </div>
          <a href="#contacto" className="whitespace-nowrap px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20">
            Contáctanos ahora <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

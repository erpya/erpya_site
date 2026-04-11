import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronRight, LayoutGrid } from 'lucide-react'

export default function PortfolioDistribucionYLogistica() {
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
          ¿Cómo se prepara un distribuidor al por mayor moderno para responder a los retos competitivos de hoy día?
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
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Pronostique mejor, compre mejor</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Realice un pronóstico de manera profesional, yendo desde lo granular a lo general minimizando el margen de error. Gracias a las funcionalidades de pronóstico de la demanda usted puede ir cliente por cliente ingresando las cantidades estimadas de demanda de cada producto de su cartera, permitiendo a los encargados de cada cuenta o al gerente de ventas realizar sus estimaciones. Sumándole a este proceso los diferentes escenarios posibles tendrá de manera más certera su visión del futuro para poder planificar todo en base a sus ventas estimadas.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Monitoree y administre su cadena de suministro</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">El ERP le ayudará a que sin mayores problemas se integre y automatice los procesos de negocio a lo largo de su cadena de suministro. Gestione toda la operativa de su empresa mediante un completo conjunto de aprobaciones tan controlantes como usted desee. Cumpla con aquellos procedimientos que nunca logró seguir de manera simple y rápida, determine cuáles son los pasos a seguir en cada una de las transacciones y sus empleados los seguirán sin frenos ni complicaciones.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Importaciones</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Costee con exactitud sus compras en el exterior, distribuyendo correctamente los costos agregados que corresponden a la nacionalización de los bienes.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.30000000000000004 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Costee exactamente sus Importaciones</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Las importaciones traen consigo una cantidad de pasos a seguir, los cuales son proclives a posibles fallas en el proceso. Entre estas se encuentran fallas de comunicación o de desinformación, factores que complican la eficiencia del desempeño y el manejo coordinado de este sector. Asimismo, identificar y realizar un correcto seguimiento de los productos que ingresan, salen y/o permanecen en determinado estado forma parte de los objetivos.</p>
              
              
              <ul className="mt-2 space-y-3 w-full">
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Pre-costeo del pedido de importación.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Conversión a pedido de Importación.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Rastreo del producto en los pedidos y en los embarques.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Costos de embarque.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Seguimiento de Pedidos y Embarques.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Informes de Costo.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Informes financieros.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Informes estadísticos de importaciones realizadas por productos, proveedores, etc.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Control de productos en zona fiscal.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Control de liberación de mercaderías en zona fiscal.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Control de pago de impuestos de importación.</span>
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
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Faltante de stock? Olvídese de no cumplir promesas!</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Siguiendo las buenas prácticas de gestión mundiales, como una fase de vital importancia en una correcta gestión de la cadena de suministro el proceso de entrega:
Picking: Consolidación de todos los pedidos a entregar segÃºn diferentes criterios (Fecha prometida, zona de reparto, tipo de cliente, etc). Facilitando la operativa y brindando los controles necesarios para optimizar la eficiencia y reducir los errores.
Packing: Armado de pedidos. Una vez que se tiene toda la mercadería de los pedidos separada en un muelle o área de exclusión comienza un segundo control para separar la mercadería por clientes y por pedido. Una vez que se tiene la seguridad que contamos con todo el stock solicitado se concluye con la facturación de dicho pedido.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Shipping: Finalizando el proceso tenemos la asignación al transporte, dejando una trazabilidad perfecta de quién entregó cada pedido. Una vez finalizada la carga de los pedidos por el orden seleccionado, se le imprime una hoja de ruta donde detalla la información de cada uno de los pedidos a ser entregados junto con su correspondiente documentación.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Controle sus almacenes</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Con ADempiere, usted puede administrar el espacio en su depósito, administrar su inventario, controlar los movimientos de la mercadería según su ubicación en el depósito y reducir costos. Mediante acceso en tiempo real a información exacta sobre todos los estados de su inventario, puede ahorrar tiempos ubicando productos o realizando inventarios físicos, realizar operaciones habituales de inventario, y mantener óptimos niveles de stock mientras se minimizan sus costos de manejo. A su vez todo tipo de reportes sobre stocks pueden ser enviados por mail a quien desee, como por ejemplo al personal de ventas para que se mantengan informados a todo momento.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6000000000000001 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Movilidad de vendedores</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">El sistema incluye ADempiere Móvil, una aplicación integrada con el sistema para estar conectado hasta cuando se está fuera de la empresa realizando una visita al cliente. Mediante cualquier dispositivo móvil que utilice sistema operativo Android, podrá gestionar y realizar las operaciones propias de un vendedor desde el lugar donde este.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Gracias a la tecnología 3G estará constantemente conectado pudiendo realizar y ver las operaciones o consultas en tiempo real.</p>
              
              
              <ul className="mt-2 space-y-3 w-full">
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Interfaz amigable e intuitiva para realizar rápidos reportes de stock en los clientes.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Rápida obtención de reportes para informar al cliente stocks disponibles.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Estado de pedidos pendientes.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Solicitudes de devolución así como también pedidos de ventas.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Consultas de estados de cuenta y posibilidad de realizar y registrar una cobranza.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Brindar a choferes y cobradores, herramientas móviles para generar recibos, registrar devoluciones y enviar confirmación de horarios de entregas.</span>
                </li>
                
              </ul>
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7000000000000001 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Almacenes</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Tenga acceso en tiempo real al inventario disponible, reservado o en tránsito.
Gestione múltiples almacenes,con posiciones de inventario y por fechas de vencimiento y lotes.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Distribución</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Distribuya sus existencias entre sus órdenes de venta de forma inteligente.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Asigne las órdenes de entrega de productos entre los transportes corespondientes, generando así las órdenes de transporte.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Listas de Precios</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Gestione las versiones de sus listas de precio tanto de compras como de ventas.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Ventas</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Gestione las órdenes de pedido, aplicación de las condiciones de venta, comprobación del inventario disponible y administración de los envíos de venta.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Gestione las lista de precios vigentes y los descuentos y ofertas disponibles.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Facturación Electrónica</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Transmita a la entidad regulatoria los comprobantes generados en el sistema de forma automática.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión del Abastecimiento</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Automatice su gestión de necesidades de compra, emitiendo órdenes de compra según sus niveles de existencia o de manera manual.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Envíe sus órdenes de compra a sus proveedores por PDF o mediante un link al sistema.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Igualmente envíe sus solicitudes de cotización.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Ofertas y Descuentos</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Maneje las ofertas y descuentos planificadas por el área de mercadeo de manera automática.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Clientes (CRM)</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Gestione todas las actividades relacionadas a sus clientes de forma integrada, desde que es prospecto hasta que realiza su pedido.</p>
              
              
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
            <p className="text-muted-foreground">Conversemos sobre cómo adaptar <strong>¿Cómo se prepara un distribuidor al por mayor moderno para responder a los retos competitivos de hoy día?</strong> a tus requerimientos.</p>
          </div>
          <a href="#contacto" className="whitespace-nowrap px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20">
            Contáctanos ahora <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

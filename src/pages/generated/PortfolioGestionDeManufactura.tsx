import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronRight, LayoutGrid } from 'lucide-react'

export default function PortfolioGestionDeManufactura() {
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
          ¿Cómo mejora con ADempiere sus procesos de Manufactura?
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
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">¿Cómo mejora con ADempiere sus procesos de Manufactura?</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">La globalización y otras fuerzas que dirigen el mercado hace que la revisión de la cadena productiva, en la industria de la manufactura, sea esencial para el éxito del negocio. La eficacia y la eficiencia en los procesos ya no son más objetivos estáticos, tienen que ser afinados constantemente para optimizar los procesos de manufactura. Las demandas en la industria de la venta al por menor cambian constantemente. El liderazgo no puede ser garantizado y concentrarse  en la eficiencia operacional es un elemento crucial de la gestión del negocio operacional.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">ADempiere ERP Business Suite ofrece a las compañías manufactureras una solución flexible, confiable, estable y robusta para alcanzar las necesidades presentes y futuras. Al afinar  la eficacia y la eficiencia en la industria de manufactura se debe ser capaz no solamente de ajustarse a las modificaciones de equipos y procesos, dentro de las instalaciones de la compañía, sino también podrían ser subcontratadas a otros socios de negocio confiables.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Proporcionando un control completo de los órdenes de venta de los clientes durante todo el proceso de manufactura de los productos basado en los requisitos únicos de los clientes, así mismo, mide, rastrea el rendimiento y la calidad de cada producto.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">La solución proporciona herramientas para la planificación, programación, gestión de costos, control de materiales, control de planta, generación de informes, procesos discretos, repetitivos, multi fabricación y mixtos, kanban , flujo, proceso de lotes, fórmulas y fabricación de co-productos / subproductos.</p>
              
              
              <ul className="mt-2 space-y-3 w-full">
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Racionalizar la planificación y ejecución de la fabricación: Incorpora las mejores prácticas y permite una coordinación eficiente .</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Mejorar el tiempo de respuesta: Permite acceso oportuno a la información de planificación precisa</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Aumentar la satisfacción del cliente: permite una respuesta más rápida a cambios en la demanda</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Rendimiento de la unidad: Mide el desempeño a objetivos estratégicos y facilita la adopción de planes tácticos</span>
                </li>
                
              </ul>
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Planificación de la Manufactura</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Permite la simple adopción de planes tácticos para satisfacer, superar las expectativas de los clientes y las demandas cambiantes.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Ejecución de la fabricación</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Las operaciones de entrada y salida de materiales se pueden realizar mediante código de barras.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.30000000000000004 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de la Calidad</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Incluyendo definiciones de procedimientos de prueba estándar.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Administra planes de muestreo de inventario y órdenes de trabajo de calidad.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión del Ciclo de Vida del Producto</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">La gestión de ingeniera permite controlar el ciclo de vida de un producto desde su diseño , elaboración y la determinación de los costo para la fabricación de un producto terminado.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Gestión de Ingeniería de producto:</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Gestión de Ingeniería de procesos.</p>
              
              
              <ul className="mt-2 space-y-3 w-full">
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite el manejo de listas de materiales y fórmulas con vigencia</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite el manejo de listas de materiales y fórmulas alternas</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite definir co productos y sub productos para fabricación basada en procesos.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite la gestión programada de los cambios de ingeniería</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite el manejo de flujos de trabajo de manufactura (rutas de proceso) que definen el proceso de elaboración de un producto</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite el manejo de múltiples flujos de trabajo de manufactura alternos</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Mediante los flujos de trabajo de manufactura es posible calcular un plan de capacidad de los centro y estaciones de trabajo.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Mediante los flujos de trabajo de manufactura es posible calcular los costos asociados a la mano de obra , indirectos y sub contratos  de un producto elaborado.</span>
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
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Programa Maestro de Producción (MPS)</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Confeccione el Programa Maestro de Producción, con las Órdenes de Venta y los Pronósticos (demandas independientes).
El resto de los productos son planeados en base a ellas.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6000000000000001 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Calidad</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Esta funcionalidad apoya la gestión de la calidad de los productos, incluyendo inspección y pruebas, inspección en la recepción de artículos comprados y muestreo de inventario.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Incluyendo definiciones de procedimientos de prueba estándar y especificaciones de calidad , administración de planes de muestreo de inventario y órdenes de trabajo de calidad.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Características principales:</p>
              
              
              <ul className="mt-2 space-y-3 w-full">
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite definir procedimientos de calidad.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite definir especificaciones de calidad para múltiples atributos del producto estableciendo valores mínimos o máximos para determinar los productos fuera de especificación.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite crear Ordenes de trabajo de calidad para realizar las inspecciones de los productos recibidos o fabricados.</span>
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
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Procesos de Manufactura</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">La funcionalida de gestión y control de la producción permite crear Ordenes de Manufactura para los productos elaborados para ambientes de fabricación discreta, fabricación continua o repetitiva.</p>
              
              
              <ul className="mt-2 space-y-3 w-full">
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Generar un programa de producción por planta.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Generar Ordenes de Manufactura.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">La entrada de los productos elaborados y la salida de los componentes mediante procedimientos de post deducción.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">El control de los costos de fabricación para cada Orden de Manufactura.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">El registro contable de las operaciones de las áreas productivas.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">El manejo del material que tiene que ser enviado a piso para iniciar la elaboración de un producto.</span>
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
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Planificación de los Recursos de Manufactura (MRP)</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">La planificación de los recursos de manufactura permite generar un explosión de materiales multi nivel para obtener un plan de compras y un programa de maestro de producción aplicando múltiples modificadores de orden como mínimo ordenar , máximo ordenar , múltiplo a ordenar, stock de seguridad que permiten establecer las cantidades correctas para la compra y fabricación de los productos.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Características principales:</p>
              
              
              <ul className="mt-2 space-y-3 w-full">
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite generar un plan de materiales a múltiples niveles</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite generar un plan de compras mediante solicitudes de materiales</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite generar un programa maestro de producción</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite generar mensajes de acción para la gestión de la cadena de suministro.</span>
                </li>
                
              </ul>
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión del Control de Piso</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Esta funcionalidad permite realizar la recolección de datos directamente desde la planta para proveer seguimiento de trabajos, recolección de mano de obra, monitoreo de tiempo, monitoreo asistencia y secuenciación de trabajos.</p>
              
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Pronostico de la Demanda</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">El pronóstico de la demanda permite calcular y generar una previsión de la demanda de venta mediante la aplicación de diferentes algoritmos de calculo (Suavizado Exponencial simple , doble y triple , Pronostico con corrección de error, Regresión Polinomial , Pronóstico simple , Regresión lineal múltiple ,  etc) simulando múltiples escenarios de previsión de la demanda por categoría de producto , clase , grupo , clasificación que pueden ser combinados para generar un plan de venta.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Características principales:</p>
              
              
              <ul className="mt-2 space-y-3 w-full">
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Generar multiples pronóstico de venta por categoría , grupo , clase y clasificación de producto.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Generar previsión de la demanda basado en históricos de venta.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Generar un plan detallado de ventas por producto , cantidad , precio y vendedor.</span>
                </li>
                
              </ul>
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Planificación de los Recursos de Capacidad (CRP)</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">La planificación de capacidad permite generar un plan de capacidad para cada centro de trabajo permitiendo con ello gestionar la carga y disponibilidad de cada estación y centro de trabajo en una planta de producción.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Principales características:</p>
              
              
              <ul className="mt-2 space-y-3 w-full">
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Genera un plan de capacidad para cada centro de trabajo</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite visual la capacidad y disponibilidad de un centro de trabajo de manera gráfica.</span>
                </li>
                
              </ul>
              
            </motion.div>
              

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">Gestión de Costos Estándar</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Esta funcionalidad permite el calculo de los costos de producto elaborados  determinado mediante elementos de costo material , mano de obra , indirectos , sub contrato los costos de un producto elaborado integrando los costo de material para toda la estructura de productos y los costos de mano de obra e indirectos de los flujos de trabajo.</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">Características principales:</p>
              
              
              <ul className="mt-2 space-y-3 w-full">
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite la integración de elemento de costo material para todos lo niveles de lista de materiales de un producto elaborado.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite la integración de los costos de mano de obra , indirectos fijos y sub contrato de los productos fabricados por centro de trabajo.</span>
                </li>
                
                
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">Permite calcular estimaciones futuras del costo para determinar los márgenes de utilidad de los productos elaborados.</span>
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
            <p className="text-muted-foreground">Conversemos sobre cómo adaptar <strong>¿Cómo mejora con ADempiere sus procesos de Manufactura?</strong> a tus requerimientos.</p>
          </div>
          <a href="#contacto" className="whitespace-nowrap px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20">
            Contáctanos ahora <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export type Landing = {
  slug: string; lang: 'es' | 'en'; title: string; description: string; h1: string;
  badge: string; intro: string; focus: string; sections: { title: string; text: string }[];
  decision: string; questions: string[]; faq: { question: string; answer: string }[];
  related: string[];
}
export const landings: Landing[] = [
  {
    slug: 'erp-venezuela', lang: 'es', title: 'ERP en Venezuela para gestionar y expandir su empresa | ERPya',
    description: 'Integre contabilidad, compras, ventas, inventario y nómina con ADempiere ERP en Venezuela. Evalúe su expansión con soporte y localización de ERPya.',
    h1: 'ERP en Venezuela para una operación conectada', badge: 'Gestión empresarial · Venezuela',
    intro: 'Al abrir una sede o ampliar su operación, cada área necesita trabajar con la misma información. ERPya implementa ADempiere ERP para conectar finanzas, equipos y operaciones en Venezuela.',
    focus: 'Una base de gestión para crecer con control',
    sections: [
      { title: 'Contabilidad y tesorería', text: 'Conecte cuentas por cobrar y pagar, bancos, caja y cierre contable con los documentos de la operación. Defina la gestión multimoneda y los reportes que necesita Finanzas.' },
      { title: 'Compras, ventas e inventario', text: 'Relacione órdenes, recepciones, facturación y existencias entre almacenes. El equipo de Operaciones puede seguir el flujo desde el proveedor hasta la venta.' },
      { title: 'Personas e infraestructura', text: 'Integre RRHH y nómina en el alcance de su proyecto. Evalúe despliegue cloud o infraestructura propia, capacitación y soporte para sostener la operación.' },
    ],
    decision: 'Para CFO y Country Manager: defina qué información necesita para dirigir la expansión y qué procesos deben estar operativos al iniciar. Para CIO y Operations Director: acuerde integraciones, responsables y etapas de implementación.',
    questions: ['¿Qué empresas, sedes y almacenes entran en el alcance?', '¿Qué procesos y datos deben migrarse primero?', '¿Qué reportes necesita la dirección local y corporativa?'],
    faq: [{ question: '¿Qué ERP implementa ERPya para esta propuesta?', answer: 'La propuesta se basa en ADempiere ERP y en los servicios de implementación, localización, integraciones, infraestructura y soporte de ERPya. Los módulos y desarrollos se definen según el diagnóstico.' }],
    related: ['invest-in-venezuela-erp', 'venezuela-erp-localization', 'manufacturing-erp-venezuela', 'agroindustry-erp-venezuela'],
  },
  {
    slug: 'invest-in-venezuela-erp', lang: 'en', title: 'ERP & Technology for Companies Investing in Venezuela | ERPya',
    description: 'Plan your Venezuelan operation with ADempiere ERP, local finance and payroll, APIs, cloud infrastructure and ERPya support. Request a readiness assessment.',
    h1: 'ERP & Technology Platform for Companies Investing in Venezuela', badge: 'Market entry · Expansion',
    intro: 'Entering Venezuela requires a technology plan that connects local operations with corporate expectations. ERPya helps companies scope and implement ADempiere ERP, Venezuelan localization, integrations and the infrastructure their operation needs.',
    focus: 'From market-entry requirements to an operating platform',
    sections: [
      { title: 'Local finance and operational control', text: 'Bring accounting, treasury, purchasing, sales and inventory into a connected ERP. Scope multi-currency processes, local payroll and reporting with your Finance Director before implementation.' },
      { title: 'Connect the Venezuelan business to headquarters', text: 'Design data flows through APIs and integration services. Your CIO can evaluate interfaces, master-data ownership and reporting requirements against the systems already used by the group.' },
      { title: 'Deploy, support and transfer knowledge', text: 'Evaluate cloud or on-premise infrastructure, user training and ongoing support. Include technology transfer so your internal team understands the configuration and can manage its operation.' },
    ],
    decision: 'For the CFO and Country Manager, the priority is visibility over cash, commitments and operating readiness. For the CIO and Operations Director, it is a workable architecture with clear scope, process owners and rollout stages.',
    questions: ['Are you establishing a new entity, acquiring a business or expanding an existing operation?', 'Which corporate systems and reporting requirements must the local platform connect to?', 'Which finance, payroll and operational processes are critical for launch?'],
    faq: [{ question: 'Can the local platform coexist with our corporate ERP?', answer: 'ERPya can assess a local ADempiere platform and API-based integration architecture. Feasibility depends on available interfaces, data access, licensing and the corporate systems involved; the assessment defines that scope.' }, { question: 'What does the Venezuela Technology Readiness Assessment cover?', answer: 'It is a scoping conversation about local processes, ERP coverage, integrations, infrastructure, data migration and team readiness. The objective is to identify gaps and agree on the next implementation steps and assessment deliverables.' }],
    related: ['venezuela-erp-localization', 'sap-alternative-venezuela', 'oil-gas-erp-venezuela', 'erp-venezuela'],
  },
  {
    slug: 'sap-alternative-venezuela', lang: 'en', title: 'SAP Alternative in Venezuela: Local ERP & Integration | ERPya',
    description: 'Evaluate ADempiere ERP as a SAP alternative or local platform in Venezuela. Scope finance, localization, APIs, migration and support with ERPya.',
    h1: 'A SAP alternative in Venezuela, evaluated around your operation', badge: 'ERP strategy · Local integration',
    intro: 'If your group uses SAP or is evaluating it for Venezuela, ERPya can help assess ADempiere ERP as an alternative for the local operation or as a complementary platform connected through defined interfaces.',
    focus: 'Choose the architecture before committing to a replacement',
    sections: [
      { title: 'A local ERP for a defined business scope', text: 'Evaluate accounting, purchasing, sales, inventory, production and payroll against your actual processes. Identify fit, configuration and development needs before selecting the platform.' },
      { title: 'Coexistence with the corporate system', text: 'Define which system owns customers, products, transactions and reporting. API and data-integration work must be scoped against available SAP interfaces, access rights and corporate policies.' },
      { title: 'Compare implementation responsibilities', text: 'Review migration, infrastructure, support, training and technology transfer alongside functional coverage. Evaluate total project effort and ongoing operation with your own requirements and proposals.' },
    ],
    decision: 'For CFO and CIO: compare the local platform, a corporate rollout and an integration scenario using the same process scope. ERPya does not claim automatic SAP compatibility, equivalent feature coverage or guaranteed savings.',
    questions: ['Which processes must remain in SAP and which can run locally?', 'Which interfaces and licenses are available for integration?', 'What reconciliation, controls and migration acceptance criteria will Finance require?'],
    faq: [{ question: 'Is ERPya affiliated with SAP?', answer: 'This proposal concerns ERPya services and ADempiere ERP. It does not imply affiliation, endorsement or certification by SAP. SAP is a trademark of SAP SE.' }, { question: 'Can ERPya replace every SAP module?', answer: 'Coverage must be evaluated process by process. A replacement or coexistence plan depends on functional requirements, interfaces, data migration and the agreed implementation scope.' }],
    related: ['invest-in-venezuela-erp', 'venezuela-erp-localization', 'erp-venezuela'],
  },
  {
    slug: 'venezuela-erp-localization', lang: 'en', title: 'Venezuela ERP Localization: Finance, Payroll & APIs | ERPya',
    description: 'Scope Venezuelan ERP localization for accounting, multi-currency operations, payroll and local integrations. Connect local requirements to corporate reporting.',
    h1: 'Venezuela ERP localization for your local operation', badge: 'Local finance · Corporate reporting',
    intro: 'A corporate ERP blueprint needs a local operating model. ERPya helps define Venezuelan accounting, multi-currency, payroll and integration requirements within an ADempiere ERP implementation.',
    focus: 'Translate local requirements into configured processes',
    sections: [
      { title: 'Accounting and multi-currency workflows', text: 'Map the chart of accounts, receivables, payables, treasury and period close. Define how exchange rates and currency amounts flow into documents and reporting.' },
      { title: 'Payroll and local integrations', text: 'Scope employee records, payroll and withholdings. Evaluate ERPya services for BCV exchange-rate capture and SENIAT business-partner data where appropriate to your operation.' },
      { title: 'Corporate reporting and ownership', text: 'Agree on mappings, reporting periods and interface responsibilities between the local team and headquarters. Include training and support for the configured workflows.' },
    ],
    decision: 'For the Finance Director and CIO: document the local requirements with your accounting and payroll teams, then validate configurations and interfaces before launch. Applicable obligations and reporting formats must be confirmed for each entity and project.',
    questions: ['Which accounting and payroll requirements apply to the Venezuelan entity?', 'How will currencies and exchange rates be managed and reconciled?', 'Which local data and reports must be shared with headquarters?'],
    faq: [{ question: 'Does localization guarantee compliance with all Venezuelan rules?', answer: 'No blanket compliance guarantee is offered. The project must validate applicable accounting, payroll and fiscal requirements with the company’s responsible specialists and agree on configuration, testing and maintenance.' }],
    related: ['invest-in-venezuela-erp', 'erp-venezuela', 'sap-alternative-venezuela'],
  },
  {
    slug: 'manufacturing-erp-venezuela', lang: 'es', title: 'ERP para manufactura y producción en Venezuela | ERPya',
    description: 'Conecte listas de materiales, órdenes de producción, compras, inventario y contabilidad con ADempiere ERP. Planifique su expansión industrial con ERPya.',
    h1: 'ERP para manufactura y producción en Venezuela', badge: 'Industria · Producción',
    intro: 'Una nueva planta o línea de producción necesita coordinar materiales, compras y finanzas. ERPya implementa ADempiere ERP para conectar las órdenes de producción con inventario y contabilidad.',
    focus: 'Conecte la planta con las decisiones financieras',
    sections: [
      { title: 'Materiales y órdenes de producción', text: 'Estructure listas de materiales y órdenes para registrar consumos y productos elaborados. Revise con Operaciones cómo representar cada proceso y sus necesidades de planificación.' },
      { title: 'Abastecimiento e inventario', text: 'Relacione órdenes de compra, recepciones, transferencias y existencias por almacén. Defina lotes y series cuando formen parte del control de materiales y producto terminado.' },
      { title: 'Información para Finanzas y Operaciones', text: 'Conecte los movimientos operativos con la contabilidad y evalúe el modelo de costos y los reportes de producción requeridos. Las interfaces con equipos o sistemas de planta se estudian en el alcance.' },
    ],
    decision: 'Para Operations Director y CFO: acuerde cómo registrar consumos, producción y existencias antes de expandir capacidad. Para CIO: identifique datos maestros, infraestructura e interfaces necesarias para la planta.',
    questions: ['¿Qué listas de materiales y procesos usa la planta?', '¿Cómo se registran consumos y producto terminado?', '¿Qué costos, lotes y reportes deben validarse antes de iniciar?'],
    faq: [{ question: '¿Qué cobertura de manufactura se puede evaluar?', answer: 'La cobertura de ADempiere publicada por ERPya incluye listas de materiales, órdenes de manufactura, inventario multi-almacén y lotes o series. Requisitos de MRP, calidad, mantenimiento o interfaces de planta se evalúan específicamente; no se presuponen incluidos.' }],
    related: ['erp-venezuela', 'agroindustry-erp-venezuela', 'venezuela-erp-localization'],
  },
  {
    slug: 'oil-gas-erp-venezuela', lang: 'en', title: 'ERP for Oil & Gas Operations in Venezuela | ERPya',
    description: 'Plan finance, procurement, inventory, payroll and integrations for oil and gas businesses in Venezuela with ADempiere ERP and local ERPya support.',
    h1: 'ERP for oil and gas business operations in Venezuela', badge: 'Energy · Business operations',
    intro: 'Energy companies and service providers entering or expanding in Venezuela need control over purchasing, materials and finance. ERPya scopes an ADempiere ERP platform for these business processes and their connection to corporate systems.',
    focus: 'Build control around procurement, materials and cash',
    sections: [
      { title: 'Procurement and supplier administration', text: 'Connect purchase orders, receipts and supplier invoices. Define the approvals, data and reports needed to manage local procurement and financial commitments.' },
      { title: 'Materials across operating locations', text: 'Manage stock, warehouse transfers and lot or serial records where required. Map the materials flow between offices, storage locations and service operations.' },
      { title: 'Finance, payroll and corporate interfaces', text: 'Scope accounting, treasury, multi-currency transactions and local payroll. Assess APIs, cloud infrastructure and reporting interfaces with the corporate technology team.' },
    ],
    decision: 'For Country Manager, CFO and Operations Director: establish visibility over suppliers, materials and cash before scaling operations. This proposal covers business administration; specialized reservoir, drilling, process-control or field systems require a separate integration assessment.',
    questions: ['Which entities, service operations and warehouses need local administration?', 'Which purchasing and materials controls are required?', 'What corporate or specialized systems need agreed data interfaces?'],
    faq: [{ question: 'Does this ERP replace specialized oil and gas systems?', answer: 'The proposed scope is finance, procurement, sales, inventory, payroll and business integrations. Specialized engineering and field systems are assessed as external systems where an interface is required.' }],
    related: ['invest-in-venezuela-erp', 'venezuela-erp-localization', 'sap-alternative-venezuela'],
  },
  {
    slug: 'agroindustry-erp-venezuela', lang: 'es', title: 'ERP para agroindustria en Venezuela | ERPya',
    description: 'Integre recepción de materias primas, producción, inventarios, compras, ventas y contabilidad en su agroindustria venezolana con ADempiere ERP y ERPya.',
    h1: 'ERP para agroindustria en Venezuela', badge: 'Agroindustria · Gestión integrada',
    intro: 'La expansión agroindustrial exige conectar la recepción de materias primas con transformación, inventario y comercialización. ERPya adapta ADempiere ERP al flujo operativo de su empresa y a la información que necesita Finanzas.',
    focus: 'Siga el flujo desde la recepción hasta la venta',
    sections: [
      { title: 'Compras y recepción de materias primas', text: 'Relacione proveedores, órdenes y recepciones con el inventario disponible. Defina unidades, almacenes y datos de recepción según las materias primas de su operación.' },
      { title: 'Transformación e inventarios', text: 'Modele materiales y órdenes de producción para registrar consumos y productos elaborados. Configure lotes y movimientos entre almacenes para apoyar el seguimiento de la operación.' },
      { title: 'Comercialización y control financiero', text: 'Conecte pedidos, facturación, cobros y cuentas por pagar con la contabilidad. Evalúe el modelo de costos, la tesorería y los reportes necesarios para gestionar campañas y expansión.' },
    ],
    decision: 'Para Operations Director y Finance Director: defina el flujo de materias primas y producto terminado, los datos necesarios por lote y la información financiera de cada etapa. Requisitos de pesaje, laboratorio o equipos se revisan como integraciones específicas.',
    questions: ['¿Qué materias primas, unidades y etapas de transformación debe representar el ERP?', '¿Qué datos y movimientos necesita seguir por lote?', '¿Qué sistemas de recepción o producción necesitan una integración?'],
    faq: [{ question: '¿Se incluyen conexiones con básculas y laboratorios?', answer: 'Se evalúan según los equipos, interfaces y procesos disponibles. La propuesta base conecta compras, inventarios, producción, ventas y contabilidad; las integraciones especializadas se acuerdan en el alcance.' }],
    related: ['erp-venezuela', 'manufacturing-erp-venezuela', 'venezuela-erp-localization'],
  },
]
export const siteUrl = 'https://erpya.com'
export function assessmentUrl(page: Landing) {
  const text = page.lang === 'en'
    ? `I would like to request a Venezuela Technology Readiness Assessment. Area of interest: ${page.h1}.`
    : `Quisiera solicitar una evaluación de preparación tecnológica para Venezuela. Área de interés: ${page.h1}.`
  return `https://wa.me/584122223824?text=${encodeURIComponent(text)}`
}
export function structuredData(page: Landing) {
  return {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebPage', '@id': `${siteUrl}/${page.slug}#webpage`, url: `${siteUrl}/${page.slug}`, name: page.h1, description: page.description, inLanguage: page.lang, about: { '@id': `${siteUrl}/${page.slug}#service` } },
      { '@type': 'Service', '@id': `${siteUrl}/${page.slug}#service`, name: page.h1, description: page.description, serviceType: 'ERP implementation and technology services', areaServed: { '@type': 'Country', name: 'Venezuela' }, provider: { '@type': 'Organization', name: 'ERPya', url: siteUrl } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ERPya', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: page.h1, item: `${siteUrl}/${page.slug}` },
      ] },
    ],
  }
}

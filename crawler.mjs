import * as fs from 'fs'
import * as cheerio from 'cheerio'

const urls = [
  '/portfolio/gestion-financiera/',
  '/portfolio/gestion-de-capital-humano/',
  '/portfolio/gestion-de-manufactura/',
  '/portfolio/gestion-del-cliente-crm/',
  '/portfolio/gestion-de-distribucion/',
  '/portfolio/gestion-de-activos/',
  '/portfolio/gestion-de-servicios/',
  '/portfolio/gestion-de-proyectos/',
  '/portfolio/retail/',
  '/portfolio/distribucion-y-logistica/',
  '/portfolio/transporte/',
  '/portfolio/supermercado-de-no-alimentos/',
  '/portfolio/supermercado-de-alimentos/',
  '/nube/',
  '/consultoria-de-procesos/',
  '/soporte-y-mantenimiento/',
  '/quienes-somos/',
  '/por-que-nosotros/',
  '/gestion-de-compras/',
  '/gestion-de-ventas/'
]

const toCamelCase = (str) => {
  return str.replace(/[-_/](.)/g, (_, c) => c.toUpperCase()).replace(/[^a-zA-Z0-9]/g, '')
}

async function run() {
  const generatedDir = './src/pages/generated'
  
  for (const urlPath of urls) {
    console.log(`Buscando Estructura: ${urlPath}`)
    try {
      const res = await fetch(`https://erpya.com${urlPath}`)
      const html = await res.text()
      const $ = cheerio.load(html)
      
      let title = $('h1').first().text()?.trim() || $('h2').first().text()?.trim() || 'ERPyA'
      if(title === 'ERPyA' && urlPath.includes('compras')) title = 'Gestión de Compras';
      if(title === 'ERPyA' && urlPath.includes('ventas')) title = 'Gestión de Ventas';
      
      let dataMap = { 'General': { p: [], li: [] } }
      let currentKey = 'General'

      // Recorremos los elementos de forma ordenada
      const nodes = $('.entry-content, .fusion-text, main').find('h2, h3, h4, h5, p, ul')
      
      nodes.each((i, el) => {
        const tag = el.tagName.toLowerCase();
        let text = $(el).text().trim().replace(/["\\]/g, '\\$&'); // escape quotes

        if (tag.match(/^h[2345]$/)) {
          // Removemos encabezados basura
          if(text.length > 2 && text.length < 80 && !text.includes('Menu') && !text.includes('Beneficios')) {
            currentKey = text;
            if(!dataMap[currentKey]) dataMap[currentKey] = { p: [], li: [] };
          }
        } else if (tag === 'p') {
          if (text.length > 25 && !text.includes('C.C Buenaventura') && !text.includes('Más de ') && !text.includes('Más contabilidad')) {
            // Deduplicate
            if(!dataMap[currentKey].p.includes(text)) {
               dataMap[currentKey].p.push(text)
            }
          }
        } else if (tag === 'ul') {
          $(el).find('li').each((_, liEl) => {
             const litxt = $(liEl).text().trim().replace(/["\\]/g, '\\$&');
             if(litxt.length > 5 && !dataMap[currentKey].li.includes(litxt)) {
               dataMap[currentKey].li.push(litxt);
             }
          });
        }
      })

      // Clean empty segments
      const finalSections = Object.keys(dataMap).filter(k => dataMap[k].p.length > 0 || dataMap[k].li.length > 0);

      if(finalSections.length === 0) {
         dataMap['General'].p = ['Información detallada sobre este módulo en estructuración.']
         finalSections.push('General');
      }

      const pageName = toCamelCase(urlPath)
      const componentName = pageName.charAt(0).toUpperCase() + pageName.slice(1)

      const introTexts = dataMap['General'] ? dataMap['General'].p : [];
      const featureSections = finalSections.filter(k => k !== 'General');

      const code = `import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronRight, LayoutGrid } from 'lucide-react'

export default function ${componentName}() {
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
          ${title}
        </motion.h1>

        ${introTexts.length > 0 ? `
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mt-2 mb-8"
        >
          ${introTexts.map(p => `<p className="mb-4">${p}</p>`).join('\n          ')}
        </motion.div>
        ` : ''}
      </div>

      {/* RICH CONTENT GRID */}
      ${featureSections.length > 0 ? `
      <div className="w-full bg-muted/20 border-t border-border mt-12 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
               <LayoutGrid size={24} />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Características Principales</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            ${featureSections.map((sec, i) => {
              const obj = dataMap[sec];
              return `
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: ${i * 0.1 > 1 ? 1 : i * 0.1} }}
              className="glass-card p-8 flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow border-t border-t-white/10"
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-border w-full pb-4 mb-2">${sec}</h3>
              ${obj.p.map(p => `
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">${p}</p>
              `).join('')}
              ${obj.li.length > 0 ? `
              <ul className="mt-2 space-y-3 w-full">
                ${obj.li.map((l, j) => `
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="opacity-90 leading-relaxed">${l}</span>
                </li>
                `).join('\n                ')}
              </ul>
              ` : ''}
            </motion.div>
              `
            }).join('\n')}
          </div>
        </div>
      </div>
      ` : ''}
      
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
            <p className="text-muted-foreground">Conversemos sobre cómo adaptar <strong>${title}</strong> a tus requerimientos.</p>
          </div>
          <a href="#contacto" className="whitespace-nowrap px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20">
            Contáctanos ahora <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
`
      fs.writeFileSync(`${generatedDir}/${componentName}.tsx`, code)
    } catch (e) {
      console.error('Error en ' + urlPath, e)
    }
  }

  console.log('Crawler Terminado, páginas reescritas exitosamente.')
}

run()

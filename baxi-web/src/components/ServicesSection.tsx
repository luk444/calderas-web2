import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Wrench, Settings, Hammer, Zap, Flame, Droplets } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Servicio Oficial BAXI',
      description: 'Mantenimiento y reparación con garantía del fabricante, repuestos originales y técnicos certificados.',
      path: '/servicios/baxi-oficial',
      badge: 'Oficial'
    },
    {
      icon: Settings,
      title: 'Mantenimiento Preventivo',
      description: 'Optimización de rendimiento, limpieza de intercambiadores y análisis de gases para máxima eficiencia.',
      path: '/servicios/mantenimiento'
    },
    {
      icon: Hammer,
      title: 'Instalación Certificada',
      description: 'Asesoramiento técnico, instalación profesional y garantía extendida en todos nuestros trabajos.',
      path: '/servicios/instalacion'
    },
    {
      icon: Zap,
      title: 'Reparación Multimarca',
      description: 'Diagnóstico rápido, reparación eficiente y repuestos de calidad para todas las marcas del mercado.',
      path: '/servicios/multimarca'
    },
    {
      icon: Flame,
      title: 'Piso Radiante',
      description: 'Instalación y mantenimiento de sistemas de calefacción por piso radiante con control de zonas.',
      path: '/servicios/piso-radiante'
    },
    {
      icon: Droplets,
      title: 'Radiadores',
      description: 'Dimensionado, instalación, purga y equilibrio de radiadores para distribución uniforme del calor.',
      path: '/servicios/radiadores'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Soluciones integrales para calefacción y climatización con la más alta calidad técnica y profesional.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Link to={service.path}>
                <div className="card p-8 h-full hover:border-brand-600 transition-all duration-200">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center group-hover:bg-brand-200 transition-colors">
                      <service.icon className="w-7 h-7 text-brand-600" />
                    </div>
                    {service.badge && (
                      <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-brand-600 font-medium group-hover:text-brand-700 transition-colors">
                    <span>Saber más</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection

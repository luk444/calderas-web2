import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Wrench, Settings, Zap, Flame, Droplets, Clock, Shield, Award } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Servicio Técnico Oficial BAXI',
      description: 'Mantenimiento y reparación con garantía del fabricante, repuestos originales y técnicos certificados.',
      path: '/servicios/baxi-oficial',
      badge: 'Oficial',
      features: ['Garantía del fabricante', 'Repuestos originales', 'Técnicos certificados', 'Soporte directo BAXI']
    },
    {
      icon: Settings,
      title: 'Mantenimiento Preventivo',
      description: 'Optimización de rendimiento, limpieza de intercambiadores y análisis de gases para máxima eficiencia.',
      path: '/servicios/mantenimiento',
      features: ['Limpieza de intercambiadores', 'Análisis de gases', 'Ajuste de combustión', 'Verificación de seguridad']
    },
    {
      icon: Wrench,
      title: 'Instalación Certificada',
      description: 'Asesoramiento técnico, instalación profesional y garantía extendida en todos nuestros trabajos.',
      path: '/servicios/instalacion',
      features: ['Asesoramiento técnico', 'Instalación profesional', 'Garantía extendida', 'Certificación RITE']
    },
    {
      icon: Zap,
      title: 'Reparación Multimarca',
      description: 'Diagnóstico rápido, reparación eficiente y repuestos de calidad para todas las marcas del mercado.',
      path: '/servicios/multimarca',
      features: ['Diagnóstico rápido', 'Reparación eficiente', 'Repuestos de calidad', 'Todas las marcas']
    },
    {
      icon: Flame,
      title: 'Piso Radiante',
      description: 'Instalación y mantenimiento de sistemas de calefacción por piso radiante con control de zonas.',
      path: '/servicios/piso-radiante',
      features: ['Instalación completa', 'Control de zonas', 'Termostatos inteligentes', 'Mantenimiento especializado']
    },
    {
      icon: Droplets,
      title: 'Radiadores',
      description: 'Dimensionado, instalación, purga y equilibrio de radiadores para distribución uniforme del calor.',
      path: '/servicios/radiadores',
      features: ['Dimensionado técnico', 'Instalación profesional', 'Purga y equilibrio', 'Distribución uniforme']
    }
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Respuesta Rápida',
      description: 'Urgencias atendidas en 30-60 minutos según tu zona'
    },
    {
      icon: Shield,
      title: 'Garantía Oficial',
      description: 'Trabajos con garantía del fabricante y nuestra garantía adicional'
    },
    {
      icon: Award,
      title: 'Técnicos Certificados',
      description: 'Equipo con certificaciones oficiales y más de 15 años de experiencia'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Nuestros Servicios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Soluciones integrales para calefacción y climatización con la más alta 
            calidad técnica y profesional. Servicio oficial BAXI y multimarca.
          </motion.p>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Servicios Especializados
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Desde mantenimiento preventivo hasta instalaciones completas, 
              cubrimos todas las necesidades de tu sistema de calefacción.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-brand-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-brand-600 font-medium group-hover:text-brand-700 transition-colors">
                      <span>Ver detalles</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
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
              ¿Por qué elegir BaxiService?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Más de 15 años de experiencia y miles de clientes satisfechos 
              avalan nuestro compromiso con la calidad y el servicio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Necesitas servicio técnico?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Nuestro equipo está disponible 24/7 para atender tus necesidades. 
              Contacta con nosotros y obtén una respuesta inmediata.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5491128462184?text=Hola,%20necesito%20información%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Consultar por WhatsApp
              </a>
              <a
                href="/contacto"
                className="btn-outline border-white text-white hover:bg-white hover:text-brand-600"
              >
                Agendar visita
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services

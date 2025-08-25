import { motion } from 'framer-motion'
import { CheckCircle, Shield, Award, Clock, Wrench, Settings, Zap, MapPin } from 'lucide-react'

const Installation = () => {
  const installationTypes = [
    {
      icon: Wrench,
      title: 'Instalación de Calderas',
      description: 'Instalación profesional de calderas murales y de pie con todas las certificaciones necesarias.',
      features: ['Dimensionado técnico', 'Instalación certificada', 'Pruebas de funcionamiento', 'Garantía extendida'],
      duration: '4-6 horas',
      price: 'Desde $45.000'
    },
    {
      icon: Settings,
      title: 'Sistemas de Piso Radiante',
      description: 'Instalación completa de sistemas de calefacción por piso radiante con control de zonas.',
      features: ['Diseño del sistema', 'Instalación de tuberías', 'Control de zonas', 'Termostatos inteligentes'],
      duration: '2-3 días',
      price: 'Desde $180.000'
    },
    {
      icon: Zap,
      title: 'Radiadores',
      description: 'Instalación y equilibrado de sistemas de radiadores para distribución uniforme del calor.',
      features: ['Dimensionado técnico', 'Instalación profesional', 'Equilibrado del sistema', 'Pruebas de funcionamiento'],
      duration: '1-2 días',
      price: 'Desde $80.000'
    },
    {
      icon: Shield,
      title: 'Sistemas de Agua Caliente',
      description: 'Instalación de sistemas de agua caliente sanitaria y acumuladores.',
      features: ['Diseño del sistema', 'Instalación certificada', 'Pruebas de presión', 'Mantenimiento inicial'],
      duration: '6-8 horas',
      price: 'Desde $60.000'
    }
  ]

  const installationProcess = [
    {
      step: '01',
      title: 'Evaluación Técnica',
      description: 'Visita técnica para evaluar las necesidades, espacio disponible y requisitos específicos.',
      icon: MapPin
    },
    {
      step: '02',
      title: 'Diseño y Presupuesto',
      description: 'Elaboración del diseño técnico detallado y presupuesto transparente sin sorpresas.',
      icon: Settings
    },
    {
      step: '03',
      title: 'Instalación Profesional',
      description: 'Instalación realizada por técnicos certificados siguiendo todas las normativas vigentes.',
      icon: Wrench
    },
    {
      step: '04',
      title: 'Pruebas y Certificación',
      description: 'Pruebas completas del sistema y entrega de certificación técnica oficial.',
      icon: Award
    }
  ]

  const certifications = [
    'Certificación RITE (Reglamento de Instalaciones Térmicas)',
    'Técnicos certificados por fabricantes',
    'Cumplimiento de normativas de gas',
    'Certificaciones de seguridad eléctrica',
    'Garantía extendida en instalaciones',
    'Soporte post-instalación incluido'
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Certificación Oficial',
      description: 'Técnicos certificados y autorizados para realizar instalaciones que cumplen todas las normativas.'
    },
    {
      icon: Shield,
      title: 'Garantía Completa',
      description: 'Garantía en mano de obra y acceso a garantías extendidas del fabricante.'
    },
    {
      icon: Clock,
      title: 'Proyectos a Tiempo',
      description: 'Cumplimos los plazos acordados sin comprometer la calidad de la instalación.'
    },
    {
      icon: Zap,
      title: 'Tecnología Avanzada',
      description: 'Utilizamos las últimas tecnologías y equipos para garantizar instalaciones de máxima calidad.'
    }
  ]

  return (
    <div className="pt-20 sm:pt-24 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Instalación Certificada
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Instalaciones profesionales de calderas, piso radiante y sistemas de calefacción 
            con certificación oficial y garantía extendida.
          </motion.p>
        </div>
      </section>

      {/* Tipos de instalación */}
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
              Servicios de instalación
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Cubrimos todos los tipos de instalación de sistemas de calefacción 
              con la máxima calidad y certificación oficial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {installationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-brand-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {type.title}
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {type.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-neutral-200 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-neutral-500">
                      <Clock className="w-4 h-4" />
                      <span>{type.duration}</span>
                    </div>
                    <div className="text-lg font-bold text-accent-500">
                      {type.price}
                    </div>
                  </div>
                  
                  <a
                    href={`/contacto?servicio=instalacion&tipo=${type.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="btn-secondary w-full text-center"
                  >
                    Solicitar presupuesto
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de instalación */}
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
              Nuestro proceso de instalación
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Un proceso sistemático y transparente que garantiza instalaciones 
              de la más alta calidad y cumplimiento de normativas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {step.step}
                </div>
                
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-brand-600" />
                </div>
                
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
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
              ¿Por qué elegir BaxiService para instalaciones?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Más de 15 años de experiencia en instalaciones certificadas 
              nos avalan como la mejor opción del mercado.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-brand-600" />
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

      {/* Certificaciones */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8">
                Certificaciones y garantías
              </h2>
              
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Nuestras instalaciones cumplen con todas las normativas vigentes 
                y cuentan con certificaciones oficiales que garantizan la calidad.
              </p>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                    <span className="text-neutral-700">{cert}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-success-50 rounded-lg border border-success-200">
                <p className="text-success-800 text-sm">
                  <strong>Garantía:</strong> Todas nuestras instalaciones incluyen garantía 
                  en mano de obra y acceso a garantías extendidas del fabricante.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-success-50 to-brand-50 rounded-2xl p-8 border border-success-200">
                <div className="text-center">
                  <div className="w-24 h-24 bg-success-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Instalación Certificada
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    Cada instalación incluye certificación técnica oficial y 
                    documentación completa para garantías y seguros.
                  </p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Garantía:</span>
                      <span className="font-medium text-neutral-900">2 años</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Certificación:</span>
                      <span className="font-medium text-neutral-900">Incluida</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Soporte:</span>
                      <span className="font-medium text-neutral-900">Post-instalación</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              ¿Necesitas una instalación profesional?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Nuestro equipo de técnicos certificados está listo para realizar 
              tu instalación con la máxima calidad y garantía.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto?servicio=instalacion"
                className="btn-primary"
              >
                Solicitar presupuesto
              </a>
              <a
                href="https://wa.me/5491128462184?text=Hola,%20necesito%20un%20presupuesto%20para%20instalación%20de%20sistema%20de%20calefacción"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-brand-600"
              >
                WhatsApp técnico
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Installation

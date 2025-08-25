import { motion } from 'framer-motion'
import { CheckCircle, Shield, Award, Clock, Wrench, Settings, Zap, AlertTriangle } from 'lucide-react'

const Multibrand = () => {
  const brands = [
    'BAXI', 'Peisa', 'Ariston', 'Euterma', 'Caldaia', 'Vaillant', 'Buderus', 
    'Junkers', 'Wolf', 'Bosch', 'Ferroli', 'Immergas', 'Beretta', 'Cointra'
  ]

  const services = [
    {
      icon: Wrench,
      title: 'Diagnóstico Técnico',
      description: 'Identificación precisa del problema con equipos especializados para cada marca.',
      features: ['Análisis completo del sistema', 'Identificación de fallas', 'Presupuesto detallado', 'Recomendaciones técnicas'],
      duration: '30-60 min',
      price: 'Desde $8.000'
    },
    {
      icon: Settings,
      title: 'Reparación General',
      description: 'Reparación completa de calderas y sistemas de calefacción de todas las marcas.',
      features: ['Cambio de repuestos', 'Ajuste de sistemas', 'Pruebas de funcionamiento', 'Garantía en reparación'],
      duration: '2-4 horas',
      price: 'Desde $25.000'
    },
    {
      icon: Zap,
      title: 'Mantenimiento Correctivo',
      description: 'Mantenimiento específico para resolver problemas y prevenir futuras averías.',
      features: ['Limpieza de componentes', 'Ajuste de combustión', 'Verificación de seguridad', 'Reporte técnico'],
      duration: '1-2 horas',
      price: 'Desde $15.000'
    },
    {
      icon: Shield,
      title: 'Reparación de Urgencia',
      description: 'Servicio de emergencia 24/7 para resolver problemas críticos inmediatamente.',
      features: ['Respuesta en 30-60 min', 'Diagnóstico rápido', 'Reparación urgente', 'Disponibilidad 24/7'],
      duration: 'Variable',
      price: 'Desde $35.000'
    }
  ]

  const commonProblems = [
    {
      problem: 'No enciende la caldera',
      causes: ['Problemas de gas', 'Fallo en el encendido', 'Problemas eléctricos', 'Sensores defectuosos'],
      solution: 'Diagnóstico completo del sistema de encendido y reparación de componentes defectuosos.'
    },
    {
      problem: 'Pérdida de presión',
      causes: ['Fugas en el sistema', 'Válvula de seguridad defectuosa', 'Problemas en el vaso de expansión'],
      solution: 'Localización y reparación de fugas, verificación de válvulas y componentes del sistema.'
    },
    {
      problem: 'Ruidos extraños',
      causes: ['Aire en el sistema', 'Componentes sueltos', 'Problemas de combustión', 'Vibraciones'],
      solution: 'Purgado del sistema, ajuste de componentes y optimización de la combustión.'
    },
    {
      problem: 'Consumo excesivo de gas',
      causes: ['Mala combustión', 'Intercambiadores sucios', 'Aislamiento deficiente', 'Regulación incorrecta'],
      solution: 'Limpieza de intercambiadores, ajuste de combustión y optimización del sistema.'
    }
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Experiencia Multimarca',
      description: 'Más de 15 años reparando calderas de todas las marcas del mercado con técnicos especializados.'
    },
    {
      icon: Shield,
      title: 'Repuestos de Calidad',
      description: 'Utilizamos repuestos originales cuando es posible y de primera calidad para garantizar durabilidad.'
    },
    {
      icon: Clock,
      title: 'Respuesta Rápida',
      description: 'Diagnóstico en menos de 1 hora y reparación en el mismo día para la mayoría de problemas.'
    },
    {
      icon: Zap,
      title: 'Garantía en Reparaciones',
      description: 'Todas nuestras reparaciones incluyen garantía en mano de obra y repuestos utilizados.'
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
            Reparación Multimarca
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Reparamos calderas y sistemas de calefacción de todas las marcas del mercado. 
            Diagnóstico rápido, reparación eficiente y garantía en todos nuestros trabajos.
          </motion.p>
        </div>
      </section>

      {/* Marcas que atendemos */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Marcas que atendemos
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Cubrimos todas las marcas del mercado con técnicos especializados 
              y acceso a repuestos de calidad.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-100 rounded-lg p-4 text-center hover:bg-brand-100 transition-colors"
              >
                <div className="text-lg font-semibold text-neutral-700">
                  {brand}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios de reparación */}
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
              Servicios de reparación
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Soluciones completas para todos los problemas de calderas y sistemas 
              de calefacción, sin importar la marca.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-brand-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
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
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-lg font-bold text-accent-500">
                      {service.price}
                    </div>
                  </div>
                  
                  <a
                    href={`/contacto?servicio=reparacion&tipo=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="btn-secondary w-full text-center"
                  >
                    Solicitar servicio
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problemas comunes */}
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
              Problemas comunes y soluciones
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Conoce los problemas más frecuentes en calderas y cómo los solucionamos 
              de manera profesional y eficiente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commonProblems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {item.problem}
                  </h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-neutral-700 mb-2">Posibles causas:</h4>
                  <ul className="space-y-1">
                    {item.causes.map((cause, causeIndex) => (
                      <li key={causeIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-700 mb-2">Nuestra solución:</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
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
              ¿Por qué elegir BaxiService para reparaciones?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Nuestra experiencia multimarca y compromiso con la calidad 
              nos convierten en la mejor opción para reparar tu caldera.
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

      {/* Garantías */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8">
                Garantías y compromisos
              </h2>
              
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Nuestro compromiso con la calidad se refleja en las garantías 
                que ofrecemos en todas nuestras reparaciones.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-success" />
                  <span className="text-neutral-700">Garantía en mano de obra: 6 meses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-success" />
                  <span className="text-neutral-700">Garantía en repuestos: Según fabricante</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-success" />
                  <span className="text-neutral-700">Soporte post-reparación incluido</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-success" />
                  <span className="text-neutral-700">Presupuesto sin sorpresas</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-brand-50 rounded-lg border border-brand-200">
                <p className="text-brand-800 text-sm">
                  <strong>Importante:</strong> Todas nuestras reparaciones incluyen 
                  diagnóstico completo y presupuesto detallado antes de comenzar el trabajo.
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
              <div className="bg-gradient-to-br from-brand-50 to-accent-50 rounded-2xl p-8 border border-brand-200">
                <div className="text-center">
                  <div className="w-24 h-24 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Garantía BaxiService
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    Confía en nuestro servicio con la garantía de que tu caldera 
                    funcionará perfectamente después de la reparación.
                  </p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Mano de obra:</span>
                      <span className="font-medium text-neutral-900">6 meses</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Repuestos:</span>
                      <span className="font-medium text-neutral-900">Fabricante</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Soporte:</span>
                      <span className="font-medium text-neutral-900">Incluido</span>
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
              ¿Tu caldera necesita reparación?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Nuestro equipo de técnicos multimarca está listo para diagnosticar 
              y reparar tu caldera con la máxima calidad y garantía.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto?servicio=reparacion"
                className="btn-primary"
              >
                Solicitar reparación
              </a>
              <a
                href="https://wa.me/5491128462184?text=Hola,%20mi%20caldera%20tiene%20problemas,%20necesito%20reparación%20urgente"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-brand-600"
              >
                WhatsApp para urgencias
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Multibrand

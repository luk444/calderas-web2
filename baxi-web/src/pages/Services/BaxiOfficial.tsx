import { motion } from 'framer-motion'
import { CheckCircle, Shield, Award, Clock, Wrench, Zap, Star } from 'lucide-react'

const BaxiOfficial = () => {
  const benefits = [
    'Garantía del fabricante en repuestos y mano de obra',
    'Repuestos originales BAXI con certificación',
    'Técnicos certificados por el fabricante',
    'Servicio técnico especializado en toda la línea BAXI',
    'Mantenimiento preventivo según especificaciones oficiales',
    'Soporte técnico directo con BAXI Argentina',
    'Acceso a software técnico oficial',
    'Formación continua en nuevas tecnologías'
  ]

  const services = [
    {
      icon: Wrench,
      title: 'Mantenimiento Preventivo',
      description: 'Revisión completa según especificaciones del fabricante, incluyendo limpieza de intercambiadores, análisis de gases y ajuste de combustión.',
      features: ['Limpieza de intercambiadores', 'Análisis de gases', 'Ajuste de combustión', 'Verificación de seguridad', 'Reporte técnico oficial']
    },
    {
      icon: Zap,
      title: 'Reparación y Diagnóstico',
      description: 'Diagnóstico preciso con equipos oficiales BAXI y reparación con repuestos originales garantizados.',
      features: ['Diagnóstico con equipos oficiales', 'Repuestos originales', 'Garantía del fabricante', 'Soporte técnico directo']
    },
    {
      icon: Shield,
      title: 'Puesta en Marcha',
      description: 'Verificación completa del sistema según estándares BAXI para garantizar funcionamiento óptimo y mantener la garantía.',
      features: ['Verificación completa', 'Registro en garantía', 'Optimización inicial', 'Capacitación del usuario']
    },
    {
      icon: Award,
      title: 'Instalación Certificada',
      description: 'Instalación profesional de calderas BAXI con certificación oficial y garantía extendida.',
      features: ['Instalación certificada', 'Garantía extendida', 'Certificación RITE', 'Asesoramiento técnico']
    }
  ]

  const baxiModels = [
    'Duo-Tec+ (mural)',
    'Main (de pie)',
    'Luna Duo-Tec',
    'Eco (condensación)',
    'Aerotermia',
    'Sistemas de calefacción'
  ]

  const whyOfficial = [
    {
      icon: Shield,
      title: 'Garantía Protegida',
      description: 'Mantén la garantía del fabricante en todos los trabajos realizados por técnicos oficiales.'
    },
    {
      icon: Star,
      title: 'Calidad Oficial',
      description: 'Acceso a repuestos originales y especificaciones técnicas exactas del fabricante.'
    },
    {
      icon: Clock,
      title: 'Soporte Directo',
      description: 'Conexión directa con BAXI Argentina para casos complejos y consultas técnicas.'
    },
    {
      icon: Award,
      title: 'Certificación',
      description: 'Técnicos certificados y en constante formación con las últimas tecnologías BAXI.'
    }
  ]

  return (
    <div className="pt-20 sm:pt-24 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block bg-accent-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              SERVICIO OFICIAL
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Servicio Técnico Oficial BAXI
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Somos servicio técnico oficial autorizado por BAXI Argentina. 
            Técnicos certificados, repuestos originales y garantía del fabricante.
          </motion.p>
        </div>
      </section>

      {/* Beneficios del servicio oficial */}
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
              ¿Por qué elegir el servicio oficial BAXI?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              El servicio oficial te garantiza la máxima calidad, repuestos originales 
              y el respaldo completo del fabricante.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyOfficial.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios disponibles */}
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
              Servicios Oficiales BAXI
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Cubrimos todos los aspectos del mantenimiento y reparación 
              de tu caldera BAXI con la máxima calidad oficial.
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

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelos BAXI que atendemos */}
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
                Modelos BAXI que atendemos
              </h2>
              
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Cubrimos toda la línea de productos BAXI disponibles en Argentina, 
                desde calderas murales hasta sistemas de aerotermia.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {baxiModels.map((model, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                    <span className="text-neutral-700 font-medium">{model}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-brand-50 rounded-lg border border-brand-200">
                <p className="text-sm text-neutral-700">
                  <strong>Nota:</strong> Si tienes un modelo BAXI que no aparece en la lista, 
                  contáctanos para confirmar disponibilidad de servicio y repuestos.
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
                    <span className="text-white font-bold text-2xl">B</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Certificación Oficial
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    Nuestro equipo está certificado por BAXI Argentina y cuenta con 
                    acceso completo a la tecnología y repuestos oficiales.
                  </p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Certificación:</span>
                      <span className="font-medium text-neutral-900">Vigente</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Válida hasta:</span>
                      <span className="font-medium text-neutral-900">Diciembre 2024</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Nivel:</span>
                      <span className="font-medium text-neutral-900">Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beneficios detallados */}
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
              Beneficios completos del servicio oficial
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Descubre todas las ventajas de contratar un servicio técnico oficial BAXI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">{benefit}</span>
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
              ¿Necesitas servicio oficial BAXI?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Nuestros técnicos certificados están listos para atender tu caldera BAXI 
              con la máxima calidad y garantía oficial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto?servicio=baxi-oficial"
                className="btn-primary"
              >
                Solicitar servicio oficial
              </a>
              <a
                href="https://wa.me/5491128462184?text=Hola,%20necesito%20servicio%20oficial%20BAXI%20para%20mi%20caldera"
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

export default BaxiOfficial

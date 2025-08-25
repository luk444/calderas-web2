import { motion } from 'framer-motion'
import { CheckCircle, Shield, Award, Clock, Wrench, Settings, Zap, AlertTriangle, Phone, MessageCircle, MapPin, Users, Star } from 'lucide-react'

const Emergencies = () => {
  const emergencyServices = [
    {
      icon: AlertTriangle,
      title: 'Sin Calefacción',
      description: 'Tu caldera no enciende o no produce calor. Solución inmediata para restaurar la calefacción.',
      responseTime: '30-60 min',
      priority: 'Alta',
      price: 'Desde $35.000'
    },
    {
      icon: Zap,
      title: 'Fugas de Agua',
      description: 'Fugas en calderas, tuberías o sistemas de calefacción. Reparación urgente para evitar daños.',
      responseTime: '30-45 min',
      priority: 'Crítica',
      price: 'Desde $40.000'
    },
    {
      icon: Thermometer,
      title: 'Sobrecalentamiento',
      description: 'Caldera funcionando a temperaturas peligrosas. Apagado de emergencia y diagnóstico inmediato.',
      responseTime: '15-30 min',
      priority: 'Crítica',
      price: 'Desde $45.000'
    },
    {
      icon: Settings,
      title: 'Fallas Eléctricas',
      description: 'Problemas eléctricos en calderas o sistemas de control. Diagnóstico y reparación urgente.',
      responseTime: '45-90 min',
      priority: 'Alta',
      price: 'Desde $35.000'
    }
  ]

  const coverageAreas = [
    {
      zone: 'CABA - Centro',
      responseTime: '15-30 min',
      includes: ['Microcentro', 'Retiro', 'San Nicolás', 'Monserrat', 'San Telmo'],
      specialNote: 'Respuesta prioritaria'
    },
    {
      zone: 'CABA - Norte',
      responseTime: '20-40 min',
      includes: ['Palermo', 'Recoleta', 'Villa Crespo', 'Chacarita', 'Colegiales'],
      specialNote: 'Zona premium'
    },
    {
      zone: 'CABA - Sur',
      responseTime: '25-45 min',
      includes: ['La Boca', 'Barracas', 'Parque Patricios', 'Nueva Pompeya', 'Villa Soldati'],
      specialNote: 'Cobertura completa'
    },
    {
      zone: 'GBA - Zona Norte',
      responseTime: '45-90 min',
      includes: ['Vicente López', 'San Isidro', 'Tigre', 'San Fernando', 'Escobar'],
      specialNote: 'Cobertura extendida'
    },
    {
      zone: 'GBA - Zona Oeste',
      responseTime: '40-75 min',
      includes: ['Morón', 'Ituzaingó', 'Hurlingham', 'San Miguel', 'José C. Paz'],
      specialNote: 'Servicio disponible'
    },
    {
      zone: 'GBA - Zona Sur',
      responseTime: '50-90 min',
      includes: ['Quilmes', 'Avellaneda', 'Lanús', 'Lomas de Zamora', 'Esteban Echeverría'],
      specialNote: 'Cobertura completa'
    }
  ]

  const emergencyProcess = [
    {
      step: '01',
      title: 'Llamada de Emergencia',
      description: 'Recibimos tu llamada y evaluamos la urgencia del problema.',
      duration: '2-5 min',
      icon: Phone
    },
    {
      step: '02',
      title: 'Despacho Inmediato',
      description: 'Enviamos el técnico más cercano a tu ubicación.',
      duration: '5-10 min',
      icon: MapPin
    },
    {
      step: '03',
      title: 'Diagnóstico Rápido',
      description: 'El técnico evalúa el problema y te da un diagnóstico inmediato.',
      duration: '15-30 min',
      icon: Wrench
    },
    {
      step: '04',
      title: 'Reparación Urgente',
      description: 'Se realiza la reparación con prioridad máxima.',
      duration: 'Variable',
      icon: Wrench
    },
    {
      step: '05',
      title: 'Verificación y Garantía',
      description: 'Se verifica el funcionamiento y se garantiza la reparación.',
      duration: '10-15 min',
      icon: CheckCircle
    }
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Respuesta 24/7',
      description: 'Disponibles las 24 horas, los 7 días de la semana, incluyendo feriados y fines de semana.'
    },
    {
      icon: Users,
      title: 'Equipo de Emergencia',
      description: 'Técnicos especializados en emergencias con equipamiento completo para cualquier situación.'
    },
    {
      icon: Shield,
      title: 'Garantía de Urgencia',
      description: 'Garantía en todas las reparaciones de emergencia con soporte post-servicio incluido.'
    },
    {
      icon: Star,
      title: 'Experiencia Comprobada',
      description: 'Más de 15 años resolviendo emergencias de calefacción con cientos de casos exitosos.'
    }
  ]

  const emergencyTips = [
    {
      title: 'Antes de llamar',
      description: 'Cierra la llave de gas principal si hay olor a gas, y desconecta la electricidad si hay problemas eléctricos.',
      icon: AlertTriangle
    },
    {
      title: 'Información necesaria',
      description: 'Ten lista la marca y modelo de tu caldera, y describe el problema específico que estás experimentando.',
      icon: MessageCircle
    },
    {
      title: 'Preparar el acceso',
      description: 'Asegúrate de que el técnico pueda acceder fácilmente a tu caldera y sistema de calefacción.',
      icon: MapPin
    },
    {
      title: 'Documentación',
      description: 'Ten a mano la factura de la caldera o cualquier documentación de garantía si es posible.',
      icon: Shield
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-brand-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-accent-300" />
              <span className="text-sm font-medium">SERVICIO DE EMERGENCIA 24/7</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Urgencias 24/7
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
          >
            Tu caldera no funciona, hay una fuga o necesitas calefacción urgente. 
            Nuestro equipo de emergencia está disponible las 24 horas para ayudarte.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a
              href="tel:+5491128462184"
              className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>LLAMAR AHORA</span>
            </a>
            <a
              href="https://wa.me/5491128462184?text=URGENTE:%20Mi%20caldera%20no%20funciona,%20necesito%20ayuda%20inmediata"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-accent-600 text-lg px-8 py-4 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Urgente</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-accent-300" />
                <span>Respuesta en 15-30 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent-300" />
                <span>CABA y GBA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-accent-300" />
                <span>Garantía incluida</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servicios de emergencia */}
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
              Servicios de emergencia
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Resolvemos cualquier problema de calefacción de manera urgente 
              y profesional, sin importar la hora del día.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 border-l-4 border-accent-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-accent-600" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    service.priority === 'Crítica' ? 'bg-error text-white' : 'bg-warning text-white'
                  }`}>
                    {service.priority}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2 text-sm text-neutral-500">
                    <Clock className="w-4 h-4" />
                    <span>Respuesta: {service.responseTime}</span>
                  </div>
                  <div className="text-lg font-bold text-accent-500">
                    {service.price}
                  </div>
                </div>
                
                <a
                  href={`tel:+5491128462184?text=URGENTE:%20${service.title}`}
                  className="btn-primary w-full text-center"
                >
                  Llamar ahora
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de emergencia */}
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
              ¿Cómo funciona nuestro servicio de emergencia?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Un proceso simple y eficiente para resolver tu emergencia 
              de calefacción en el menor tiempo posible.
            </p>
          </motion.div>

          <div className="space-y-8">
            {emergencyProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-accent-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 lg:mb-0">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-4 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-lg text-neutral-600 mb-4 leading-relaxed text-center lg:text-left">
                    {step.description}
                  </p>
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-neutral-500">
                    <Clock className="w-4 h-4" />
                    <span>Duración: {step.duration}</span>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-accent-50 rounded-2xl p-8 h-48 flex items-center justify-center">
                    <div className="text-center text-accent-600">
                      <step.icon className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-sm font-medium">Paso {step.step}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zonas de cobertura */}
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
              Zonas de cobertura
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Cubrimos CABA y GBA con tiempos de respuesta garantizados 
              para emergencias de calefacción.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {area.zone}
                  </h3>
                  <span className="px-2 py-1 bg-brand-100 text-brand-700 text-xs font-medium rounded-full">
                    {area.responseTime}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-neutral-700 mb-2">Incluye:</h4>
                  <ul className="space-y-1">
                    {area.includes.map((location, locationIndex) => (
                      <li key={locationIndex} className="text-sm text-neutral-600">
                        • {location}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-neutral-50 rounded-lg p-3">
                  <p className="text-xs text-neutral-700">
                    <strong>Nota:</strong> {area.specialNote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consejos para emergencias */}
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
              Consejos para emergencias
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Prepárate para una emergencia de calefacción siguiendo 
              estos consejos de seguridad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {emergencyTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6">
                  <tip.icon className="w-8 h-8 text-accent-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {tip.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {tip.description}
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
              ¿Por qué elegir BaxiService para emergencias?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Nuestro servicio de emergencia 24/7 te ofrece la tranquilidad 
              de saber que siempre estamos disponibles cuando nos necesites.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-brand-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Tienes una emergencia de calefacción?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              No esperes más. Nuestro equipo de emergencia está disponible 
              las 24 horas para resolver tu problema inmediatamente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+5491128462184"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>LLAMAR AHORA</span>
              </a>
              <a
                href="https://wa.me/5491128462184?text=URGENTE:%20Necesito%20ayuda%20con%20mi%20caldera"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-accent-600 text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Urgente</span>
              </a>
            </div>
            
            <div className="mt-8 text-white/80 text-sm">
              <p>• Respuesta garantizada en 15-30 minutos en CABA</p>
              <p>• Disponible 24/7, 365 días al año</p>
              <p>• Técnicos certificados y equipamiento completo</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Emergencies

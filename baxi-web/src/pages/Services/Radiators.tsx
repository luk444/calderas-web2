import { motion } from 'framer-motion'
import { CheckCircle, Shield, Award, Clock, Wrench, Settings, Zap, Thermometer, Home, Users, Gauge } from 'lucide-react'

const Radiators = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Instalación de Radiadores',
      description: 'Instalación profesional de radiadores de agua y eléctricos con la máxima eficiencia.',
      features: ['Cálculo de potencia', 'Instalación hidráulica', 'Conectores y válvulas', 'Pruebas de funcionamiento'],
      duration: '1-3 días',
      price: 'Desde $45.000'
    },
    {
      icon: Settings,
      title: 'Mantenimiento Preventivo',
      description: 'Mantenimiento regular para asegurar el funcionamiento óptimo de los radiadores.',
      features: ['Limpieza de radiadores', 'Purgado de aire', 'Verificación de válvulas', 'Control de temperatura'],
      duration: '2-4 horas',
      price: 'Desde $20.000'
    },
    {
      icon: Wrench,
      title: 'Reparación y Reparación',
      description: 'Solución de problemas y reparación de radiadores y sistemas de distribución.',
      features: ['Diagnóstico de fallas', 'Reparación de válvulas', 'Cambio de conectores', 'Ajuste de temperatura'],
      duration: '1-2 días',
      price: 'Desde $35.000'
    },
    {
      icon: Thermometer,
      title: 'Optimización del Sistema',
      description: 'Ajuste y optimización del sistema de radiadores para máximo confort y eficiencia.',
      features: ['Balanceo hidráulico', 'Calibración de válvulas', 'Ajuste de zonas', 'Programación térmica'],
      duration: '3-5 horas',
      price: 'Desde $30.000'
    }
  ]

  const radiatorTypes = [
    {
      icon: Thermometer,
      title: 'Radiadores de Agua',
      description: 'Sistema tradicional que utiliza agua caliente para calefaccionar los ambientes.',
      advantages: ['Alta eficiencia', 'Distribución uniforme', 'Control de temperatura', 'Larga durabilidad'],
      bestFor: 'Hogares con sistema de calefacción central'
    },
    {
      icon: Zap,
      title: 'Radiadores Eléctricos',
      description: 'Solución práctica que funciona con electricidad, ideal para espacios específicos.',
      advantages: ['Instalación simple', 'Control independiente', 'Respuesta rápida', 'Sin obras'],
      bestFor: 'Habitaciones individuales o espacios pequeños'
    },
    {
      icon: Home,
      title: 'Radiadores de Diseño',
      description: 'Radiadores modernos que combinan funcionalidad con estética para tu decoración.',
      advantages: ['Diseño moderno', 'Múltiples colores', 'Diferentes tamaños', 'Integración visual'],
      bestFor: 'Espacios donde la estética es importante'
    },
    {
      icon: Gauge,
      title: 'Radiadores de Baja Temperatura',
      description: 'Sistema eficiente que funciona con agua a menor temperatura, ideal para piso radiante.',
      advantages: ['Máxima eficiencia', 'Ahorro energético', 'Confort superior', 'Ecológico'],
      bestFor: 'Sistemas de calefacción modernos y eficientes'
    }
  ]

  const installationProcess = [
    {
      step: '01',
      title: 'Evaluación y Cálculo',
      description: 'Análisis del espacio, cálculo de necesidades térmicas y selección del tipo de radiador.',
      duration: '1 día'
    },
    {
      step: '02',
      title: 'Preparación de la Instalación',
      description: 'Marcado de ubicaciones, preparación de soportes y conexiones hidráulicas.',
      duration: '1 día'
    },
    {
      step: '03',
      title: 'Instalación del Radiador',
      description: 'Colocación del radiador, conexión de tuberías y válvulas de control.',
      duration: '1 día'
    },
    {
      step: '04',
      title: 'Pruebas y Ajustes',
      description: 'Pruebas de presión, purgado del sistema y ajuste de temperaturas.',
      duration: '1 día'
    }
  ]

  const maintenanceTips = [
    {
      title: 'Purgado Regular',
      description: 'Purgar el aire de los radiadores cada inicio de temporada para mantener la eficiencia.',
      frequency: 'Cada temporada'
    },
    {
      title: 'Limpieza de Superficie',
      description: 'Limpiar la superficie de los radiadores para mantener la transferencia de calor óptima.',
      frequency: 'Mensual'
    },
    {
      title: 'Verificación de Válvulas',
      description: 'Controlar que las válvulas funcionen correctamente y no haya fugas.',
      frequency: 'Semanal'
    },
    {
      title: 'Control de Temperatura',
      description: 'Verificar que la temperatura del agua no exceda los límites recomendados.',
      frequency: 'Semanal'
    }
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Experiencia Especializada',
      description: 'Más de 12 años instalando y manteniendo sistemas de radiadores con cientos de proyectos exitosos.'
    },
    {
      icon: Users,
      title: 'Técnicos Certificados',
      description: 'Equipo de técnicos especializados en sistemas de calefacción con formación continua.'
    },
    {
      icon: Shield,
      title: 'Garantía Completa',
      description: 'Garantía en instalación, materiales y funcionamiento del sistema por 3 años.'
    },
    {
      icon: Clock,
      title: 'Servicio Rápido',
      description: 'Instalación en tiempo récord sin comprometer la calidad del trabajo.'
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
            Radiadores
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Instalación, mantenimiento y reparación de radiadores de agua y eléctricos. 
            Soluciones eficientes para calefaccionar tu hogar o negocio.
          </motion.p>
        </div>
      </section>

      {/* Tipos de radiadores */}
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
              Tipos de radiadores
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Conoce las diferentes opciones disponibles para encontrar la solución 
              perfecta para tu espacio y necesidades.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {radiatorTypes.map((type, index) => (
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

                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-700 mb-3">Ventajas:</h4>
                  <ul className="space-y-2">
                    {type.advantages.map((advantage, advantageIndex) => (
                      <li key={advantageIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="text-sm text-neutral-700">
                    <strong>Ideal para:</strong> {type.bestFor}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
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
              Nuestros servicios de radiadores
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Soluciones completas para la instalación, mantenimiento y reparación 
              de sistemas de radiadores.
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
                    href={`/contacto?servicio=radiadores&tipo=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
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

      {/* Proceso de instalación */}
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
              Proceso de instalación
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Nuestro proceso paso a paso garantiza una instalación profesional 
              y un sistema que funcionará perfectamente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-brand-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-neutral-500">
                  <Clock className="w-4 h-4" />
                  <span>{step.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consejos de mantenimiento */}
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
              Consejos de mantenimiento
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Mantén tu sistema de radiadores funcionando perfectamente 
              con estos consejos de mantenimiento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {maintenanceTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {tip.title}
                  </h3>
                  <span className="px-3 py-1 bg-brand-100 text-brand-700 text-sm font-medium rounded-full">
                    {tip.frequency}
                  </span>
                </div>
                
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
              ¿Por qué elegir BaxiService?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Nuestra experiencia y compromiso con la calidad nos convierten 
              en la mejor opción para tu sistema de radiadores.
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
              ¿Necesitas instalar radiadores?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Nuestro equipo está listo para instalar el sistema de radiadores 
              perfecto para tu hogar o negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto?servicio=radiadores"
                className="btn-primary"
              >
                Solicitar instalación
              </a>
              <a
                href="/contacto?servicio=radiadores&tipo=consulta"
                className="btn-outline border-white text-white hover:bg-white hover:text-brand-600"
              >
                Consulta gratuita
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Radiators

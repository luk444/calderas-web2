import { motion } from 'framer-motion'
import { CheckCircle, Shield, Award, Clock, Wrench, Settings, Zap, Thermometer, Home, Users } from 'lucide-react'

const RadiantFloor = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Instalación de Piso Radiante',
      description: 'Instalación completa de sistemas de calefacción por piso radiante con la máxima eficiencia.',
      features: ['Diseño del sistema', 'Instalación de tuberías', 'Conectores y colectores', 'Pruebas de presión'],
      duration: '3-7 días',
      price: 'Desde $180.000'
    },
    {
      icon: Settings,
      title: 'Mantenimiento Preventivo',
      description: 'Mantenimiento regular para asegurar el funcionamiento óptimo del sistema.',
      features: ['Limpieza de filtros', 'Verificación de presión', 'Control de temperatura', 'Inspección general'],
      duration: '2-4 horas',
      price: 'Desde $25.000'
    },
    {
      icon: Wrench,
      title: 'Reparación y Reparación',
      description: 'Solución de problemas y reparación de componentes del sistema de piso radiante.',
      features: ['Diagnóstico de fallas', 'Reparación de tuberías', 'Cambio de válvulas', 'Ajuste de temperatura'],
      duration: '1-3 días',
      price: 'Desde $45.000'
    },
    {
      icon: Thermometer,
      title: 'Optimización de Temperatura',
      description: 'Ajuste y optimización del sistema para máximo confort y eficiencia energética.',
      features: ['Calibración de termostatos', 'Balanceo del sistema', 'Ajuste de zonas', 'Programación inteligente'],
      duration: '4-6 horas',
      price: 'Desde $35.000'
    }
  ]

  const benefits = [
    {
      icon: Home,
      title: 'Confort Superior',
      description: 'Calor uniforme y natural que se distribuye desde el suelo, creando un ambiente más agradable.'
    },
    {
      icon: Zap,
      title: 'Eficiencia Energética',
      description: 'Hasta 30% más eficiente que otros sistemas de calefacción, reduciendo el consumo de energía.'
    },
    {
      icon: Shield,
      title: 'Salud y Bienestar',
      description: 'No genera corrientes de aire ni reseca el ambiente, mejorando la calidad del aire interior.'
    },
    {
      icon: Award,
      title: 'Durabilidad',
      description: 'Sistema de larga vida útil con mínimo mantenimiento y alta confiabilidad.'
    }
  ]

  const installationProcess = [
    {
      step: '01',
      title: 'Evaluación y Diseño',
      description: 'Análisis del espacio, cálculo de necesidades térmicas y diseño del sistema optimizado.',
      duration: '1-2 días'
    },
    {
      step: '02',
      title: 'Preparación del Piso',
      description: 'Instalación de aislación térmica, malla de refuerzo y preparación de la superficie.',
      duration: '1 día'
    },
    {
      step: '03',
      title: 'Instalación de Tuberías',
      description: 'Colocación de tuberías PEX en el patrón diseñado, con espaciado optimizado.',
      duration: '2-3 días'
    },
    {
      step: '04',
      title: 'Conectores y Colectores',
      description: 'Instalación de colectores de distribución y conexión al sistema de calefacción.',
      duration: '1 día'
    },
    {
      step: '05',
      title: 'Pruebas y Verificación',
      description: 'Pruebas de presión, verificación de funcionamiento y ajuste de temperaturas.',
      duration: '1 día'
    }
  ]

  const maintenanceTips = [
    {
      title: 'Control Regular de Presión',
      description: 'Verifica la presión del sistema mensualmente. La presión normal debe estar entre 1.5 y 2.5 bar.',
      frequency: 'Mensual'
    },
    {
      title: 'Limpieza de Filtros',
      description: 'Limpia los filtros del sistema cada 3-6 meses para mantener el flujo de agua óptimo.',
      frequency: 'Cada 3-6 meses'
    },
    {
      title: 'Verificación de Temperatura',
      description: 'Controla que la temperatura del agua no exceda los 55°C para evitar daños en el sistema.',
      frequency: 'Semanal'
    },
    {
      title: 'Inspección Visual',
      description: 'Revisa periódicamente que no haya fugas visibles en colectores y conexiones.',
      frequency: 'Mensual'
    }
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Experiencia Comprobada',
      description: 'Más de 10 años instalando y manteniendo sistemas de piso radiante con cientos de proyectos exitosos.'
    },
    {
      icon: Users,
      title: 'Equipo Especializado',
      description: 'Técnicos certificados en sistemas de calefacción por piso radiante con formación continua.'
    },
    {
      icon: Shield,
      title: 'Garantía Completa',
      description: 'Garantía en instalación, materiales y funcionamiento del sistema por 5 años.'
    },
    {
      icon: Clock,
      title: 'Servicio Puntual',
      description: 'Cumplimos con los plazos establecidos y respetamos tu tiempo y espacio.'
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
            Piso Radiante
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Instalación, mantenimiento y reparación de sistemas de calefacción por piso radiante. 
            Máximo confort y eficiencia energética para tu hogar.
          </motion.p>
        </div>
      </section>

      {/* Beneficios del piso radiante */}
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
              ¿Por qué elegir piso radiante?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              El sistema de calefacción más moderno, eficiente y confortable 
              para tu hogar o negocio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-brand-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
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
              Nuestros servicios de piso radiante
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Soluciones completas para la instalación, mantenimiento y reparación 
              de sistemas de calefacción por piso radiante.
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
                    href={`/contacto?servicio=piso-radiante&tipo=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
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
              y un sistema que funcionará perfectamente por años.
            </p>
          </motion.div>

          <div className="space-y-8">
            {installationProcess.map((step, index) => (
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
                  <div className="bg-brand-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 lg:mb-0">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-neutral-500">
                    <Clock className="w-4 h-4" />
                    <span>Duración: {step.duration}</span>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-neutral-100 rounded-2xl p-8 h-48 flex items-center justify-center">
                    <div className="text-center text-neutral-400">
                      <div className="w-16 h-16 bg-neutral-200 rounded-full mx-auto mb-4"></div>
                      <p className="text-sm">Ilustración del paso {step.step}</p>
                    </div>
                  </div>
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
              Mantén tu sistema de piso radiante funcionando perfectamente 
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
              en la mejor opción para tu sistema de piso radiante.
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
              ¿Quieres instalar piso radiante?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Nuestro equipo está listo para transformar tu hogar con el sistema 
              de calefacción más moderno y eficiente del mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto?servicio=piso-radiante"
                className="btn-primary"
              >
                Solicitar instalación
              </a>
              <a
                href="/contacto?servicio=piso-radiante&tipo=consulta"
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

export default RadiantFloor

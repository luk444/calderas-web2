import { motion } from 'framer-motion'
import { CheckCircle, Clock, Shield, Zap, Wrench, Settings, AlertTriangle } from 'lucide-react'

const Maintenance = () => {
  const maintenanceSteps = [
    {
      icon: Wrench,
      title: 'Inspección Visual',
      description: 'Revisión completa del estado general de la caldera, conexiones y accesorios.',
      details: ['Verificación de fugas', 'Estado de conexiones', 'Limpieza exterior', 'Verificación de etiquetas']
    },
    {
      icon: Settings,
      title: 'Limpieza de Intercambiadores',
      description: 'Limpieza profunda de intercambiadores de calor para mantener la eficiencia.',
      details: ['Desmontaje y limpieza', 'Eliminación de sedimentos', 'Verificación de integridad', 'Reinstalación']
    },
    {
      icon: Zap,
      title: 'Análisis de Gases',
      description: 'Medición y ajuste de la combustión para optimizar el rendimiento.',
      details: ['Medición de CO2', 'Ajuste de oxígeno', 'Verificación de temperatura', 'Optimización de mezcla']
    },
    {
      icon: Shield,
      title: 'Verificación de Seguridad',
      description: 'Comprobación de todos los sistemas de seguridad y válvulas.',
      details: ['Prueba de válvulas', 'Verificación de presostatos', 'Comprobación de termostatos', 'Test de encendido']
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Ahorro Energético',
      description: 'Reduce el consumo de gas hasta un 20% con un mantenimiento regular.',
      value: '20%'
    },
    {
      icon: Shield,
      title: 'Mayor Durabilidad',
      description: 'Extiende la vida útil de tu caldera y evita averías costosas.',
      value: '+5 años'
    },
    {
      icon: Clock,
      title: 'Funcionamiento Óptimo',
      description: 'Garantiza que tu sistema funcione al 100% de su capacidad.',
      value: '100%'
    },
    {
      icon: CheckCircle,
      title: 'Garantía Protegida',
      description: 'Mantiene la garantía del fabricante en caso de averías.',
      value: '100%'
    }
  ]

  const maintenanceFrequency = [
    {
      period: 'Anual',
      description: 'Mantenimiento completo recomendado para todas las calderas',
      includes: ['Limpieza completa', 'Análisis de gases', 'Verificación de seguridad', 'Reporte técnico'],
      price: 'Desde $15.000'
    },
    {
      period: 'Semestral',
      description: 'Para calderas de alto uso o en entornos exigentes',
      includes: ['Limpieza básica', 'Verificación rápida', 'Ajustes menores', 'Reporte resumido'],
      price: 'Desde $8.000'
    },
    {
      period: 'Trimestral',
      description: 'Para sistemas industriales o de máxima exigencia',
      includes: ['Mantenimiento completo', 'Análisis detallado', 'Optimización avanzada', 'Reporte completo'],
      price: 'Desde $25.000'
    }
  ]

  const warningSigns = [
    'Aumento en el consumo de gas',
    'Ruidos extraños o vibraciones',
    'Problemas de encendido',
    'Pérdida de eficiencia',
    'Olores extraños',
    'Errores en el display',
    'Fugas de agua',
    'Temperatura irregular'
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
            Mantenimiento Preventivo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Mantén tu caldera funcionando al 100% con nuestro servicio de mantenimiento 
            preventivo. Ahorra energía y evita averías costosas.
          </motion.p>
        </div>
      </section>

      {/* Beneficios del mantenimiento */}
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
              ¿Por qué es importante el mantenimiento preventivo?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              El mantenimiento regular es la clave para mantener tu caldera funcionando 
              de manera eficiente y evitar problemas costosos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-brand-600" />
                </div>
                <div className="text-3xl font-bold text-accent-500 mb-2">
                  {benefit.value}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de mantenimiento */}
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
              Nuestro proceso de mantenimiento
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Un proceso sistemático y completo que garantiza el funcionamiento 
              óptimo de tu sistema de calefacción.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maintenanceSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-brand-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-brand-600 rounded-full"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frecuencias de mantenimiento */}
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
              Frecuencias de mantenimiento
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Elige la frecuencia que mejor se adapte a tus necesidades y al uso de tu caldera.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {maintenanceFrequency.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card p-8 ${
                  option.period === 'Anual' ? 'ring-2 ring-accent-500' : ''
                }`}
              >
                {option.period === 'Anual' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Recomendado
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {option.period}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {option.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {option.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-neutral-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-500 mb-4">
                    {option.price}
                  </div>
                  <a
                    href={`/contacto?servicio=mantenimiento&frecuencia=${option.period.toLowerCase()}`}
                    className="btn-secondary w-full"
                  >
                    Solicitar {option.period}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Señales de advertencia */}
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
                Señales de que tu caldera necesita mantenimiento
              </h2>
              
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Identifica estos síntomas temprano para evitar averías costosas 
                y mantener tu sistema funcionando de manera eficiente.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {warningSigns.map((sign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0" />
                    <span className="text-neutral-700 font-medium">{sign}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-warning-50 rounded-lg border border-warning-200">
                <p className="text-warning-800 text-sm">
                  <strong>Importante:</strong> Si detectas cualquiera de estas señales, 
                  contacta con nosotros inmediatamente para evitar daños mayores.
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
              <div className="bg-gradient-to-br from-warning-50 to-accent-50 rounded-2xl p-8 border border-warning-200">
                <div className="text-center">
                  <div className="w-20 h-20 bg-warning-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="w-10 h-10 text-warning-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    ¿Detectaste algún problema?
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    No esperes a que sea tarde. Nuestro equipo está disponible 
                    para diagnosticar y solucionar cualquier problema.
                  </p>
                  
                  <div className="space-y-3">
                    <a
                      href="/contacto?servicio=mantenimiento&urgencia=true"
                      className="btn-primary w-full text-center"
                    >
                      Solicitar revisión urgente
                    </a>
                    <a
                      href="https://wa.me/5491128462184?text=Hola,%20mi%20caldera%20tiene%20problemas,%20necesito%20mantenimiento%20urgente"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline w-full text-center"
                    >
                      WhatsApp para urgencias
                    </a>
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
              ¿Listo para proteger tu inversión?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contrata nuestro servicio de mantenimiento preventivo y disfruta 
              de la tranquilidad de tener tu caldera funcionando perfectamente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto?servicio=mantenimiento"
                className="btn-primary"
              >
                Solicitar mantenimiento
              </a>
              <a
                href="https://wa.me/5491128462184?text=Hola,%20quiero%20información%20sobre%20mantenimiento%20preventivo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-brand-600"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Maintenance

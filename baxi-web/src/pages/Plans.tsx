import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Star, Crown, Shield, Clock, Wrench, Zap } from 'lucide-react'

const Plans = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Básico',
      icon: CheckCircle,
      price: { monthly: 15000, annual: 135000 },
      description: 'Mantenimiento preventivo anual para calderas domésticas',
      features: [
        'Revisión anual completa del sistema',
        'Limpieza de intercambiador',
        'Ajuste de combustión',
        'Análisis de gases básico',
        'Verificación de seguridad',
        'Reporte técnico detallado',
        'Garantía de 3 meses'
      ],
      popular: false,
      color: 'brand'
    },
    {
      name: 'Estándar',
      icon: Star,
      price: { monthly: 25000, annual: 225000 },
      description: 'Mantenimiento completo con prioridad en urgencias',
      features: [
        'Todo del plan Básico',
        'Prioridad en urgencias',
        'Análisis de gases completo',
        'Verificación de eficiencia',
        'Limpieza de filtros',
        'Soporte telefónico prioritario',
        '2 visitas técnicas anuales',
        'Garantía de 6 meses'
      ],
      popular: true,
      color: 'accent'
    },
    {
      name: 'Premium',
      icon: Crown,
      price: { monthly: 35000, annual: 315000 },
      description: 'Servicio premium con diagnóstico sin cargo',
      features: [
        'Todo del plan Estándar',
        'Diagnóstico sin cargo',
        'Mantenimiento trimestral',
        'Repuestos con descuento 15%',
        'Garantía extendida 12 meses',
        'Soporte 24/7',
        'Inspección de instalación',
        'Capacitación del usuario'
      ],
      popular: false,
      color: 'brand'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Garantía Oficial',
      description: 'Todos nuestros trabajos incluyen garantía del fabricante y garantía adicional de nuestro servicio.'
    },
    {
      icon: Clock,
      title: 'Respuesta Rápida',
      description: 'Clientes con planes activos tienen prioridad en urgencias y respuesta garantizada en menos tiempo.'
    },
    {
      icon: Wrench,
      title: 'Mantenimiento Preventivo',
      description: 'Evita averías costosas con revisiones regulares que mantienen tu sistema funcionando al 100%.'
    },
    {
      icon: Zap,
      title: 'Ahorro de Energía',
      description: 'Optimización de combustión y limpieza de componentes pueden reducir tu consumo de gas hasta un 20%.'
    }
  ]

  const getPrice = (plan: any) => {
    return isAnnual ? plan.price.annual : plan.price.monthly
  }

  const getPeriod = () => {
    return isAnnual ? 'año' : 'mes'
  }

  const getSavings = () => {
    return isAnnual ? '15%' : '0%'
  }

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
            Planes de Mantenimiento
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Mantén tu caldera funcionando al 100% con nuestros planes de mantenimiento 
            preventivo. Ahorra dinero y evita averías costosas.
          </motion.p>
        </div>
      </section>

      {/* Toggle Mensual/Anual */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">
              Elige tu plan de mantenimiento
            </h2>
            
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full p-1 shadow-lg border border-neutral-200">
                <div className="flex">
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 ${
                      !isAnnual
                        ? 'bg-brand-600 text-white shadow-md'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    Mensual
                  </button>
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 ${
                      isAnnual
                        ? 'bg-brand-600 text-white shadow-md'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    Anual
                    <span className="ml-2 text-sm bg-accent-500 text-white px-3 py-1 rounded-full">
                      -{getSavings()}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {isAnnual && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-accent-50 border border-accent-200 rounded-xl p-4 max-w-md mx-auto"
              >
                <p className="text-accent-800 font-medium">
                  💰 Ahorra ${getSavings()} con el plan anual
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`card p-8 h-full ${
                  plan.popular ? 'ring-2 ring-accent-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                        Más elegido
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 bg-${plan.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-10 h-10 text-brand-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {plan.description}
                    </p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-neutral-900">
                      ${getPrice(plan).toLocaleString()}
                    </div>
                    <div className="text-neutral-600">
                      por {getPeriod()}
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-success font-medium mt-2">
                        Ahorras ${((plan.price.monthly * 12) - plan.price.annual).toLocaleString()}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`/contacto?plan=${plan.name.toLowerCase()}`}
                    className={`btn-secondary w-full text-center ${
                      plan.popular ? 'bg-accent-500 hover:bg-accent-600 text-white' : ''
                    }`}
                  >
                    Contratar plan
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
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
              Beneficios de nuestros planes
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Más que mantenimiento, nuestros planes te ofrecen tranquilidad, 
              ahorro y la garantía de que tu sistema funcionará perfectamente.
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

      {/* FAQ sobre planes */}
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
              Preguntas frecuentes sobre planes
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                ¿Puedo cambiar de plan en cualquier momento?
              </h3>
              <p className="text-neutral-600">
                Sí, puedes cambiar de plan en cualquier momento. El cambio se aplicará 
                desde el próximo período de facturación.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                ¿Qué incluye exactamente el mantenimiento?
              </h3>
              <p className="text-neutral-600">
                Cada plan incluye limpieza de intercambiadores, análisis de gases, 
                ajuste de combustión, verificación de seguridad y reporte técnico. 
                Los planes superiores incluyen servicios adicionales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                ¿Los repuestos están incluidos en el plan?
              </h3>
              <p className="text-neutral-600">
                Los planes incluyen mano de obra y revisión técnica. Los repuestos 
                se cobran por separado, aunque el plan Premium incluye un descuento del 15%.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
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
              Contrata uno de nuestros planes de mantenimiento y disfruta de 
              la tranquilidad de tener tu sistema de calefacción funcionando perfectamente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="btn-primary"
              >
                Contratar plan ahora
              </a>
              <a
                href="https://wa.me/5491128462184?text=Hola,%20quiero%20información%20sobre%20los%20planes%20de%20mantenimiento"
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

export default Plans

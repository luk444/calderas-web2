import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Star, Crown } from 'lucide-react'

const PlansSection = () => {
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
        'Reporte técnico'
      ],
      popular: false
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
        '2 visitas técnicas anuales'
      ],
      popular: true
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
        'Garantía extendida',
        'Soporte 24/7',
        'Inspección de instalación'
      ],
      popular: false
    }
  ]

  const getPrice = (plan: any) => {
    return isAnnual ? plan.price.annual : plan.price.monthly
  }

  const getPeriod = () => {
    return isAnnual ? 'año' : 'mes'
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
            Planes de Mantenimiento
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Mantén tu caldera funcionando al 100% con nuestros planes de mantenimiento 
            preventivo. Ahorra dinero y evita averías costosas.
          </p>
        </motion.div>

        {/* Toggle Mensual/Anual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-full p-1 shadow-lg border border-neutral-200">
            <div className="flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  !isAnnual
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Mensual
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  isAnnual
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Anual
                <span className="ml-1 text-xs bg-accent-500 text-white px-2 py-1 rounded-full">
                  -15%
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Planes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                plan.popular ? 'ring-2 ring-accent-500' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Más elegido
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-brand-600" />
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
                  className="btn-secondary w-full text-center"
                >
                  Contratar plan
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nota legal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-neutral-500 max-w-2xl mx-auto">
            * Los planes incluyen mano de obra y revisión técnica. Materiales y repuestos 
            se cobran por separado. Válido para CABA y GBA. Consultar disponibilidad 
            para zonas específicas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PlansSection

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Search, MessageCircle, Phone } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchTerm, setSearchTerm] = useState('')

  const faqCategories = [
    {
      name: 'Servicios Generales',
      icon: '🔧',
      faqs: [
        {
          question: '¿Qué servicios ofrecen?',
          answer: 'Ofrecemos servicio técnico oficial BAXI, mantenimiento preventivo, instalación de calderas y piso radiante, reparación multimarca, y urgencias 24/7. Cubrimos todas las marcas del mercado con técnicos certificados.'
        },
        {
          question: '¿Atienden todas las marcas de calderas?',
          answer: 'Sí, somos servicio técnico oficial BAXI pero también atendemos todas las marcas del mercado: Peisa, Ariston, Euterma, Vaillant, Buderus, Junkers, Wolf, Bosch y muchas más. Contamos con técnicos especializados en cada marca.'
        },
        {
          question: '¿Cuál es su zona de cobertura?',
          answer: 'Cubrimos toda la Ciudad Autónoma de Buenos Aires (CABA) y el Gran Buenos Aires (GBA). Para zonas específicas o consultas sobre cobertura, puedes contactarnos directamente para confirmar disponibilidad.'
        }
      ]
    },
    {
      name: 'Mantenimiento y Reparación',
      icon: '⚙️',
      faqs: [
        {
          question: '¿Cada cuánto debo hacer mantenimiento a mi caldera?',
          answer: 'Se recomienda realizar mantenimiento preventivo una vez al año, preferentemente antes del inicio de la temporada de calefacción. Esto incluye limpieza de intercambiadores, verificación de gases, ajuste de combustión y revisión general del sistema.'
        },
        {
          question: '¿Qué incluye el mantenimiento preventivo?',
          answer: 'Nuestro mantenimiento preventivo incluye: limpieza de intercambiadores, verificación de gases, ajuste de combustión, revisión de seguridad, limpieza de filtros, verificación de eficiencia y reporte técnico completo con recomendaciones.'
        },
        {
          question: '¿Cuáles son las señales de que mi caldera necesita reparación?',
          answer: 'Las señales más comunes incluyen: ruidos extraños, pérdida de eficiencia, aumento en el consumo de gas, problemas de encendido, fugas de agua, olor a gas, y errores en el display digital. Ante cualquiera de estos síntomas, contacta inmediatamente.'
        },
        {
          question: '¿Trabajan con repuestos originales?',
          answer: 'Como servicio oficial BAXI, utilizamos exclusivamente repuestos originales del fabricante. Para otras marcas, trabajamos con repuestos de primera calidad y, cuando es posible, originales del fabricante.'
        }
      ]
    },
    {
      name: 'Servicio Oficial BAXI',
      icon: '🏆',
      faqs: [
        {
          question: '¿Pierdo la garantía si no hago la puesta en marcha oficial?',
          answer: 'Sí, la mayoría de fabricantes requieren que la puesta en marcha sea realizada por un servicio técnico oficial para mantener la garantía. Sin este servicio, podrías perder la cobertura en caso de fallas o averías.'
        },
        {
          question: '¿Qué ventajas tiene el servicio oficial BAXI?',
          answer: 'El servicio oficial BAXI incluye: garantía del fabricante en repuestos y mano de obra, repuestos originales con certificación, técnicos certificados por el fabricante, soporte técnico directo con BAXI Argentina, y mantenimiento preventivo según especificaciones oficiales.'
        },
        {
          question: '¿Qué modelos de BAXI atienden?',
          answer: 'Atendemos toda la línea BAXI incluyendo calderas murales, de pie, aerotermia, y sistemas de calefacción. Esto incluye modelos Duo-Tec, Main, Luna, Eco, y toda la gama de productos BAXI disponibles en Argentina.'
        }
      ]
    },
    {
      name: 'Urgencias y Tiempos de Respuesta',
      icon: '🚨',
      faqs: [
        {
          question: '¿Ofrecen servicio de urgencia 24/7?',
          answer: 'Sí, contamos con técnicos de guardia 24/7 para emergencias. La respuesta garantizada es de 30-60 minutos según tu zona en CABA y GBA. Fuera de horario comercial se aplica un recargo del 30%.'
        },
        {
          question: '¿Cuánto tardan en llegar para una urgencia?',
          answer: 'Los tiempos de respuesta varían según tu zona: CABA (30-45 min), GBA Norte (45-60 min), GBA Oeste (45-75 min), GBA Sur (60-90 min). Estos tiempos pueden variar según el tráfico y disponibilidad de técnicos.'
        },
        {
          question: '¿Qué se considera una urgencia?',
          answer: 'Se consideran urgencias: falta total de calefacción, fugas de agua o gas, olores extraños, ruidos anormales, errores en el display que impiden el funcionamiento, y cualquier situación que pueda comprometer la seguridad o el confort del hogar.'
        }
      ]
    },
    {
      name: 'Instalación y Puesta en Marcha',
      icon: '🏗️',
      faqs: [
        {
          question: '¿Cuánto tarda una instalación completa de caldera?',
          answer: 'Una instalación completa de caldera mural típicamente toma entre 4-6 horas, dependiendo de la complejidad del sistema y si requiere modificaciones en la instalación existente. La instalación de piso radiante puede tomar 2-3 días.'
        },
        {
          question: '¿Qué incluye la puesta en marcha?',
          answer: 'La puesta en marcha incluye: verificación completa del sistema de calefacción, detección temprana de incidencias y riesgos, registro oficial en garantía del fabricante, optimización inicial para máximo rendimiento, y capacitación del usuario en operación y mantenimiento.'
        },
        {
          question: '¿Necesito permisos especiales para la instalación?',
          answer: 'Dependiendo de tu jurisdicción, algunos trabajos pueden requerir permisos municipales o de gas. Nuestros técnicos te asesorarán sobre los requisitos específicos y, en algunos casos, pueden gestionar los trámites necesarios.'
        }
      ]
    },
    {
      name: 'Planes de Mantenimiento',
      icon: '📋',
      faqs: [
        {
          question: '¿Ofrecen planes de mantenimiento anual?',
          answer: 'Sí, contamos con tres planes de mantenimiento: Básico, Estándar y Premium. Cada plan incluye diferentes niveles de servicio, prioridad en urgencias y descuentos en repuestos. Consulta nuestros planes para encontrar el que mejor se adapte a tus necesidades.'
        },
        {
          question: '¿Puedo cambiar de plan en cualquier momento?',
          answer: 'Sí, puedes cambiar de plan en cualquier momento. El cambio se aplicará desde el próximo período de facturación. También puedes cancelar tu plan con un aviso previo de 30 días.'
        },
        {
          question: '¿Los repuestos están incluidos en el plan?',
          answer: 'Los planes incluyen mano de obra y revisión técnica. Los repuestos se cobran por separado, aunque el plan Premium incluye un descuento del 15% en repuestos.'
        }
      ]
    },
    {
      name: 'Precios y Facturación',
      icon: '💰',
      faqs: [
        {
          question: '¿Cómo se calculan los precios?',
          answer: 'Los precios se calculan según el tipo de servicio, la complejidad del trabajo, la marca del equipo, y si es urgencia o servicio programado. Ofrecemos presupuestos transparentes sin sorpresas.'
        },
        {
          question: '¿Aceptan tarjetas de crédito?',
          answer: 'Sí, aceptamos todas las tarjetas de crédito y débito, transferencias bancarias, y efectivo. También ofrecemos opciones de financiamiento para trabajos mayores.'
        },
        {
          question: '¿Dan factura por los servicios?',
          answer: 'Sí, emitimos factura tipo C por todos nuestros servicios. Esto es importante para deducciones impositivas y garantías.'
        }
      ]
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0)

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
            Preguntas Frecuentes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Resolvemos las dudas más comunes sobre nuestros servicios técnicos, 
            mantenimiento y reparación de calderas y sistemas de calefacción.
          </motion.p>
        </div>
      </section>

      {/* Buscador */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Buscar en preguntas frecuentes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent text-lg"
              />
            </div>
            {searchTerm && (
              <p className="text-sm text-neutral-500 mt-2 text-center">
                {filteredCategories.reduce((total, cat) => total + cat.faqs.length, 0)} resultados encontrados
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ por categorías */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  {category.name}
                </h2>
                <div className="w-24 h-1 bg-brand-600 mx-auto"></div>
              </div>

              <div className="max-w-4xl mx-auto">
                {category.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-4"
                  >
                    <div className="card">
                      <button
                        onClick={() => toggleFAQ(`${categoryIndex}-${index}`)}
                        className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-inset rounded-xl"
                        aria-expanded={openIndex === `${categoryIndex}-${index}`}
                        aria-controls={`faq-answer-${categoryIndex}-${index}`}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                            {faq.question}
                          </h3>
                          <div className="flex-shrink-0">
                            {openIndex === `${categoryIndex}-${index}` ? (
                              <ChevronUp className="w-6 h-6 text-brand-600" />
                            ) : (
                              <ChevronDown className="w-6 h-6 text-neutral-400" />
                            )}
                          </div>
                        </div>
                      </button>

                      {openIndex === `${categoryIndex}-${index}` && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div
                            id={`faq-answer-${categoryIndex}-${index}`}
                            className="px-6 pb-6 text-neutral-600 leading-relaxed"
                          >
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA adicional */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-brand-50 to-accent-50 rounded-2xl p-12 border border-brand-200 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">
                ¿No encontraste tu respuesta?
              </h3>
              <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                Nuestro equipo técnico está disponible para resolver cualquier consulta 
                específica sobre tu sistema de calefacción.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a
                  href="https://wa.me/5491128462184?text=Hola,%20tengo%20una%20consulta%20técnica%20específica%20que%20no%20está%20en%20las%20FAQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Consultar por WhatsApp</span>
                </a>
                <a
                  href="tel:+5491128462184"
                  className="btn-outline flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Llamar directamente</span>
                </a>
              </div>

              <div className="mt-8 p-4 bg-white/50 rounded-lg">
                <p className="text-sm text-neutral-600">
                  <strong>Horarios de atención:</strong> Lunes a Viernes 8:00-20:00, Sábados 8:00-18:00, Urgencias 24/7
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

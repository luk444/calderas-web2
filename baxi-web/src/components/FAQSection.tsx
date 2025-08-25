import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: '¿Cada cuánto debo hacer mantenimiento a mi caldera?',
      answer: 'Se recomienda realizar mantenimiento preventivo una vez al año, preferentemente antes del inicio de la temporada de calefacción. Esto incluye limpieza de intercambiadores, verificación de gases, ajuste de combustión y revisión general del sistema.'
    },
    {
      question: '¿Pierdo la garantía si no hago la puesta en marcha oficial?',
      answer: 'Sí, la mayoría de fabricantes requieren que la puesta en marcha sea realizada por un servicio técnico oficial para mantener la garantía. Sin este servicio, podrías perder la cobertura en caso de fallas o averías.'
    },
    {
      question: '¿Atienden todas las marcas de calderas?',
      answer: 'Sí, somos servicio técnico oficial BAXI pero también atendemos todas las marcas del mercado: Peisa, Ariston, Euterma, Vaillant, Buderus, Junkers, Wolf, Bosch y muchas más. Contamos con técnicos especializados en cada marca.'
    },
    {
      question: '¿Cuánto tarda una instalación completa de caldera?',
      answer: 'Una instalación completa de caldera mural típicamente toma entre 4-6 horas, dependiendo de la complejidad del sistema y si requiere modificaciones en la instalación existente. La instalación de piso radiante puede tomar 2-3 días.'
    },
    {
      question: '¿Cuáles son las señales de que mi caldera necesita reparación?',
      answer: 'Las señales más comunes incluyen: ruidos extraños, pérdida de eficiencia, aumento en el consumo de gas, problemas de encendido, fugas de agua, olor a gas, y errores en el display digital. Ante cualquiera de estos síntomas, contacta inmediatamente.'
    },
    {
      question: '¿Ofrecen servicio de urgencia 24/7?',
      answer: 'Sí, contamos con técnicos de guardia 24/7 para emergencias. La respuesta garantizada es de 30-60 minutos según tu zona en CABA y GBA. Fuera de horario comercial se aplica un recargo del 30%.'
    },
    {
      question: '¿Qué incluye el mantenimiento preventivo?',
      answer: 'Nuestro mantenimiento preventivo incluye: limpieza de intercambiadores, verificación de gases, ajuste de combustión, revisión de seguridad, limpieza de filtros, verificación de eficiencia y reporte técnico completo con recomendaciones.'
    },
    {
      question: '¿Trabajan con repuestos originales?',
      answer: 'Como servicio oficial BAXI, utilizamos exclusivamente repuestos originales del fabricante. Para otras marcas, trabajamos con repuestos de primera calidad y, cuando es posible, originales del fabricante.'
    },
    {
      question: '¿Cuál es la cobertura geográfica de sus servicios?',
      answer: 'Cubrimos toda la Ciudad Autónoma de Buenos Aires (CABA) y el Gran Buenos Aires (GBA). Para zonas específicas o consultas sobre cobertura, puedes contactarnos directamente para confirmar disponibilidad.'
    },
    {
      question: '¿Ofrecen planes de mantenimiento anual?',
      answer: 'Sí, contamos con tres planes de mantenimiento: Básico, Estándar y Premium. Cada plan incluye diferentes niveles de servicio, prioridad en urgencias y descuentos en repuestos. Consulta nuestros planes para encontrar el que mejor se adapte a tus necesidades.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
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
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios técnicos, 
            mantenimiento y reparación de calderas y sistemas de calefacción.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
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
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-inset rounded-xl"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-brand-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-neutral-400" />
                      )}
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        id={`faq-answer-${index}`}
                        className="px-6 pb-6 text-neutral-600 leading-relaxed"
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              ¿No encontraste tu respuesta?
            </h3>
            <p className="text-neutral-600 mb-6">
              Nuestro equipo técnico está disponible para resolver cualquier consulta 
              específica sobre tu sistema de calefacción.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5491128462184?text=Hola,%20tengo%20una%20consulta%20técnica%20específica"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Consultar por WhatsApp
              </a>
              <a
                href="/contacto"
                className="btn-outline"
              >
                Enviar consulta
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection

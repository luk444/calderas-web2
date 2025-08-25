import { motion } from 'framer-motion'
import { CheckCircle, Shield, Award, Clock } from 'lucide-react'

const BaxiOfficialSection = () => {
  const benefits = [
    'Garantía del fabricante en repuestos y mano de obra',
    'Repuestos originales BAXI con certificación',
    'Técnicos certificados por el fabricante',
    'Servicio técnico especializado en toda la línea BAXI',
    'Mantenimiento preventivo según especificaciones oficiales',
    'Soporte técnico directo con BAXI Argentina'
  ]

  const startupBenefits = [
    'Verificación completa del sistema de calefacción',
    'Detección temprana de incidencias y riesgos',
    'Registro oficial en garantía del fabricante',
    'Optimización inicial para máximo rendimiento',
    'Capacitación del usuario en operación y mantenimiento'
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna izquierda - Servicio Oficial */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <span className="inline-block bg-accent-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
                SERVICIO OFICIAL
              </span>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                Servicio Técnico Oficial BAXI
              </h2>
              
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Somos servicio técnico oficial autorizado por BAXI Argentina. 
                Contamos con técnicos certificados, repuestos originales y 
                garantía del fabricante en todos nuestros trabajos.
              </p>

              <div className="space-y-4 mb-8">
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

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5491128462184?text=Hola,%20necesito%20servicio%20oficial%20BAXI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Solicitar servicio oficial
                </a>
                <a
                  href="/contacto"
                  className="btn-outline text-center"
                >
                  Consultar disponibilidad
                </a>
              </div>

              <p className="text-sm text-neutral-500 mt-4">
                * Atendemos modelos murales y aerotermia. Consulta otros productos.
              </p>
            </div>
          </motion.div>

          {/* Columna derecha - Puesta en marcha */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8 border border-brand-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Puesta en Marcha
                </h3>
              </div>

              <p className="text-neutral-700 mb-6 leading-relaxed">
                La puesta en marcha es fundamental para garantizar el correcto 
                funcionamiento y la durabilidad de tu caldera BAXI. Nuestros 
                técnicos certificados realizan una verificación completa del sistema.
              </p>

              <div className="space-y-3 mb-6">
                {startupBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-brand-600" />
                    <span className="text-neutral-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <a
                href="/contacto"
                className="btn-secondary w-full text-center"
              >
                Solicitar verificación
              </a>

              <div className="mt-6 p-4 bg-white/50 rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <Clock className="w-4 h-4" />
                  <span>Duración: 2-3 horas</span>
                </div>
                <p className="text-xs text-neutral-500 mt-2">
                  * Productos excluidos: consultar previamente
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BaxiOfficialSection

import { motion } from 'framer-motion'
import { Shield, FileText, Lock, Cookie, ArrowRight } from 'lucide-react'

const Legal = () => {
  const legalDocuments = [
    {
      icon: FileText,
      title: 'Términos y Condiciones',
      description: 'Condiciones de uso de nuestro sitio web y servicios.',
      link: '/legal/terminos',
      lastUpdated: '15 de diciembre de 2024'
    },
    {
      icon: Lock,
      title: 'Política de Privacidad',
      description: 'Cómo recopilamos, utilizamos y protegemos su información personal.',
      link: '/legal/privacidad',
      lastUpdated: '15 de diciembre de 2024'
    },
    {
      icon: Cookie,
      title: 'Política de Cookies',
      description: 'Información sobre las cookies que utilizamos y cómo gestionarlas.',
      link: '/legal/cookies',
      lastUpdated: '15 de diciembre de 2024'
    }
  ]

  const importantNotes = [
    'Todos los documentos legales están disponibles en español.',
    'Los términos pueden actualizarse periódicamente según sea necesario.',
    'Le notificaremos cualquier cambio significativo en nuestros términos.',
    'Para consultas legales, contacte directamente a nuestro equipo.',
    'Estos documentos rigen el uso de todos nuestros servicios.'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Información Legal
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Conozca nuestros términos legales, políticas de privacidad y 
            condiciones de uso para nuestros servicios.
          </motion.p>
        </div>
      </section>

      {/* Documentos legales */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Documentos legales
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Lea cuidadosamente estos documentos antes de utilizar 
              nuestros servicios o este sitio web.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalDocuments.map((document, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-200 transition-colors">
                  <document.icon className="w-8 h-8 text-brand-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {document.title}
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {document.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm text-neutral-500">
                    <strong>Última actualización:</strong> {document.lastUpdated}
                  </p>
                </div>
                
                <a
                  href={document.link}
                  className="inline-flex items-center space-x-2 text-brand-600 hover:text-brand-700 font-medium group-hover:translate-x-1 transition-transform"
                >
                  <span>Leer documento</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notas importantes */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Notas importantes
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Información clave que debe conocer sobre nuestros documentos legales 
              y términos de servicio.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {importantNotes.map((note, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg"
                >
                  <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-700 leading-relaxed">
                    {note}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso legal */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                Nuestro compromiso legal
              </h2>
              
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                En BaxiService, nos comprometemos a mantener la transparencia 
                legal y proteger los derechos de nuestros clientes. Todos nuestros 
                términos están diseñados para ser claros, justos y cumplir con 
                las regulaciones aplicables.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-success" />
                  <span className="text-neutral-700">Cumplimiento con regulaciones locales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-success" />
                  <span className="text-neutral-700">Protección de derechos del cliente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-success" />
                  <span className="text-neutral-700">Transparencia en todos los términos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-success" />
                  <span className="text-neutral-700">Actualizaciones regulares según sea necesario</span>
                </div>
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
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Protección legal completa
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    Nuestros documentos legales están diseñados para proteger 
                    tanto a nuestros clientes como a nuestra empresa.
                  </p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Transparencia:</span>
                      <span className="font-medium text-neutral-900">100%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Cumplimiento:</span>
                      <span className="font-medium text-neutral-900">Regulatorio</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Actualización:</span>
                      <span className="font-medium text-neutral-900">Regular</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Información de contacto */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                ¿Tiene preguntas legales?
              </h2>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
                Nuestro equipo legal está disponible para responder cualquier consulta 
                sobre nuestros términos, políticas o documentos legales.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="btn-primary"
                >
                  Contactar equipo legal
                </a>
                <a
                  href="tel:+5491128462184"
                  className="btn-outline"
                >
                  Llamar ahora
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <nav className="text-sm text-neutral-600">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/" className="hover:text-brand-600 transition-colors">
                  Inicio
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>/</span>
                <span className="text-neutral-900">Información Legal</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Legal

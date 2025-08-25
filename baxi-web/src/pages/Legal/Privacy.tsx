import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Database, Users, FileText } from 'lucide-react'

const Privacy = () => {
  const sections = [
    {
      title: 'Información que recopilamos',
      content: `Recopilamos información que nos proporciona directamente, como su nombre, dirección, número de teléfono, correo electrónico y detalles del servicio solicitado. También recopilamos información automáticamente cuando visita nuestro sitio web, incluyendo su dirección IP, tipo de navegador y páginas visitadas.`
    },
    {
      title: 'Cómo utilizamos su información',
      content: `Utilizamos su información para proporcionar nuestros servicios, comunicarnos con usted sobre citas y servicios, enviar facturas, mejorar nuestros servicios, cumplir con obligaciones legales y enviar comunicaciones de marketing (solo con su consentimiento).`
    },
    {
      title: 'Compartir información',
      content: `No vendemos, alquilamos ni compartimos su información personal con terceros, excepto cuando es necesario para proporcionar nuestros servicios, cumplir con la ley, proteger nuestros derechos o con su consentimiento explícito.`
    },
    {
      title: 'Seguridad de la información',
      content: `Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún sistema de seguridad es completamente infalible.`
    },
    {
      title: 'Retención de datos',
      content: `Retenemos su información personal solo durante el tiempo necesario para cumplir con los propósitos para los que fue recopilada, incluyendo obligaciones legales, contables o de reportes. Los datos se eliminan de forma segura cuando ya no son necesarios.`
    },
    {
      title: 'Sus derechos',
      content: `Usted tiene derecho a acceder, corregir, eliminar y portar su información personal. También puede oponerse al procesamiento, solicitar la limitación del procesamiento y retirar su consentimiento en cualquier momento.`
    },
    {
      title: 'Cookies y tecnologías similares',
      content: `Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web, analizar el tráfico y personalizar el contenido. Puede controlar el uso de cookies a través de la configuración de su navegador.`
    },
    {
      title: 'Enlaces a sitios de terceros',
      content: `Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de privacidad de estos sitios y le recomendamos revisar sus políticas de privacidad antes de proporcionar información personal.`
    },
    {
      title: 'Transferencias internacionales',
      content: `Su información personal se procesa y almacena en Argentina. Si es necesario transferir datos a otros países, nos aseguraremos de que se implementen medidas de protección adecuadas según las leyes aplicables.`
    },
    {
      title: 'Menores de edad',
      content: `Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal de menores de edad. Si cree que hemos recopilado información de un menor, contáctenos inmediatamente.`
    },
    {
      title: 'Cambios en esta política',
      content: `Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos cualquier cambio significativo por correo electrónico o mediante un aviso prominente en nuestro sitio web.`
    },
    {
      title: 'Contacto',
      content: `Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos su información personal, puede contactarnos a través de nuestro formulario de contacto o llamándonos al +54 9 11 2846-2184.`
    }
  ]

  const dataTypes = [
    {
      icon: Users,
      title: 'Datos personales',
      description: 'Nombre, dirección, teléfono, email y documentos de identidad.',
      examples: ['Nombre completo', 'Dirección postal', 'Número de teléfono', 'Correo electrónico']
    },
    {
      icon: Database,
      title: 'Datos del servicio',
      description: 'Información sobre los servicios solicitados y realizados.',
      examples: ['Tipo de servicio', 'Fecha de cita', 'Historial de servicios', 'Facturación']
    },
    {
      icon: Eye,
      title: 'Datos de uso',
      description: 'Información sobre cómo utiliza nuestro sitio web.',
      examples: ['Páginas visitadas', 'Tiempo de navegación', 'Dispositivo utilizado', 'Ubicación']
    },
    {
      icon: Shield,
      title: 'Datos técnicos',
      description: 'Información técnica necesaria para el funcionamiento del sitio.',
      examples: ['Dirección IP', 'Tipo de navegador', 'Sistema operativo', 'Cookies']
    }
  ]

  const securityMeasures = [
    'Encriptación de datos en tránsito y en reposo',
    'Acceso restringido a información personal',
    'Monitoreo continuo de seguridad',
    'Copias de seguridad regulares',
    'Capacitación del personal en seguridad',
    'Auditorías de seguridad periódicas'
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
              <Lock className="w-10 h-10" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Política de Privacidad
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Su privacidad es importante para nosotros. Esta política describe cómo 
            recopilamos, utilizamos y protegemos su información personal.
          </motion.p>
        </div>
      </section>

      {/* Tipos de datos */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Tipos de información que recopilamos
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Recopilamos diferentes tipos de información para proporcionar 
              nuestros servicios de manera efectiva y segura.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataTypes.map((type, index) => (
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

                <div>
                  <h4 className="font-semibold text-neutral-700 mb-3">Ejemplos:</h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medidas de seguridad */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                Protección de su información
              </h2>
              
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Implementamos medidas de seguridad robustas para proteger su información 
                personal contra acceso no autorizado, uso indebido o divulgación.
              </p>

              <div className="space-y-4">
                {securityMeasures.map((measure, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-success" />
                    <span className="text-neutral-700">{measure}</span>
                  </div>
                ))}
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
                    <Lock className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Compromiso con la seguridad
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    Su confianza es nuestra prioridad. Nos comprometemos a mantener 
                    la seguridad y confidencialidad de su información personal.
                  </p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Encriptación:</span>
                      <span className="font-medium text-neutral-900">SSL/TLS</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Acceso:</span>
                      <span className="font-medium text-neutral-900">Restringido</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Monitoreo:</span>
                      <span className="font-medium text-neutral-900">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Política completa */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Política de privacidad completa
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Lea todos los detalles sobre cómo manejamos su información personal 
              y sus derechos como usuario.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-b border-neutral-200 pb-8 last:border-b-0"
                >
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sus derechos */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Sus derechos de privacidad
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Como usuario, tiene derechos específicos sobre su información personal. 
              Conozca cómo ejercerlos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Acceso',
                description: 'Solicitar una copia de su información personal.',
                icon: Eye
              },
              {
                title: 'Rectificación',
                description: 'Corregir información inexacta o incompleta.',
                icon: FileText
              },
              {
                title: 'Eliminación',
                description: 'Solicitar la eliminación de sus datos personales.',
                icon: Database
              },
              {
                title: 'Portabilidad',
                description: 'Recibir sus datos en formato estructurado.',
                icon: Users
              }
            ].map((right, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <right.icon className="w-6 h-6 text-brand-600" />
                </div>
                
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {right.title}
                </h3>
                
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {right.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Información de contacto */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                ¿Tiene preguntas sobre privacidad?
              </h2>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
                Nuestro equipo de privacidad está disponible para responder 
                cualquier consulta sobre el manejo de su información personal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="btn-primary"
                >
                  Contactar equipo de privacidad
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
      <section className="py-8 bg-neutral-50">
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
                <a href="/legal" className="hover:text-brand-600 transition-colors">
                  Legal
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>/</span>
                <span className="text-neutral-900">Política de Privacidad</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Privacy

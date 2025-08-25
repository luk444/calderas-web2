import { motion } from 'framer-motion'
import { Shield, Clock, Users, FileText } from 'lucide-react'

const Terms = () => {
  const sections = [
    {
      title: 'Aceptación de los términos',
      content: `Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.`
    },
    {
      title: 'Descripción del servicio',
      content: `BaxiService es una empresa especializada en servicios técnicos de calefacción, incluyendo instalación, mantenimiento, reparación y servicios de emergencia para calderas y sistemas de calefacción. Nuestros servicios están disponibles en CABA y GBA.`
    },
    {
      title: 'Uso del sitio web',
      content: `Usted se compromete a utilizar este sitio web únicamente para fines legales y de acuerdo con estos términos. No debe utilizar el sitio web de manera que pueda dañar, deshabilitar o sobrecargar nuestros servidores o redes.`
    },
    {
      title: 'Propiedad intelectual',
      content: `Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de BaxiService y está protegido por las leyes de propiedad intelectual.`
    },
    {
      title: 'Privacidad y protección de datos',
      content: `Su privacidad es importante para nosotros. Consulte nuestra Política de Privacidad para obtener información sobre cómo recopilamos, utilizamos y protegemos su información personal.`
    },
    {
      title: 'Limitación de responsabilidad',
      content: `BaxiService no será responsable por daños directos, indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar este sitio web o nuestros servicios.`
    },
    {
      title: 'Garantías',
      content: `Nuestros servicios incluyen garantías específicas según el tipo de trabajo realizado. Las garantías se detallan en cada contrato de servicio y están sujetas a las condiciones establecidas en el mismo.`
    },
    {
      title: 'Cancelación y reprogramación',
      content: `Para cancelar o reprogramar una cita, debe notificarnos con al menos 24 horas de anticipación. Las cancelaciones con menos tiempo pueden estar sujetas a cargos por cancelación.`
    },
    {
      title: 'Pagos y facturación',
      content: `Los precios de nuestros servicios están sujetos a cambio sin previo aviso. Los pagos se realizan al momento de la prestación del servicio, salvo acuerdo previo por escrito.`
    },
    {
      title: 'Cobertura geográfica',
      content: `Nuestros servicios están disponibles en CABA y GBA. Los tiempos de respuesta y costos pueden variar según la ubicación. Consulte con nuestro equipo para confirmar la cobertura en su área.`
    },
    {
      title: 'Servicios de emergencia',
      content: `Nuestro servicio de emergencia 24/7 está disponible para situaciones críticas. Los tiempos de respuesta pueden variar según la ubicación y la disponibilidad de técnicos.`
    },
    {
      title: 'Modificaciones de los términos',
      content: `Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.`
    },
    {
      title: 'Ley aplicable',
      content: `Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa será resuelta en los tribunales competentes de la Ciudad Autónoma de Buenos Aires.`
    },
    {
      title: 'Contacto',
      content: `Si tiene preguntas sobre estos términos y condiciones, puede contactarnos a través de nuestro formulario de contacto o llamándonos al +54 9 11 2846-2184.`
    }
  ]

  const importantNotes = [
    'Todos los servicios están sujetos a disponibilidad y confirmación previa.',
    'Los precios pueden variar según la complejidad del trabajo y la ubicación.',
    'Las garantías están sujetas a las condiciones de uso normal del equipo.',
    'Los servicios de emergencia tienen prioridad sobre las citas programadas.',
    'Se requiere acceso adecuado al equipo para realizar los servicios.'
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
              <FileText className="w-10 h-10" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Términos y Condiciones
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Lea cuidadosamente estos términos y condiciones antes de utilizar 
            nuestros servicios o este sitio web.
          </motion.p>
        </div>
      </section>

      {/* Información general */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                Términos de uso
              </h2>
              
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-b border-neutral-200 pb-6 last:border-b-0"
                  >
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                      {section.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="card p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-brand-600" />
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Última actualización
                  </h3>
                </div>
                <p className="text-neutral-600">
                  Estos términos fueron actualizados por última vez el 15 de diciembre de 2024.
                </p>
              </div>

              <div className="card p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-brand-600" />
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Protección legal
                  </h3>
                </div>
                <p className="text-neutral-600">
                  Estos términos protegen tanto a nuestros clientes como a nuestra empresa, 
                  estableciendo claramente los derechos y responsabilidades de cada parte.
                </p>
              </div>

              <div className="card p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-6 h-6 text-brand-600" />
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Aplicación
                  </h3>
                </div>
                <p className="text-neutral-600">
                  Estos términos se aplican a todos los usuarios de nuestro sitio web 
                  y a todos los clientes que contraten nuestros servicios.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notas importantes */}
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
              Notas importantes
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Información clave que debe conocer antes de contratar nuestros servicios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantNotes.map((note, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 bg-white"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-700 leading-relaxed">
                    {note}
                  </p>
                </div>
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
                ¿Tiene preguntas sobre estos términos?
              </h2>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
                Nuestro equipo legal está disponible para responder cualquier consulta 
                sobre estos términos y condiciones.
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
                <span className="text-neutral-900">Términos y Condiciones</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Terms

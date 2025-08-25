import { motion } from 'framer-motion'
import { Shield, Cookie, Settings, Eye, Database, Info } from 'lucide-react'

const Cookies = () => {
  const cookieTypes = [
    {
      icon: Cookie,
      title: 'Cookies esenciales',
      description: 'Necesarias para el funcionamiento básico del sitio web.',
      examples: ['Sesión de usuario', 'Preferencias de idioma', 'Carrito de compras'],
      necessary: true
    },
    {
      icon: Eye,
      title: 'Cookies de análisis',
      description: 'Nos ayudan a entender cómo se utiliza nuestro sitio web.',
      examples: ['Google Analytics', 'Estadísticas de visitas', 'Comportamiento del usuario'],
      necessary: false
    },
    {
      icon: Settings,
      title: 'Cookies de funcionalidad',
      description: 'Mejoran la funcionalidad y personalización del sitio.',
      examples: ['Recordar preferencias', 'Formularios guardados', 'Configuraciones'],
      necessary: false
    },
    {
      icon: Database,
      title: 'Cookies de marketing',
      description: 'Utilizadas para mostrar publicidad relevante.',
      examples: ['Anuncios personalizados', 'Redes sociales', 'Seguimiento de campañas'],
      necessary: false
    }
  ]

  const cookieDetails = [
    {
      name: 'PHPSESSID',
      purpose: 'Mantener la sesión del usuario activa',
      duration: 'Sesión',
      type: 'Esencial'
    },
    {
      name: 'language',
      purpose: 'Recordar el idioma preferido del usuario',
      duration: '1 año',
      type: 'Funcionalidad'
    },
    {
      name: '_ga',
      purpose: 'Análisis de tráfico web (Google Analytics)',
      duration: '2 años',
      type: 'Análisis'
    },
    {
      name: '_fbp',
      purpose: 'Publicidad en Facebook',
      duration: '3 meses',
      type: 'Marketing'
    }
  ]

  const manageOptions = [
    {
      title: 'Configuración del navegador',
      description: 'Puede configurar su navegador para rechazar cookies o recibir una notificación cuando se envíen.',
      steps: [
        'Chrome: Configuración > Privacidad y seguridad > Cookies',
        'Firefox: Opciones > Privacidad y seguridad > Cookies',
        'Safari: Preferencias > Privacidad > Cookies',
        'Edge: Configuración > Cookies y permisos del sitio'
      ]
    },
    {
      title: 'Herramientas de terceros',
      description: 'Utilizamos herramientas que le permiten gestionar sus preferencias de cookies.',
      steps: [
        'Panel de consentimiento visible en el sitio',
        'Configuración de preferencias personalizable',
        'Opciones de opt-out para cookies no esenciales'
      ]
    },
    {
      title: 'Contacto directo',
      description: 'Puede contactarnos directamente para gestionar sus preferencias de cookies.',
      steps: [
        'Formulario de contacto en línea',
        'Llamada telefónica al +54 9 11 2846-2184',
        'Correo electrónico a info@baxiservice.com'
      ]
    }
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
              <Cookie className="w-10 h-10" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Política de Cookies
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Utilizamos cookies para mejorar su experiencia en nuestro sitio web. 
            Conozca qué cookies utilizamos y cómo gestionarlas.
          </motion.p>
        </div>
      </section>

      {/* ¿Qué son las cookies? */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                ¿Qué son las cookies?
              </h2>
              
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo 
                cuando visita nuestro sitio web. Nos ayudan a recordar sus preferencias, 
                analizar el tráfico del sitio y mejorar su experiencia.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-700">Mejoran la funcionalidad del sitio web</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-700">Recuerdan sus preferencias y configuraciones</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-700">Nos ayudan a mejorar nuestros servicios</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-700">Proporcionan análisis del uso del sitio</span>
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
                    <Info className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Información importante
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    Las cookies no contienen información personal identificable 
                    y no pueden acceder a archivos en su dispositivo.
                  </p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Seguridad:</span>
                      <span className="font-medium text-neutral-900">Alta</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Privacidad:</span>
                      <span className="font-medium text-neutral-900">Protegida</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Control:</span>
                      <span className="font-medium text-neutral-900">Completo</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tipos de cookies */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Tipos de cookies que utilizamos
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Clasificamos nuestras cookies según su función y necesidad 
              para el funcionamiento del sitio web.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center">
                    <type.icon className="w-8 h-8 text-brand-600" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    type.necessary ? 'bg-success text-white' : 'bg-warning text-white'
                  }`}>
                    {type.necessary ? 'Necesaria' : 'Opcional'}
                  </span>
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

      {/* Detalles de cookies */}
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
              Cookies específicas que utilizamos
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Lista detallada de las cookies que se instalan en su dispositivo 
              cuando visita nuestro sitio web.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">
                      Nombre de la cookie
                    </th>
                    <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">
                      Propósito
                    </th>
                    <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">
                      Duración
                    </th>
                    <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">
                      Tipo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cookieDetails.map((cookie, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border-b border-neutral-200"
                    >
                      <td className="p-4 text-neutral-900 font-medium border border-neutral-200">
                        {cookie.name}
                      </td>
                      <td className="p-4 text-neutral-600 border border-neutral-200">
                        {cookie.purpose}
                      </td>
                      <td className="p-4 text-neutral-600 border border-neutral-200">
                        {cookie.duration}
                      </td>
                      <td className="p-4 border border-neutral-200">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          cookie.type === 'Esencial' ? 'bg-success text-white' :
                          cookie.type === 'Análisis' ? 'bg-info text-white' :
                          cookie.type === 'Funcionalidad' ? 'bg-warning text-white' :
                          'bg-error text-white'
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo gestionar cookies */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Cómo gestionar sus cookies
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Tiene control total sobre las cookies que se instalan en su dispositivo. 
              Conozca las diferentes opciones disponibles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {manageOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {option.title}
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {option.description}
                </p>

                <div>
                  <h4 className="font-semibold text-neutral-700 mb-3">Pasos:</h4>
                  <ol className="space-y-2">
                    {option.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start space-x-2 text-sm text-neutral-600">
                        <span className="w-5 h-5 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {stepIndex + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto de deshabilitar cookies */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                ¿Qué pasa si deshabilita las cookies?
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Entendemos que puede querer limitar el uso de cookies. 
                Conozca las consecuencias de esta decisión.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="card p-8 bg-success/5 border-success/20"
              >
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Cookies esenciales
                </h3>
                <p className="text-neutral-600 mb-4">
                  Si deshabilita las cookies esenciales, es posible que algunas 
                  funciones del sitio web no funcionen correctamente.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Problemas de inicio de sesión</li>
                  <li>• Formularios que no se envían</li>
                  <li>• Preferencias que no se guardan</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card p-8 bg-warning/5 border-warning/20"
              >
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Cookies opcionales
                </h3>
                <p className="text-neutral-600 mb-4">
                  Deshabilitar cookies opcionales no afectará la funcionalidad 
                  básica del sitio web.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Menos personalización</li>
                  <li>• Análisis limitado</li>
                  <li>• Publicidad menos relevante</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Información de contacto */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                ¿Tiene preguntas sobre cookies?
              </h2>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
                Nuestro equipo está disponible para responder cualquier consulta 
                sobre nuestra política de cookies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="btn-primary"
                >
                  Contactar equipo
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
                <a href="/legal" className="hover:text-brand-600 transition-colors">
                  Legal
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>/</span>
                <span className="text-neutral-900">Política de Cookies</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Cookies

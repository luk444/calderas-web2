import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react'

const Coverage = () => {
  const zones = [
    {
      name: 'CABA',
      description: 'Ciudad Autónoma de Buenos Aires',
      areas: [
        'Palermo', 'Belgrano', 'Caballito', 'Villa Crespo', 'Almagro',
        'Villa Devoto', 'Villa del Parque', 'Flores', 'Floresta', 'Villa Luro',
        'Mataderos', 'Liniers', 'Villa Real', 'Monte Castro', 'Villa Santa Rita',
        'Coghlan', 'Saavedra', 'Núñez', 'Colegiales', 'Chacarita',
        'Paternal', 'Villa Ortúzar', 'Agronomía', 'Parque Chas', 'La Paternal'
      ],
      responseTime: '30-45 minutos',
      color: 'brand'
    },
    {
      name: 'Zona Norte',
      description: 'Gran Buenos Aires Norte',
      areas: [
        'Vicente López', 'San Isidro', 'Tigre', 'San Fernando', 'San Martín',
        'Villa Ballester', 'Villa Lynch', 'José León Suárez', 'General Pacheco',
        'Don Torcuato', 'Troncos del Talar', 'Benavídez', 'Nordelta', 'Dique Luján'
      ],
      responseTime: '45-60 minutos',
      color: 'accent'
    },
    {
      name: 'Zona Oeste',
      description: 'Gran Buenos Aires Oeste',
      areas: [
        'Morón', 'Ituzaingó', 'Merlo', 'San Antonio de Padua', 'Castelar',
        'Hurlingham', 'Villa Tesei', 'William C. Morris', 'Ramos Mejía',
        'Haedo', 'El Palomar', 'Caseros', 'Villa Bosch', 'Ciudadela'
      ],
      responseTime: '45-75 minutos',
      color: 'brand'
    },
    {
      name: 'Zona Sur',
      description: 'Gran Buenos Aires Sur',
      areas: [
        'Avellaneda', 'Quilmes', 'Lanús', 'Lomas de Zamora', 'Banfield',
        'Temperley', 'Adrogué', 'Burzaco', 'Florencio Varela', 'Berazategui',
        'Ezpeleta', 'La Plata', 'Ensenada', 'Berisso'
      ],
      responseTime: '60-90 minutos',
      color: 'accent'
    }
  ]

  const specialServices = [
    {
      title: 'Servicios Especiales',
      description: 'Para zonas fuera de nuestra cobertura estándar',
      features: [
        'Presupuesto personalizado según distancia',
        'Coordinación de horarios especiales',
        'Servicios de mantenimiento programado',
        'Consultoría técnica a distancia'
      ]
    }
  ]

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
            Cobertura Geográfica
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Cubrimos toda la Ciudad Autónoma de Buenos Aires (CABA) y el Gran Buenos Aires (GBA). 
            Respuesta garantizada en menos de 1 hora para urgencias.
          </motion.p>
        </div>
      </section>

      {/* Mapa de cobertura */}
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
              Nuestra cobertura
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Atendemos emergencias y servicios programados en toda la región metropolitana 
              con técnicos especializados disponibles 24/7.
            </p>
          </motion.div>

          {/* Zonas de cobertura */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {zones.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-${zone.color}-100 rounded-2xl flex items-center justify-center`}>
                    <MapPin className="w-8 h-8 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900">{zone.name}</h3>
                    <p className="text-neutral-600">{zone.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock className="w-5 h-5 text-accent-500" />
                    <span className="font-semibold text-neutral-900">
                      Tiempo de respuesta: {zone.responseTime}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-900 mb-3">Barrios incluidos:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {zone.areas.map((area, areaIndex) => (
                      <div key={areaIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-brand-600 rounded-full"></div>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={`/contacto?zona=${zone.name.toLowerCase()}`}
                    className="btn-outline flex-1 text-center"
                  >
                    Solicitar servicio
                  </a>
                  <a
                    href="https://wa.me/5491128462184"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-center"
                  >
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Servicios especiales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-brand-50 to-accent-50 rounded-2xl p-8 border border-brand-200"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                ¿Vives fuera de nuestra cobertura estándar?
              </h3>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Ofrecemos servicios especiales para zonas más alejadas con presupuestos 
                personalizados y coordinación de horarios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-4">Servicios disponibles:</h4>
                <ul className="space-y-2">
                  {specialServices[0].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-neutral-900 mb-4">Contacto para zonas especiales:</h4>
                <div className="space-y-3">
                  <a
                    href="tel:+5491128462184"
                    className="flex items-center space-x-3 text-brand-600 hover:text-brand-700"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+54 9 11 2846-2184</span>
                  </a>
                  <a
                    href="https://wa.me/5491128462184?text=Hola,%20vivo%20fuera%20de%20su%20cobertura%20estándar,%20¿pueden%20atenderme?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-green-600 hover:text-green-700"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp para consultas</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8">
                Respuesta garantizada en toda nuestra cobertura
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Tiempos de respuesta</h3>
                    <p className="text-neutral-600">
                      Urgencias atendidas en 30-90 minutos según tu zona. 
                      Servicios programados con horarios flexibles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Cobertura extendida</h3>
                    <p className="text-neutral-600">
                      Más de 50 barrios cubiertos en CABA y GBA. 
                      Consulta especial para zonas más alejadas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-success-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Disponibilidad 24/7</h3>
                    <p className="text-neutral-600">
                      Técnicos de guardia disponibles las 24 horas para emergencias. 
                      Respuesta inmediata vía WhatsApp o teléfono.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Calcula tu tiempo de respuesta
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-brand-50 rounded-lg">
                  <div className="font-semibold text-neutral-900">CABA</div>
                  <div className="text-sm text-neutral-600">30-45 minutos</div>
                </div>
                
                <div className="p-4 bg-accent-50 rounded-lg">
                  <div className="font-semibold text-neutral-900">GBA Norte</div>
                  <div className="text-sm text-neutral-600">45-60 minutos</div>
                </div>
                
                <div className="p-4 bg-neutral-100 rounded-lg">
                  <div className="font-semibold text-neutral-900">GBA Oeste</div>
                  <div className="text-sm text-neutral-600">45-75 minutos</div>
                </div>
                
                <div className="p-4 bg-neutral-100 rounded-lg">
                  <div className="font-semibold text-neutral-900">GBA Sur</div>
                  <div className="text-sm text-neutral-600">60-90 minutos</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent-50 rounded-lg">
                <p className="text-sm text-accent-800">
                  <strong>Nota:</strong> Los tiempos pueden variar según el tráfico 
                  y la disponibilidad de técnicos en el momento.
                </p>
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
              ¿Estás en nuestra zona de cobertura?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contacta con nosotros para confirmar disponibilidad y agendar tu servicio. 
              Respuesta garantizada en menos de 1 hora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="btn-primary"
              >
                Verificar cobertura
              </a>
              <a
                href="https://wa.me/5491128462184?text=Hola,%20quiero%20verificar%20si%20estoy%20en%20su%20zona%20de%20cobertura"
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

export default Coverage

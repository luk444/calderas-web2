import { motion } from 'framer-motion'
import { Star, Quote, CheckCircle, Clock, Shield, Award } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Rodríguez',
      location: 'Palermo, CABA',
      rating: 5,
      text: 'Excelente servicio técnico. El técnico llegó en menos de 1 hora y solucionó el problema de mi caldera BAXI al instante. Muy profesional y puntual.',
      avatar: 'CR',
      service: 'Reparación BAXI',
      date: 'Hace 2 semanas'
    },
    {
      name: 'María González',
      location: 'Vicente López, GBA',
      rating: 5,
      text: 'Hace 3 años que confío en BaxiService para el mantenimiento de mi caldera. Siempre impecables, puntuales y con precios justos.',
      avatar: 'MG',
      service: 'Mantenimiento anual',
      date: 'Hace 1 mes'
    },
    {
      name: 'Roberto Silva',
      location: 'Belgrano, CABA',
      rating: 5,
      text: 'Servicio de urgencia 24/7 que realmente funciona. A las 2 de la mañana me atendieron y en 45 minutos tenía calefacción nuevamente.',
      avatar: 'RS',
      service: 'Urgencia 24/7',
      date: 'Hace 3 semanas'
    },
    {
      name: 'Ana Martínez',
      location: 'San Isidro, GBA',
      rating: 5,
      text: 'Instalaron mi piso radiante hace 2 años y funciona perfectamente. El técnico fue muy cuidadoso y explicó todo el proceso.',
      avatar: 'AM',
      service: 'Instalación piso radiante',
      date: 'Hace 2 meses'
    },
    {
      name: 'Luis Fernández',
      location: 'Caballito, CABA',
      rating: 5,
      text: 'Como servicio oficial BAXI, tienen acceso a repuestos originales que otros no tienen. Mi caldera funciona como nueva.',
      avatar: 'LF',
      service: 'Servicio oficial BAXI',
      date: 'Hace 1 mes'
    },
    {
      name: 'Sofía Pérez',
      location: 'Tigre, GBA',
      rating: 5,
      text: 'Contraté el plan de mantenimiento anual y estoy muy satisfecha. Llegan siempre en la fecha acordada y hacen un trabajo impecable.',
      avatar: 'SP',
      service: 'Plan de mantenimiento',
      date: 'Hace 2 semanas'
    },
    {
      name: 'Diego López',
      location: 'Villa Crespo, CABA',
      rating: 5,
      text: 'Excelente diagnóstico técnico. Identificaron el problema rápidamente y me dieron opciones de solución con precios transparentes.',
      avatar: 'DL',
      service: 'Diagnóstico técnico',
      date: 'Hace 1 semana'
    },
    {
      name: 'Carolina Ruiz',
      location: 'Morón, GBA',
      rating: 5,
      text: 'Muy profesionales y educados. Limpiaron mi caldera a fondo y ahora consume menos gas. Totalmente recomendables.',
      avatar: 'CR',
      service: 'Limpieza y mantenimiento',
      date: 'Hace 3 semanas'
    }
  ]

  const stats = [
    { number: '5000+', label: 'Clientes satisfechos', icon: CheckCircle },
    { number: '4.9', label: 'Calificación Google', icon: Star },
    { number: '15+', label: 'Años de experiencia', icon: Award },
    { number: '24/7', label: 'Disponibilidad', icon: Clock }
  ]

  const serviceTypes = [
    'Reparación BAXI',
    'Mantenimiento preventivo',
    'Instalación piso radiante',
    'Urgencias 24/7',
    'Servicio oficial',
    'Diagnóstico técnico'
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
            Testimonios de Clientes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Más de 5000 clientes satisfechos confían en nuestro servicio técnico 
            especializado en calderas y sistemas de calefacción.
          </motion.p>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-brand-600" />
                </div>
                <div className="text-3xl font-bold text-neutral-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Badge */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-white border border-neutral-200 rounded-2xl px-8 py-6 shadow-lg inline-block">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-neutral-900">4.9</div>
                  <div className="text-lg text-neutral-600">Google Reviews</div>
                  <div className="text-sm text-neutral-500">Basado en 127 reseñas</div>
                </div>
                <div className="border-l border-neutral-200 pl-6">
                  <a
                    href="#"
                    className="text-brand-600 hover:text-brand-700 font-medium underline"
                  >
                    Ver todas las reseñas
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonios principales */}
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
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Historias reales de clientes que han confiado en nuestro servicio 
              técnico para sus sistemas de calefacción.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                      <span className="text-brand-600 font-bold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex space-x-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-xs text-neutral-500">
                      {testimonial.date}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-medium text-accent-600 mb-2">
                    {testimonial.service}
                  </div>
                  <Quote className="w-6 h-6 text-brand-200 mb-3" />
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de servicios con testimonios */}
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
              Testimonios por tipo de servicio
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Descubre qué opinan nuestros clientes sobre cada uno de nuestros servicios especializados.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200"
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  {service}
                </h3>
                
                <div className="space-y-3">
                  {testimonials
                    .filter(t => t.service === service)
                    .slice(0, 2)
                    .map((testimonial, tIndex) => (
                      <div key={tIndex} className="border-l-2 border-brand-200 pl-4">
                        <p className="text-sm text-neutral-600 mb-2">
                          "{testimonial.text.substring(0, 100)}..."
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-neutral-700">
                            {testimonial.name}
                          </span>
                          <div className="flex space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <a
                    href={`/servicios#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-brand-600 hover:text-brand-700 text-sm font-medium"
                  >
                    Ver más sobre {service} →
                  </a>
                </div>
              </motion.div>
            ))}
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
              ¿Quieres ser nuestro próximo cliente satisfecho?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Únete a más de 5000 clientes que confían en nuestro servicio técnico 
              especializado en calderas y sistemas de calefacción.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="btn-primary"
              >
                Solicitar servicio
              </a>
              <a
                href="https://wa.me/5491128462184?text=Hola,%20quiero%20ser%20su%20próximo%20cliente%20satisfecho"
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

export default Testimonials

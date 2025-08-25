import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Carlos Rodríguez',
      location: 'Palermo, CABA',
      rating: 5,
      text: 'Excelente servicio técnico. El técnico llegó en menos de 1 hora y solucionó el problema de mi caldera BAXI al instante. Muy profesional y puntual.',
      avatar: 'CR'
    },
    {
      name: 'María González',
      location: 'Vicente López, GBA',
      rating: 5,
      text: 'Hace 3 años que confío en BaxiService para el mantenimiento de mi caldera. Siempre impecables, puntuales y con precios justos.',
      avatar: 'MG'
    },
    {
      name: 'Roberto Silva',
      location: 'Belgrano, CABA',
      rating: 5,
      text: 'Servicio de urgencia 24/7 que realmente funciona. A las 2 de la mañana me atendieron y en 45 minutos tenía calefacción nuevamente.',
      avatar: 'RS'
    },
    {
      name: 'Ana Martínez',
      location: 'San Isidro, GBA',
      rating: 5,
      text: 'Instalaron mi piso radiante hace 2 años y funciona perfectamente. El técnico fue muy cuidadoso y explicó todo el proceso.',
      avatar: 'AM'
    },
    {
      name: 'Luis Fernández',
      location: 'Caballito, CABA',
      rating: 5,
      text: 'Como servicio oficial BAXI, tienen acceso a repuestos originales que otros no tienen. Mi caldera funciona como nueva.',
      avatar: 'LF'
    },
    {
      name: 'Sofía Pérez',
      location: 'Tigre, GBA',
      rating: 5,
      text: 'Contraté el plan de mantenimiento anual y estoy muy satisfecha. Llegan siempre en la fecha acordada y hacen un trabajo impecable.',
      avatar: 'SP'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
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
            Más de 5000 clientes satisfechos confían en nuestro servicio técnico 
            especializado en calderas y sistemas de calefacción.
          </p>
        </motion.div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white border border-neutral-200 rounded-xl px-6 py-4 shadow-lg flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-neutral-900">4.9</div>
              <div className="text-sm text-neutral-600">Google Reviews</div>
            </div>
            <a
              href="#"
              className="text-brand-600 hover:text-brand-700 font-medium text-sm underline"
            >
              Ver todas
            </a>
          </div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-8">
                <Quote className="w-12 h-12 text-brand-200 mx-auto mb-6" />
                <p className="text-lg text-neutral-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center">
                    <span className="text-brand-600 font-bold text-lg">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-neutral-900">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-neutral-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-brand-600 w-8'
                  : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

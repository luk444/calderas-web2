import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, Star, Shield, Clock } from 'lucide-react'

const Hero = () => {
  const trustBadges = [
    { icon: CheckCircle, text: '+15 años', color: 'text-success' },
    { icon: Shield, text: 'Repuestos originales', color: 'text-brand-600' },
    { icon: Star, text: 'Garantía oficial', color: 'text-warning' },
    { icon: Clock, text: '+5000 clientes', color: 'text-info' },
  ]

  return (
    <section className="relative min-h-[calc(100vh+5rem)] sm:min-h-[calc(100vh+6rem)] lg:min-h-screen flex items-center bg-gradient-hero overflow-hidden px-4 sm:px-6 lg:px-0 pt-20 sm:pt-24 lg:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            >
              Técnicos certificados en{' '}
              <span className="text-accent-500">calderas</span>, piso radiante y radiadores
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed"
            >
              Servicio Oficial BAXI y multimarca. Urgencias 24/7 en CABA y GBA.
              Respuesta garantizada en menos de 1 hora.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8"
            >
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <badge.icon className={`w-5 h-5 ${badge.color}`} />
                  <span className="text-white/90 font-medium">{badge.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <a
                href="https://wa.me/5491128462184?text=Hola,%20necesito%20servicio%20técnico%20para%20mi%20caldera%20urgentemente"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Solicitar servicio ahora
              </a>
              <Link
                to="/contacto"
                className="btn-outline border-white text-white hover:bg-white hover:text-brand-600 text-center text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Agendar visita técnica
              </Link>
            </motion.div>

            {/* Google Rating */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="mt-8 flex items-center space-x-3"
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 font-medium">4.9 en Google</span>
              <Link
                to="/testimonios"
                className="text-accent-500 hover:text-accent-400 underline text-sm"
              >
                Ver reseñas
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Placeholder para imagen de caldera */}
              <div className="w-full h-64 sm:h-80 lg:h-[500px] bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <div className="text-center text-white/80">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">🔥</span>
                  </div>
                  <p className="text-lg font-medium">Imagen de caldera</p>
                  <p className="text-sm opacity-75">Servicio Oficial BAXI</p>
                </div>
              </div>
              
              {/* Badge Oficial */}
              <div className="absolute -top-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                OFICIAL
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

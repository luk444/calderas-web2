import { motion } from 'framer-motion'
import { Phone, MessageCircle, Clock, AlertTriangle } from 'lucide-react'

const EmergencySection = () => {
  return (
    <section className="py-20 bg-gradient-urgent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-white" />
            <h2 className="text-3xl lg:text-4xl font-bold">
              ¿Sin calefacción o fuga ahora?
            </h2>
          </div>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Técnicos de guardia 24/7 disponibles para emergencias. 
            Respuesta garantizada en 30-60 minutos según tu zona en CABA y GBA.
          </p>
        </motion.div>

        {/* CTAs de Emergencia */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* Llamada */}
          <motion.a
            href="tel:+5491128462184"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-neutral-900 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-200 group"
          >
            <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-600 transition-colors">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Llamar Ahora</h3>
            <p className="text-neutral-600 mb-4">
              Atención telefónica inmediata para urgencias
            </p>
            <div className="text-accent-500 font-semibold text-lg">
              +54 9 11 2846-2184
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/5491128462184?text=URGENTE:%20Necesito%20servicio%20técnico%20inmediato%20para%20mi%20caldera"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-neutral-900 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-200 group"
          >
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">WhatsApp 24/7</h3>
            <p className="text-neutral-600 mb-4">
              Envíanos fotos y descripción del problema
            </p>
            <div className="text-green-600 font-semibold text-lg">
              Respuesta en minutos
            </div>
          </motion.a>
        </motion.div>

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center text-white/90"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6 text-accent-300" />
              <span className="font-medium">Respuesta en 30-60 min</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-accent-300" />
              <span className="font-medium">Técnicos certificados</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-accent-300" />
              <span className="font-medium">Cobertura CABA + GBA</span>
            </div>
          </div>
        </motion.div>

        {/* Nota importante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-white/20">
            <p className="text-white/90 text-sm">
              <strong>Importante:</strong> Para emergencias fuera de horario comercial, 
              el servicio tiene un recargo del 30%. En horario comercial (8:00-20:00) 
              se aplica tarifa estándar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EmergencySection

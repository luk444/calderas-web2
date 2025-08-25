import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    street: '',
    height: '',
    floor: '',
    neighborhood: '',
    city: '',
    serviceType: '',
    description: '',
    timePreference: '',
    acceptTerms: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData)
  }

  const steps = [
    { number: 1, title: 'Datos del cliente' },
    { number: 2, title: 'Dirección' },
    { number: 3, title: 'Tipo de servicio' },
    { number: 4, title: 'Horario preferido' },
    { number: 5, title: 'Confirmación' }
  ]

  return (
    <div className="pt-20 sm:pt-24 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Contacto y Agendamiento
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Agenda tu visita técnica o solicita un presupuesto. 
            Nuestro equipo está listo para ayudarte con tu sistema de calefacción.
          </motion.p>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar - Mejorado */}
            <div className="mb-12">
              {/* Mobile: Progress simple */}
              <div className="lg:hidden mb-6">
                <div className="flex items-center justify-between text-sm text-neutral-600 mb-2">
                  <span>Paso {currentStep} de {steps.length}</span>
                  <span>{Math.round((currentStep / steps.length) * 100)}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div 
                    className="bg-brand-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(currentStep / steps.length) * 100}%` }}
                  ></div>
                </div>
                <div className="text-center mt-4">
                  <span className="text-lg font-semibold text-neutral-900">
                    {steps[currentStep - 1].title}
                  </span>
                </div>
              </div>
              
              {/* Desktop: Progress completo */}
              <div className="hidden lg:block">
                <div className="flex items-center justify-center mb-4">
                  {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                          currentStep >= step.number 
                            ? 'bg-brand-600 text-white shadow-lg scale-110' 
                            : 'bg-neutral-200 text-neutral-600'
                        }`}>
                          {step.number}
                        </div>
                        <span className={`text-xs mt-2 text-center max-w-20 ${
                          currentStep >= step.number ? 'text-brand-600 font-medium' : 'text-neutral-500'
                        }`}>
                          {step.title}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`w-20 h-1 mx-6 mt-[-24px] transition-all duration-300 ${
                          currentStep > step.number ? 'bg-brand-600' : 'bg-neutral-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulario */}
            <motion.form 
              onSubmit={handleSubmit} 
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-neutral-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Step 1: Datos del cliente */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                    Información de contacto
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                        placeholder="+54 9 11 1234-5678"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Dirección */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                    Dirección del servicio
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Calle *
                      </label>
                      <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                        placeholder="Nombre de la calle"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Altura *
                      </label>
                      <input
                        type="text"
                        name="height"
                        value={formData.height}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                        placeholder="Número"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Piso/Depto
                      </label>
                      <input
                        type="text"
                        name="floor"
                        value={formData.floor}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                        placeholder="Piso, departamento, etc."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Barrio *
                      </label>
                      <input
                        type="text"
                        name="neighborhood"
                        value={formData.neighborhood}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                        placeholder="Barrio"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Ciudad *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                      placeholder="CABA, Vicente López, etc."
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 3: Tipo de servicio */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                    Tipo de servicio requerido
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Servicio *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="mantenimiento">Mantenimiento preventivo</option>
                      <option value="reparacion">Reparación</option>
                      <option value="instalacion">Instalación</option>
                      <option value="puesta-marcha">Puesta en marcha</option>
                      <option value="diagnostico">Diagnóstico</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Descripción del problema/servicio
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                      placeholder="Describe brevemente qué necesitas o qué problema tienes..."
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 4: Horario preferido */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                    Horario preferido
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Preferencia de horario *
                    </label>
                    <select
                      name="timePreference"
                      value={formData.timePreference}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                    >
                      <option value="">Selecciona tu preferencia</option>
                      <option value="manana">Mañana (8:00 - 12:00)</option>
                      <option value="tarde">Tarde (13:00 - 17:00)</option>
                      <option value="noche">Noche (17:00 - 20:00)</option>
                      <option value="sabado">Sábado (8:00 - 18:00)</option>
                      <option value="urgencia">Urgencia (24/7)</option>
                    </select>
                  </div>
                  
                  <div className="bg-brand-50 p-4 rounded-lg">
                    <p className="text-sm text-neutral-700">
                      <strong>Nota:</strong> Para urgencias fuera de horario comercial 
                      se aplica un recargo del 30%. En horario comercial (8:00-20:00) 
                      se aplica tarifa estándar.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Confirmación */}
              {currentStep === 5 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                    Confirma tu solicitud
                  </h3>
                  
                  <div className="bg-neutral-50 p-6 rounded-lg space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <strong className="text-neutral-900">Nombre:</strong>
                        <p className="text-neutral-600">{formData.name}</p>
                      </div>
                      <div>
                        <strong className="text-neutral-900">Teléfono:</strong>
                        <p className="text-neutral-600">{formData.phone}</p>
                      </div>
                      <div>
                        <strong className="text-neutral-900">Dirección:</strong>
                        <p className="text-neutral-600">
                          {formData.street} {formData.height}
                          {formData.floor && `, ${formData.floor}`}
                        </p>
                      </div>
                      <div>
                        <strong className="text-neutral-900">Barrio/Ciudad:</strong>
                        <p className="text-neutral-600">{formData.neighborhood}, {formData.city}</p>
                      </div>
                      <div>
                        <strong className="text-neutral-900">Servicio:</strong>
                        <p className="text-neutral-600">{formData.serviceType}</p>
                      </div>
                      <div>
                        <strong className="text-neutral-900">Horario:</strong>
                        <p className="text-neutral-600">{formData.timePreference}</p>
                      </div>
                    </div>
                    
                    {formData.description && (
                      <div>
                        <strong className="text-neutral-900">Descripción:</strong>
                        <p className="text-neutral-600">{formData.description}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-4 h-4 text-brand-600 border-neutral-300 rounded focus:ring-brand-600"
                    />
                    <label className="text-sm text-neutral-700">
                      Acepto los <a href="/terminos" className="text-brand-600 hover:underline">Términos y Condiciones</a> y la{' '}
                      <a href="/privacidad" className="text-brand-600 hover:underline">Política de Privacidad</a> *
                    </label>
                  </div>
                </motion.div>
              )}

              {/* Navegación */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 pt-6 border-t border-neutral-200">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-outline order-2 sm:order-1"
                  >
                    ← Anterior
                  </button>
                )}
                
                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary ml-auto order-1 sm:order-2"
                  >
                    Siguiente →
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-primary ml-auto order-1 sm:order-2 bg-accent-500 hover:bg-accent-600"
                    disabled={!formData.acceptTerms}
                  >
                    ✓ Enviar solicitud
                  </button>
                )}
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Mapa y contacto */}
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
              Ubicación y contacto directo
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Estamos ubicados estratégicamente para brindar el mejor servicio en CABA y GBA.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-neutral-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.49240499943!2d-58.50177321171874!3d-34.61315709999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA%2C%20Argentina!5e0!3m2!1ses!2sus!4v1699999999999!5m2!1ses!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación BaxiService - CABA y GBA"
                  className="w-full h-80 sm:h-96"
                ></iframe>
              </div>
              
              {/* Zona de cobertura */}
              <div className="mt-6 bg-gradient-to-r from-brand-50 to-accent-50 rounded-xl p-6 border border-brand-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-brand-600 mr-2" />
                  Zona de cobertura
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                    <span className="text-sm text-neutral-700">CABA completa</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <span className="text-sm text-neutral-700">Zona Norte GBA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <span className="text-sm text-neutral-700">Zona Oeste GBA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <span className="text-sm text-neutral-700">Zona Sur GBA</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-8">
                Contacto directo
              </h3>
              
              {/* Cards de contacto */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center">
                      <Phone className="w-7 h-7 text-accent-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-neutral-900 mb-1">Urgencias 24/7</h4>
                      <a 
                        href="tel:+5491128462184" 
                        className="text-lg font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                      >
                        +54 9 11 2846-2184
                      </a>
                      <p className="text-sm text-neutral-500 mt-1">Llamadas directas</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-7 h-7 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-neutral-900 mb-1">WhatsApp</h4>
                      <a
                        href="https://wa.me/5491128462184?text=Hola,%20necesito%20servicio%20técnico%20para%20mi%20caldera"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-green-600 hover:text-green-700 transition-colors"
                      >
                        Enviar mensaje
                      </a>
                      <p className="text-sm text-neutral-500 mt-1">Respuesta inmediata</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center">
                      <Mail className="w-7 h-7 text-brand-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-neutral-900 mb-1">Email</h4>
                      <a 
                        href="mailto:baxioficial@gmail.com" 
                        className="text-lg font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                      >
                        baxioficial@gmail.com
                      </a>
                      <p className="text-sm text-neutral-500 mt-1">Consultas y presupuestos</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Horarios */}
              <div className="bg-gradient-to-r from-neutral-50 to-brand-50 rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-neutral-900">Horarios de atención</h4>
                </div>
                <div className="space-y-2 text-neutral-700">
                  <div className="flex justify-between">
                    <span>Lunes a Viernes:</span>
                    <span className="font-medium">8:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-medium">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-3">
                    <span className="text-accent-600 font-medium">Urgencias:</span>
                    <span className="font-bold text-accent-600">24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

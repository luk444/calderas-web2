import { motion } from 'framer-motion'
import { CheckCircle, Award, Clock, Shield, Users, MapPin, Phone, Mail } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '15+', label: 'Años de experiencia', icon: Clock },
    { number: '5000+', label: 'Clientes satisfechos', icon: Users },
    { number: '24/7', label: 'Disponibilidad', icon: Clock },
    { number: '100%', label: 'Garantía oficial', icon: Shield }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Calidad y Seguridad',
      description: 'Todos nuestros trabajos cumplen con los más altos estándares de calidad y seguridad. Utilizamos repuestos originales y seguimos las normativas vigentes.'
    },
    {
      icon: Clock,
      title: 'Puntualidad',
      description: 'Valoramos tu tiempo. Llegamos en el horario acordado y completamos los trabajos en los tiempos estimados sin comprometer la calidad.'
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Cada cliente es único. Ofrecemos soluciones personalizadas y asesoramiento técnico especializado para cada situación específica.'
    },
    {
      icon: Award,
      title: 'Excelencia Técnica',
      description: 'Nuestros técnicos están certificados y en constante formación para ofrecer el mejor servicio técnico del mercado.'
    }
  ]

  const team = [
    {
      name: 'Ing. Carlos Rodríguez',
      position: 'Director Técnico',
      experience: '15+ años en calefacción',
      specialty: 'Especialista en BAXI y sistemas de alta eficiencia'
    },
    {
      name: 'Téc. Miguel González',
      position: 'Jefe de Servicio',
      experience: '12+ años en el campo',
      specialty: 'Experto en piso radiante y radiadores'
    },
    {
      name: 'Téc. Roberto Silva',
      position: 'Técnico Senior',
      experience: '10+ años de experiencia',
      specialty: 'Especialista en reparación multimarca'
    }
  ]

  const certifications = [
    'Servicio Técnico Oficial BAXI Argentina',
    'Certificación RITE (Reglamento de Instalaciones Térmicas)',
    'Técnicos certificados por fabricantes',
    'Membresía en asociaciones técnicas del sector'
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
            Sobre BaxiService
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Más de 15 años de experiencia en servicio técnico oficial BAXI y multimarca. 
            Especialistas en calderas, piso radiante y sistemas de calefacción.
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

      {/* Nuestra historia */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8">
                Nuestra Historia
              </h2>
              
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                <p>
                  BaxiService nació en 2009 con la misión de ofrecer un servicio técnico 
                  de excelencia en el sector de la calefacción. Comenzamos como un pequeño 
                  equipo de técnicos apasionados por la tecnología y el servicio al cliente.
                </p>
                
                <p>
                  Con el tiempo, nos convertimos en <strong>Servicio Técnico Oficial BAXI</strong>, 
                  lo que nos permitió acceder a la más alta tecnología y formación técnica 
                  del fabricante líder en calefacción.
                </p>
                
                <p>
                  Hoy, después de más de 15 años, hemos atendido a más de 5000 clientes 
                  en CABA y GBA, manteniendo siempre nuestro compromiso con la calidad, 
                  la puntualidad y la satisfacción del cliente.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-brand-100 to-accent-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center text-neutral-600">
                  <div className="text-6xl mb-4">🏢</div>
                  <p className="text-lg font-medium">Imagen de nuestra empresa</p>
                  <p className="text-sm">Oficinas técnicas y taller</p>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                2009 - 2024
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestros valores */}
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
              Nuestros Valores
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y nos han permitido 
              construir la confianza de miles de clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-brand-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro equipo */}
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
              Nuestro Equipo
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Profesionales altamente capacitados y certificados que garantizan 
              la excelencia en cada servicio que realizamos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="w-24 h-24 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">👨‍🔧</span>
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {member.name}
                </h3>
                
                <div className="text-brand-600 font-medium mb-3">
                  {member.position}
                </div>
                
                <div className="text-sm text-neutral-600 mb-3">
                  <strong>Experiencia:</strong> {member.experience}
                </div>
                
                <div className="text-sm text-neutral-600">
                  <strong>Especialidad:</strong> {member.specialty}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8">
                Certificaciones y Acreditaciones
              </h2>
              
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Nuestro compromiso con la excelencia se refleja en las certificaciones 
                y acreditaciones que hemos obtenido a lo largo de los años.
              </p>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                    <span className="text-neutral-700">{cert}</span>
                  </motion.div>
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
              <div className="bg-gradient-to-br from-accent-50 to-brand-50 rounded-2xl p-8 border border-accent-200">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-accent-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Servicio Oficial BAXI
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Certificación que garantiza acceso a repuestos originales, 
                    formación técnica continua y soporte directo del fabricante.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-neutral-600">
                      <strong>Válido hasta:</strong> Diciembre 2024
                    </p>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              ¿Quieres conocernos mejor?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Estamos aquí para resolver cualquier consulta y demostrarte 
              por qué somos la mejor opción para tu sistema de calefacción.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Llámanos</h3>
              <a href="tel:+5491128462184" className="text-brand-600 hover:text-brand-700">
                +54 9 11 2846-2184
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Escríbenos</h3>
              <a href="mailto:baxioficial@gmail.com" className="text-brand-600 hover:text-brand-700">
                baxioficial@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Cobertura</h3>
              <p className="text-neutral-600">CABA y GBA</p>
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
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Únete a más de 5000 clientes satisfechos que han confiado 
              en nuestro servicio técnico especializado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="btn-primary"
              >
                Solicitar presupuesto
              </a>
              <a
                href="https://wa.me/5491128462184?text=Hola,%20quiero%20conocer%20más%20sobre%20sus%20servicios"
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

export default About

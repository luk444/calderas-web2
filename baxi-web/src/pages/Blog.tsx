import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Search, Filter } from 'lucide-react'
import { useState } from 'react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Mantenimiento preventivo: La clave para una caldera eficiente',
      excerpt: 'Descubre por qué el mantenimiento preventivo anual es fundamental para mantener tu caldera funcionando al 100% y ahorrar en consumo de gas.',
      category: 'Mantenimiento',
      readTime: '5 min',
      date: '2024-01-15',
      image: '🔥',
      tags: ['mantenimiento', 'eficiencia', 'ahorro energético']
    },
    {
      id: 2,
      title: 'Señales de que tu caldera necesita reparación urgente',
      excerpt: 'Aprende a identificar los síntomas tempranos de problemas en tu caldera para evitar averías costosas y mantener tu hogar caliente.',
      category: 'Reparación',
      readTime: '4 min',
      date: '2024-01-10',
      image: '⚠️',
      tags: ['reparación', 'diagnóstico', 'urgencias']
    },
    {
      id: 3,
      title: 'Piso radiante vs radiadores: ¿Cuál elegir?',
      excerpt: 'Comparativa completa entre sistemas de piso radiante y radiadores tradicionales. Ventajas, desventajas y cuál se adapta mejor a tu hogar.',
      category: 'Instalación',
      readTime: '7 min',
      date: '2024-01-05',
      image: '🏠',
      tags: ['piso radiante', 'radiadores', 'instalación']
    },
    {
      id: 4,
      title: 'Guía completa de ahorro energético en calefacción',
      excerpt: 'Consejos prácticos para reducir tu consumo de gas y electricidad en calefacción sin perder confort térmico.',
      category: 'Ahorro',
      readTime: '6 min',
      date: '2024-01-01',
      image: '💰',
      tags: ['ahorro energético', 'eficiencia', 'consejos']
    },
    {
      id: 5,
      title: 'Servicio oficial BAXI: ¿Por qué es importante?',
      excerpt: 'Explicamos las ventajas de contratar un servicio técnico oficial BAXI y cómo esto protege tu inversión y garantía.',
      category: 'BAXI',
      readTime: '5 min',
      date: '2023-12-28',
      image: '🏆',
      tags: ['BAXI', 'garantía', 'servicio oficial']
    },
    {
      id: 6,
      title: 'Preparando tu caldera para el invierno',
      excerpt: 'Checklist completo para preparar tu sistema de calefacción antes de la temporada fría y evitar sorpresas.',
      category: 'Mantenimiento',
      readTime: '4 min',
      date: '2023-12-20',
      image: '❄️',
      tags: ['invierno', 'preparación', 'checklist']
    }
  ]

  const categories = [
    'Todos',
    'Mantenimiento',
    'Reparación',
    'Instalación',
    'Ahorro',
    'BAXI'
  ]

  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

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
            Blog y Consejos Técnicos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Mantente informado sobre calderas, calefacción y mantenimiento preventivo. 
            Consejos expertos para optimizar tu sistema y ahorrar energía.
          </motion.p>
        </div>
      </section>

      {/* Filtros y búsqueda */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Búsqueda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent text-lg"
                />
              </div>
            </motion.div>

            {/* Categorías */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-brand-600 text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Resultados */}
            {searchTerm && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center mb-8"
              >
                <p className="text-neutral-600">
                  {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
                  {searchTerm && ` para "${searchTerm}"`}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Artículos del blog */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="card overflow-hidden h-full">
                    {/* Imagen */}
                    <div className="h-48 bg-gradient-to-br from-brand-100 to-accent-100 flex items-center justify-center text-6xl">
                      {post.image}
                    </div>

                    {/* Contenido */}
                    <div className="p-6 flex-grow">
                      {/* Meta información */}
                      <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Categoría */}
                      <div className="inline-block bg-brand-100 text-brand-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
                        {post.category}
                      </div>

                      {/* Título */}
                      <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Extracto */}
                      <p className="text-neutral-600 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Leer más */}
                      <div className="flex items-center text-brand-600 font-medium group-hover:text-brand-700 transition-colors">
                        <span>Leer artículo</span>
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                No se encontraron artículos
              </h3>
              <p className="text-neutral-600 mb-6">
                No hay artículos que coincidan con tu búsqueda.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('Todos')
                }}
                className="btn-outline"
              >
                Ver todos los artículos
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-brand-50 to-accent-50 rounded-2xl p-12 border border-brand-200">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                ¿Quieres recibir consejos técnicos?
              </h2>
              <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                Suscríbete a nuestro newsletter y recibe consejos expertos sobre 
                calderas, mantenimiento y ahorro energético directamente en tu email.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                />
                <button className="btn-primary whitespace-nowrap">
                  Suscribirse
                </button>
              </div>
              
              <p className="text-sm text-neutral-500 mt-4">
                Sin spam. Solo contenido útil sobre calefacción.
              </p>
            </div>
          </motion.div>
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
              ¿Necesitas ayuda técnica?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Nuestro equipo de expertos está disponible para resolver cualquier 
              consulta sobre tu sistema de calefacción.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="btn-primary"
              >
                Consultar con expertos
              </a>
              <a
                href="https://wa.me/5491128462184?text=Hola,%20tengo%20una%20consulta%20técnica%20sobre%20mi%20caldera"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-brand-600"
              >
                WhatsApp técnico
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog

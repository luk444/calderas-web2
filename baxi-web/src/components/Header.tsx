import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    // Reset scroll state and close mobile menu on route change
    setIsScrolled(window.scrollY > 20)
    setIsMobileMenuOpen(false)
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios', hasDropdown: true },
    { name: 'Planes', path: '/planes' },
    { name: 'Contacto', path: '/contacto' },
  ]

  const services = [
    { name: 'BAXI Oficial', path: '/servicios/baxi-oficial' },
    { name: 'Instalación', path: '/servicios/instalacion' },
    { name: 'Mantenimiento', path: '/servicios/mantenimiento' },
    { name: 'Reparación', path: '/servicios/multimarca' },
    { name: 'Piso Radiante', path: '/servicios/piso-radiante' },
    { name: 'Radiadores', path: '/servicios/radiadores' },
    { name: 'Urgencias 24/7', path: '/servicios/urgencias' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-navbar' 
        : 'bg-black/30 backdrop-blur-md shadow-lg'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-brand-600' : 'text-white drop-shadow-lg'
            }`}>BaxiService</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`relative font-medium text-base ${
                    location.pathname === item.path
                      ? (isScrolled ? 'text-brand-600' : 'text-white drop-shadow-lg')
                      : (isScrolled ? 'text-neutral-700 hover:text-brand-600' : 'text-white/95 hover:text-white drop-shadow-lg')
                  } transition-colors duration-200`}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-6 grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Calderas</h4>
                        {services.slice(0, 4).map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block py-2 text-sm text-neutral-600 hover:text-brand-600 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation()
                            }}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Sistemas</h4>
                        {services.slice(4).map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block py-2 text-sm text-neutral-600 hover:text-brand-600 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation()
                            }}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+5491128462184"
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                isScrolled 
                  ? 'border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white' 
                  : 'border-2 border-white/30 text-white hover:bg-white hover:text-brand-600 drop-shadow-lg'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Llamar</span>
            </a>
            <a
              href="https://wa.me/5491128462184?text=Hola,%20necesito%20servicio%20técnico%20para%20mi%20caldera"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-500 hover:bg-accent-600 text-white font-medium px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile CTAs */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href="tel:+5491128462184"
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
                isScrolled 
                  ? 'border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white' 
                  : 'border-2 border-white/30 text-white hover:bg-white hover:text-brand-600 drop-shadow-lg'
              }`}
            >
              <Phone className="w-5 h-5" />
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors ${
                isScrolled ? 'text-neutral-700 hover:text-brand-600' : 'text-white hover:text-white/80 drop-shadow-lg'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-200"
          >
            <div className="container-custom py-6">
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 ${
                        location.pathname === item.path
                          ? 'text-brand-600 font-medium'
                          : 'text-neutral-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-1 text-sm text-neutral-600"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  to="/testimonios"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 ${
                    location.pathname === '/testimonios'
                      ? 'text-brand-600 font-medium'
                      : 'text-neutral-700'
                  }`}
                >
                  Testimonios
                </Link>
              </nav>
              
              <div className="mt-6 pt-6 border-t border-neutral-200 space-y-3">
                <a
                  href="tel:+5491128462184"
                  className="btn-outline w-full flex items-center justify-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>Llamar ahora</span>
                </a>
                <a
                  href="https://wa.me/5491128462184?text=Hola,%20necesito%20servicio%20técnico%20para%20mi%20caldera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp 24/7</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

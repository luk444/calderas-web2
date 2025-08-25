import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Marca y claim */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-white">BaxiService</span>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Servicio técnico oficial BAXI y multimarca. Más de 15 años de experiencia 
              en calderas, piso radiante y radiadores en CABA y GBA.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5491128462184"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna 2: Menú rápido */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-neutral-300 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-neutral-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/planes" className="text-neutral-300 hover:text-white transition-colors">
                  Planes
                </Link>
              </li>
              <li>
                <Link to="/cobertura" className="text-neutral-300 hover:text-white transition-colors">
                  Cobertura
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-400" />
                <a
                  href="tel:+5491128462184"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  +54 9 11 2846-2184
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-400" />
                <a
                  href="mailto:baxioficial@gmail.com"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  baxioficial@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-400" />
                <span className="text-neutral-300">
                  CABA y GBA
                </span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-3">Horarios de atención</h5>
              <p className="text-neutral-300 text-sm">
                Lunes a Viernes: 8:00 - 20:00<br />
                Sábados: 8:00 - 18:00<br />
                Urgencias: 24/7
              </p>
            </div>
          </div>

          {/* Columna 4: Sellos y legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/legal/terminos" className="text-neutral-300 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/legal/privacidad" className="text-neutral-300 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/legal/cookies" className="text-neutral-300 hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-6">Certificaciones</h4>
            <div className="space-y-4">
              <div className="bg-brand-600/20 border border-brand-600/30 rounded-lg p-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <p className="text-sm font-medium">Servicio Oficial BAXI</p>
                </div>
              </div>
              
              <div className="bg-success/20 border border-success/30 rounded-lg p-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-success rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <p className="text-sm font-medium">Técnicos certificados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              © {currentYear} BaxiService. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/legal/terminos" className="text-neutral-400 hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
              <Link to="/legal/privacidad" className="text-neutral-400 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/legal/cookies" className="text-neutral-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

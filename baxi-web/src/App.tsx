import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import BaxiOfficial from './pages/Services/BaxiOfficial'
import Maintenance from './pages/Services/Maintenance'
import Installation from './pages/Services/Installation'
import Multibrand from './pages/Services/Multibrand'
import RadiantFloor from './pages/Services/RadiantFloor'
import Radiators from './pages/Services/Radiators'
import Emergencies from './pages/Services/Emergencies'
import Plans from './pages/Plans'
import Coverage from './pages/Coverage'
import Testimonials from './pages/Testimonials'
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import Terms from './pages/Legal/Terms'
import Privacy from './pages/Legal/Privacy'
import Cookies from './pages/Legal/Cookies'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre-nosotros" element={<About />} />
        <Route path="servicios" element={<Services />} />
        <Route path="servicios/baxi-oficial" element={<BaxiOfficial />} />
        <Route path="servicios/mantenimiento" element={<Maintenance />} />
        <Route path="servicios/instalacion" element={<Installation />} />
        <Route path="servicios/multimarca" element={<Multibrand />} />
        <Route path="servicios/piso-radiante" element={<RadiantFloor />} />
        <Route path="servicios/radiadores" element={<Radiators />} />
        <Route path="servicios/urgencias" element={<Emergencies />} />
        <Route path="planes" element={<Plans />} />
        <Route path="cobertura" element={<Coverage />} />
        <Route path="testimonios" element={<Testimonials />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="legal" element={<Legal />} />
        <Route path="legal/terminos" element={<Terms />} />
        <Route path="legal/privacidad" element={<Privacy />} />
        <Route path="legal/cookies" element={<Cookies />} />
      </Route>
    </Routes>
  )
}

export default App

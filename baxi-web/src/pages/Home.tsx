import Hero from '../components/Hero'
import BrandsCarousel from '../components/BrandsCarousel'
import ServicesSection from '../components/ServicesSection'
import BaxiOfficialSection from '../components/BaxiOfficialSection'
import PlansSection from '../components/PlansSection'
import TestimonialsSection from '../components/TestimonialsSection'
import EmergencySection from '../components/EmergencySection'
import FAQSection from '../components/FAQSection'

const Home = () => {
  return (
    <>
      <Hero />
      <BrandsCarousel />
      <ServicesSection />
      <BaxiOfficialSection />
      <PlansSection />
      <TestimonialsSection />
      <EmergencySection />
      <FAQSection />
    </>
  )
}

export default Home

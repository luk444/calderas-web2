import { motion } from 'framer-motion'

const BrandsCarousel = () => {
  const brands = [
    { name: 'BAXI', logo: 'BAXI' },
    { name: 'Peisa', logo: 'PEISA' },
    { name: 'Ariston', logo: 'ARISTON' },
    { name: 'Euterma', logo: 'EUTERMA' },
    { name: 'Caldaia', logo: 'CALDAIA' },
    { name: 'Vaillant', logo: 'VAILLANT' },
    { name: 'Buderus', logo: 'BUDERUS' },
    { name: 'Junkers', logo: 'JUNKERS' },
    { name: 'Wolf', logo: 'WOLF' },
    { name: 'Bosch', logo: 'BOSCH' },
  ]

  // Duplicar las marcas para el efecto infinito
  const duplicatedBrands = [...brands, ...brands]

  return (
    <div className="relative overflow-hidden bg-neutral-100 py-8">
      <div className="container-custom">
        <h3 className="text-center text-neutral-600 mb-6 font-medium">
          Marcas con las que trabajamos
        </h3>
      </div>
      
      <div className="relative">
        <motion.div
          className="flex space-x-16"
          animate={{
            x: [0, -50 * 16], // Mover 50% del ancho total
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center min-w-[120px] h-16 bg-white rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-neutral-700 font-semibold text-sm">
                {brand.logo}
              </span>
            </div>
          ))}
        </motion.div>
        
        {/* Overlay para desvanecimiento en los bordes */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-100 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-100 to-transparent z-10" />
      </div>
    </div>
  )
}

export default BrandsCarousel

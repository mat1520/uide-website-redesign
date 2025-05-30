import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const galleryItems = [
  {
    id: 1,
    title: 'Campus Principal',
    description: 'Vista panorámica del campus principal de la UIDE',
    image: '/src/assets/images/gallery-1.jpg',
    category: 'Campus'
  },
  {
    id: 2,
    title: 'Laboratorio de IA',
    description: 'Nuestro laboratorio de Inteligencia Artificial equipado con la última tecnología',
    image: '/src/assets/images/gallery-2.jpg',
    category: 'Laboratorios'
  },
  {
    id: 3,
    title: 'Biblioteca Digital',
    description: 'Espacio moderno para estudio e investigación',
    image: '/src/assets/images/gallery-3.jpg',
    category: 'Instalaciones'
  },
  {
    id: 4,
    title: 'Auditorio Principal',
    description: 'Auditorio con capacidad para 1000 personas',
    image: '/src/assets/images/gallery-4.jpg',
    category: 'Instalaciones'
  },
  {
    id: 5,
    title: 'Centro Deportivo',
    description: 'Instalaciones deportivas de primer nivel',
    image: '/src/assets/images/gallery-5.jpg',
    category: 'Deportes'
  },
  {
    id: 6,
    title: 'Laboratorio de Medicina',
    description: 'Simuladores de alta fidelidad para prácticas médicas',
    image: '/src/assets/images/gallery-6.jpg',
    category: 'Laboratorios'
  },
  {
    id: 7,
    title: 'Jardines UIDE',
    description: 'Espacios verdes para estudio y recreación',
    image: '/src/assets/images/gallery-7.jpg',
    category: 'Campus'
  },
  {
    id: 8,
    title: 'Centro de Innovación',
    description: 'Espacio para emprendimiento e innovación',
    image: '/src/assets/images/gallery-8.jpg',
    category: 'Innovación'
  }
]

const categories = [
  'Todos',
  'Campus',
  'Laboratorios',
  'Instalaciones',
  'Deportes',
  'Innovación'
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems = selectedCategory === 'Todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-uide-primary overflow-hidden">
        <div className="absolute inset-0 bg-uide-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Galería UIDE
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Descubre nuestras instalaciones y espacios a través de imágenes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-uide-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-uide-primary hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-uide-lg cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-uide-secondary transition-colors duration-300"
                onClick={() => setSelectedImage(null)}
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-white/90">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-20 bg-uide-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Quieres conocer más?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Agenda una visita guiada y conoce nuestras instalaciones en persona
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-uide-primary bg-uide-secondary hover:bg-uide-gold-light transition-colors duration-300"
            >
              Solicitar Visita
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
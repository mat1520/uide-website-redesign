import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CalendarIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline'

const news = [
  {
    id: 1,
    title: 'UIDE y ASU lanzan nuevo programa de doble titulación en IA',
    excerpt: 'La Universidad Internacional del Ecuador y Arizona State University presentan un innovador programa de doble titulación en Inteligencia Artificial y Machine Learning.',
    image: '/src/assets/images/news-1.jpg',
    date: '15 Marzo 2025',
    author: 'Dr. María González',
    category: 'Innovación',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'Estudiantes de Medicina ganan competencia internacional de simulación',
    excerpt: 'El equipo de estudiantes de Medicina de la UIDE obtuvo el primer lugar en la competencia internacional de simulación médica en Boston.',
    image: '/src/assets/images/news-2.jpg',
    date: '10 Marzo 2025',
    author: 'Dr. Carlos Rodríguez',
    category: 'Logros',
    readTime: '4 min'
  },
  {
    id: 3,
    title: 'Nuevo laboratorio de Industria 4.0 inaugurado en campus UIDE',
    excerpt: 'La UIDE inaugura su nuevo laboratorio de Industria 4.0, equipado con tecnología de punta para la formación de futuros ingenieros.',
    image: '/src/assets/images/news-3.jpg',
    date: '5 Marzo 2025',
    author: 'Ing. Juan Pérez',
    category: 'Infraestructura',
    readTime: '3 min'
  },
  {
    id: 4,
    title: 'Convenio con Microsoft para certificación en Azure',
    excerpt: 'La UIDE firma convenio con Microsoft para ofrecer certificaciones oficiales en Azure a sus estudiantes de Ingeniería en Sistemas.',
    image: '/src/assets/images/news-4.jpg',
    date: '1 Marzo 2025',
    author: 'Lic. Ana Martínez',
    category: 'Alianzas',
    readTime: '4 min'
  }
]

const categories = [
  'Todas',
  'Innovación',
  'Logros',
  'Infraestructura',
  'Alianzas',
  'Eventos',
  'Investigación'
]

export default function News() {
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
              Noticias y Actualidad
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Mantente informado sobre los últimos acontecimientos y logros de nuestra comunidad universitaria
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
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-uide-primary hover:text-white transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-uide-lg overflow-hidden hover:shadow-uide-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-uide-primary text-white">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      {item.author}
                    </div>
                    <div className="flex items-center">
                      <TagIcon className="h-4 w-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-uide-primary mb-3">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {item.excerpt}
                  </p>

                  <Link
                    to={`/noticias/${item.id}`}
                    className="inline-flex items-center text-uide-primary hover:text-uide-blue-light font-medium"
                  >
                    Leer más
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-uide-primary hover:bg-uide-blue-light transition-colors duration-300">
              Cargar más noticias
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
              Suscríbete a nuestro boletín
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Recibe las últimas noticias y actualizaciones directamente en tu correo
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-uide-secondary"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-uide-secondary text-uide-primary font-bold rounded-full hover:bg-uide-gold-light transition-colors duration-300"
                >
                  Suscribirse
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CalendarIcon, MapPinIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const events = [
  {
    id: 1,
    title: 'Semana de la Innovación 2025',
    description: 'Una semana dedicada a la innovación y el emprendimiento, con talleres, conferencias y networking.',
    date: '20-24 Marzo 2025',
    time: '09:00 - 18:00',
    location: 'Auditorio Principal UIDE',
    image: '/src/assets/images/event-1.jpg',
    category: 'Conferencia',
    attendees: 500,
    registrationDeadline: '15 Marzo 2025'
  },
  {
    id: 2,
    title: 'Hackathon UIDE-ASU',
    description: 'Competencia de programación de 48 horas para desarrollar soluciones innovadoras.',
    date: '25-27 Marzo 2025',
    time: '24 horas',
    location: 'Centro de Innovación UIDE',
    image: '/src/assets/images/event-2.jpg',
    category: 'Competencia',
    attendees: 200,
    registrationDeadline: '20 Marzo 2025'
  },
  {
    id: 3,
    title: 'Feria de Carreras 2025',
    description: 'Encuentro con empresas líderes y oportunidades de pasantías y empleo.',
    date: '30 Marzo 2025',
    time: '10:00 - 16:00',
    location: 'Campus UIDE',
    image: '/src/assets/images/event-3.jpg',
    category: 'Feria',
    attendees: 1000,
    registrationDeadline: '25 Marzo 2025'
  },
  {
    id: 4,
    title: 'Simposio Internacional de Medicina',
    description: 'Conferencias y talleres sobre los últimos avances en medicina y salud.',
    date: '5-7 Abril 2025',
    time: '08:00 - 17:00',
    location: 'Auditorio de Ciencias de la Salud',
    image: '/src/assets/images/event-4.jpg',
    category: 'Simposio',
    attendees: 300,
    registrationDeadline: '1 Abril 2025'
  }
]

const categories = [
  'Todos',
  'Conferencia',
  'Competencia',
  'Feria',
  'Simposio',
  'Taller',
  'Cultural'
]

export default function Events() {
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
              Eventos y Actividades
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Descubre los próximos eventos y actividades en nuestra universidad
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

      {/* Events Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-uide-lg overflow-hidden hover:shadow-uide-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-uide-primary text-white">
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-uide-primary mb-3">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {event.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <CalendarIcon className="h-5 w-5 mr-2 text-uide-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <ClockIcon className="h-5 w-5 mr-2 text-uide-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPinIcon className="h-5 w-5 mr-2 text-uide-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <UserGroupIcon className="h-5 w-5 mr-2 text-uide-primary" />
                      {event.attendees} participantes
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Registro hasta: {event.registrationDeadline}
                    </span>
                    <Link
                      to={`/eventos/${event.id}`}
                      className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-uide-primary hover:bg-uide-blue-light transition-colors duration-300"
                    >
                      Registrarse
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Calendar View Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-uide-primary hover:bg-uide-blue-light transition-colors duration-300">
              Ver Calendario de Eventos
            </button>
          </div>
        </div>
      </section>

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
              ¿Quieres organizar un evento?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contáctanos para coordinar tu evento en nuestras instalaciones
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-uide-primary bg-uide-secondary hover:bg-uide-gold-light transition-colors duration-300"
            >
              Solicitar Información
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
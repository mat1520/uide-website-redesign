import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline'

const contactInfo = [
  {
    icon: MapPinIcon,
    title: 'Dirección',
    content: 'Av. Simón Bolívar S/N y Av. Eloy Alfaro, Quito, Ecuador',
    link: 'https://maps.google.com'
  },
  {
    icon: PhoneIcon,
    title: 'Teléfono',
    content: '+593 2 398 9000',
    link: 'tel:+59323989000'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    content: 'info@uide.edu.ec',
    link: 'mailto:info@uide.edu.ec'
  },
  {
    icon: ClockIcon,
    title: 'Horario de Atención',
    content: 'Lunes a Viernes: 8:00 - 17:00',
    link: null
  }
]

const departments = [
  {
    name: 'Admisiones',
    email: 'admisiones@uide.edu.ec',
    phone: '+593 2 398 9001'
  },
  {
    name: 'Financiero',
    email: 'financiero@uide.edu.ec',
    phone: '+593 2 398 9002'
  },
  {
    name: 'Internacional',
    email: 'internacional@uide.edu.ec',
    phone: '+593 2 398 9003'
  },
  {
    name: 'Bienestar Estudiantil',
    email: 'bienestar@uide.edu.ec',
    phone: '+593 2 398 9004'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

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
              Contáctanos
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-uide-lg p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-uide-primary/10 text-uide-primary mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-uide-primary mb-2">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-uide-primary transition-colors duration-300"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Departments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-uide-lg p-8"
            >
              <h2 className="text-2xl font-bold text-uide-primary mb-6">
                Envíanos un mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-uide-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-uide-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-uide-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-uide-primary focus:border-transparent"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="admisiones">Admisiones</option>
                      <option value="financiero">Financiero</option>
                      <option value="internacional">Internacional</option>
                      <option value="bienestar">Bienestar Estudiantil</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-uide-primary focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-uide-primary text-white font-bold rounded-lg hover:bg-uide-blue-light transition-colors duration-300"
                >
                  Enviar mensaje
                </button>
              </form>
            </motion.div>

            {/* Departments */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-uide-lg p-8">
                <h2 className="text-2xl font-bold text-uide-primary mb-6">
                  Departamentos
                </h2>
                <div className="space-y-6">
                  {departments.map((dept) => (
                    <div key={dept.name} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                      <h3 className="text-lg font-semibold text-uide-primary mb-2">
                        {dept.name}
                      </h3>
                      <div className="space-y-2">
                        <a
                          href={`mailto:${dept.email}`}
                          className="flex items-center text-gray-600 hover:text-uide-primary transition-colors duration-300"
                        >
                          <EnvelopeIcon className="h-5 w-5 mr-2" />
                          {dept.email}
                        </a>
                        <a
                          href={`tel:${dept.phone}`}
                          className="flex items-center text-gray-600 hover:text-uide-primary transition-colors duration-300"
                        >
                          <PhoneIcon className="h-5 w-5 mr-2" />
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-uide-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7847!2d-78.4877!3d-0.1807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTAnNTEuMiJTIDc4wrAyOScxNS4zIlc!5e0!3m2!1ses!2sec!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 
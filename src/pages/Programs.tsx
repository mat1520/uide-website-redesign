import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AcademicCapIcon, GlobeAltIcon, RocketLaunchIcon, BeakerIcon, ChartBarIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

const programs = [
  {
    category: 'Ingenierías',
    icon: RocketLaunchIcon,
    programs: [
      {
        name: 'Ingeniería en Sistemas Computacionales',
        description: 'Formación en desarrollo de software, inteligencia artificial y ciberseguridad.',
        duration: '4 años',
        modality: 'Presencial',
        highlights: ['Certificación en IA', 'Prácticas en empresas tecnológicas', 'Doble titulación con ASU']
      },
      {
        name: 'Ingeniería Industrial',
        description: 'Optimización de procesos y gestión de la producción con enfoque en Industria 4.0.',
        duration: '4 años',
        modality: 'Presencial',
        highlights: ['Certificación en Lean Six Sigma', 'Laboratorio de Industria 4.0', 'Internacionalización']
      }
    ]
  },
  {
    category: 'Negocios',
    icon: ChartBarIcon,
    programs: [
      {
        name: 'Administración de Empresas',
        description: 'Formación en gestión empresarial con enfoque en innovación y sostenibilidad.',
        duration: '4 años',
        modality: 'Presencial/Híbrida',
        highlights: ['Certificación en Project Management', 'Consultoría empresarial', 'Networking internacional']
      },
      {
        name: 'Finanzas Internacionales',
        description: 'Especialización en mercados financieros globales y fintech.',
        duration: '4 años',
        modality: 'Presencial',
        highlights: ['Certificación en Fintech', 'Simulador de trading', 'Convenios con bancos']
      }
    ]
  },
  {
    category: 'Ciencias de la Salud',
    icon: BeakerIcon,
    programs: [
      {
        name: 'Medicina',
        description: 'Formación médica de vanguardia con tecnología de simulación avanzada.',
        duration: '6 años',
        modality: 'Presencial',
        highlights: ['Simulador de alta fidelidad', 'Hospital simulado', 'Internacionalización']
      },
      {
        name: 'Odontología',
        description: 'Formación odontológica con tecnología digital y prácticas clínicas avanzadas.',
        duration: '5 años',
        modality: 'Presencial',
        highlights: ['Clínica digital', 'Certificación en ortodoncia', 'Prácticas internacionales']
      }
    ]
  }
]

export default function Programs() {
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
              Programas Académicos
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Descubre nuestra oferta académica diseñada para formar líderes del futuro
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {programs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-uide-lg p-8"
              >
                <div className="flex items-center gap-4 mb-8">
                  <category.icon className="h-12 w-12 text-uide-primary" />
                  <h2 className="text-3xl font-bold text-uide-primary">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.programs.map((program, programIndex) => (
                    <motion.div
                      key={program.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: programIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-uide transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-uide-primary mb-3">{program.name}</h3>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      
                      <div className="flex gap-4 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-uide-primary/10 text-uide-primary">
                          {program.duration}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-uide-secondary/10 text-uide-primary">
                          {program.modality}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {program.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-center text-sm text-gray-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-uide-primary mr-2"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contacto"
                        className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-uide-primary hover:bg-uide-blue-light transition-colors duration-300"
                      >
                        Solicitar Información
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-uide-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Listo para comenzar tu futuro?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Únete a nuestra comunidad de estudiantes y forma parte de la universidad más innovadora de Ecuador
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-uide-primary bg-uide-secondary hover:bg-uide-gold-light transition-colors duration-300"
            >
              Inicia tu proceso de admisión
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
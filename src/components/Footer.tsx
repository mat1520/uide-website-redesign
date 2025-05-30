import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useT } from '../i18n'
import { useState } from 'react'
import { 
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  PhotoIcon,
  UserGroupIcon,
  VideoCameraIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

const socialLinks = [
  { name: 'Facebook', icon: ChatBubbleLeftRightIcon, href: 'https://facebook.com/uide', color: '#1877f3' },
  { name: 'Twitter', icon: GlobeAltIcon, href: 'https://twitter.com/uide', color: '#1da1f2' },
  { name: 'Instagram', icon: PhotoIcon, href: 'https://instagram.com/uide', color: '#e1306c' },
  { name: 'LinkedIn', icon: UserGroupIcon, href: 'https://linkedin.com/company/uide', color: '#0077b5' },
  { name: 'YouTube', icon: VideoCameraIcon, href: 'https://youtube.com/uide', color: '#ff0000' }
]

const quickLinks = [
  { name: 'Programas', href: '/programas' },
  { name: 'Admisión', href: '/admision' },
  { name: 'Internacional', href: '/internacional' },
  { name: 'Investigación', href: '/investigacion' },
  { name: 'Campus', href: '/campus' }
]

const legalLinks = [
  { name: 'Política de Privacidad', href: '/privacidad' },
  { name: 'Términos y Condiciones', href: '/terminos' },
  { name: 'Mapa del Sitio', href: '/mapa-sitio' }
]

const partners = [
  { name: 'ASU', img: '/src/assets/images/footer-innovation.jpg', href: 'https://asu.edu' },
  { name: 'Microsoft', img: '/src/assets/images/footer-campus.jpg', href: 'https://microsoft.com' },
  { name: 'QS Stars', img: '/src/assets/images/footer-students.jpg', href: 'https://www.topuniversities.com/qs-stars' }
]

const gallery = [
  { alt: 'Campus UIDE', src: '/src/assets/images/footer-campus.jpg' },
  { alt: 'Estudiantes UIDE', src: '/src/assets/images/footer-students.jpg' },
  { alt: 'Innovación UIDE', src: '/src/assets/images/footer-innovation.jpg' }
]

const footerLinks = {
  programas: [
    { name: 'Ingenierías', href: '/programas#ingenierias' },
    { name: 'Negocios', href: '/programas#negocios' },
    { name: 'Ciencias de la Salud', href: '/programas#salud' },
    { name: 'Doble Titulación', href: '/programas#doble-titulacion' }
  ],
  admision: [
    { name: 'Proceso de Admisión', href: '/admision' },
    { name: 'Becas', href: '/admision#becas' },
    { name: 'Financiamiento', href: '/admision#financiamiento' }
  ],
  recursos: [
    { name: 'Campus Virtual', href: '/recursos#campus-virtual' },
    { name: 'Biblioteca', href: '/recursos#biblioteca' },
    { name: 'Laboratorios', href: '/recursos#laboratorios' }
  ],
  contacto: [
    { name: 'Contáctanos', href: '/contacto' },
    { name: 'Mapa del Sitio', href: '/mapa-sitio' },
    { name: 'Política de Privacidad', href: '/privacidad' }
  ]
}

const languages = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' }
]

export default function Footer() {
  const t = useT()
  const [year] = useState(() => new Date().getFullYear())
  
  return (
    <footer className="bg-uide-primary text-white pt-16 pb-8 relative" aria-label="Pie de página UIDE">
      {/* Wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="space-y-6">
            <img
              src="/src/assets/images/LOGO-2.png"
              alt="UIDE Logo"
              className="h-20 w-auto"
              loading="lazy"
            />
            <p className="text-white/80 text-sm">
              {t.home.heroSubtitle}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-white/80" />
                <span className="text-white/80">Av. Simón Bolívar S/N y Av. Eloy Alfaro, Quito</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-white/80" />
                <a href="tel:+59323989000" className="text-white/80 hover:text-white transition-colors duration-200">
                  +593 2 398 9000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-white/80" />
                <a href="mailto:info@uide.edu.ec" className="text-white/80 hover:text-white transition-colors duration-200">
                  info@uide.edu.ec
                </a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t.footer.legal}</h3>
            <ul className="space-y-3">
              {legalLinks.map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {year} Universidad Internacional del Ecuador. {t.footer.allRights}
            </p>
            <div className="flex space-x-6">
              <img 
                src="/src/assets/images/accreditation-1.png" 
                alt="Acreditación 1" 
                className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
                loading="lazy"
              />
              <img 
                src="/src/assets/images/accreditation-2.png" 
                alt="Acreditación 2" 
                className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
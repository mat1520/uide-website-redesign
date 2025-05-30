import { Link } from 'react-router-dom'
import { useT } from '../i18n'

export default function SiteMap() {
  const t = useT()
  
  const sections = [
    {
      title: 'Académico',
      links: [
        { name: 'Programas', href: '/programas' },
        { name: 'Admisión', href: '/admision' },
        { name: 'Internacional', href: '/internacional' },
        { name: 'Investigación', href: '/investigacion' }
      ]
    },
    {
      title: 'Estudiantes',
      links: [
        { name: 'Campus', href: '/campus' },
        { name: 'Biblioteca', href: '/biblioteca' },
        { name: 'Deportes', href: '/deportes' },
        { name: 'Bienestar', href: '/bienestar' }
      ]
    },
    {
      title: 'Comunidad',
      links: [
        { name: 'Noticias', href: '/noticias' },
        { name: 'Eventos', href: '/eventos' },
        { name: 'Galería', href: '/galeria' },
        { name: 'Contacto', href: '/contacto' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Política de Privacidad', href: '/privacidad' },
        { name: 'Términos y Condiciones', href: '/terminos' },
        { name: 'Acreditaciones', href: '/acreditaciones' }
      ]
    }
  ]
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-uide-primary mb-8">
          {t.footer.siteMap}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map(section => (
            <div key={section.title} className="bg-white rounded-xl shadow-uide p-6">
              <h2 className="text-xl font-bold text-uide-primary mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-gray-600 hover:text-uide-secondary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-uide p-6">
          <h2 className="text-xl font-bold text-uide-primary mb-4">
            Contacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Dirección</h3>
              <p className="text-gray-600">
                Av. Simón Bolívar S/N y Av. Eloy Alfaro
                <br />
                Quito, Ecuador
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Teléfono</h3>
              <p className="text-gray-600">
                <a href="tel:+59323989000" className="hover:text-uide-secondary">
                  +593 2 398 9000
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Correo</h3>
              <p className="text-gray-600">
                <a href="mailto:info@uide.edu.ec" className="hover:text-uide-secondary">
                  info@uide.edu.ec
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
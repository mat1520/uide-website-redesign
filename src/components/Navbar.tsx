import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useT, useLanguage } from '../contexts/LanguageContext'
import { 
  Bars3Icon, 
  XMarkIcon,
  GlobeAltIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

export default function Navbar() {
  const t = useT()
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú de idioma al hacer click fuera
  useEffect(() => {
    if (!langOpen) return
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [langOpen])

  const navLinks = [
    { name: t.navbar.home, href: '/' },
    { name: t.navbar.programs, href: '/programas' },
    { name: t.navbar.news, href: '/noticias' },
    { name: t.navbar.events, href: '/eventos' },
    { name: t.navbar.gallery, href: '/galeria' },
    { name: t.navbar.contact, href: '/contacto' }
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/src/assets/images/LOGO-2.png"
              alt="UIDE Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? 'text-uide-primary'
                    : isScrolled
                    ? 'text-gray-700 hover:text-uide-primary'
                    : 'text-white hover:text-uide-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Language Selector & Admission Button */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative" ref={langRef}>
              <button
                className={`flex items-center space-x-1 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => setLangOpen(v => !v)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label={t.navbar.selectLanguage}
              >
                <GlobeAltIcon className="h-5 w-5" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-1 z-50"
                  >
                    <button
                      onClick={() => { setLanguage('es'); setLangOpen(false) }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {t.navbar.spanish}
                    </button>
                    <button
                      onClick={() => { setLanguage('en'); setLangOpen(false) }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {t.navbar.english}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              to="/admision"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-bold bg-uide-secondary text-uide-primary shadow-lg hover:bg-white hover:text-uide-primary transition-all duration-300"
            >
              {t.navbar.admission}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.href
                      ? 'text-uide-primary bg-gray-50'
                      : 'text-gray-700 hover:text-uide-primary hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setLanguage('es')}
                    className={`text-sm font-medium ${
                      language === 'es' ? 'text-uide-primary' : 'text-gray-700'
                    }`}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`text-sm font-medium ${
                      language === 'en' ? 'text-uide-primary' : 'text-gray-700'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
              <Link
                to="/admision"
                className="block px-3 py-2 mt-2 text-center rounded-md text-base font-bold bg-uide-secondary text-uide-primary hover:bg-white hover:text-uide-primary transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {t.navbar.admission}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 
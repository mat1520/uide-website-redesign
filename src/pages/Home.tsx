import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDownIcon, AcademicCapIcon, GlobeAltIcon, UserGroupIcon, StarIcon, ArrowRightIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { useT } from '../i18n'
import { useState, useRef } from 'react'

const images = {
  hero: '/src/assets/images/hero-campus.jpg',
  students: '/src/assets/images/hero-students.jpg',
  library: '/src/assets/images/hero-library.jpg',
  lab: '/src/assets/images/hero-lab.jpg',
  asu: '/src/assets/images/asu-logo.png',
  iscn: '/src/assets/images/iscn-logo.png',
  the: '/src/assets/images/the-logo.png',
  sports: '/src/assets/images/hero-students.jpg',
  club: '/src/assets/images/hero-campus.jpg',
  residence: '/src/assets/images/hero-library.jpg',
  event: '/src/assets/images/hero-lab.jpg',
}

const stats = [
  { icon: AcademicCapIcon, value: '7,000+', label: 'Estudiantes', en: 'Students' },
  { icon: UserGroupIcon, value: '25+', label: 'Programas', en: 'Programs' },
  { icon: GlobeAltIcon, value: '95+', label: 'Destinos internacionales', en: 'International Destinations' },
  { icon: StarIcon, value: 'Top 10', label: 'Ecuador THE 2023', en: 'Ecuador THE 2023' },
]

const accreditations = [
  { name: 'ASU', img: images.asu, url: 'https://asu.edu' },
  { name: 'ISCN', img: images.iscn, url: 'https://www.international-sustainable-campus-network.org/' },
  { name: 'THE', img: images.the, url: 'https://www.timeshighereducation.com/' },
]

const academicOffers = [
  { title: 'Ingeniería Automotriz', desc: 'Innovación en movilidad y tecnología automotriz.', img: images.lab, link: '/programas#ingenieria-automotriz' },
  { title: 'Administración de Empresas', desc: 'Liderazgo, gestión y emprendimiento global.', img: images.library, link: '/programas#administracion' },
  { title: 'Relaciones Internacionales', desc: 'Diplomacia, política y cooperación global.', img: images.students, link: '/programas#relaciones-internacionales' },
  { title: 'Gastronomía', desc: 'Creatividad culinaria y gestión gastronómica.', img: images.hero, link: '/programas#gastronomia' },
  { title: 'Psicología', desc: 'Ciencia y bienestar humano.', img: images.students, link: '/programas#psicologia' },
  { title: 'Ingeniería Industrial', desc: 'Optimización de procesos y sistemas.', img: images.lab, link: '/programas#industrial' },
]

const international = [
  { title: 'Doble titulación con ASU', desc: 'Estudia en Ecuador y EE.UU. con nuestro partner #1 en innovación.', icon: GlobeAltIcon },
  { title: '95+ destinos de intercambio', desc: 'Vive experiencias globales en 4 continentes.', icon: AcademicCapIcon },
  { title: 'Cursos en inglés y español', desc: 'Programas bilingües y certificados internacionales.', icon: StarIcon },
]

const campusLife = [
  { title: 'Deportes y bienestar', desc: 'Básquet, BMX, equitación, golf, paintball, fútbol, vóley y más.', img: images.sports },
  { title: 'Clubes y voluntariado', desc: 'Clubes estudiantiles, actividades culturales y voluntariado.', img: images.club },
  { title: 'Residencias y Buddy Program', desc: 'Vive en campus o con familias anfitrionas. Apoyo para internacionales.', img: images.residence },
]

const testimonials = [
  { name: 'Ana Torres', text: 'La UIDE me permitió estudiar en Arizona State University y vivir una experiencia internacional única.', program: 'Relaciones Internacionales', img: images.students },
  { name: 'Carlos Pérez', text: 'Gracias a la UIDE conseguí prácticas en empresas globales y hoy trabajo en el extranjero.', program: 'Ingeniería Industrial', img: images.lab },
]

const news = [
  { title: 'UIDE participa en el I Summit de Cooperativas', date: 'Mayo 2025', img: images.hero, link: '/noticias/1' },
  { title: 'Ganadores del Global Competition 2025 obtuvieron beca al Summer Camp en ASU', date: 'Abril 2025', img: images.lab, link: '/noticias/2' },
  { title: 'UIDExpert participará en Foro Internacional sobre Desinformación', date: 'Marzo 2025', img: images.library, link: '/noticias/3' },
]

const gallery = [
  { src: images.hero, alt: 'Campus Quito' },
  { src: images.students, alt: 'Estudiantes en acción' },
  { src: images.lab, alt: 'Laboratorio de innovación' },
  { src: images.library, alt: 'Biblioteca UIDE' },
]

const chatbotOptions = [
  { key: 'admission', label: 'Información de admisión' },
  { key: 'scholarships', label: 'Becas y financiamiento' },
  { key: 'exchange', label: 'Intercambios y doble titulación' },
  { key: 'campus', label: 'Vida universitaria' },
  { key: 'advisor', label: 'Hablar con un asesor' },
]

const chatbotResponses = {
  admission: 'Para iniciar tu proceso de admisión en la UIDE, visita la sección de Admisiones o comunícate al +593 95 970 0248 o admisiones@uide.edu.ec. Puedes aplicar a pregrado, posgrado y programas en línea.',
  scholarships: 'La UIDE ofrece becas de excelencia, deportivas y de apoyo económico. Consulta los requisitos y postula en la sección de Becas o pregunta a un asesor.',
  exchange: 'Contamos con más de 95 destinos internacionales, doble titulación con ASU y programas en inglés y español. Consulta Internacionalización para más detalles.',
  campus: 'La vida universitaria incluye deportes, clubes, voluntariado, residencias y el Buddy Program para internacionales. ¡Vive la experiencia UIDE!',
  advisor: 'Un asesor se pondrá en contacto contigo pronto. También puedes escribir a admisiones@uide.edu.ec o WhatsApp +593 95 970 0248.',
}

export default function Home() {
  const t = useT()
  const [showChat, setShowChat] = useState(false)
  const [chat, setChat] = useState([
    { from: 'bot', text: '¡Hola! Soy el asistente UIDE. ¿Sobre qué tema quieres información?' }
  ])
  const [input, setInput] = useState('')
  const chatEndRef = useRef<HTMLDivElement>(null)

  function handleOption(key: string) {
    const userMsg = chatbotOptions.find(opt => opt.key === key)?.label || ''
    setChat(prev => [...prev, { from: 'user', text: userMsg }])
    setTimeout(() => {
      setChat(prev => [...prev, { from: 'bot', text: chatbotResponses[key as keyof typeof chatbotResponses] }])
    }, 500)
  }

  function handleSend(e?: React.FormEvent) {
    if (e) e.preventDefault()
    const msg = input.trim()
    if (!msg) return
    setChat(prev => [...prev, { from: 'user', text: msg }])
    setInput('')
    setTimeout(() => {
      // Buscar palabra clave
      const lower = msg.toLowerCase()
      if (lower.includes('admisión') || lower.includes('admission')) {
        setChat(prev => [...prev, { from: 'bot', text: chatbotResponses.admission }])
      } else if (lower.includes('beca') || lower.includes('scholar')) {
        setChat(prev => [...prev, { from: 'bot', text: chatbotResponses.scholarships }])
      } else if (lower.includes('intercambio') || lower.includes('exchange') || lower.includes('doble')) {
        setChat(prev => [...prev, { from: 'bot', text: chatbotResponses.exchange }])
      } else if (lower.includes('vida') || lower.includes('campus') || lower.includes('club')) {
        setChat(prev => [...prev, { from: 'bot', text: chatbotResponses.campus }])
      } else if (lower.includes('asesor') || lower.includes('contacto') || lower.includes('help')) {
        setChat(prev => [...prev, { from: 'bot', text: chatbotResponses.advisor }])
      } else {
        setChat(prev => [...prev, { from: 'bot', text: '¿Puedes especificar si tu consulta es sobre admisión, becas, intercambios, vida universitaria o hablar con un asesor?' }])
      }
    }, 600)
  }

  // Scroll automático al final del chat
  React.useEffect(() => {
    if (showChat && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chat, showChat])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <img src={images.hero} alt="Campus UIDE" className="absolute inset-0 w-full h-full object-cover object-center opacity-70" />
        <div className="absolute inset-0 bg-uide-primary/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10 w-full"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg animate-fade-in">
            Universidad Internacional del Ecuador
          </h1>
          <p className="text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in">
            Reinventemos el futuro: innovación, excelencia y visión global para transformar tu vida profesional.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-lg font-bold bg-uide-secondary text-uide-primary shadow-lg hover:bg-white hover:text-uide-primary transition-all duration-300"
            >
              Habla con un asesor
              <ChatBubbleLeftRightIcon className="h-6 w-6 ml-2" />
            </Link>
            <Link
              to="/programas"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-lg font-bold bg-white text-uide-primary shadow-lg hover:bg-uide-secondary hover:text-uide-primary transition-all duration-300"
            >
              Explora tu futuro
              <ChevronDownIcon className="h-6 w-6 ml-2" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center animate-fade-in"
            >
              <stat.icon className="h-10 w-10 text-uide-primary mb-2" />
              <span className="text-3xl font-extrabold text-uide-primary">{stat.value}</span>
              <span className="text-gray-700 text-lg font-medium mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Acreditaciones y Alianzas */}
      <section className="py-8 bg-gradient-to-r from-uide-primary/5 to-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8">
          {accreditations.map(acc => (
            <a key={acc.name} href={acc.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
              <img src={acc.img} alt={acc.name} className="h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300" />
              <span className="text-uide-primary font-bold text-lg hidden md:inline">{acc.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Oferta Académica */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-uide-primary mb-4 animate-fade-in">Oferta Académica</h2>
            <p className="text-xl text-gray-600 animate-fade-in">Programas de pregrado y posgrado con visión global.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {academicOffers.map((offer, i) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-uide-lg p-0 overflow-hidden hover:shadow-uide-xl transition-all duration-300 animate-fade-in flex flex-col"
              >
                <img src={offer.img} alt={offer.title} className="h-48 w-full object-cover" loading="lazy" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-2xl font-bold text-uide-primary mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.desc}</p>
                  <Link to={offer.link} className="mt-auto inline-block px-6 py-2 rounded-full bg-uide-primary text-white font-semibold hover:bg-uide-secondary hover:text-uide-primary transition-all duration-200">Ver más</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internacionalización */}
      <section className="py-20 bg-gradient-to-br from-uide-primary/5 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-uide-primary mb-4 animate-fade-in">Internacionalización</h2>
            <p className="text-xl text-gray-600 animate-fade-in">Vive experiencias globales: doble titulación, intercambios, idiomas y más.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {international.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-uide-lg p-8 flex flex-col items-center animate-fade-in"
              >
                <item.icon className="h-10 w-10 text-uide-primary mb-4" />
                <h3 className="text-xl font-bold text-uide-primary mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vida Universitaria */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-uide-primary mb-4 animate-fade-in">Vida Universitaria</h2>
            <p className="text-xl text-gray-600 animate-fade-in">Deportes, clubes, residencias y experiencias únicas en nuestros campus.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {campusLife.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-uide-lg p-0 overflow-hidden hover:shadow-uide-xl transition-all duration-300 animate-fade-in flex flex-col"
              >
                <img src={item.img} alt={item.title} className="h-48 w-full object-cover" loading="lazy" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-uide-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gradient-to-br from-uide-primary/5 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-uide-primary mb-4 animate-fade-in">Testimonios de Éxito</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testi, i) => (
              <motion.div
                key={testi.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-uide-lg p-8 animate-fade-in flex flex-col items-center"
              >
                <img src={testi.img} alt={testi.name} className="h-20 w-20 object-cover rounded-full mb-4 border-4 border-uide-primary shadow" loading="lazy" />
                <p className="text-lg text-gray-700 mb-4 text-center">“{testi.text}”</p>
                <div className="font-bold text-uide-primary">{testi.name}</div>
                <div className="text-sm text-gray-500">{testi.program}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Noticias y eventos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {news.map((n, i) => (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col bg-white rounded-xl shadow-uide p-4 hover:shadow-uide-lg transition-all duration-300 animate-fade-in"
              >
                <img src={n.img} alt={n.title} className="h-32 w-full object-cover rounded-lg mb-4" loading="lazy" />
                <h3 className="font-bold text-uide-primary text-lg mb-1">{n.title}</h3>
                <div className="text-xs text-gray-500 mb-2">{n.date}</div>
                <Link to={n.link} className="text-uide-secondary font-semibold hover:underline flex items-center gap-1 mt-auto">Ver más <ArrowRightIcon className="h-4 w-4" /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería visual */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-uide-primary mb-4 animate-fade-in">Galería UIDE</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gallery.map(img => (
              <motion.div
                key={img.src}
                className="relative animate-fade-in"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-40 w-full object-cover rounded-xl shadow-uide-lg hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute bottom-2 left-2 bg-uide-primary/80 text-white text-xs px-2 py-1 rounded">
                  {img.alt}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot flotante */}
      <section className="relative">
        {/* Botón flotante de chatbot */}
        <button
          className="fixed bottom-8 right-8 z-50 bg-uide-secondary text-uide-primary rounded-full shadow-lg p-4 flex items-center gap-2 hover:bg-white transition-all duration-300"
          onClick={() => setShowChat(v => !v)}
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
          <span className="font-bold hidden md:inline">Chat UIDE</span>
        </button>
        {/* Chatbot simulado */}
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-24 right-8 z-50 w-80 bg-white text-uide-primary rounded-xl shadow-2xl p-6 flex flex-col gap-4"
          >
            <div className="font-bold text-lg flex items-center gap-2 mb-2">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-uide-secondary" /> Chat UIDE
            </div>
            <div className="flex flex-col gap-2 max-h-60 overflow-y-auto mb-2">
              {chat.map((msg, i) => (
                <div key={i} className={`rounded-xl px-3 py-2 text-sm ${msg.from === 'bot' ? 'bg-uide-primary/10 self-start' : 'bg-uide-secondary/80 text-uide-primary self-end'}`}>{msg.text}</div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form className="flex gap-2" onSubmit={handleSend}>
              <input
                type="text"
                className="flex-1 rounded-full border border-uide-primary px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-uide-secondary"
                placeholder="Escribe tu mensaje..."
                value={input}
                onChange={e => setInput(e.target.value)}
                autoFocus
              />
              <button type="submit" className="bg-uide-primary text-white rounded-full px-4 py-2 font-bold hover:bg-uide-secondary transition-all">Enviar</button>
            </form>
            <div className="flex flex-col gap-2 mt-2">
              {chatbotOptions.map(opt => (
                <button
                  key={opt.key}
                  className="bg-uide-primary text-white rounded-full px-4 py-2 text-left hover:bg-uide-secondary transition-all"
                  onClick={() => handleOption(opt.key)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <button className="mt-2 text-xs text-gray-400 hover:text-uide-secondary" onClick={() => setShowChat(false)}>Cerrar chat</button>
          </motion.div>
        )}
      </section>
    </div>
  )
} 
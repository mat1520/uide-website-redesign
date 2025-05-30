import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Programs from './pages/Programs'
import News from './pages/News'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import SiteMap from './pages/SiteMap'

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/programas" element={<Programs />} />
                <Route path="/noticias" element={<News />} />
                <Route path="/eventos" element={<Events />} />
                <Route path="/galeria" element={<Gallery />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/privacidad" element={<Privacy />} />
                <Route path="/terminos" element={<Terms />} />
                <Route path="/mapa-sitio" element={<SiteMap />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
} 
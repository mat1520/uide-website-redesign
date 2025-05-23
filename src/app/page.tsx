import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/campus.jpg"
            alt="Campus UIDE"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Universidad Internacional del Ecuador
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Formando líderes para el futuro
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/admisiones"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Admisiones
            </Link>
            <Link
              href="/carreras"
              className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Explora Carreras
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            ¿Por qué elegir la UIDE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Últimas Noticias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link
                    href={item.link}
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Leer más →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            ¿Listo para comenzar tu futuro?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Únete a nuestra comunidad universitaria y forma parte de una institución que transforma vidas.
          </p>
          <Link
            href="/contacto"
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    icon: "🎓",
    title: "Excelencia Académica",
    description: "Programas académicos de vanguardia con profesores altamente calificados."
  },
  {
    icon: "🌍",
    title: "Internacionalización",
    description: "Oportunidades de intercambio y programas internacionales con universidades de prestigio."
  },
  {
    icon: "💼",
    title: "Empleabilidad",
    description: "Alto índice de empleabilidad y conexiones con el sector empresarial."
  }
]

const news = [
  {
    title: "Nuevo programa de Ingeniería en IA",
    excerpt: "La UIDE lanza su nuevo programa de Ingeniería en Inteligencia Artificial, pionero en Ecuador.",
    image: "/images/news/ai-program.jpg",
    link: "/noticias/nuevo-programa-ia"
  },
  {
    title: "Convenio con universidad europea",
    excerpt: "Firmamos un nuevo convenio de intercambio con la Universidad de Barcelona.",
    image: "/images/news/partnership.jpg",
    link: "/noticias/convenio-barcelona"
  },
  {
    title: "Ranking internacional",
    excerpt: "La UIDE se posiciona entre las mejores universidades de Latinoamérica.",
    image: "/images/news/ranking.jpg",
    link: "/noticias/ranking-2024"
  }
] 
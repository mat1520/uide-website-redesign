import { useT } from '../i18n'

export default function Privacy() {
  const t = useT()
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-uide-primary mb-8">
          {t.footer.privacy}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            La Universidad Internacional del Ecuador (UIDE) se compromete a proteger la privacidad de sus usuarios.
            Esta política describe cómo recopilamos, usamos y protegemos su información personal.
          </p>

          <h2 className="text-2xl font-bold text-uide-primary mt-8 mb-4">
            Información que recopilamos
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Información de contacto (nombre, correo electrónico, teléfono)</li>
            <li>Información académica y profesional</li>
            <li>Datos de uso del sitio web</li>
          </ul>

          <h2 className="text-2xl font-bold text-uide-primary mt-8 mb-4">
            Uso de la información
          </h2>
          <p className="text-gray-600 mb-6">
            Utilizamos su información para:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Procesar su solicitud de admisión</li>
            <li>Enviar información sobre programas académicos</li>
            <li>Mejorar nuestros servicios</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>

          <h2 className="text-2xl font-bold text-uide-primary mt-8 mb-4">
            Protección de datos
          </h2>
          <p className="text-gray-600 mb-6">
            Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal
            contra acceso no autorizado, alteración, divulgación o destrucción.
          </p>

          <h2 className="text-2xl font-bold text-uide-primary mt-8 mb-4">
            Sus derechos
          </h2>
          <p className="text-gray-600 mb-6">
            Usted tiene derecho a:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Acceder a su información personal</li>
            <li>Rectificar datos inexactos</li>
            <li>Solicitar la eliminación de sus datos</li>
            <li>Oponerse al procesamiento de sus datos</li>
          </ul>

          <h2 className="text-2xl font-bold text-uide-primary mt-8 mb-4">
            Contacto
          </h2>
          <p className="text-gray-600 mb-6">
            Para cualquier consulta sobre esta política de privacidad, contáctenos en:
            <br />
            <a href="mailto:privacidad@uide.edu.ec" className="text-uide-secondary hover:underline">
              privacidad@uide.edu.ec
            </a>
          </p>
        </div>
      </div>
    </div>
  )
} 
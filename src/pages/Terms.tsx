import { useT } from '../i18n'

export default function Terms() {
  const t = useT()
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-uide-primary mb-8">
          Términos y Condiciones
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Bienvenido al sitio web de la Universidad Internacional del Ecuador (UIDE).
            Al acceder y utilizar este sitio, usted acepta estar sujeto a los siguientes términos y condiciones.
          </p>

          <h2 className="text-2xl font-bold text-uide-primary mt-8 mb-4">
            Uso del sitio
          </h2>
          <p className="text-gray-600 mb-6">
            Este sitio web está destinado a proporcionar información sobre los programas académicos,
            servicios y actividades de la UIDE. El uso de este sitio debe ser para fines legales y
            de acuerdo con estos términos y condiciones.
          </p>

          <h2 className="text-2xl font-bold text-uide-primary mt-8 mb-4">
            Propiedad intelectual
          </h2>
          <p className="text-gray-600 mb-6">
            Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes,
            clips de audio, descargas digitales y compilaciones de datos, es propiedad de la UIDE
            o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual.
          </p>

          <h2 className="text-2xl font-bold text-uide-primary mt-8 mb-4">
            Información del usuario
          </h2>
          <p className="text-gray-600 mb-6">
            Al proporcionar información a través de este sitio web, usted garantiza que:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>La información es precisa y completa</li>
            <li>No viola los derechos de terceros</li>
            <li>No es ilegal, amenazante, difamatoria o inapropiada</li>
          </ul>

          <h2 className="text-2xl font-bold text-uide-primary mt-8 mb-4">
            Limitación de responsabilidad
          </h2>
          <p className="text-gray-600 mb-6">
            La UIDE no será responsable por daños directos, indirectos, incidentales,
            consecuentes o punitivos que resulten del uso o la imposibilidad de usar este sitio web.
          </p>

          <h2 className="text-2xl font-bold text-uide-primary mt-8 mb-4">
            Modificaciones
          </h2>
          <p className="text-gray-600 mb-6">
            La UIDE se reserva el derecho de modificar estos términos y condiciones en cualquier momento.
            Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
          </p>

          <h2 className="text-2xl font-bold text-uide-primary mt-8 mb-4">
            Contacto
          </h2>
          <p className="text-gray-600 mb-6">
            Para cualquier consulta sobre estos términos y condiciones, contáctenos en:
            <br />
            <a href="mailto:legal@uide.edu.ec" className="text-uide-secondary hover:underline">
              legal@uide.edu.ec
            </a>
          </p>
        </div>
      </div>
    </div>
  )
} 
export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen flex justify-center">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#1A1A1A]"></div>
      
      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-8 py-20">
        {/* Título */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Política de <span className="text-gold-500">Privacidad</span>
          </h1>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        </div>

        {/* Contenido */}
        <div className="space-y-12 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-gold-500 mb-4">1. Información que recopilamos</h2>
            <div className="space-y-4">
              <p>
                En Vehimes Motors recopilamos información cuando:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Utiliza nuestro sitio web</li>
                <li>Se comunica con nosotros por correo electrónico o teléfono</li>
                <li>Solicita información sobre nuestros servicios</li>
                <li>Realiza una consulta a través de nuestros formularios</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gold-500 mb-4">2. Uso de la información</h2>
            <div className="space-y-4">
              <p>La información recopilada se utiliza para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Responder a sus consultas y solicitudes</li>
                <li>Enviar información relevante sobre nuestros servicios</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gold-500 mb-4">3. Sus derechos</h2>
            <div className="space-y-4">
              <p>Usted tiene derecho a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Presentar una reclamación ante la autoridad de control</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 
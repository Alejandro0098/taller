export default function CookiesPage() {
  return (
    <main className="relative min-h-screen flex justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#1A1A1A]"></div>
      
      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Política de <span className="text-gold-500">Cookies</span>
          </h1>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        </div>

        <div className="space-y-12 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-gold-500 mb-4">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web colocan en su dispositivo para almacenar información sobre sus preferencias o actividad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gold-500 mb-4">Tipos de cookies que utilizamos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl text-white mb-2">Cookies esenciales</h3>
                <p>Necesarias para el funcionamiento básico del sitio web.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Cookies de rendimiento</h3>
                <p>Nos ayudan a entender cómo interactúan los visitantes con nuestro sitio web.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Cookies de funcionalidad</h3>
                <p>Permiten recordar sus preferencias para mejorar su experiencia.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gold-500 mb-4">Control de cookies</h2>
            <p>
              Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su dispositivo y puede configurar la mayoría de los navegadores para que no las acepten.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
} 
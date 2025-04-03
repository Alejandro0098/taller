export default function LegalPage() {
  return (
    <main className="relative min-h-screen flex justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#1A1A1A]"></div>
      
      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Aviso <span className="text-gold-500">Legal</span>
          </h1>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        </div>

        <div className="space-y-12 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-gold-500 mb-4">1. Información general</h2>
            <p>
              Vehimes Motors, con domicilio social en Calle Premium, 123, 28001 Madrid, España, es propietaria de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gold-500 mb-4">2. Términos de uso</h2>
            <div className="space-y-4">
              <p>
                El acceso y uso de este sitio web implica la aceptación expresa de los siguientes términos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios.</li>
                <li>Queda prohibido cualquier uso con fines ilícitos o que perjudiquen a terceros.</li>
                <li>El sitio web se reserva el derecho de modificar cualquier información sin previo aviso.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gold-500 mb-4">3. Propiedad intelectual</h2>
            <p>
              Todos los contenidos del sitio web (incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales) son propiedad de Vehimes Motors o de terceros licenciantes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gold-500 mb-4">4. Limitación de responsabilidad</h2>
            <p>
              Vehimes Motors no se hace responsable de los errores u omisiones en los contenidos, ni de los problemas técnicos o fallos que puedan ocurrir durante la navegación en el sitio web.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
} 
export default function BlogPostLoading() {
  return (
    <main className="relative min-h-screen flex justify-center">
      {/* Fondos */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#1A1A1A]"></div>
      
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0,0 L40,40 M0,40 L40,0' stroke='%23C49735' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,151,53,0.05),transparent_70%)]"></div>

      <article className="relative w-full max-w-5xl mx-auto px-2 sm:px-6 md:px-8 py-12 sm:py-20">
        {/* Cabecera */}
        <header className="text-center mb-8 sm:mb-12">
          {/* Fecha */}
          <div className="w-24 h-4 bg-gold-500/20 rounded mx-auto animate-pulse"></div>
          
          {/* Título */}
          <div className="mt-4 mb-6 space-y-4">
            <div className="h-8 bg-white/10 rounded-lg w-3/4 mx-auto animate-pulse"></div>
            <div className="h-8 bg-white/10 rounded-lg w-2/3 mx-auto animate-pulse"></div>
          </div>
          
          {/* Línea decorativa */}
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
        </header>

        {/* Contenedor principal */}
        <div className="bg-[#0A0A0A] border border-[#333]/30 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.3)]">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

          <div className="p-4 sm:p-8 md:p-12 space-y-8 sm:space-y-12">
            {/* Imagen principal skeleton */}
            <div className="relative h-[300px] sm:h-[400px] rounded-lg bg-white/10 animate-pulse"></div>

            {/* Introducción skeleton */}
            <div className="space-y-4">
              <div className="h-6 bg-white/10 rounded w-3/4 mx-auto animate-pulse"></div>
              <div className="h-6 bg-white/10 rounded w-2/3 mx-auto animate-pulse"></div>
            </div>

            {/* Separador */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Sección de contenido skeleton */}
            <div className="space-y-6">
              {/* Título de sección */}
              <div className="h-7 bg-gold-500/20 rounded w-1/3 mx-auto animate-pulse"></div>
              
              {/* Párrafos */}
              <div className="space-y-4">
                <div className="h-4 bg-white/10 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-white/10 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse"></div>
              </div>

              {/* Card skeleton */}
              <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-[#333]/20">
                <div className="space-y-3">
                  <div className="h-4 bg-white/10 rounded w-2/3 animate-pulse"></div>
                  <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-white/10 rounded w-1/2 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Imagen secundaria skeleton */}
            <div className="relative h-[250px] rounded-lg bg-white/10 animate-pulse"></div>

            {/* Conclusión skeleton */}
            <div className="space-y-4">
              <div className="h-7 bg-gold-500/20 rounded w-1/4 mx-auto animate-pulse"></div>
              <div className="h-4 bg-white/10 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-white/10 rounded w-5/6 animate-pulse"></div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
        </div>
      </article>
    </main>
  )
} 
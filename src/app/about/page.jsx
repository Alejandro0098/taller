"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { Users, Award, History, Target, Home, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex justify-center bg-gradient-to-b from-[#171717] to-[#0a0a0a]">
      {/* Fondo más claro */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0,0 L40,40 M0,40 L40,0' stroke='%23D4A636' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}>
      </div>
      <section className="py-16 relative overflow-hidden">
        {/* Patrón de fibra de carbono */}

        {/* Efecto de luz central */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,202,69,0.2),transparent_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center gap-8">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#212121] border border-[#D4A636]/40 text-[#D4A636] text-sm font-medium tracking-wider uppercase mb-4">
              Nuestra Trayectoria
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4A636] mb-5">Sobre nosotros</h2>
            <div className="w-20 h-1 bg-[#D4A636] mx-auto mb-6"></div>
            <p className="text-white/80 max-w-3xl mx-auto text-base md:text-lg">
              Más de tres décadas dedicadas a ofrecer los mejores vehículos premium y una experiencia de servicio incomparable
            </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-12 items-center mb-16 px-2">
            <div>
              <h3 className="text-center sm:text-left text-2xl lg:text-3xl font-semibold mb-8 text-[#D4A636]">Una Historia de Excelencia y Pasión</h3>
              <p className="text-white/90 mb-4 text-base md:text-lg">
                Fundado en 1985, nuestro concesionario comenzó como un pequeño negocio familiar con pasión por los
                automóviles excepcionales. A lo largo de las décadas, hemos crecido hasta convertirnos en uno de los
                concesionarios más respetados de la región, manteniendo nuestro compromiso con la calidad y el servicio
                personalizado.
              </p>
              <p className="text-white/90 text-base md:text-lg mb-6">
                Nuestra filosofía siempre ha sido proporcionar una experiencia sin igual para nuestros clientes,
                ofreciendo solo los mejores vehículos y garantizando la completa satisfacción con cada compra. Esta
                dedicación a la excelencia nos ha ganado una base de clientes leales y numerosos reconocimientos en la
                industria.
              </p>
              <div className="flex items-center space-x-2 text-[#D4A636] bg-[#1a1a1a] p-3 rounded-lg border border-[#D4A636]/20">
                <Star className="h-5 w-5" />
                <span className="text-sm">Reconocidos como Mejor Concesionario Premium 2023</span>
              </div>
            </div>
            <div className="relative aspect-video w-full bg-premium-gray-medium rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(212,166,54,0.2)] transition-all duration-500 border border-[#D4A636]/20">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                lang="es"
                loop={true}
                src="/example.mp4"
              >
                Su navegador no soporta el elemento de video.
              </video>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-xl border border-[#D4A636]/20 hover:border-[#D4A636]/50 transition-all duration-300 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-[#D4A636] mb-3">15+</div>
              <p className="text-white/80 text-base md:text-lg">Años de Experiencia</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-xl border border-[#D4A636]/20 hover:border-[#D4A636]/50 transition-all duration-300 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-[#D4A636] mb-3">5000+</div>
              <p className="text-white/80 text-base md:text-lg">Clientes Satisfechos</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-xl border border-[#D4A636]/20 hover:border-[#D4A636]/50 transition-all duration-300 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-[#D4A636] mb-3">20+</div>
              <p className="text-white/80 text-base md:text-lg">Técnicos Certificados</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-xl border border-[#D4A636]/20 hover:border-[#D4A636]/50 transition-all duration-300 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-[#D4A636] mb-3">98%</div>
              <p className="text-white/80 text-base md:text-lg">Tasa de Satisfacción</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
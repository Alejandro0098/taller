import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Star, Zap, Shield, Award, Wrench, ChevronRight, Fuel, Gauge } from "lucide-react"
import ServicesSection from "@/components/ServicesSection"
import LocationComponent from "@/components/LocationComponent"
import LatestCarsSection from "@/components/LatestCarsSection"
import CarCard from "@/components/CarCard"

// Settings, Wrench, Gauge, PhoneCall, ClipboardCheck, Tool, CheckCircle, Quote, User } from "lucide-react"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="bg-black/50">
          <Image
            src="/home-wallpaper.jpg"
            alt="Exposición de coches de lujo"
            fill
            className="object-cover bg-center filter blur-md"
            priority
            style={{ "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.3)" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/10 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Coches Premium para Conductores Exigentes</h1>
          <p className="text-xl text-white/95 mb-8 max-w-2xl">
            Descubre nuestra exclusiva colección de vehículos de lujo y alto rendimiento
          </p>
          <Link href="/cars">
            <Button
              size="lg"
              className="text-lg px-8 bg-gradient-to-r from-premium-yellow-light to-premium-yellow-light/80 hover:from-premium-yellow-light/70 hover:to-premium-yellow-dark/90 text-white border-none"
            >
              Ver Nuestra Colección
            </Button>
          </Link>
        </div>
      </section>

      {/* Sección "Una Historia de Excelencia y Pasión" con el nuevo fondo de fibra de carbono */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-b from-[#171717] to-[#0a0a0a]">
        {/* Patrón de fibra de carbono */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0,0 L40,40 M0,40 L40,0' stroke='%23D4A636' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}>
        </div>

        {/* Efecto de luz central */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,202,69,0.2),transparent_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center gap-8">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#212121] border border-[#D4A636]/40 text-[#D4A636] text-sm font-medium tracking-wider uppercase mb-4">
              Nuestra Trayectoria
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4A636] mb-5">Una Historia de Excelencia y Pasión</h2>
            <div className="w-20 h-1 bg-[#D4A636] mx-auto mb-6"></div>
            <p className="text-white/80 max-w-3xl mx-auto text-base md:text-lg">
              Más de tres décadas dedicadas a ofrecer los mejores vehículos premium y una experiencia de servicio incomparable
            </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-12 items-center mb-16 px-2">
            <div>
              <h3 className="text-center sm:text-left text-2xl lg:text-3xl font-semibold mb-8 text-[#D4A636]">Un Legado de Excelencia</h3>
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
      <ServicesSection />
      <LatestCarsSection />
      <LocationComponent />
    </main>
  )
}


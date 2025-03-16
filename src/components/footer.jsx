import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Car, Award, Zap, Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-premium-black to-[#1a1a2e] py-12 border-t border-premium-gray-light relative">
      {/* Patrón de fondo sutil */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-white flex items-center">
              <span className="bg-gradient-to-r from-premium-red to-orange-500 text-white p-1 rounded mr-2">
                <Car className="h-5 w-5" />
              </span>
              AutoPremium
            </h3>
            <p className="text-white/70">Ofreciendo vehículos de lujo y servicios premium desde 1985.</p>
            <div className="mt-4 p-4 bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark rounded-lg border border-premium-gray-light">
              <p className="text-white/80 text-sm italic">
                "Nuestra pasión es encontrar el vehículo perfecto para cada cliente."
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white flex items-center">
              <Award className="h-5 w-5 mr-2 text-amber-500" />
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-premium-red transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-premium-red rounded-full mr-2"></span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-white/70 hover:text-cyan-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                  Vehículos
                </Link>
              </li>
              <li>
                <Link
                  href="/car-detail"
                  className="text-white/70 hover:text-amber-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                  Detalle de Vehículo
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-emerald-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-purple-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white flex items-center">
              <Zap className="h-5 w-5 mr-2 text-emerald-500" />
              Servicios
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/tow-truck"
                  className="text-white/70 hover:text-cyan-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                  Servicio de Grúas
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-import"
                  className="text-white/70 hover:text-amber-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                  Importación a Medida
                </Link>
              </li>
              <li>
                <Link
                  href="/financing"
                  className="text-white/70 hover:text-emerald-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                  Financiación
                </Link>
              </li>
              <li>
                <Link
                  href="/maintenance"
                  className="text-white/70 hover:text-purple-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  Mantenimiento
                </Link>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-premium-red/20 text-premium-red text-xs rounded-full">Deportivos</span>
              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-500 text-xs rounded-full">Sedán</span>
              <span className="px-2 py-1 bg-amber-500/20 text-amber-500 text-xs rounded-full">SUV</span>
              <span className="px-2 py-1 bg-emerald-500/20 text-emerald-500 text-xs rounded-full">Eléctricos</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white flex items-center">
              <Shield className="h-5 w-5 mr-2 text-purple-500" />
              Contacto
            </h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-premium-red to-orange-500 p-1.5 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <MapPin className="h-3.5 w-3.5 text-white" />
                </div>
                <p className="text-white/70">Calle Principal 123, 28001 Madrid, España</p>
              </div>
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-1.5 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <Phone className="h-3.5 w-3.5 text-white" />
                </div>
                <p className="text-white/70">+34 91 123 4567</p>
              </div>
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-400 p-1.5 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <Mail className="h-3.5 w-3.5 text-white" />
                </div>
                <p className="text-white/70">info@concesionario.es</p>
              </div>
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-1.5 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <Clock className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="text-white/70">
                  <p>Lun - Vie: 9:00 - 20:00</p>
                  <p>Sáb: 10:00 - 18:00</p>
                </div>
              </div>
            </address>
            <div className="flex space-x-3 mt-4">
              <Link
                href="https://facebook.com"
                className="p-2 rounded-full bg-gradient-to-r from-premium-red to-orange-500 text-white hover:opacity-90 transition-opacity"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 transition-opacity"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="p-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-white hover:opacity-90 transition-opacity"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-premium-gray-light mt-12 pt-8 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} AutoPremium. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2 text-xs">
            <Link href="/privacy" className="hover:text-premium-red transition-colors">
              Privacidad
            </Link>
            <Link href="/terms" className="hover:text-cyan-500 transition-colors">
              Términos
            </Link>
            <Link href="/cookies" className="hover:text-amber-500 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


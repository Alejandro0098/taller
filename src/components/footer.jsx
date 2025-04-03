import { Phone, Clock, Mail, Instagram, Youtube, Music, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A]">
      {/* Franja decorativa superior */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contacto */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gold-500 mb-4">Contacto</h3>
            <div className="space-y-3">
              <a href="tel:+34123456789" className="flex items-center gap-2 text-gray-300 hover:text-gold-500 transition-colors group">
                <Phone className="h-4 w-4 text-gray-400 group-hover:text-gold-500" />
                +34 123 456 789
              </a>
              <a href="mailto:vehimesmotors@outlook.com" className="flex items-center gap-2 text-gray-300 hover:text-gold-500 transition-colors group">
                <Mail className="h-4 w-4 text-gray-400 group-hover:text-gold-500" />
                vehimesmotors@outlook.com
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                <span>
                  Calle Premium, 123<br />
                  28001 Madrid, España
                </span>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gold-500 mb-4">Síguenos</h3>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg text-gray-400 hover:text-gold-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg text-gray-400 hover:text-gold-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg text-gray-400 hover:text-gold-500 transition-colors">
                <Music className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Horario */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gold-500 mb-4">Horario</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <span>Lunes - Viernes</span>
                <span className="text-gray-400 ml-auto">9:00 - 19:00</span>
              </div>
              <div className="flex items-center">
                <span>Sábado</span>
                <span className="text-gray-400 ml-auto">10:00 - 14:00</span>
              </div>
              <div className="flex items-center">
                <span >Domingo</span>
                <span className="text-gray-400 ml-auto">Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="h-px bg-[#222] my-8"></div>

        {/* Footer inferior */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Vehimes Motors</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gold-500 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/legal" className="hover:text-gold-500 transition-colors">
              Aviso Legal
            </Link>
            <Link href="/cookies" className="hover:text-gold-500 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
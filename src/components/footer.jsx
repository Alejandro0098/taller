import { Phone, Clock, Mail, Instagram, Youtube, Music } from "lucide-react"
import Link from "next/link"


export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-[#333] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:flex-wrap lg:justify-evenly gap-16">
          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-100 border-b border-gold-500 pb-2 inline-block self-center">
              Contacto
            </h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-gold-500" />
                +34 123 456 789
              </p>
              <p className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-gold-500" />
                vehimesmotors@outlook.com
              </p>
              <p className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-3 text-gold-500" />
                L-V: 9:00-19:00 | S: 10:00-14:00
              </p>
            </div>
          </div>
          {/* Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-100 border-b border-gold-500 pb-2 inline-block mb-2">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#333] text-white/80 p-3 rounded-full hover:bg-gold-500 hover:text-[#111] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-[#333] text-white/80 p-3 rounded-full hover:bg-gold-500 hover:text-[#111] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-[#333] text-white/80 p-3 rounded-full hover:bg-gold-500 hover:text-[#111] transition-colors">
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>


          {/* Visítanos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-100 border-b border-gold-500 pb-2 inline-block">
              Visítanos
            </h3>
            <div className="space-y-3 text-gray-300">
              <p>Calle Premium, 123</p>
              <p>28001 Madrid</p>
              <p>España</p>
            </div>
          </div>

          {/* Legal */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-100 border-b border-gold-500 pb-2 inline-block">
              Legal
            </h3>
            <div className="space-y-3 text-gray-300">
              <Link href="/politica-privacidad" className="block hover:text-gold-500 transition-colors">
                Política de privacidad
              </Link>
              <Link href="/terminos-condiciones" className="block hover:text-gold-500 transition-colors">
                Términos y condiciones
              </Link>
              <Link href="/aviso-legal" className="block hover:text-gold-500 transition-colors">
                Aviso legal
              </Link>
            </div>
          </div> */}


        </div>

        {/* Derechos */}
        <div className="border-t border-[#333] mt-12 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Vehimes Motors. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
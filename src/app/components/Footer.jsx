import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A]">
      {/* Franja decorativa superior */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C49735] to-transparent"></div>
      
      {/* Contenido principal */}
      <div className="container px-6 md:px-8">
        {/* Sección superior con logo y contacto rápido */}
        <div className="flex flex-col md:flex-row items-center justify-between py-12 border-b border-[#222]">
          <Link href="/" className="mb-6 md:mb-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="tel:+34123456789" className="flex items-center gap-2 text-white/70 hover:text-[#C49735] transition-colors">
              <Phone className="h-5 w-5" />
              +34 123 456 789
            </a>
            <a href="mailto:info@ejemplo.com" className="flex items-center gap-2 text-white/70 hover:text-[#C49735] transition-colors">
              <Mail className="h-5 w-5" />
              info@ejemplo.com
            </a>
          </div>
        </div>

        {/* Sección central con información y enlaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12">
          {/* Descripción */}
          <div className="lg:col-span-2">
            <h3 className="text-xl text-white font-medium mb-4">Sobre nosotros</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Especialistas en vehículos de lujo y alta gama. Ofrecemos servicios premium para clientes exigentes que buscan una experiencia única en el sector automotriz.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-[#111] hover:bg-[#C49735] text-white/70 hover:text-black p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-[#111] hover:bg-[#C49735] text-white/70 hover:text-black p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-[#111] hover:bg-[#C49735] text-white/70 hover:text-black p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-xl text-white font-medium mb-4">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-[#C49735] transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/services/custom" className="text-white/70 hover:text-[#C49735] transition-colors">
                  Coches a medida
                </Link>
              </li>
              <li>
                <Link href="/services/pickup" className="text-white/70 hover:text-[#C49735] transition-colors">
                  Recogida de coches
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-[#C49735] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#C49735] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div>
            <h3 className="text-xl text-white font-medium mb-4">Horario</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#C49735]" />
                <span>Lun - Vie: 9:00 - 20:00</span>
              </li>
              <li className="pl-7">Sáb: 10:00 - 14:00</li>
              <li className="pl-7">Dom: Cerrado</li>
              <li className="flex items-start gap-2 mt-6">
                <MapPin className="h-5 w-5 text-[#C49735]" />
                <span>
                  Calle Principal 123<br />
                  28001 Madrid, España
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección inferior con copyright y políticas */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-[#222] text-sm text-white/50">
          <p>© {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[#C49735] transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/legal" className="hover:text-[#C49735] transition-colors">
              Aviso Legal
            </Link>
            <Link href="/cookies" className="hover:text-[#C49735] transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 
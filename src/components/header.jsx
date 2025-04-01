'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet'
import {
  Menu,
  Phone,
  Mail,
  Clock,
  Home,
  Car,
  Settings,
  MapPin,
  Instagram,
  Youtube,
  Music
} from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname || '')
  const router = useRouter()

  useEffect(() => {
    if (pathname.startsWith('/cars/')) {
      setActiveTab('/cars')
    } else {
      setActiveTab(pathname || '')
    }
  }, [pathname, router])

  "#1A1A1A"
  return (
    <header className="sticky top-0 z-50 bg-premium-gray-dark border-b border-[#333] shadow-lg">
      {/* Barra superior de contacto (solo desktop) */}
      <div className="hidden lg:block bg-[#111] py-2 px-6 border-b border-[#333]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-sm text-gray-300">
              <Phone className="w-4 h-4 mr-2 text-gold-500" />
              +34 123 456 789
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Mail className="w-4 h-4 mr-2 text-gold-500" />
              vehimesmotors@outlook.com
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-300">
              <Clock className="w-4 h-4 mr-2 text-gold-500" />
              L-V: 9:00-19:00 | S: 10:00-14:00
            </div>

            {/* Redes sociales */}
            <div className="flex items-center space-x-3 ml-4">
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={() => setActiveTab('/')}>
            <div className="relative h-12 w-auto mb-2">
              <img
                src="/logo.png"
                alt="Mi Taller Logo"
                width={150}
                height={48}
                className="object-contain max-h-14"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 h-full">
            <Link
              href="/"
              className={`h-fit text-white flex items-center rounded-xs px-2 py-3 h-fit ${activeTab === '/' ? 'border-b-[2px] border-gold-500' : 'hover:text-white/90 border-transparent hover:border-gold-500'} transition-all`}
              onClick={() => setActiveTab('/')}
            >
              Inicio
            </Link>
            <Link
              href="/cars"
              className={`h-fit text-white flex items-center rounded-xs px-2 py-3 h-fit ${activeTab === '/cars' ? 'border-b-[2px] border-gold-500' : 'hover:text-white/90 border-transparent hover:border-gold-500'} transition-all`}
              onClick={() => setActiveTab('/cars')}
            >
              Vehículos disponibles
            </Link>
            <Link
              href="/coches-medida"
              className={`h-fit text-white flex items-center rounded-xs px-2 py-3 h-fit ${activeTab === '/coches-medida' ? 'border-b-[2px] border-gold-500' : 'hover:text-white/90 border-transparent hover:border-gold-500'} transition-all`}
              onClick={() => setActiveTab('/coches-medida')}
            >
              Coches a medida
            </Link>
            <Link
              href="/recogida"
              className={`h-fit text-white flex items-center rounded-xs px-2 py-3 h-fit ${activeTab === '/recogida' ? 'border-b-[2px] border-gold-500' : 'hover:text-white/90 border-transparent hover:border-gray-500'} transition-all`}
              onClick={() => setActiveTab('/recogida')}
            >
              Servicio de recogida
            </Link>
          </nav>

          {/* Mobile Nav Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                variant="ghost"
                className="lg:hidden text-gray-300 hover:bg-[#333] hover:text-gold-500 p-3"
              >
                <Menu className="h-full" /> {/* Botón más grande */}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] bg-[#1A1A1A] border-l border-[#333] overflow-y-auto [&>button:first-child]:text-white">
              <div className="flex flex-col h-full pt-8">
                <nav className="flex flex-col">
                  <Link
                    href="/"
                  >
                    <SheetClose className="py-4 px-4 text-gray-300 hover:bg-[#222] hover:text-gold-500 border-b border-[#333] transition-all flex items-center w-full">
                      <Home className="w-5 h-5 mr-3 text-gold-500" />
                      Inicio
                    </SheetClose>
                  </Link>
                  <Link
                    href="/cars"
                  >
                    <SheetClose className="py-4 px-4 text-gray-300 hover:bg-[#222] hover:text-gold-500 border-b border-[#333] transition-all flex items-center w-full">
                      <Car className="w-5 h-5 mr-3 text-gold-500" />
                      Vehículos disponibles
                    </SheetClose>
                  </Link>
                  <Link
                    href="/recogida"
                  >
                    <SheetClose className="py-4 px-4 text-gray-300 hover:bg-[#222] hover:text-gold-500 border-b border-[#333] transition-all flex items-center w-full">
                      <Settings className="w-5 h-5 mr-3 text-gold-500" />
                      Coches a medida
                    </SheetClose>
                  </Link>
                  <Link
                    href="/coches-medida"
                  >
                    <SheetClose className="py-4 px-4 text-gray-300 hover:bg-[#222] hover:text-gold-500 border-b border-[#333] transition-all flex items-center w-full">
                      <MapPin className="w-5 h-5 mr-3 text-gold-500" />
                      Servicio de recogida
                    </SheetClose>
                  </Link>
                </nav>

                {/* Contacto y redes en mobile */}
                <div className="mt-auto pb-8 pt-6 border-t border-[#333]">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Phone className="w-4 h-4 mr-3 " />
                      +34 123 456 789
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Mail className="w-4 h-4 mr-3 " />
                      contacto@luxurycars.com
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-3 " />
                      L - V: 9:00-19:00 | S: 10:00-14:00
                    </div>
                  </div>

                  {/* Redes sociales en mobile */}
                  <div className="flex space-x-8 justify-center mt-12">
                    <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                      <Youtube className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                      <Music className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
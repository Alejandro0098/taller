"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Car, Zap, Award, User, Phone, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-premium-gray-light bg-premium-black/95 backdrop-blur supports-[backdrop-filter]:bg-premium-black/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl text-white flex items-center">
          <img src="/logo.png" alt="" className="object-contain h-12" />
        </Link>

        <nav className="hidden sm:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-white/80 transition-colors hover:text-premium-red flex items-center"
          >
            Inicio
          </Link>
          <Link
            href="/cars"
            className="text-sm font-medium text-white/80 transition-colors hover:text-cyan-500 flex items-center"
          >
            <Car className="h-4 w-4 mr-1 text-cyan-500" />
            Vehículos
          </Link>
          <Link
            href="/car-detail"
            className="text-sm font-medium text-white/80 transition-colors hover:text-amber-500 flex items-center"
          >
            <Award className="h-4 w-4 mr-1 text-amber-500" />
            Detalle de Vehículo
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium text-white/80 transition-colors hover:text-emerald-500 flex items-center">
              <Zap className="h-4 w-4 mr-1 text-emerald-500" />
              Servicios
              <ChevronDown className="h-3 w-3 ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-premium-gray-medium border border-premium-gray-light hidden group-hover:block">
              <div className="py-1">
                <Link
                  href="/services/tow-truck"
                  className="block px-4 py-2 text-sm text-white/80 hover:bg-premium-gray-dark hover:text-cyan-500"
                >
                  Servicio de Grúas
                </Link>
                <Link
                  href="/services/custom-import"
                  className="block px-4 py-2 text-sm text-white/80 hover:bg-premium-gray-dark hover:text-amber-500"
                >
                  Importación a Medida
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/about"
            className="text-sm font-medium text-white/80 transition-colors hover:text-orange-500 flex items-center"
          >
            <User className="h-4 w-4 mr-1 text-orange-500" />
            Sobre Nosotros
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-white/80 transition-colors hover:text-purple-500 flex items-center"
          >
            <Phone className="h-4 w-4 mr-1 text-purple-500" />
            Contacto
          </Link>
        </nav>

        <Button
          variant="outline"
          className="hidden sm:inline-flex border-transparent bg-gradient-to-r from-premium-red to-orange-500 text-white hover:opacity-90"
        >
          <Link href="/contact">Solicitar Información</Link>
        </Button>

        <Button variant="ghost" size="icon" className="sm:hidden text-white" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-premium-black">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="font-bold text-xl text-white flex items-center">
              <span className="bg-gradient-to-r from-premium-red to-orange-500 text-white p-1 rounded mr-2">
                <Car className="h-5 w-5" />
              </span>
              Vehimes Motors
            </Link>
            <Button variant="ghost" size="icon" className="text-white" onClick={toggleMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Cerrar menú</span>
            </Button>
          </div>
          <nav className="container grid gap-6 py-6">
            <Link
              href="/"
              className="text-lg font-medium text-white/80 transition-colors hover:text-premium-red flex items-center"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="/cars"
              className="text-lg font-medium text-white/80 transition-colors hover:text-cyan-500 flex items-center"
              onClick={toggleMenu}
            >
              <Car className="h-5 w-5 mr-2 text-cyan-500" />
              Vehículos
            </Link>
            <Link
              href="/car-detail"
              className="text-lg font-medium text-white/80 transition-colors hover:text-amber-500 flex items-center"
              onClick={toggleMenu}
            >
              <Award className="h-5 w-5 mr-2 text-amber-500" />
              Detalle de Vehículo
            </Link>
            <Link
              href="/services/tow-truck"
              className="text-lg font-medium text-white/80 transition-colors hover:text-emerald-500 flex items-center"
              onClick={toggleMenu}
            >
              <Zap className="h-5 w-5 mr-2 text-emerald-500" />
              Servicio de Grúas
            </Link>
            <Link
              href="/services/custom-import"
              className="text-lg font-medium text-white/80 transition-colors hover:text-orange-500 flex items-center"
              onClick={toggleMenu}
            >
              <Zap className="h-5 w-5 mr-2 text-orange-500" />
              Importación a Medida
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium text-white/80 transition-colors hover:text-purple-500 flex items-center"
              onClick={toggleMenu}
            >
              <User className="h-5 w-5 mr-2 text-purple-500" />
              Sobre Nosotros
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium text-white/80 transition-colors hover:text-pink-500 flex items-center"
              onClick={toggleMenu}
            >
              <Phone className="h-5 w-5 mr-2 text-pink-500" />
              Contacto
            </Link>
            <Button
              className="w-full bg-gradient-to-r from-premium-red to-orange-500 hover:opacity-90 text-white"
              onClick={toggleMenu}
            >
              <Link href="/contact">Solicitar Información</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}


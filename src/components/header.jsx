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
  Music,
  PhoneCall,
  X,
  Facebook,
  Twitter,
  Globe,
  ChevronDown
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Lista de servicios actualizada
const servicios = [
  { title: "Coches a medida", href: "/coches-medida" },
  { title: "Recogida de coches", href: "/recogida" }
];

// Componente para enlaces de navegación
function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href ||
    (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`relative text-sm font-medium text-white transition-colors hover:text-[#B38728] py-5 px-1 ${isActive ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#B38728]" : ""
        }`}
    >
      {children}
    </Link>
  );
}

// Componente para enlaces de teléfono
function PhoneLink() {
  return (
    <Link
      href="tel:+123456789"
      className="flex items-center text-sm font-medium text-black bg-gradient-to-r from-[#B38728] to-[#DBAF68] hover:from-[#DBAF68] hover:to-[#B38728] transition-all px-4 py-2 rounded-md shadow-md"
    >
      <PhoneCall className="mr-2 h-4 w-4" />
      Llamar ahora
    </Link>
  )
}

// Componente para redes sociales
function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <a href="#" className="w-6 h-6 rounded-full bg-[#111] border border-[#B38728]/50 flex items-center justify-center text-white hover:bg-[#B38728] hover:text-black transition-all">
        <Facebook size={14} />
      </a>
      <a href="#" className="w-6 h-6 rounded-full bg-[#111] border border-[#B38728]/50 flex items-center justify-center text-white hover:bg-[#B38728] hover:text-black transition-all">
        <Instagram size={14} />
      </a>
      <a href="#" className="w-6 h-6 rounded-full bg-[#111] border border-[#B38728]/50 flex items-center justify-center text-white hover:bg-[#B38728] hover:text-black transition-all">
        <Twitter size={14} />
      </a>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname || '')
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const isServiceActive = pathname.startsWith('/services');

  useEffect(() => {
    if (pathname.startsWith('/cars/')) {
      setActiveTab('/cars')
    } else {
      setActiveTab(pathname || '')
    }
  }, [pathname, router])

  // Detectar scroll para cambiar la apariencia del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Top bar con información de contacto - solo visible en pantallas grandes */}
      <div className="hidden lg:block bg-[#0A0A0A] border-b border-[#B38728]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-white/80">
                <PhoneCall className="h-3.5 w-3.5 mr-2 text-[#B38728]" />
                <a href="tel:+123456789" className="hover:text-[#B38728] transition-colors">+123 456 789</a>
              </div>
              <div className="flex items-center text-white/80">
                <Mail className="h-3.5 w-3.5 mr-2 text-[#B38728]" />
                <a href="mailto:info@ejemplo.com" className="hover:text-[#B38728] transition-colors">info@ejemplo.com</a>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="h-3.5 w-3.5 mr-2 text-[#B38728]" />
                <span>Calle Principal 123, Ciudad</span>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center text-white/80">
                <Clock className="h-3.5 w-3.5 mr-2 text-[#B38728]" />
                <span>Lun-Vie: 9:00-20:00 | Sáb: 10:00-14:00</span>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Header principal con logo más grande */}
      <header className="sticky top-0 w-full z-50 bg-black/90 backdrop-blur-md shadow-lg border-b border-[#B38728]/20 py-2">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={56}
                className="h-14 w-auto"
              />
            </Link>

            {/* Navegación para pantallas grandes */}
            <nav className="hidden lg:flex items-center space-x-8 justify-end">
              <NavLink href="/">Inicio</NavLink>
              <NavLink href="/cars">Vehículos</NavLink>

              {/* Servicios con submenú */}
              <div className="relative group">
                <button
                  className={`relative text-sm font-medium text-white group-hover:text-[#B38728] flex items-center gap-1.5 py-5 px-1 ${isServiceActive ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#B38728]" : ""
                    }`}
                  onMouseEnter={() => setShowServicesMenu(true)}
                  onMouseLeave={() => setShowServicesMenu(false)}
                >
                  Servicios
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                </button>

                {/* Submenú de servicios simplificado */}
                <div
                  className={`absolute top-full left-0 bg-[#0A0A0A] border border-[#B38728]/30 rounded-md shadow-lg py-2 w-max z-50 transition-opacity ${showServicesMenu ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  onMouseEnter={() => setShowServicesMenu(true)}
                  onMouseLeave={() => setShowServicesMenu(false)}
                >
                  {servicios.map(service => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className={`block px-5 py-2 text-sm text-white hover:bg-[#B38728]/10 hover:text-[#B38728] transition-colors whitespace-nowrap ${pathname === service.href ? "bg-[#B38728]/10 text-[#B38728]" : ""
                        }`}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/about">Nosotros</NavLink>
              <NavLink href="/contact">Contacto</NavLink>
            </nav>

            {/* Hamburguesa para móvil y tablet con margen mayor */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-[#B38728]/20 ml-auto mr-2 md:mr-4">
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H17M1 6H17M1 11H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0A0A0A] border-l border-[#B38728]/30 p-0 w-full sm:max-w-md overflow-y-auto">
                <div className="flex flex-col h-full">
                  <div className="py-6 flex-1 flex flex-col">
                    {/* Navegación */}
                    <nav className="px-4 py-8">
                      <div className="space-y-2">
                        <MobileNavLink
                          href={'/'}
                          redirect={() => router.push('/')}
                        >
                          Inicio
                        </MobileNavLink>
                        <MobileNavLink
                          href={'/cars'}
                          redirect={() => router.push('/cars')}
                        >
                          Coches
                        </MobileNavLink>

                        {/* Servicios expansibles */}
                        <div className="py-1">
                          <button
                            className="pl-6 flex items-center justify-between w-full text-left text-white py-2 px-3 rounded-md bg-[#111] border border-[#333]/40 hover:border-[#B38728]/30 text-sm"
                            onClick={(e) => {
                              const content = e.currentTarget.nextElementSibling;
                              content.style.display = content.style.display === 'block' ? 'none' : 'block';
                              e.currentTarget.querySelector('svg').style.transform =
                                content.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0)';
                            }}
                          >
                            <span className="font-medium">Servicios</span>
                            <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200" />
                          </button>
                          <div className="hidden mt-1 ml-2 space-y-1 py-1">
                            {servicios.map((service, index) => (
                              <SheetClose
                                key={index}
                                onClick={() => router.push(service.href)}
                                className={`text-left w-full block p-1.5 text-xs transition-colors ${pathname === service.href ? "text-[#DBAF68]" : "text-white/80 hover:text-[#B38728]"
                                  }`}>
                                {service.title}
                              </SheetClose>
                            ))}
                          </div>
                        </div>


                        <MobileNavLink
                          href={'/blog'}
                          redirect={() => router.push('/blog')}
                        >
                          Blog
                        </MobileNavLink>
                        <MobileNavLink
                          href={'/about'}
                          redirect={() => router.push('/about')}
                        >
                          Sobre nosotros
                        </MobileNavLink>
                        <MobileNavLink
                          href={'/contact'}
                          redirect={() => router.push('/contact')}
                        >
                          Contacto
                        </MobileNavLink>
                      </div>
                    </nav>

                    <Separator className="bg-[#B38728]/20 mt-auto" />

                    {/* Información de contacto */}
                    <div className="p-4">
                      <h3 className="text-[#B38728] text-xs uppercase tracking-wider mb-3 font-semibold">Contacto</h3>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-7 h-7 rounded-full bg-[#111] border border-[#B38728]/30 flex items-center justify-center flex-shrink-0">
                            <PhoneCall className="h-3.5 w-3.5 text-[#B38728]" />
                          </div>
                          <div className="ml-2">
                            <p className="text-xs text-white/60">Teléfono</p>
                            <a href="tel:+123456789" className="text-white text-xs hover:text-[#B38728]">+123 456 789</a>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="w-7 h-7 rounded-full bg-[#111] border border-[#B38728]/30 flex items-center justify-center flex-shrink-0">
                            <Mail className="h-3.5 w-3.5 text-[#B38728]" />
                          </div>
                          <div className="ml-2">
                            <p className="text-xs text-white/60">Email</p>
                            <a href="mailto:info@ejemplo.com" className="text-white text-xs hover:text-[#B38728]">info@ejemplo.com</a>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="w-7 h-7 rounded-full bg-[#111] border border-[#B38728]/30 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-3.5 w-3.5 text-[#B38728]" />
                          </div>
                          <div className="ml-2">
                            <p className="text-xs text-white/60">Dirección</p>
                            <address className="text-white text-xs not-italic">Calle Principal 123, Ciudad</address>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-[#B38728]/20" />

                    {/* Horario */}
                    <div className="p-4">
                      <h3 className="text-[#B38728] text-xs uppercase tracking-wider mb-3 font-semibold">Horario</h3>
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Clock className="h-3.5 w-3.5 text-[#B38728] mr-1.5" />
                            <span className="text-white/80 text-xs">Lunes - Viernes</span>
                          </div>
                          <span className="text-white text-xs">9:00 - 20:00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Clock className="h-3.5 w-3.5 text-[#B38728] mr-1.5" />
                            <span className="text-white/80 text-xs">Sábado</span>
                          </div>
                          <span className="text-white text-xs">10:00 - 14:00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Clock className="h-3.5 w-3.5 text-[#B38728] mr-1.5" />
                            <span className="text-white/80 text-xs">Domingo</span>
                          </div>
                          <span className="text-white text-xs">Cerrado</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-4 border-t border-[#B38728]/30 mt-auto">
                    <SocialLinks className="justify-center" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}

// Componente para enlaces de navegación en móvil
function MobileNavLink({ children, href, redirect }) {
  const pathname = usePathname();
  const isActive = pathname === href ||
    (href !== '/' && pathname.startsWith(href));

  return (
    <SheetClose className={`pl-6 text-centerflex items-center justify-between w-full text-left text-white py-2 px-3 rounded-md bg-[#111] border border-[#333]/40 hover:border-[#B38728]/30 text-sm ${isActive
      ? "bg-[#B38728]/10 border-l-3 border-[#B38728] pl-2 text-[#DBAF68]"
      : "text-white bg-[#111] border border-[#333]/40 hover:border-[#B38728]/30 hover:text-white"
      }`}
      onClick={redirect}
    >
      <div></div>
      {children}
    </SheetClose>
  )
}
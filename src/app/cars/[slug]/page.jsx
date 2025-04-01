"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import Carousel from "@/components/Carousel"
import {
  ChevronLeft,
  ChevronRight,
  FuelIcon as Engine,
  Gauge,
  Calendar,
  Fuel,
  Cog,
  Wifi,
  Shield,
  Sparkles,
  Percent,
  PhoneCall,
  ArrowLeft,
  Clock
} from "lucide-react"

export default function CarDetailPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [carData, setCarData] = useState(null)

  // Cargar los datos del coche desde el backend
  useEffect(() => {
    const fetchCarData = async () => {
      try {
        setIsLoading(true)
        // Simular una petición al backend
        // En un caso real, esto sería: const response = await fetch('/api/cars/mercedes-amg-gt-63')
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simular tiempo de carga

        // Datos de ejemplo
        const mockData = {
          id: "mercedes-amg-gt-63",
          name: "Mercedes-AMG GT 63",
          price: 169900,
          originalPrice: 175000,
          year: 2023,
          engine: "V8 Biturbo",
          power: "639 CV",
          fuel: "Gasolina",
          images: [
            "/mercedes_1.jpg",
            "/mercedes_2.jpg",
            "/mercedes_3.JPG",
            "/mercedes_1.jpg",
            "/mercedes_2.jpg",
            "/mercedes_3.JPG",
            "/mercedes_1.jpg",
            "/mercedes_2.jpg",
            "/mercedes_3.JPG",
            "/mercedes_1.jpg",
            "/mercedes_2.jpg",
            "/mercedes_3.JPG",
            "/mercedes_1.jpg",
            "/mercedes_2.jpg",
            "/mercedes_3.JPG",
            "/mercedes_1.jpg",
            "/mercedes_2.jpg",
            "/mercedes_3.JPG",
            // "/test-imagen-2.jpg",
            // "/test-coche1.jpg",
            // "/test-imagen-2.jpg",
            // "/placeholder.svg?height=600&width=1000&text=Interior+Delantero",
            // "/placeholder.svg?height=600&width=1000&text=Interior+Trasero",
            // "/placeholder.svg?height=600&width=1000&text=Lateral+Izquierdo",
            // "/placeholder.svg?height=600&width=1000&text=Lateral+Derecho",
            // "/placeholder.svg?height=600&width=1000&text=Motor",
            // "/placeholder.svg?height=600&width=1000&text=Maletero",
          ],
        }

        setCarData(mockData)
      } catch (error) {
        console.error("Error fetching car data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCarData()
  }, [])

  // Funciones para navegar por las miniaturas
  const scrollThumbnailsLeft = () => {
    setThumbnailStartIndex((prev) => Math.max(0, prev - 1))
  }

  const scrollThumbnailsRight = () => {
    if (!carData) return
    setThumbnailStartIndex((prev) => Math.min(carData.images.length - 5, prev + 1))
  }

  // Función para manejar la selección directa de miniaturas
  const handleThumbnailClick = (index) => {
    setCurrentImage(index)
  }

  // Funciones para navegar por las imágenes
  const nextImage = () => {
    if (!carData) return
    const newIndex = (currentImage + 1) % carData.images.length
    setCurrentImage(newIndex)

    // Asegurarse de que la miniatura seleccionada esté visible
    if (newIndex < thumbnailStartIndex || newIndex >= thumbnailStartIndex + 5) {
      setThumbnailStartIndex(Math.max(0, Math.min(carData.images.length - 5, newIndex - 2)))
    }
  }

  const prevImage = () => {
    if (!carData) return
    const newIndex = (currentImage - 1 + carData.images.length) % carData.images.length
    setCurrentImage(newIndex)

    // Asegurarse de que la miniatura seleccionada esté visible
    if (newIndex < thumbnailStartIndex || newIndex >= thumbnailStartIndex + 5) {
      setThumbnailStartIndex(Math.max(0, Math.min(carData.images.length - 5, newIndex - 2)))
    }
  }

  // Componente de carga
  if (isLoading) {
    return (
      <main className="min-h-screen relative overflow-hidden">
        {/* Fondo base con color gris oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#171717] to-[#0a0a0a]"></div>
        
        {/* Patrón de fibra de carbono */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0,0 L40,40 M0,40 L40,0' stroke='%23D4A636' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}>
        </div>
        
        {/* Efecto de luz central */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,166,54,0.15),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <section className="py-12">
            <div className="container mx-auto">
              <div>
                {/* Back button skeleton */}
                <div className="mb-2">
                  <Skeleton className="h-10 w-32 bg-[#222]/60" />
                </div>

                {/* Image Gallery Skeleton */}
                <div className="relative rounded-lg overflow-hidden mb-8">
                  <div className="relative aspect-[16/9]">
                    <div className="w-full h-full bg-[#222]/60 animate-pulse border border-[#D4A636]/10" />
                  </div>
                </div>

                {/* Thumbnails Skeleton */}
                <div className="relative mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#222]/60 rounded-full animate-pulse" />
                    <div className="flex-1 overflow-hidden">
                      <div className="flex gap-2">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-1/5 flex-shrink-0 px-1">
                            <div className="aspect-[4/3] bg-[#222]/60 rounded-md animate-pulse border border-[#D4A636]/10" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-[#222]/60 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Specs Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-[#222]/60 rounded-lg p-4 border border-[#D4A636]/10">
                      <div className="flex flex-col items-center text-center">
                        <Skeleton className="h-8 w-8 rounded-full mb-2 bg-[#333]/70" />
                        <Skeleton className="h-4 w-16 mb-2 bg-[#333]/70" />
                        <Skeleton className="h-5 w-24 bg-[#333]/70" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tabs Skeleton */}
                <div className="w-full mb-12">
                  <div className="flex w-full bg-[#222]/60 rounded-t-lg border border-[#D4A636]/10">
                    {[...Array(3)].map((_, i) => (
                      <Skeleton key={i} className="h-10 flex-1 rounded-none bg-[#333]/70" />
                    ))}
                  </div>
                  <div className="bg-[#222]/60 p-8 rounded-b-lg border border-[#D4A636]/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {[...Array(2)].map((_, i) => (
                        <div key={i}>
                          <Skeleton className="h-6 w-48 mb-6 bg-[#333]/70" />
                          <div className="space-y-4">
                            {[...Array(6)].map((_, j) => (
                              <div key={j} className="flex justify-between">
                                <Skeleton className="h-5 w-32 bg-[#333]/70" />
                                <Skeleton className="h-5 w-24 bg-[#333]/70" />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Call to Action Skeleton */}
                <div className="py-16 relative">
                  <div className="container mx-auto px-4 text-center">
                    <Skeleton className="h-10 w-3/4 mx-auto mb-6 bg-[#333]/70" />
                    <Skeleton className="h-6 w-2/3 mx-auto mb-8 bg-[#333]/70" />
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Skeleton className="h-10 w-40 mx-auto sm:mx-0 rounded-md bg-[#333]/70" />
                      <Skeleton className="h-10 w-40 mx-auto sm:mx-0 rounded-md bg-[#333]/70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    )
  }

  // Si no hay datos después de cargar, mostrar un mensaje de error
  if (!carData) {
    return (
      <main className="min-h-screen relative overflow-hidden flex items-center justify-center">
        {/* Fondo base con color gris oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#171717] to-[#0a0a0a]"></div>
        
        {/* Patrón de fibra de carbono */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0,0 L40,40 M0,40 L40,0' stroke='%23D4A636' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}>
        </div>
        
        {/* Efecto de luz central */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,166,54,0.15),transparent_70%)]"></div>
        
        <div className="text-center relative z-10">
          <h1 className="text-3xl font-bold mb-4 text-white">No se pudo cargar la información del vehículo</h1>
          <p className="text-xl mb-8 text-white/80">Por favor, inténtelo de nuevo más tarde.</p>
          <Link href="/cars">
            <Button className="bg-[#D4A636] hover:bg-[#D4A636]/80 text-white border-none">
              Ver otros vehículos
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  // Contenido principal cuando los datos están cargados
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Fondo base con color gris oscuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#171717] to-[#0a0a0a]"></div>
      
      {/* Patrón de fibra de carbono */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0,0 L40,40 M0,40 L40,0' stroke='%23D4A636' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}>
      </div>
      
      {/* Efecto de luz central */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,167,54,0.07),transparent_70%)]"></div>
      
      {/* Puntos de brillo */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, #D4A636 0%, transparent 0.5%),
                            radial-gradient(circle at 80% 40%, #D4A636 0%, transparent 0.5%),
                            radial-gradient(circle at 40% 70%, #D4A636 0%, transparent 0.5%),
                            radial-gradient(circle at 70% 20%, #D4A636 0%, transparent 0.5%),
                            radial-gradient(circle at 30% 50%, #D4A636 0%, transparent 0.5%),
                            radial-gradient(circle at 60% 80%, #D4A636 0%, transparent 0.5%)`,
          backgroundSize: '100% 100%'
        }}>
      </div>

      <div className="container mx-auto min-h-screen text-white px-2 2xl:px-32 relative z-10">
        <section className="py-12">
          <div className="container mx-auto">
            <div>
              {/* Back button */}
              <Link
                href="/cars"
                className="inline-flex items-center mb-6 text-white/80 hover:text-[#D4A636] transition-colors"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                <span>Volver a todos los vehículos</span>
              </Link>

              {/* Image Gallery */}
              <div className="mb-8">
                <Carousel images={carData.images} />
              </div>
              
              {/* Información del vehículo */}
              <div
                className="mb-8 bg-premium-gray-dark/80 rounded-xl border border-[#D4A636]/20 p-6 shadow-lg flex flex-wrap backdrop-blur-sm"
              >
                <div>
                  <Badge className="mb-4 bg-gradient-to-r from-[#D4A636] to-[#E2B94D] text-black border-none">
                    Vehículo Premium
                  </Badge>
                  <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{carData.name}</h1>
                  <p className="md:text-lg text-white/80 max-w-2xl">
                    Rendimiento excepcional, diseño impresionante y tecnología de vanguardia
                  </p>
                </div>
                <div className="flex w-full mt-8">
                  {carData.originalPrice && (
                    <div className="flex flex-col mt-2">
                      <Badge className="mt-1 bg-[#1A1A1A] text-[#D4A636] text-xl border border-[#D4A636]/30">
                        <Clock size={18} className="mr-2" />
                        Reservado
                      </Badge>
                    </div>
                  )}
                  <div className="flex flex-col ml-2 items-end w-full">
                    {carData.originalPrice && (
                      <p className="text-xl sm:text-2xl text-white/70 line-through">{carData.originalPrice.toLocaleString()} €</p>
                    )}
                    <p className="text-3xl sm:text-4xl font-bold text-[#D4A636]">{carData.price.toLocaleString()} €</p>
                  </div>
                </div>
              </div>

              {/* Especificaciones */}
              <div
                className="mb-12 bg-premium-gray-dark/80 rounded-xl border border-[#D4A636]/20 shadow-lg p-6 backdrop-blur-sm"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Motor */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-[#D4A636]/10 flex items-center justify-center flex-shrink-0">
                      <Engine className="h-6 w-6 text-[#D4A636]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Motor</p>
                      <p className="font-semibold text-white">{carData.engine}</p>
                    </div>
                  </div>

                  {/* Potencia */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-[#D4A636]/10 flex items-center justify-center flex-shrink-0">
                      <Gauge className="h-6 w-6 text-[#D4A636]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Potencia</p>
                      <p className="font-semibold text-white">{carData.power}</p>
                    </div>
                  </div>

                  {/* Año */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-[#D4A636]/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-[#D4A636]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Año</p>
                      <p className="font-semibold text-white">{carData.year}</p>
                    </div>
                  </div>

                  {/* Combustible */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-[#D4A636]/10 flex items-center justify-center flex-shrink-0">
                      <Fuel className="h-6 w-6 text-[#D4A636]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Combustible</p>
                      <p className="font-semibold text-white">{carData.fuel}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Tabs */}
              <div className="rounded-lg mb-12 border border-[#D4A636]/20 bg-[#1A1A1A]/80 backdrop-blur-sm shadow-lg">
                <Tabs defaultValue="specs" className="w-full">
                  <TabsList className="w-full bg-[#252525] rounded-b-none p-0 m-0 flex flex-wrap gap-1">
                    <TabsTrigger
                      value="specs"
                      className="font-bold h-full text-sm xl:text-base flex-1 data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-[#D4A636] data-[state=inactive]:bg-[#252525] data-[state=inactive]:text-white/70 data-[state=inactive]:hover:bg-[#2A2A2A] transition-all"
                    >
                      Especificaciones
                    </TabsTrigger>
                    <TabsTrigger
                      value="features"
                      className="font-bold h-full text-sm xl:text-base flex-1 data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-[#D4A636] data-[state=inactive]:bg-[#252525] data-[state=inactive]:text-white/70 data-[state=inactive]:hover:bg-[#2A2A2A] transition-all"
                    >
                      Características
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="specs" className="p-8 rounded-b-lg mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-">
                      <div className="md:col-span-2">
                        <h3 className="text-lg font-bold mb-6 text-[#D4A636]">Rendimiento</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm sm:text-base text-white/90">Aceleración 0-100 km/h</span>
                              <span className="text-sm sm:text-base font-medium">3.2 segundos</span>
                            </div>
                            <div className="w-full bg-[#252525] rounded-full h-2">
                              <RangeAnimation porcentaje={75} color="[#D4A636]" />
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm sm:text-base text-white/90">Velocidad máxima</span>
                              <span className="text-sm sm:text-base font-medium">315 km/h</span>
                            </div>
                            <div className="w-full bg-[#252525] rounded-full h-2">
                              <RangeAnimation porcentaje={95} color="[#D4A636]" />
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm sm:text-base text-white/90">Consumo combinado</span>
                              <span className="text-sm sm:text-base font-medium">12.5 l/100km</span>
                            </div>
                            <div className="w-full bg-[#252525] rounded-full h-2">
                              <RangeAnimation porcentaje={65} color="[#D4A636]" />
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm sm:text-base text-white/90">Emisiones CO2</span>
                              <span className="text-sm sm:text-base font-medium">284 g/km</span>
                            </div>
                            <div className="w-full bg-[#252525] rounded-full h-2">
                              <RangeAnimation porcentaje={20} color="[#D4A636]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-6 text-[#D4A636]">Motor y Transmisión</h3>
                        <ul className="space-y-5">
                          <li className="flex justify-between gap-3">
                            <span className="text-white/70">Tipo de Motor</span>
                            <span className="font-medium break-all text-right">V8 Biturbo</span>
                          </li>
                          <li className="flex justify-between gap-3">
                            <span className="text-white/70">Cilindrada</span>
                            <span className="font-medium break-all text-right">4.0 litros</span>
                          </li>
                          <li className="flex justify-between gap-3">
                            <span className="text-white/70">Potencia Máxima</span>
                            <span className="font-medium text-right">639 CV / 470 kW</span>
                          </li>
                          <li className="flex justify-between gap-3">
                            <span className="text-white/70">Par Máximo</span>
                            <span className="font-medium break-all text-right">900 Nm</span>
                          </li>
                          <li className="flex justify-between gap-3">
                            <span className="text-white/70">Transmisión</span>
                            <span className="font-medium break-all text-right">AMG SPEEDSHIFT 9G</span>
                          </li>
                          <li className="flex justify-between gap-3">
                            <span className="text-white/70">Tracción</span>
                            <span className="font-medium break-all text-right">4MATIC+ (Integral)</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-6 text-[#D4A636]">Dimensiones y Capacidades</h3>
                        <ul className="space-y-5">
                          <li className="flex justify-between">
                            <span className="text-white/70">Longitud</span>
                            <span className="font-medium">5.054 mm</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-white/70">Anchura</span>
                            <span className="font-medium">1.953 mm</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-white/70">Altura</span>
                            <span className="font-medium">1.447 mm</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-white/70">Distancia entre ejes</span>
                            <span className="font-medium">2.951 mm</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-white/70">Capacidad maletero</span>
                            <span className="font-medium">461 litros</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-white/70">Capacidad depósito</span>
                            <span className="font-medium">80 litros</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="p-8 rounded-b-lg mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <h3 className="text-lg font-semibold mb-6 text-[#D4A636]">Confort y Conveniencia</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start mb-3">
                            <Cog className="h-5 w-5 text-[#D4A636] mr-3 mt-0.5 flex-shrink-0" />
                            <span>Climatizador automático de 4 zonas</span>
                          </li>
                          <li className="flex items-start mb-3">
                            <Cog className="h-5 w-5 text-[#D4A636] mr-3 mt-0.5 flex-shrink-0" />
                            <span>Asientos delanteros eléctricos con memoria</span>
                          </li>
                          <li className="flex items-start mb-3">
                            <Cog className="h-5 w-5 text-[#D4A636] mr-3 mt-0.5 flex-shrink-0" />
                            <span>Asientos calefactados y ventilados</span>
                          </li>
                          <li className="flex items-start mb-3">
                            <Cog className="h-5 w-5 text-[#D4A636] mr-3 mt-0.5 flex-shrink-0" />
                            <span>Sistema de sonido Burmester® 3D High-End</span>
                          </li>
                          <li className="flex items-start mb-3">
                            <Cog className="h-5 w-5 text-[#D4A636] mr-3 mt-0.5 flex-shrink-0" />
                            <span>Techo panorámico eléctrico</span>
                          </li>
                        </ul>

                        <h3 className="text-lg font-semibold mb-6 mt-8 text-[#D4A636]">Tecnología</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start mb-3">
                            <Wifi className="h-5 w-5 text-[#D4A636] mr-3 mt-0.5 flex-shrink-0" />
                            <span>Sistema MBUX con pantalla táctil de 12.3"</span>
                          </li>
                          <li className="flex items-start mb-3">
                            <Wifi className="h-5 w-5 text-[#D4A636] mr-3 mt-0.5 flex-shrink-0" />
                            <span>Cuadro de instrumentos digital de 12.3"</span>
                          </li>
                          <li className="flex items-start mb-3">
                            <Wifi className="h-5 w-5 text-[#D4A636] mr-3 mt-0.5 flex-shrink-0" />
                            <span>Head-up Display con realidad aumentada</span>
                          </li>
                          <li className="flex items-start mb-3">
                            <Wifi className="h-5 w-5 text-[#D4A636] mr-3 mt-0.5 flex-shrink-0" />
                            <span>Cargador inalámbrico para smartphone</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-6 text-[#D4A636]">Seguridad</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start mb-3">
                            <Shield className="h-5 w-5 text-[#D4A636] mr-3 mt-0.5 flex-shrink-0" />
                            <span>Sistema de asistencia a la conducción Plus</span>
                          </li>
                          <li className="flex items-start mb-3">
                            <Shield className="h-5 w-5 text-[#D4A636] mr-3 mt-0.5 flex-shrink-0" />
                            <span>Control de crucero adaptativo DISTRONIC</span>
                          </li>
                          <li className="flex items-start mb-3">
                            <Shield className="h-5 w-5 text-[#D4A636] mr-3 mt-0.5 flex-shrink-0" />
                            <span>Asistente activo de mantenimiento de carril</span>
                          </li>
                          <li className="flex items-start mb-3">
                            <Shield className="h-5 w-5 text-[#D4A636] mr-3 mt-0.5 flex-shrink-0" />
                            <span>Asistente de frenado activo</span>
                          </li>
                          <li className="flex items-start mb-3">
                            <Shield className="h-5 w-5 text-[#D4A636] mr-3 mt-0.5 flex-shrink-0" />
                            <span>Sistema PRE-SAFE® Plus</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Call to Action */}
              <section className=" pt-8 pb-16">
                <div className="container mx-auto px-4 text-center bg-premium-gray-dark py-12 rounded-lg w-fit">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    ¿Interesado en este vehículo?
                  </h2>
                  <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                    Póngase en contacto con nuestro equipo de ventas para obtener más información sobre el Mercedes-AMG GT
                    63 o para programar una prueba de conducción.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="bg-gradient-to-r from-premium-red to-orange-500 hover:from-premium-red/90 hover:to-orange-500/90 text-white">
                      Contactar ahora
                    </Button>
                    <Button variant="outline" className="border-white text-black hover:bg-white/95">
                      Ver más vehículos
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

const RangeAnimation = ({ porcentaje }) => {
  const [width, setWidth] = useState(0); // Comienza con 0%

  useEffect(() => {
    // Iniciar la animación al cambiar el porcentaje
    const timer = setTimeout(() => {
      setWidth(porcentaje); // Después de 100ms, cambia el ancho al porcentaje deseado
    }, 10); // Le damos un pequeño retraso para asegurar que la animación se vea

    return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta
  }, [porcentaje]); // Cuando el porcentaje cambia, animamos el ancho

  return (
    <div
      className="bg-gradient-to-r from-premium-red to-orange-500 h-2 rounded-full transition-all duration-700"
      style={{ width: `${width}%` }} // El ancho cambia de 0 a porcentaje
    ></div>
  );
};
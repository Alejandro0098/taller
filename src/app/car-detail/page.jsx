// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"
// import { Skeleton } from "@/components/ui/skeleton"
// import {
//   ChevronLeft,
//   ChevronRight,
//   FuelIcon as Engine,
//   Gauge,
//   Calendar,
//   Fuel,
//   Cog,
//   Wifi,
//   Shield,
//   Sparkles,
//   Clock,
//   Car,
//   Banknote,
//   Phone,
//   Mail,
// } from "lucide-react"

// export default function CarDetailPage() {
//   const [currentImage, setCurrentImage] = useState(0)
//   const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0)
//   const [isLoading, setIsLoading] = useState(true)
//   const [carData, setCarData] = useState(null)

//   // Cargar los datos del coche desde el backend
//   useEffect(() => {
//     const fetchCarData = async () => {
//       try {
//         setIsLoading(true)
//         // Simular una petición al backend
//         // En un caso real, esto sería: const response = await fetch('/api/cars/mercedes-amg-gt-63')
//         await new Promise((resolve) => setTimeout(resolve, 2000)) // Simular tiempo de carga

//         // Datos de ejemplo
//         const mockData = {
//           id: "mercedes-amg-gt-63",
//           name: "Mercedes-AMG GT 63",
//           price: 169900,
//           originalPrice: 175000,
//           year: 2023,
//           engine: "V8 Biturbo",
//           power: "639 CV",
//           fuel: "Gasolina",
//           images: [
//             "/test-coche1.jpg",
//             "/test-imagen-2.jpg",
//             "/test-coche1.jpg",
//             "/test-coche1.jpg",
//             "/test-coche1.jpg",
//             "/test-coche1.jpg",
//             "/test-coche1.jpg",
//             "/test-coche1.jpg",
//           ],
//         }

//         setCarData(mockData)
//       } catch (error) {
//         console.error("Error fetching car data:", error)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     fetchCarData()
//   }, [])

//   // Funciones para navegar por las miniaturas
//   const scrollThumbnailsLeft = () => {
//     setThumbnailStartIndex((prev) => Math.max(0, prev - 1))
//   }

//   const scrollThumbnailsRight = () => {
//     if (!carData) return
//     setThumbnailStartIndex((prev) => Math.min(carData.images.length - 5, prev + 1))
//   }

//   // Función para manejar la selección directa de miniaturas
//   const handleThumbnailClick = (index) => {
//     setCurrentImage(index)
//   }

//   // Funciones para navegar por las imágenes
//   const nextImage = () => {
//     if (!carData) return
//     const newIndex = (currentImage + 1) % carData.images.length
//     setCurrentImage(newIndex)

//     // Asegurarse de que la miniatura seleccionada esté visible
//     if (newIndex < thumbnailStartIndex || newIndex >= thumbnailStartIndex + 5) {
//       setThumbnailStartIndex(Math.max(0, Math.min(carData.images.length - 5, newIndex - 2)))
//     }
//   }

//   const prevImage = () => {
//     if (!carData) return
//     const newIndex = (currentImage - 1 + carData.images.length) % carData.images.length
//     setCurrentImage(newIndex)

//     // Asegurarse de que la miniatura seleccionada esté visible
//     if (newIndex < thumbnailStartIndex || newIndex >= thumbnailStartIndex + 5) {
//       setThumbnailStartIndex(Math.max(0, Math.min(carData.images.length - 5, newIndex - 2)))
//     }
//   }

//   // Componente de carga
//   if (isLoading) {
//     return (
//       <main className="min-h-screen bg-premium-gray-dark text-white">
//         {/* Hero Section Skeleton */}
//         {/* <section className="relative h-[50vh] md:h-[70vh] w-full">
//           <div className="absolute inset-0 bg-premium-gray-medium animate-pulse" />
//           <div className="absolute inset-0 bg-gradient-to-t from-premium-black to-transparent" />
//           <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-16">
//             <div className="w-32 h-8 bg-premium-gray-light rounded-md mb-4 animate-pulse" />
//             <div className="w-3/4 h-12 bg-premium-gray-light rounded-md mb-4 animate-pulse" />
//             <div className="w-2/3 h-6 bg-premium-gray-light rounded-md animate-pulse" />
//           </div>
//         </section> */}

//         {/* Main Content Skeleton */}
//         <section className="py-12 bg-premium-gray-dark">
//           <div className="container mx-auto px-4">
//             <div>
//               {/* Image Gallery Skeleton */}
//               <div className="relative rounded-lg overflow-hidden bg-premium-gray-medium mb-8">
//                 <div className="relative aspect-[16/9]">
//                   <div className="w-full h-full bg-premium-gray-light animate-pulse" />
//                 </div>
//               </div>

//               {/* Thumbnails Skeleton */}
//               <div className="relative mb-8">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 bg-premium-gray-light rounded-full animate-pulse" />
//                   <div className="flex-1 overflow-hidden">
//                     <div className="flex gap-2">
//                       {[...Array(5)].map((_, i) => (
//                         <div key={i} className="w-1/5 flex-shrink-0 px-1">
//                           <div className="aspect-[4/3] bg-premium-gray-light rounded-md animate-pulse" />
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="w-10 h-10 bg-premium-gray-light rounded-full animate-pulse" />
//                 </div>
//               </div>

//               {/* Price Card Skeleton */}
//               <div className="bg-premium-gray-medium border-premium-gray-light rounded-lg mb-10 p-6">
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
//                   <Skeleton className="h-8 w-32" />
//                   <div className="text-left md:text-right">
//                     <Skeleton className="h-4 w-24 mb-2" />
//                     <Skeleton className="h-8 w-36" />
//                   </div>
//                 </div>

//                 <Skeleton className="h-px w-full my-6" />

//                 <div className="grid sm:grid-cols-3 gap-6 mb-6">
//                   {[...Array(3)].map((_, i) => (
//                     <div key={i} className="flex items-start">
//                       <Skeleton className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0 rounded-full" />
//                       <div className="w-full">
//                         <Skeleton className="h-5 w-3/4 mb-2" />
//                         <Skeleton className="h-4 w-full" />
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="grid sm:grid-cols-3 gap-3">
//                   {[...Array(3)].map((_, i) => (
//                     <Skeleton key={i} className="h-10 w-full rounded-md" />
//                   ))}
//                 </div>
//               </div>

//               {/* Quick Specs Skeleton */}
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
//                 {[...Array(4)].map((_, i) => (
//                   <div key={i} className="bg-premium-gray-medium border-premium-gray-light rounded-lg p-4">
//                     <div className="flex flex-col items-center text-center">
//                       <Skeleton className="h-8 w-8 rounded-full mb-2" />
//                       <Skeleton className="h-4 w-16 mb-2" />
//                       <Skeleton className="h-5 w-24" />
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Tabs Skeleton */}
//               <div className="w-full mb-12">
//                 <div className="flex w-full bg-premium-gray-medium rounded-t-lg">
//                   {[...Array(4)].map((_, i) => (
//                     <Skeleton key={i} className="h-10 flex-1 rounded-none" />
//                   ))}
//                 </div>
//                 <div className="bg-premium-gray-medium p-8 rounded-b-lg">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                     {[...Array(2)].map((_, i) => (
//                       <div key={i}>
//                         <Skeleton className="h-6 w-48 mb-6" />
//                         <div className="space-y-4">
//                           {[...Array(6)].map((_, j) => (
//                             <div key={j} className="flex justify-between">
//                               <Skeleton className="h-5 w-32" />
//                               <Skeleton className="h-5 w-24" />
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Related Cars Skeleton */}
//               <div className="py-16 bg-premium-black">
//                 <div className="container mx-auto px-4">
//                   <Skeleton className="h-8 w-64 mb-10" />
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {[...Array(3)].map((_, i) => (
//                       <div
//                         key={i}
//                         className="bg-premium-gray-medium border-premium-gray-light rounded-lg overflow-hidden"
//                       >
//                         <Skeleton className="h-48 w-full" />
//                         <div className="p-6">
//                           <Skeleton className="h-6 w-3/4 mb-2" />
//                           <Skeleton className="h-6 w-1/3 mb-4" />
//                           <div className="space-y-2 mb-4">
//                             {[...Array(3)].map((_, j) => (
//                               <Skeleton key={j} className="h-4 w-full" />
//                             ))}
//                           </div>
//                           <Skeleton className="h-10 w-full rounded-md" />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Call to Action Skeleton */}
//               <div className="py-16 bg-gradient-to-r from-premium-gray-dark to-premium-black">
//                 <div className="container mx-auto px-4 text-center">
//                   <Skeleton className="h-10 w-3/4 mx-auto mb-6" />
//                   <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
//                   <div className="flex flex-col sm:flex-row justify-center gap-4">
//                     <Skeleton className="h-10 w-40 mx-auto sm:mx-0 rounded-md" />
//                     <Skeleton className="h-10 w-40 mx-auto sm:mx-0 rounded-md" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     )
//   }

//   // Si no hay datos después de cargar, mostrar un mensaje de error
//   if (!carData) {
//     return (
//       <main className="min-h-screen bg-premium-gray-dark text-white flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold mb-4">No se pudo cargar la información del vehículo</h1>
//           <p className="text-xl mb-8">Por favor, inténtelo de nuevo más tarde.</p>
//           <Link href="/cars">
//             <Button>Ver otros vehículos</Button>
//           </Link>
//         </div>
//       </main>
//     )
//   }

//   // Contenido principal cuando los datos están cargados
//   return (
//     <main className="min-h-screen bg-premium-gray-dark text-white overflow-hidden">
//       {/* Hero Section */}
//       {/* <section className="relative h-[50vh] md:h-[70vh] w-full">
//         <Image
//           src="/placeholder.svg?height=800&width=1600&text=Mercedes-AMG GT 63"
//           alt={carData.name}
//           fill
//           className="object-cover brightness-75"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-premium-black to-transparent" />
//         <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-16">
//           <Badge className="mb-4 bg-premium-red text-white border-none">Vehículo Premium</Badge>
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{carData.name}</h1>
//           <p className="text-xl text-white/80 max-w-2xl">
//             Rendimiento excepcional, diseño impresionante y tecnología de vanguardia
//           </p>
//         </div>
//       </section> */}
//       {/* <section className="pt-24">
//         <div className="inset-0 bg-gradient-to-t from-premium-black to-transparent" />
//         <div className="inset-0 flex flex-col items-center justify-end text-center px-2 pb-16">
//           <Badge className="mb-4 bg-premium-red text-white border-none">Vehículo Premium</Badge>
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{carData.name}</h1>
//           <p className="text-xl text-white/80 max-w-2xl">
//             Rendimiento excepcional, diseño impresionante y tecnología de vanguardia
//           </p>
//         </div>
//       </section> */}

//       {/* Main Content */}
//       <section className="py-12 bg-premium-gray-dark overflow-hidden">
//         <div className="container mx-auto px-3">
//           <div>
//             {/* Image Gallery */}
//             <div className="relative rounded-lg overflow-hidden bg-premium-gray-medium mb-8">
//               <div className="relative aspect-[16/9] max-h-[700px] w-full flex justify-center">
//                 {/* <div className="absolute top-4 left-4 bg-premium-red text-white text-lg font-bold px-3 py-1 z-10 rounded-md">
//                   {currentImage + 1}/{carData.images.length}
//                 </div> */}
//                 <div className="w-full">
//                   <Image
//                     src={carData.images[currentImage] || "/placeholder.svg"}
//                     alt={`${carData.name} - Imagen ${currentImage + 1}`}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </div>

//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-premium-red focus:bg-premium-red bg-premium-red/80"
//                 onClick={prevImage}
//               >
//                 <ChevronLeft className="h-6 w-6 text-white" />
//               </Button>

//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-premium-red focus:bg-premium-red bg-premium-red/80"
//                 onClick={nextImage}
//               >
//                 <ChevronRight className="h-6 w-6 text-white" />
//               </Button>

//               {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-6">
//                 {carData.images.map((_, index) => (
//                   <button
//                     key={index}
//                     className={`w-3 h-3 rounded-full ${index === currentImage ? "bg-premium-red" : "bg-white/50"}`}
//                     onClick={() => handleThumbnailClick(index)}
//                   />
//                 ))}
//               </div> */}
//             </div>

//             {/* Thumbnails */}
//             <div className="relative mb-8">
//               <div className="flex items-center">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="bg-black/80 text-black hover:bg-black/80 focus:bg-black/80 active:bg-black/80 z-100 rounded-full h-6 w-6 mr-1"
//                   onClick={scrollThumbnailsLeft}
//                   disabled={thumbnailStartIndex === 0}
//                 >
//                   <ChevronLeft className="h-6 w-6 text-white" />
//                 </Button>

//                 <div className="flex-1 overflow-hidden">
//                   <div
//                     className="flex transition-transform duration-300 ease-in-out justify-evenly"
//                     style={{ transform: `translateX(-${thumbnailStartIndex * 20}%)` }}
//                   >
//                     {carData.images.map((image, index) => (
//                       <div key={index} className="w-1/5 flex-shrink-0 px-1">
//                         <div className="relative">
//                           {/* <div className="absolute top-0 left-0 bg-premium-red text-white text-xs font-bold px-2 py-1 z-10">
//                             {index + 1}
//                           </div> */}
//                           <button
//                             className={`relative aspect-[4/3] xl:aspect-[16/9] rounded-md overflow-hidden w-full ${index === currentImage ? "ring-2 ring-premium-red" : ""
//                               }`}
//                             onClick={() => handleThumbnailClick(index)}
//                           >
//                             <Image
//                               src={image || "/placeholder.svg"}
//                               alt={`Miniatura ${index + 1}`}
//                               fill
//                               className="object-contain"
//                             />
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="bg-black/80 text-black hover:bg-black/80 focus:bg-black/80 active:bg-black/80 z-100 rounded-full h-6 w-6 ml-1"
//                   onClick={scrollThumbnailsRight}
//                   disabled={thumbnailStartIndex >= carData.images.length - 5}
//                 >
//                   <ChevronRight className="h-6 w-6 text-white" />
//                 </Button>
//               </div>
//             </div>

//             {/* Price and CTA - Moved below carousel */}
//             <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-12">
//               <Card className="bg-premium-gray-medium border-premium-gray-light mb-5 h-full">
//                 <CardContent className="p-6 grid grid-rows-[1fr_auto_auto]">
//                   <div className="grid gap-4 md:gap-8 mb-4 px-3 grid-cols-[1fr] md:grid-cols-[1fr_auto] gap-4 align-center h-full">
//                     <h2 className="text-2xl xl:text-3xl font-bold text-white text-center md:text-left">{carData.name}</h2>
//                     <div className="text-center md:text-right">
//                       <p className="text-2xl xl:text-3xl font-bold text-premium-red">{carData.price.toLocaleString()} €</p>
//                     </div>
//                   </div>

//                   <Separator className="my-6 bg-premium-gray-light" />

//                   <div className="flex h-full justify-center  ">
//                     <div className="flex flex-col px-4 justify-center">
//                       <p className="text-white/80 mb-8 max-w-3xl mx-auto">
//                         ¿Estás interesado? Contacta con nosotros:
//                       </p>
//                       <div className="grid grid-cols-2 gap-4">
//                         <Button className="bg-green-600 hover:bg-green-700 text-white">Whatsapp</Button>
//                         <Button className="bg-blue-600 hover:bg-blue-700 text-white">
//                           Correo
//                         </Button>
//                       </div>
//                     </div>

//                     {/* <Button
//                     variant="outline"
//                     className="w-full border-premium-red text-premium-red hover:bg-premium-red/10"
//                   >
//                     Programar prueba de conducción
//                   </Button>

//                   <Button variant="ghost" className="w-full text-white hover:bg-white/10">
//                     Descargar ficha técnica
//                   </Button> */}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Quick Specs */}
//               <div className="grid grid-cols-2 h-full gap-4 mb-12">
//                 <Card className="bg-premium-gray-medium border-premium-gray-light">
//                   <CardContent className="p-4 flex flex-col items-center text-center">
//                     <Engine className="h-8 w-8 text-premium-red mb-2" />
//                     <p className="text-sm text-white/70">Motor</p>
//                     <p className="font-semibold text-white">{carData.engine}</p>
//                   </CardContent>
//                 </Card>

//                 <Card className="bg-premium-gray-medium border-premium-gray-light">
//                   <CardContent className="p-4 flex flex-col items-center text-center">
//                     <Gauge className="h-8 w-8 text-premium-red mb-2" />
//                     <p className="text-sm text-white/70">Potencia</p>
//                     <p className="font-semibold text-white">{carData.power}</p>
//                   </CardContent>
//                 </Card>

//                 <Card className="bg-premium-gray-medium border-premium-gray-light">
//                   <CardContent className="p-4 flex flex-col items-center text-center">
//                     <Calendar className="h-8 w-8 text-premium-red mb-2" />
//                     <p className="text-sm text-white/70">Año</p>
//                     <p className="font-semibold text-white">{carData.year}</p>
//                   </CardContent>
//                 </Card>

//                 <Card className="bg-premium-gray-medium border-premium-gray-light">
//                   <CardContent className="p-4 flex flex-col items-center text-center">
//                     <Fuel className="h-8 w-8 text-premium-red mb-2" />
//                     <p className="text-sm text-white/70">Combustible</p>
//                     <p className="font-semibold text-white">{carData.fuel}</p>
//                   </CardContent>
//                 </Card>
//               </div>

//             </div>
//             {/* Detailed Tabs */}
//             <Tabs defaultValue="specs" className="w-full mb-12">
//               <TabsList className="w-full bg-premium-gray-medium rounded-t rounded-b-none bg-black/20">
//                 <TabsTrigger className="flex-1 shadow-md hover:bg-white/20 hover:text-black" value="specs">
//                   Especificaciones
//                 </TabsTrigger>
//                 <TabsTrigger className="flex-1 shadow-md hover:bg-white/20 hover:text-black" value="features">
//                   Características
//                 </TabsTrigger>
//                 <TabsTrigger className="flex-1 shadow-md hover:bg-white/20 hover:text-black" value="performance">
//                   Rendimiento
//                 </TabsTrigger>
//                 {/* <TabsTrigger value="extras">
//                   Extras
//                 </TabsTrigger> */}
//               </TabsList>

//               <TabsContent value="specs" className="bg-premium-gray-medium p-8 rounded-b-lg mt-0">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                   <div>
//                     <h3 className="text-lg font-semibold mb-6 text-premium-red">Motor y Transmisión</h3>
//                     <ul className="space-y-4">
//                       <li className="flex justify-between">
//                         <span className="text-white/70">Tipo de Motor</span>
//                         <span className="font-medium">V8 Biturbo</span>
//                       </li>
//                       <li className="flex justify-between">
//                         <span className="text-white/70">Cilindrada</span>
//                         <span className="font-medium">4.0 litros</span>
//                       </li>
//                       <li className="flex justify-between">
//                         <span className="text-white/70">Potencia Máxima</span>
//                         <span className="font-medium">639 CV / 470 kW</span>
//                       </li>
//                       <li className="flex justify-between">
//                         <span className="text-white/70">Par Máximo</span>
//                         <span className="font-medium">900 Nm</span>
//                       </li>
//                       <li className="flex justify-between">
//                         <span className="text-white/70">Transmisión</span>
//                         <span className="font-medium">AMG SPEEDSHIFT 9G</span>
//                       </li>
//                       <li className="flex justify-between">
//                         <span className="text-white/70">Tracción</span>
//                         <span className="font-medium">4MATIC+ (Integral)</span>
//                       </li>
//                     </ul>
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-semibold mb-6 text-premium-red">Dimensiones y Capacidades</h3>
//                     <ul className="space-y-4">
//                       <li className="flex justify-between">
//                         <span className="text-white/70">Longitud</span>
//                         <span className="font-medium">5.054 mm</span>
//                       </li>
//                       <li className="flex justify-between">
//                         <span className="text-white/70">Anchura</span>
//                         <span className="font-medium">1.953 mm</span>
//                       </li>
//                       <li className="flex justify-between">
//                         <span className="text-white/70">Altura</span>
//                         <span className="font-medium">1.447 mm</span>
//                       </li>
//                       <li className="flex justify-between">
//                         <span className="text-white/70">Distancia entre ejes</span>
//                         <span className="font-medium">2.951 mm</span>
//                       </li>
//                       <li className="flex justify-between">
//                         <span className="text-white/70">Capacidad maletero</span>
//                         <span className="font-medium">461 litros</span>
//                       </li>
//                       <li className="flex justify-between">
//                         <span className="text-white/70">Capacidad depósito</span>
//                         <span className="font-medium">80 litros</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </TabsContent>

//               <TabsContent value="features" className="bg-premium-gray-medium p-8 rounded-b-lg mt-0">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                   <div>
//                     <h3 className="text-lg font-semibold mb-6 text-premium-red">Confort y Conveniencia</h3>
//                     <ul className="space-y-2">
//                       <li className="flex items-start mb-3">
//                         <Cog className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Climatizador automático de 4 zonas</span>
//                       </li>
//                       <li className="flex items-start mb-3">
//                         <Cog className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Asientos delanteros eléctricos con memoria</span>
//                       </li>
//                       <li className="flex items-start mb-3">
//                         <Cog className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Asientos calefactados y ventilados</span>
//                       </li>
//                       <li className="flex items-start mb-3">
//                         <Cog className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Asientos calefactados y ventilados</span>
//                       </li>
//                       <li className="flex items-start mb-3">
//                         <Cog className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Sistema de sonido Burmester® 3D High-End</span>
//                       </li>
//                       <li className="flex items-start mb-3">
//                         <Cog className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Techo panorámico eléctrico</span>
//                       </li>
//                     </ul>

//                     <h3 className="text-lg font-semibold mb-6 mt-8 text-premium-red">Tecnología</h3>
//                     <ul className="space-y-2">
//                       <li className="flex items-start mb-3">
//                         <Wifi className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Sistema MBUX con pantalla táctil de 12.3"</span>
//                       </li>
//                       <li className="flex items-start mb-3">
//                         <Wifi className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Cuadro de instrumentos digital de 12.3"</span>
//                       </li>
//                       <li className="flex items-start mb-3">
//                         <Wifi className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Head-up Display con realidad aumentada</span>
//                       </li>
//                       <li className="flex items-start mb-3">
//                         <Wifi className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Cargador inalámbrico para smartphone</span>
//                       </li>
//                     </ul>
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-semibold mb-6 text-premium-red">Seguridad</h3>
//                     <ul className="space-y-2">
//                       <li className="flex items-start mb-3">
//                         <Shield className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Sistema de asistencia a la conducción Plus</span>
//                       </li>
//                       <li className="flex items-start mb-3">
//                         <Shield className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Control de crucero adaptativo DISTRONIC</span>
//                       </li>
//                       <li className="flex items-start mb-3">
//                         <Shield className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Asistente activo de mantenimiento de carril</span>
//                       </li>
//                       <li className="flex items-start mb-3">
//                         <Shield className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Asistente de frenado activo</span>
//                       </li>
//                       <li className="flex items-start mb-3">
//                         <Shield className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Sistema PRE-SAFE® Plus</span>
//                       </li>
//                     </ul>

//                     <h3 className="text-lg font-semibold mb-6 mt-8 text-premium-red">Exterior</h3>
//                     <ul className="space-y-2">
//                       <li className="flex items-start mb-3">
//                         <Sparkles className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Faros MULTIBEAM LED con luces de carretera ULTRA RANGE</span>
//                       </li>
//                       <li className="flex items-start mb-3">
//                         <Sparkles className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Llantas AMG de 21" forjadas en negro mate</span>
//                       </li>
//                       <li className="flex items-start mb-3">
//                         <Sparkles className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Pintura metalizada Gris Selenita</span>
//                       </li>
//                       <li className="flex items-start mb-3">
//                         <Sparkles className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
//                         <span>Paquete exterior AMG Night</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </TabsContent>

//               <TabsContent value="performance" className="bg-premium-gray-medium p-8 rounded-b-lg mt-0">
//                 <div className="space-y-10">
//                   <div>
//                     <h3 className="text-lg font-semibold mb-6 text-premium-red">Rendimiento</h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                       <div className="space-y-3">
//                         <div className="flex justify-between items-center">
//                           <span className="text-white/70">Aceleración 0-100 km/h</span>
//                           <span className="font-medium">3.2 segundos</span>
//                         </div>
//                         <div className="w-full bg-premium-gray-light rounded-full h-2">
//                           <div className="bg-premium-red h-2 rounded-full" style={{ width: "90%" }}></div>
//                         </div>
//                       </div>

//                       <div className="space-y-3">
//                         <div className="flex justify-between items-center">
//                           <span className="text-white/70">Velocidad máxima</span>
//                           <span className="font-medium">315 km/h</span>
//                         </div>
//                         <div className="w-full bg-premium-gray-light rounded-full h-2">
//                           <div className="bg-premium-red h-2 rounded-full" style={{ width: "95%" }}></div>
//                         </div>
//                       </div>

//                       <div className="space-y-3">
//                         <div className="flex justify-between items-center">
//                           <span className="text-white/70">Consumo combinado</span>
//                           <span className="font-medium">12.5 l/100km</span>
//                         </div>
//                         <div className="w-full bg-premium-gray-light rounded-full h-2">
//                           <div className="bg-premium-red h-2 rounded-full" style={{ width: "65%" }}></div>
//                         </div>
//                       </div>

//                       <div className="space-y-3">
//                         <div className="flex justify-between items-center">
//                           <span className="text-white/70">Emisiones CO2</span>
//                           <span className="font-medium">284 g/km</span>
//                         </div>
//                         <div className="w-full bg-premium-gray-light rounded-full h-2">
//                           <div className="bg-premium-red h-2 rounded-full" style={{ width: "70%" }}></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-semibold mb-6 text-premium-red">Modos de Conducción</h3>
//                     <p className="mb-6">
//                       El Mercedes-AMG GT 63 cuenta con el sistema AMG DYNAMIC SELECT, que ofrece diferentes modos de
//                       conducción para adaptarse a cualquier situación:
//                     </p>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                       <Card className="bg-premium-gray-light border-premium-gray-medium">
//                         <CardContent className="p-4">
//                           <h4 className="font-semibold mb-2">Comfort</h4>
//                           <p className="text-sm text-white/70">
//                             Configuración equilibrada para el uso diario, con cambios de marcha suaves y respuesta del
//                             acelerador moderada.
//                           </p>
//                         </CardContent>
//                       </Card>

//                       <Card className="bg-premium-gray-light border-premium-gray-medium">
//                         <CardContent className="p-4">
//                           <h4 className="font-semibold mb-2">Sport</h4>
//                           <p className="text-sm text-white/70">
//                             Mayor respuesta del acelerador, cambios de marcha más rápidos y dirección más directa.
//                           </p>
//                         </CardContent>
//                       </Card>

//                       <Card className="bg-premium-gray-light border-premium-gray-medium">
//                         <CardContent className="p-4">
//                           <h4 className="font-semibold mb-2">Sport+</h4>
//                           <p className="text-sm text-white/70">
//                             Configuración deportiva con sonido del escape más potente y suspensión más firme.
//                           </p>
//                         </CardContent>
//                       </Card>

//                       <Card className="bg-premium-gray-light border-premium-gray-medium">
//                         <CardContent className="p-4">
//                           <h4 className="font-semibold mb-2">Race</h4>
//                           <p className="text-sm text-white/70">
//                             Configuración para uso en circuito con tiempos de respuesta mínimos y máxima precisión.
//                           </p>
//                         </CardContent>
//                       </Card>

//                       <Card className="bg-premium-gray-light border-premium-gray-medium">
//                         <CardContent className="p-4">
//                           <h4 className="font-semibold mb-2">Individual</h4>
//                           <p className="text-sm text-white/70">
//                             Permite personalizar cada parámetro según las preferencias del conductor.
//                           </p>
//                         </CardContent>
//                       </Card>

//                       <Card className="bg-premium-gray-light border-premium-gray-medium">
//                         <CardContent className="p-4">
//                           <h4 className="font-semibold mb-2">DRIFT</h4>
//                           <p className="text-sm text-white/70">
//                             Modo especial que permite realizar derrapes controlados en entornos adecuados.
//                           </p>
//                         </CardContent>
//                       </Card>
//                     </div>
//                   </div>
//                 </div>
//               </TabsContent>

//               <TabsContent value="extras" className="bg-premium-gray-medium p-8 rounded-b-lg mt-0">
//                 <div className="space-y-10">
//                   <div>
//                     <h3 className="text-lg font-semibold mb-6 text-premium-red">Paquetes Opcionales</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <Card className="bg-premium-gray-light border-premium-gray-medium">
//                         <CardContent className="p-6">
//                           <div className="flex justify-between items-start mb-4">
//                             <h4 className="text-lg font-semibold">Paquete AMG Night</h4>
//                             <Badge className="bg-premium-red">+ 3.200 €</Badge>
//                           </div>
//                           <p className="text-white/70 mb-4">
//                             Elementos exteriores en negro de alto brillo, incluyendo splitter delantero, inserciones en
//                             faldones laterales y difusor trasero.
//                           </p>
//                           <ul className="space-y-2">
//                             <li className="flex items-center">
//                               <span className="w-1.5 h-1.5 bg-premium-red rounded-full mr-2"></span>
//                               <span className="text-white/70">Carcasas de retrovisores en negro</span>
//                             </li>
//                             <li className="flex items-center">
//                               <span className="w-1.5 h-1.5 bg-premium-red rounded-full mr-2"></span>
//                               <span className="text-white/70">Salidas de escape en negro cromado</span>
//                             </li>
//                             <li className="flex items-center">
//                               <span className="w-1.5 h-1.5 bg-premium-red rounded-full mr-2"></span>
//                               <span className="text-white/70">Cristales traseros tintados</span>
//                             </li>
//                           </ul>
//                         </CardContent>
//                       </Card>

//                       <Card className="bg-premium-gray-light border-premium-gray-medium">
//                         <CardContent className="p-6">
//                           <div className="flex justify-between items-start mb-4">
//                             <h4 className="text-lg font-semibold">Paquete AMG Carbon Exterior</h4>
//                             <Badge className="bg-premium-red">+ 4.500 €</Badge>
//                           </div>
//                           <p className="text-white/70 mb-4">
//                             Elementos exteriores en fibra de carbono para un aspecto más deportivo y reducción de peso.
//                           </p>
//                           <ul className="space-y-2">
//                             <li className="flex items-center">
//                               <span className="w-1.5 h-1.5 bg-premium-red rounded-full mr-2"></span>
//                               <span className="text-white/70">Splitter delantero en fibra de carbono</span>
//                             </li>
//                             <li className="flex items-center">
//                               <span className="w-1.5 h-1.5 bg-premium-red rounded-full mr-2"></span>
//                               <span className="text-white/70">Difusor trasero en fibra de carbono</span>
//                             </li>
//                             <li className="flex items-center">
//                               <span className="w-1.5 h-1.5 bg-premium-red rounded-full mr-2"></span>
//                               <span className="text-white/70">Carcasas de retrovisores en fibra de carbono</span>
//                             </li>
//                           </ul>
//                         </CardContent>
//                       </Card>

//                       <Card className="bg-premium-gray-light border-premium-gray-medium">
//                         <CardContent className="p-6">
//                           <div className="flex justify-between items-start mb-4">
//                             <h4 className="text-lg font-semibold">Sistema de frenos cerámicos AMG</h4>
//                             <Badge className="bg-premium-red">+ 8.900 €</Badge>
//                           </div>
//                           <p className="text-white/70 mb-4">
//                             Sistema de frenos de alto rendimiento con discos cerámicos para una mayor potencia de
//                             frenado y resistencia a la fatiga.
//                           </p>
//                           <ul className="space-y-2">
//                             <li className="flex items-center">
//                               <span className="w-1.5 h-1.5 bg-premium-red rounded-full mr-2"></span>
//                               <span className="text-white/70">Discos cerámicos de 420 mm delanteros</span>
//                             </li>
//                             <li className="flex items-center">
//                               <span className="w-1.5 h-1.5 bg-premium-red rounded-full mr-2"></span>
//                               <span className="text-white/70">Discos cerámicos de 380 mm traseros</span>
//                             </li>
//                             <li className="flex items-center">
//                               <span className="w-1.5 h-1.5 bg-premium-red rounded-full mr-2"></span>
//                               <span className="text-white/70">Pinzas de freno en color dorado</span>
//                             </li>
//                           </ul>
//                         </CardContent>
//                       </Card>

//                       <Card className="bg-premium-gray-light border-premium-gray-medium">
//                         <CardContent className="p-6">
//                           <div className="flex justify-between items-start mb-4">
//                             <h4 className="text-lg font-semibold">Paquete Confort Térmico</h4>
//                             <Badge className="bg-premium-red">+ 1.200 €</Badge>
//                           </div>
//                           <p className="text-white/70 mb-4">
//                             Elementos calefactados para mayor confort en climas fríos.
//                           </p>
//                           <ul className="space-y-2">
//                             <li className="flex items-center">
//                               <span className="w-1.5 h-1.5 bg-premium-red rounded-full mr-2"></span>
//                               <span className="text-white/70">Volante calefactado</span>
//                             </li>
//                             <li className="flex items-center">
//                               <span className="w-1.5 h-1.5 bg-premium-red rounded-full mr-2"></span>
//                               <span className="text-white/70">Asientos traseros calefactados</span>
//                             </li>
//                             <li className="flex items-center">
//                               <span className="w-1.5 h-1.5 bg-premium-red rounded-full mr-2"></span>
//                               <span className="text-white/70">Reposabrazos calefactados</span>
//                             </li>
//                           </ul>
//                         </CardContent>
//                       </Card>
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-semibold mb-6 text-premium-red">Colores Exteriores</h3>
//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//                       <div className="text-center">
//                         <div
//                           className="w-full aspect-square rounded-full bg-premium-red border-2 border-white mx-auto mb-3"
//                           style={{ maxWidth: "80px" }}
//                         ></div>
//                         <h4 className="font-medium mb-1">Rojo Júpiter</h4>
//                         <p className="text-white/70">+ 2.500 €</p>
//                       </div>

//                       <div className="text-center">
//                         <div
//                           className="w-full aspect-square rounded-full bg-black border-2 border-white mx-auto mb-3"
//                           style={{ maxWidth: "80px" }}
//                         ></div>
//                         <h4 className="font-medium mb-1">Negro Obsidiana</h4>
//                         <p className="text-white/70">+ 1.800 €</p>
//                       </div>

//                       <div className="text-center">
//                         <div
//                           className="w-full aspect-square rounded-full bg-white border-2 border-premium-gray-light mx-auto mb-3"
//                           style={{ maxWidth: "80px" }}
//                         ></div>
//                         <h4 className="font-medium mb-1">Blanco Diamante</h4>
//                         <p className="text-white/70">+ 2.200 €</p>
//                       </div>

//                       <div className="text-center">
//                         <div
//                           className="w-full aspect-square rounded-full bg-gray-500 border-2 border-white mx-auto mb-3"
//                           style={{ maxWidth: "80px" }}
//                         ></div>
//                         <h4 className="font-medium mb-1">Gris Selenita</h4>
//                         <p className="text-white/70">+ 1.900 €</p>
//                       </div>

//                       <div className="text-center">
//                         <div
//                           className="w-full aspect-square rounded-full bg-blue-800 border-2 border-white mx-auto mb-3"
//                           style={{ maxWidth: "80px" }}
//                         ></div>
//                         <h4 className="font-medium mb-1">Azul Brillante</h4>
//                         <p className="text-white/70">+ 2.300 €</p>
//                       </div>

//                       <div className="text-center">
//                         <div
//                           className="w-full aspect-square rounded-full bg-green-800 border-2 border-white mx-auto mb-3"
//                           style={{ maxWidth: "80px" }}
//                         ></div>
//                         <h4 className="font-medium mb-1">Verde Esmeralda</h4>
//                         <p className="text-white/70">+ 2.700 €</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-semibold mb-6 text-premium-red">Llantas</h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                       <Card className="bg-premium-gray-light border-premium-gray-medium overflow-hidden">
//                         <div className="relative h-48 w-full">
//                           <Image
//                             src="/placeholder.svg?height=200&width=200&text=Llantas+19+pulgadas"
//                             alt="Llantas 19 pulgadas"
//                             fill
//                             className="object-cover"
//                           />
//                         </div>
//                         <CardContent className="p-4">
//                           <div className="flex justify-between items-start mb-2">
//                             <h4 className="font-medium">AMG 19" 5 radios</h4>
//                             <p className="text-white/70">Serie</p>
//                           </div>
//                         </CardContent>
//                       </Card>

//                       <Card className="bg-premium-gray-light border-premium-gray-medium overflow-hidden">
//                         <div className="relative h-48 w-full">
//                           <Image
//                             src="/placeholder.svg?height=200&width=200&text=Llantas+20+pulgadas"
//                             alt="Llantas 20 pulgadas"
//                             fill
//                             className="object-cover"
//                           />
//                         </div>
//                         <CardContent className="p-4">
//                           <div className="flex justify-between items-start mb-2">
//                             <h4 className="font-medium">AMG 20" multirradio</h4>
//                             <p className="text-white/70">+ 1.200 €</p>
//                           </div>
//                         </CardContent>
//                       </Card>

//                       <Card className="bg-premium-gray-light border-premium-gray-medium overflow-hidden">
//                         <div className="relative h-48 w-full">
//                           <Image
//                             src="/placeholder.svg?height=200&width=200&text=Llantas+21+pulgadas"
//                             alt="Llantas 21 pulgadas"
//                             fill
//                             className="object-cover"
//                           />
//                         </div>
//                         <CardContent className="p-4">
//                           <div className="flex justify-between items-start mb-2">
//                             <h4 className="font-medium">AMG 21" forjadas</h4>
//                             <p className="text-white/70">+ 2.800 €</p>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </div>
//                   </div>
//                 </div>
//               </TabsContent>
//             </Tabs>

//             {/* Related Cars */}
//             {/* <section className="py-16 bg-premium-black">
//               <div className="container mx-auto px-2">
//                 <h2 className="text-3xl font-bold mb-10 text-white">Vehículos relacionados</h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {[
//                     {
//                       name: "Mercedes-AMG GT 53",
//                       price: "129.900 €",
//                       image: "/placeholder.svg?height=300&width=500&text=AMG+GT+53",
//                       features: ["476 CV", "4.5s 0-100 km/h", "Tracción 4MATIC+"],
//                     },
//                     {
//                       name: "Mercedes-AMG GT 63 S",
//                       price: "189.900 €",
//                       image: "/placeholder.svg?height=300&width=500&text=AMG+GT+63+S",
//                       features: ["639 CV", "3.1s 0-100 km/h", "Drift Mode"],
//                     },
//                     {
//                       name: "Mercedes-AMG GT Black Series",
//                       price: "335.900 €",
//                       image: "/placeholder.svg?height=300&width=500&text=AMG+GT+Black+Series",
//                       features: ["730 CV", "3.2s 0-100 km/h", "Edición Limitada"],
//                     },
//                   ].map((car, index) => (
//                     <Card key={index} className="bg-premium-gray-medium border-premium-gray-light overflow-hidden">
//                       <div className="relative h-48 w-full">
//                         <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
//                       </div>
//                       <CardContent className="p-6">
//                         <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
//                         <p className="text-premium-red font-bold mb-4">{car.price}</p>
//                         <ul className="space-y-1 mb-4">
//                           {car.features.map((feature, i) => (
//                             <li key={i} className="text-sm text-white/70 flex items-center">
//                               <span className="w-1.5 h-1.5 bg-premium-red rounded-full mr-2"></span>
//                               {feature}
//                             </li>
//                           ))}
//                         </ul>
//                         <Link href="/car-detail">
//                           <Button
//                             variant="outline"
//                             className="w-full border-premium-red text-premium-red hover:bg-premium-red/10"
//                           >
//                             Ver detalles
//                           </Button>
//                         </Link>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </div>
//             </section> */}

//             {/* Call to Action */}
//             <section className="py-16 bg-gradient-to-r from-premium-gray-dark to-premium-black">
//               <div className="container mx-auto px-4 text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
//                   ¿Listo para experimentar la excelencia?
//                 </h2>
//                 <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
//                   Póngase en contacto con nuestro equipo de ventas para obtener más información sobre el Mercedes-AMG GT
//                   63 o para programar una prueba de conducción.
//                 </p>
//                 <div className="flex flex-col sm:flex-row justify-center gap-4">
//                   <Button className="bg-premium-red hover:bg-premium-red/90 text-white">Contactar ahora</Button>
//                   <Button variant="outline" className="border-white text-black hover:bg-white/10">
//                     Ver más vehículos
//                   </Button>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
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
        await new Promise((resolve) => setTimeout(resolve, 2000)) // Simular tiempo de carga

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
            "/test-coche1.jpg",
            "/test-imagen-2.jpg",
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
      <main className="min-h-screen bg-premium-gray-dark text-white">
        {/* Hero Section Skeleton */}
        <section className="relative h-[50vh] md:h-[70vh] w-full">
          <div className="absolute inset-0 bg-premium-gray-medium animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-t from-premium-black to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-16">
            <div className="w-32 h-8 bg-premium-gray-light rounded-md mb-4 animate-pulse" />
            <div className="w-3/4 h-12 bg-premium-gray-light rounded-md mb-4 animate-pulse" />
            <div className="w-2/3 h-6 bg-premium-gray-light rounded-md animate-pulse" />
          </div>
        </section>

        {/* Main Content Skeleton */}
        <section className="py-12 bg-premium-gray-dark">
          <div className="container mx-auto px-4">
            <div>
              {/* Back button skeleton */}
              <div className="mb-6">
                <Skeleton className="h-10 w-32" />
              </div>

              {/* Image Gallery Skeleton */}
              <div className="relative rounded-lg overflow-hidden bg-premium-gray-medium mb-8">
                <div className="relative aspect-[16/9]">
                  <div className="w-full h-full bg-premium-gray-light animate-pulse" />
                </div>
              </div>

              {/* Thumbnails Skeleton */}
              <div className="relative mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-premium-gray-light rounded-full animate-pulse" />
                  <div className="flex-1 overflow-hidden">
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1/5 flex-shrink-0 px-1">
                          <div className="aspect-[4/3] bg-premium-gray-light rounded-md animate-pulse" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-premium-gray-light rounded-full animate-pulse" />
                </div>
              </div>

              {/* Specs Skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="bg-premium-gray-medium border-premium-gray-light rounded-lg p-4">
                    <div className="flex flex-col items-center text-center">
                      <Skeleton className="h-8 w-8 rounded-full mb-2" />
                      <Skeleton className="h-4 w-16 mb-2" />
                      <Skeleton className="h-5 w-24" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tabs Skeleton */}
              <div className="w-full mb-12">
                <div className="flex w-full bg-premium-gray-medium rounded-t-lg">
                  {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-10 flex-1 rounded-none" />
                  ))}
                </div>
                <div className="bg-premium-gray-medium p-8 rounded-b-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[...Array(2)].map((_, i) => (
                      <div key={i}>
                        <Skeleton className="h-6 w-48 mb-6" />
                        <div className="space-y-4">
                          {[...Array(6)].map((_, j) => (
                            <div key={j} className="flex justify-between">
                              <Skeleton className="h-5 w-32" />
                              <Skeleton className="h-5 w-24" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Cars Skeleton */}
              <div className="py-16 bg-premium-black">
                <div className="container mx-auto px-4">
                  <Skeleton className="h-8 w-64 mb-10" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-premium-gray-medium border-premium-gray-light rounded-lg overflow-hidden"
                      >
                        <Skeleton className="h-48 w-full" />
                        <div className="p-6">
                          <Skeleton className="h-6 w-3/4 mb-2" />
                          <Skeleton className="h-6 w-1/3 mb-4" />
                          <div className="space-y-2 mb-4">
                            {[...Array(3)].map((_, j) => (
                              <Skeleton key={j} className="h-4 w-full" />
                            ))}
                          </div>
                          <Skeleton className="h-10 w-full rounded-md" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to Action Skeleton */}
              <div className="py-16 bg-gradient-to-r from-premium-gray-dark to-premium-black">
                <div className="container mx-auto px-4 text-center">
                  <Skeleton className="h-10 w-3/4 mx-auto mb-6" />
                  <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Skeleton className="h-10 w-40 mx-auto sm:mx-0 rounded-md" />
                    <Skeleton className="h-10 w-40 mx-auto sm:mx-0 rounded-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  // Si no hay datos después de cargar, mostrar un mensaje de error
  if (!carData) {
    return (
      <main className="min-h-screen bg-premium-gray-dark text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">No se pudo cargar la información del vehículo</h1>
          <p className="text-xl mb-8">Por favor, inténtelo de nuevo más tarde.</p>
          <Link href="/cars">
            <Button>Ver otros vehículos</Button>
          </Link>
        </div>
      </main>
    )
  }

  // Contenido principal cuando los datos están cargados
  return (
    <main className="min-h-screen bg-premium-gray-dark text-white">
      {/* Hero Section */}
      {/* <section className="relative h-[50vh] md:h-[70vh] w-full">
        <Image
          src="/placeholder.svg?height=800&width=1600&text=Mercedes-AMG GT 63"
          alt={carData.name}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-premium-black to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-16">
          <Badge className="mb-4 bg-gradient-to-r from-premium-red to-orange-500 text-white border-none">
            Vehículo Premium
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{carData.name}</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Rendimiento excepcional, diseño impresionante y tecnología de vanguardia
          </p>
        </div>
      </section> */}

      {/* Main Content */}
      <section className="py-12 bg-premium-gray-dark">
        <div className="container mx-auto px-4">
          <div>
            {/* Back button */}
            <Link
              href="/cars"
              className="inline-flex items-center mb-6 text-white/80 hover:text-premium-red transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              <span>Volver a todos los vehículos</span>
            </Link>

            {/* Alternativa para mostrar el nombre del coche sin imagen de fondo */}
            <div className="mb-8 bg-gradient-to-r from-premium-gray-medium/80 to-premium-gray-dark/80 rounded-xl border border-premium-gray-light/30 p-6 shadow-lg">
              <Badge className="mb-2 bg-gradient-to-r from-premium-red to-orange-500 text-white border-none">
                Vehículo Premium
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{carData.name}</h1>
              <p className="text-lg text-white/80 max-w-2xl">
                Rendimiento excepcional, diseño impresionante y tecnología de vanguardia
              </p>
            </div>

            {/* Image Gallery */}
            <div className="relative rounded-lg overflow-hidden bg-premium-gray-medium mb-8 mx-auto lg:max-w-[90%]" >
              <div className="relative aspect-[16/9] md:aspect-[16/8] lg:aspect-[16/9]">
                <div className="absolute top-4 left-4 bg-gradient-to-r from-premium-red to-orange-500 text-white text-lg font-bold px-3 py-1 z-10 rounded-md">
                  {currentImage + 1}/{carData.images.length}
                </div>
                <Image
                  src={carData.images[currentImage] || "/placeholder.svg"}
                  alt={`${carData.name} - Imagen ${currentImage + 1}`}
                  fill
                  className="object-contain object-center"
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {carData.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === currentImage ? "bg-premium-red" : "bg-white/50"}`}
                    onClick={() => handleThumbnailClick(index)}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="relative mb-8 mx-auto max-w-6xl">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-black/50 text-white hover:bg-black/70 z-10"
                  onClick={scrollThumbnailsLeft}
                  disabled={thumbnailStartIndex === 0}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <div className="flex-1 overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${thumbnailStartIndex * 20}%)` }}
                  >
                    {carData.images.map((image, index) => (
                      <div key={index} className="w-1/5 flex-shrink-0 px-1">
                        <div className="relative">
                          <div className="absolute top-0 left-0 bg-gradient-to-r from-premium-red to-orange-500 text-white text-xs font-bold px-2 py-1 z-10">
                            {index + 1}
                          </div>
                          <button
                            className={`relative aspect-[4/3] rounded-md overflow-hidden w-full ${index === currentImage ? "ring-2 ring-premium-red" : ""
                              }`}
                            onClick={() => handleThumbnailClick(index)}
                          >
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Miniatura ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-black/50 text-white hover:bg-black/70 z-10"
                  onClick={scrollThumbnailsRight}
                  disabled={thumbnailStartIndex >= carData.images.length - 5}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Nombre, Precio y Contacto - Contenedor separado */}
            <div className="">

              <div className="lg:px-16 mb-6 bg-gradient-to-br from-premium-gray-medium/50 to-premium-gray-dark/50 rounded-xl overflow-hidden border border-premium-gray-light/30 shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  {/* Nombre del coche */}
                  <div className="md:max-w-[60%]">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{carData.name}</h2>
                    <div className="h-1 w-16 bg-premium-red my-2"></div>
                  </div>

                  {/* Precio */}
                  <div className="flex flex-col items-start md:items-end">
                    <p className="text-lg font-semibold text-white/80">Precio</p>
                    {carData.originalPrice && (
                      <p className="text-sm text-white/70 line-through">{carData.originalPrice.toLocaleString()} €</p>
                    )}
                    <p className="text-3xl font-bold text-premium-red">{carData.price.toLocaleString()} €</p>
                    {/* {carData.originalPrice && (
                      <Badge className="mt-1 bg-gradient-to-r from-amber-500 to-yellow-400 text-white">
                        <Percent className="h-3 w-3 mr-1" /> Ahorra{" "}
                        {(((carData.originalPrice - carData.price) / carData.originalPrice) * 100).toFixed(0)}%
                      </Badge>
                    )} */}
                  </div>
                </div>

                {/* Botón de contacto - siempre abajo */}
                {/* <div className="mt-6 md:mt-8">
                  <Button className="w-full md:max-w-xs bg-gradient-to-r from-premium-red to-orange-500 hover:from-premium-red/90 hover:to-orange-500/90 text-white">
                    <PhoneCall className="h-4 w-4 mr-2" /> Contactar ahora
                  </Button>
                </div> */}
              </div>

            </div>
            {/* Especificaciones - Contenedor separado */}
            <div className="mb-12 bg-gradient-to-br from-premium-gray-medium/50 to-premium-gray-dark/50 rounded-xl overflow-hidden border border-premium-gray-light/30 shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-white">Especificaciones</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Motor */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-premium-red/10 flex items-center justify-center flex-shrink-0">
                    <Engine className="h-6 w-6 text-premium-red" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Motor</p>
                    <p className="font-semibold text-white">{carData.engine}</p>
                  </div>
                </div>

                {/* Potencia */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Gauge className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Potencia</p>
                    <p className="font-semibold text-white">{carData.power}</p>
                  </div>
                </div>

                {/* Año */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Año</p>
                    <p className="font-semibold text-white">{carData.year}</p>
                  </div>
                </div>

                {/* Combustible */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Fuel className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Combustible</p>
                    <p className="font-semibold text-white">{carData.fuel}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Tabs - Mejoradas */}
            <Tabs defaultValue="specs" className="w-full mb-12">
              <TabsList className="w-full bg-premium-gray-medium">
                <TabsTrigger
                  value="specs"
                  className="flex-1 data-[state=inactive]:bg-premium-gray-dark/40 data-[state=inactive]:text-white/70 data-[state=inactive]:hover:bg-premium-gray-dark/60 transition-all"
                >
                  Especificaciones
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="flex-1 data-[state=inactive]:bg-premium-gray-dark/40 data-[state=inactive]:text-white/70 data-[state=inactive]:hover:bg-premium-gray-dark/60 transition-all"
                >
                  Características
                </TabsTrigger>
                <TabsTrigger
                  value="performance"
                  className="flex-1 data-[state=inactive]:bg-premium-gray-dark/40 data-[state=inactive]:text-white/70 data-[state=inactive]:hover:bg-premium-gray-dark/60 transition-all"
                >
                  Rendimiento
                </TabsTrigger>
              </TabsList>

              <TabsContent value="specs" className="bg-premium-gray-medium p-8 rounded-b-lg mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-lg font-semibold mb-6 text-premium-red">Motor y Transmisión</h3>
                    <ul className="space-y-4">
                      <li className="flex justify-between">
                        <span className="text-white/70">Tipo de Motor</span>
                        <span className="font-medium">V8 Biturbo</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/70">Cilindrada</span>
                        <span className="font-medium">4.0 litros</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/70">Potencia Máxima</span>
                        <span className="font-medium">639 CV / 470 kW</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/70">Par Máximo</span>
                        <span className="font-medium">900 Nm</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/70">Transmisión</span>
                        <span className="font-medium">AMG SPEEDSHIFT 9G</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/70">Tracción</span>
                        <span className="font-medium">4MATIC+ (Integral)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-6 text-premium-red">Dimensiones y Capacidades</h3>
                    <ul className="space-y-4">
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

              <TabsContent value="features" className="bg-premium-gray-medium p-8 rounded-b-lg mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-lg font-semibold mb-6 text-premium-red">Confort y Conveniencia</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start mb-3">
                        <Cog className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Climatizador automático de 4 zonas</span>
                      </li>
                      <li className="flex items-start mb-3">
                        <Cog className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Asientos delanteros eléctricos con memoria</span>
                      </li>
                      <li className="flex items-start mb-3">
                        <Cog className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Asientos calefactados y ventilados</span>
                      </li>
                      <li className="flex items-start mb-3">
                        <Cog className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Sistema de sonido Burmester® 3D High-End</span>
                      </li>
                      <li className="flex items-start mb-3">
                        <Cog className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Techo panorámico eléctrico</span>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-6 mt-8 text-premium-red">Tecnología</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start mb-3">
                        <Wifi className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Sistema MBUX con pantalla táctil de 12.3"</span>
                      </li>
                      <li className="flex items-start mb-3">
                        <Wifi className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Cuadro de instrumentos digital de 12.3"</span>
                      </li>
                      <li className="flex items-start mb-3">
                        <Wifi className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Head-up Display con realidad aumentada</span>
                      </li>
                      <li className="flex items-start mb-3">
                        <Wifi className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Cargador inalámbrico para smartphone</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-6 text-premium-red">Seguridad</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start mb-3">
                        <Shield className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Sistema de asistencia a la conducción Plus</span>
                      </li>
                      <li className="flex items-start mb-3">
                        <Shield className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Control de crucero adaptativo DISTRONIC</span>
                      </li>
                      <li className="flex items-start mb-3">
                        <Shield className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Asistente activo de mantenimiento de carril</span>
                      </li>
                      <li className="flex items-start mb-3">
                        <Shield className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Asistente de frenado activo</span>
                      </li>
                      <li className="flex items-start mb-3">
                        <Shield className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Sistema PRE-SAFE® Plus</span>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-6 mt-8 text-premium-red">Exterior</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start mb-3">
                        <Sparkles className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Faros MULTIBEAM LED con luces de carretera ULTRA RANGE</span>
                      </li>
                      <li className="flex items-start mb-3">
                        <Sparkles className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Llantas AMG de 21" forjadas en negro mate</span>
                      </li>
                      <li className="flex items-start mb-3">
                        <Sparkles className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Pintura metalizada Gris Selenita</span>
                      </li>
                      <li className="flex items-start mb-3">
                        <Sparkles className="h-5 w-5 text-premium-red mr-3 mt-0.5 flex-shrink-0" />
                        <span>Paquete exterior AMG Night</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="performance" className="bg-premium-gray-medium p-8 rounded-b-lg mt-0">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-lg font-semibold mb-6 text-premium-red">Rendimiento</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white/70">Aceleración 0-100 km/h</span>
                          <span className="font-medium">3.2 segundos</span>
                        </div>
                        <div className="w-full bg-premium-gray-light rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-premium-red to-orange-500 h-2 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white/70">Velocidad máxima</span>
                          <span className="font-medium">315 km/h</span>
                        </div>
                        <div className="w-full bg-premium-gray-light rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-premium-red to-orange-500 h-2 rounded-full"
                            style={{ width: "95%" }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white/70">Consumo combinado</span>
                          <span className="font-medium">12.5 l/100km</span>
                        </div>
                        <div className="w-full bg-premium-gray-light rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-premium-red to-orange-500 h-2 rounded-full"
                            style={{ width: "65%" }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white/70">Emisiones CO2</span>
                          <span className="font-medium">284 g/km</span>
                        </div>
                        <div className="w-full bg-premium-gray-light rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-premium-red to-orange-500 h-2 rounded-full"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-6 text-premium-red">Modos de Conducción</h3>
                    <p className="mb-6">
                      El Mercedes-AMG GT 63 cuenta con el sistema AMG DYNAMIC SELECT, que ofrece diferentes modos de
                      conducción para adaptarse a cualquier situación:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      <Card className="bg-premium-gray-light border-premium-gray-medium">
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-2">Comfort</h4>
                          <p className="text-sm text-white/70">
                            Configuración equilibrada para el uso diario, con cambios de marcha suaves y respuesta del
                            acelerador moderada.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-premium-gray-light border-premium-gray-medium">
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-2">Sport</h4>
                          <p className="text-sm text-white/70">
                            Mayor respuesta del acelerador, cambios de marcha más rápidos y dirección más directa.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-premium-gray-light border-premium-gray-medium">
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-2">Sport+</h4>
                          <p className="text-sm text-white/70">
                            Configuración deportiva con sonido del escape más potente y suspensión más firme.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-premium-gray-light border-premium-gray-medium">
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-2">Race</h4>
                          <p className="text-sm text-white/70">
                            Configuración para uso en circuito con tiempos de respuesta mínimos y máxima precisión.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-premium-gray-light border-premium-gray-medium">
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-2">Individual</h4>
                          <p className="text-sm text-white/70">
                            Permite personalizar cada parámetro según las preferencias del conductor.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-premium-gray-light border-premium-gray-medium">
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-2">DRIFT</h4>
                          <p className="text-sm text-white/70">
                            Modo especial que permite realizar derrapes controlados en entornos adecuados.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Related Cars */}
            <section className="py-16 bg-premium-black">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 text-white">Vehículos relacionados</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Mercedes-AMG GT 53",
                      price: "129.900 €",
                      image: "/placeholder.svg?height=300&width=500&text=AMG+GT+53",
                      features: ["476 CV", "4.5s 0-100 km/h", "Tracción 4MATIC+"],
                      color: "from-cyan-500 to-blue-600",
                    },
                    {
                      name: "Mercedes-AMG GT 63 S",
                      price: "189.900 €",
                      image: "/placeholder.svg?height=300&width=500&text=AMG+GT+63+S",
                      features: ["639 CV", "3.1s 0-100 km/h", "Drift Mode"],
                      color: "from-premium-red to-orange-500",
                    },
                    {
                      name: "Mercedes-AMG GT Black Series",
                      price: "335.900 €",
                      image: "/placeholder.svg?height=300&width=500&text=AMG+GT+Black+Series",
                      features: ["730 CV", "3.2s 0-100 km/h", "Edición Limitada"],
                      color: "from-amber-500 to-yellow-400",
                    },
                  ].map((car, index) => (
                    <Card
                      key={index}
                      className="bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark border-premium-gray-light overflow-hidden group hover:shadow-[0_0_15px_rgba(229,62,62,0.3)] transition-all duration-300 flex flex-col"
                    >
                      <div className={`h-1 w-full bg-gradient-to-r ${car.color}`}></div>
                      <div className="relative h-48 w-full">
                        <Image
                          src={car.image || "/placeholder.svg"}
                          alt={car.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                        <p className="text-premium-red font-bold mb-4">{car.price}</p>
                        <ul className="space-y-1 mb-4 flex-grow">
                          {car.features.map((feature, i) => (
                            <li key={i} className="text-sm text-white/70 flex items-center">
                              <span className="w-1.5 h-1.5 bg-premium-red rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link href="/car-detail">
                          <Button
                            variant="outline"
                            className={`w-full border-transparent bg-gradient-to-r ${car.color} text-white hover:opacity-90`}
                          >
                            Ver detalles
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-premium-gray-dark to-premium-black">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  ¿Listo para experimentar la excelencia?
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                  Póngase en contacto con nuestro equipo de ventas para obtener más información sobre el Mercedes-AMG GT
                  63 o para programar una prueba de conducción.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-gradient-to-r from-premium-red to-orange-500 hover:from-premium-red/90 hover:to-orange-500/90 text-white">
                    Contactar ahora
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Ver más vehículos
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}


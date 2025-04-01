import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Truck, Clock, Shield, Wrench, CheckCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function TowTruckPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#1a1a2e] to-[#1a1a2e]/90 text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        {/* <Image
          src="/placeholder.svg?height=500&width=1600"
          alt="Tow truck service"
          fill
          className="object-cover brightness-75"
          priority
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-premium-blue-900/70 to-transparent/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-none">
            Servicio Premium
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Servicio de Grúas</h1>
          <p className="text-xl text-white/80 max-w-2xl">Transporte seguro y profesional para su vehículo</p>
        </div>
      </section>

      <section className="py-16 relative">
        {/* Patrón de fondo sutil */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-xl sm:text-3xl font-bold mb-6 text-white flex items-center">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-2 rounded-full mr-3">
                  <Truck className="h-6 w-6" />
                </span>
                Solicite Nuestro Servicio de Grúas
              </h2>
              <p className="text-white/70 mb-6">
                Ofrecemos un servicio de transporte de vehículos profesional y seguro. Ya sea que necesite transportar
                un coche recién adquirido o mover un vehículo para mantenimiento, nuestra flota de grúas modernas está a
                su disposición.
              </p>
              <div className="space-y-6 flex flex-col">
                <div className="relative h-auto max-w-xl w-full self-center rounded-lg overflow-hidden shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                  <img
                    src="/grua.jpg"
                    alt="Tow truck service"
                    className="object-contain"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">

                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Nuestros Servicios Incluyen:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark border-premium-gray-light">
                    <CardContent className="p-4 flex items-start">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-full mr-3 flex-shrink-0">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Servicio 24/7</h4>
                        <p className="text-sm text-white/70">Disponibles todos los días del año</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark border-premium-gray-light">
                    <CardContent className="p-4 flex items-start">
                      <div className="bg-gradient-to-r from-amber-500 to-yellow-400 p-2 rounded-full mr-3 flex-shrink-0">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Seguro Incluido</h4>
                        <p className="text-sm text-white/70">Protección total durante el transporte</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark border-premium-gray-light">
                    <CardContent className="p-4 flex items-start">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-2 rounded-full mr-3 flex-shrink-0">
                        <Wrench className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Asistencia Técnica</h4>
                        <p className="text-sm text-white/70">Mecánicos especializados disponibles</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark border-premium-gray-light">
                    <CardContent className="p-4 flex items-start">
                      <div className="bg-gradient-to-r from-premium-red to-orange-500 p-2 rounded-full mr-3 flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Vehículos Especiales</h4>
                        <p className="text-sm text-white/70">Transporte para coches de lujo y clásicos</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-premium-gray-dark to-[#1a1a2e] border border-premium-gray-light rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-400 p-2 rounded-full mr-3 flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Importante</h4>
                      <p className="text-sm text-white/70">
                        Para servicios de emergencia, llame directamente a nuestro número de asistencia:
                        <span className="text-amber-500 font-bold ml-1">+34 900 123 456</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="w-full bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark border-premium-gray-light overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                  <Truck className="h-5 w-5 text-cyan-500 mr-2" />
                  Formulario de Solicitud
                </h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Nombre Completo
                    </Label>
                    <Input
                      id="name"
                      placeholder="Introduzca su nombre completo"
                      className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Correo Electrónico
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ejemplo@correo.com"
                        className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-cyan-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+34 600 000 000"
                        className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicle-type" className="text-white">
                      Tipo de Vehículo
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="vehicle-type"
                        className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-cyan-500"
                      >
                        <SelectValue placeholder="Seleccione el tipo de vehículo" />
                      </SelectTrigger>
                      <SelectContent className="bg-premium-gray-medium border-premium-gray-light text-white">
                        <SelectItem value="sedan">Sedán</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="sports">Deportivo</SelectItem>
                        <SelectItem value="classic">Clásico</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pickup-location" className="text-white">
                        Ubicación de Recogida
                      </Label>
                      <Input
                        id="pickup-location"
                        placeholder="Dirección de recogida"
                        className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-cyan-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="delivery-location" className="text-white">
                        Ubicación de Entrega
                      </Label>
                      <Input
                        id="delivery-location"
                        placeholder="Dirección de entrega"
                        className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pickup-date" className="text-white">
                        Fecha de Recogida
                      </Label>
                      <Input
                        id="pickup-date"
                        type="date"
                        className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-cyan-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pickup-time" className="text-white">
                        Hora Preferida
                      </Label>
                      <Select>
                        <SelectTrigger
                          id="pickup-time"
                          className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-cyan-500"
                        >
                          <SelectValue placeholder="Seleccione hora" />
                        </SelectTrigger>
                        <SelectContent className="bg-premium-gray-medium border-premium-gray-light text-white">
                          <SelectItem value="morning">Mañana (8:00 - 12:00)</SelectItem>
                          <SelectItem value="afternoon">Tarde (12:00 - 17:00)</SelectItem>
                          <SelectItem value="evening">Noche (17:00 - 20:00)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additional-info" className="text-white">
                      Información Adicional
                    </Label>
                    <Textarea
                      id="additional-info"
                      placeholder="Proporcione cualquier detalle adicional sobre su vehículo o requisitos especiales"
                      rows={4}
                      className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-cyan-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                  >
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}


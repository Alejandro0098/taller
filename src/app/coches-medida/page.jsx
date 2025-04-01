import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Globe, Plane, FileText, DollarSign, Award } from "lucide-react"
import Image from "next/image"
import CraneRentalForm from '../../components/FormComponent'

export default function CustomImportPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-premium-gray-dark/90 to-[#1a1a2e] text-white">
      {/* <CraneRentalForm /> */}
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        {/* <Image
          src="/placeholder.svg?height=500&width=1600"
          alt="Custom car import"
          fill
          className="object-cover brightness-75"
          priority
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-700 via-premium-yellow-900/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-white border-none">
            Servicio Exclusivo
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Importación de Vehículos a Medida</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Traemos el coche de sus sueños desde cualquier parte del mundo
          </p>
        </div>
      </section>

      <section className="py-16 relative">
        {/* Patrón de fondo sutil */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 50%, #ffffff 50%, #ffffff 75%, transparent 75%, transparent)",
            backgroundSize: "10px 10px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center">
                <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white p-2 rounded-full mr-3">
                  <Globe className="h-6 w-6" />
                </span>
                Servicio de Importación Personalizada
              </h2>
              <p className="text-white/70 mb-6">
                ¿Sueña con un modelo específico que no está disponible localmente? Nuestro servicio de importación
                personalizada trae vehículos de todo el mundo directamente a usted. Nos encargamos de toda la logística,
                el papeleo y los requisitos de cumplimiento para que el proceso sea fluido.
              </p>
              {/* <div className="space-y-6">
                <div className="relative h-[250px] w-full rounded-lg overflow-hidden shadow-[0_0_25px_rgba(245,158,11,0.3)]">
                  <Image
                    src="/placeholder.svg?height=250&width=500"
                    alt="Custom car import"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[120px] w-full rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=120&width=200"
                      alt="Imported car detail"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-premium-black to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white text-sm font-bold">Deportivos Europeos</div>
                  </div>
                  <div className="relative h-[120px] w-full rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=120&width=200"
                      alt="Imported car detail"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-premium-black to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white text-sm font-bold">Clásicos Americanos</div>
                  </div>
                </div>
              </div> */}

              <div className="space-y-6 flex flex-col">
                <div className="relative h-auto max-w-xl w-full self-center rounded-lg overflow-hidden shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                  <img
                    src="/bmw.jpg"
                    alt="Tow truck service"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Ventajas de Nuestro Servicio:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark border-premium-gray-light">
                    <CardContent className="p-4 flex items-start">
                      <div className="bg-gradient-to-r from-amber-500 to-yellow-400 p-2 rounded-full mr-3 flex-shrink-0">
                        <Globe className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Acceso Global</h4>
                        <p className="text-sm text-white/70">Modelos exclusivos de todo el mundo</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark border-premium-gray-light">
                    <CardContent className="p-4 flex items-start">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-full mr-3 flex-shrink-0">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Gestión Completa</h4>
                        <p className="text-sm text-white/70">Trámites aduaneros y homologación</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark border-premium-gray-light">
                    <CardContent className="p-4 flex items-start">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-2 rounded-full mr-3 flex-shrink-0">
                        <Plane className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Transporte Seguro</h4>
                        <p className="text-sm text-white/70">Envío especializado puerta a puerta</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark border-premium-gray-light">
                    <CardContent className="p-4 flex items-start">
                      <div className="bg-gradient-to-r from-premium-red to-orange-500 p-2 rounded-full mr-3 flex-shrink-0">
                        <DollarSign className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Precios Competitivos</h4>
                        <p className="text-sm text-white/70">Ahorre en impuestos y costes</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-premium-gray-dark to-[#1a1a2e] border border-premium-gray-light rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-premium-red to-orange-500 p-2 rounded-full mr-3 flex-shrink-0">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Garantía de Satisfacción</h4>
                      <p className="text-sm text-white/70">
                        Todos nuestros vehículos importados incluyen una garantía de 1 año y asistencia técnica
                        especializada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="w-full bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark border-premium-gray-light overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-amber-500 to-yellow-400"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                  <Globe className="h-5 w-5 text-amber-500 mr-2" />
                  Solicitud de Importación
                </h3>
                <CraneRentalForm />
                {/* <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Nombre Completo
                    </Label>
                    <Input
                      id="name"
                      placeholder="Introduzca su nombre completo"
                      className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-amber-500"
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
                        className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-amber-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+34 600 000 000"
                        className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="car-make" className="text-white">
                      Marca del Vehículo
                    </Label>
                    <Input
                      id="car-make"
                      placeholder="Ej: BMW, Mercedes, Porsche..."
                      className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="car-model" className="text-white">
                      Modelo
                    </Label>
                    <Input
                      id="car-model"
                      placeholder="Ej: M3, S-Class, 911..."
                      className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="year" className="text-white">
                        Año
                      </Label>
                      <Input
                        id="year"
                        placeholder="Ej: 2023"
                        className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-amber-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-white">
                        Presupuesto Aproximado (€)
                      </Label>
                      <Input
                        id="budget"
                        placeholder="Ej: 50000"
                        className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="origin-country" className="text-white">
                      País de Origen Preferido
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="origin-country"
                        className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-amber-500"
                      >
                        <SelectValue placeholder="Seleccione país de origen" />
                      </SelectTrigger>
                      <SelectContent className="bg-premium-gray-medium border-premium-gray-light text-white">
                        <SelectItem value="germany">Alemania</SelectItem>
                        <SelectItem value="usa">Estados Unidos</SelectItem>
                        <SelectItem value="japan">Japón</SelectItem>
                        <SelectItem value="uk">Reino Unido</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-white">Características Deseadas</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="feature-1"
                          className="border-premium-gray-light data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                        />
                        <label htmlFor="feature-1" className="text-sm text-white">
                          Motor específico
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="feature-2"
                          className="border-premium-gray-light data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                        />
                        <label htmlFor="feature-2" className="text-sm text-white">
                          Paquete deportivo
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="feature-3"
                          className="border-premium-gray-light data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                        />
                        <label htmlFor="feature-3" className="text-sm text-white">
                          Interior de lujo
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="feature-4"
                          className="border-premium-gray-light data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                        />
                        <label htmlFor="feature-4" className="text-sm text-white">
                          Edición limitada
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additional-info" className="text-white">
                      Detalles Adicionales
                    </Label>
                    <Textarea
                      id="additional-info"
                      placeholder="Proporcione cualquier detalle específico sobre el vehículo que desea importar"
                      rows={4}
                      className="bg-premium-gray-light border-premium-gray-medium text-white focus:border-amber-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-white"
                  >
                    Enviar Solicitud
                  </Button>
                </form> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}


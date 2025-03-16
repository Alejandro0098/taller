import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Star, Zap, Shield, Award } from "lucide-react"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/concesionario.jpg"
          alt="Exposición de coches de lujo"
          fill
          className="object-cover bg-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/10 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Badge className="mb-4 bg-gradient-to-r from-premium-red to-orange-500 text-white border-none">
            Concesionario Premium
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Coches Premium para Conductores Exigentes</h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl">
            Descubra nuestra exclusiva colección de vehículos de lujo y alto rendimiento
          </p>
          <Link href="/cars">
            <Button
              size="lg"
              className="text-lg px-8 bg-gradient-to-r from-premium-red to-orange-500 hover:from-premium-red/90 hover:to-orange-500/90 text-white border-none"
            >
              Ver Nuestra Colección
            </Button>
          </Link>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gradient-to-b from-premium-gray-dark to-premium-black relative">
        {/* Patrón de fondo sutil */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Nuestra Historia</h2>
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Un Legado de Excelencia</h3>
              <p className="text-white/70 mb-4">
                Fundado en 1985, nuestro concesionario comenzó como un pequeño negocio familiar con pasión por los
                automóviles excepcionales. A lo largo de las décadas, hemos crecido hasta convertirnos en uno de los
                concesionarios más respetados de la región, manteniendo nuestro compromiso con la calidad y el servicio
                personalizado.
              </p>
              <p className="text-white/70">
                Nuestra filosofía siempre ha sido proporcionar una experiencia sin igual para nuestros clientes,
                ofreciendo solo los mejores vehículos y garantizando la completa satisfacción con cada compra. Esta
                dedicación a la excelencia nos ha ganado una base de clientes leales y numerosos reconocimientos en la
                industria.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-[0_0_25px_rgba(229,62,62,0.3)]">
              <Image
                src="/concesionario.jpg"
                alt="Historia de nuestro concesionario"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-premium-black relative">
        {/* Líneas diagonales sutiles */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 50%, #ffffff 50%, #ffffff 75%, transparent 75%, transparent)",
            backgroundSize: "10px 10px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Nuestros Servicios</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Tow Truck Service */}
            <Card className="overflow-hidden bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark border-premium-gray-light group hover:shadow-[0_0_25px_rgba(229,62,62,0.3)] transition-all duration-300">
              <div className="relative h-64 w-full">
                <div className="absolute top-4 right-4 z-10 bg-cyan-500 text-white p-2 rounded-full">
                  <Zap className="h-6 w-6" />
                </div>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Servicio de grúas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">Servicio de Grúas</h3>
                <p className="text-white/70 mb-4">
                  Ofrecemos servicios profesionales de grúa para transportar vehículos de forma segura. Ya sea que
                  necesite mover un coche recién adquirido o transportar un vehículo para servicio, nuestra flota de
                  grúas modernas está a su disposición.
                </p>
                <Link href="/services/tow-truck">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">Solicitar Servicio de Grúa</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Custom Import Service */}
            <Card className="overflow-hidden bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark border-premium-gray-light group hover:shadow-[0_0_25px_rgba(229,62,62,0.3)] transition-all duration-300">
              <div className="relative h-64 w-full">
                <div className="absolute top-4 right-4 z-10 bg-amber-500 text-white p-2 rounded-full">
                  <Award className="h-6 w-6" />
                </div>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Importación de coches a medida"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">Importación a Medida</h3>
                <p className="text-white/70 mb-4">
                  ¿Sueña con un modelo específico que no está disponible localmente? Nuestro servicio de importación
                  personalizada trae vehículos de todo el mundo directamente a usted. Nos encargamos de toda la
                  logística, el papeleo y los requisitos legales para que el proceso sea fluido.
                </p>
                <Link href="/services/custom-import">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white">Solicitar Importación</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-r from-premium-gray-dark via-[#1a1a2e] to-premium-gray-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Conozca Nuestro Showroom</h2>
          <div className="max-w-4xl mx-auto aspect-video bg-premium-gray-medium rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <video className="w-full h-full object-cover" controls poster="/concesionario.jpg">
              <source src="/example.mp4" type="video/mp4" />
              Su navegador no soporta el elemento de video.
            </video>
          </div>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Realice un recorrido virtual por nuestro moderno showroom y eche un vistazo a nuestra exclusiva colección de
            vehículos premium.
          </p>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20 bg-premium-black relative">
        {/* Patrón de fondo sutil */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Vehículos Destacados</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { color: "from-premium-red to-orange-500", icon: <Star className="h-6 w-6" /> },
              { color: "from-cyan-500 to-blue-600", icon: <Zap className="h-6 w-6" /> },
              { color: "from-amber-500 to-yellow-400", icon: <Shield className="h-6 w-6" /> },
            ].map((style, car) => (
              <Card
                key={car}
                className="overflow-hidden bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark border-premium-gray-light group hover:shadow-[0_0_25px_rgba(229,62,62,0.3)] transition-all duration-300"
              >
                <div className="relative h-48 w-full">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${style.color}`}></div>
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-premium-gray-dark to-premium-black text-white p-2 rounded-full">
                    {style.icon}
                  </div>
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Coche${car + 1}`}
                    alt={`Coche destacado ${car + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">Sedán Premium {car + 1}</h3>
                  <p className="text-white/70 mb-4">
                    Vehículo de lujo con características premium, excelente rendimiento y diseño sofisticado.
                  </p>
                  <Link href={`/car-detail`}>
                    <Button
                      variant="outline"
                      className={`w-full border-transparent bg-gradient-to-r ${style.color} text-white hover:opacity-90`}
                    >
                      Ver Detalles
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/cars">
              <Button
                size="lg"
                className="bg-gradient-to-r from-premium-red to-orange-500 hover:from-premium-red/90 hover:to-orange-500/90 text-white"
              >
                Ver Todos los Vehículos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-premium-gray-dark to-[#1a1a2e]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Testimonios de Clientes</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Rodríguez",
                text: "El servicio de importación personalizada fue impecable. Encontraron exactamente el modelo que estaba buscando y se encargaron de todo el papeleo. ¡No podría estar más satisfecho!",
                color: "from-premium-red to-orange-500",
              },
              {
                name: "María González",
                text: "He comprado tres vehículos en este concesionario a lo largo de los años. Su atención al detalle y servicio al cliente no tiene igual en la industria.",
                color: "from-cyan-500 to-blue-600",
              },
              {
                name: "Javier López",
                text: "El servicio de grúa fue rápido y profesional. Transportaron mi coche clásico con un cuidado y atención excepcionales.",
                color: "from-amber-500 to-yellow-400",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-premium-gray-medium to-premium-gray-dark border-premium-gray-light relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color}`}></div>
                <div className="absolute -right-4 -bottom-4 opacity-5 text-white">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11 6.5C11 9 9 11 6.5 11H5.5C5.5 14.5 8.5 16.5 11 16.5V18.5C7 18.5 3.5 15.5 3.5 11V6.5H11Z"
                      fill="currentColor"
                    />
                    <path
                      d="M21 6.5C21 9 19 11 16.5 11H15.5C15.5 14.5 18.5 16.5 21 16.5V18.5C17 18.5 13.5 15.5 13.5 11V6.5H21Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <CardContent className="pt-6">
                  <p className="italic text-white/70 mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center mr-3`}
                    >
                      <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-20 bg-premium-black relative">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Soluciones de Financiación</h2>
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-[0_0_25px_rgba(229,62,62,0.3)]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Opciones de financiación"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-premium-black to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-md">
                Financiación Flexible
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Opciones de Pago Flexibles</h3>
              <p className="text-white/70 mb-4">
                Entendemos que la compra de un vehículo es una inversión importante. Por eso ofrecemos una variedad de
                soluciones de financiación adaptadas a sus necesidades y circunstancias específicas.
              </p>
              <p className="text-white/70 mb-6">
                Nuestros expertos financieros trabajarán con usted para encontrar los términos más ventajosos, ya sea
                que busque un leasing, un préstamo u otro tipo de acuerdo de pago.
              </p>
              <Link href="/financing">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                  Explorar Opciones de Financiación
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-r from-premium-gray-dark via-[#1a1a2e] to-premium-gray-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Visite Nuestro Showroom</h2>
          <div className="grid sm:grid-cols-2 gap-12">
            <div className="h-[400px] bg-premium-gray-medium rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              {/* Replace with actual Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1616000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Ubicación del concesionario"
              ></iframe>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-premium-red to-orange-500 p-2 rounded-full mr-3 mt-0.5 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Dirección</p>
                    <p className="text-white/70">Calle Principal 123, 28001 Madrid, España</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-full mr-3 mt-0.5 flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Teléfono</p>
                    <p className="text-white/70">+34 91 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-400 p-2 rounded-full mr-3 mt-0.5 flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-white/70">info@concesionario.es</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-2 rounded-full mr-3 mt-0.5 flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Horario</p>
                    <p className="text-white/70">Lunes - Viernes: 9:00 - 20:00</p>
                    <p className="text-white/70">Sábado: 10:00 - 18:00</p>
                    <p className="text-white/70">Domingo: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-premium-black relative overflow-hidden">
        {/* Círculos decorativos */}
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-premium-red/20 to-orange-500/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-white">Conéctese Con Nosotros</h2>
          <div className="flex justify-center space-x-6">
            <Link
              href="https://facebook.com"
              className="p-3 rounded-full bg-gradient-to-r from-premium-red to-orange-500 text-white hover:opacity-90 transition-opacity"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://instagram.com"
              className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 transition-opacity"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://twitter.com"
              className="p-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-white hover:opacity-90 transition-opacity"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <p className="mt-6 text-white/70">
            Síganos en redes sociales para las últimas actualizaciones, ofertas especiales y nuevas llegadas
          </p>
        </div>
      </section>
    </main>
  )
}


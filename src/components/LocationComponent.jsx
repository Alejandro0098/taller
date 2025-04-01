'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function LocationComponent() {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Fondo base con color gris oscuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]"></div>

      {/* Patrón de mapa estilizado */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0,0 L100,0 L100,100 L0,100 Z' fill='none' stroke='%23FFFFFF' stroke-width='0.5'/%3E%3Cpath d='M25,0 L25,100 M50,0 L50,100 M75,0 L75,100 M0,25 L100,25 M0,50 L100,50 M0,75 L100,75' stroke='%23FFFFFF' stroke-width='0.25'/%3E%3Ccircle cx='50' cy='50' r='10' fill='none' stroke='%23D4A636' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='%23D4A636' stroke-width='0.25'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%23D4A636' stroke-width='0.15'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}>
      </div>

      {/* Líneas curvas de navegación */}
      <div className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500' viewBox='0 0 500 500'%3E%3Cpath d='M0,250 Q125,100 250,250 T500,250' fill='none' stroke='%23D4A636' stroke-width='1'/%3E%3Cpath d='M0,300 Q125,150 250,300 T500,300' fill='none' stroke='%23D4A636' stroke-width='0.75'/%3E%3Cpath d='M0,350 Q125,200 250,350 T500,350' fill='none' stroke='%23D4A636' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '500px 500px'
        }}>
      </div>

      {/* Puntos de brillo - simulando ciudades en un mapa */}
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

      {/* Efecto de luz principal */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,166,54,0.15),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#212121] border border-[#D4A636]/40 text-[#D4A636] text-sm font-medium tracking-wider uppercase mb-4">
            Contacto
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-[#D4A636] leading-tight">
            Estamos a su Disposición
          </h2>
          <div className="w-20 h-1 bg-[#D4A636] mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Visite nuestro concesionario o contáctenos para obtener más información sobre nuestra exclusiva selección de vehículos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Mapa en la parte superior */}

          {/* Sistema de tabs debajo del mapa con diseño premium simplificado */}
          <div className="max-w-4xl mx-auto bg-premium-gray-medium rounded-xl overflow-hidden shadow-xl border-2 border-[#D4A636]/20">
            <div className="bg-[#222222] rounded-t-xl overflow-hidden shadow-2xl border border-[#D4A636]/20 mb-2 relative">
              {/* <div className="absolute top-6 left-6 z-10 bg-[#111111]/80 p-3 rounded-t-lg border border-[#D4A636]/30 backdrop-blur-sm">
                <h3 className="text-[#D4A636] font-semibold text-lg flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Nuestra Ubicación
                </h3>
                <p className="text-white/90 text-sm mt-1">Calle Principal 123, 28001 Madrid</p>
              </div> */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.4102149377545!2d-1.3887299!3d37.8272814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd648f828d533c65%3A0x49b2f51efb43be66!2sVehimes!5e0!3m2!1ses!2ses!4v1743321517870!5m2!1ses!2ses"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
            {/* Navegación de tabs premium */}
            <div className="flex border-b border-[#D4A636]/20">
              {['info', 'contact'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex-1 py-4 px-2 text-center font-medium transition-all duration-300 ${activeTab === tab
                    ? 'bg-[#252525] text-[#D4A636]'
                    : 'bg-[#1E1E1E] text-white/70 hover:text-white hover:bg-[#222222]'
                    }`}
                >
                  <div className="flex justify-center items-center">
                    {tab === 'info' && <MapPin className="h-4 w-4 mr-2" />}
                    {tab === 'contact' && <Phone className="h-4 w-4 mr-2" />}

                    <span className="text-sm">
                      {tab === 'info' && 'Ubicación y Horario'}
                      {tab === 'contact' && 'Contacto'}
                    </span>
                  </div>

                  {/* Indicador activo */}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4A636]"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Contenedor sin altura fija y sin overflow hidden */}
            <div>
              {/* Tab de información (ubicación + horario) en una sola columna */}
              <div className={`p-6 transition-opacity duration-300 ${activeTab === 'info' ? 'block' : 'hidden'}`}>
                {/* Contenido con letras más grandes */}
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-[#D4A636] mr-2" />
                  <h3 className="text-[#D4A636] text-lg font-semibold">Dirección</h3>
                </div>

                <div className="bg-premium-gray-dark rounded-lg p-4 border-l-3 border-[#D4A636] mb-5">
                  <p className="text-white text-base">
                    Calle Principal 123, 28001 Madrid, España
                  </p>
                  <p className="text-white/80 text-sm mt-2">
                    Zona centro, con excelente accesibilidad
                  </p>
                </div>

                {/* <div className="flex space-x-3 mb-5">
                                    <div className="bg-[#252525] rounded-lg p-3 flex-1 flex items-center">
                                        <div className="w-7 h-7 bg-[#D4A636]/10 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-[#D4A636] text-sm font-bold">M</span>
                                        </div>
                                        <p className="text-white/90 text-sm">Metro: Líneas 2 y 5</p>
                                    </div>
                                    <div className="bg-[#252525] rounded-lg p-3 flex-1 flex items-center">
                                        <div className="w-7 h-7 bg-[#D4A636]/10 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-[#D4A636] text-sm font-bold">P</span>
                                        </div>
                                        <p className="text-white/90 text-sm">Parking para clientes</p>
                                    </div>
                                </div> */}

                <div className="flex items-center mb-4 mt-6">
                  <Clock className="h-5 w-5 text-[#D4A636] mr-2" />
                  <h3 className="text-[#D4A636] text-lg font-semibold">Horario</h3>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-premium-gray-dark rounded-lg p-3">
                    <p className="text-white/90 text-sm mb-1">Lunes - Viernes</p>
                    <p className="text-[#D4A636] font-medium text-base">9:00 - 20:00</p>
                  </div>
                  <div className="bg-premium-gray-dark  rounded-lg p-3">
                    <p className="text-white/90 text-sm mb-1">Sábados</p>
                    <p className="text-[#D4A636] font-medium text-base">10:00 - 14:00</p>
                  </div>
                </div>

                <div className="bg-premium-gray-dark  rounded-lg p-3">
                  <p className="text-white/90 text-sm mb-1">Domingos</p>
                  <p className="text-white/70 text-base">Cerrado</p>
                </div>

                {/* <div className="bg-[#1E1E1E] rounded-lg p-3 mt-4 border border-[#D4A636]/10">
                  <p className="text-white/70 text-sm italic">
                    * Para servicios específicos recomendamos cita previa.
                  </p>
                </div> */}
              </div>

              {/* Tab de contacto en una sola columna */}
              <div className={`p-6 transition-opacity duration-300 ${activeTab === 'contact' ? 'block' : 'hidden'}`}>
                <div className="flex items-center mb-4">
                  <Phone className="h-4 w-4 text-[#D4A636] mr-2" />
                  <h3 className="text-[#D4A636] text-lg font-semibold">Información de contacto</h3>
                </div>

                <div className="flex items-center bg-premium-gray-dark rounded-lg p-4 mb-3">
                  <div className="w-10 h-10 bg-[#D4A636]/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-4 w-4 text-[#D4A636]" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Teléfono</p>
                    <a href="tel:+34911234567" className="text-[#D4A636] text-base font-medium">
                      +34 91 123 45 67
                    </a>
                  </div>
                </div>

                <div className="flex items-center bg-premium-gray-dark rounded-lg p-4 mb-5">
                  <div className="w-10 h-10 bg-[#D4A636]/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-4.5 w-4.5 text-[#D4A636]" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Email</p>
                    <a href="mailto:info@premiumautos.com" className="text-[#D4A636] text-base font-medium">
                      info@premiumautos.com
                    </a>
                  </div>
                </div>

                {/* <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-[#252525] rounded-lg p-3">
                    <p className="text-[#D4A636] text-sm font-medium mb-1">Ventas</p>
                    <p className="text-white/90 text-base">+34 91 123 45 68</p>
                  </div>
                  <div className="bg-[#252525] rounded-lg p-3">
                    <p className="text-[#D4A636] text-sm font-medium mb-1">Servicio Técnico</p>
                    <p className="text-white/90 text-base">+34 91 123 45 69</p>
                  </div>
                </div> */}

                <div className="flex items-center mb-4 mt-6">
                  <MessageSquare className="h-5 w-5 text-[#D4A636] mr-2" />
                  <h3 className="text-[#D4A636] text-lg font-semibold">Contacte con Nosotros</h3>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="tel:+34911234567"
                    className="bg-premium-gray-dark hover:bg-premium-gray-dark/50 transition-colors rounded-lg p-3 flex flex-col items-center border border-[#D4A636]/10"
                  >
                    <Phone className="h-5 w-5 text-[#D4A636] mb-2" />
                    <p className="text-white text-xs sm:text-sm">Llamar</p>
                  </a>

                  <a
                    href="https://wa.me/34911234567"
                    target="_blank"
                    className="bg-premium-gray-dark hover:bg-premium-gray-dark/50 transition-colors rounded-lg p-3 flex flex-col items-center border border-[#D4A636]/10"
                  >
                    <MessageSquare className="h-5 w-5 text-[#D4A636] mb-2" />
                    <p className="text-white text-xs sm:text-sm">WhatsApp</p>
                  </a>

                  <a
                    href="mailto:info@premiumautos.com"
                    className="bg-premium-gray-dark hover:bg-premium-gray-dark/50 transition-colors rounded-lg p-3 flex flex-col items-center border border-[#D4A636]/10"
                  >
                    <Mail className="h-5 w-5 text-[#D4A636] mb-2" />
                    <p className="text-white text-xs sm:text-sm">Email</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
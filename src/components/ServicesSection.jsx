'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Award, Zap, Shield, Check, Clock, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function ServicesSection() {
    return (
        <section className="py-16 relative overflow-hidden bg-[#0f0e0c]">
            {/* Efecto de rayas diagonales más juntas con tono amarillento */}
            <div className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(135deg, rgba(212, 166, 54, 0.05) 25%, transparent 25%, transparent 50%, rgba(212, 166, 54, 0.05) 50%, rgba(212, 166, 54, 0.05) 75%, transparent 75%, transparent)`,
                    backgroundSize: '12px 12px'
                }}>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Encabezado de sección - Tamaño ajustado */}
                <div className="text-center mb-14">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4A636]/10 text-[#D4A636] text-sm font-medium tracking-wider uppercase mb-4">
                        Servicios Exclusivos
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-[#D4A636] leading-tight">
                        Experiencia Premium en Cada Detalle
                    </h2>
                    <div className="w-20 h-1 bg-[#D4A636] mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Descubra nuestra gama de servicios diseñados para superar sus expectativas y elevar su experiencia automovilística al siguiente nivel.
                    </p>
                </div>

                {/* Servicios destacados - Texto más grande */}
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-16 mb-16">
                    {/* Tow Truck Service */}
                    <Card className="overflow-hidden bg-[#161412] border-2 border-[#D4A636]/30 hover:border-[#D4A636]/50 group transition-all duration-300 shadow-lg shadow-black/30">
                        <div className="relative h-56 md:h-64 w-full">
                            <div className="absolute top-3 right-3 z-10 bg-[#D4A636] text-[#0f0e0c] p-1.5 rounded-full shadow-md">
                                <Zap className="h-5 w-5" />
                            </div>
                            <Image
                                src="/grua.jpg"
                                alt="Servicio de grúas"
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-3 text-white">Servicio de Grúas</h3>
                            <p className="text-white/80 text-base mb-4 leading-relaxed">
                                Ofrecemos servicios profesionales de grúa para transportar vehículos de forma segura. Nuestra flota de
                                grúas modernas está a su disposición 24/7.
                            </p>
                            <Link href="/recogida">
                                <Button size="sm" className="bg-[#D4A636] hover:bg-[#E2B94D] text-[#0f0e0c] text-sm font-medium py-2 px-4">
                                    Solicitar Servicio <ChevronRight className="h-4 w-4 ml-1" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Custom Import Service */}
                    <Card className="overflow-hidden bg-[#161412] border-2 border-[#D4A636]/30 hover:border-[#D4A636]/50 group transition-all duration-300 shadow-lg shadow-black/30">
                        <div className="relative h-56 md:h-64 w-full">
                            <div className="absolute top-3 right-3 z-10 bg-[#D4A636] text-[#0f0e0c] p-1.5 rounded-full shadow-md">
                                <Award className="h-5 w-5" />
                            </div>
                            <Image
                                src="/bmw.jpg"
                                alt="Importación de coches a medida"
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-3 text-white">Importación a Medida</h3>
                            <p className="text-white/80 text-base mb-4 leading-relaxed">
                                Nuestro servicio de importación personalizada trae vehículos de todo el mundo. Nos encargamos de toda la
                                logística y el papeleo.
                            </p>
                            <Link href="/coches-medida">
                                <Button size="sm" className="bg-[#D4A636] hover:bg-[#E2B94D] text-[#0f0e0c] text-sm font-medium py-2 px-4">
                                    Solicitar Importación <ChevronRight className="h-4 w-4 ml-1" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>

                {/* Nueva sección informativa sobre servicios */}
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    <div className="bg-[#161412] p-6 rounded-xl border-2 border-[#D4A636]/30 shadow-lg shadow-black/30">
                        <h3 className="text-xl font-bold mb-4 text-[#D4A636]">Proceso de Servicio</h3>
                        <div className="space-y-4">
                            {[
                                { title: "Diagnóstico Completo", desc: "Evaluación exhaustiva del vehículo con equipos de última generación", icon: <Zap className="h-4 w-4" /> },
                                { title: "Presupuesto Transparente", desc: "Detalle claro de los trabajos a realizar y su costo", icon: <Check className="h-4 w-4" /> },
                                { title: "Reparación Profesional", desc: "Técnicos certificados con formación especializada", icon: <Check className="h-4 w-4" /> },
                                { title: "Control de Calidad", desc: "Verificación exhaustiva antes de la entrega del vehículo", icon: <Check className="h-4 w-4" /> }
                            ].map((step, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-8 h-8 rounded-full bg-[#D4A636]/15 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                                        <div className="text-[#D4A636]">{step.icon}</div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white text-sm">{step.title}</h4>
                                        <p className="text-white/70 text-xs">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#161412] p-6 rounded-xl border-2 border-[#D4A636]/30 shadow-lg shadow-black/30">
                        <h3 className="text-xl font-bold mb-4 text-[#D4A636]">Información de Servicios</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center">
                                    <Clock className="h-4 w-4 text-[#D4A636] mr-2" />
                                    <h4 className="font-medium text-white text-sm">Horario de Servicio</h4>
                                </div>
                                <div className="ml-6 space-y-1">
                                    <p className="text-white/70 text-xs">Lunes a Viernes: 8:00 - 18:00</p>
                                    <p className="text-white/70 text-xs">Sábados: 9:00 - 14:00</p>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center">
                                    <Calendar className="h-4 w-4 text-[#D4A636] mr-2" />
                                    <h4 className="font-medium text-white text-sm">Citas Programadas</h4>
                                </div>
                                <div className="ml-6 space-y-1">
                                    <p className="text-white/70 text-xs">Tiempo estimado: 1-3 días</p>
                                    <p className="text-white/70 text-xs">Cita previa: Recomendada</p>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center">
                                    <Shield className="h-4 w-4 text-[#D4A636] mr-2" />
                                    <h4 className="font-medium text-white text-sm">Garantía de Servicio</h4>
                                </div>
                                <div className="ml-6 space-y-1">
                                    <p className="text-white/70 text-xs">Hasta 2 años en reparaciones</p>
                                    <p className="text-white/70 text-xs">Repuestos originales garantizados</p>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center">
                                    <Award className="h-4 w-4 text-[#D4A636] mr-2" />
                                    <h4 className="font-medium text-white text-sm">Certificaciones</h4>
                                </div>
                                <div className="ml-6 space-y-1">
                                    <p className="text-white/70 text-xs">Técnicos certificados por fabricantes</p>
                                    <p className="text-white/70 text-xs">Talleres homologados ISO 9001</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="mt-5 pt-4 border-t border-[#D4A636]/10">
                            <Link href="/servicios">
                                <Button className="w-full bg-[#D4A636] hover:bg-[#E2B94D] text-[#0f0e0c] text-sm font-medium py-2">
                                    Ver Todos Nuestros Servicios <ChevronRight className="h-4 w-4 ml-1" />
                                </Button>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
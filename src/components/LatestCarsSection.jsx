'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Gauge, Fuel, Clock, Award } from 'lucide-react';

export default function LatestCarsSection() {
    // Normalmente estos datos vendrían de una API o base de datos
    const latestCars = [
        {
            id: 1,
            title: 'Mercedes Clase E',
            image: '/merceces-e.jpg',
            year: 2023,
            price: '62.500',
            km: '0',
            fuel: 'Híbrido',
            power: '330cv',
            transmission: 'Automática',
            featured: true
        },
        {
            id: 2,
            title: 'BMW Serie 5',
            image: '/bmw.jpg',
            year: 2022,
            price: '58.900',
            km: '12.500',
            fuel: 'Diésel',
            power: '286cv',
            transmission: 'Automática',
            featured: false
        },
        {
            id: 3,
            title: 'Audi A6 Avant Quattro Premium Plus',
            image: '/audi-a6.webp',
            year: 2023,
            price: '64.200',
            km: '5.000',
            fuel: 'Híbrido',
            power: '299cv',
            transmission: 'Automática',
            featured: true
        }
    ];

    return (
        <section className="py-16 relative overflow-hidden bg-[#1A1A1A]">
            {/* Fondo de patrón de rombo premium */}
            <div className="absolute inset-0 opacity-15"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 Z' fill='none' stroke='%23D4A636' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}>
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#202020] via-[#1A1A1A] to-[#151515]"></div>

            {/* Efectos de luz */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(252,199,65,0.2),transparent_40%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(247,195,63,0.15),transparent_40%)]"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Encabezado de sección con estilo premium */}
                <div className="text-center mb-14 relative">
                    {/* Decoración de líneas doradas */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] opacity-10 -z-10">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4A636] to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4A636] to-transparent"></div>
                        <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#D4A636] to-transparent"></div>
                        <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#D4A636] to-transparent"></div>
                    </div>

                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#252525] border border-[#D4A636]/40 text-[#D4A636] text-sm font-medium tracking-wider uppercase mb-4">
                        Nuevas Adquisiciones
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-[#D4A636] leading-tight">
                        Los Últimos Modelos Disponibles
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#D4A636]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#D4A636]"></div>
                        <div className="w-20 h-[1px] bg-[#D4A636]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#D4A636]"></div>
                        <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#D4A636]"></div>
                    </div>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Descubra nuestras últimas incorporaciones de vehículos premium, seleccionados por su excepcional calidad y exclusividad.
                    </p>
                </div>

                {/* Coches destacados - estructura mejorada */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8 mb-12">
                    {latestCars.map((car) => (
                        <Card key={car.id} className="overflow-hidden bg-[#252525] border border-[#D4A636]/30 hover:border-[#D4A636] group transition-all duration-300 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-15px_rgba(212,166,54,0.3)] flex flex-col">
                            <div className="relative h-56 md:h-60 w-full">
                                {car.featured && (
                                    <div className="absolute top-3 left-3 z-10">
                                        <Badge className="bg-[#D4A636] text-[#111111] font-medium px-3 py-1 shadow-md">
                                            Destacado
                                        </Badge>
                                    </div>
                                )}
                                <div className="absolute top-3 right-3 z-10 bg-[#D4A636] text-[#111111] p-1.5 rounded-full shadow-md">
                                    <Award className="h-5 w-5" />
                                </div>
                                <Image
                                    src={car.image}
                                    alt={car.title}
                                    fill
                                    className="object-cover object-center transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent opacity-60"></div>
                            </div>
                            <CardContent className="p-6 flex flex-col flex-grow">
                                {/* Título y precio separados en bloques distintos */}
                                <h3 className="text-xl font-semibold text-white mb-1 line-clamp-2 h-14">{car.title}</h3>
                                <p className="text-xl font-bold text-[#D4A636] mb-4">{car.price}€</p>

                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 text-[#D4A636] mr-2" />
                                        <span className="text-white/80 text-sm">{car.year}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Gauge className="h-4 w-4 text-[#D4A636] mr-2" />
                                        <span className="text-white/80 text-sm">{car.km} km</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Fuel className="h-4 w-4 text-[#D4A636] mr-2" />
                                        <span className="text-white/80 text-sm">{car.fuel}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Award className="h-4 w-4 text-[#D4A636] mr-2" />
                                        <span className="text-white/80 text-sm">{car.power}</span>
                                    </div>
                                </div>

                                <p className="text-white/80 text-base mb-6 line-clamp-3">
                                    Este {car.title} {car.year} es una excelente oportunidad de adquirir un vehículo premium con prestaciones excepcionales.
                                </p>

                                {/* Botón al final con margin-top auto para que siempre esté abajo */}
                                <div className="mt-auto">
                                    <Link href={`/coches/${car.id}`} className="block w-full">
                                        <Button className="w-full border border-[#D4A636] bg-gradient-to-r from-[#D4A636] to-[#E2B94D] hover:from-[#E2B94D] hover:to-[#D4A636] text-[#111111] text-sm font-medium py-2">
                                            Ver Detalles <ChevronRight className="h-4 w-4 ml-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/cars">
                        <Button className="relative overflow-hidden bg-transparent border-2 border-[#D4A636] text-[#D4A636] hover:text-[#111111] hover:bg-[#D4A636] text-base font-medium py-3 px-10 group">
                            <span className="relative z-10">Ver Catálogo Completo</span>
                            <ChevronRight className="h-4 w-4 ml-2 relative z-10 inline-block" />
                            <div className="absolute inset-0 w-0 bg-[#D4A636] group-hover:w-full transition-all duration-300 ease-in-out"></div>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
} 
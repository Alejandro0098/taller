import { Card, CardContent } from '@/components/ui/card';
import { Badge, Clock, Gauge, Fuel, Award, ChevronRight, Ban, Lock, LockIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';


export default function CarCard({ car }) {
    if (!car) return <></>
    const km = Math.floor(Math.random() * 100000);
    return (
        <Card key={car.id} className={`overflow-hidden bg-[#1a1a1a] border-2 border-[#D4A636]/30 hover:border-[#D4A636]/50 group transition-all duration-300 shadow-xl flex flex-col ${car.status && car.status === "vendido" ? "grayscale-[75%]" : ""} `}>
            <div className="relative h-56 md:h-60 w-full">
                {car.featured && (
                    <div className="absolute top-3 left-3 z-10">
                        <Badge className="bg-[#D4A636] text-[#111111] font-medium px-3 py-1 shadow-md">
                            Destacado
                        </Badge>
                    </div>
                )}
                {/* <div className="absolute top-3 right-3 z-10 bg-[#D4A636] text-[#111111] p-1.5 rounded-full shadow-md">
                    <Award className="h-5 w-5" />
                </div> */}
                <Image
                    src={'/bmw.jpg'}
                    alt={car.title}
                    fill
                    className="object-contain object-center transition-transform duration-500 mt-3"
                />
                {car.status && car.status === "vendido" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className='bg-premium-black/50 text-xl flex items-center justify-center text-gray-300 rounded-lg p-8'>
                            <Ban className="h-5 w-5 mr-2" />
                            Vendido

                        </div>
                    </div>
                )}
                {car.status && car.status === "reservado" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-premium-black/20">
                        <div></div>
                        <div className='bg-yellow-500/80 text-xl hover:bg-yellow-500/90 text-black text-xl py-2 flex items-center justify-center rounded-lg p-8'>
                            <LockIcon className="h-5 w-5 mr-2" />
                            Reservado
                        </div>
                    </div>
                )}
            </div>
            <CardContent className="p-6 flex flex-col flex-grow">
                {/* Título y precio separados en bloques distintos */}
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 mt-4">{car.name}</h3>
                {/* <p className="text-xl font-bold text-[#D4A636] mb-4">{car.price}€</p> */}
                <div className="mb-4">
                    {car.originalPrice && (
                        <p className="text-sm text-white/70 line-through">{car.originalPrice.toLocaleString()} €</p>
                    )}
                    <p className="text-2xl font-bold text-premium-yellow-light">{car.price.toLocaleString()} €</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center">
                        <Clock className="h-5 w-5 text-[#D4A636] mr-2" />
                        <span className="text-white/80 text-sm">{car.year}</span>
                    </div>
                    <div className="flex items-center">
                        <Gauge className="h-5 w-5 text-[#D4A636] mr-2" />
                        <span className="text-white/80 text-sm">{km} km</span>
                    </div>
                    <div className="flex items-center">
                        <Fuel className="h-5 w-5 text-[#D4A636] mr-2" />
                        <span className="text-white/80 text-sm">{car.fuel}</span>
                    </div>
                    <div className="flex items-center">
                        <Award className="h-5 w-5 text-[#D4A636] mr-2" />
                        <span className="text-white/80 text-sm">{car.power}</span>
                    </div>
                </div>

                {/* <p className="text-white/80 text-base mb-6 line-clamp-3">
                    Este {car.title} {car.year} es una excelente oportunidad de adquirir un vehículo premium con prestaciones excepcionales.
                </p> */}

                {/* Botón al final con margin-top auto para que siempre esté abajo */}
                <div className="mt-auto">
                    {
                        car.status && car.status === "vendido"
                            ?
                            <Button className="w-full bg-premium-gray-medium hover:bg-premium-gray-dark text-gray-300 text-sm font-medium py-2 mt-3 border-[1px] border-gray-500">
                                No disponible
                            </Button>
                            : <Link href={`/cars/${car.id}`} className="block w-full">
                                <Button className="w-full bg-[#D4A636] hover:bg-[#E2B94D] text-[#111111] text-sm font-medium py-2 mt-3">
                                    Ver Detalles <ChevronRight className="h-4 w-4 ml-1" />
                                </Button>
                            </Link>
                    }

                </div>
            </CardContent>
        </Card>
    )
}
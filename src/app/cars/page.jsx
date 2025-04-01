"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import {
    Car,
    Search,
    Filter,
    X,
    Gauge,
    Calendar,
    Fuel,
    Clock,
    AlertCircle,
    Wrench,
    Star,
    Sparkles,
    Ban,
    ArrowUpDown,
    ChevronDown,
    Lock
} from "lucide-react"
import CarCard from "@/components/CarCard"

import { CarFilters } from "./Filters"

function sortByPriceAsc(a, b) {
    if (a.price < b.price) {
        return -1;
    }
    if (a.price > b.price) {
        return 1;
    }
    return 0;
}

function sortByPriceDesc(a, b) {
    if (a.price > b.price) {
        return -1;
    }
    if (a.price < b.price) {
        return 1;
    }
    return 0;
}

function sortByYearAsc(a, b) {
    if (a.year < b.year) {
        return -1;
    }
}

function sortByYearDesc(a, b) {
    if (a.year < b.year) {
        return 1;
    }
}

function sortByEngineAsc(a, b) {
    if (a.engine < b.engine) {
        return -1;
    }
}

function sortByEngineDesc(a, b) {
    if (a.engine < b.engine) {
        return 1;
    }
}



function sortCars(cars, sortBy) {


    let soldCars = []
    let availableCars = []
    cars.forEach(car => {
        if (car.status === 'vendido') {
            soldCars.push(car)
        }
        else {
            availableCars.push(car)
        }
    })
    const sorted = [...availableCars, ...soldCars]
    console.log(sorted)
    if (sortBy === 'price-asc') {
        console.log("filtering by price asc")
        return sorted.sort(sortByPriceAsc)
    }
    if (sortBy === 'price-desc') {
        console.log("filtering by price desc")
        console.log(sorted)
        const res = sorted.sort(sortByPriceDesc)
        console.log(res)
        return res
    }
    if (sortBy === 'year-asc') {
        console.log("filtering by year asc")
        return sorted.sort(sortByYearAsc)
    }
    if (sortBy === 'year-desc') {
        console.log("filtering by year desc")
        return sorted.sort(sortByYearDesc)
    }
    if (sortBy === 'engine-asc') {
        console.log("filtering by engine asc")
        return sorted.sort(sortByEngineAsc)
    }
    if (sortBy === 'engine-desc') {
        console.log("filtering by engine desc")
        return sorted.sort(sortByEngineDesc)
    }

    return sorted
}

let mockCars = [
    {
        id: "mercedes-amg-gt-63",
        name: "Mercedes-AMG GT 63",
        price: 169900,
        originalPrice: 175000,
        year: 2023,
        power: "639 CV",
        engine: "V8 Biturbo",
        fuel: "Gasolina",
        image: "/placeholder.svg?height=400&width=600&text=Mercedes-AMG+GT+63",
        status: "en-venta",
    },
    {
        id: "porsche-911-turbo-s",
        name: "Porsche 911 Turbo S",
        price: 229900,
        year: 2022,
        power: "650 CV",
        engine: "Flat-6 Biturbo 4 cilindrt",
        fuel: "Gasolina",
        image: "/placeholder.svg?height=400&width=600&text=Porsche+911+Turbo+S",
        status: "en-venta",
    },
    {
        id: "audi-rs7-sportback",
        name: "Audi RS7 Sportback",
        price: 139900,
        originalPrice: 149900,
        year: 2023,
        power: "600 CV",
        engine: "V8 Biturbo",
        fuel: "Gasolina",
        image: "/placeholder.svg?height=400&width=600&text=Audi+RS7+Sportback",
        status: "oferta-especial",
    },
    {
        id: "bmw-m5-competition",
        name: "BMW M5 Competition",
        price: 145900,
        year: 2022,
        power: "625 CV",
        engine: "V8 Biturbo",
        fuel: "Gasolina",
        image: "/placeholder.svg?height=400&width=600&text=BMW+M5+Competition",
        status: "reservado",
    },
    {
        id: "tesla-model-s-plaid",
        name: "Tesla Model S Plaid",
        price: 129900,
        year: 2023,
        power: "1020 CV",
        engine: "Eléctrico",
        fuel: "Eléctrico",
        image: "/placeholder.svg?height=400&width=600&text=Tesla+Model+S+Plaid",
        status: "recien-llegado",
    },
    {
        id: "lamborghini-huracan-evo",
        name: "Lamborghini Huracán EVO",
        price: 259900,
        year: 2021,
        power: "640 CV",
        engine: "V10",
        fuel: "Gasolina",
        image: "/placeholder.svg?height=400&width=600&text=Lamborghini+Huracán+EVO",
        status: "en-reparacion",
    },
    {
        id: "ferrari-f8-tributo",
        name: "Ferrari F8 Tributo",
        price: 289900,
        year: 2022,
        power: "720 CV",
        engine: "V8 Biturbo",
        fuel: "Gasolina",
        image: "/placeholder.svg?height=400&width=600&text=Ferrari+F8+Tributo",
        status: "vendido",
    },
    {
        id: "mclaren-720s",
        name: "McLaren 720S",
        price: 269900,
        year: 2021,
        power: "720 CV",
        engine: "V8 Biturbo",
        fuel: "Gasolina",
        image: "/placeholder.svg?height=400&width=600&text=McLaren+720S",
        status: "vendido",
    },
    {
        id: "bentley-continental-gt",
        name: "Bentley Continental GT",
        price: 219900,
        year: 2022,
        power: "550 CV",
        engine: "W12",
        fuel: "Gasolina",
        image: "/placeholder.svg?height=400&width=600&text=Bentley+Continental+GT",
        status: "en-venta",
    },
    {
        id: "mercedes-eqs-580",
        name: "Mercedes EQS 580",
        price: 149900,
        year: 2023,
        power: "516 CV",
        engine: "Eléctrico",
        fuel: "Eléctrico",
        image: "/placeholder.svg?height=400&width=600&text=Mercedes+EQS+580",
        status: "recien-llegado",
    },
    {
        id: "aston-martin-dbs",
        name: "Aston Martin DBS",
        price: 329900,
        originalPrice: 349900,
        year: 2022,
        power: "725 CV",
        engine: "V12",
        fuel: "Gasolina",
        image: "/placeholder.svg?height=400&width=600&text=Aston+Martin+DBS",
        status: "oferta-especial",
    },
    {
        id: "rolls-royce-ghost",
        name: "Rolls-Royce Ghost",
        price: 399900,
        year: 2023,
        power: "571 CV",
        engine: "V12",
        fuel: "Gasolina",
        image: "/placeholder.svg?height=400&width=600&text=Rolls-Royce+Ghost",
        status: "vendido",
    },
    // Añadir más coches para probar la paginación
    {
        id: "bugatti-chiron",
        name: "Bugatti Chiron",
        price: 2500000,
        year: 2022,
        power: "1500 CV",
        engine: "W16 Quad-Turbo",
        fuel: "Gasolina",
        image: "/placeholder.svg?height=400&width=600&text=Bugatti+Chiron",
        status: "vendido",
    },
    {
        id: "koenigsegg-jesko",
        name: "Koenigsegg Jesko",
        price: 2800000,
        year: 2023,
        power: "1600 CV",
        engine: "V8 Twin-Turbo",
        fuel: "Gasolina",
        image: "/placeholder.svg?height=400&width=600&text=Koenigsegg+Jesko",
        status: "vendido",
    },
    {
        id: "pagani-huayra",
        name: "Pagani Huayra",
        price: 2100000,
        year: 2021,
        power: "840 CV",
        engine: "V12 Twin-Turbo",
        fuel: "Gasolina",
        image: "/placeholder.svg?height=400&width=600&text=Pagani+Huayra",
        status: "vendido",
    },
    {
        id: "rimac-nevera",
        name: "Rimac Nevera",
        price: 2000000,
        year: 2023,
        power: "1914 CV",
        engine: "Eléctrico",
        fuel: "Eléctrico",
        image: "/placeholder.svg?height=400&width=600&text=Rimac+Nevera",
        status: "vendido",
    },
]


// Componente principal
export default function CarsPage() {
    const carsPerPage = 12
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(true)
    const [cars, setCars] = useState([])
    const [filteredCars, setFilteredCars] = useState([])
    const [isFiltersOpen, setIsFiltersOpen] = useState(false)
    const [displayedCars, setDisplayedCars] = useState([])
    const [visibleCount, setVisibleCount] = useState(12)

    // Estados para los filtros
    const [searchTerm, setSearchTerm] = useState("")
    const [priceRange, setPriceRange] = useState([0, 500000])
    const [yearRange, setYearRange] = useState([2010, 2025])
    const [selectedFuels, setSelectedFuels] = useState([])
    const [selectedStatuses, setSelectedStatuses] = useState([])
    const router = useRouter()
    const [sortBy, setSortBy] = useState("price-asc")
    const brands = Array.from(new Set(mockCars.map((car) => car.name.split(" ")[0])))

    const handleFilterChange = () => {
        let filtered = filterCars(mockCars)
        if (sortBy) {
            filtered = sortCars(filtered, sortBy)
        }

        setFilteredCars(filtered)
        setIsFiltersOpen(false)
        setVisibleCount(12)
    }

    useEffect(() => {
        handleFilterChange()
    }, [sortBy])

    function getAllSearchParams() {
        const params = {};

        searchParams.forEach((value, key) => {
            params[key] = value;
        });

        return params;
    };

    function filterCars(carsData) {
        let filters = getAllSearchParams()

        const cars = sortCars(carsData).filter((car) => {
            return (
                (!filters.brand || car.name.toLowerCase().includes(filters.brand.toLowerCase()) || filters.brand == 'all') &&
                (!filters.minKm || car.km >= Number.parseInt(filters.minKm)) &&
                (!filters.maxKm || car.km <= Number.parseInt(filters.maxKm)) &&
                (!filters.minYear || car.year >= Number.parseInt(filters.minYear)) &&
                (!filters.maxYear || car.year <= Number.parseInt(filters.maxYear)) &&
                (!filters.transmission || car.transmission.toLowerCase() === filters.transmission.toLowerCase()) &&
                (!filters.fuelType || car.fuelType.toLowerCase() === filters.fuelType.toLowerCase()) &&
                (!filters.minPrice || car.price >= Number.parseInt(filters.minPrice)) &&
                (!filters.maxPrice || car.price <= Number.parseInt(filters.maxPrice)) &&
                (!filters.seats || car.seats === Number.parseInt(filters.seats)) &&
                (!filters.carType || car.carType === filters.carType) &&
                (!filters.environmentLabel || car.environmentLabel === filters.environmentLabel)
            )
        })
        return cars
    }

    // Cargar datos de coches
    useEffect(() => {
        const fetchCars = async () => {
            try {
                setIsLoading(true)
                // Simular una petición al backend
                await new Promise((resolve) => setTimeout(resolve, 1000))
                const sorted = sortCars(mockCars)
                setCars(sorted)
                setFilteredCars(sorted)
                setDisplayedCars(sorted.slice(0, visibleCount))
            } catch (error) {
                console.error("Error fetching cars:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchCars()
    }, [])

    // Función para cargar más coches
    const loadMoreCars = () => {
        const newVisibleCount = visibleCount + 12
        setVisibleCount(newVisibleCount)
        setDisplayedCars(filteredCars.slice(0, newVisibleCount))
        setVisibleCount(newVisibleCount)
    }

    // Función para renderizar el badge de estado
    const renderStatusBadge = (status) => {
        switch (status) {
            case "en-venta":
                return null // No mostrar badge para coches en venta

            case "en-reparacion":
                return (
                    <Badge className="absolute top-3 right-3 z-10 bg-cyan-500 text-white">
                        <Wrench className="h-3 w-3 mr-1" /> En reparación
                    </Badge>
                )
            case "recien-llegado":
                return (
                    <Badge className="absolute top-3 right-3 z-10 bg-emerald-500 text-white">
                        <Star className="h-3 w-3 mr-1" /> Recién llegado
                    </Badge>
                )
            case "oferta-especial":
                return (
                    <Badge className="absolute top-3 right-3 z-10 bg-gradient-to-r from-premium-red to-orange-500 text-white">
                        <Sparkles className="h-3 w-3 mr-1" /> Oferta especial
                    </Badge>
                )
            // case "vendido":
            //     return (
            //         <Badge className="absolute top-3 right-3 z-10 bg-premium-gray-dark text-white">
            //             <Ban className="h-3 w-3 mr-1" /> Vendido
            //         </Badge>
            //     )
        }
        return <></>
    }

    useEffect(() => {
        handleFilterChange()
    }, [searchParams])

    // Función para manejar cambios en los filtros de combustible
    const handleFuelChange = (fuel) => {
        setSelectedFuels((prev) => (prev.includes(fuel) ? prev.filter((f) => f !== fuel) : [...prev, fuel]))
    }

    // Función para manejar cambios en los filtros de estado
    const handleStatusChange = (status) => {
        setSelectedStatuses((prev) => (prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]))
    }

    // Función para resetear filtros
    const resetFilters = () => {
        router.push(`/cars`, { scroll: false });
    }

    // Componente de carga (Skeleton)
    if (isLoading) {
        return (
            <main className="min-h-screen bg-gradient-to-b from-[#171717] to-[#0a0a0a] text-white py-12 relative overflow-hidden">
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
                    <div className="mb-8">
                        <Skeleton className="h-10 w-64 mb-2 bg-[#222]/60" />
                        <Skeleton className="h-6 w-full max-w-2xl bg-[#222]/60" />
                    </div>

                    {/* Barra de acciones Skeleton */}
                    <div className="flex justify-between items-center mb-6">
                        <Skeleton className="h-10 w-32 bg-[#222]/60" />
                        <Skeleton className="h-10 w-48 bg-[#222]/60" />
                    </div>

                    {/* Grid de coches Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(12)].map((_, i) => (
                            <Skeleton key={i} className="h-[400px] rounded-lg bg-[#222]/60 border border-[#D4A636]/10" />
                        ))}
                    </div>
                </div>
            </main>
        )
    }
    const shownCars = filteredCars.slice(0, visibleCount)

    return (
        <main className="min-h-screen relative overflow-hidden py-16">
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

            <div className="container mx-auto px-4 sm:px-0 relative z-10">
                <section className="relative mb-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#212121] border border-[#D4A636]/40 text-[#D4A636] text-sm font-medium tracking-wider uppercase mb-4">
                            Vehículos Premium
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-5 text-[#D4A636]">
                            Nuestra Colección Exclusiva
                        </h1>
                        <div className="w-20 h-1 bg-[#D4A636] mx-auto mb-6"></div>
                        <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
                            Explore nuestra exclusiva selección de vehículos premium. Cada uno representa la perfecta combinación de rendimiento, lujo y elegancia.
                        </p>

                        {/* Estadísticas/Highlights */}
                        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#D4A636]/20 hover:border-[#D4A636]/50 transition-all duration-300 shadow-lg">
                                <p className="text-[#D4A636] text-2xl font-bold">{filteredCars.length}</p>
                                <p className="text-white/80 text-sm">Vehículos disponibles</p>
                            </div>
                            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#D4A636]/20 hover:border-[#D4A636]/50 transition-all duration-300 shadow-lg">
                                <p className="text-[#D4A636] text-2xl font-bold">24/7</p>
                                <p className="text-white/80 text-sm">Atención personalizada</p>
                            </div>
                            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#D4A636]/20 hover:border-[#D4A636]/50 transition-all duration-300 shadow-lg">
                                <p className="text-[#D4A636] text-2xl font-bold">100%</p>
                                <p className="text-white/80 text-sm">Garantía de calidad</p>
                            </div>
                            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#D4A636]/20 hover:border-[#D4A636]/50 transition-all duration-300 shadow-lg">
                                <p className="text-[#D4A636] text-2xl font-bold">+500</p>
                                <p className="text-white/80 text-sm">Clientes satisfechos</p>
                            </div>
                        </div> */}

                        {/* División decorativa */}
                        <div className="flex justify-center items-center mb-12">
                            <div className="w-[35%] xl:w-[25%] px-4">
                                <div className="h-[1px] rounded-full shadow-[0_0_20px_rgba(212,166,54,0.5)] relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4A636] to-transparent rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Nueva barra de filtros y ordenación */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
                            <div className="flex-1 w-full sm:w-auto">
                                <Sheet
                                    open={isFiltersOpen}
                                    onOpenChange={setIsFiltersOpen}
                                    className="sheet-close-button-golden"
                                >
                                    <SheetTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="py-6 w-full sm:w-[250px] bg-[#1a1a1a] text-white border border-[#D4A636]/30 hover:bg-[#222] transition-colors hover:text-[#D4A636] hover:border-[#D4A636]/70"
                                        >
                                            <Filter className="h-4 w-4 mr-2 text-[#D4A636]" />
                                            Filtrar colección
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent
                                        side="left"
                                        className="overflow-y-auto border-r border-[#D4A636]/20 p-0 xl:min-w-[40vw] w-fit bg-gradient-to-b from-[#171717] to-[#0D0D0D] sheet-content-inputs-enhanced"
                                    >
                                        <div className="p-6 border-b border-[#D4A636]/20 bg-[#1a1a1a]/70">
                                            <h2 className="text-2xl font-bold text-[#D4A636] flex items-center">
                                                <Filter className="h-5 w-5 mr-2" />
                                                Filtrar Vehículos
                                            </h2>
                                            <p className="text-white/70 text-sm mt-1">
                                                Ajuste los parámetros para encontrar el vehículo de sus sueños
                                            </p>
                                        </div>
                                        <div className="relative z-10">
                                            <CarFilters brands={brands} />
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                            <div className="flex-1 w-full sm:w-auto">
                                <Select value={sortBy} onValueChange={setSortBy}>
                                    <SelectTrigger className="py-6 flex items-center justify-center gap-2 w-full sm:w-[250px] bg-[#1a1a1a] text-white border border-[#D4A636]/30 hover:bg-[#222] transition-colors hover:text-[#D4A636] hover:border-[#D4A636]/70">
                                        <ArrowUpDown className="h-4 w-4 mr-2 text-[#D4A636]" />
                                        <SelectValue placeholder="Ordenar vehículos" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#1a1a1a] border border-[#D4A636]/30 text-white">
                                        <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
                                        <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
                                        {/* <SelectItem value="year-desc">Más recientes primero</SelectItem>
                                        <SelectItem value="year-asc">Más antiguos primero</SelectItem> */}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resultados */}
                {shownCars.length === 0 ? (
                    <div className="bg-[#1a1a1a]/80 border border-[#D4A636]/20 rounded-xl p-8 text-center shadow-lg backdrop-blur-sm">
                        <AlertCircle className="h-12 w-12 text-[#D4A636] mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-white">No se encontraron vehículos</h3>
                        <p className="text-white/70 mb-4">No hay vehículos que coincidan con los filtros seleccionados.</p>
                        <Button
                            onClick={resetFilters}
                            className="bg-[#D4A636] hover:bg-[#D4A636]/80 text-white border-none"
                        >
                            Resetear filtros
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:px-12">
                            {shownCars.map((car) => (
                                <CarCard car={car} key={car.id} />
                            ))}
                        </div>

                        {/* Botón "Mostrar más" */}
                        {visibleCount < filteredCars.length && (
                            <div className="mt-12 text-center">
                                <Button
                                    onClick={loadMoreCars}
                                    className="bg-[#1a1a1a] text-[#D4A636] border border-[#D4A636]/30 hover:bg-[#222] hover:border-[#D4A636]/70 transition-all duration-300 py-6 px-8"
                                >
                                    <ChevronDown className="h-4 w-4 mr-2" />
                                    Mostrar más vehículos
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </main>
    )
}







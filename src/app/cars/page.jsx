"use client"

import { useState, useEffect } from "react"
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
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
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
} from "lucide-react"

// Componente principal
export default function CarsPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [cars, setCars] = useState([])
    const [filteredCars, setFilteredCars] = useState([])
    const [displayedCars, setDisplayedCars] = useState([])
    const [visibleCount, setVisibleCount] = useState(12)

    // Estados para los filtros
    const [searchTerm, setSearchTerm] = useState("")
    const [priceRange, setPriceRange] = useState([0, 500000])
    const [yearRange, setYearRange] = useState([2010, 2025])
    const [selectedFuels, setSelectedFuels] = useState([])
    const [selectedStatuses, setSelectedStatuses] = useState([])
    const [sortBy, setSortBy] = useState("price-asc")

    // Cargar datos de coches
    useEffect(() => {
        const fetchCars = async () => {
            try {
                setIsLoading(true)
                // Simular una petición al backend
                await new Promise((resolve) => setTimeout(resolve, 2000))

                // Datos de ejemplo
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
                        engine: "Flat-6 Biturbo",
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
                        status: "en-venta",
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
                        status: "en-venta",
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
                        status: "recien-llegado",
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
                        status: "en-venta",
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
                        status: "recien-llegado",
                    },
                ]

                mockCars = [...mockCars, ...mockCars, ...mockCars]

                setCars(mockCars)
                setFilteredCars(mockCars)
                setDisplayedCars(mockCars.slice(0, visibleCount))
            } catch (error) {
                console.error("Error fetching cars:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchCars()
    }, [])

    // Aplicar filtros cuando cambien
    useEffect(() => {
        let result = [...cars]

        // Filtro por término de búsqueda
        if (searchTerm) {
            result = result.filter(
                (car) =>
                    car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    car.engine.toLowerCase().includes(searchTerm.toLowerCase()),
            )
        }

        // Filtro por rango de precio
        result = result.filter((car) => car.price >= priceRange[0] && car.price <= priceRange[1])

        // Filtro por rango de año
        result = result.filter((car) => car.year >= yearRange[0] && car.year <= yearRange[1])

        // Filtro por combustible
        if (selectedFuels.length > 0) {
            result = result.filter((car) => selectedFuels.includes(car.fuel))
        }

        // Filtro por estado
        if (selectedStatuses.length > 0) {
            result = result.filter((car) => selectedStatuses.includes(car.status))
        }

        // Ordenar
        switch (sortBy) {
            case "price-asc":
                result.sort((a, b) => a.price - b.price)
                break
            case "price-desc":
                result.sort((a, b) => b.price - a.price)
                break
            case "year-asc":
                result.sort((a, b) => a.year - b.year)
                break
            case "year-desc":
                result.sort((a, b) => b.year - a.year)
                break
            case "power-asc":
                result.sort((a, b) => {
                    const powerA = Number.parseInt(a.power.replace(/\D/g, ""))
                    const powerB = Number.parseInt(b.power.replace(/\D/g, ""))
                    return powerA - powerB
                })
                break
            case "power-desc":
                result.sort((a, b) => {
                    const powerA = Number.parseInt(a.power.replace(/\D/g, ""))
                    const powerB = Number.parseInt(b.power.replace(/\D/g, ""))
                    return powerB - powerA
                })
                break
        }

        setFilteredCars(result)
        // Reiniciar la paginación al filtrar
        setVisibleCount(12)
        setDisplayedCars(result.slice(0, 12))
    }, [cars, searchTerm, priceRange, yearRange, selectedFuels, selectedStatuses, sortBy])

    // Función para cargar más coches
    const loadMoreCars = () => {
        const newVisibleCount = visibleCount + 12
        setVisibleCount(newVisibleCount)
        setDisplayedCars(filteredCars.slice(0, newVisibleCount))
    }

    // Función para renderizar el badge de estado
    const renderStatusBadge = (status) => {
        switch (status) {
            case "en-venta":
                return null // No mostrar badge para coches en venta
            case "reservado":
                return (
                    <Badge className="absolute top-3 right-3 z-10 bg-amber-500 text-white">
                        <Clock className="h-3 w-3 mr-1" /> Reservado
                    </Badge>
                )
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
            case "vendido":
                return (
                    <Badge className="absolute top-3 right-3 z-10 bg-premium-gray-dark text-white">
                        <Ban className="h-3 w-3 mr-1" /> Vendido
                    </Badge>
                )
        }
    }

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
        setSearchTerm("")
        setPriceRange([0, 500000])
        setYearRange([2010, 2025])
        setSelectedFuels([])
        setSelectedStatuses([])
        setSortBy("price-asc")
    }

    // Componente de carga (Skeleton)
    if (isLoading) {
        return (
            <main className="min-h-screen bg-premium-gray-dark text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <Skeleton className="h-10 w-64 mb-2" />
                        <Skeleton className="h-6 w-full max-w-2xl" />
                    </div>

                    {/* Barra de acciones Skeleton */}
                    <div className="flex justify-between items-center mb-6">
                        <Skeleton className="h-10 w-32" />
                        <Skeleton className="h-10 w-48" />
                    </div>

                    {/* Grid de coches Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(12)].map((_, i) => (
                            <Skeleton key={i} className="h-[400px] rounded-lg" />
                        ))}
                    </div>
                </div>
            </main>
        )
    }

    // Contenido del panel de filtros
    const filterContent = (
        <>
            <div className="space-y-6">
                {/* Búsqueda */}
                <div>
                    <Label htmlFor="search-filter" className="text-white mb-2 block">
                        Buscar
                    </Label>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                        <Input
                            id="search-filter"
                            placeholder="Nombre, motor..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 bg-premium-gray-light border-premium-gray-medium text-white"
                        />
                    </div>
                </div>

                {/* Rango de precio */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <Label className="text-white">Precio</Label>
                        <span className="text-white/70 text-sm">
                            {priceRange[0].toLocaleString()} € - {priceRange[1].toLocaleString()} €
                        </span>
                    </div>
                    <Slider
                        defaultValue={[0, 500000]}
                        min={0}
                        max={500000}
                        step={5000}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="my-4"
                    />
                </div>

                {/* Rango de año */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <Label className="text-white">Año</Label>
                        <span className="text-white/70 text-sm">
                            {yearRange[0]} - {yearRange[1]}
                        </span>
                    </div>
                    <Slider
                        defaultValue={[2010, 2025]}
                        min={2010}
                        max={2025}
                        step={1}
                        value={yearRange}
                        onValueChange={setYearRange}
                        className="my-4"
                    />
                </div>

                {/* Tipo de combustible */}
                <div>
                    <Label className="text-white mb-2 block">Combustible</Label>
                    <div className="grid grid-cols-2 gap-2">
                        {["Gasolina", "Diésel", "Híbrido", "Eléctrico"].map((fuel) => (
                            <div key={fuel} className="flex items-center">
                                <Checkbox
                                    id={`fuel-${fuel}`}
                                    checked={selectedFuels.includes(fuel)}
                                    onCheckedChange={() => handleFuelChange(fuel)}
                                    className="border-premium-gray-light data-[state=checked]:bg-premium-red data-[state=checked]:border-premium-red"
                                />
                                <label htmlFor={`fuel-${fuel}`} className="ml-2 text-white/70">
                                    {fuel}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Estado del vehículo */}
                <div>
                    <Label className="text-white mb-2 block">Estado</Label>
                    <div className="grid grid-cols-2 gap-2">
                        {[
                            { value: "en-venta", label: "En venta" },
                            { value: "reservado", label: "Reservado" },
                            { value: "en-reparacion", label: "En reparación" },
                            { value: "recien-llegado", label: "Recién llegado" },
                            { value: "oferta-especial", label: "Oferta especial" },
                        ].map((status) => (
                            <div key={status.value} className="flex items-center">
                                <Checkbox
                                    id={`status-${status.value}`}
                                    checked={selectedStatuses.includes(status.value)}
                                    onCheckedChange={() => handleStatusChange(status.value)}
                                    className="border-premium-gray-light data-[state=checked]:bg-premium-red data-[state=checked]:border-premium-red"
                                />
                                <label htmlFor={`status-${status.value}`} className="ml-2 text-white/70">
                                    {status.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ordenación */}
                <div>
                    <Label htmlFor="sort-by-filter" className="text-white mb-2 block">
                        Ordenar por
                    </Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger id="sort-by-filter" className="bg-premium-gray-light border-premium-gray-medium text-white">
                            <SelectValue placeholder="Ordenar por" />
                        </SelectTrigger>
                        <SelectContent className="bg-premium-gray-medium border-premium-gray-light text-white">
                            <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
                            <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
                            <SelectItem value="year-asc">Año: antiguo a reciente</SelectItem>
                            <SelectItem value="year-desc">Año: reciente a antiguo</SelectItem>
                            <SelectItem value="power-asc">Potencia: menor a mayor</SelectItem>
                            <SelectItem value="power-desc">Potencia: mayor a menor</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <Separator className="my-6 bg-premium-gray-light" />

            <div className="flex justify-between">
                <Button variant="outline" onClick={resetFilters} className="text-white/70 hover:text-white">
                    <X className="h-4 w-4 mr-2" />
                    Resetear filtros
                </Button>

                <Button className="bg-gradient-to-r from-premium-red to-orange-500 hover:from-premium-red/90 hover:to-orange-500/90 text-white">
                    Aplicar filtros
                </Button>
            </div>
        </>
    )

    return (
        <main className="min-h-screen bg-premium-gray-dark text-white py-12">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">Nuestra Colección de Vehículos</h1>
                    <p className="text-white/70 max-w-2xl">
                        Explore nuestra exclusiva selección de vehículos premium. Desde deportivos de alto rendimiento hasta sedanes
                        de lujo, tenemos el coche perfecto para usted.
                    </p>
                </div>

                {/* Barra de acciones */}
                <div className="py-4 bg-premium-gray-dark border-b border-premium-gray-light mb-6">
                    <div className="flex justify-between items-center flex-wrap gap-3">
                        {/* Botón de filtros (siempre visible) */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" className="border-premium-gray-light text-black flex items-center">
                                    <Filter className="h-4 w-4 mr-2" />
                                    Filtros
                                    <Badge className="ml-2 bg-premium-red text-white">
                                        {selectedFuels.length > 0 ||
                                            selectedStatuses.length > 0 ||
                                            searchTerm ||
                                            priceRange[0] > 0 ||
                                            priceRange[1] < 500000 ||
                                            yearRange[0] > 2010 ||
                                            yearRange[1] < 2025
                                            ? "Activos"
                                            : ""}
                                    </Badge>
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="w-[350px] sm:w-[450px] bg-premium-gray-dark border-premium-gray-light"
                            >
                                <SheetHeader>
                                    <SheetTitle className="text">Filtros</SheetTitle>
                                </SheetHeader>
                                {filterContent}
                            </SheetContent>
                        </Sheet>

                        {/* Ordenación rápida */}
                        <div className="flex items-center">
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-[220px] bg-premium-gray-light border-premium-gray-medium text-white">
                                    <ArrowUpDown className="h-4 w-4 mr-2" />
                                    <SelectValue placeholder="Ordenar por" />
                                </SelectTrigger>
                                <SelectContent className="bg-premium-gray-medium border-premium-gray-light text-white">
                                    <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
                                    <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
                                    <SelectItem value="year-asc">Año: antiguo a reciente</SelectItem>
                                    <SelectItem value="year-desc">Año: reciente a antiguo</SelectItem>
                                    <SelectItem value="power-asc">Potencia: menor a mayor</SelectItem>
                                    <SelectItem value="power-desc">Potencia: mayor a menor</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Resultados */}
                {filteredCars.length === 0 ? (
                    <div className="bg-premium-gray-medium border border-premium-gray-light rounded-lg p-8 text-center">
                        <AlertCircle className="h-12 w-12 text-premium-red mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">No se encontraron vehículos</h3>
                        <p className="text-white/70 mb-4">No hay vehículos que coincidan con los filtros seleccionados.</p>
                        <Button onClick={resetFilters} className="bg-premium-red hover:bg-premium-red/90 text-white">
                            Resetear filtros
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayedCars.map((car) => (
                                <Card
                                    key={car.id}
                                    className={`pt-6 bg-gradient-to-br from-premium-gray-medium/80 to-premium-gray-dark/80 border-premium-gray-light/50 relative group transition-all duration-300 flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(229,62,62,0.3)] backdrop-blur-sm ${car.status === "vendido" ? "opacity-70 hover:opacity-70 cursor-default" : ""
                                        }`}
                                >
                                    {/* Badge de estado */}
                                    {renderStatusBadge(car.status)}

                                    {/* Imagen */}
                                    <div className="relative h-56 w-full">
                                        <Image
                                            src={'/test-coche1.jpg'}
                                            alt={car.name}
                                            fill
                                            className={`object-contain ${car.status !== "vendido" && ""}`}
                                        />

                                        {/* Overlay para coches vendidos */}
                                        {car.status === "vendido" && (
                                            <div className="absolute inset-0 bg-premium-black/50 flex items-center justify-center">
                                                <Badge className="bg-premium-gray-dark text-white text-lg py-2 px-4">
                                                    <Ban className="h-5 w-5 mr-2" /> Vendido
                                                </Badge>
                                            </div>
                                        )}

                                        {/* Precio con descuento */}
                                        {car.originalPrice && (
                                            <div className="absolute bottom-3 left-3 bg-gradient-to-r from-premium-red to-orange-500 text-white px-2 py-1 rounded text-sm font-bold">
                                                -{Math.round(((car.originalPrice - car.price) / car.originalPrice) * 100)}%
                                            </div>
                                        )}
                                    </div>

                                    <CardContent className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-semibold mb-2 text-white">{car.name}</h3>

                                        {/* Precio */}
                                        <div className="mb-4">
                                            {car.originalPrice && (
                                                <p className="text-sm text-white/70 line-through">{car.originalPrice.toLocaleString()} €</p>
                                            )}
                                            <p className="text-2xl font-bold text-premium-red">{car.price.toLocaleString()} €</p>
                                        </div>

                                        {/* Especificaciones */}
                                        <div className="grid grid-cols-1 gap-3 mb-6">
                                            <div className="flex items-center">
                                                <div className="w-8 flex-shrink-0">
                                                    <Gauge className="h-4 w-4 text-cyan-500" />
                                                </div>
                                                <span className="text-white/70 text-sm">{car.power}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-8 flex-shrink-0">
                                                    <Calendar className="h-4 w-4 text-amber-500" />
                                                </div>
                                                <span className="text-white/70 text-sm">{car.year}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-8 flex-shrink-0">
                                                    <Car className="h-4 w-4 text-emerald-500" />
                                                </div>
                                                <span className="text-white/70 text-sm">{car.engine}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-8 flex-shrink-0">
                                                    <Fuel className="h-4 w-4 text-premium-red" />
                                                </div>
                                                <span className="text-white/70 text-sm">{car.fuel}</span>
                                            </div>
                                        </div>

                                        {/* Botón de detalles - siempre pegado al fondo - ahora sin fondo */}
                                        <div className="mt-auto">
                                            {car.status !== "vendido" ? (
                                                <Link href={`/car-detail?id=${car.id}`} className="block w-full">
                                                    <Button className="w-full bg-gradient-to-r from-premium-red to-orange-500 hover:from-premium-red/90 hover:to-orange-500/90 text-white">
                                                        Ver detalles
                                                    </Button>
                                                </Link>
                                            ) : (
                                                <Button
                                                    disabled
                                                    className="w-full bg-premium-gray-light/50 text-white/50 cursor-not-allowed backdrop-blur-sm"
                                                >
                                                    No disponible
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Botón "Mostrar más" */}
                        {filteredCars.length > visibleCount && (
                            <div className="mt-10 text-center">
                                <Button
                                    onClick={loadMoreCars}
                                    className="bg-gradient-to-r from-premium-red to-orange-500 hover:from-premium-red/90 hover:to-orange-500/90 text-white"
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


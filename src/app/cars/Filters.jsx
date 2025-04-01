import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { SheetClose } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { X, Fuel, Gauge, Calendar, Zap, Car } from "lucide-react"

export function CarFilters({ brands }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [filters, setFilters] = useState({
        brand: searchParams.get("brand") || "",
        minPrice: searchParams.get("minPrice") || "0",
        maxPrice: searchParams.get("maxPrice") || "500000",
        minYear: searchParams.get("minYear") || "2010",
        maxYear: searchParams.get("maxYear") || "2025",
        fuel: searchParams.get("fuelType") || "",
        minKm: "",
        maxKm: "",
        seats: "",
        carType: "",
        environmentLabel: "",
    })

    const fuels = ["Gasolina", "Diesel", "Híbrido", "Eléctrico"];

    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value }
        setFilters(newFilters)
    }

    const handleReset = () => {
        // Primero cerrar los filtros
        const closeButton = document.querySelector('[data-sheet-close]');
        if (closeButton) {
            closeButton.click();
        }
        
        // Resetear los filtros solo si hay parámetros de búsqueda
        if (searchParams.toString()) {
            router.push("/cars", { scroll: false });
        }
        
        // Resetear el estado local de los filtros
        setFilters({
            brand: "",
            minPrice: "0",
            maxPrice: "500000",
            minYear: "2010",
            maxYear: "2025",
            fuel: "",
            minKm: "",
            maxKm: "",
            seats: "",
            carType: "",
            environmentLabel: "",
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const params = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
            if (value) {
                params.set(key, value);
            }
        });

        router.push(`/cars?${params.toString()}`, { scroll: false });
    }

    const handleInputChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    }

    // Asegurarse de que el componente tenga una altura máxima y sea scrollable en dispositivos móviles

    return (
        <div className="overflow-y-auto h-full pb-20 bg-[#0A0A0A]">
            <form onSubmit={handleSubmit} className="space-y-6 p-6">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="brand" className="text-[#F0D78C] flex items-center text-base font-medium">
                            <Car className="h-4 w-4 mr-2" />
                            Marca
                        </Label>
                    </div>
                    <Select
                        value={filters.brand}
                        onValueChange={(value) => handleFilterChange("brand", value)}
                    >
                        <SelectTrigger className="w-full bg-[#151515] border border-[#D4A636]/30 text-white hover:border-[#D4A636]/50 focus:ring-[#D4A636]/30 focus:ring-offset-0 focus:border-[#D4A636]/50 shadow-sm">
                            <SelectValue placeholder="Todas las marcas" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#151515] border border-[#D4A636]/30 text-white">
                            <SelectItem value="all">Todas las marcas</SelectItem>
                            {brands.map((brand) => (
                                <SelectItem key={brand} value={brand.toLowerCase()}>
                                    {brand}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-4">
                    <Label className="text-[#F0D78C] flex items-center text-base font-medium">
                        <Zap className="h-4 w-4 mr-2" />
                        Precio
                    </Label>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="minPrice" className="text-white text-sm">
                                Mínimo
                            </Label>
                            <Input
                                id="minPrice"
                                name="minPrice"
                                placeholder="0"
                                value={filters.minPrice}
                                onChange={handleInputChange}
                                className="bg-[#151515] border border-[#D4A636]/30 text-white placeholder:text-white/50 hover:border-[#D4A636]/50 focus:ring-[#D4A636]/30 focus:ring-offset-0 focus:border-[#D4A636]/50 shadow-sm"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="maxPrice" className="text-white text-sm">
                                Máximo
                            </Label>
                            <Input
                                id="maxPrice"
                                name="maxPrice"
                                placeholder="500000"
                                value={filters.maxPrice}
                                onChange={handleInputChange}
                                className="bg-[#151515] border border-[#D4A636]/30 text-white placeholder:text-white/50 hover:border-[#D4A636]/50 focus:ring-[#D4A636]/30 focus:ring-offset-0 focus:border-[#D4A636]/50 shadow-sm"
                            />
                        </div>
                    </div>
                </div>
                <Separator className="bg-[#D4A636]/20" />
                <div className="space-y-4">
                    <Label className="text-[#F0D78C] flex items-center text-base font-medium">
                        <Calendar className="h-4 w-4 mr-2" />
                        Año
                    </Label>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="minYear" className="text-white text-sm">
                                Desde
                            </Label>
                            <Input
                                id="minYear"
                                name="minYear"
                                placeholder="2010"
                                value={filters.minYear}
                                onChange={handleInputChange}
                                className="bg-[#151515] border border-[#D4A636]/30 text-white placeholder:text-white/50 hover:border-[#D4A636]/50 focus:ring-[#D4A636]/30 focus:ring-offset-0 focus:border-[#D4A636]/50 shadow-sm"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="maxYear" className="text-white text-sm">
                                Hasta
                            </Label>
                            <Input
                                id="maxYear"
                                name="maxYear"
                                placeholder="2025"
                                value={filters.maxYear}
                                onChange={handleInputChange}
                                className="bg-[#151515] border border-[#D4A636]/30 text-white placeholder:text-white/50 hover:border-[#D4A636]/50 focus:ring-[#D4A636]/30 focus:ring-offset-0 focus:border-[#D4A636]/50 shadow-sm"
                            />
                        </div>
                    </div>
                </div>
                <Separator className="bg-[#D4A636]/20" />
                {/* <div className="space-y-4">
                    <Label className="text-[#D4A636] flex items-center text-base">
                        <Fuel className="h-4 w-4 mr-2" />
                        Combustible
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                        {fuels.map((fuel) => (
                            <div
                                key={fuel}
                                className={`flex items-center space-x-3 rounded-lg border ${filters.fuel === fuel.toLowerCase()
                                        ? "border-[#D4A636] bg-[#D4A636]/10"
                                        : "border-[#333] bg-[#222] hover:border-[#D4A636]/30"
                                    } p-3 cursor-pointer transition-all duration-200`}
                                onClick={() => handleFilterChange("fuel", filters.fuel === fuel.toLowerCase() ? "" : fuel.toLowerCase())}
                            >
                                <Checkbox
                                    checked={filters.fuel === fuel.toLowerCase()}
                                    className="border-[#D4A636]/50 data-[state=checked]:bg-[#D4A636] data-[state=checked]:text-black"
                                />
                                <Label className="text-white cursor-pointer">{fuel}</Label>
                            </div>
                        ))}
                    </div>
                </div> */}
                <Separator className="bg-[#D4A636]/20" />
                <div className="grid grid-cols-2 gap-12">
                    <Button 
                        type="submit" 
                        className="flex-1 bg-[#D4A636] hover:bg-[#F0D78C] text-black font-medium border-none h-12 shadow-md transition-colors"
                    >
                        Aplicar Filtros
                    </Button>
                    <Button
                        type="button"
                        onClick={handleReset}
                        className="flex-1 bg-transparent border border-[#D4A636]/40 text-[#F0D78C] hover:bg-[#D4A636]/10 hover:border-[#F0D78C] h-12 shadow-md transition-all"
                    >
                        <X className="h-4 w-4 mr-2" />
                        Limpiar Filtros
                    </Button>
                </div>
            </form>
        </div>
    )
}


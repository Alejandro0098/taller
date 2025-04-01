"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2 } from "lucide-react"

const isWeekday = (date) => {
    const day = date.getDay()
    return day !== 0 && day !== 6
}

const isTomorrow = (date) => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return date.toDateString() === tomorrow.toDateString()
}

export default function CraneRentalForm() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [formData, setFormData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [apiResponse, setApiResponse] = useState(null)
    const [failCounter, setFailCounter] = useState(0)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        setFormData(data)
        setIsDialogOpen(true)
    }

    const handleConfirm = async () => {
        if (formData) {
            setIsLoading(true)
            setIsDialogOpen(false)

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 3000))

            const success = failCounter % 2 === 0
            setFailCounter((prev) => prev + 1)

            if (success) {
                setApiResponse({
                    success: true,
                    message: "¡Gracias por su solicitud! Nos pondremos en contacto con usted pronto.",
                })
            } else {
                setApiResponse({
                    success: false,
                    message:
                        "Lo sentimos, ha ocurrido un error. Por favor, inténtelo de nuevo o póngase en contacto con nosotros directamente al +34 900 123 456.",
                })
            }

            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (apiResponse) {
            const timer = setTimeout(() => {
                setApiResponse(null)
            }, 5000)

            return () => clearTimeout(timer)
        }
    }, [apiResponse])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Label htmlFor="craneType">Tipo de Grúa</Label>
                    <Select onValueChange={(value) => register("craneType").onChange({ target: { value } })}>
                        <SelectTrigger>
                            <SelectValue placeholder="Seleccione un tipo de grúa" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="torre">Grúa Torre</SelectItem>
                            <SelectItem value="movil">Grúa Móvil</SelectItem>
                            <SelectItem value="telescopica">Grúa Telescópica</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.craneType && <p className="text-red-500 text-sm mt-1">{errors.craneType.message}</p>}
                </div>

                <div>
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" {...register("firstName", { required: "Este campo es obligatorio" })} />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>

                <div>
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" {...register("lastName", { required: "Este campo es obligatorio" })} />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>

                <div>
                    <Label htmlFor="phone">Teléfono de contacto</Label>
                    <Input
                        id="phone"
                        type="tel"
                        {...register("phone", {
                            required: "Este campo es obligatorio",
                            pattern: {
                                value: /^[0-9]{9}$/,
                                message: "Ingrese un número de teléfono válido (9 dígitos)",
                            },
                        })}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                    <Label htmlFor="email">Email de contacto</Label>
                    <Input
                        id="email"
                        type="email"
                        {...register("email", {
                            required: "Este campo es obligatorio",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Ingrese una dirección de correo electrónico válida",
                            },
                        })}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <Label htmlFor="address">Dirección de envío de la grúa</Label>
                    <Input id="address" {...register("address", { required: "Este campo es obligatorio" })} />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                </div>

                <div>
                    <Label htmlFor="date">Fecha de envío de la grúa</Label>
                    <Input
                        id="date"
                        type="date"
                        {...register("date", {
                            required: "Este campo es obligatorio",
                            validate: (value) => {
                                const selectedDate = new Date(value)
                                if (!isTomorrow(selectedDate) && !isWeekday(selectedDate)) {
                                    return "Seleccione un día laborable a partir de mañana"
                                }
                                return true
                            },
                        })}
                        min={(() => {
                            const tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            return tomorrow.toISOString().split("T")[0]
                        })()}
                    />
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
                </div>

                <div>
                    <Label htmlFor="companyName">Nombre de la empresa</Label>
                    <Input id="companyName" {...register("companyName", { required: "Este campo es obligatorio" })} />
                    {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
                </div>

                <div>
                    <Label htmlFor="projectDuration">Duración estimada del proyecto</Label>
                    <Input id="projectDuration" {...register("projectDuration", { required: "Este campo es obligatorio" })} />
                    {errors.projectDuration && <p className="text-red-500 text-sm mt-1">{errors.projectDuration.message}</p>}
                </div>

                <div>
                    <Label htmlFor="estimatedWeight">Peso estimado a levantar (en toneladas)</Label>
                    <Input
                        id="estimatedWeight"
                        type="number"
                        {...register("estimatedWeight", {
                            required: "Este campo es obligatorio",
                            min: {
                                value: 0,
                                message: "El peso debe ser un número positivo",
                            },
                        })}
                    />
                    {errors.estimatedWeight && <p className="text-red-500 text-sm mt-1">{errors.estimatedWeight.message}</p>}
                </div>
            </div>

            <div>
                <Label htmlFor="comments">Comentarios adicionales (opcional)</Label>
                <Textarea id="comments" {...register("comments")} />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900">
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                    </>
                ) : (
                    "Enviar solicitud"
                )}
            </Button>

            {apiResponse && (
                <Alert variant={apiResponse.success ? "default" : "destructive"}>
                    {apiResponse.success ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                    <AlertTitle>{apiResponse.success ? "Éxito" : "Error"}</AlertTitle>
                    <AlertDescription>{apiResponse.message}</AlertDescription>
                </Alert>
            )}

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Confirmar envío</DialogTitle>
                        <DialogDescription>¿Está seguro de que desea enviar la siguiente información?</DialogDescription>
                    </DialogHeader>
                    {formData && (
                        <div className="mt-4">
                            <p>
                                <strong>Tipo de Grúa:</strong> {formData.craneType}
                            </p>
                            <p>
                                <strong>Nombre:</strong> {formData.firstName} {formData.lastName}
                            </p>
                            <p>
                                <strong>Teléfono:</strong> {formData.phone}
                            </p>
                            <p>
                                <strong>Email:</strong> {formData.email}
                            </p>
                            <p>
                                <strong>Dirección:</strong> {formData.address}
                            </p>
                            <p>
                                <strong>Fecha:</strong> {formData.date}
                            </p>
                            <p>
                                <strong>Empresa:</strong> {formData.companyName}
                            </p>
                            <p>
                                <strong>Duración del proyecto:</strong> {formData.projectDuration}
                            </p>
                            <p>
                                <strong>Peso estimado:</strong> {formData.estimatedWeight} toneladas
                            </p>
                            {formData.comments && (
                                <p>
                                    <strong>Comentarios:</strong> {formData.comments}
                                </p>
                            )}
                        </div>
                    )}
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                            Cancelar
                        </Button>
                        <Button onClick={handleConfirm} className="bg-amber-500 hover:bg-amber-600 text-gray-900">
                            Confirmar y enviar
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </form>
    )
}


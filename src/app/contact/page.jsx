"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertOctagon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState(null) // null, 'submitting', 'success', 'error'
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [formData, setFormData] = useState(null)
  const [acceptTerms, setAcceptTerms] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  })

  // Función que se ejecuta cuando se valida el formulario
  const onValidSubmit = (data) => {
    if (!acceptTerms) {
      // Mostrar error si no se aceptan los términos
      setFormStatus('error-terms')
      return;
    }

    setFormData({ ...data, acceptTerms })
    setShowConfirmDialog(true)
  }

  // Función para enviar el formulario después de la confirmación
  const submitForm = async () => {
    setShowConfirmDialog(false)
    setFormStatus('submitting')
    setAcceptTerms(false) // Desmarcamos la casilla al enviar

    try {
      // Aquí iría la llamada real a tu API
      // Simulamos una llamada al backend
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulamos un 80% de éxito
          if (Math.random() > 0.2) {
            resolve()
          } else {
            reject(new Error("Error en el servidor"))
          }
        }, 1500)
      })

      setFormStatus('success')
      reset()
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setFormStatus('error')
      setAcceptTerms(false) // Desmarcamos la casilla también en caso de error
    }
  }

  return (
    <main className="relative min-h-screen">
      {/* Fondo más claro */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#1A1A1A]"></div>

      {/* Patrón sutil */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0,0 L40,40 M0,40 L40,0' stroke='%23C49735' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}>
      </div>

      {/* Efecto de luz sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,151,53,0.05),transparent_70%)]"></div>

      <div className="container mx-auto min-h-screen text-white px-4 lg:px-8 relative z-10">
        <section className="py-20">
          {/* Título */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 -mt-10 bg-[radial-gradient(ellipse_at_center,rgba(196,151,53,0.15),transparent_70%)]"></div>
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 relative z-10">
                <span className="text-[#C49735]">Contacta</span> con nosotros
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#C49735] to-[#E3BD77] rounded-full mb-6"></div>
            </div>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              Estamos aquí para responder a todas tus consultas. No dudes en ponerte en contacto con nosotros.
            </p>
          </div>


          {/* Contenido principal */}
          <div className="max-w-5xl mx-auto mb-20 space-y-12">
            {/* Información de contacto con diseño premium */}
            <div className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] rounded-xl border border-[#333]/40 p-8 shadow-lg relative overflow-hidden">
              {/* Efecto de luz sutil */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,151,53,0.15),transparent_70%)]"></div>

              <h2 className="text-3xl font-bold mb-12 text-white relative">
                <span className="text-[#C49735]">Información</span> de contacto
                <div className="h-1 w-20 bg-gradient-to-r from-[#C49735] to-[#E3BD77] rounded-full mt-4"></div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#C49735]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#C49735] transition-colors">
                      <MapPin className="h-6 w-6 text-[#C49735]" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl text-white font-medium mb-2">Dirección</h3>
                      <p className="text-white/70 leading-relaxed group-hover:text-white transition-colors">
                        Calle Principal 123<br />
                        28001 Madrid, España
                      </p>
                    </div>
                  </div>
                </div>

                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#C49735]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#C49735] transition-colors">
                      <Phone className="h-6 w-6 text-[#C49735]" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl text-white font-medium mb-2">Teléfono</h3>
                      <p className="text-white/70 leading-relaxed">
                        <a href="tel:+34123456789" className="hover:text-[#C49735] transition-colors">
                          +34 123 456 789
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#C49735]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#C49735] transition-colors">
                      <Mail className="h-6 w-6 text-[#C49735]" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl text-white font-medium mb-2">Email</h3>
                      <p className="text-white/70 leading-relaxed">
                        <a href="mailto:info@ejemplo.com" className="hover:text-[#C49735] transition-colors">
                          info@ejemplo.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#C49735]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#C49735] transition-colors">
                      <Clock className="h-6 w-6 text-[#C49735]" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl text-white font-medium mb-2">Horario</h3>
                      <div className="text-white/70 leading-relaxed space-y-1 group-hover:text-white transition-colors">
                        <p>Lunes - Viernes: 9:00 - 20:00</p>
                        <p>Sábado: 10:00 - 14:00</p>
                        <p>Domingo: Cerrado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Formulario */}
            <div className="bg-[#111111] rounded-xl border border-[#333]/40 p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-8 text-[#C49735]">Envíanos un mensaje</h2>

              <form onSubmit={handleSubmit(onValidSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                      Nombre*
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      {...register("name", {
                        required: "El nombre es obligatorio",
                        minLength: {
                          value: 2,
                          message: "El nombre debe tener al menos 2 caracteres"
                        }
                      })}
                      className={`bg-[#1A1A1A] border ${errors.name ? "border-red-500" : "border-[#333]/40"} text-white placeholder:text-white/40 focus:border-[#C49735]`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                      Email*
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Tu email"
                      {...register("email", {
                        required: "El email es obligatorio",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Email no válido"
                        }
                      })}
                      className={`bg-[#1A1A1A] border ${errors.email ? "border-red-500" : "border-[#333]/40"} text-white placeholder:text-white/40 focus:border-[#C49735]`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Tu teléfono"
                      {...register("phone")}
                      className="bg-[#1A1A1A] border border-[#333]/40 text-white placeholder:text-white/40 focus:border-[#C49735]"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                      Asunto*
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Asunto del mensaje"
                      {...register("subject", {
                        required: "El asunto es obligatorio",
                        minLength: {
                          value: 3,
                          message: "El asunto debe tener al menos 3 caracteres"
                        }
                      })}
                      className={`bg-[#1A1A1A] border ${errors.subject ? "border-red-500" : "border-[#333]/40"} text-white placeholder:text-white/40 focus:border-[#C49735]`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-red-500 text-xs">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Mensaje*
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                    {...register("message", {
                      required: "El mensaje es obligatorio",
                      minLength: {
                        value: 10,
                        message: "El mensaje debe tener al menos 10 caracteres"
                      }
                    })}
                    className={`bg-[#1A1A1A] border ${errors.message ? "border-red-500" : "border-[#333]/40"} text-white placeholder:text-white/40 resize-none focus:border-[#C49735]`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    checked={acceptTerms}
                    onChange={(e) => {
                      setAcceptTerms(e.target.checked)
                      if (formStatus === 'error-terms') {
                        setFormStatus(null)
                      }
                    }}
                    className="mt-1 w-4 h-4 accent-[#C49735]"
                  />
                  <div>
                    <label htmlFor="acceptTerms" className="text-sm text-white/70">
                      Acepto que mis datos sean almacenados y utilizados para contactarme según la <a href="#" className="text-[#C49735] hover:underline">Política de Privacidad</a>.*
                    </label>
                    {formStatus === 'error-terms' && (
                      <p className="mt-1 text-red-500 text-sm">Debes aceptar los términos para enviar el formulario</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-center">
                  {formStatus === 'success' ? (
                    <div className="bg-green-600 text-white py-2 px-3 rounded-md flex items-center space-x-2 text-sm">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.</span>
                    </div>
                  ) : formStatus === 'error' ? (
                    <div className="space-y-4">
                      <div className="bg-red-600 text-white py-2 px-3 rounded-md flex items-center space-x-2 text-sm">
                        <AlertOctagon className="h-4 w-4" />
                        <span>Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo nuevamente o contáctanos directamente.</span>
                      </div>
                      <div className="flex justify-center">
                        <Button
                          type="submit"
                          disabled={formStatus === 'submitting'}
                          className="bg-[#C49735] hover:bg-[#D4A636] text-black font-medium transition-colors px-6 py-2 text-sm"
                        >
                          {formStatus === 'submitting' ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Volver a intentar
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="bg-[#C49735] hover:bg-[#D4A636] text-black font-medium transition-colors px-6 py-2 text-sm"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Mapa */}
          <div className="max-w-5xl mx-auto mb-10 rounded-xl overflow-hidden border border-[#333]/40 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12140.403310389592!2d-3.683319399999999!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sco!4v1669558096315!5m2!1ses!2sco"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] border-0"
            ></iframe>
          </div>
        </section>
      </div>

      {/* Diálogo de confirmación */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="bg-[#111111] text-white border border-[#333]/40">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#C49735]">Confirmar envío</DialogTitle>
            <DialogDescription className="text-white/70">
              Al enviar este formulario, aceptas que almacenemos y procesemos tus datos para poder contactarte según nuestra política de privacidad.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-white/80 mb-4">Estás a punto de enviar la siguiente información:</p>
            <ul className="space-y-2 text-white/70">
              <li><span className="font-medium">Nombre:</span> {formData?.name}</li>
              <li><span className="font-medium">Email:</span> {formData?.email}</li>
              {formData?.phone && <li><span className="font-medium">Teléfono:</span> {formData?.phone}</li>}
              <li><span className="font-medium">Asunto:</span> {formData?.subject}</li>
            </ul>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-end mt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowConfirmDialog(false)}
              className="border-[#333] text-white hover:bg-[#1A1A1A] hover:text-white"
            >
              Cancelar
            </Button>
            <Button
              type="button"
              onClick={submitForm}
              className="bg-[#C49735] hover:bg-[#D4A636] text-black font-medium"
            >
              Confirmar y enviar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
} 
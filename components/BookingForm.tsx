'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CalendarIcon, Plane } from 'lucide-react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Calendar } from "./ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export default function BookingForm() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    tour: '',
    name: '',
    email: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ ...formData, date }) // Form submission
    setIsSubmitted(true)
  }

  return (
    <div
      className="
        absolute 
        bg-transparent 
        backdrop-blur-md 
        rounded-lg 
        shadow-lg 
        p-6 
        z-50 
        transform 
        translate-x-[-50%] 
        translate-y-[-50%]
        top-1/2 
        left-1/2
        md:left-auto 
        md:right-8 
        md:top-1/2
        md:w-1/3 
        w-[90%]
        min-w-[320px]
      "
    >
      <div className="max-w-sm mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8">
          <span className="text-sm font-semibold uppercase tracking-wide">Selecciona una fecha para explorar</span>
          <h2 className="text-2xl font-bold mt-2">Haz tu Reserva</h2>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold mb-2">¡Gracias por tu reserva!</h3>
            <p>Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Fecha */}
            <div className="space-y-2">
              <Label htmlFor="fecha">Fecha</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Selecciona una fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Opciones de Tour */}
            <div className="space-y-2">
              <Label htmlFor="tour-options">Opciones de Tour</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, tour: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un tour" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city-tour">City Tour</SelectItem>
                  <SelectItem value="adventure-trek">Adventure Trek</SelectItem>
                  <SelectItem value="beach-relax">Beach Relax</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Nombre */}
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input 
                id="nombre" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>

            {/* Correo Electrónico */}
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input 
                id="email" 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Reservar
              <Plane className="ml-2 h-4 w-4" />
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}


'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically handle the form submission
    // For this example, we'll just set the state to show a success message
    setIsSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contáctanos</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Ponte en contacto</CardTitle>
            <CardDescription>Nos encantaría saber de usted, así es como puede comunicarse con nosotros...</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span>info@hotumatur.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <span>+56 9 6730 1111</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span>Isla de Pascua, Chile</span>
            </div>
            <div className="pt-4">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Map"
                alt="Ubicacion en el mapa"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Envíanos un mensaje</CardTitle>
            <CardDescription> ¿Tienes preguntas sobre nuestros paquetes turísticos? Estamos aquí para ayudarte!</CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-green-600 mb-2">Muchas Gracias!</h3>
                <p>Su mensaje ha sido enviado exitosamente. ¡Nos comunicaremos contigo pronto!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">Primer Nombre</label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Apellido</label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="johndoe@example.com" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Teléfono (optional)</label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="travelInterest" className="text-sm font-medium">Estoy interesado/a en ...</label>
                  <Select>
                    <SelectTrigger id="travelInterest">
                      <SelectValue placeholder="Seleccione su interés de viaje" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beach">Vacaciones en la playa</SelectItem>
                      <SelectItem value="adventure">Tours de Aventura</SelectItem>
                      <SelectItem value="city">Escape de la ciudad</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                  <Textarea id="message" placeholder="Cuéntanos sobre las vacaciones de tus sueños..." required />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <label htmlFor="newsletter" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Suscríbete al boletín para ofertas exclusivas y consejos de viaje.
                  </label>
                </div>
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensaje
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Additional Information */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Por qué elegir la agencia de turismo Hotumatur?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Descuentos exclusivos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Obtenga acceso a tarifas y paquetes especiales disponibles solo para los suscriptores de nuestra lista de contactos.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Consejos de expertos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Nuestros especialistas en viajes están aquí para ayudarle a planificar el viaje perfecto adaptado a sus preferencias.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Soporte 24/7</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Viaje con tranquilidad sabiendo que nuestro equipo de soporte está siempre disponible para ayudarlo.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Sesión Fotográfica",
    image: "/placeholder.svg?height=300&width=400",
    link: "/servicios/foto"
  },
  {
    title: "Tour Guiado",
    image: "/placeholder.svg?height=300&width=400",
    link: "/servicios/tour"
  },
  {
    title: "Eventos Especiales",
    image: "/placeholder.svg?height=300&width=400",
    link: "/servicios/eventos"
  },
  {
    title: "Descanso y Relax",
    image: "/placeholder.svg?height=300&width=400",
    link: "/servicios/relax"
  },
  {
    title: "Kayak",
    image: "/placeholder.svg?height=300&width=400",
    link: "/servicios/kayak"
  },
  {
    title: "Vuelos Escénicos",
    image: "/placeholder.svg?height=300&width=400",
    link: "/servicios/vuelos"
  },
  {
    title: "Entretenimiento",
    image: "/placeholder.svg?height=300&width=400",
    link: "/servicios/entretenimiento"
  },
  {
    title: "Gastronomía Local",
    image: "/placeholder.svg?height=300&width=400",
    link: "/servicios/gastronomia"
  }
]

export default function Services() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-[#21b8c7]">
            Descubre Lo Que Ofrecemos
          </h2>
          <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            Nuestros Servicios
          </h3>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.title} href={service.link}>
              <Card className="group overflow-hidden bg-gray-900/50 transition-colors hover:bg-gray-900">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-white">
                      {service.title}
                    </h4>
                    <button className="mt-2 text-sm text-[#21b8c7]">
                      Ver Más
                    </button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


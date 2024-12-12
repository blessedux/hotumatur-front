import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function PlanTrip() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="grid gap-4">
              <Image
                src="https://backend.hotumatur.com/wp-content/uploads/2024/11/Mirador-Rano-Kau-scaled-1.jpg"
                alt="Vista desde el Mirador Rano Kau"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://backend.hotumatur.com/wp-content/uploads/2024/11/rapa-nui-tapati-1-1.png"
                  alt="Tapati Rapa Nui Festival"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
                <Image
                  src="https://backend.hotumatur.com/wp-content/uploads/2024/11/G0291580-scaled.webp"
                  alt="Vista submarina en Rapa Nui"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6 text-white">
            <h2 className="text-2xl font-semibold text-[#21b8c7]">
              Planifica Tu Viaje Con Nosotros
            </h2>
            <h3 className="text-3xl font-bold md:text-4xl">
              Descubre la Experiencia Única de Rapa Nui
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#21b8c7]/10 p-3">
                  <svg className="h-6 w-6 text-[#21b8c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Tours Exclusivos</h4>
                  <p className="text-gray-400">
                    Ofrecemos experiencias únicas y personalizadas para cada visitante
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#21b8c7]/10 p-3">
                  <svg className="h-6 w-6 text-[#21b8c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Seguridad Garantizada</h4>
                  <p className="text-gray-400">
                    Tu seguridad es nuestra prioridad en cada aventura
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#21b8c7]/10 p-3">
                  <svg className="h-6 w-6 text-[#21b8c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Guías Profesionales</h4>
                  <p className="text-gray-400">
                    Expertos locales con amplio conocimiento de la isla
                  </p>
                </div>
              </div>
            </div>
            <Button className="bg-[#21b8c7] hover:bg-[#21b8c7]/90">
              Conoce Más
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
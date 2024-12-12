import Image from "next/image"

const partners = [
  "/placeholder.svg?height=100&width=200",
  "/placeholder.svg?height=100&width=200",
  "/placeholder.svg?height=100&width=200",
  "/placeholder.svg?height=100&width=200",
  "/placeholder.svg?height=100&width=200",
  "/placeholder.svg?height=100&width=200",
]

export default function Partners() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="relative h-12 w-32">
              <Image
                src={partner}
                alt={`Partner ${index + 1}`}
                fill
                className="object-contain opacity-50 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


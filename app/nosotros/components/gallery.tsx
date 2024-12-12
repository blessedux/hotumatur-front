import Image from "next/image"

const gallery = [
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300"
]

export default function Gallery() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {gallery.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


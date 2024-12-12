import Image from "next/image"
import Link from "next/link"

const team = [
  {
    name: "Ana Pakarati",
    role: "Guía Turística",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Juan Tepano",
    role: "Guía Turístico",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "María Tuki",
    role: "Guía Turística",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  }
]

export default function Team() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-[#21b8c7]">
            Conoce a Nuestro Equipo
          </h2>
          <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            Guías Expertos
          </h3>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-lg bg-gray-900/50 p-6 text-center"
            >
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-white">{member.name}</h4>
              <p className="text-[#21b8c7]">{member.role}</p>
              <div className="mt-4 flex justify-center space-x-4">
                {Object.entries(member.social).map(([platform, url]) => (
                  <Link
                    key={platform}
                    href={url}
                    className="text-gray-400 hover:text-[#21b8c7]"
                  >
                    <span className="sr-only">{platform}</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


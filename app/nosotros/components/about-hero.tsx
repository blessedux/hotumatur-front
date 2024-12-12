export default function AboutHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/placeholder.svg?height=800&width=1600)',
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 flex h-full flex-col justify-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Nosotros
          </h1>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-300">
              <li>
                <a href="/" className="hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-white" aria-current="page">
                Nosotros
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  )
}


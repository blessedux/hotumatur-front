export default function ContactHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
     

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
 {/* Vimeo Background Video */}
 <div className="absolute inset-0 -z-10">
        <iframe
          src="https://player.vimeo.com/video/1038385534?autoplay=1&muted=1&loop=1&background=1"
          className="absolute inset-0 h-full w-full"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      {/* Content */}
      <div className="container relative z-10 flex h-full flex-col justify-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Contacto
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
                Contacto
              </li>
            </ol>
          </nav>
        
        </div>
      </div>
    </section>
  );
}
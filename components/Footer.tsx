'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden min-h-[600px] w-full">
   {/* Video Background */}
<div className="absolute inset-0 z-0 w-full h-full">
  {/* Overlay */}
  <div className="absolute inset-0 bg-emerald-950/70 z-10" />
  {/* Vimeo Embed */}
  <iframe
    src="https://player.vimeo.com/video/1037857996?autoplay=1&muted=1&loop=1&background=1"
    className="absolute top-0 left-0 w-full h-full object-cover"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    title="Footer Background Video"
  ></iframe>
</div>

      {/* Main Footer Content */}
      <div className="relative z-20 container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-12">
          {/* Location */}
          <div className="text-center">
            <p className="text-sm tracking-wider uppercase">
              Ubicados en Hanga Roa, Rapa Nui{' '}
              <Link
                href="/ubicacion"
                className="underline underline-offset-4 hover:text-emerald-300"
              >
                Ver en el mapa
              </Link>
            </p>
          </div>

          {/* Contact Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full max-w-4xl">
            <div>
              <h3 className="text-sm tracking-wider uppercase mb-2">Reservaciones</h3>
              <p className="text-2xl">+506 2222 3333</p>
            </div>
            <div>
              <h3 className="text-sm tracking-wider uppercase mb-2">WhatsApp</h3>
              <p className="text-2xl">+506 8888 9999</p>
            </div>
            <div>
              <h3 className="text-sm tracking-wider uppercase mb-2">Email</h3>
              <p className="text-lg">info@tuempresa.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex space-x-6">
            <Link
              href="#"
              className="hover:text-emerald-300 transition-colors"
              aria-label="TripAdvisor"
            >
              <img
                src="http://hotumatur.com/wp-content/uploads/2024/12/pngwing.com_.png"
                alt="TripAdvisor"
                className="w-6 h-6 sm:w-4 sm:h-4"
              />
            </Link>
            <Link
              href="#"
              className="hover:text-emerald-300 transition-colors"
              aria-label="Instagram"
            >
              <img
                src="http://hotumatur.com/wp-content/uploads/2024/12/instagram-icon-white-on-black-circle.png"
                alt="Instagram"
                className="w-8 h-6 sm:w-4 sm:h-4"
              />
            </Link>
            <Link
              href="#"
              className="hover:text-emerald-300 transition-colors"
              aria-label="TikTok"
            >
              <img
                src="http://hotumatur.com/wp-content/uploads/2024/12/e10e3f21d3b4e0f40b04b8fee7f40da4.png"
                alt="TikTok"
                className="w-6 h-6 sm:w-4 sm:h-4"
              />
            </Link>
          </div>

          {/* Logos Section */}
          <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
            <img
              src="http://hotumatur.com/wp-content/uploads/2024/12/selloR2x-300x300-1.png"
              alt="Logo 1"
              className="h-20 w-auto sm:h-12 object-contain"
            />
            <img
              src="http://hotumatur.com/wp-content/uploads/2024/12/logo-chilecompra-original.png"
              alt="Logo 2"
              className="h-20 w-auto sm:h-12 object-contain"
            />
            <img
              src="http://hotumatur.com/wp-content/uploads/2024/11/Hotumatur_header_logo.png"
              alt="Logo 3"
              className="h-20 w-auto sm:h-12 object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            <Link
              href="/contacto"
              className="text-sm uppercase tracking-wider hover:text-emerald-300 transition-colors"
            >
              Contacto
            </Link>
            <Link
              href="/nosotros"
              className="text-sm uppercase tracking-wider hover:text-emerald-300 transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/tours"
              className="text-sm uppercase tracking-wider hover:text-emerald-300 transition-colors"
            >
              Tours
            </Link>
          </nav>

          {/* Privacy Policy */}
          <div className="text-sm">
            <Link
              href="/privacidad"
              className="hover:text-emerald-300 transition-colors"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
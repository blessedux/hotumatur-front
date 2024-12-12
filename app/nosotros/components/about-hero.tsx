'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ContactHeroVideo() {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const videoScale = windowWidth < 768 ? '250%' : '150%'

  return (
    <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {/* Blurred background for gaps */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://vimeo.com/1038385534)`,
            filter: 'blur(10px)',
            transform: 'scale(1.1)',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Vimeo Embed */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1034629379?h=84c5313326&autoplay=1&loop=1&muted=1&background=1"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: videoScale,
              height: videoScale,
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover',
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Contact Hero Background Video"
          ></iframe>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Nosotros
        </h1>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-300" aria-current="page">
              Nosotros
            </li>
          </ol>
        </nav>
      </div>
    </section>
  )
}


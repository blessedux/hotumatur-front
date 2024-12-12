'use client'

import { useState, useEffect } from 'react'

export default function NosotrosHero() {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const videoScale = windowWidth < 768 ? '250%' : '150%'

  return (
    <section className="relative h-[70vh] min-h-[400px] w-full overflow-hidden text-white">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        {/* Blurred background fallback */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://vumbnail.com/1037857996.jpg)`,
            filter: 'blur(10px)',
            transform: 'scale(1.1)',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Vimeo Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1037857996?autoplay=1&muted=1&loop=1&background=1"
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
            title="Nosotros Hero Background Video"
          ></iframe>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex h-full flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Nosotros
        </h1>
        <p className="mt-4 text-lg max-w-3xl">
          Conoce nuestra historia, misión y lo que nos impulsa a ofrecer las mejores experiencias en Rapa Nui.
        </p>
      </div>
    </section>
  )
}
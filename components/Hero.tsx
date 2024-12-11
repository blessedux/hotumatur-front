'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import BookingForm from './BookingForm';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(0);
  const bookingRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);

    const timer = setTimeout(() => setIsVisible(true), 500);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && bookingRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const centerX = containerRect.left + containerRect.width / 2;
        const centerY = containerRect.top + containerRect.height / 2;

        const deltaX = (e.clientX - centerX) / 20; // Subtle movement
        const deltaY = (e.clientY - centerY) / 20; // Subtle movement

        setPosition({ x: deltaX, y: deltaY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const videoScale = windowWidth < 768 ? '250%' : '150%';

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen flex items-start justify-center pt-5 overflow-hidden"
    >
      {/* Fullscreen Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {/* Blurred background for gaps */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://vumbnail.com/1034629379.jpg)`,
            filter: 'blur(10px)',
            transform: 'scale(1.1)',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
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
            title="Hero Background Video"
          ></iframe>
        </div>
      </div>
  
      {/* Overlay Content */}
      <div className="relative z-20 w-full text-white px-4 h-full flex items-center">
        <Container className="h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 h-full">
            <div className="md:col-span-2 flex flex-col justify-center items-start text-left">
              <p className="mt-4 text-lg md:text-xl max-w-2xl font-satisfy text-2xl md:text-3xl">
                <Balancer>
                  Conoce la magia de Rapa Nui
                </Balancer>
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white mt-4">
                <Balancer>Aventuras Guiadas por Expertos Locales</Balancer>
              </h1>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/"><h4 className="text-white">Tours</h4></Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/posts" className="text-black">Reservar ahora &rarr;</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
  
      {/* Floating Booking Component with magnetic effect */}
      <div
        ref={bookingRef}
        className={`absolute right-4 lg:right-8 w-full max-w-md transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          top: 'calc(20% + 20px)',
          maxHeight: 'calc(100vh - 40px)',
          overflowY: 'auto',
        }}
      >
        <BookingForm />
      </div>
    </div>
  );
};

export default Hero;


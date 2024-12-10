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
  const bookingRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && bookingRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const bookingRect = bookingRef.current.getBoundingClientRect();
        
        const centerX = containerRect.left + containerRect.width / 2;
        const centerY = containerRect.top + containerRect.height / 2;
        
        const deltaX = (e.clientX - centerX) / 20; // Reduced divisor for subtler movement
        const deltaY = (e.clientY - centerY) / 20; // Reduced divisor for subtler movement

        setPosition({ x: deltaX, y: deltaY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen flex items-start justify-center pt-5"
    >
      {/* Fullscreen Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1034629379?h=84c5313326&autoplay=1&loop=1&muted=1&background=1"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover"
        ></iframe>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full text-center text-white px-4">
        <Container>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <Balancer>Aventuras Guiadas por Expertos Locales</Balancer>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            <Balancer>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Balancer>
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">Lorem Ipsum</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/posts">Dolor Sit Amet &rarr;</Link>
            </Button>
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
          top: 'calc(15% + 20px)',
          maxHeight: 'calc(100vh - 40px)',
          overflowY: 'auto'
        }}
      >
        <BookingForm />
      </div>
    </div>
  );
};

export default Hero;


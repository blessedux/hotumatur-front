'use client';

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import BookingForm from './BookingForm';

// Asset imports
import Logo from "@/public/logo.svg";

const Hero = () => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: "100vh", // Full viewport height
      }}
    >
      {/* Fullscreen Background Video */}
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/1034629379?h=84c5313326&autoplay=1&loop=1&muted=1&background=1"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the video fills the container
        }}
      ></iframe>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold">
          Aventuras Guiadas por Expertos Locales
        </h1>
        <p className="mt-4 text-lg">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="mt-6 flex gap-4">
          <Button asChild>
            <Link href="/">Lorem Ipsum</Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href="/posts">Dolor Sit Amet &rarr;</Link>
          </Button>
        </div>
        <BookingForm/>
      </div>
    </div>
  );
};

export default Hero;
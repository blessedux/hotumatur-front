'use client';

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";

// Asset imports
import Logo from "@/public/logo.svg";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Blurred Background Video */}
      <iframe
        src="https://player.vimeo.com/video/1034629379?autoplay=1&loop=1&muted=1&background=1"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>

      {/* Main Content */}
      <Section>
        <Container className="relative z-10 flex flex-col items-center text-center">
          <Image
            src={Logo}
            width={172}
            height={72}
            alt="Company Logo"
            className="not-prose mb-6 dark:invert md:mb-8"
          />
          <h1 className="!mb-0 text-white">
            <Balancer>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground text-white">
            <Balancer>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Balancer>
          </h3>
          <div className="not-prose mt-6 flex gap-2 md:mt-12">
            <Button asChild>
              <Link href="/">
                Lorem Ipsum
              </Link>
            </Button>
            <Button variant={"ghost"} asChild>
              <Link href="/posts">Dolor Sit Amet -{">"}</Link>
            </Button>
          </div>
        </Container>
      </Section>
    
  );

      {/* Main Content with Video */}
      <Section>
        <Container className="relative z-10 flex flex-col items-center text-center">
          <Image
            src={Logo}
            width={172}
            height={72}
            alt="Hotumatur Travel Agency Logo"
            className="not-prose mb-6 dark:invert md:mb-8"
          />
          <h1 className="!mb-0 text-white">
            <Balancer>
            Aventuras Guiadas por Expertos Locales
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground text-white">
            <Balancer>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Balancer>
          </h3>
          <div className="not-prose mt-6 flex gap-2 md:mt-12">
            <Button asChild>
              <Link href="/">
                Lorem Ipsum
              </Link>
            </Button>
            <Button variant={"ghost"} asChild>
              <Link href="/posts">Dolor Sit Amet -{">"}</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Hero;
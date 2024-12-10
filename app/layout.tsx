import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer";

import "./globals.css";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Main } from "@/components/craft";
import { mainMenu, contentMenu } from "@/menu.config";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

import Logo from "@/public/logo.svg";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hotumatur Agencia de Turismo en Rapa Nui",
  description:
    "Hotumatur transforma tu visita en Rapa Nui en una experiencia inolvidable: tours personalizados, historias ancestrales y compromiso con la excelencia en cada aventura.",
  metadataBase: new URL("https://hotumatur.com"),
};  

// Revalidate content every hour
export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn(
        "sticky z-50 top-0 bg-transparent", // Set background to transparent
        "border-b border-transparent", // Remove the border or make it transparent
        "fade-in",
        className
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-2 items-center"
          href="/"
        >
          <h2 className="sr-only">next-wp starter</h2>
          <Image
            src={Logo}
            alt="Logo"
            className="dark:invert"
            width={90}
            height={40.54}
          ></Image>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex items-center mt--4px">
            {/* Dropdown for "Tours" */}
            <div className="relative group">
              <Button variant="ghost" size="sm" className="relative">
                Tours
              </Button>
              <div
                className="absolute left-0 top-full hidden group-hover:flex flex-col bg-background border mt-2 p-2 rounded shadow-md z-50"
              >
                <Link
                  href="/tours/grupal"
                  className="px-4 py-2 hover:bg-muted rounded"
                >
                  Tour Grupal
                </Link>
                <Link
                  href="/tours/privado"
                  className="px-4 py-2 hover:bg-muted rounded"
                >
                  Tour Privado
                </Link>
                <div className="relative group">
                  <Button variant="ghost" size="sm" className="w-full text-left">
                    Tour Especial
                  </Button>
                  <div
                    className="absolute left-full top-0 hidden group-hover:flex flex-col bg-background border mt-0 p-2 rounded shadow-md z-50"
                  >
                    <Link
                      href="/tours/especial/corporativo"
                      className="px-4 py-2 hover:bg-muted rounded"
                    >
                      Corporativo
                    </Link>
                    <Link
                      href="/tours/especial/gira-de-estudios"
                      className="px-4 py-2 hover:bg-muted rounded"
                    >
                      Gira de Estudios
                    </Link>
                    <Link
                      href="/tours/especial/agencias"
                      className="px-4 py-2 hover:bg-muted rounded"
                    >
                      Agencias
                    </Link>
                    <Link
                      href="/tours/especial/tercera-edad"
                      className="px-4 py-2 hover:bg-muted rounded"
                    >
                      Tercera Edad
                    </Link>
                    <Link
                      href="/tours/especial/cruceros"
                      className="px-4 py-2 hover:bg-muted rounded"
                    >
                      Cruceros
                    </Link>
                    <Link
                      href="/tours/especial/vuelos-privados"
                      className="px-4 py-2 hover:bg-muted rounded"
                    >
                      Vuelos Privados
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Other Menu Items */}
            {Object.entries(mainMenu)
              .filter(([key]) => key !== "tours")
              .map(([key, href]) => (
                <Button key={href} asChild variant="ghost" size="sm">
                  <Link href={href}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Link>
                </Button>
              ))}
          </div>
          <Button asChild className="hidden sm:flex">
            <Link href="https://hotumatur.com/tours">Reservar Tour</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

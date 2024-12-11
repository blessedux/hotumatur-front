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

const Nav = ({ className, children, id }: { className?: string; children?: React.ReactNode; id?: string }) => {
  return (
    <nav
      className={cn(
        "sticky z-50 top-0 bg-white",
        "border-b border-gray-200",
        "fade-in",
        className
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-7xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        {/* Logo */}
        <Link
          className="hover:opacity-75 transition-all flex gap-2 items-center"
          href="/"
        >
          <h2 className="sr-only">Hotumatur</h2>
          <Image
            src={Logo}
            alt="Logo"
            className="dark:invert"
            width={90}
            height={40.54}
          />
        </Link>

        {/* Navegación */}
        <div className="flex items-center gap-8">
          {/* Dropdown para Tours */}
          <div className="relative group">
            <a href="/tours">
            <Button variant="ghost" size="sm" className="relative flex items-center gap-2">
              Tours
              <span className="text-gray-500 group-hover:rotate-180 transition-transform duration-200">
                ▼
              </span>
            </Button>
            </a>
            <div
              className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white border mt-0 p-2 rounded shadow-md z-50"
            >
              <Link
                href="/tours/grupal"
                className="px-4 py-2 hover:bg-gray-100 rounded"
              >
                Tour Grupal
              </Link>
              <Link
                href="/tours/privado"
                className="px-4 py-2 hover:bg-gray-100 rounded"
              >
                Tour Privado
              </Link>
              <div className="relative group">
                <Button variant="ghost" size="sm" className="w-full text-left flex items-center gap-2">
                  Tour Especial
                  <span className="text-gray-500 group-hover:rotate-0 transition-transform duration-200">
                  ►
                  </span>
                </Button>
                <div
                  className="absolute left-full top-0 hidden group-hover:flex flex-col bg-white border mt-0 p-2 rounded shadow-md z-50"
                >
                  <Link
                    href="/tours/especial/corporativo"
                    className="px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    Corporativo
                  </Link>
                  <Link
                    href="/tours/especial/gira-de-estudios"
                    className="px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    Gira de Estudios
                  </Link>
                  <Link
                    href="/tours/especial/agencias"
                    className="px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    Agencias
                  </Link>
                  <Link
                    href="/tours/especial/tercera-edad"
                    className="px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    Tercera Edad
                  </Link>
                  <Link
                    href="/tours/especial/cruceros"
                    className="px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    Cruceros
                  </Link>
                  <Link
                    href="/tours/especial/vuelos-privados"
                    className="px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    Vuelos Privados
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Otros Enlaces */}
          <Link
            href="/nosotros"
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
          >
            Contacto
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
          >
            Blog
          </Link>

          {/* Botón Reservar */}
          <Button asChild className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            <Link href="/reservar">Reservar Tour</Link>
          </Button>
        </div>

        {/* Menú Móvil */}
        <MobileNav />
      </div>
    </nav>
  );
};

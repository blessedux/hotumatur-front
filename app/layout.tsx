import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer";
import { ClientNav } from "../components/nav/ClientNav";

import "./globals.css";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Logo from "@/public/logo.svg";

import Image from "next/image";
import Link from "next/link";

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
          <ClientNav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}


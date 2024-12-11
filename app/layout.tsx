import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Satisfy as FontSatisfy } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer";
import { ClientNav } from "../components/nav/ClientNav";

import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSatisfy = FontSatisfy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-satisfy",
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
        className={cn("min-h-screen font-sans antialiased", fontSans.variable, fontSatisfy.variable)}
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
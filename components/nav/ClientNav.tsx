"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";

export const ClientNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky z-50 top-0 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link
          className="hover:opacity-75 transition-all flex gap-2 items-center"
          href="/"
        >
          <Image
            src={Logo}
            alt="Logo"
            className="dark:invert"
            width={90}
            height={40.54}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
        <Link
            href="/tours"
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
          >
            Tours
          </Link>

          <Link
            href="/rentals"
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
          >
            Rentals
          </Link>
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
          <Button asChild className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            <Link href="/reservar">Reservar Tour</Link>
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <Button
          variant="ghost"
          className="md:hidden "
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <Link
            href="/tours"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tours
          </Link>
          <Link
            href="/nosotros"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contacto
          </Link>
          <Link
            href="/blog"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/reservar"
            className="block px-4 py-2 bg-black text-white text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Reservar Tour
          </Link>
        </div>
      )}
    </nav>
  );
};

const DropdownMenu = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <Button
        variant="ghost"
        size="sm"
        className="relative flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <span className="text-gray-500 group-hover:rotate-180 transition-transform duration-200">
          ▼
        </span>
      </Button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 flex flex-col bg-white border p-2 rounded shadow-md z-50">
          {children}
        </div>
      )}
    </div>
  );
};

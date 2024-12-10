'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex flex-wrap justify-center gap-8 p-4 bg-white shadow">
      <Link
        href="/contacto"
        className="text-sm uppercase tracking-wider hover:text-emerald-300 transition-colors"
      >
        Contacto
      </Link>
      <Link
        href="/nosotros"
        className="text-sm uppercase tracking-wider hover:text-emerald-300 transition-colors"
      >
        Nosotros
      </Link>
      <Link
        href="/tours"
        className="text-sm uppercase tracking-wider hover:text-emerald-300 transition-colors"
      >
        Tours
      </Link>
      <Link
        href="/page"
        className="text-sm uppercase tracking-wider hover:text-emerald-300 transition-colors"
      >
        Page
      </Link>
      <Link
        href="/tour-package"
        className="text-sm uppercase tracking-wider hover:text-emerald-300 transition-colors"
      >
        Tour Package
      </Link>
      <Link
        href="/tours/privado"
        className="text-sm uppercase tracking-wider hover:text-emerald-300 transition-colors"
      >
        Tour Privado
      </Link>
      <Link
        href="/tours/grupal"
        className="text-sm uppercase tracking-wider hover:text-emerald-300 transition-colors"
      >
        Tour Grupal
      </Link>
      {/* Add more links as needed */}
    </nav>
  );
}
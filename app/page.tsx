'use client'

// Craft Imports
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Hero from "../components/Hero"; // Import the Hero component  
import TourGallery from "../components/TourGallery";
import { useState } from 'react'

// New Components for Cart Functionality
import { ProductList } from '../components/ProductList';
import { CartProvider } from '../components/CartProvider';
import { CartButton } from '../components/CartButton';
import { SideCart } from '../components/SideCart';

// Components
import Link from "next/link";
import Navigation from '../components/nav/Navigation'; // Import the Navigation component

// Icons
import { File, Pen, Tag, Boxes, User, Folder } from "lucide-react";

// This page is using the craft.tsx component and design system
export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>

      {/* Hero Section */}
      <Hero />
      <TourGallery />

      {/* WooCommerce Product Section */}
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">WooCommerce Products</h1>
        <ProductList />

        {/* Cart Button */}
        <CartButton onClick={() => setIsCartOpen(true)} />

        {/* Side Cart */}
        <SideCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </main>

      {/* WordPress Buttons Section */}
      <Section>
        <Container>
          <ExampleJsx />
        </Container>
      </Section>
    </CartProvider>
  );
}

// WordPress Buttons Section
const ExampleJsx = () => {
  return (
    <article className="prose-m-none">
      <div className="grid md:grid-cols-3 gap-4 mt-6 not-prose">
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts"
        >
          <Pen size={32} />
          <span>
            Posts{" "}
            <span className="block text-sm text-muted-foreground">
              All posts from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/pages"
        >
          <File size={32} />
          <span>
            Pages{" "}
            <span className="block text-sm text-muted-foreground">
              Custom pages from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/authors"
        >
          <User size={32} />
          <span>
            Authors{" "}
            <span className="block text-sm text-muted-foreground">
              List of the authors from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/tags"
        >
          <Tag size={32} />
          <span>
            Tags{" "}
            <span className="block text-sm text-muted-foreground">
              Content by tags from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/categories"
        >
          <Boxes size={32} />
          <span>
            Categories{" "}
            <span className="block text-sm text-muted-foreground">
              Categories from your WordPress
            </span>
          </span>
        </Link>
        <a
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="https://github.com/9d8dev/next-wp"
        >
          <Folder size={32} />
          <span>
            Documentation{" "}
            <span className="block text-sm text-muted-foreground">
              How to use `next-wp`
            </span>
          </span>
        </a>
      </div>
    </article>
  );
};
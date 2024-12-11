'use client';

import React, { useEffect, useState } from "react";
import { fetchProducts } from "../lib/products";
import { Loader2 } from 'lucide-react';
import TourCard from './TourCard';

interface Product {
  id: number;
  name: string;
  price: string;
  images: { src: string }[];
  short_description: string;
}

const TourGallery = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setError(null);
      } catch (err: any) {
        setError("Failed to load tours. Please try again later.");
        console.error("Error fetching products:", err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Tour Packages</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <TourCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.images[0]?.src || ''}
                description={product.short_description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TourGallery;


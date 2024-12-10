'use client';

import React, { useEffect, useState } from "react";
import { fetchProducts } from "@/lib/wordpress";

const TourGallery = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err: any) {
        setError("Failed to load tours. Please try again later.");
        console.error(err.message);
      }
    };

    getProducts();
  }, []);

  return (
    <section className="py-12 bg-white text-center">
      <div className="container mx-auto">
        {/* Subtitle */}
        <h3 className="text-xl font-semibold text-blue-600">Tours de aventura</h3>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mt-2 mb-6">
          Explora la isla con guías locales
        </h1>

        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Carousel */}
        <div className="flex gap-4 overflow-x-auto px-6 md:px-0 scrollbar-hide">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="w-60 bg-white shadow-md rounded-lg overflow-hidden flex-shrink-0"
            >
              <img
                src={product.images[0]?.src || "/placeholder.jpg"}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-blue-600 mt-2 cursor-pointer hover:underline">
                  {product.price ? `$${product.price}` : "Consultar"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourGallery;
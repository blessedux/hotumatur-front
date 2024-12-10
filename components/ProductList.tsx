'use client';

import React, { useEffect, useState } from 'react';
import { useCart } from './CartProvider';
import { Button } from "@/components/ui/button";

export function ProductList() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products'); // Fetch from your proxy API
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();

        // Filter products by category "Rental" (case-insensitive)
        const rentalProducts = data.filter((product: any) =>
          product.categories.some((category: any) =>
            category.name.toLowerCase() === 'rental'
          )
        );

        setProducts(rentalProducts);
      } catch (err: any) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (products.length === 0) {
    return <p className="text-gray-600">No products found in "Rentals" category.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product: any) => (
        <div key={product.id} className="border p-4 rounded-lg">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <Button
            onClick={() => addToCart({ id: product.id, name: product.name, price: product.price })}
            className="mt-2"
          >
            Add to Cart
          </Button>
        </div>
      ))}
    </div>
  );
}
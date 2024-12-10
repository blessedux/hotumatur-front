'use client';

import React, { useEffect, useState } from 'react';
import { useCart } from './CartProvider';
import { Button } from "@/components/ui/button";
import { fetchProducts } from '@/lib/wordpress'; // Import the fetchProducts function

// Define interfaces for products and categories
interface Category {
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: string | null;
  categories?: Category[];
}

export function ProductList() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data: Product[] = await fetchProducts(); // Fetch products from WooCommerce

        // Filter products by category "Rental" (case-insensitive)
        const rentalProducts = data.filter((product) =>
          product.categories?.some((category) =>
            category.name?.toLowerCase() === 'rental'
          )
        );

        setProducts(rentalProducts);
      } catch (err: any) {
        console.error("Error fetching products:", err);
        setError(
          process.env.NODE_ENV === "development"
            ? `Error fetching products: ${err.message}`
            : "Failed to load products. Please try again later."
        );
      }
    };

    getProducts();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (products.length === 0) {
    return <p className="text-gray-600">No products found in &quot;Rentals&quot; category.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">
            ${product.price ? parseFloat(product.price).toFixed(2) : "N/A"}
          </p>
          <Button
            onClick={() =>
              addToCart({ id: product.id, name: product.name, price: product.price || 0 })
            }
            className="mt-2"
          >
            Add to Cart
          </Button>
        </div>
      ))}
    </div>
  );
}
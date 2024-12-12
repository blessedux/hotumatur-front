'use client';

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data.reviews || []); // Ensure it uses the reviews array
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-[#21b8c7]">
            Testimonios
          </h2>
          <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            Lo Que Dicen Nuestros Clientes
          </h3>
        </div>

        {/* Loading and Error States */}
        {isLoading && <p className="text-center text-white">Cargando testimonios...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {!isLoading &&
            reviews.map((review) => (
              <Card key={review.id} className="bg-gray-900/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={review.user?.profile_image || "/placeholder.svg"}
                      alt={review.user?.name || "Anonymous"}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{review.user?.name || "Anonymous"}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-400">{review.text}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
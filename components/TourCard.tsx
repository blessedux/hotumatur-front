import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface TourCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

const TourCard: React.FC<TourCardProps> = ({ id, name, price, image, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image || '/placeholder-tour.jpg'}
          alt={name || 'Tour package'}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {name || 'Exciting Tour Package'}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">
            {price ? `$${price}` : 'Contact for price'}
          </span>
          <Button variant="outline">View Details</Button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;


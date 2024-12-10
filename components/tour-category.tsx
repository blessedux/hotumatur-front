import React from "react";

export interface Tour {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface TourCategoryProps {
  categoryName: string;
  tours: Tour[];
}

const TourCategory: React.FC<TourCategoryProps> = ({ categoryName, tours }) => {
  return (
    <div className="tour-category">
      <h2 className="text-2xl font-bold mb-4">{categoryName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div key={tour.id} className="tour-card border p-4 rounded-lg shadow-md">
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{tour.name}</h3>
            <p className="text-gray-600">{tour.description}</p>
            <p className="text-blue-500 font-bold mt-2">${tour.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourCategory;

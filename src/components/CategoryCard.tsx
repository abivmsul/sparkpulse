// src/components/CategoryCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  image: string;
  name: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, name, link }) => (
  <Link to={link} className="block overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4 bg-white">
      <h3 className="text-xl text-center font-semibold text-gray-800">{name}</h3>
    </div>
  </Link>
);

export default CategoryCard;

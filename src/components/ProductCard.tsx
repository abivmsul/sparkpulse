// src/components/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { type Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Link to={`/products/${product.id}`} className="block bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transform hover:-translate-y-1 transition">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="mt-2 text-gray-600">${product.price.toFixed(2)}</p>
    </div>
  </Link>
);

export default ProductCard;

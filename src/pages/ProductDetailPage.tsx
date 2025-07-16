// src/pages/ProductDetailPage.tsx
import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState<string>(product?.image || '');
  const [quantity, setQuantity] = useState<number>(1);
  const [openSection, setOpenSection] = useState<'desc' | 'specs' | null>(null);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto p-4 text-center text-gray-500">
        Product not found.
      </div>
    );
  }

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="pb-24"> {/* less bottom padding */}
      {/* Breadcrumb */}
      <nav className="max-w-3xl mx-auto px-4 py-2 text-xs text-gray-500">
        <Link to="/" className="hover:underline">Home</Link> /{' '}
        <Link to="/products" className="hover:underline">Products</Link> /{' '}
        <span className="text-gray-800">{product.name}</span>
      </nav>

      {/* Gallery & Info */}
      <div className="max-w-3xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Image Gallery */}
        <div>
          <div className="h-64 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
            <img
              src={selectedImage}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-2 flex space-x-2">
            {[product.image].map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-12 h-12 rounded overflow-hidden border ${
                  selectedImage === img ? 'border-blue-500' : 'border-gray-300'
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} thumb`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-2">
          <h1 className="text-xl font-semibold text-gray-800">{product.name}</h1>
          <p className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
          <p className="text-xs text-gray-500">
            SKU: <span className="text-gray-700">{product.id}</span>
          </p>
          <p className="text-xs text-green-600">In Stock</p>

          {/* Quantity & Accordion side-by-side on md+ */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            {/* Quantity Selector */}
            <div className="flex items-center space-x-2 mb-4 md:mb-0 text-sm">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-6 h-6 flex items-center justify-center border rounded"
              >−</button>
              <span className="px-2 text-gray-800">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-6 h-6 flex items-center justify-center border rounded"
              >+</button>
            </div>

            {/* Accordion */}
            <div className="flex-1 space-y-1 text-sm">
              {(['desc', 'specs'] as const).map(section => (
                <div key={section} className="border rounded overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenSection(openSection === section ? null : section)
                    }
                    className="w-full text-left px-3 py-2 bg-gray-50 flex justify-between items-center"
                  >
                    <span className="font-medium text-gray-800">
                      {section === 'desc' ? 'Description' : 'Specifications'}
                    </span>
                    <span className={`transform transition-transform ${openSection === section ? 'rotate-180' : ''}`}>
                      ▾
                    </span>
                  </button>
                  {openSection === section && (
                    <div className="p-2 bg-white text-gray-700">
                      {section === 'desc' ? (
                        <p className="text-xs">{product.description || 'No description.'}</p>
                      ) : (
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>Dimension: 30×20×2 cm</li>
                          <li>Weight: 1.2 kg</li>
                          <li>Material: Aluminum Alloy</li>
                        </ul>
                      )}
                    </div>
                  )}
                </div>
                
              ))}
              <button
            onClick={handleAdd}
            className="w-auto sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded transition"
          >
            {/* Add {quantity} to Cart */}
            Add to Cart
          </button>
            </div>
          </div>
          
        </div>
      </div>

    
    </div>
  );
}

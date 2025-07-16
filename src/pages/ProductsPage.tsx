// src/pages/ProductsPage.tsx
import { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, type Product } from '../data/products';

const categories = ['All', 'laptops', 'desktops', 'accessories'];

export default function ProductsPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCat = params.get('cat') || 'All';

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCat, setActiveCat] = useState(initialCat);
  const [sortOrder, setSortOrder] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  // Filter & sort
  const filtered = useMemo(() => {
    let list = products;

    if (activeCat !== 'All') {
      list = list.filter(p => p.category === activeCat);
    }
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(term));
    }
    if (sortOrder === 'price-asc') {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      list = [...list].sort((a, b) => b.price - a.price);
    }
    return list;
  }, [activeCat, searchTerm, sortOrder]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/">Home</Link> / <span className="text-gray-800">Products</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-1/6 space-y-6">
          {/* Search */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Search</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-4.35-4.35m0 0a7 7 0 111.414-1.414L21 21z"/>
              </svg>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Categories</h2>
            <ul className="space-y-1">
              {categories.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      setActiveCat(cat);
                      setSearchTerm('');
                    }}
                    className={`block w-full text-left text-sm py-1 px-2 rounded-md ${
                      activeCat === cat
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sort */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Sort By</h2>
            <select
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value as any)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </aside>

        {/* Main Grid */}
        <section className="flex-1">
          {filtered.length ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </section>
      </div>
    </div>
  );
}
